// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#display_name DedicatedCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the cluster is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#paused DedicatedCluster#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The port used for accessing the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#port DedicatedCluster#port}
  */
  readonly port?: number;
  /**
  * The ID of the project. When not provided, the default project will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#project_id DedicatedCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * The region where the cluster is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#region_id DedicatedCluster#region_id}
  */
  readonly regionId: string;
  /**
  * The root password to access the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#root_password DedicatedCluster#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Settings for TiDB nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#tidb_node_setting DedicatedCluster#tidb_node_setting}
  */
  readonly tidbNodeSetting: DedicatedClusterTidbNodeSetting;
  /**
  * Settings for TiFlash nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#tiflash_node_setting DedicatedCluster#tiflash_node_setting}
  */
  readonly tiflashNodeSetting?: DedicatedClusterTiflashNodeSetting;
  /**
  * Settings for TiKV nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#tikv_node_setting DedicatedCluster#tikv_node_setting}
  */
  readonly tikvNodeSetting: DedicatedClusterTikvNodeSetting;
}
export interface DedicatedClusterPausePlan {
}

export function dedicatedClusterPausePlanToTerraform(struct?: DedicatedClusterPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedClusterPausePlanToHclTerraform(struct?: DedicatedClusterPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedClusterPausePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterPausePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterPausePlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pause_type - computed: true, optional: false, required: false
  public get pauseType() {
    return this.getStringAttribute('pause_type');
  }

  // scheduled_resume_time - computed: true, optional: false, required: false
  public get scheduledResumeTime() {
    return this.getStringAttribute('scheduled_resume_time');
  }
}
export interface DedicatedClusterTidbNodeSettingEndpoints {
}

export function dedicatedClusterTidbNodeSettingEndpointsToTerraform(struct?: DedicatedClusterTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedClusterTidbNodeSettingEndpointsToHclTerraform(struct?: DedicatedClusterTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedClusterTidbNodeSettingEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedClusterTidbNodeSettingEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTidbNodeSettingEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DedicatedClusterTidbNodeSettingEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DedicatedClusterTidbNodeSettingEndpointsOutputReference {
    return new DedicatedClusterTidbNodeSettingEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct {
}

export function dedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToTerraform(struct?: DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToHclTerraform(struct?: DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // cidr_notation - computed: true, optional: false, required: false
  public get cidrNotation() {
    return this.getStringAttribute('cidr_notation');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructList extends cdktf.ComplexList {
  public internalValue? : DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference {
    return new DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedClusterTidbNodeSettingPublicEndpointSetting {
  /**
  * Whether public endpoint is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#enabled DedicatedCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP access list for the public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#ip_access_list DedicatedCluster#ip_access_list}
  */
  readonly ipAccessList?: DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable;
}

export function dedicatedClusterTidbNodeSettingPublicEndpointSettingToTerraform(struct?: DedicatedClusterTidbNodeSettingPublicEndpointSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_access_list: cdktf.listMapper(dedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToTerraform, false)(struct!.ipAccessList),
  }
}


export function dedicatedClusterTidbNodeSettingPublicEndpointSettingToHclTerraform(struct?: DedicatedClusterTidbNodeSettingPublicEndpointSetting | cdktf.IResolvable): any {
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
    ip_access_list: {
      value: cdktf.listMapperHcl(dedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToHclTerraform, false)(struct!.ipAccessList),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedClusterTidbNodeSettingPublicEndpointSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterTidbNodeSettingPublicEndpointSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipAccessList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccessList = this._ipAccessList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTidbNodeSettingPublicEndpointSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipAccessList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipAccessList.internalValue = value.ipAccessList;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // ip_access_list - computed: true, optional: true, required: false
  private _ipAccessList = new DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
  public putIpAccessList(value: DedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct[] | cdktf.IResolvable) {
    this._ipAccessList.internalValue = value;
  }
  public resetIpAccessList() {
    this._ipAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessListInput() {
    return this._ipAccessList.internalValue;
  }
}
export interface DedicatedClusterTidbNodeSettingTiproxySetting {
  /**
  * The number of TiProxy nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_count DedicatedCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The key of the node spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_spec_key DedicatedCluster#node_spec_key}
  */
  readonly nodeSpecKey: string;
}

export function dedicatedClusterTidbNodeSettingTiproxySettingToTerraform(struct?: DedicatedClusterTidbNodeSettingTiproxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_spec_key: cdktf.stringToTerraform(struct!.nodeSpecKey),
  }
}


export function dedicatedClusterTidbNodeSettingTiproxySettingToHclTerraform(struct?: DedicatedClusterTidbNodeSettingTiproxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_spec_key: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedClusterTidbNodeSettingTiproxySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterTidbNodeSettingTiproxySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSpecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecKey = this._nodeSpecKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTidbNodeSettingTiproxySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSpecKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSpecKey = value.nodeSpecKey;
    }
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

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: false, optional: false, required: true
  private _nodeSpecKey?: string; 
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }
  public set nodeSpecKey(value: string) {
    this._nodeSpecKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecKeyInput() {
    return this._nodeSpecKey;
  }

  // node_spec_version - computed: true, optional: false, required: false
  public get nodeSpecVersion() {
    return this.getStringAttribute('node_spec_version');
  }
}
export interface DedicatedClusterTidbNodeSetting {
  /**
  * The number of nodes in the default node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_count DedicatedCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The key of the node spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_spec_key DedicatedCluster#node_spec_key}
  */
  readonly nodeSpecKey: string;
  /**
  * Settings for public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#public_endpoint_setting DedicatedCluster#public_endpoint_setting}
  */
  readonly publicEndpointSetting?: DedicatedClusterTidbNodeSettingPublicEndpointSetting;
  /**
  * Settings for TiProxy nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#tiproxy_setting DedicatedCluster#tiproxy_setting}
  */
  readonly tiproxySetting?: DedicatedClusterTidbNodeSettingTiproxySetting;
}

export function dedicatedClusterTidbNodeSettingToTerraform(struct?: DedicatedClusterTidbNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_spec_key: cdktf.stringToTerraform(struct!.nodeSpecKey),
    public_endpoint_setting: dedicatedClusterTidbNodeSettingPublicEndpointSettingToTerraform(struct!.publicEndpointSetting),
    tiproxy_setting: dedicatedClusterTidbNodeSettingTiproxySettingToTerraform(struct!.tiproxySetting),
  }
}


export function dedicatedClusterTidbNodeSettingToHclTerraform(struct?: DedicatedClusterTidbNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_spec_key: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_endpoint_setting: {
      value: dedicatedClusterTidbNodeSettingPublicEndpointSettingToHclTerraform(struct!.publicEndpointSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedClusterTidbNodeSettingPublicEndpointSetting",
    },
    tiproxy_setting: {
      value: dedicatedClusterTidbNodeSettingTiproxySettingToHclTerraform(struct!.tiproxySetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedClusterTidbNodeSettingTiproxySetting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedClusterTidbNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterTidbNodeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSpecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecKey = this._nodeSpecKey;
    }
    if (this._publicEndpointSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicEndpointSetting = this._publicEndpointSetting?.internalValue;
    }
    if (this._tiproxySetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tiproxySetting = this._tiproxySetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTidbNodeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSpecKey = undefined;
      this._publicEndpointSetting.internalValue = undefined;
      this._tiproxySetting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSpecKey = value.nodeSpecKey;
      this._publicEndpointSetting.internalValue = value.publicEndpointSetting;
      this._tiproxySetting.internalValue = value.tiproxySetting;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DedicatedClusterTidbNodeSettingEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // is_default_group - computed: true, optional: false, required: false
  public get isDefaultGroup() {
    return this.getBooleanAttribute('is_default_group');
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

  // node_group_display_name - computed: true, optional: false, required: false
  public get nodeGroupDisplayName() {
    return this.getStringAttribute('node_group_display_name');
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: false, optional: false, required: true
  private _nodeSpecKey?: string; 
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }
  public set nodeSpecKey(value: string) {
    this._nodeSpecKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecKeyInput() {
    return this._nodeSpecKey;
  }

  // public_endpoint_setting - computed: true, optional: true, required: false
  private _publicEndpointSetting = new DedicatedClusterTidbNodeSettingPublicEndpointSettingOutputReference(this, "public_endpoint_setting");
  public get publicEndpointSetting() {
    return this._publicEndpointSetting;
  }
  public putPublicEndpointSetting(value: DedicatedClusterTidbNodeSettingPublicEndpointSetting) {
    this._publicEndpointSetting.internalValue = value;
  }
  public resetPublicEndpointSetting() {
    this._publicEndpointSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointSettingInput() {
    return this._publicEndpointSetting.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tiproxy_setting - computed: false, optional: true, required: false
  private _tiproxySetting = new DedicatedClusterTidbNodeSettingTiproxySettingOutputReference(this, "tiproxy_setting");
  public get tiproxySetting() {
    return this._tiproxySetting;
  }
  public putTiproxySetting(value: DedicatedClusterTidbNodeSettingTiproxySetting) {
    this._tiproxySetting.internalValue = value;
  }
  public resetTiproxySetting() {
    this._tiproxySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiproxySettingInput() {
    return this._tiproxySetting.internalValue;
  }
}
export interface DedicatedClusterTiflashNodeSetting {
  /**
  * The number of nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_count DedicatedCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The node specification key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_spec_key DedicatedCluster#node_spec_key}
  */
  readonly nodeSpecKey: string;
  /**
  * The IOPS of raft store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#raft_store_iops DedicatedCluster#raft_store_iops}
  */
  readonly raftStoreIops?: number;
  /**
  * The storage size in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#storage_size_gi DedicatedCluster#storage_size_gi}
  */
  readonly storageSizeGi: number;
  /**
  * The storage type.- Basic: Data disk: gp3; Raft log disk: none.- Standard: Data disk: gp3; Raft log disk: gp3.- Performance: Data disk: gp3; Raft log disk: io2.- Plus: Data disk: io2; Raft log disk: none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#storage_type DedicatedCluster#storage_type}
  */
  readonly storageType?: string;
}

export function dedicatedClusterTiflashNodeSettingToTerraform(struct?: DedicatedClusterTiflashNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_spec_key: cdktf.stringToTerraform(struct!.nodeSpecKey),
    raft_store_iops: cdktf.numberToTerraform(struct!.raftStoreIops),
    storage_size_gi: cdktf.numberToTerraform(struct!.storageSizeGi),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function dedicatedClusterTiflashNodeSettingToHclTerraform(struct?: DedicatedClusterTiflashNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_spec_key: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raft_store_iops: {
      value: cdktf.numberToHclTerraform(struct!.raftStoreIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_size_gi: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedClusterTiflashNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterTiflashNodeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSpecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecKey = this._nodeSpecKey;
    }
    if (this._raftStoreIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.raftStoreIops = this._raftStoreIops;
    }
    if (this._storageSizeGi !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGi = this._storageSizeGi;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTiflashNodeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSpecKey = undefined;
      this._raftStoreIops = undefined;
      this._storageSizeGi = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSpecKey = value.nodeSpecKey;
      this._raftStoreIops = value.raftStoreIops;
      this._storageSizeGi = value.storageSizeGi;
      this._storageType = value.storageType;
    }
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

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: false, optional: false, required: true
  private _nodeSpecKey?: string; 
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }
  public set nodeSpecKey(value: string) {
    this._nodeSpecKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecKeyInput() {
    return this._nodeSpecKey;
  }

  // raft_store_iops - computed: false, optional: true, required: false
  private _raftStoreIops?: number; 
  public get raftStoreIops() {
    return this.getNumberAttribute('raft_store_iops');
  }
  public set raftStoreIops(value: number) {
    this._raftStoreIops = value;
  }
  public resetRaftStoreIops() {
    this._raftStoreIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raftStoreIopsInput() {
    return this._raftStoreIops;
  }

  // storage_size_gi - computed: false, optional: false, required: true
  private _storageSizeGi?: number; 
  public get storageSizeGi() {
    return this.getNumberAttribute('storage_size_gi');
  }
  public set storageSizeGi(value: number) {
    this._storageSizeGi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGiInput() {
    return this._storageSizeGi;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}
export interface DedicatedClusterTikvNodeSetting {
  /**
  * The number of nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_count DedicatedCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The node specification key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#node_spec_key DedicatedCluster#node_spec_key}
  */
  readonly nodeSpecKey: string;
  /**
  * The IOPS of raft store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#raft_store_iops DedicatedCluster#raft_store_iops}
  */
  readonly raftStoreIops?: number;
  /**
  * The storage size in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#storage_size_gi DedicatedCluster#storage_size_gi}
  */
  readonly storageSizeGi: number;
  /**
  * The storage type.- Basic: Data disk: gp3; Raft log disk: none.- Standard: Data disk: gp3; Raft log disk: gp3.- Performance: Data disk: gp3; Raft log disk: io2.- Plus: Data disk: io2; Raft log disk: none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#storage_type DedicatedCluster#storage_type}
  */
  readonly storageType?: string;
}

export function dedicatedClusterTikvNodeSettingToTerraform(struct?: DedicatedClusterTikvNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_spec_key: cdktf.stringToTerraform(struct!.nodeSpecKey),
    raft_store_iops: cdktf.numberToTerraform(struct!.raftStoreIops),
    storage_size_gi: cdktf.numberToTerraform(struct!.storageSizeGi),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function dedicatedClusterTikvNodeSettingToHclTerraform(struct?: DedicatedClusterTikvNodeSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_spec_key: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpecKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raft_store_iops: {
      value: cdktf.numberToHclTerraform(struct!.raftStoreIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_size_gi: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedClusterTikvNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedClusterTikvNodeSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeSpecKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecKey = this._nodeSpecKey;
    }
    if (this._raftStoreIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.raftStoreIops = this._raftStoreIops;
    }
    if (this._storageSizeGi !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGi = this._storageSizeGi;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedClusterTikvNodeSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeSpecKey = undefined;
      this._raftStoreIops = undefined;
      this._storageSizeGi = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeSpecKey = value.nodeSpecKey;
      this._raftStoreIops = value.raftStoreIops;
      this._storageSizeGi = value.storageSizeGi;
      this._storageType = value.storageType;
    }
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

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: false, optional: false, required: true
  private _nodeSpecKey?: string; 
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }
  public set nodeSpecKey(value: string) {
    this._nodeSpecKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecKeyInput() {
    return this._nodeSpecKey;
  }

  // raft_store_iops - computed: false, optional: true, required: false
  private _raftStoreIops?: number; 
  public get raftStoreIops() {
    return this.getNumberAttribute('raft_store_iops');
  }
  public set raftStoreIops(value: number) {
    this._raftStoreIops = value;
  }
  public resetRaftStoreIops() {
    this._raftStoreIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raftStoreIopsInput() {
    return this._raftStoreIops;
  }

  // storage_size_gi - computed: false, optional: false, required: true
  private _storageSizeGi?: number; 
  public get storageSizeGi() {
    return this.getNumberAttribute('storage_size_gi');
  }
  public set storageSizeGi(value: number) {
    this._storageSizeGi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGiInput() {
    return this._storageSizeGi;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster tidbcloud_dedicated_cluster}
*/
export class DedicatedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedCluster to import
  * @param importFromId The id of the existing DedicatedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_cluster tidbcloud_dedicated_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._paused = config.paused;
    this._port = config.port;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
    this._rootPassword = config.rootPassword;
    this._tidbNodeSetting.internalValue = config.tidbNodeSetting;
    this._tiflashNodeSetting.internalValue = config.tiflashNodeSetting;
    this._tikvNodeSetting.internalValue = config.tikvNodeSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // pause_plan - computed: true, optional: false, required: false
  private _pausePlan = new DedicatedClusterPausePlanOutputReference(this, "pause_plan");
  public get pausePlan() {
    return this._pausePlan;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_display_name - computed: true, optional: false, required: false
  public get regionDisplayName() {
    return this.getStringAttribute('region_display_name');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tidb_node_setting - computed: false, optional: false, required: true
  private _tidbNodeSetting = new DedicatedClusterTidbNodeSettingOutputReference(this, "tidb_node_setting");
  public get tidbNodeSetting() {
    return this._tidbNodeSetting;
  }
  public putTidbNodeSetting(value: DedicatedClusterTidbNodeSetting) {
    this._tidbNodeSetting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tidbNodeSettingInput() {
    return this._tidbNodeSetting.internalValue;
  }

  // tiflash_node_setting - computed: false, optional: true, required: false
  private _tiflashNodeSetting = new DedicatedClusterTiflashNodeSettingOutputReference(this, "tiflash_node_setting");
  public get tiflashNodeSetting() {
    return this._tiflashNodeSetting;
  }
  public putTiflashNodeSetting(value: DedicatedClusterTiflashNodeSetting) {
    this._tiflashNodeSetting.internalValue = value;
  }
  public resetTiflashNodeSetting() {
    this._tiflashNodeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tiflashNodeSettingInput() {
    return this._tiflashNodeSetting.internalValue;
  }

  // tikv_node_setting - computed: false, optional: false, required: true
  private _tikvNodeSetting = new DedicatedClusterTikvNodeSettingOutputReference(this, "tikv_node_setting");
  public get tikvNodeSetting() {
    return this._tikvNodeSetting;
  }
  public putTikvNodeSetting(value: DedicatedClusterTikvNodeSetting) {
    this._tikvNodeSetting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tikvNodeSettingInput() {
    return this._tikvNodeSetting.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      paused: cdktf.booleanToTerraform(this._paused),
      port: cdktf.numberToTerraform(this._port),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      tidb_node_setting: dedicatedClusterTidbNodeSettingToTerraform(this._tidbNodeSetting.internalValue),
      tiflash_node_setting: dedicatedClusterTiflashNodeSettingToTerraform(this._tiflashNodeSetting.internalValue),
      tikv_node_setting: dedicatedClusterTikvNodeSettingToTerraform(this._tikvNodeSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tidb_node_setting: {
        value: dedicatedClusterTidbNodeSettingToHclTerraform(this._tidbNodeSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedClusterTidbNodeSetting",
      },
      tiflash_node_setting: {
        value: dedicatedClusterTiflashNodeSettingToHclTerraform(this._tiflashNodeSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedClusterTiflashNodeSetting",
      },
      tikv_node_setting: {
        value: dedicatedClusterTikvNodeSettingToHclTerraform(this._tikvNodeSetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedClusterTikvNodeSetting",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
