// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_cluster#cluster_id DataTidbcloudDedicatedCluster#cluster_id}
  */
  readonly clusterId: string;
}
export interface DataTidbcloudDedicatedClusterPausePlan {
}

export function dataTidbcloudDedicatedClusterPausePlanToTerraform(struct?: DataTidbcloudDedicatedClusterPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterPausePlanToHclTerraform(struct?: DataTidbcloudDedicatedClusterPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterPausePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterPausePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterPausePlan | undefined) {
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
export interface DataTidbcloudDedicatedClusterTidbNodeSettingEndpoints {
}

export function dataTidbcloudDedicatedClusterTidbNodeSettingEndpointsToTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTidbNodeSettingEndpointsToHclTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTidbNodeSettingEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudDedicatedClusterTidbNodeSettingEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTidbNodeSettingEndpoints | undefined) {
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

export class DataTidbcloudDedicatedClusterTidbNodeSettingEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudDedicatedClusterTidbNodeSettingEndpointsOutputReference {
    return new DataTidbcloudDedicatedClusterTidbNodeSettingEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct {
}

export function dataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructToHclTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference {
    return new DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSetting {
}

export function dataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingToTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingToHclTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ip_access_list - computed: true, optional: false, required: false
  private _ipAccessList = new DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
}
export interface DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySetting {
}

export function dataTidbcloudDedicatedClusterTidbNodeSettingTiproxySettingToTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTidbNodeSettingTiproxySettingToHclTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: true, optional: false, required: false
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }

  // node_spec_version - computed: true, optional: false, required: false
  public get nodeSpecVersion() {
    return this.getStringAttribute('node_spec_version');
  }
}
export interface DataTidbcloudDedicatedClusterTidbNodeSetting {
}

export function dataTidbcloudDedicatedClusterTidbNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTidbNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClusterTidbNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTidbNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterTidbNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTidbNodeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataTidbcloudDedicatedClusterTidbNodeSettingEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // is_default_group - computed: true, optional: false, required: false
  public get isDefaultGroup() {
    return this.getBooleanAttribute('is_default_group');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
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

  // node_spec_key - computed: true, optional: false, required: false
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }

  // public_endpoint_setting - computed: true, optional: false, required: false
  private _publicEndpointSetting = new DataTidbcloudDedicatedClusterTidbNodeSettingPublicEndpointSettingOutputReference(this, "public_endpoint_setting");
  public get publicEndpointSetting() {
    return this._publicEndpointSetting;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tiproxy_setting - computed: true, optional: false, required: false
  private _tiproxySetting = new DataTidbcloudDedicatedClusterTidbNodeSettingTiproxySettingOutputReference(this, "tiproxy_setting");
  public get tiproxySetting() {
    return this._tiproxySetting;
  }
}
export interface DataTidbcloudDedicatedClusterTiflashNodeSetting {
}

export function dataTidbcloudDedicatedClusterTiflashNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClusterTiflashNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTiflashNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClusterTiflashNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTiflashNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterTiflashNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTiflashNodeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: true, optional: false, required: false
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }

  // raft_store_iops - computed: true, optional: false, required: false
  public get raftStoreIops() {
    return this.getNumberAttribute('raft_store_iops');
  }

  // storage_size_gi - computed: true, optional: false, required: false
  public get storageSizeGi() {
    return this.getNumberAttribute('storage_size_gi');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}
export interface DataTidbcloudDedicatedClusterTikvNodeSetting {
}

export function dataTidbcloudDedicatedClusterTikvNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClusterTikvNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClusterTikvNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClusterTikvNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClusterTikvNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClusterTikvNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClusterTikvNodeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_spec_display_name - computed: true, optional: false, required: false
  public get nodeSpecDisplayName() {
    return this.getStringAttribute('node_spec_display_name');
  }

  // node_spec_key - computed: true, optional: false, required: false
  public get nodeSpecKey() {
    return this.getStringAttribute('node_spec_key');
  }

  // raft_store_iops - computed: true, optional: false, required: false
  public get raftStoreIops() {
    return this.getNumberAttribute('raft_store_iops');
  }

  // storage_size_gi - computed: true, optional: false, required: false
  public get storageSizeGi() {
    return this.getNumberAttribute('storage_size_gi');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_cluster tidbcloud_dedicated_cluster}
*/
export class DataTidbcloudDedicatedCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedCluster to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_cluster tidbcloud_dedicated_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
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

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // pause_plan - computed: true, optional: false, required: false
  private _pausePlan = new DataTidbcloudDedicatedClusterPausePlanOutputReference(this, "pause_plan");
  public get pausePlan() {
    return this._pausePlan;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region_display_name - computed: true, optional: false, required: false
  public get regionDisplayName() {
    return this.getStringAttribute('region_display_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tidb_node_setting - computed: true, optional: false, required: false
  private _tidbNodeSetting = new DataTidbcloudDedicatedClusterTidbNodeSettingOutputReference(this, "tidb_node_setting");
  public get tidbNodeSetting() {
    return this._tidbNodeSetting;
  }

  // tiflash_node_setting - computed: true, optional: false, required: false
  private _tiflashNodeSetting = new DataTidbcloudDedicatedClusterTiflashNodeSettingOutputReference(this, "tiflash_node_setting");
  public get tiflashNodeSetting() {
    return this._tiflashNodeSetting;
  }

  // tikv_node_setting - computed: true, optional: false, required: false
  private _tikvNodeSetting = new DataTidbcloudDedicatedClusterTikvNodeSettingOutputReference(this, "tikv_node_setting");
  public get tikvNodeSetting() {
    return this._tikvNodeSetting;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
