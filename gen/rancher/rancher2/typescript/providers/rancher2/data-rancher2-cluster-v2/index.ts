// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2ClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2#fleet_namespace DataRancher2ClusterV2#fleet_namespace}
  */
  readonly fleetNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2#id DataRancher2ClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster V2 name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2#name DataRancher2ClusterV2#name}
  */
  readonly name: string;
}
export interface DataRancher2ClusterV2AgentEnvVars {
}

export function dataRancher2ClusterV2AgentEnvVarsToTerraform(struct?: DataRancher2ClusterV2AgentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2AgentEnvVarsToHclTerraform(struct?: DataRancher2ClusterV2AgentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2AgentEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2AgentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2AgentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterV2AgentEnvVarsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2AgentEnvVarsOutputReference {
    return new DataRancher2ClusterV2AgentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2ClusterRegistrationToken {
}

export function dataRancher2ClusterV2ClusterRegistrationTokenToTerraform(struct?: DataRancher2ClusterV2ClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2ClusterRegistrationTokenToHclTerraform(struct?: DataRancher2ClusterV2ClusterRegistrationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2ClusterRegistrationTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2ClusterRegistrationToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2ClusterRegistrationToken | undefined) {
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

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_command - computed: true, optional: false, required: false
  public get insecureCommand() {
    return this.getStringAttribute('insecure_command');
  }

  // insecure_node_command - computed: true, optional: false, required: false
  public get insecureNodeCommand() {
    return this.getStringAttribute('insecure_node_command');
  }

  // insecure_windows_node_command - computed: true, optional: false, required: false
  public get insecureWindowsNodeCommand() {
    return this.getStringAttribute('insecure_windows_node_command');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // manifest_url - computed: true, optional: false, required: false
  public get manifestUrl() {
    return this.getStringAttribute('manifest_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_command - computed: true, optional: false, required: false
  public get nodeCommand() {
    return this.getStringAttribute('node_command');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // windows_node_command - computed: true, optional: false, required: false
  public get windowsNodeCommand() {
    return this.getStringAttribute('windows_node_command');
  }
}

export class DataRancher2ClusterV2ClusterRegistrationTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2ClusterRegistrationTokenOutputReference {
    return new DataRancher2ClusterV2ClusterRegistrationTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigEtcdS3Config {
}

export function dataRancher2ClusterV2RkeConfigEtcdS3ConfigToTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigEtcdS3ConfigToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigEtcdS3ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigEtcdS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigEtcdS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // cloud_credential_name - computed: true, optional: false, required: false
  public get cloudCredentialName() {
    return this.getStringAttribute('cloud_credential_name');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_ca - computed: true, optional: false, required: false
  public get endpointCa() {
    return this.getStringAttribute('endpoint_ca');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // skip_ssl_verify - computed: true, optional: false, required: false
  public get skipSslVerify() {
    return this.getBooleanAttribute('skip_ssl_verify');
  }
}

export class DataRancher2ClusterV2RkeConfigEtcdS3ConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigEtcdS3ConfigOutputReference {
    return new DataRancher2ClusterV2RkeConfigEtcdS3ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigEtcd {
}

export function dataRancher2ClusterV2RkeConfigEtcdToTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigEtcdToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigEtcdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_snapshots - computed: true, optional: false, required: false
  public get disableSnapshots() {
    return this.getBooleanAttribute('disable_snapshots');
  }

  // s3_config - computed: true, optional: false, required: false
  private _s3Config = new DataRancher2ClusterV2RkeConfigEtcdS3ConfigList(this, "s3_config", false);
  public get s3Config() {
    return this._s3Config;
  }

  // snapshot_retention - computed: true, optional: false, required: false
  public get snapshotRetention() {
    return this.getNumberAttribute('snapshot_retention');
  }

  // snapshot_schedule_cron - computed: true, optional: false, required: false
  public get snapshotScheduleCron() {
    return this.getStringAttribute('snapshot_schedule_cron');
  }
}

export class DataRancher2ClusterV2RkeConfigEtcdList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigEtcdOutputReference {
    return new DataRancher2ClusterV2RkeConfigEtcdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigEtcdSnapshotCreate {
}

export function dataRancher2ClusterV2RkeConfigEtcdSnapshotCreateToTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdSnapshotCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigEtcdSnapshotCreateToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdSnapshotCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigEtcdSnapshotCreateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigEtcdSnapshotCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigEtcdSnapshotCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }
}

export class DataRancher2ClusterV2RkeConfigEtcdSnapshotCreateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigEtcdSnapshotCreateOutputReference {
    return new DataRancher2ClusterV2RkeConfigEtcdSnapshotCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigEtcdSnapshotRestore {
}

export function dataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreToTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdSnapshotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigEtcdSnapshotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigEtcdSnapshotRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigEtcdSnapshotRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // restore_rke_config - computed: true, optional: false, required: false
  public get restoreRkeConfig() {
    return this.getStringAttribute('restore_rke_config');
  }
}

export class DataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference {
    return new DataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigLocalAuthEndpoint {
}

export function dataRancher2ClusterV2RkeConfigLocalAuthEndpointToTerraform(struct?: DataRancher2ClusterV2RkeConfigLocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigLocalAuthEndpointToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigLocalAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigLocalAuthEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigLocalAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigLocalAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataRancher2ClusterV2RkeConfigLocalAuthEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigLocalAuthEndpointOutputReference {
    return new DataRancher2ClusterV2RkeConfigLocalAuthEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachinePoolDefaults {
}

export function dataRancher2ClusterV2RkeConfigMachinePoolDefaultsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachinePoolDefaultsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachinePoolDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachinePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachinePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_length_limit - computed: true, optional: false, required: false
  public get hostnameLengthLimit() {
    return this.getNumberAttribute('hostname_length_limit');
  }
}

export class DataRancher2ClusterV2RkeConfigMachinePoolDefaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachinePoolDefaultsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachinePoolDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfig {
}

export function dataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdate {
}

export function dataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachinePoolsTaints {
}

export function dataRancher2ClusterV2RkeConfigMachinePoolsTaintsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachinePoolsTaintsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachinePoolsTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachinePoolsTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachinePoolsTaintsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachinePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachinePools {
}

export function dataRancher2ClusterV2RkeConfigMachinePoolsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachinePoolsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachinePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachinePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachinePools | undefined) {
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

  // cloud_credential_secret_name - computed: true, optional: false, required: false
  public get cloudCredentialSecretName() {
    return this.getStringAttribute('cloud_credential_secret_name');
  }

  // control_plane_role - computed: true, optional: false, required: false
  public get controlPlaneRole() {
    return this.getBooleanAttribute('control_plane_role');
  }

  // drain_before_delete - computed: true, optional: false, required: false
  public get drainBeforeDelete() {
    return this.getBooleanAttribute('drain_before_delete');
  }

  // etcd_role - computed: true, optional: false, required: false
  public get etcdRole() {
    return this.getBooleanAttribute('etcd_role');
  }

  // hostname_length_limit - computed: true, optional: false, required: false
  public get hostnameLengthLimit() {
    return this.getNumberAttribute('hostname_length_limit');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // machine_config - computed: true, optional: false, required: false
  private _machineConfig = new DataRancher2ClusterV2RkeConfigMachinePoolsMachineConfigList(this, "machine_config", false);
  public get machineConfig() {
    return this._machineConfig;
  }

  // machine_labels - computed: true, optional: false, required: false
  private _machineLabels = new cdktf.StringMap(this, "machine_labels");
  public get machineLabels() {
    return this._machineLabels;
  }

  // max_unhealthy - computed: true, optional: false, required: false
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_drain_timeout - computed: true, optional: false, required: false
  public get nodeDrainTimeout() {
    return this.getNumberAttribute('node_drain_timeout');
  }

  // node_startup_timeout_seconds - computed: true, optional: false, required: false
  public get nodeStartupTimeoutSeconds() {
    return this.getNumberAttribute('node_startup_timeout_seconds');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterV2RkeConfigMachinePoolsRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataRancher2ClusterV2RkeConfigMachinePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // unhealthy_node_timeout_seconds - computed: true, optional: false, required: false
  public get unhealthyNodeTimeoutSeconds() {
    return this.getNumberAttribute('unhealthy_node_timeout_seconds');
  }

  // unhealthy_range - computed: true, optional: false, required: false
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }

  // worker_role - computed: true, optional: false, required: false
  public get workerRole() {
    return this.getBooleanAttribute('worker_role');
  }
}

export class DataRancher2ClusterV2RkeConfigMachinePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachinePoolsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachinePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorConfig {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorConfigToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // machine_label_selector - computed: true, optional: false, required: false
  private _machineLabelSelector = new DataRancher2ClusterV2RkeConfigMachineSelectorConfigMachineLabelSelectorList(this, "machine_label_selector", false);
  public get machineLabelSelector() {
    return this._machineLabelSelector;
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorConfigOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_permissions - computed: true, optional: false, required: false
  public get defaultPermissions() {
    return this.getStringAttribute('default_permissions');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_permissions - computed: true, optional: false, required: false
  public get defaultPermissions() {
    return this.getStringAttribute('default_permissions');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSources {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configmap - computed: true, optional: false, required: false
  private _configmap = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesConfigmapList(this, "configmap", false);
  public get configmap() {
    return this._configmap;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expressions - computed: true, optional: false, required: false
  private _matchExpressions = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigMachineSelectorFiles {
}

export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesToTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigMachineSelectorFilesToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigMachineSelectorFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigMachineSelectorFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigMachineSelectorFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_sources - computed: true, optional: false, required: false
  private _fileSources = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesFileSourcesList(this, "file_sources", false);
  public get fileSources() {
    return this._fileSources;
  }

  // machine_label_selector - computed: true, optional: false, required: false
  private _machineLabelSelector = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesMachineLabelSelectorList(this, "machine_label_selector", false);
  public get machineLabelSelector() {
    return this._machineLabelSelector;
  }
}

export class DataRancher2ClusterV2RkeConfigMachineSelectorFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigMachineSelectorFilesOutputReference {
    return new DataRancher2ClusterV2RkeConfigMachineSelectorFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigRegistriesConfigs {
}

export function dataRancher2ClusterV2RkeConfigRegistriesConfigsToTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistriesConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigRegistriesConfigsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistriesConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigRegistriesConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigRegistriesConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigRegistriesConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_config_secret_name - computed: true, optional: false, required: false
  public get authConfigSecretName() {
    return this.getStringAttribute('auth_config_secret_name');
  }

  // ca_bundle - computed: true, optional: false, required: false
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // insecure - computed: true, optional: false, required: false
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }

  // tls_secret_name - computed: true, optional: false, required: false
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
}

export class DataRancher2ClusterV2RkeConfigRegistriesConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigRegistriesConfigsOutputReference {
    return new DataRancher2ClusterV2RkeConfigRegistriesConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigRegistriesMirrors {
}

export function dataRancher2ClusterV2RkeConfigRegistriesMirrorsToTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistriesMirrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigRegistriesMirrorsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistriesMirrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigRegistriesMirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigRegistriesMirrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigRegistriesMirrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // rewrites - computed: true, optional: false, required: false
  private _rewrites = new cdktf.StringMap(this, "rewrites");
  public get rewrites() {
    return this._rewrites;
  }
}

export class DataRancher2ClusterV2RkeConfigRegistriesMirrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigRegistriesMirrorsOutputReference {
    return new DataRancher2ClusterV2RkeConfigRegistriesMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigRegistries {
}

export function dataRancher2ClusterV2RkeConfigRegistriesToTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigRegistriesToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configs - computed: true, optional: false, required: false
  private _configs = new DataRancher2ClusterV2RkeConfigRegistriesConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }

  // mirrors - computed: true, optional: false, required: false
  private _mirrors = new DataRancher2ClusterV2RkeConfigRegistriesMirrorsList(this, "mirrors", false);
  public get mirrors() {
    return this._mirrors;
  }
}

export class DataRancher2ClusterV2RkeConfigRegistriesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigRegistriesOutputReference {
    return new DataRancher2ClusterV2RkeConfigRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigRotateCertificates {
}

export function dataRancher2ClusterV2RkeConfigRotateCertificatesToTerraform(struct?: DataRancher2ClusterV2RkeConfigRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigRotateCertificatesToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigRotateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigRotateCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigRotateCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigRotateCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }
}

export class DataRancher2ClusterV2RkeConfigRotateCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigRotateCertificatesOutputReference {
    return new DataRancher2ClusterV2RkeConfigRotateCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions {
}

export function dataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_empty_dir_data - computed: true, optional: false, required: false
  public get deleteEmptyDirData() {
    return this.getBooleanAttribute('delete_empty_dir_data');
  }

  // disable_eviction - computed: true, optional: false, required: false
  public get disableEviction() {
    return this.getBooleanAttribute('disable_eviction');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // ignore_daemon_sets - computed: true, optional: false, required: false
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }

  // ignore_errors - computed: true, optional: false, required: false
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }

  // skip_wait_for_delete_timeout_seconds - computed: true, optional: false, required: false
  public get skipWaitForDeleteTimeoutSeconds() {
    return this.getNumberAttribute('skip_wait_for_delete_timeout_seconds');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference {
    return new DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions {
}

export function dataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_empty_dir_data - computed: true, optional: false, required: false
  public get deleteEmptyDirData() {
    return this.getBooleanAttribute('delete_empty_dir_data');
  }

  // disable_eviction - computed: true, optional: false, required: false
  public get disableEviction() {
    return this.getBooleanAttribute('disable_eviction');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // ignore_daemon_sets - computed: true, optional: false, required: false
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }

  // ignore_errors - computed: true, optional: false, required: false
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }

  // skip_wait_for_delete_timeout_seconds - computed: true, optional: false, required: false
  public get skipWaitForDeleteTimeoutSeconds() {
    return this.getNumberAttribute('skip_wait_for_delete_timeout_seconds');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference {
    return new DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfigUpgradeStrategy {
}

export function dataRancher2ClusterV2RkeConfigUpgradeStrategyToTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigUpgradeStrategyToHclTerraform(struct?: DataRancher2ClusterV2RkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_plane_concurrency - computed: true, optional: false, required: false
  public get controlPlaneConcurrency() {
    return this.getStringAttribute('control_plane_concurrency');
  }

  // control_plane_drain_options - computed: true, optional: false, required: false
  private _controlPlaneDrainOptions = new DataRancher2ClusterV2RkeConfigUpgradeStrategyControlPlaneDrainOptionsList(this, "control_plane_drain_options", false);
  public get controlPlaneDrainOptions() {
    return this._controlPlaneDrainOptions;
  }

  // worker_concurrency - computed: true, optional: false, required: false
  public get workerConcurrency() {
    return this.getStringAttribute('worker_concurrency');
  }

  // worker_drain_options - computed: true, optional: false, required: false
  private _workerDrainOptions = new DataRancher2ClusterV2RkeConfigUpgradeStrategyWorkerDrainOptionsList(this, "worker_drain_options", false);
  public get workerDrainOptions() {
    return this._workerDrainOptions;
  }
}

export class DataRancher2ClusterV2RkeConfigUpgradeStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigUpgradeStrategyOutputReference {
    return new DataRancher2ClusterV2RkeConfigUpgradeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterV2RkeConfig {
}

export function dataRancher2ClusterV2RkeConfigToTerraform(struct?: DataRancher2ClusterV2RkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterV2RkeConfigToHclTerraform(struct?: DataRancher2ClusterV2RkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterV2RkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterV2RkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterV2RkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_manifest - computed: true, optional: false, required: false
  public get additionalManifest() {
    return this.getStringAttribute('additional_manifest');
  }

  // chart_values - computed: true, optional: false, required: false
  public get chartValues() {
    return this.getStringAttribute('chart_values');
  }

  // etcd - computed: true, optional: false, required: false
  private _etcd = new DataRancher2ClusterV2RkeConfigEtcdList(this, "etcd", false);
  public get etcd() {
    return this._etcd;
  }

  // etcd_snapshot_create - computed: true, optional: false, required: false
  private _etcdSnapshotCreate = new DataRancher2ClusterV2RkeConfigEtcdSnapshotCreateList(this, "etcd_snapshot_create", false);
  public get etcdSnapshotCreate() {
    return this._etcdSnapshotCreate;
  }

  // etcd_snapshot_restore - computed: true, optional: false, required: false
  private _etcdSnapshotRestore = new DataRancher2ClusterV2RkeConfigEtcdSnapshotRestoreList(this, "etcd_snapshot_restore", false);
  public get etcdSnapshotRestore() {
    return this._etcdSnapshotRestore;
  }

  // local_auth_endpoint - computed: true, optional: false, required: false
  private _localAuthEndpoint = new DataRancher2ClusterV2RkeConfigLocalAuthEndpointList(this, "local_auth_endpoint", false);
  public get localAuthEndpoint() {
    return this._localAuthEndpoint;
  }

  // machine_global_config - computed: true, optional: false, required: false
  public get machineGlobalConfig() {
    return this.getStringAttribute('machine_global_config');
  }

  // machine_pool_defaults - computed: true, optional: false, required: false
  private _machinePoolDefaults = new DataRancher2ClusterV2RkeConfigMachinePoolDefaultsList(this, "machine_pool_defaults", false);
  public get machinePoolDefaults() {
    return this._machinePoolDefaults;
  }

  // machine_pools - computed: true, optional: false, required: false
  private _machinePools = new DataRancher2ClusterV2RkeConfigMachinePoolsList(this, "machine_pools", false);
  public get machinePools() {
    return this._machinePools;
  }

  // machine_selector_config - computed: true, optional: false, required: false
  private _machineSelectorConfig = new DataRancher2ClusterV2RkeConfigMachineSelectorConfigList(this, "machine_selector_config", false);
  public get machineSelectorConfig() {
    return this._machineSelectorConfig;
  }

  // machine_selector_files - computed: true, optional: false, required: false
  private _machineSelectorFiles = new DataRancher2ClusterV2RkeConfigMachineSelectorFilesList(this, "machine_selector_files", false);
  public get machineSelectorFiles() {
    return this._machineSelectorFiles;
  }

  // registries - computed: true, optional: false, required: false
  private _registries = new DataRancher2ClusterV2RkeConfigRegistriesList(this, "registries", false);
  public get registries() {
    return this._registries;
  }

  // rotate_certificates - computed: true, optional: false, required: false
  private _rotateCertificates = new DataRancher2ClusterV2RkeConfigRotateCertificatesList(this, "rotate_certificates", false);
  public get rotateCertificates() {
    return this._rotateCertificates;
  }

  // upgrade_strategy - computed: true, optional: false, required: false
  private _upgradeStrategy = new DataRancher2ClusterV2RkeConfigUpgradeStrategyList(this, "upgrade_strategy", false);
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }
}

export class DataRancher2ClusterV2RkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterV2RkeConfigOutputReference {
    return new DataRancher2ClusterV2RkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2 rancher2_cluster_v2}
*/
export class DataRancher2ClusterV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2ClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2ClusterV2 to import
  * @param importFromId The id of the existing DataRancher2ClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2ClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/cluster_v2 rancher2_cluster_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2ClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: DataRancher2ClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fleetNamespace = config.fleetNamespace;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_env_vars - computed: true, optional: false, required: false
  private _agentEnvVars = new DataRancher2ClusterV2AgentEnvVarsList(this, "agent_env_vars", false);
  public get agentEnvVars() {
    return this._agentEnvVars;
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cloud_credential_secret_name - computed: true, optional: false, required: false
  public get cloudCredentialSecretName() {
    return this.getStringAttribute('cloud_credential_secret_name');
  }

  // cluster_registration_token - computed: true, optional: false, required: false
  private _clusterRegistrationToken = new DataRancher2ClusterV2ClusterRegistrationTokenList(this, "cluster_registration_token", false);
  public get clusterRegistrationToken() {
    return this._clusterRegistrationToken;
  }

  // cluster_v1_id - computed: true, optional: false, required: false
  public get clusterV1Id() {
    return this.getStringAttribute('cluster_v1_id');
  }

  // default_cluster_role_for_project_members - computed: true, optional: false, required: false
  public get defaultClusterRoleForProjectMembers() {
    return this.getStringAttribute('default_cluster_role_for_project_members');
  }

  // default_pod_security_admission_configuration_template_name - computed: true, optional: false, required: false
  public get defaultPodSecurityAdmissionConfigurationTemplateName() {
    return this.getStringAttribute('default_pod_security_admission_configuration_template_name');
  }

  // enable_network_policy - computed: true, optional: false, required: false
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }

  // fleet_namespace - computed: false, optional: true, required: false
  private _fleetNamespace?: string; 
  public get fleetNamespace() {
    return this.getStringAttribute('fleet_namespace');
  }
  public set fleetNamespace(value: string) {
    this._fleetNamespace = value;
  }
  public resetFleetNamespace() {
    this._fleetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetNamespaceInput() {
    return this._fleetNamespace;
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // rke_config - computed: true, optional: false, required: false
  private _rkeConfig = new DataRancher2ClusterV2RkeConfigList(this, "rke_config", false);
  public get rkeConfig() {
    return this._rkeConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_namespace: cdktf.stringToTerraform(this._fleetNamespace),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_namespace: {
        value: cdktf.stringToHclTerraform(this._fleetNamespace),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
