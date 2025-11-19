// https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentSchemasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#id DataConfluentSchemas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The REST endpoint of the Schema Registry cluster, for example, `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#rest_endpoint DataConfluentSchemas#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#credentials DataConfluentSchemas#credentials}
  */
  readonly credentials?: DataConfluentSchemasCredentials;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#filter DataConfluentSchemas#filter}
  */
  readonly filter?: DataConfluentSchemasFilter;
  /**
  * schema_registry_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#schema_registry_cluster DataConfluentSchemas#schema_registry_cluster}
  */
  readonly schemaRegistryCluster?: DataConfluentSchemasSchemaRegistryCluster;
}
export interface DataConfluentSchemasSchemasSchemaReference {
}

export function dataConfluentSchemasSchemasSchemaReferenceToTerraform(struct?: DataConfluentSchemasSchemasSchemaReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentSchemasSchemasSchemaReferenceToHclTerraform(struct?: DataConfluentSchemasSchemasSchemaReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentSchemasSchemasSchemaReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentSchemasSchemasSchemaReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemasSchemasSchemaReference | undefined) {
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

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataConfluentSchemasSchemasSchemaReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentSchemasSchemasSchemaReferenceOutputReference {
    return new DataConfluentSchemasSchemasSchemaReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentSchemasSchemas {
}

export function dataConfluentSchemasSchemasToTerraform(struct?: DataConfluentSchemasSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentSchemasSchemasToHclTerraform(struct?: DataConfluentSchemasSchemas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentSchemasSchemasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentSchemasSchemas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemasSchemas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // schema_identifier - computed: true, optional: false, required: false
  public get schemaIdentifier() {
    return this.getNumberAttribute('schema_identifier');
  }

  // schema_reference - computed: true, optional: false, required: false
  private _schemaReference = new DataConfluentSchemasSchemasSchemaReferenceList(this, "schema_reference", false);
  public get schemaReference() {
    return this._schemaReference;
  }

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataConfluentSchemasSchemasList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentSchemasSchemasOutputReference {
    return new DataConfluentSchemasSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentSchemasCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#key DataConfluentSchemas#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#secret DataConfluentSchemas#secret}
  */
  readonly secret: string;
}

export function dataConfluentSchemasCredentialsToTerraform(struct?: DataConfluentSchemasCredentialsOutputReference | DataConfluentSchemasCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataConfluentSchemasCredentialsToHclTerraform(struct?: DataConfluentSchemasCredentialsOutputReference | DataConfluentSchemasCredentials): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentSchemasCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentSchemasCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemasCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataConfluentSchemasFilter {
  /**
  * Whether to return latest schema versions only for each matching subject. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#deleted DataConfluentSchemas#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * Whether to return soft deleted schemas. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#latest_only DataConfluentSchemas#latest_only}
  */
  readonly latestOnly?: boolean | cdktf.IResolvable;
  /**
  * The prefix of the Schema Registry Subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#subject_prefix DataConfluentSchemas#subject_prefix}
  */
  readonly subjectPrefix?: string;
}

export function dataConfluentSchemasFilterToTerraform(struct?: DataConfluentSchemasFilterOutputReference | DataConfluentSchemasFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    latest_only: cdktf.booleanToTerraform(struct!.latestOnly),
    subject_prefix: cdktf.stringToTerraform(struct!.subjectPrefix),
  }
}


export function dataConfluentSchemasFilterToHclTerraform(struct?: DataConfluentSchemasFilterOutputReference | DataConfluentSchemasFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latest_only: {
      value: cdktf.booleanToHclTerraform(struct!.latestOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject_prefix: {
      value: cdktf.stringToHclTerraform(struct!.subjectPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentSchemasFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentSchemasFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._latestOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestOnly = this._latestOnly;
    }
    if (this._subjectPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectPrefix = this._subjectPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemasFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleted = undefined;
      this._latestOnly = undefined;
      this._subjectPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleted = value.deleted;
      this._latestOnly = value.latestOnly;
      this._subjectPrefix = value.subjectPrefix;
    }
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // latest_only - computed: false, optional: true, required: false
  private _latestOnly?: boolean | cdktf.IResolvable; 
  public get latestOnly() {
    return this.getBooleanAttribute('latest_only');
  }
  public set latestOnly(value: boolean | cdktf.IResolvable) {
    this._latestOnly = value;
  }
  public resetLatestOnly() {
    this._latestOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestOnlyInput() {
    return this._latestOnly;
  }

  // subject_prefix - computed: false, optional: true, required: false
  private _subjectPrefix?: string; 
  public get subjectPrefix() {
    return this.getStringAttribute('subject_prefix');
  }
  public set subjectPrefix(value: string) {
    this._subjectPrefix = value;
  }
  public resetSubjectPrefix() {
    this._subjectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectPrefixInput() {
    return this._subjectPrefix;
  }
}
export interface DataConfluentSchemasSchemaRegistryCluster {
  /**
  * The Schema Registry cluster ID (e.g., `lsrc-abc123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#id DataConfluentSchemas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentSchemasSchemaRegistryClusterToTerraform(struct?: DataConfluentSchemasSchemaRegistryClusterOutputReference | DataConfluentSchemasSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentSchemasSchemaRegistryClusterToHclTerraform(struct?: DataConfluentSchemasSchemaRegistryClusterOutputReference | DataConfluentSchemasSchemaRegistryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentSchemasSchemaRegistryClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentSchemasSchemaRegistryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentSchemasSchemaRegistryCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas confluent_schemas}
*/
export class DataConfluentSchemas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_schemas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentSchemas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentSchemas to import
  * @param importFromId The id of the existing DataConfluentSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentSchemas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_schemas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.52.0/docs/data-sources/schemas confluent_schemas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentSchemasConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConfluentSchemasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent_schemas',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.52.0',
        providerVersionConstraint: '2.52.0'
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
    this._restEndpoint = config.restEndpoint;
    this._credentials.internalValue = config.credentials;
    this._filter.internalValue = config.filter;
    this._schemaRegistryCluster.internalValue = config.schemaRegistryCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }
  public set restEndpoint(value: string) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
  }

  // schemas - computed: true, optional: false, required: false
  private _schemas = new DataConfluentSchemasSchemasList(this, "schemas", false);
  public get schemas() {
    return this._schemas;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataConfluentSchemasCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataConfluentSchemasCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataConfluentSchemasFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataConfluentSchemasFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // schema_registry_cluster - computed: false, optional: true, required: false
  private _schemaRegistryCluster = new DataConfluentSchemasSchemaRegistryClusterOutputReference(this, "schema_registry_cluster");
  public get schemaRegistryCluster() {
    return this._schemaRegistryCluster;
  }
  public putSchemaRegistryCluster(value: DataConfluentSchemasSchemaRegistryCluster) {
    this._schemaRegistryCluster.internalValue = value;
  }
  public resetSchemaRegistryCluster() {
    this._schemaRegistryCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryClusterInput() {
    return this._schemaRegistryCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      credentials: dataConfluentSchemasCredentialsToTerraform(this._credentials.internalValue),
      filter: dataConfluentSchemasFilterToTerraform(this._filter.internalValue),
      schema_registry_cluster: dataConfluentSchemasSchemaRegistryClusterToTerraform(this._schemaRegistryCluster.internalValue),
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
      rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._restEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: dataConfluentSchemasCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentSchemasCredentialsList",
      },
      filter: {
        value: dataConfluentSchemasFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentSchemasFilterList",
      },
      schema_registry_cluster: {
        value: dataConfluentSchemasSchemaRegistryClusterToHclTerraform(this._schemaRegistryCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentSchemasSchemaRegistryClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
