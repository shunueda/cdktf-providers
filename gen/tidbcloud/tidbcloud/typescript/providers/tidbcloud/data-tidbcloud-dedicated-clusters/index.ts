// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_clusters#project_id DataTidbcloudDedicatedClusters#project_id}
  */
  readonly projectId?: string;
}
export interface DataTidbcloudDedicatedClustersClustersPausePlan {
}

export function dataTidbcloudDedicatedClustersClustersPausePlanToTerraform(struct?: DataTidbcloudDedicatedClustersClustersPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersPausePlanToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersPausePlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersPausePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersPausePlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersPausePlan | undefined) {
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
export interface DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpoints {
}

export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpoints | undefined) {
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

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsOutputReference {
    return new DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStruct {
}

export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStruct | undefined) {
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

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference {
    return new DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSetting {
}

export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSetting | undefined) {
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
  private _ipAccessList = new DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingIpAccessListStructList(this, "ip_access_list", false);
  public get ipAccessList() {
    return this._ipAccessList;
  }
}
export interface DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySetting {
}

export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySettingToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySettingToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySetting | undefined) {
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
export interface DataTidbcloudDedicatedClustersClustersTidbNodeSetting {
}

export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTidbNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTidbNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTidbNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTidbNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTidbNodeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataTidbcloudDedicatedClustersClustersTidbNodeSettingEndpointsList(this, "endpoints", false);
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
  private _publicEndpointSetting = new DataTidbcloudDedicatedClustersClustersTidbNodeSettingPublicEndpointSettingOutputReference(this, "public_endpoint_setting");
  public get publicEndpointSetting() {
    return this._publicEndpointSetting;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tiproxy_setting - computed: true, optional: false, required: false
  private _tiproxySetting = new DataTidbcloudDedicatedClustersClustersTidbNodeSettingTiproxySettingOutputReference(this, "tiproxy_setting");
  public get tiproxySetting() {
    return this._tiproxySetting;
  }
}
export interface DataTidbcloudDedicatedClustersClustersTiflashNodeSetting {
}

export function dataTidbcloudDedicatedClustersClustersTiflashNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTiflashNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTiflashNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTiflashNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTiflashNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTiflashNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTiflashNodeSetting | undefined) {
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
export interface DataTidbcloudDedicatedClustersClustersTikvNodeSetting {
}

export function dataTidbcloudDedicatedClustersClustersTikvNodeSettingToTerraform(struct?: DataTidbcloudDedicatedClustersClustersTikvNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersTikvNodeSettingToHclTerraform(struct?: DataTidbcloudDedicatedClustersClustersTikvNodeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersTikvNodeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudDedicatedClustersClustersTikvNodeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClustersTikvNodeSetting | undefined) {
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
export interface DataTidbcloudDedicatedClustersClusters {
}

export function dataTidbcloudDedicatedClustersClustersToTerraform(struct?: DataTidbcloudDedicatedClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedClustersClustersToHclTerraform(struct?: DataTidbcloudDedicatedClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudDedicatedClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _pausePlan = new DataTidbcloudDedicatedClustersClustersPausePlanOutputReference(this, "pause_plan");
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
  private _tidbNodeSetting = new DataTidbcloudDedicatedClustersClustersTidbNodeSettingOutputReference(this, "tidb_node_setting");
  public get tidbNodeSetting() {
    return this._tidbNodeSetting;
  }

  // tiflash_node_setting - computed: true, optional: false, required: false
  private _tiflashNodeSetting = new DataTidbcloudDedicatedClustersClustersTiflashNodeSettingOutputReference(this, "tiflash_node_setting");
  public get tiflashNodeSetting() {
    return this._tiflashNodeSetting;
  }

  // tikv_node_setting - computed: true, optional: false, required: false
  private _tikvNodeSetting = new DataTidbcloudDedicatedClustersClustersTikvNodeSettingOutputReference(this, "tikv_node_setting");
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
}

export class DataTidbcloudDedicatedClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudDedicatedClustersClustersOutputReference {
    return new DataTidbcloudDedicatedClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_clusters tidbcloud_dedicated_clusters}
*/
export class DataTidbcloudDedicatedClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedClusters to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_clusters tidbcloud_dedicated_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_clusters',
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataTidbcloudDedicatedClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // project_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
