// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_agent_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentKnowledgeBaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_agent_knowledge_base#knowledge_base_id DataOciGenerativeAiAgentKnowledgeBase#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions | undefined) {
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
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_key - computed: true, optional: false, required: false
  public get bodyKey() {
    return this.getStringAttribute('body_key');
  }

  // embedding_body_key - computed: true, optional: false, required: false
  public get embeddingBodyKey() {
    return this.getStringAttribute('embedding_body_key');
  }

  // title_key - computed: true, optional: false, required: false
  public get titleKey() {
    return this.getStringAttribute('title_key');
  }

  // url_key - computed: true, optional: false, required: false
  public get urlKey() {
    return this.getStringAttribute('url_key');
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes | undefined) {
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

  // schema - computed: true, optional: false, required: false
  private _schema = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail | undefined) {
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

  // idcs_url - computed: true, optional: false, required: false
  public get idcsUrl() {
    return this.getStringAttribute('idcs_url');
  }

  // scope_url - computed: true, optional: false, required: false
  public get scopeUrl() {
    return this.getStringAttribute('scope_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseIndexConfig {
}

export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseIndexConfigToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseIndexConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseIndexConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseIndexConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database_connection - computed: true, optional: false, required: false
  private _databaseConnection = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList(this, "database_connection", false);
  public get databaseConnection() {
    return this._databaseConnection;
  }

  // database_functions - computed: true, optional: false, required: false
  private _databaseFunctions = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList(this, "database_functions", false);
  public get databaseFunctions() {
    return this._databaseFunctions;
  }

  // index_config_type - computed: true, optional: false, required: false
  public get indexConfigType() {
    return this.getStringAttribute('index_config_type');
  }

  // indexes - computed: true, optional: false, required: false
  private _indexes = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }

  // secret_detail - computed: true, optional: false, required: false
  private _secretDetail = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList(this, "secret_detail", false);
  public get secretDetail() {
    return this._secretDetail;
  }

  // should_enable_hybrid_search - computed: true, optional: false, required: false
  public get shouldEnableHybridSearch() {
    return this.getBooleanAttribute('should_enable_hybrid_search');
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics {
}

export function dataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsToTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsToHclTerraform(struct?: DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // total_ingested_files - computed: true, optional: false, required: false
  public get totalIngestedFiles() {
    return this.getStringAttribute('total_ingested_files');
  }
}

export class DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference {
    return new DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_agent_knowledge_base oci_generative_ai_agent_knowledge_base}
*/
export class DataOciGenerativeAiAgentKnowledgeBase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBase to import
  * @param importFromId The id of the existing DataOciGenerativeAiAgentKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_agent_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_agent_knowledge_base oci_generative_ai_agent_knowledge_base} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_knowledge_base',
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
    this._knowledgeBaseId = config.knowledgeBaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // index_config - computed: true, optional: false, required: false
  private _indexConfig = new DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList(this, "index_config", false);
  public get indexConfig() {
    return this._indexConfig;
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // knowledge_base_statistics - computed: true, optional: false, required: false
  private _knowledgeBaseStatistics = new DataOciGenerativeAiAgentKnowledgeBaseKnowledgeBaseStatisticsList(this, "knowledge_base_statistics", false);
  public get knowledgeBaseStatistics() {
    return this._knowledgeBaseStatistics;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
