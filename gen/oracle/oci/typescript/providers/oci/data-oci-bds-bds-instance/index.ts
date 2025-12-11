// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance#bds_instance_id DataOciBdsBdsInstance#bds_instance_id}
  */
  readonly bdsInstanceId: string;
}
export interface DataOciBdsBdsInstanceBdsClusterVersionSummary {
}

export function dataOciBdsBdsInstanceBdsClusterVersionSummaryToTerraform(struct?: DataOciBdsBdsInstanceBdsClusterVersionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceBdsClusterVersionSummaryToHclTerraform(struct?: DataOciBdsBdsInstanceBdsClusterVersionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceBdsClusterVersionSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceBdsClusterVersionSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceBdsClusterVersionSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bds_version - computed: true, optional: false, required: false
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // odh_version - computed: true, optional: false, required: false
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }
}

export class DataOciBdsBdsInstanceBdsClusterVersionSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceBdsClusterVersionSummaryOutputReference {
    return new DataOciBdsBdsInstanceBdsClusterVersionSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails {
}

export function dataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsToTerraform(struct?: DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keytab_file - computed: true, optional: false, required: false
  public get keytabFile() {
    return this.getStringAttribute('keytab_file');
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
}

export class DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference {
    return new DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceCloudSqlDetails {
}

export function dataOciBdsBdsInstanceCloudSqlDetailsToTerraform(struct?: DataOciBdsBdsInstanceCloudSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceCloudSqlDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceCloudSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceCloudSqlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceCloudSqlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceCloudSqlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_kerberos_mapped_to_database_users - computed: true, optional: false, required: false
  public get isKerberosMappedToDatabaseUsers() {
    return this.getBooleanAttribute('is_kerberos_mapped_to_database_users');
  }

  // kerberos_details - computed: true, optional: false, required: false
  private _kerberosDetails = new DataOciBdsBdsInstanceCloudSqlDetailsKerberosDetailsList(this, "kerberos_details", false);
  public get kerberosDetails() {
    return this._kerberosDetails;
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }
}

export class DataOciBdsBdsInstanceCloudSqlDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceCloudSqlDetailsOutputReference {
    return new DataOciBdsBdsInstanceCloudSqlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceClusterDetails {
}

export function dataOciBdsBdsInstanceClusterDetailsToTerraform(struct?: DataOciBdsBdsInstanceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceClusterDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ambari_url - computed: true, optional: false, required: false
  public get ambariUrl() {
    return this.getStringAttribute('ambari_url');
  }

  // bd_cell_version - computed: true, optional: false, required: false
  public get bdCellVersion() {
    return this.getStringAttribute('bd_cell_version');
  }

  // bda_version - computed: true, optional: false, required: false
  public get bdaVersion() {
    return this.getStringAttribute('bda_version');
  }

  // bdm_version - computed: true, optional: false, required: false
  public get bdmVersion() {
    return this.getStringAttribute('bdm_version');
  }

  // bds_version - computed: true, optional: false, required: false
  public get bdsVersion() {
    return this.getStringAttribute('bds_version');
  }

  // big_data_manager_url - computed: true, optional: false, required: false
  public get bigDataManagerUrl() {
    return this.getStringAttribute('big_data_manager_url');
  }

  // cloudera_manager_url - computed: true, optional: false, required: false
  public get clouderaManagerUrl() {
    return this.getStringAttribute('cloudera_manager_url');
  }

  // csql_cell_version - computed: true, optional: false, required: false
  public get csqlCellVersion() {
    return this.getStringAttribute('csql_cell_version');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // hue_server_url - computed: true, optional: false, required: false
  public get hueServerUrl() {
    return this.getStringAttribute('hue_server_url');
  }

  // jupyter_hub_url - computed: true, optional: false, required: false
  public get jupyterHubUrl() {
    return this.getStringAttribute('jupyter_hub_url');
  }

  // odh_version - computed: true, optional: false, required: false
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_refreshed - computed: true, optional: false, required: false
  public get timeRefreshed() {
    return this.getStringAttribute('time_refreshed');
  }
}

export class DataOciBdsBdsInstanceClusterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceClusterDetailsOutputReference {
    return new DataOciBdsBdsInstanceClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig {
}

export function dataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceComputeOnlyWorkerNode {
}

export function dataOciBdsBdsInstanceComputeOnlyWorkerNodeToTerraform(struct?: DataOciBdsBdsInstanceComputeOnlyWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceComputeOnlyWorkerNodeToHclTerraform(struct?: DataOciBdsBdsInstanceComputeOnlyWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceComputeOnlyWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceComputeOnlyWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceComputeOnlyWorkerNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceComputeOnlyWorkerNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference {
    return new DataOciBdsBdsInstanceComputeOnlyWorkerNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceEdgeNodeShapeConfig {
}

export function dataOciBdsBdsInstanceEdgeNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceEdgeNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceEdgeNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceEdgeNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceEdgeNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceEdgeNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceEdgeNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceEdgeNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceEdgeNode {
}

export function dataOciBdsBdsInstanceEdgeNodeToTerraform(struct?: DataOciBdsBdsInstanceEdgeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceEdgeNodeToHclTerraform(struct?: DataOciBdsBdsInstanceEdgeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceEdgeNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceEdgeNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceEdgeNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceEdgeNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceEdgeNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceEdgeNodeOutputReference {
    return new DataOciBdsBdsInstanceEdgeNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig {
}

export function dataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceKafkaBrokerNode {
}

export function dataOciBdsBdsInstanceKafkaBrokerNodeToTerraform(struct?: DataOciBdsBdsInstanceKafkaBrokerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceKafkaBrokerNodeToHclTerraform(struct?: DataOciBdsBdsInstanceKafkaBrokerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceKafkaBrokerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceKafkaBrokerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_kafka_nodes - computed: true, optional: false, required: false
  public get numberOfKafkaNodes() {
    return this.getNumberAttribute('number_of_kafka_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceKafkaBrokerNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceKafkaBrokerNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference {
    return new DataOciBdsBdsInstanceKafkaBrokerNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceMasterNodeShapeConfig {
}

export function dataOciBdsBdsInstanceMasterNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceMasterNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceMasterNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceMasterNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceMasterNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceMasterNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceMasterNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceMasterNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceMasterNode {
}

export function dataOciBdsBdsInstanceMasterNodeToTerraform(struct?: DataOciBdsBdsInstanceMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceMasterNodeToHclTerraform(struct?: DataOciBdsBdsInstanceMasterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceMasterNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceMasterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceMasterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceMasterNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceMasterNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceMasterNodeOutputReference {
    return new DataOciBdsBdsInstanceMasterNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceNetworkConfig {
}

export function dataOciBdsBdsInstanceNetworkConfigToTerraform(struct?: DataOciBdsBdsInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceNetworkConfigToHclTerraform(struct?: DataOciBdsBdsInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // is_nat_gateway_required - computed: true, optional: false, required: false
  public get isNatGatewayRequired() {
    return this.getBooleanAttribute('is_nat_gateway_required');
  }
}

export class DataOciBdsBdsInstanceNetworkConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceNetworkConfigOutputReference {
    return new DataOciBdsBdsInstanceNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceNodesAttachedBlockVolumes {
}

export function dataOciBdsBdsInstanceNodesAttachedBlockVolumesToTerraform(struct?: DataOciBdsBdsInstanceNodesAttachedBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceNodesAttachedBlockVolumesToHclTerraform(struct?: DataOciBdsBdsInstanceNodesAttachedBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceNodesAttachedBlockVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceNodesAttachedBlockVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // volume_attachment_id - computed: true, optional: false, required: false
  public get volumeAttachmentId() {
    return this.getStringAttribute('volume_attachment_id');
  }

  // volume_size_in_gbs - computed: true, optional: false, required: false
  public get volumeSizeInGbs() {
    return this.getStringAttribute('volume_size_in_gbs');
  }
}

export class DataOciBdsBdsInstanceNodesAttachedBlockVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference {
    return new DataOciBdsBdsInstanceNodesAttachedBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceNodes {
}

export function dataOciBdsBdsInstanceNodesToTerraform(struct?: DataOciBdsBdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceNodesToHclTerraform(struct?: DataOciBdsBdsInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_block_volumes - computed: true, optional: false, required: false
  private _attachedBlockVolumes = new DataOciBdsBdsInstanceNodesAttachedBlockVolumesList(this, "attached_block_volumes", false);
  public get attachedBlockVolumes() {
    return this._attachedBlockVolumes;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_reboot_required - computed: true, optional: false, required: false
  public get isRebootRequired() {
    return this.getBooleanAttribute('is_reboot_required');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: false
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // odh_version - computed: true, optional: false, required: false
  public get odhVersion() {
    return this.getStringAttribute('odh_version');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_fingerprint - computed: true, optional: false, required: false
  public get sshFingerprint() {
    return this.getStringAttribute('ssh_fingerprint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_reboot_due - computed: true, optional: false, required: false
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }
}

export class DataOciBdsBdsInstanceNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceNodesOutputReference {
    return new DataOciBdsBdsInstanceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs {
}

export function dataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToTerraform(struct?: DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsToHclTerraform(struct?: DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }
}

export class DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference {
    return new DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceStartClusterShapeConfigs {
}

export function dataOciBdsBdsInstanceStartClusterShapeConfigsToTerraform(struct?: DataOciBdsBdsInstanceStartClusterShapeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceStartClusterShapeConfigsToHclTerraform(struct?: DataOciBdsBdsInstanceStartClusterShapeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceStartClusterShapeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceStartClusterShapeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceStartClusterShapeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_type_shape_configs - computed: true, optional: false, required: false
  private _nodeTypeShapeConfigs = new DataOciBdsBdsInstanceStartClusterShapeConfigsNodeTypeShapeConfigsList(this, "node_type_shape_configs", false);
  public get nodeTypeShapeConfigs() {
    return this._nodeTypeShapeConfigs;
  }
}

export class DataOciBdsBdsInstanceStartClusterShapeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceStartClusterShapeConfigsOutputReference {
    return new DataOciBdsBdsInstanceStartClusterShapeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceUtilNodeShapeConfig {
}

export function dataOciBdsBdsInstanceUtilNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceUtilNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceUtilNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceUtilNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceUtilNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceUtilNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceUtilNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceUtilNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceUtilNode {
}

export function dataOciBdsBdsInstanceUtilNodeToTerraform(struct?: DataOciBdsBdsInstanceUtilNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceUtilNodeToHclTerraform(struct?: DataOciBdsBdsInstanceUtilNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceUtilNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceUtilNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceUtilNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceUtilNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceUtilNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceUtilNodeOutputReference {
    return new DataOciBdsBdsInstanceUtilNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceWorkerNodeShapeConfig {
}

export function dataOciBdsBdsInstanceWorkerNodeShapeConfigToTerraform(struct?: DataOciBdsBdsInstanceWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceWorkerNodeShapeConfigToHclTerraform(struct?: DataOciBdsBdsInstanceWorkerNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceWorkerNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceWorkerNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
}

export class DataOciBdsBdsInstanceWorkerNodeShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference {
    return new DataOciBdsBdsInstanceWorkerNodeShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceWorkerNode {
}

export function dataOciBdsBdsInstanceWorkerNodeToTerraform(struct?: DataOciBdsBdsInstanceWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceWorkerNodeToHclTerraform(struct?: DataOciBdsBdsInstanceWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceWorkerNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_size_in_gbs - computed: true, optional: false, required: false
  public get blockVolumeSizeInGbs() {
    return this.getStringAttribute('block_volume_size_in_gbs');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciBdsBdsInstanceWorkerNodeShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciBdsBdsInstanceWorkerNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceWorkerNodeOutputReference {
    return new DataOciBdsBdsInstanceWorkerNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance oci_bds_bds_instance}
*/
export class DataOciBdsBdsInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstance to import
  * @param importFromId The id of the existing DataOciBdsBdsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/bds_bds_instance oci_bds_bds_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bds_cluster_version_summary - computed: true, optional: false, required: false
  private _bdsClusterVersionSummary = new DataOciBdsBdsInstanceBdsClusterVersionSummaryList(this, "bds_cluster_version_summary", false);
  public get bdsClusterVersionSummary() {
    return this._bdsClusterVersionSummary;
  }

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // bootstrap_script_url - computed: true, optional: false, required: false
  public get bootstrapScriptUrl() {
    return this.getStringAttribute('bootstrap_script_url');
  }

  // cloud_sql_details - computed: true, optional: false, required: false
  private _cloudSqlDetails = new DataOciBdsBdsInstanceCloudSqlDetailsList(this, "cloud_sql_details", false);
  public get cloudSqlDetails() {
    return this._cloudSqlDetails;
  }

  // cluster_admin_password - computed: true, optional: false, required: false
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // cluster_details - computed: true, optional: false, required: false
  private _clusterDetails = new DataOciBdsBdsInstanceClusterDetailsList(this, "cluster_details", false);
  public get clusterDetails() {
    return this._clusterDetails;
  }

  // cluster_profile - computed: true, optional: false, required: false
  public get clusterProfile() {
    return this.getStringAttribute('cluster_profile');
  }

  // cluster_public_key - computed: true, optional: false, required: false
  public get clusterPublicKey() {
    return this.getStringAttribute('cluster_public_key');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_only_worker_node - computed: true, optional: false, required: false
  private _computeOnlyWorkerNode = new DataOciBdsBdsInstanceComputeOnlyWorkerNodeList(this, "compute_only_worker_node", false);
  public get computeOnlyWorkerNode() {
    return this._computeOnlyWorkerNode;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // edge_node - computed: true, optional: false, required: false
  private _edgeNode = new DataOciBdsBdsInstanceEdgeNodeList(this, "edge_node", false);
  public get edgeNode() {
    return this._edgeNode;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_existing_nodes_shape - computed: true, optional: false, required: false
  public get ignoreExistingNodesShape() {
    return this.getListAttribute('ignore_existing_nodes_shape');
  }

  // is_cloud_sql_configured - computed: true, optional: false, required: false
  public get isCloudSqlConfigured() {
    return this.getBooleanAttribute('is_cloud_sql_configured');
  }

  // is_force_remove_enabled - computed: true, optional: false, required: false
  public get isForceRemoveEnabled() {
    return this.getBooleanAttribute('is_force_remove_enabled');
  }

  // is_force_stop_jobs - computed: true, optional: false, required: false
  public get isForceStopJobs() {
    return this.getBooleanAttribute('is_force_stop_jobs');
  }

  // is_high_availability - computed: true, optional: false, required: false
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }

  // is_kafka_configured - computed: true, optional: false, required: false
  public get isKafkaConfigured() {
    return this.getBooleanAttribute('is_kafka_configured');
  }

  // is_secure - computed: true, optional: false, required: false
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // kafka_broker_node - computed: true, optional: false, required: false
  private _kafkaBrokerNode = new DataOciBdsBdsInstanceKafkaBrokerNodeList(this, "kafka_broker_node", false);
  public get kafkaBrokerNode() {
    return this._kafkaBrokerNode;
  }

  // kerberos_realm_name - computed: true, optional: false, required: false
  public get kerberosRealmName() {
    return this.getStringAttribute('kerberos_realm_name');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // master_node - computed: true, optional: false, required: false
  private _masterNode = new DataOciBdsBdsInstanceMasterNodeList(this, "master_node", false);
  public get masterNode() {
    return this._masterNode;
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataOciBdsBdsInstanceNetworkConfigList(this, "network_config", false);
  public get networkConfig() {
    return this._networkConfig;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataOciBdsBdsInstanceNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // number_of_nodes_requiring_maintenance_reboot - computed: true, optional: false, required: false
  public get numberOfNodesRequiringMaintenanceReboot() {
    return this.getNumberAttribute('number_of_nodes_requiring_maintenance_reboot');
  }

  // os_patch_version - computed: true, optional: false, required: false
  public get osPatchVersion() {
    return this.getStringAttribute('os_patch_version');
  }

  // remove_node - computed: true, optional: false, required: false
  public get removeNode() {
    return this.getStringAttribute('remove_node');
  }

  // start_cluster_shape_configs - computed: true, optional: false, required: false
  private _startClusterShapeConfigs = new DataOciBdsBdsInstanceStartClusterShapeConfigsList(this, "start_cluster_shape_configs", false);
  public get startClusterShapeConfigs() {
    return this._startClusterShapeConfigs;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // util_node - computed: true, optional: false, required: false
  private _utilNode = new DataOciBdsBdsInstanceUtilNodeList(this, "util_node", false);
  public get utilNode() {
    return this._utilNode;
  }

  // worker_node - computed: true, optional: false, required: false
  private _workerNode = new DataOciBdsBdsInstanceWorkerNodeList(this, "worker_node", false);
  public get workerNode() {
    return this._workerNode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
