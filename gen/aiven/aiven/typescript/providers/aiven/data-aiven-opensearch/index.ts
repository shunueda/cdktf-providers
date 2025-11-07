// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenOpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch#id DataAivenOpensearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch#project DataAivenOpensearch#project}
  */
  readonly project: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch#service_name DataAivenOpensearch#service_name}
  */
  readonly serviceName: string;
}
export interface DataAivenOpensearchComponents {
}

export function dataAivenOpensearchComponentsToTerraform(struct?: DataAivenOpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchComponentsToHclTerraform(struct?: DataAivenOpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class DataAivenOpensearchComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchComponentsOutputReference {
    return new DataAivenOpensearchComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearch {
}

export function dataAivenOpensearchOpensearchToTerraform(struct?: DataAivenOpensearchOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchToHclTerraform(struct?: DataAivenOpensearchOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kibana_uri - computed: true, optional: false, required: false
  public get kibanaUri() {
    return this.getStringAttribute('kibana_uri');
  }

  // opensearch_dashboards_uri - computed: true, optional: false, required: false
  public get opensearchDashboardsUri() {
    return this.getStringAttribute('opensearch_dashboards_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenOpensearchOpensearchList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchOutputReference {
    return new DataAivenOpensearchOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigAzureMigration {
}

export function dataAivenOpensearchOpensearchUserConfigAzureMigrationToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigAzureMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigAzureMigrationToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigAzureMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigAzureMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigAzureMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigAzureMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // endpoint_suffix - computed: true, optional: false, required: false
  public get endpointSuffix() {
    return this.getStringAttribute('endpoint_suffix');
  }

  // include_aliases - computed: true, optional: false, required: false
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }

  // indices - computed: true, optional: false, required: false
  public get indices() {
    return this.getStringAttribute('indices');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // restore_global_state - computed: true, optional: false, required: false
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }

  // sas_token - computed: true, optional: false, required: false
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
}

export class DataAivenOpensearchOpensearchUserConfigAzureMigrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigAzureMigrationOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigAzureMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigGcsMigration {
}

export function dataAivenOpensearchOpensearchUserConfigGcsMigrationToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigGcsMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigGcsMigrationToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigGcsMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigGcsMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigGcsMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigGcsMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // include_aliases - computed: true, optional: false, required: false
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }

  // indices - computed: true, optional: false, required: false
  public get indices() {
    return this.getStringAttribute('indices');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // restore_global_state - computed: true, optional: false, required: false
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
}

export class DataAivenOpensearchOpensearchUserConfigGcsMigrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigGcsMigrationOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigGcsMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigIndexPatterns {
}

export function dataAivenOpensearchOpensearchUserConfigIndexPatternsToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigIndexPatternsToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigIndexPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigIndexPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigIndexPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_index_count - computed: true, optional: false, required: false
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // sorting_algorithm - computed: true, optional: false, required: false
  public get sortingAlgorithm() {
    return this.getStringAttribute('sorting_algorithm');
  }
}

export class DataAivenOpensearchOpensearchUserConfigIndexPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigIndexPatternsOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigIndexPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigIndexRollup {
}

export function dataAivenOpensearchOpensearchUserConfigIndexRollupToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigIndexRollupToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigIndexRollupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigIndexRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigIndexRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rollup_dashboards_enabled - computed: true, optional: false, required: false
  public get rollupDashboardsEnabled() {
    return this.getBooleanAttribute('rollup_dashboards_enabled');
  }

  // rollup_enabled - computed: true, optional: false, required: false
  public get rollupEnabled() {
    return this.getBooleanAttribute('rollup_enabled');
  }

  // rollup_search_backoff_count - computed: true, optional: false, required: false
  public get rollupSearchBackoffCount() {
    return this.getNumberAttribute('rollup_search_backoff_count');
  }

  // rollup_search_backoff_millis - computed: true, optional: false, required: false
  public get rollupSearchBackoffMillis() {
    return this.getNumberAttribute('rollup_search_backoff_millis');
  }

  // rollup_search_search_all_jobs - computed: true, optional: false, required: false
  public get rollupSearchSearchAllJobs() {
    return this.getBooleanAttribute('rollup_search_search_all_jobs');
  }
}

export class DataAivenOpensearchOpensearchUserConfigIndexRollupList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigIndexRollupOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigIndexRollupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigIndexTemplate {
}

export function dataAivenOpensearchOpensearchUserConfigIndexTemplateToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigIndexTemplateToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigIndexTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigIndexTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigIndexTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mapping_nested_objects_limit - computed: true, optional: false, required: false
  public get mappingNestedObjectsLimit() {
    return this.getNumberAttribute('mapping_nested_objects_limit');
  }

  // number_of_replicas - computed: true, optional: false, required: false
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }

  // number_of_shards - computed: true, optional: false, required: false
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
}

export class DataAivenOpensearchOpensearchUserConfigIndexTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigIndexTemplateOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigIndexTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigIpFilterObject {
}

export function dataAivenOpensearchOpensearchUserConfigIpFilterObjectToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigIpFilterObjectToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigIpFilterObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigIpFilterObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class DataAivenOpensearchOpensearchUserConfigIpFilterObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigIpFilterObjectOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpenid {
}

export function dataAivenOpensearchOpensearchUserConfigOpenidToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpenidToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpenidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpenid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpenid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connect_url - computed: true, optional: false, required: false
  public get connectUrl() {
    return this.getStringAttribute('connect_url');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // jwt_header - computed: true, optional: false, required: false
  public get jwtHeader() {
    return this.getStringAttribute('jwt_header');
  }

  // jwt_url_parameter - computed: true, optional: false, required: false
  public get jwtUrlParameter() {
    return this.getStringAttribute('jwt_url_parameter');
  }

  // refresh_rate_limit_count - computed: true, optional: false, required: false
  public get refreshRateLimitCount() {
    return this.getNumberAttribute('refresh_rate_limit_count');
  }

  // refresh_rate_limit_time_window_ms - computed: true, optional: false, required: false
  public get refreshRateLimitTimeWindowMs() {
    return this.getNumberAttribute('refresh_rate_limit_time_window_ms');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpenidList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpenidOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpenidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_tries - computed: true, optional: false, required: false
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }

  // authentication_backend - computed: true, optional: false, required: false
  public get authenticationBackend() {
    return this.getStringAttribute('authentication_backend');
  }

  // block_expiry_seconds - computed: true, optional: false, required: false
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }

  // max_blocked_clients - computed: true, optional: false, required: false
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }

  // max_tracked_clients - computed: true, optional: false, required: false
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }

  // time_window_seconds - computed: true, optional: false, required: false
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_tries - computed: true, optional: false, required: false
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }

  // block_expiry_seconds - computed: true, optional: false, required: false
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }

  // max_blocked_clients - computed: true, optional: false, required: false
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }

  // max_tracked_clients - computed: true, optional: false, required: false
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }

  // time_window_seconds - computed: true, optional: false, required: false
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListeners {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internal_authentication_backend_limiting - computed: true, optional: false, required: false
  private _internalAuthenticationBackendLimiting = new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingList(this, "internal_authentication_backend_limiting", false);
  public get internalAuthenticationBackendLimiting() {
    return this._internalAuthenticationBackendLimiting;
  }

  // ip_rate_limiting - computed: true, optional: false, required: false
  private _ipRateLimiting = new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingList(this, "ip_rate_limiting", false);
  public get ipRateLimiting() {
    return this._ipRateLimiting;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStore {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state_global_metadata_upload_timeout - computed: true, optional: false, required: false
  public get stateGlobalMetadataUploadTimeout() {
    return this.getStringAttribute('state_global_metadata_upload_timeout');
  }

  // state_metadata_manifest_upload_timeout - computed: true, optional: false, required: false
  public get stateMetadataManifestUploadTimeout() {
    return this.getStringAttribute('state_metadata_manifest_upload_timeout');
  }

  // translog_buffer_interval - computed: true, optional: false, required: false
  public get translogBufferInterval() {
    return this.getStringAttribute('translog_buffer_interval');
  }

  // translog_max_readers - computed: true, optional: false, required: false
  public get translogMaxReaders() {
    return this.getNumberAttribute('translog_max_readers');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getStringAttribute('debug');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getStringAttribute('info');
  }

  // trace - computed: true, optional: false, required: false
  public get trace() {
    return this.getStringAttribute('trace');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // threshold - computed: true, optional: false, required: false
  private _threshold = new DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarks {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flood_stage - computed: true, optional: false, required: false
  public get floodStage() {
    return this.getNumberAttribute('flood_stage');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStore {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segment_pressure_bytes_lag_variance_factor - computed: true, optional: false, required: false
  public get segmentPressureBytesLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_bytes_lag_variance_factor');
  }

  // segment_pressure_consecutive_failures_limit - computed: true, optional: false, required: false
  public get segmentPressureConsecutiveFailuresLimit() {
    return this.getNumberAttribute('segment_pressure_consecutive_failures_limit');
  }

  // segment_pressure_enabled - computed: true, optional: false, required: false
  public get segmentPressureEnabled() {
    return this.getBooleanAttribute('segment_pressure_enabled');
  }

  // segment_pressure_time_lag_variance_factor - computed: true, optional: false, required: false
  public get segmentPressureTimeLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_time_lag_variance_factor');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_threshold - computed: true, optional: false, required: false
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }

  // heap_threshold - computed: true, optional: false, required: false
  public get heapThreshold() {
    return this.getNumberAttribute('heap_threshold');
  }

  // num_successive_breaches - computed: true, optional: false, required: false
  public get numSuccessiveBreaches() {
    return this.getNumberAttribute('num_successive_breaches');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cancellation_burst - computed: true, optional: false, required: false
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }

  // cancellation_rate - computed: true, optional: false, required: false
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }

  // cancellation_ratio - computed: true, optional: false, required: false
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }

  // cpu_time_millis_threshold - computed: true, optional: false, required: false
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }

  // elapsed_time_millis_threshold - computed: true, optional: false, required: false
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }

  // heap_moving_average_window_size - computed: true, optional: false, required: false
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }

  // heap_percent_threshold - computed: true, optional: false, required: false
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }

  // heap_variance - computed: true, optional: false, required: false
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }

  // total_heap_percent_threshold - computed: true, optional: false, required: false
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cancellation_burst - computed: true, optional: false, required: false
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }

  // cancellation_rate - computed: true, optional: false, required: false
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }

  // cancellation_ratio - computed: true, optional: false, required: false
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }

  // cpu_time_millis_threshold - computed: true, optional: false, required: false
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }

  // elapsed_time_millis_threshold - computed: true, optional: false, required: false
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }

  // heap_moving_average_window_size - computed: true, optional: false, required: false
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }

  // heap_percent_threshold - computed: true, optional: false, required: false
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }

  // heap_variance - computed: true, optional: false, required: false
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }

  // total_heap_percent_threshold - computed: true, optional: false, required: false
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressure {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // node_duress - computed: true, optional: false, required: false
  private _nodeDuress = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressList(this, "node_duress", false);
  public get nodeDuress() {
    return this._nodeDuress;
  }

  // search_shard_task - computed: true, optional: false, required: false
  private _searchShardTask = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskList(this, "search_shard_task", false);
  public get searchShardTask() {
    return this._searchShardTask;
  }

  // search_task - computed: true, optional: false, required: false
  private _searchTask = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskList(this, "search_task", false);
  public get searchTask() {
    return this._searchTask;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu | undefined) {
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

  // top_n_size - computed: true, optional: false, required: false
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency | undefined) {
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

  // top_n_size - computed: true, optional: false, required: false
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory | undefined) {
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

  // top_n_size - computed: true, optional: false, required: false
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuList(this, "cpu", false);
  public get cpu() {
    return this._cpu;
  }

  // latency - computed: true, optional: false, required: false
  private _latency = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyList(this, "latency", false);
  public get latency() {
    return this._latency;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchSegrep {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchSegrepToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchSegrepToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSegrepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchSegrep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchSegrep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pressure_checkpoint_limit - computed: true, optional: false, required: false
  public get pressureCheckpointLimit() {
    return this.getNumberAttribute('pressure_checkpoint_limit');
  }

  // pressure_enabled - computed: true, optional: false, required: false
  public get pressureEnabled() {
    return this.getBooleanAttribute('pressure_enabled');
  }

  // pressure_replica_stale_limit - computed: true, optional: false, required: false
  public get pressureReplicaStaleLimit() {
    return this.getNumberAttribute('pressure_replica_stale_limit');
  }

  // pressure_time_limit - computed: true, optional: false, required: false
  public get pressureTimeLimit() {
    return this.getStringAttribute('pressure_time_limit');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchSegrepList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchSegrepOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchSegrepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower - computed: true, optional: false, required: false
  public get lower() {
    return this.getNumberAttribute('lower');
  }

  // optimal - computed: true, optional: false, required: false
  public get optimal() {
    return this.getNumberAttribute('optimal');
  }

  // upper - computed: true, optional: false, required: false
  public get upper() {
    return this.getNumberAttribute('upper');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_limit - computed: true, optional: false, required: false
  public get minLimit() {
    return this.getNumberAttribute('min_limit');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node - computed: true, optional: false, required: false
  private _node = new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }

  // shard - computed: true, optional: false, required: false
  private _shard = new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardList(this, "shard", false);
  public get shard() {
    return this._shard;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressure {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressure | undefined) {
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

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // operating_factor - computed: true, optional: false, required: false
  private _operatingFactor = new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorList(this, "operating_factor", false);
  public get operatingFactor() {
    return this._operatingFactor;
  }

  // primary_parameter - computed: true, optional: false, required: false
  private _primaryParameter = new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterList(this, "primary_parameter", false);
  public get primaryParameter() {
    return this._primaryParameter;
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearch {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_auto_create_index_enabled - computed: true, optional: false, required: false
  public get actionAutoCreateIndexEnabled() {
    return this.getBooleanAttribute('action_auto_create_index_enabled');
  }

  // action_destructive_requires_name - computed: true, optional: false, required: false
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }

  // auth_failure_listeners - computed: true, optional: false, required: false
  private _authFailureListeners = new DataAivenOpensearchOpensearchUserConfigOpensearchAuthFailureListenersList(this, "auth_failure_listeners", false);
  public get authFailureListeners() {
    return this._authFailureListeners;
  }

  // cluster_filecache_remote_data_ratio - computed: true, optional: false, required: false
  public get clusterFilecacheRemoteDataRatio() {
    return this.getNumberAttribute('cluster_filecache_remote_data_ratio');
  }

  // cluster_max_shards_per_node - computed: true, optional: false, required: false
  public get clusterMaxShardsPerNode() {
    return this.getNumberAttribute('cluster_max_shards_per_node');
  }

  // cluster_remote_store - computed: true, optional: false, required: false
  private _clusterRemoteStore = new DataAivenOpensearchOpensearchUserConfigOpensearchClusterRemoteStoreList(this, "cluster_remote_store", false);
  public get clusterRemoteStore() {
    return this._clusterRemoteStore;
  }

  // cluster_routing_allocation_balance_prefer_primary - computed: true, optional: false, required: false
  public get clusterRoutingAllocationBalancePreferPrimary() {
    return this.getBooleanAttribute('cluster_routing_allocation_balance_prefer_primary');
  }

  // cluster_routing_allocation_node_concurrent_recoveries - computed: true, optional: false, required: false
  public get clusterRoutingAllocationNodeConcurrentRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_recoveries');
  }

  // cluster_search_request_slowlog - computed: true, optional: false, required: false
  private _clusterSearchRequestSlowlog = new DataAivenOpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogList(this, "cluster_search_request_slowlog", false);
  public get clusterSearchRequestSlowlog() {
    return this._clusterSearchRequestSlowlog;
  }

  // disk_watermarks - computed: true, optional: false, required: false
  private _diskWatermarks = new DataAivenOpensearchOpensearchUserConfigOpensearchDiskWatermarksList(this, "disk_watermarks", false);
  public get diskWatermarks() {
    return this._diskWatermarks;
  }

  // email_sender_name - computed: true, optional: false, required: false
  public get emailSenderName() {
    return this.getStringAttribute('email_sender_name');
  }

  // email_sender_password - computed: true, optional: false, required: false
  public get emailSenderPassword() {
    return this.getStringAttribute('email_sender_password');
  }

  // email_sender_username - computed: true, optional: false, required: false
  public get emailSenderUsername() {
    return this.getStringAttribute('email_sender_username');
  }

  // enable_remote_backed_storage - computed: true, optional: false, required: false
  public get enableRemoteBackedStorage() {
    return this.getBooleanAttribute('enable_remote_backed_storage');
  }

  // enable_searchable_snapshots - computed: true, optional: false, required: false
  public get enableSearchableSnapshots() {
    return this.getBooleanAttribute('enable_searchable_snapshots');
  }

  // enable_security_audit - computed: true, optional: false, required: false
  public get enableSecurityAudit() {
    return this.getBooleanAttribute('enable_security_audit');
  }

  // enable_snapshot_api - computed: true, optional: false, required: false
  public get enableSnapshotApi() {
    return this.getBooleanAttribute('enable_snapshot_api');
  }

  // http_max_content_length - computed: true, optional: false, required: false
  public get httpMaxContentLength() {
    return this.getNumberAttribute('http_max_content_length');
  }

  // http_max_header_size - computed: true, optional: false, required: false
  public get httpMaxHeaderSize() {
    return this.getNumberAttribute('http_max_header_size');
  }

  // http_max_initial_line_length - computed: true, optional: false, required: false
  public get httpMaxInitialLineLength() {
    return this.getNumberAttribute('http_max_initial_line_length');
  }

  // indices_fielddata_cache_size - computed: true, optional: false, required: false
  public get indicesFielddataCacheSize() {
    return this.getNumberAttribute('indices_fielddata_cache_size');
  }

  // indices_memory_index_buffer_size - computed: true, optional: false, required: false
  public get indicesMemoryIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_index_buffer_size');
  }

  // indices_memory_max_index_buffer_size - computed: true, optional: false, required: false
  public get indicesMemoryMaxIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_max_index_buffer_size');
  }

  // indices_memory_min_index_buffer_size - computed: true, optional: false, required: false
  public get indicesMemoryMinIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_min_index_buffer_size');
  }

  // indices_queries_cache_size - computed: true, optional: false, required: false
  public get indicesQueriesCacheSize() {
    return this.getNumberAttribute('indices_queries_cache_size');
  }

  // indices_query_bool_max_clause_count - computed: true, optional: false, required: false
  public get indicesQueryBoolMaxClauseCount() {
    return this.getNumberAttribute('indices_query_bool_max_clause_count');
  }

  // indices_recovery_max_bytes_per_sec - computed: true, optional: false, required: false
  public get indicesRecoveryMaxBytesPerSec() {
    return this.getNumberAttribute('indices_recovery_max_bytes_per_sec');
  }

  // indices_recovery_max_concurrent_file_chunks - computed: true, optional: false, required: false
  public get indicesRecoveryMaxConcurrentFileChunks() {
    return this.getNumberAttribute('indices_recovery_max_concurrent_file_chunks');
  }

  // ism_enabled - computed: true, optional: false, required: false
  public get ismEnabled() {
    return this.getBooleanAttribute('ism_enabled');
  }

  // ism_history_enabled - computed: true, optional: false, required: false
  public get ismHistoryEnabled() {
    return this.getBooleanAttribute('ism_history_enabled');
  }

  // ism_history_max_age - computed: true, optional: false, required: false
  public get ismHistoryMaxAge() {
    return this.getNumberAttribute('ism_history_max_age');
  }

  // ism_history_max_docs - computed: true, optional: false, required: false
  public get ismHistoryMaxDocs() {
    return this.getNumberAttribute('ism_history_max_docs');
  }

  // ism_history_rollover_check_period - computed: true, optional: false, required: false
  public get ismHistoryRolloverCheckPeriod() {
    return this.getNumberAttribute('ism_history_rollover_check_period');
  }

  // ism_history_rollover_retention_period - computed: true, optional: false, required: false
  public get ismHistoryRolloverRetentionPeriod() {
    return this.getNumberAttribute('ism_history_rollover_retention_period');
  }

  // knn_memory_circuit_breaker_enabled - computed: true, optional: false, required: false
  public get knnMemoryCircuitBreakerEnabled() {
    return this.getBooleanAttribute('knn_memory_circuit_breaker_enabled');
  }

  // knn_memory_circuit_breaker_limit - computed: true, optional: false, required: false
  public get knnMemoryCircuitBreakerLimit() {
    return this.getNumberAttribute('knn_memory_circuit_breaker_limit');
  }

  // node_search_cache_size - computed: true, optional: false, required: false
  public get nodeSearchCacheSize() {
    return this.getStringAttribute('node_search_cache_size');
  }

  // override_main_response_version - computed: true, optional: false, required: false
  public get overrideMainResponseVersion() {
    return this.getBooleanAttribute('override_main_response_version');
  }

  // plugins_alerting_filter_by_backend_roles - computed: true, optional: false, required: false
  public get pluginsAlertingFilterByBackendRoles() {
    return this.getBooleanAttribute('plugins_alerting_filter_by_backend_roles');
  }

  // reindex_remote_whitelist - computed: true, optional: false, required: false
  public get reindexRemoteWhitelist() {
    return this.getListAttribute('reindex_remote_whitelist');
  }

  // remote_store - computed: true, optional: false, required: false
  private _remoteStore = new DataAivenOpensearchOpensearchUserConfigOpensearchRemoteStoreList(this, "remote_store", false);
  public get remoteStore() {
    return this._remoteStore;
  }

  // script_max_compilations_rate - computed: true, optional: false, required: false
  public get scriptMaxCompilationsRate() {
    return this.getStringAttribute('script_max_compilations_rate');
  }

  // search_backpressure - computed: true, optional: false, required: false
  private _searchBackpressure = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchBackpressureList(this, "search_backpressure", false);
  public get searchBackpressure() {
    return this._searchBackpressure;
  }

  // search_insights_top_queries - computed: true, optional: false, required: false
  private _searchInsightsTopQueries = new DataAivenOpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesList(this, "search_insights_top_queries", false);
  public get searchInsightsTopQueries() {
    return this._searchInsightsTopQueries;
  }

  // search_max_buckets - computed: true, optional: false, required: false
  public get searchMaxBuckets() {
    return this.getNumberAttribute('search_max_buckets');
  }

  // segrep - computed: true, optional: false, required: false
  private _segrep = new DataAivenOpensearchOpensearchUserConfigOpensearchSegrepList(this, "segrep", false);
  public get segrep() {
    return this._segrep;
  }

  // shard_indexing_pressure - computed: true, optional: false, required: false
  private _shardIndexingPressure = new DataAivenOpensearchOpensearchUserConfigOpensearchShardIndexingPressureList(this, "shard_indexing_pressure", false);
  public get shardIndexingPressure() {
    return this._shardIndexingPressure;
  }

  // thread_pool_analyze_queue_size - computed: true, optional: false, required: false
  public get threadPoolAnalyzeQueueSize() {
    return this.getNumberAttribute('thread_pool_analyze_queue_size');
  }

  // thread_pool_analyze_size - computed: true, optional: false, required: false
  public get threadPoolAnalyzeSize() {
    return this.getNumberAttribute('thread_pool_analyze_size');
  }

  // thread_pool_force_merge_size - computed: true, optional: false, required: false
  public get threadPoolForceMergeSize() {
    return this.getNumberAttribute('thread_pool_force_merge_size');
  }

  // thread_pool_get_queue_size - computed: true, optional: false, required: false
  public get threadPoolGetQueueSize() {
    return this.getNumberAttribute('thread_pool_get_queue_size');
  }

  // thread_pool_get_size - computed: true, optional: false, required: false
  public get threadPoolGetSize() {
    return this.getNumberAttribute('thread_pool_get_size');
  }

  // thread_pool_search_queue_size - computed: true, optional: false, required: false
  public get threadPoolSearchQueueSize() {
    return this.getNumberAttribute('thread_pool_search_queue_size');
  }

  // thread_pool_search_size - computed: true, optional: false, required: false
  public get threadPoolSearchSize() {
    return this.getNumberAttribute('thread_pool_search_size');
  }

  // thread_pool_search_throttled_queue_size - computed: true, optional: false, required: false
  public get threadPoolSearchThrottledQueueSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_queue_size');
  }

  // thread_pool_search_throttled_size - computed: true, optional: false, required: false
  public get threadPoolSearchThrottledSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_size');
  }

  // thread_pool_write_queue_size - computed: true, optional: false, required: false
  public get threadPoolWriteQueueSize() {
    return this.getNumberAttribute('thread_pool_write_queue_size');
  }

  // thread_pool_write_size - computed: true, optional: false, required: false
  public get threadPoolWriteSize() {
    return this.getNumberAttribute('thread_pool_write_size');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigOpensearchDashboards {
}

export function dataAivenOpensearchOpensearchUserConfigOpensearchDashboardsToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigOpensearchDashboardsToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigOpensearchDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigOpensearchDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigOpensearchDashboards | undefined) {
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

  // max_old_space_size - computed: true, optional: false, required: false
  public get maxOldSpaceSize() {
    return this.getNumberAttribute('max_old_space_size');
  }

  // multiple_data_source_enabled - computed: true, optional: false, required: false
  public get multipleDataSourceEnabled() {
    return this.getBooleanAttribute('multiple_data_source_enabled');
  }

  // opensearch_request_timeout - computed: true, optional: false, required: false
  public get opensearchRequestTimeout() {
    return this.getNumberAttribute('opensearch_request_timeout');
  }
}

export class DataAivenOpensearchOpensearchUserConfigOpensearchDashboardsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOpensearchDashboardsOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOpensearchDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigPrivateAccess {
}

export function dataAivenOpensearchOpensearchUserConfigPrivateAccessToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigPrivateAccessToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // opensearch - computed: true, optional: false, required: false
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }

  // opensearch_dashboards - computed: true, optional: false, required: false
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenOpensearchOpensearchUserConfigPrivateAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigPrivateAccessOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigPrivateAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigPrivatelinkAccess {
}

export function dataAivenOpensearchOpensearchUserConfigPrivatelinkAccessToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigPrivatelinkAccessToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // opensearch - computed: true, optional: false, required: false
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }

  // opensearch_dashboards - computed: true, optional: false, required: false
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenOpensearchOpensearchUserConfigPrivatelinkAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigPrivatelinkAccessOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigPrivatelinkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigPublicAccess {
}

export function dataAivenOpensearchOpensearchUserConfigPublicAccessToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigPublicAccessToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // opensearch - computed: true, optional: false, required: false
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }

  // opensearch_dashboards - computed: true, optional: false, required: false
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenOpensearchOpensearchUserConfigPublicAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigPublicAccessOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigPublicAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigS3Migration {
}

export function dataAivenOpensearchOpensearchUserConfigS3MigrationToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigS3Migration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigS3MigrationToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigS3Migration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigS3MigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigS3Migration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigS3Migration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }

  // compress - computed: true, optional: false, required: false
  public get compress() {
    return this.getBooleanAttribute('compress');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // include_aliases - computed: true, optional: false, required: false
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }

  // indices - computed: true, optional: false, required: false
  public get indices() {
    return this.getStringAttribute('indices');
  }

  // readonly - computed: true, optional: false, required: false
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // restore_global_state - computed: true, optional: false, required: false
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // server_side_encryption - computed: true, optional: false, required: false
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
}

export class DataAivenOpensearchOpensearchUserConfigS3MigrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigS3MigrationOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigS3MigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfigSaml {
}

export function dataAivenOpensearchOpensearchUserConfigSamlToTerraform(struct?: DataAivenOpensearchOpensearchUserConfigSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigSamlToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfigSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfigSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfigSaml | undefined) {
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

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }

  // idp_metadata_url - computed: true, optional: false, required: false
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }

  // idp_pemtrustedcas_content - computed: true, optional: false, required: false
  public get idpPemtrustedcasContent() {
    return this.getStringAttribute('idp_pemtrustedcas_content');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}

export class DataAivenOpensearchOpensearchUserConfigSamlList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigSamlOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchOpensearchUserConfig {
}

export function dataAivenOpensearchOpensearchUserConfigToTerraform(struct?: DataAivenOpensearchOpensearchUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchOpensearchUserConfigToHclTerraform(struct?: DataAivenOpensearchOpensearchUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchOpensearchUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchOpensearchUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchOpensearchUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_backup_regions - computed: true, optional: false, required: false
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }

  // azure_migration - computed: true, optional: false, required: false
  private _azureMigration = new DataAivenOpensearchOpensearchUserConfigAzureMigrationList(this, "azure_migration", false);
  public get azureMigration() {
    return this._azureMigration;
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // disable_replication_factor_adjustment - computed: true, optional: false, required: false
  public get disableReplicationFactorAdjustment() {
    return this.getBooleanAttribute('disable_replication_factor_adjustment');
  }

  // gcs_migration - computed: true, optional: false, required: false
  private _gcsMigration = new DataAivenOpensearchOpensearchUserConfigGcsMigrationList(this, "gcs_migration", false);
  public get gcsMigration() {
    return this._gcsMigration;
  }

  // index_patterns - computed: true, optional: false, required: false
  private _indexPatterns = new DataAivenOpensearchOpensearchUserConfigIndexPatternsList(this, "index_patterns", false);
  public get indexPatterns() {
    return this._indexPatterns;
  }

  // index_rollup - computed: true, optional: false, required: false
  private _indexRollup = new DataAivenOpensearchOpensearchUserConfigIndexRollupList(this, "index_rollup", false);
  public get indexRollup() {
    return this._indexRollup;
  }

  // index_template - computed: true, optional: false, required: false
  private _indexTemplate = new DataAivenOpensearchOpensearchUserConfigIndexTemplateList(this, "index_template", false);
  public get indexTemplate() {
    return this._indexTemplate;
  }

  // ip_filter - computed: true, optional: false, required: false
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }

  // ip_filter_object - computed: true, optional: false, required: false
  private _ipFilterObject = new DataAivenOpensearchOpensearchUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }

  // ip_filter_string - computed: true, optional: false, required: false
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }

  // keep_index_refresh_interval - computed: true, optional: false, required: false
  public get keepIndexRefreshInterval() {
    return this.getBooleanAttribute('keep_index_refresh_interval');
  }

  // max_index_count - computed: true, optional: false, required: false
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }

  // openid - computed: true, optional: false, required: false
  private _openid = new DataAivenOpensearchOpensearchUserConfigOpenidList(this, "openid", false);
  public get openid() {
    return this._openid;
  }

  // opensearch - computed: true, optional: false, required: false
  private _opensearch = new DataAivenOpensearchOpensearchUserConfigOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }

  // opensearch_dashboards - computed: true, optional: false, required: false
  private _opensearchDashboards = new DataAivenOpensearchOpensearchUserConfigOpensearchDashboardsList(this, "opensearch_dashboards", false);
  public get opensearchDashboards() {
    return this._opensearchDashboards;
  }

  // opensearch_version - computed: true, optional: false, required: false
  public get opensearchVersion() {
    return this.getStringAttribute('opensearch_version');
  }

  // private_access - computed: true, optional: false, required: false
  private _privateAccess = new DataAivenOpensearchOpensearchUserConfigPrivateAccessList(this, "private_access", false);
  public get privateAccess() {
    return this._privateAccess;
  }

  // privatelink_access - computed: true, optional: false, required: false
  private _privatelinkAccess = new DataAivenOpensearchOpensearchUserConfigPrivatelinkAccessList(this, "privatelink_access", false);
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }

  // project_to_fork_from - computed: true, optional: false, required: false
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }

  // public_access - computed: true, optional: false, required: false
  private _publicAccess = new DataAivenOpensearchOpensearchUserConfigPublicAccessList(this, "public_access", false);
  public get publicAccess() {
    return this._publicAccess;
  }

  // recovery_basebackup_name - computed: true, optional: false, required: false
  public get recoveryBasebackupName() {
    return this.getStringAttribute('recovery_basebackup_name');
  }

  // s3_migration - computed: true, optional: false, required: false
  private _s3Migration = new DataAivenOpensearchOpensearchUserConfigS3MigrationList(this, "s3_migration", false);
  public get s3Migration() {
    return this._s3Migration;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataAivenOpensearchOpensearchUserConfigSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }

  // service_log - computed: true, optional: false, required: false
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }

  // service_to_fork_from - computed: true, optional: false, required: false
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
}

export class DataAivenOpensearchOpensearchUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchOpensearchUserConfigOutputReference {
    return new DataAivenOpensearchOpensearchUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchServiceIntegrations {
}

export function dataAivenOpensearchServiceIntegrationsToTerraform(struct?: DataAivenOpensearchServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchServiceIntegrationsToHclTerraform(struct?: DataAivenOpensearchServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchServiceIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchServiceIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // source_service_name - computed: true, optional: false, required: false
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
}

export class DataAivenOpensearchServiceIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchServiceIntegrationsOutputReference {
    return new DataAivenOpensearchServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchTag {
}

export function dataAivenOpensearchTagToTerraform(struct?: DataAivenOpensearchTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchTagToHclTerraform(struct?: DataAivenOpensearchTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchTag | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAivenOpensearchTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchTagOutputReference {
    return new DataAivenOpensearchTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenOpensearchTechEmails {
}

export function dataAivenOpensearchTechEmailsToTerraform(struct?: DataAivenOpensearchTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenOpensearchTechEmailsToHclTerraform(struct?: DataAivenOpensearchTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenOpensearchTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenOpensearchTechEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOpensearchTechEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataAivenOpensearchTechEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenOpensearchTechEmailsOutputReference {
    return new DataAivenOpensearchTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch aiven_opensearch}
*/
export class DataAivenOpensearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenOpensearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenOpensearch to import
  * @param importFromId The id of the existing DataAivenOpensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenOpensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/opensearch aiven_opensearch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenOpensearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenOpensearchConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_opensearch',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: false, required: false
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataAivenOpensearchComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: true, optional: false, required: false
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // maintenance_window_dow - computed: true, optional: false, required: false
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: true, optional: false, required: false
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }

  // opensearch - computed: true, optional: false, required: false
  private _opensearch = new DataAivenOpensearchOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }

  // opensearch_user_config - computed: true, optional: false, required: false
  private _opensearchUserConfig = new DataAivenOpensearchOpensearchUserConfigList(this, "opensearch_user_config", false);
  public get opensearchUserConfig() {
    return this._opensearchUserConfig;
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_vpc_id - computed: true, optional: false, required: false
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_integrations - computed: true, optional: false, required: false
  private _serviceIntegrations = new DataAivenOpensearchServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataAivenOpensearchTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }

  // tech_emails - computed: true, optional: false, required: false
  private _techEmails = new DataAivenOpensearchTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }

  // termination_protection - computed: true, optional: false, required: false
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
