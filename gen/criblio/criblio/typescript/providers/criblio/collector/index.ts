// https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The consumer group to which this instance belongs. Defaults to 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#group_id Collector#group_id}
  */
  readonly groupId: string;
  /**
  * The id of this collector instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_azure_blob Collector#input_collector_azure_blob}
  */
  readonly inputCollectorAzureBlob?: CollectorInputCollectorAzureBlob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_cribl_lake Collector#input_collector_cribl_lake}
  */
  readonly inputCollectorCriblLake?: CollectorInputCollectorCriblLake;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_database Collector#input_collector_database}
  */
  readonly inputCollectorDatabase?: CollectorInputCollectorDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_gcs Collector#input_collector_gcs}
  */
  readonly inputCollectorGcs?: CollectorInputCollectorGcs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_health_check Collector#input_collector_health_check}
  */
  readonly inputCollectorHealthCheck?: CollectorInputCollectorHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_rest Collector#input_collector_rest}
  */
  readonly inputCollectorRest?: CollectorInputCollectorRest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_s3 Collector#input_collector_s3}
  */
  readonly inputCollectorS3?: CollectorInputCollectorS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input_collector_splunk Collector#input_collector_splunk}
  */
  readonly inputCollectorSplunk?: CollectorInputCollectorSplunk;
}
export interface CollectorInputCollectorAzureBlobCollectorConfExtractors {
}

export function collectorInputCollectorAzureBlobCollectorConfExtractorsToTerraform(struct?: CollectorInputCollectorAzureBlobCollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorAzureBlobCollectorConfExtractorsToHclTerraform(struct?: CollectorInputCollectorAzureBlobCollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorAzureBlobCollectorConfExtractorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorAzureBlobCollectorConfExtractors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobCollectorConfExtractors | cdktf.IResolvable | undefined) {
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
}

export class CollectorInputCollectorAzureBlobCollectorConfExtractorsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorAzureBlobCollectorConfExtractors[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorAzureBlobCollectorConfExtractorsOutputReference {
    return new CollectorInputCollectorAzureBlobCollectorConfExtractorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorAzureBlobCollectorConf {
  /**
  * must be one of ["manual", "secret", "clientSecret", "clientCert"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_type Collector#auth_type}
  */
  readonly authType?: string;
  /**
  * Azure storage account Connection String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#connection_string Collector#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Azure container to collect from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#container_name Collector#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#extractors Collector#extractors}
  */
  readonly extractors?: CollectorInputCollectorAzureBlobCollectorConfExtractors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_batch_size Collector#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Directory where data will be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#path Collector#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#recurse Collector#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#storage_account_name Collector#storage_account_name}
  */
  readonly storageAccountName?: string;
}

export function collectorInputCollectorAzureBlobCollectorConfToTerraform(struct?: CollectorInputCollectorAzureBlobCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    extractors: cdktf.listMapper(collectorInputCollectorAzureBlobCollectorConfExtractorsToTerraform, false)(struct!.extractors),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    path: cdktf.stringToTerraform(struct!.path),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
  }
}


export function collectorInputCollectorAzureBlobCollectorConfToHclTerraform(struct?: CollectorInputCollectorAzureBlobCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractors: {
      value: cdktf.listMapperHcl(collectorInputCollectorAzureBlobCollectorConfExtractorsToHclTerraform, false)(struct!.extractors),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorAzureBlobCollectorConfExtractorsList",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._connectionString = undefined;
      this._containerName = undefined;
      this._extractors.internalValue = undefined;
      this._maxBatchSize = undefined;
      this._path = undefined;
      this._recurse = undefined;
      this._storageAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._connectionString = value.connectionString;
      this._containerName = value.containerName;
      this._extractors.internalValue = value.extractors;
      this._maxBatchSize = value.maxBatchSize;
      this._path = value.path;
      this._recurse = value.recurse;
      this._storageAccountName = value.storageAccountName;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new CollectorInputCollectorAzureBlobCollectorConfExtractorsList(this, "extractors", false);
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: CollectorInputCollectorAzureBlobCollectorConfExtractors[] | cdktf.IResolvable) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }
}
export interface CollectorInputCollectorAzureBlobCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorAzureBlobCollectorConf;
  /**
  * must be "azureblob"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorAzureBlobCollectorToTerraform(struct?: CollectorInputCollectorAzureBlobCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorAzureBlobCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorAzureBlobCollectorToHclTerraform(struct?: CollectorInputCollectorAzureBlobCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorAzureBlobCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobCollectorConf",
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

export class CollectorInputCollectorAzureBlobCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorAzureBlobCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorAzureBlobCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorAzureBlobInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorAzureBlobInputMetadataToTerraform(struct?: CollectorInputCollectorAzureBlobInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorAzureBlobInputMetadataToHclTerraform(struct?: CollectorInputCollectorAzureBlobInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorAzureBlobInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorAzureBlobInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorAzureBlobInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorAzureBlobInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorAzureBlobInputMetadataOutputReference {
    return new CollectorInputCollectorAzureBlobInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorAzureBlobInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorAzureBlobInputPreprocessToTerraform(struct?: CollectorInputCollectorAzureBlobInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorAzureBlobInputPreprocessToHclTerraform(struct?: CollectorInputCollectorAzureBlobInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorAzureBlobInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorAzureBlobInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorAzureBlobInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorAzureBlobInputToTerraform(struct?: CollectorInputCollectorAzureBlobInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorAzureBlobInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorAzureBlobInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorAzureBlobInputToHclTerraform(struct?: CollectorInputCollectorAzureBlobInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorAzureBlobInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorAzureBlobInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorAzureBlobInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorAzureBlobInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorAzureBlobInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorAzureBlobInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorAzureBlobInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorAzureBlobInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorAzureBlobSavedState {
}

export function collectorInputCollectorAzureBlobSavedStateToTerraform(struct?: CollectorInputCollectorAzureBlobSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorAzureBlobSavedStateToHclTerraform(struct?: CollectorInputCollectorAzureBlobSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorAzureBlobSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorAzureBlobScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorAzureBlobScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorAzureBlobScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorAzureBlobScheduleRunTimeWarning {
}

export function collectorInputCollectorAzureBlobScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorAzureBlobScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorAzureBlobScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorAzureBlobScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorAzureBlobScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorAzureBlobScheduleRunTimeWarning;
}

export function collectorInputCollectorAzureBlobScheduleRunToTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorAzureBlobScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorAzureBlobScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorAzureBlobScheduleRunToHclTerraform(struct?: CollectorInputCollectorAzureBlobScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorAzureBlobScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorAzureBlobScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorAzureBlobScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorAzureBlobScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorAzureBlobScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorAzureBlobScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorAzureBlobSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorAzureBlobScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorAzureBlobScheduleToTerraform(struct?: CollectorInputCollectorAzureBlobSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorAzureBlobScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorAzureBlobScheduleToHclTerraform(struct?: CollectorInputCollectorAzureBlobSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorAzureBlobScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlobSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlobSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorAzureBlobScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorAzureBlobScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorAzureBlob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorAzureBlobCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorAzureBlobInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorAzureBlobSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorAzureBlobSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorAzureBlobToTerraform(struct?: CollectorInputCollectorAzureBlob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorAzureBlobCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorAzureBlobInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorAzureBlobSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorAzureBlobScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorAzureBlobToHclTerraform(struct?: CollectorInputCollectorAzureBlob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorAzureBlobCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorAzureBlobInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorAzureBlobSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobSavedState",
    },
    schedule: {
      value: collectorInputCollectorAzureBlobScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorAzureBlobSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorAzureBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorAzureBlob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorAzureBlob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorAzureBlobCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorAzureBlobCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorAzureBlobInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorAzureBlobInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorAzureBlobSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorAzureBlobSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorAzureBlobScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorAzureBlobSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorCriblLakeCollectorConf {
  /**
  * Lake dataset to collect data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#dataset Collector#dataset}
  */
  readonly dataset?: string;
}

export function collectorInputCollectorCriblLakeCollectorConfToTerraform(struct?: CollectorInputCollectorCriblLakeCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
  }
}


export function collectorInputCollectorCriblLakeCollectorConfToHclTerraform(struct?: CollectorInputCollectorCriblLakeCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
    }
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }
}
export interface CollectorInputCollectorCriblLakeCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorCriblLakeCollectorConf;
  /**
  * must be "cribllake"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorCriblLakeCollectorToTerraform(struct?: CollectorInputCollectorCriblLakeCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorCriblLakeCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorCriblLakeCollectorToHclTerraform(struct?: CollectorInputCollectorCriblLakeCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorCriblLakeCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeCollectorConf",
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

export class CollectorInputCollectorCriblLakeCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorCriblLakeCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorCriblLakeCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorCriblLakeInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorCriblLakeInputMetadataToTerraform(struct?: CollectorInputCollectorCriblLakeInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorCriblLakeInputMetadataToHclTerraform(struct?: CollectorInputCollectorCriblLakeInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorCriblLakeInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorCriblLakeInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorCriblLakeInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorCriblLakeInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorCriblLakeInputMetadataOutputReference {
    return new CollectorInputCollectorCriblLakeInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorCriblLakeInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorCriblLakeInputPreprocessToTerraform(struct?: CollectorInputCollectorCriblLakeInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorCriblLakeInputPreprocessToHclTerraform(struct?: CollectorInputCollectorCriblLakeInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorCriblLakeInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorCriblLakeInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorCriblLakeInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorCriblLakeInputToTerraform(struct?: CollectorInputCollectorCriblLakeInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorCriblLakeInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorCriblLakeInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorCriblLakeInputToHclTerraform(struct?: CollectorInputCollectorCriblLakeInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorCriblLakeInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorCriblLakeInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorCriblLakeInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorCriblLakeInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorCriblLakeInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorCriblLakeInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorCriblLakeInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorCriblLakeInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorCriblLakeSavedState {
}

export function collectorInputCollectorCriblLakeSavedStateToTerraform(struct?: CollectorInputCollectorCriblLakeSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorCriblLakeSavedStateToHclTerraform(struct?: CollectorInputCollectorCriblLakeSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorCriblLakeSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorCriblLakeScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorCriblLakeScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorCriblLakeScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorCriblLakeScheduleRunTimeWarning {
}

export function collectorInputCollectorCriblLakeScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorCriblLakeScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorCriblLakeScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorCriblLakeScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorCriblLakeScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorCriblLakeScheduleRunTimeWarning;
}

export function collectorInputCollectorCriblLakeScheduleRunToTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorCriblLakeScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorCriblLakeScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorCriblLakeScheduleRunToHclTerraform(struct?: CollectorInputCollectorCriblLakeScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorCriblLakeScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorCriblLakeScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorCriblLakeScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorCriblLakeScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorCriblLakeScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorCriblLakeScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorCriblLakeSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorCriblLakeScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorCriblLakeScheduleToTerraform(struct?: CollectorInputCollectorCriblLakeSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorCriblLakeScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorCriblLakeScheduleToHclTerraform(struct?: CollectorInputCollectorCriblLakeSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorCriblLakeScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLakeSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLakeSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorCriblLakeScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorCriblLakeScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorCriblLake {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorCriblLakeCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorCriblLakeInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorCriblLakeSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorCriblLakeSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorCriblLakeToTerraform(struct?: CollectorInputCollectorCriblLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorCriblLakeCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorCriblLakeInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorCriblLakeSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorCriblLakeScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorCriblLakeToHclTerraform(struct?: CollectorInputCollectorCriblLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorCriblLakeCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorCriblLakeInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorCriblLakeSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeSavedState",
    },
    schedule: {
      value: collectorInputCollectorCriblLakeScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorCriblLakeSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorCriblLakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorCriblLake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorCriblLake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorCriblLakeCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorCriblLakeCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorCriblLakeInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorCriblLakeInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorCriblLakeSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorCriblLakeSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorCriblLakeScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorCriblLakeSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorDatabaseCollectorConf {
  /**
  * Select an existing Database Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#connection_id Collector#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Query string for selecting data from the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#query Collector#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#query_validation_enabled Collector#query_validation_enabled}
  */
  readonly queryValidationEnabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorDatabaseCollectorConfToTerraform(struct?: CollectorInputCollectorDatabaseCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    query: cdktf.stringToTerraform(struct!.query),
    query_validation_enabled: cdktf.booleanToTerraform(struct!.queryValidationEnabled),
  }
}


export function collectorInputCollectorDatabaseCollectorConfToHclTerraform(struct?: CollectorInputCollectorDatabaseCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValidationEnabled = this._queryValidationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._query = undefined;
      this._queryValidationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._query = value.query;
      this._queryValidationEnabled = value.queryValidationEnabled;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_validation_enabled - computed: false, optional: true, required: false
  private _queryValidationEnabled?: boolean | cdktf.IResolvable; 
  public get queryValidationEnabled() {
    return this.getBooleanAttribute('query_validation_enabled');
  }
  public set queryValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._queryValidationEnabled = value;
  }
  public resetQueryValidationEnabled() {
    this._queryValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValidationEnabledInput() {
    return this._queryValidationEnabled;
  }
}
export interface CollectorInputCollectorDatabaseCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorDatabaseCollectorConf;
  /**
  * must be "database"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorDatabaseCollectorToTerraform(struct?: CollectorInputCollectorDatabaseCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorDatabaseCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorDatabaseCollectorToHclTerraform(struct?: CollectorInputCollectorDatabaseCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorDatabaseCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseCollectorConf",
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

export class CollectorInputCollectorDatabaseCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorDatabaseCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorDatabaseCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorDatabaseInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorDatabaseInputMetadataToTerraform(struct?: CollectorInputCollectorDatabaseInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorDatabaseInputMetadataToHclTerraform(struct?: CollectorInputCollectorDatabaseInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorDatabaseInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorDatabaseInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorDatabaseInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorDatabaseInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorDatabaseInputMetadataOutputReference {
    return new CollectorInputCollectorDatabaseInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorDatabaseInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorDatabaseInputPreprocessToTerraform(struct?: CollectorInputCollectorDatabaseInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorDatabaseInputPreprocessToHclTerraform(struct?: CollectorInputCollectorDatabaseInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorDatabaseInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorDatabaseInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorDatabaseInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorDatabaseInputToTerraform(struct?: CollectorInputCollectorDatabaseInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorDatabaseInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorDatabaseInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorDatabaseInputToHclTerraform(struct?: CollectorInputCollectorDatabaseInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorDatabaseInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorDatabaseInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorDatabaseInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorDatabaseInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorDatabaseInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorDatabaseInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorDatabaseInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorDatabaseInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorDatabaseSavedState {
}

export function collectorInputCollectorDatabaseSavedStateToTerraform(struct?: CollectorInputCollectorDatabaseSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorDatabaseSavedStateToHclTerraform(struct?: CollectorInputCollectorDatabaseSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorDatabaseSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorDatabaseScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorDatabaseScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorDatabaseScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorDatabaseScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorDatabaseScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorDatabaseScheduleRunTimeWarning {
}

export function collectorInputCollectorDatabaseScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorDatabaseScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorDatabaseScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorDatabaseScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorDatabaseScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorDatabaseScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorDatabaseScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorDatabaseScheduleRunTimeWarning;
}

export function collectorInputCollectorDatabaseScheduleRunToTerraform(struct?: CollectorInputCollectorDatabaseScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorDatabaseScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorDatabaseScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorDatabaseScheduleRunToHclTerraform(struct?: CollectorInputCollectorDatabaseScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorDatabaseScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorDatabaseScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorDatabaseScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorDatabaseScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorDatabaseScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorDatabaseScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorDatabaseSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorDatabaseScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorDatabaseScheduleToTerraform(struct?: CollectorInputCollectorDatabaseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorDatabaseScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorDatabaseScheduleToHclTerraform(struct?: CollectorInputCollectorDatabaseSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorDatabaseScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabaseSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabaseSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorDatabaseScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorDatabaseScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorDatabaseCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorDatabaseInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorDatabaseSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorDatabaseSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorDatabaseToTerraform(struct?: CollectorInputCollectorDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorDatabaseCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorDatabaseInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorDatabaseSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorDatabaseScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorDatabaseToHclTerraform(struct?: CollectorInputCollectorDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorDatabaseCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorDatabaseInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorDatabaseSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseSavedState",
    },
    schedule: {
      value: collectorInputCollectorDatabaseScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorDatabaseSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorDatabaseCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorDatabaseCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorDatabaseInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorDatabaseInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorDatabaseSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorDatabaseSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorDatabaseScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorDatabaseSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorGcsCollectorConfExtractors {
}

export function collectorInputCollectorGcsCollectorConfExtractorsToTerraform(struct?: CollectorInputCollectorGcsCollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorGcsCollectorConfExtractorsToHclTerraform(struct?: CollectorInputCollectorGcsCollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorGcsCollectorConfExtractorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorGcsCollectorConfExtractors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsCollectorConfExtractors | cdktf.IResolvable | undefined) {
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
}

export class CollectorInputCollectorGcsCollectorConfExtractorsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorGcsCollectorConfExtractors[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorGcsCollectorConfExtractorsOutputReference {
    return new CollectorInputCollectorGcsCollectorConfExtractorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorGcsCollectorConf {
  /**
  * must be one of ["manual", "secret", "clientSecret", "clientCert"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_type Collector#auth_type}
  */
  readonly authType?: string;
  /**
  * GCS Bucket from which to collect data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#bucket Collector#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#extractors Collector#extractors}
  */
  readonly extractors?: CollectorInputCollectorGcsCollectorConfExtractors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_batch_size Collector#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Directory where data will be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#path Collector#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#recurse Collector#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#service_account_credentials Collector#service_account_credentials}
  */
  readonly serviceAccountCredentials?: string;
}

export function collectorInputCollectorGcsCollectorConfToTerraform(struct?: CollectorInputCollectorGcsCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    extractors: cdktf.listMapper(collectorInputCollectorGcsCollectorConfExtractorsToTerraform, false)(struct!.extractors),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    path: cdktf.stringToTerraform(struct!.path),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    service_account_credentials: cdktf.stringToTerraform(struct!.serviceAccountCredentials),
  }
}


export function collectorInputCollectorGcsCollectorConfToHclTerraform(struct?: CollectorInputCollectorGcsCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractors: {
      value: cdktf.listMapperHcl(collectorInputCollectorGcsCollectorConfExtractorsToHclTerraform, false)(struct!.extractors),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorGcsCollectorConfExtractorsList",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_credentials: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._serviceAccountCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._bucket = undefined;
      this._extractors.internalValue = undefined;
      this._maxBatchSize = undefined;
      this._path = undefined;
      this._recurse = undefined;
      this._serviceAccountCredentials = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._bucket = value.bucket;
      this._extractors.internalValue = value.extractors;
      this._maxBatchSize = value.maxBatchSize;
      this._path = value.path;
      this._recurse = value.recurse;
      this._serviceAccountCredentials = value.serviceAccountCredentials;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new CollectorInputCollectorGcsCollectorConfExtractorsList(this, "extractors", false);
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: CollectorInputCollectorGcsCollectorConfExtractors[] | cdktf.IResolvable) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // service_account_credentials - computed: false, optional: true, required: false
  private _serviceAccountCredentials?: string; 
  public get serviceAccountCredentials() {
    return this.getStringAttribute('service_account_credentials');
  }
  public set serviceAccountCredentials(value: string) {
    this._serviceAccountCredentials = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials;
  }
}
export interface CollectorInputCollectorGcsCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorGcsCollectorConf;
  /**
  * must be "gcs"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorGcsCollectorToTerraform(struct?: CollectorInputCollectorGcsCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorGcsCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorGcsCollectorToHclTerraform(struct?: CollectorInputCollectorGcsCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorGcsCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsCollectorConf",
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

export class CollectorInputCollectorGcsCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorGcsCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorGcsCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorGcsInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorGcsInputMetadataToTerraform(struct?: CollectorInputCollectorGcsInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorGcsInputMetadataToHclTerraform(struct?: CollectorInputCollectorGcsInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorGcsInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorGcsInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorGcsInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorGcsInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorGcsInputMetadataOutputReference {
    return new CollectorInputCollectorGcsInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorGcsInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorGcsInputPreprocessToTerraform(struct?: CollectorInputCollectorGcsInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorGcsInputPreprocessToHclTerraform(struct?: CollectorInputCollectorGcsInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorGcsInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorGcsInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorGcsInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorGcsInputToTerraform(struct?: CollectorInputCollectorGcsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorGcsInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorGcsInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorGcsInputToHclTerraform(struct?: CollectorInputCollectorGcsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorGcsInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorGcsInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorGcsInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorGcsInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorGcsInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorGcsInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorGcsInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorGcsInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorGcsSavedState {
}

export function collectorInputCollectorGcsSavedStateToTerraform(struct?: CollectorInputCollectorGcsSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorGcsSavedStateToHclTerraform(struct?: CollectorInputCollectorGcsSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorGcsSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorGcsScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorGcsScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorGcsScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorGcsScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorGcsScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorGcsScheduleRunTimeWarning {
}

export function collectorInputCollectorGcsScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorGcsScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorGcsScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorGcsScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorGcsScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorGcsScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorGcsScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorGcsScheduleRunTimeWarning;
}

export function collectorInputCollectorGcsScheduleRunToTerraform(struct?: CollectorInputCollectorGcsScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorGcsScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorGcsScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorGcsScheduleRunToHclTerraform(struct?: CollectorInputCollectorGcsScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorGcsScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorGcsScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorGcsScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorGcsScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorGcsScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorGcsScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorGcsSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorGcsScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorGcsScheduleToTerraform(struct?: CollectorInputCollectorGcsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorGcsScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorGcsScheduleToHclTerraform(struct?: CollectorInputCollectorGcsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorGcsScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcsSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcsSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorGcsScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorGcsScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorGcsCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorGcsInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorGcsSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorGcsSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorGcsToTerraform(struct?: CollectorInputCollectorGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorGcsCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorGcsInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorGcsSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorGcsScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorGcsToHclTerraform(struct?: CollectorInputCollectorGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorGcsCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorGcsInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorGcsSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsSavedState",
    },
    schedule: {
      value: collectorInputCollectorGcsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorGcsSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorGcsCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorGcsCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorGcsInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorGcsInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorGcsSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorGcsSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorGcsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorGcsSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorHealthCheckCollectorConf {
  /**
  * must be one of ["none", "basic", "basicSecret", "token", "tokenSecret", "login", "loginSecret", "oauth", "oauthSecret", "google_oauth", "google_oauthSecret", "hmac"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#authentication Collector#authentication}
  */
  readonly authentication?: string;
  /**
  * must be one of ["get", "post", "post_with_body", "other"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_method Collector#collect_method}
  */
  readonly collectMethod?: string;
  /**
  * URL to use for the Collect operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_url Collector#collect_url}
  */
  readonly collectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#credentials_secret Collector#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#password Collector#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reject_unauthorized Collector#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#timeout Collector#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#username Collector#username}
  */
  readonly username?: string;
}

export function collectorInputCollectorHealthCheckCollectorConfToTerraform(struct?: CollectorInputCollectorHealthCheckCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    collect_method: cdktf.stringToTerraform(struct!.collectMethod),
    collect_url: cdktf.stringToTerraform(struct!.collectUrl),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    password: cdktf.stringToTerraform(struct!.password),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function collectorInputCollectorHealthCheckCollectorConfToHclTerraform(struct?: CollectorInputCollectorHealthCheckCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_method: {
      value: cdktf.stringToHclTerraform(struct!.collectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_url: {
      value: cdktf.stringToHclTerraform(struct!.collectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._collectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectMethod = this._collectMethod;
    }
    if (this._collectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectUrl = this._collectUrl;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._collectMethod = undefined;
      this._collectUrl = undefined;
      this._credentialsSecret = undefined;
      this._password = undefined;
      this._rejectUnauthorized = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._collectMethod = value.collectMethod;
      this._collectUrl = value.collectUrl;
      this._credentialsSecret = value.credentialsSecret;
      this._password = value.password;
      this._rejectUnauthorized = value.rejectUnauthorized;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // collect_method - computed: false, optional: true, required: false
  private _collectMethod?: string; 
  public get collectMethod() {
    return this.getStringAttribute('collect_method');
  }
  public set collectMethod(value: string) {
    this._collectMethod = value;
  }
  public resetCollectMethod() {
    this._collectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectMethodInput() {
    return this._collectMethod;
  }

  // collect_url - computed: false, optional: true, required: false
  private _collectUrl?: string; 
  public get collectUrl() {
    return this.getStringAttribute('collect_url');
  }
  public set collectUrl(value: string) {
    this._collectUrl = value;
  }
  public resetCollectUrl() {
    this._collectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectUrlInput() {
    return this._collectUrl;
  }

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // reject_unauthorized - computed: false, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CollectorInputCollectorHealthCheckCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorHealthCheckCollectorConf;
  /**
  * must be "healthcheck"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorHealthCheckCollectorToTerraform(struct?: CollectorInputCollectorHealthCheckCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorHealthCheckCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorHealthCheckCollectorToHclTerraform(struct?: CollectorInputCollectorHealthCheckCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorHealthCheckCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckCollectorConf",
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

export class CollectorInputCollectorHealthCheckCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorHealthCheckCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorHealthCheckCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorHealthCheckInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorHealthCheckInputMetadataToTerraform(struct?: CollectorInputCollectorHealthCheckInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorHealthCheckInputMetadataToHclTerraform(struct?: CollectorInputCollectorHealthCheckInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorHealthCheckInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorHealthCheckInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorHealthCheckInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorHealthCheckInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorHealthCheckInputMetadataOutputReference {
    return new CollectorInputCollectorHealthCheckInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorHealthCheckInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorHealthCheckInputPreprocessToTerraform(struct?: CollectorInputCollectorHealthCheckInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorHealthCheckInputPreprocessToHclTerraform(struct?: CollectorInputCollectorHealthCheckInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorHealthCheckInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorHealthCheckInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorHealthCheckInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorHealthCheckInputToTerraform(struct?: CollectorInputCollectorHealthCheckInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorHealthCheckInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorHealthCheckInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorHealthCheckInputToHclTerraform(struct?: CollectorInputCollectorHealthCheckInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorHealthCheckInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorHealthCheckInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorHealthCheckInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorHealthCheckInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorHealthCheckInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorHealthCheckInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorHealthCheckInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorHealthCheckInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorHealthCheckSavedState {
}

export function collectorInputCollectorHealthCheckSavedStateToTerraform(struct?: CollectorInputCollectorHealthCheckSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorHealthCheckSavedStateToHclTerraform(struct?: CollectorInputCollectorHealthCheckSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorHealthCheckSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorHealthCheckScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorHealthCheckScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorHealthCheckScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorHealthCheckScheduleRunTimeWarning {
}

export function collectorInputCollectorHealthCheckScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorHealthCheckScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorHealthCheckScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorHealthCheckScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorHealthCheckScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorHealthCheckScheduleRunTimeWarning;
}

export function collectorInputCollectorHealthCheckScheduleRunToTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorHealthCheckScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorHealthCheckScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorHealthCheckScheduleRunToHclTerraform(struct?: CollectorInputCollectorHealthCheckScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorHealthCheckScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorHealthCheckScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorHealthCheckScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorHealthCheckScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorHealthCheckScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorHealthCheckScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorHealthCheckSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorHealthCheckScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorHealthCheckScheduleToTerraform(struct?: CollectorInputCollectorHealthCheckSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorHealthCheckScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorHealthCheckScheduleToHclTerraform(struct?: CollectorInputCollectorHealthCheckSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorHealthCheckScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheckSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheckSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorHealthCheckScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorHealthCheckScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorHealthCheckCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorHealthCheckInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorHealthCheckSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorHealthCheckSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorHealthCheckToTerraform(struct?: CollectorInputCollectorHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorHealthCheckCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorHealthCheckInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorHealthCheckSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorHealthCheckScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorHealthCheckToHclTerraform(struct?: CollectorInputCollectorHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorHealthCheckCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorHealthCheckInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorHealthCheckSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckSavedState",
    },
    schedule: {
      value: collectorInputCollectorHealthCheckScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorHealthCheckSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorHealthCheckCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorHealthCheckCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorHealthCheckInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorHealthCheckInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorHealthCheckSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorHealthCheckSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorHealthCheckScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorHealthCheckSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorRestCollectorConfAuthRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorInputCollectorRestCollectorConfAuthRequestHeadersToTerraform(struct?: CollectorInputCollectorRestCollectorConfAuthRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestCollectorConfAuthRequestHeadersToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfAuthRequestHeaders | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestCollectorConfAuthRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfAuthRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfAuthRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class CollectorInputCollectorRestCollectorConfAuthRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfAuthRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfAuthRequestHeadersOutputReference {
    return new CollectorInputCollectorRestCollectorConfAuthRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfAuthRequestParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorInputCollectorRestCollectorConfAuthRequestParamsToTerraform(struct?: CollectorInputCollectorRestCollectorConfAuthRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestCollectorConfAuthRequestParamsToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfAuthRequestParams | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestCollectorConfAuthRequestParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfAuthRequestParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfAuthRequestParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class CollectorInputCollectorRestCollectorConfAuthRequestParamsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfAuthRequestParams[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfAuthRequestParamsOutputReference {
    return new CollectorInputCollectorRestCollectorConfAuthRequestParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfCollectRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorInputCollectorRestCollectorConfCollectRequestHeadersToTerraform(struct?: CollectorInputCollectorRestCollectorConfCollectRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestCollectorConfCollectRequestHeadersToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfCollectRequestHeaders | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestCollectorConfCollectRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfCollectRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfCollectRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class CollectorInputCollectorRestCollectorConfCollectRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfCollectRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfCollectRequestHeadersOutputReference {
    return new CollectorInputCollectorRestCollectorConfCollectRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfCollectRequestParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorInputCollectorRestCollectorConfCollectRequestParamsToTerraform(struct?: CollectorInputCollectorRestCollectorConfCollectRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestCollectorConfCollectRequestParamsToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfCollectRequestParams | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestCollectorConfCollectRequestParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfCollectRequestParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfCollectRequestParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class CollectorInputCollectorRestCollectorConfCollectRequestParamsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfCollectRequestParams[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfCollectRequestParamsOutputReference {
    return new CollectorInputCollectorRestCollectorConfCollectRequestParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersToTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersOutputReference {
    return new CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams {
}

export function collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsToTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams | cdktf.IResolvable | undefined) {
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
}

export class CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsOutputReference {
    return new CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestCollectorConfDiscoveryPagination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#attribute Collector#attribute}
  */
  readonly attribute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#last_page_expr Collector#last_page_expr}
  */
  readonly lastPageExpr?: string;
  /**
  * Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#limit Collector#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#limit_field Collector#limit_field}
  */
  readonly limitField?: string;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_pages Collector#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#offset Collector#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#offset_field Collector#offset_field}
  */
  readonly offsetField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#page_field Collector#page_field}
  */
  readonly pageField?: string;
  /**
  * Default: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#size Collector#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#size_field Collector#size_field}
  */
  readonly sizeField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#total_record_field Collector#total_record_field}
  */
  readonly totalRecordField?: string;
  /**
  * Default: "none"; must be one of ["none", "offset", "cursor", "page"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#zero_indexed Collector#zero_indexed}
  */
  readonly zeroIndexed?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorRestCollectorConfDiscoveryPaginationToTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attribute),
    last_page_expr: cdktf.stringToTerraform(struct!.lastPageExpr),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_field: cdktf.stringToTerraform(struct!.limitField),
    max_pages: cdktf.numberToTerraform(struct!.maxPages),
    offset: cdktf.numberToTerraform(struct!.offset),
    offset_field: cdktf.stringToTerraform(struct!.offsetField),
    page_field: cdktf.stringToTerraform(struct!.pageField),
    size: cdktf.numberToTerraform(struct!.size),
    size_field: cdktf.stringToTerraform(struct!.sizeField),
    total_record_field: cdktf.stringToTerraform(struct!.totalRecordField),
    type: cdktf.stringToTerraform(struct!.type),
    zero_indexed: cdktf.booleanToTerraform(struct!.zeroIndexed),
  }
}


export function collectorInputCollectorRestCollectorConfDiscoveryPaginationToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscoveryPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attribute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    last_page_expr: {
      value: cdktf.stringToHclTerraform(struct!.lastPageExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_field: {
      value: cdktf.stringToHclTerraform(struct!.limitField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pages: {
      value: cdktf.numberToHclTerraform(struct!.maxPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_field: {
      value: cdktf.stringToHclTerraform(struct!.offsetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_field: {
      value: cdktf.stringToHclTerraform(struct!.pageField),
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
    size_field: {
      value: cdktf.stringToHclTerraform(struct!.sizeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_record_field: {
      value: cdktf.stringToHclTerraform(struct!.totalRecordField),
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
    zero_indexed: {
      value: cdktf.booleanToHclTerraform(struct!.zeroIndexed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestCollectorConfDiscoveryPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfDiscoveryPagination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._lastPageExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastPageExpr = this._lastPageExpr;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitField !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitField = this._limitField;
    }
    if (this._maxPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPages = this._maxPages;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._offsetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetField = this._offsetField;
    }
    if (this._pageField !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageField = this._pageField;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeField = this._sizeField;
    }
    if (this._totalRecordField !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRecordField = this._totalRecordField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zeroIndexed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroIndexed = this._zeroIndexed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfDiscoveryPagination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._lastPageExpr = undefined;
      this._limit = undefined;
      this._limitField = undefined;
      this._maxPages = undefined;
      this._offset = undefined;
      this._offsetField = undefined;
      this._pageField = undefined;
      this._size = undefined;
      this._sizeField = undefined;
      this._totalRecordField = undefined;
      this._type = undefined;
      this._zeroIndexed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._lastPageExpr = value.lastPageExpr;
      this._limit = value.limit;
      this._limitField = value.limitField;
      this._maxPages = value.maxPages;
      this._offset = value.offset;
      this._offsetField = value.offsetField;
      this._pageField = value.pageField;
      this._size = value.size;
      this._sizeField = value.sizeField;
      this._totalRecordField = value.totalRecordField;
      this._type = value.type;
      this._zeroIndexed = value.zeroIndexed;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string[]; 
  public get attribute() {
    return this.getListAttribute('attribute');
  }
  public set attribute(value: string[]) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // last_page_expr - computed: false, optional: true, required: false
  private _lastPageExpr?: string; 
  public get lastPageExpr() {
    return this.getStringAttribute('last_page_expr');
  }
  public set lastPageExpr(value: string) {
    this._lastPageExpr = value;
  }
  public resetLastPageExpr() {
    this._lastPageExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPageExprInput() {
    return this._lastPageExpr;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_field - computed: false, optional: true, required: false
  private _limitField?: string; 
  public get limitField() {
    return this.getStringAttribute('limit_field');
  }
  public set limitField(value: string) {
    this._limitField = value;
  }
  public resetLimitField() {
    this._limitField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitFieldInput() {
    return this._limitField;
  }

  // max_pages - computed: true, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // offset_field - computed: false, optional: true, required: false
  private _offsetField?: string; 
  public get offsetField() {
    return this.getStringAttribute('offset_field');
  }
  public set offsetField(value: string) {
    this._offsetField = value;
  }
  public resetOffsetField() {
    this._offsetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFieldInput() {
    return this._offsetField;
  }

  // page_field - computed: false, optional: true, required: false
  private _pageField?: string; 
  public get pageField() {
    return this.getStringAttribute('page_field');
  }
  public set pageField(value: string) {
    this._pageField = value;
  }
  public resetPageField() {
    this._pageField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFieldInput() {
    return this._pageField;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_field - computed: false, optional: true, required: false
  private _sizeField?: string; 
  public get sizeField() {
    return this.getStringAttribute('size_field');
  }
  public set sizeField(value: string) {
    this._sizeField = value;
  }
  public resetSizeField() {
    this._sizeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeFieldInput() {
    return this._sizeField;
  }

  // total_record_field - computed: false, optional: true, required: false
  private _totalRecordField?: string; 
  public get totalRecordField() {
    return this.getStringAttribute('total_record_field');
  }
  public set totalRecordField(value: string) {
    this._totalRecordField = value;
  }
  public resetTotalRecordField() {
    this._totalRecordField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRecordFieldInput() {
    return this._totalRecordField;
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

  // zero_indexed - computed: true, optional: true, required: false
  private _zeroIndexed?: boolean | cdktf.IResolvable; 
  public get zeroIndexed() {
    return this.getBooleanAttribute('zero_indexed');
  }
  public set zeroIndexed(value: boolean | cdktf.IResolvable) {
    this._zeroIndexed = value;
  }
  public resetZeroIndexed() {
    this._zeroIndexed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroIndexedInput() {
    return this._zeroIndexed;
  }
}
export interface CollectorInputCollectorRestCollectorConfDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_body Collector#discover_body}
  */
  readonly discoverBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_data_field Collector#discover_data_field}
  */
  readonly discoverDataField?: string;
  /**
  * must be one of ["get", "post", "post_with_body", "other"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_method Collector#discover_method}
  */
  readonly discoverMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_request_headers Collector#discover_request_headers}
  */
  readonly discoverRequestHeaders?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_request_params Collector#discover_request_params}
  */
  readonly discoverRequestParams?: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams[] | cdktf.IResolvable;
  /**
  * must be "http"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_type Collector#discover_type}
  */
  readonly discoverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discover_url Collector#discover_url}
  */
  readonly discoverUrl?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enable_discover_code Collector#enable_discover_code}
  */
  readonly enableDiscoverCode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#format_result_code Collector#format_result_code}
  */
  readonly formatResultCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#item_list Collector#item_list}
  */
  readonly itemList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pagination Collector#pagination}
  */
  readonly pagination?: CollectorInputCollectorRestCollectorConfDiscoveryPagination;
}

export function collectorInputCollectorRestCollectorConfDiscoveryToTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discover_body: cdktf.stringToTerraform(struct!.discoverBody),
    discover_data_field: cdktf.stringToTerraform(struct!.discoverDataField),
    discover_method: cdktf.stringToTerraform(struct!.discoverMethod),
    discover_request_headers: cdktf.listMapper(collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersToTerraform, false)(struct!.discoverRequestHeaders),
    discover_request_params: cdktf.listMapper(collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsToTerraform, false)(struct!.discoverRequestParams),
    discover_type: cdktf.stringToTerraform(struct!.discoverType),
    discover_url: cdktf.stringToTerraform(struct!.discoverUrl),
    enable_discover_code: cdktf.booleanToTerraform(struct!.enableDiscoverCode),
    format_result_code: cdktf.stringToTerraform(struct!.formatResultCode),
    item_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.itemList),
    pagination: collectorInputCollectorRestCollectorConfDiscoveryPaginationToTerraform(struct!.pagination),
  }
}


export function collectorInputCollectorRestCollectorConfDiscoveryToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discover_body: {
      value: cdktf.stringToHclTerraform(struct!.discoverBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_data_field: {
      value: cdktf.stringToHclTerraform(struct!.discoverDataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_method: {
      value: cdktf.stringToHclTerraform(struct!.discoverMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_request_headers: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersToHclTerraform, false)(struct!.discoverRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersList",
    },
    discover_request_params: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsToHclTerraform, false)(struct!.discoverRequestParams),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsList",
    },
    discover_type: {
      value: cdktf.stringToHclTerraform(struct!.discoverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_url: {
      value: cdktf.stringToHclTerraform(struct!.discoverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_discover_code: {
      value: cdktf.booleanToHclTerraform(struct!.enableDiscoverCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format_result_code: {
      value: cdktf.stringToHclTerraform(struct!.formatResultCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.itemList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pagination: {
      value: collectorInputCollectorRestCollectorConfDiscoveryPaginationToHclTerraform(struct!.pagination),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfDiscoveryPagination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestCollectorConfDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoverBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverBody = this._discoverBody;
    }
    if (this._discoverDataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverDataField = this._discoverDataField;
    }
    if (this._discoverMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverMethod = this._discoverMethod;
    }
    if (this._discoverRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverRequestHeaders = this._discoverRequestHeaders?.internalValue;
    }
    if (this._discoverRequestParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverRequestParams = this._discoverRequestParams?.internalValue;
    }
    if (this._discoverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverType = this._discoverType;
    }
    if (this._discoverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverUrl = this._discoverUrl;
    }
    if (this._enableDiscoverCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDiscoverCode = this._enableDiscoverCode;
    }
    if (this._formatResultCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatResultCode = this._formatResultCode;
    }
    if (this._itemList !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemList = this._itemList;
    }
    if (this._pagination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagination = this._pagination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoverBody = undefined;
      this._discoverDataField = undefined;
      this._discoverMethod = undefined;
      this._discoverRequestHeaders.internalValue = undefined;
      this._discoverRequestParams.internalValue = undefined;
      this._discoverType = undefined;
      this._discoverUrl = undefined;
      this._enableDiscoverCode = undefined;
      this._formatResultCode = undefined;
      this._itemList = undefined;
      this._pagination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoverBody = value.discoverBody;
      this._discoverDataField = value.discoverDataField;
      this._discoverMethod = value.discoverMethod;
      this._discoverRequestHeaders.internalValue = value.discoverRequestHeaders;
      this._discoverRequestParams.internalValue = value.discoverRequestParams;
      this._discoverType = value.discoverType;
      this._discoverUrl = value.discoverUrl;
      this._enableDiscoverCode = value.enableDiscoverCode;
      this._formatResultCode = value.formatResultCode;
      this._itemList = value.itemList;
      this._pagination.internalValue = value.pagination;
    }
  }

  // discover_body - computed: false, optional: true, required: false
  private _discoverBody?: string; 
  public get discoverBody() {
    return this.getStringAttribute('discover_body');
  }
  public set discoverBody(value: string) {
    this._discoverBody = value;
  }
  public resetDiscoverBody() {
    this._discoverBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverBodyInput() {
    return this._discoverBody;
  }

  // discover_data_field - computed: false, optional: true, required: false
  private _discoverDataField?: string; 
  public get discoverDataField() {
    return this.getStringAttribute('discover_data_field');
  }
  public set discoverDataField(value: string) {
    this._discoverDataField = value;
  }
  public resetDiscoverDataField() {
    this._discoverDataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverDataFieldInput() {
    return this._discoverDataField;
  }

  // discover_method - computed: false, optional: true, required: false
  private _discoverMethod?: string; 
  public get discoverMethod() {
    return this.getStringAttribute('discover_method');
  }
  public set discoverMethod(value: string) {
    this._discoverMethod = value;
  }
  public resetDiscoverMethod() {
    this._discoverMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverMethodInput() {
    return this._discoverMethod;
  }

  // discover_request_headers - computed: false, optional: true, required: false
  private _discoverRequestHeaders = new CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeadersList(this, "discover_request_headers", false);
  public get discoverRequestHeaders() {
    return this._discoverRequestHeaders;
  }
  public putDiscoverRequestHeaders(value: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestHeaders[] | cdktf.IResolvable) {
    this._discoverRequestHeaders.internalValue = value;
  }
  public resetDiscoverRequestHeaders() {
    this._discoverRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverRequestHeadersInput() {
    return this._discoverRequestHeaders.internalValue;
  }

  // discover_request_params - computed: false, optional: true, required: false
  private _discoverRequestParams = new CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParamsList(this, "discover_request_params", false);
  public get discoverRequestParams() {
    return this._discoverRequestParams;
  }
  public putDiscoverRequestParams(value: CollectorInputCollectorRestCollectorConfDiscoveryDiscoverRequestParams[] | cdktf.IResolvable) {
    this._discoverRequestParams.internalValue = value;
  }
  public resetDiscoverRequestParams() {
    this._discoverRequestParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverRequestParamsInput() {
    return this._discoverRequestParams.internalValue;
  }

  // discover_type - computed: false, optional: true, required: false
  private _discoverType?: string; 
  public get discoverType() {
    return this.getStringAttribute('discover_type');
  }
  public set discoverType(value: string) {
    this._discoverType = value;
  }
  public resetDiscoverType() {
    this._discoverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverTypeInput() {
    return this._discoverType;
  }

  // discover_url - computed: false, optional: true, required: false
  private _discoverUrl?: string; 
  public get discoverUrl() {
    return this.getStringAttribute('discover_url');
  }
  public set discoverUrl(value: string) {
    this._discoverUrl = value;
  }
  public resetDiscoverUrl() {
    this._discoverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverUrlInput() {
    return this._discoverUrl;
  }

  // enable_discover_code - computed: true, optional: true, required: false
  private _enableDiscoverCode?: boolean | cdktf.IResolvable; 
  public get enableDiscoverCode() {
    return this.getBooleanAttribute('enable_discover_code');
  }
  public set enableDiscoverCode(value: boolean | cdktf.IResolvable) {
    this._enableDiscoverCode = value;
  }
  public resetEnableDiscoverCode() {
    this._enableDiscoverCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiscoverCodeInput() {
    return this._enableDiscoverCode;
  }

  // format_result_code - computed: false, optional: true, required: false
  private _formatResultCode?: string; 
  public get formatResultCode() {
    return this.getStringAttribute('format_result_code');
  }
  public set formatResultCode(value: string) {
    this._formatResultCode = value;
  }
  public resetFormatResultCode() {
    this._formatResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatResultCodeInput() {
    return this._formatResultCode;
  }

  // item_list - computed: false, optional: true, required: false
  private _itemList?: string[]; 
  public get itemList() {
    return this.getListAttribute('item_list');
  }
  public set itemList(value: string[]) {
    this._itemList = value;
  }
  public resetItemList() {
    this._itemList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemListInput() {
    return this._itemList;
  }

  // pagination - computed: false, optional: true, required: false
  private _pagination = new CollectorInputCollectorRestCollectorConfDiscoveryPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: CollectorInputCollectorRestCollectorConfDiscoveryPagination) {
    this._pagination.internalValue = value;
  }
  public resetPagination() {
    this._pagination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }
}
export interface CollectorInputCollectorRestCollectorConfPagination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#attribute Collector#attribute}
  */
  readonly attribute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#last_page_expr Collector#last_page_expr}
  */
  readonly lastPageExpr?: string;
  /**
  * Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#limit Collector#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#limit_field Collector#limit_field}
  */
  readonly limitField?: string;
  /**
  * Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_pages Collector#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#offset Collector#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#offset_field Collector#offset_field}
  */
  readonly offsetField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#page_field Collector#page_field}
  */
  readonly pageField?: string;
  /**
  * Default: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#size Collector#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#size_field Collector#size_field}
  */
  readonly sizeField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#total_record_field Collector#total_record_field}
  */
  readonly totalRecordField?: string;
  /**
  * Default: "none"; must be one of ["none", "offset", "cursor", "page"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#zero_indexed Collector#zero_indexed}
  */
  readonly zeroIndexed?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorRestCollectorConfPaginationToTerraform(struct?: CollectorInputCollectorRestCollectorConfPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attribute),
    last_page_expr: cdktf.stringToTerraform(struct!.lastPageExpr),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_field: cdktf.stringToTerraform(struct!.limitField),
    max_pages: cdktf.numberToTerraform(struct!.maxPages),
    offset: cdktf.numberToTerraform(struct!.offset),
    offset_field: cdktf.stringToTerraform(struct!.offsetField),
    page_field: cdktf.stringToTerraform(struct!.pageField),
    size: cdktf.numberToTerraform(struct!.size),
    size_field: cdktf.stringToTerraform(struct!.sizeField),
    total_record_field: cdktf.stringToTerraform(struct!.totalRecordField),
    type: cdktf.stringToTerraform(struct!.type),
    zero_indexed: cdktf.booleanToTerraform(struct!.zeroIndexed),
  }
}


export function collectorInputCollectorRestCollectorConfPaginationToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attribute),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    last_page_expr: {
      value: cdktf.stringToHclTerraform(struct!.lastPageExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_field: {
      value: cdktf.stringToHclTerraform(struct!.limitField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pages: {
      value: cdktf.numberToHclTerraform(struct!.maxPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_field: {
      value: cdktf.stringToHclTerraform(struct!.offsetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_field: {
      value: cdktf.stringToHclTerraform(struct!.pageField),
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
    size_field: {
      value: cdktf.stringToHclTerraform(struct!.sizeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_record_field: {
      value: cdktf.stringToHclTerraform(struct!.totalRecordField),
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
    zero_indexed: {
      value: cdktf.booleanToHclTerraform(struct!.zeroIndexed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestCollectorConfPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfPagination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._lastPageExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastPageExpr = this._lastPageExpr;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitField !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitField = this._limitField;
    }
    if (this._maxPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPages = this._maxPages;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._offsetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetField = this._offsetField;
    }
    if (this._pageField !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageField = this._pageField;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeField = this._sizeField;
    }
    if (this._totalRecordField !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRecordField = this._totalRecordField;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zeroIndexed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroIndexed = this._zeroIndexed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfPagination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._lastPageExpr = undefined;
      this._limit = undefined;
      this._limitField = undefined;
      this._maxPages = undefined;
      this._offset = undefined;
      this._offsetField = undefined;
      this._pageField = undefined;
      this._size = undefined;
      this._sizeField = undefined;
      this._totalRecordField = undefined;
      this._type = undefined;
      this._zeroIndexed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._lastPageExpr = value.lastPageExpr;
      this._limit = value.limit;
      this._limitField = value.limitField;
      this._maxPages = value.maxPages;
      this._offset = value.offset;
      this._offsetField = value.offsetField;
      this._pageField = value.pageField;
      this._size = value.size;
      this._sizeField = value.sizeField;
      this._totalRecordField = value.totalRecordField;
      this._type = value.type;
      this._zeroIndexed = value.zeroIndexed;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string[]; 
  public get attribute() {
    return this.getListAttribute('attribute');
  }
  public set attribute(value: string[]) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // last_page_expr - computed: false, optional: true, required: false
  private _lastPageExpr?: string; 
  public get lastPageExpr() {
    return this.getStringAttribute('last_page_expr');
  }
  public set lastPageExpr(value: string) {
    this._lastPageExpr = value;
  }
  public resetLastPageExpr() {
    this._lastPageExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPageExprInput() {
    return this._lastPageExpr;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_field - computed: false, optional: true, required: false
  private _limitField?: string; 
  public get limitField() {
    return this.getStringAttribute('limit_field');
  }
  public set limitField(value: string) {
    this._limitField = value;
  }
  public resetLimitField() {
    this._limitField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitFieldInput() {
    return this._limitField;
  }

  // max_pages - computed: true, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // offset_field - computed: false, optional: true, required: false
  private _offsetField?: string; 
  public get offsetField() {
    return this.getStringAttribute('offset_field');
  }
  public set offsetField(value: string) {
    this._offsetField = value;
  }
  public resetOffsetField() {
    this._offsetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFieldInput() {
    return this._offsetField;
  }

  // page_field - computed: false, optional: true, required: false
  private _pageField?: string; 
  public get pageField() {
    return this.getStringAttribute('page_field');
  }
  public set pageField(value: string) {
    this._pageField = value;
  }
  public resetPageField() {
    this._pageField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFieldInput() {
    return this._pageField;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_field - computed: false, optional: true, required: false
  private _sizeField?: string; 
  public get sizeField() {
    return this.getStringAttribute('size_field');
  }
  public set sizeField(value: string) {
    this._sizeField = value;
  }
  public resetSizeField() {
    this._sizeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeFieldInput() {
    return this._sizeField;
  }

  // total_record_field - computed: false, optional: true, required: false
  private _totalRecordField?: string; 
  public get totalRecordField() {
    return this.getStringAttribute('total_record_field');
  }
  public set totalRecordField(value: string) {
    this._totalRecordField = value;
  }
  public resetTotalRecordField() {
    this._totalRecordField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRecordFieldInput() {
    return this._totalRecordField;
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

  // zero_indexed - computed: true, optional: true, required: false
  private _zeroIndexed?: boolean | cdktf.IResolvable; 
  public get zeroIndexed() {
    return this.getBooleanAttribute('zero_indexed');
  }
  public set zeroIndexed(value: boolean | cdktf.IResolvable) {
    this._zeroIndexed = value;
  }
  public resetZeroIndexed() {
    this._zeroIndexed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroIndexedInput() {
    return this._zeroIndexed;
  }
}
export interface CollectorInputCollectorRestCollectorConfRetryRules {
  /**
  * Default: [429,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#codes Collector#codes}
  */
  readonly codes?: number[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enable_header Collector#enable_header}
  */
  readonly enableHeader?: boolean | cdktf.IResolvable;
  /**
  * Default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#interval Collector#interval}
  */
  readonly interval?: number;
  /**
  * Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#limit Collector#limit}
  */
  readonly limit?: number;
  /**
  * Default: 20000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_interval_ms Collector#max_interval_ms}
  */
  readonly maxIntervalMs?: number;
  /**
  * Default: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#multiplier Collector#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#retry_connect_reset Collector#retry_connect_reset}
  */
  readonly retryConnectReset?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#retry_connect_timeout Collector#retry_connect_timeout}
  */
  readonly retryConnectTimeout?: boolean | cdktf.IResolvable;
  /**
  * Default: "retry-after"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#retry_header_name Collector#retry_header_name}
  */
  readonly retryHeaderName?: string;
  /**
  * Default: "backoff"; must be one of ["backoff", "fixed"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorRestCollectorConfRetryRulesToTerraform(struct?: CollectorInputCollectorRestCollectorConfRetryRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    enable_header: cdktf.booleanToTerraform(struct!.enableHeader),
    interval: cdktf.numberToTerraform(struct!.interval),
    limit: cdktf.numberToTerraform(struct!.limit),
    max_interval_ms: cdktf.numberToTerraform(struct!.maxIntervalMs),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    retry_connect_reset: cdktf.booleanToTerraform(struct!.retryConnectReset),
    retry_connect_timeout: cdktf.booleanToTerraform(struct!.retryConnectTimeout),
    retry_header_name: cdktf.stringToTerraform(struct!.retryHeaderName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorRestCollectorConfRetryRulesToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfRetryRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enable_header: {
      value: cdktf.booleanToHclTerraform(struct!.enableHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_connect_reset: {
      value: cdktf.booleanToHclTerraform(struct!.retryConnectReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_connect_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.retryConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_header_name: {
      value: cdktf.stringToHclTerraform(struct!.retryHeaderName),
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

export class CollectorInputCollectorRestCollectorConfRetryRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfRetryRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._enableHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHeader = this._enableHeader;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._maxIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIntervalMs = this._maxIntervalMs;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._retryConnectReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConnectReset = this._retryConnectReset;
    }
    if (this._retryConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConnectTimeout = this._retryConnectTimeout;
    }
    if (this._retryHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryHeaderName = this._retryHeaderName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfRetryRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codes = undefined;
      this._enableHeader = undefined;
      this._interval = undefined;
      this._limit = undefined;
      this._maxIntervalMs = undefined;
      this._multiplier = undefined;
      this._retryConnectReset = undefined;
      this._retryConnectTimeout = undefined;
      this._retryHeaderName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codes = value.codes;
      this._enableHeader = value.enableHeader;
      this._interval = value.interval;
      this._limit = value.limit;
      this._maxIntervalMs = value.maxIntervalMs;
      this._multiplier = value.multiplier;
      this._retryConnectReset = value.retryConnectReset;
      this._retryConnectTimeout = value.retryConnectTimeout;
      this._retryHeaderName = value.retryHeaderName;
      this._type = value.type;
    }
  }

  // codes - computed: true, optional: true, required: false
  private _codes?: number[]; 
  public get codes() {
    return this.getNumberListAttribute('codes');
  }
  public set codes(value: number[]) {
    this._codes = value;
  }
  public resetCodes() {
    this._codes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // enable_header - computed: true, optional: true, required: false
  private _enableHeader?: boolean | cdktf.IResolvable; 
  public get enableHeader() {
    return this.getBooleanAttribute('enable_header');
  }
  public set enableHeader(value: boolean | cdktf.IResolvable) {
    this._enableHeader = value;
  }
  public resetEnableHeader() {
    this._enableHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHeaderInput() {
    return this._enableHeader;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // max_interval_ms - computed: true, optional: true, required: false
  private _maxIntervalMs?: number; 
  public get maxIntervalMs() {
    return this.getNumberAttribute('max_interval_ms');
  }
  public set maxIntervalMs(value: number) {
    this._maxIntervalMs = value;
  }
  public resetMaxIntervalMs() {
    this._maxIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalMsInput() {
    return this._maxIntervalMs;
  }

  // multiplier - computed: true, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // retry_connect_reset - computed: true, optional: true, required: false
  private _retryConnectReset?: boolean | cdktf.IResolvable; 
  public get retryConnectReset() {
    return this.getBooleanAttribute('retry_connect_reset');
  }
  public set retryConnectReset(value: boolean | cdktf.IResolvable) {
    this._retryConnectReset = value;
  }
  public resetRetryConnectReset() {
    this._retryConnectReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConnectResetInput() {
    return this._retryConnectReset;
  }

  // retry_connect_timeout - computed: true, optional: true, required: false
  private _retryConnectTimeout?: boolean | cdktf.IResolvable; 
  public get retryConnectTimeout() {
    return this.getBooleanAttribute('retry_connect_timeout');
  }
  public set retryConnectTimeout(value: boolean | cdktf.IResolvable) {
    this._retryConnectTimeout = value;
  }
  public resetRetryConnectTimeout() {
    this._retryConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConnectTimeoutInput() {
    return this._retryConnectTimeout;
  }

  // retry_header_name - computed: true, optional: true, required: false
  private _retryHeaderName?: string; 
  public get retryHeaderName() {
    return this.getStringAttribute('retry_header_name');
  }
  public set retryHeaderName(value: string) {
    this._retryHeaderName = value;
  }
  public resetRetryHeaderName() {
    this._retryHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryHeaderNameInput() {
    return this._retryHeaderName;
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
}
export interface CollectorInputCollectorRestCollectorConfSchedulingStateTracking {
}

export function collectorInputCollectorRestCollectorConfSchedulingStateTrackingToTerraform(struct?: CollectorInputCollectorRestCollectorConfSchedulingStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorRestCollectorConfSchedulingStateTrackingToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfSchedulingStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorRestCollectorConfSchedulingStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfSchedulingStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfSchedulingStateTracking | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorRestCollectorConfScheduling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorRestCollectorConfSchedulingStateTracking;
}

export function collectorInputCollectorRestCollectorConfSchedulingToTerraform(struct?: CollectorInputCollectorRestCollectorConfScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state_tracking: collectorInputCollectorRestCollectorConfSchedulingStateTrackingToTerraform(struct!.stateTracking),
  }
}


export function collectorInputCollectorRestCollectorConfSchedulingToHclTerraform(struct?: CollectorInputCollectorRestCollectorConfScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state_tracking: {
      value: collectorInputCollectorRestCollectorConfSchedulingStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfSchedulingStateTracking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestCollectorConfSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConfScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConfScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stateTracking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stateTracking.internalValue = value.stateTracking;
    }
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorRestCollectorConfSchedulingStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorRestCollectorConfSchedulingStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }
}
export interface CollectorInputCollectorRestCollectorConf {
  /**
  * Expression for auth header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_header_expr Collector#auth_header_expr}
  */
  readonly authHeaderExpr?: string;
  /**
  * Header key for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_header_key Collector#auth_header_key}
  */
  readonly authHeaderKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_request_headers Collector#auth_request_headers}
  */
  readonly authRequestHeaders?: CollectorInputCollectorRestCollectorConfAuthRequestHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#auth_request_params Collector#auth_request_params}
  */
  readonly authRequestParams?: CollectorInputCollectorRestCollectorConfAuthRequestParams[] | cdktf.IResolvable;
  /**
  * must be one of ["none", "basic", "basicSecret", "token", "tokenSecret", "login", "loginSecret", "oauth", "oauthSecret", "google_oauth", "google_oauthSecret", "hmac"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#authentication Collector#authentication}
  */
  readonly authentication?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#capture_headers Collector#capture_headers}
  */
  readonly captureHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#client_secret_param_name Collector#client_secret_param_name}
  */
  readonly clientSecretParamName?: string;
  /**
  * must be one of ["get", "post", "post_with_body", "other"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_method Collector#collect_method}
  */
  readonly collectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_request_headers Collector#collect_request_headers}
  */
  readonly collectRequestHeaders?: CollectorInputCollectorRestCollectorConfCollectRequestHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_request_params Collector#collect_request_params}
  */
  readonly collectRequestParams?: CollectorInputCollectorRestCollectorConfCollectRequestParams[] | cdktf.IResolvable;
  /**
  * URL to use for the Collect operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collect_url Collector#collect_url}
  */
  readonly collectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#credentials_secret Collector#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#decode_url Collector#decode_url}
  */
  readonly decodeUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disable_time_filter Collector#disable_time_filter}
  */
  readonly disableTimeFilter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#discovery Collector#discovery}
  */
  readonly discovery?: CollectorInputCollectorRestCollectorConfDiscovery;
  /**
  * Body content for login request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#login_body Collector#login_body}
  */
  readonly loginBody?: string;
  /**
  * URL for authentication login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#login_url Collector#login_url}
  */
  readonly loginUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pagination Collector#pagination}
  */
  readonly pagination?: CollectorInputCollectorRestCollectorConfPagination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#password Collector#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reject_unauthorized Collector#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#retry_rules Collector#retry_rules}
  */
  readonly retryRules?: CollectorInputCollectorRestCollectorConfRetryRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#safe_headers Collector#safe_headers}
  */
  readonly safeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#scheduling Collector#scheduling}
  */
  readonly scheduling?: CollectorInputCollectorRestCollectorConfScheduling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#timeout Collector#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#token Collector#token}
  */
  readonly token?: string;
  /**
  * Attribute name for token in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#token_resp_attribute Collector#token_resp_attribute}
  */
  readonly tokenRespAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#token_secret Collector#token_secret}
  */
  readonly tokenSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#use_round_robin_dns Collector#use_round_robin_dns}
  */
  readonly useRoundRobinDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#username Collector#username}
  */
  readonly username?: string;
}

export function collectorInputCollectorRestCollectorConfToTerraform(struct?: CollectorInputCollectorRestCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_header_expr: cdktf.stringToTerraform(struct!.authHeaderExpr),
    auth_header_key: cdktf.stringToTerraform(struct!.authHeaderKey),
    auth_request_headers: cdktf.listMapper(collectorInputCollectorRestCollectorConfAuthRequestHeadersToTerraform, false)(struct!.authRequestHeaders),
    auth_request_params: cdktf.listMapper(collectorInputCollectorRestCollectorConfAuthRequestParamsToTerraform, false)(struct!.authRequestParams),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    capture_headers: cdktf.booleanToTerraform(struct!.captureHeaders),
    client_secret_param_name: cdktf.stringToTerraform(struct!.clientSecretParamName),
    collect_method: cdktf.stringToTerraform(struct!.collectMethod),
    collect_request_headers: cdktf.listMapper(collectorInputCollectorRestCollectorConfCollectRequestHeadersToTerraform, false)(struct!.collectRequestHeaders),
    collect_request_params: cdktf.listMapper(collectorInputCollectorRestCollectorConfCollectRequestParamsToTerraform, false)(struct!.collectRequestParams),
    collect_url: cdktf.stringToTerraform(struct!.collectUrl),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    decode_url: cdktf.booleanToTerraform(struct!.decodeUrl),
    disable_time_filter: cdktf.booleanToTerraform(struct!.disableTimeFilter),
    discovery: collectorInputCollectorRestCollectorConfDiscoveryToTerraform(struct!.discovery),
    login_body: cdktf.stringToTerraform(struct!.loginBody),
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    pagination: collectorInputCollectorRestCollectorConfPaginationToTerraform(struct!.pagination),
    password: cdktf.stringToTerraform(struct!.password),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
    retry_rules: collectorInputCollectorRestCollectorConfRetryRulesToTerraform(struct!.retryRules),
    safe_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.safeHeaders),
    scheduling: collectorInputCollectorRestCollectorConfSchedulingToTerraform(struct!.scheduling),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token: cdktf.stringToTerraform(struct!.token),
    token_resp_attribute: cdktf.stringToTerraform(struct!.tokenRespAttribute),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
    use_round_robin_dns: cdktf.booleanToTerraform(struct!.useRoundRobinDns),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function collectorInputCollectorRestCollectorConfToHclTerraform(struct?: CollectorInputCollectorRestCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_header_expr: {
      value: cdktf.stringToHclTerraform(struct!.authHeaderExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_header_key: {
      value: cdktf.stringToHclTerraform(struct!.authHeaderKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_request_headers: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfAuthRequestHeadersToHclTerraform, false)(struct!.authRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfAuthRequestHeadersList",
    },
    auth_request_params: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfAuthRequestParamsToHclTerraform, false)(struct!.authRequestParams),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfAuthRequestParamsList",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_headers: {
      value: cdktf.booleanToHclTerraform(struct!.captureHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_secret_param_name: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_method: {
      value: cdktf.stringToHclTerraform(struct!.collectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_request_headers: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfCollectRequestHeadersToHclTerraform, false)(struct!.collectRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfCollectRequestHeadersList",
    },
    collect_request_params: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestCollectorConfCollectRequestParamsToHclTerraform, false)(struct!.collectRequestParams),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestCollectorConfCollectRequestParamsList",
    },
    collect_url: {
      value: cdktf.stringToHclTerraform(struct!.collectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decode_url: {
      value: cdktf.booleanToHclTerraform(struct!.decodeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_time_filter: {
      value: cdktf.booleanToHclTerraform(struct!.disableTimeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery: {
      value: collectorInputCollectorRestCollectorConfDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfDiscovery",
    },
    login_body: {
      value: cdktf.stringToHclTerraform(struct!.loginBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_url: {
      value: cdktf.stringToHclTerraform(struct!.loginUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pagination: {
      value: collectorInputCollectorRestCollectorConfPaginationToHclTerraform(struct!.pagination),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfPagination",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_rules: {
      value: collectorInputCollectorRestCollectorConfRetryRulesToHclTerraform(struct!.retryRules),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfRetryRules",
    },
    safe_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.safeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scheduling: {
      value: collectorInputCollectorRestCollectorConfSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConfScheduling",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_resp_attribute: {
      value: cdktf.stringToHclTerraform(struct!.tokenRespAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_round_robin_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useRoundRobinDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authHeaderExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHeaderExpr = this._authHeaderExpr;
    }
    if (this._authHeaderKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHeaderKey = this._authHeaderKey;
    }
    if (this._authRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequestHeaders = this._authRequestHeaders?.internalValue;
    }
    if (this._authRequestParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRequestParams = this._authRequestParams?.internalValue;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._captureHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureHeaders = this._captureHeaders;
    }
    if (this._clientSecretParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretParamName = this._clientSecretParamName;
    }
    if (this._collectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectMethod = this._collectMethod;
    }
    if (this._collectRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectRequestHeaders = this._collectRequestHeaders?.internalValue;
    }
    if (this._collectRequestParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectRequestParams = this._collectRequestParams?.internalValue;
    }
    if (this._collectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectUrl = this._collectUrl;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._decodeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeUrl = this._decodeUrl;
    }
    if (this._disableTimeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTimeFilter = this._disableTimeFilter;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._loginBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginBody = this._loginBody;
    }
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._pagination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagination = this._pagination?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    if (this._retryRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryRules = this._retryRules?.internalValue;
    }
    if (this._safeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeHeaders = this._safeHeaders;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenRespAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRespAttribute = this._tokenRespAttribute;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    if (this._useRoundRobinDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRoundRobinDns = this._useRoundRobinDns;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authHeaderExpr = undefined;
      this._authHeaderKey = undefined;
      this._authRequestHeaders.internalValue = undefined;
      this._authRequestParams.internalValue = undefined;
      this._authentication = undefined;
      this._captureHeaders = undefined;
      this._clientSecretParamName = undefined;
      this._collectMethod = undefined;
      this._collectRequestHeaders.internalValue = undefined;
      this._collectRequestParams.internalValue = undefined;
      this._collectUrl = undefined;
      this._credentialsSecret = undefined;
      this._decodeUrl = undefined;
      this._disableTimeFilter = undefined;
      this._discovery.internalValue = undefined;
      this._loginBody = undefined;
      this._loginUrl = undefined;
      this._pagination.internalValue = undefined;
      this._password = undefined;
      this._rejectUnauthorized = undefined;
      this._retryRules.internalValue = undefined;
      this._safeHeaders = undefined;
      this._scheduling.internalValue = undefined;
      this._timeout = undefined;
      this._token = undefined;
      this._tokenRespAttribute = undefined;
      this._tokenSecret = undefined;
      this._useRoundRobinDns = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authHeaderExpr = value.authHeaderExpr;
      this._authHeaderKey = value.authHeaderKey;
      this._authRequestHeaders.internalValue = value.authRequestHeaders;
      this._authRequestParams.internalValue = value.authRequestParams;
      this._authentication = value.authentication;
      this._captureHeaders = value.captureHeaders;
      this._clientSecretParamName = value.clientSecretParamName;
      this._collectMethod = value.collectMethod;
      this._collectRequestHeaders.internalValue = value.collectRequestHeaders;
      this._collectRequestParams.internalValue = value.collectRequestParams;
      this._collectUrl = value.collectUrl;
      this._credentialsSecret = value.credentialsSecret;
      this._decodeUrl = value.decodeUrl;
      this._disableTimeFilter = value.disableTimeFilter;
      this._discovery.internalValue = value.discovery;
      this._loginBody = value.loginBody;
      this._loginUrl = value.loginUrl;
      this._pagination.internalValue = value.pagination;
      this._password = value.password;
      this._rejectUnauthorized = value.rejectUnauthorized;
      this._retryRules.internalValue = value.retryRules;
      this._safeHeaders = value.safeHeaders;
      this._scheduling.internalValue = value.scheduling;
      this._timeout = value.timeout;
      this._token = value.token;
      this._tokenRespAttribute = value.tokenRespAttribute;
      this._tokenSecret = value.tokenSecret;
      this._useRoundRobinDns = value.useRoundRobinDns;
      this._username = value.username;
    }
  }

  // auth_header_expr - computed: false, optional: true, required: false
  private _authHeaderExpr?: string; 
  public get authHeaderExpr() {
    return this.getStringAttribute('auth_header_expr');
  }
  public set authHeaderExpr(value: string) {
    this._authHeaderExpr = value;
  }
  public resetAuthHeaderExpr() {
    this._authHeaderExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderExprInput() {
    return this._authHeaderExpr;
  }

  // auth_header_key - computed: false, optional: true, required: false
  private _authHeaderKey?: string; 
  public get authHeaderKey() {
    return this.getStringAttribute('auth_header_key');
  }
  public set authHeaderKey(value: string) {
    this._authHeaderKey = value;
  }
  public resetAuthHeaderKey() {
    this._authHeaderKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderKeyInput() {
    return this._authHeaderKey;
  }

  // auth_request_headers - computed: false, optional: true, required: false
  private _authRequestHeaders = new CollectorInputCollectorRestCollectorConfAuthRequestHeadersList(this, "auth_request_headers", false);
  public get authRequestHeaders() {
    return this._authRequestHeaders;
  }
  public putAuthRequestHeaders(value: CollectorInputCollectorRestCollectorConfAuthRequestHeaders[] | cdktf.IResolvable) {
    this._authRequestHeaders.internalValue = value;
  }
  public resetAuthRequestHeaders() {
    this._authRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestHeadersInput() {
    return this._authRequestHeaders.internalValue;
  }

  // auth_request_params - computed: false, optional: true, required: false
  private _authRequestParams = new CollectorInputCollectorRestCollectorConfAuthRequestParamsList(this, "auth_request_params", false);
  public get authRequestParams() {
    return this._authRequestParams;
  }
  public putAuthRequestParams(value: CollectorInputCollectorRestCollectorConfAuthRequestParams[] | cdktf.IResolvable) {
    this._authRequestParams.internalValue = value;
  }
  public resetAuthRequestParams() {
    this._authRequestParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestParamsInput() {
    return this._authRequestParams.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // capture_headers - computed: true, optional: true, required: false
  private _captureHeaders?: boolean | cdktf.IResolvable; 
  public get captureHeaders() {
    return this.getBooleanAttribute('capture_headers');
  }
  public set captureHeaders(value: boolean | cdktf.IResolvable) {
    this._captureHeaders = value;
  }
  public resetCaptureHeaders() {
    this._captureHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureHeadersInput() {
    return this._captureHeaders;
  }

  // client_secret_param_name - computed: false, optional: true, required: false
  private _clientSecretParamName?: string; 
  public get clientSecretParamName() {
    return this.getStringAttribute('client_secret_param_name');
  }
  public set clientSecretParamName(value: string) {
    this._clientSecretParamName = value;
  }
  public resetClientSecretParamName() {
    this._clientSecretParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretParamNameInput() {
    return this._clientSecretParamName;
  }

  // collect_method - computed: false, optional: true, required: false
  private _collectMethod?: string; 
  public get collectMethod() {
    return this.getStringAttribute('collect_method');
  }
  public set collectMethod(value: string) {
    this._collectMethod = value;
  }
  public resetCollectMethod() {
    this._collectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectMethodInput() {
    return this._collectMethod;
  }

  // collect_request_headers - computed: false, optional: true, required: false
  private _collectRequestHeaders = new CollectorInputCollectorRestCollectorConfCollectRequestHeadersList(this, "collect_request_headers", false);
  public get collectRequestHeaders() {
    return this._collectRequestHeaders;
  }
  public putCollectRequestHeaders(value: CollectorInputCollectorRestCollectorConfCollectRequestHeaders[] | cdktf.IResolvable) {
    this._collectRequestHeaders.internalValue = value;
  }
  public resetCollectRequestHeaders() {
    this._collectRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectRequestHeadersInput() {
    return this._collectRequestHeaders.internalValue;
  }

  // collect_request_params - computed: false, optional: true, required: false
  private _collectRequestParams = new CollectorInputCollectorRestCollectorConfCollectRequestParamsList(this, "collect_request_params", false);
  public get collectRequestParams() {
    return this._collectRequestParams;
  }
  public putCollectRequestParams(value: CollectorInputCollectorRestCollectorConfCollectRequestParams[] | cdktf.IResolvable) {
    this._collectRequestParams.internalValue = value;
  }
  public resetCollectRequestParams() {
    this._collectRequestParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectRequestParamsInput() {
    return this._collectRequestParams.internalValue;
  }

  // collect_url - computed: false, optional: true, required: false
  private _collectUrl?: string; 
  public get collectUrl() {
    return this.getStringAttribute('collect_url');
  }
  public set collectUrl(value: string) {
    this._collectUrl = value;
  }
  public resetCollectUrl() {
    this._collectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectUrlInput() {
    return this._collectUrl;
  }

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // decode_url - computed: true, optional: true, required: false
  private _decodeUrl?: boolean | cdktf.IResolvable; 
  public get decodeUrl() {
    return this.getBooleanAttribute('decode_url');
  }
  public set decodeUrl(value: boolean | cdktf.IResolvable) {
    this._decodeUrl = value;
  }
  public resetDecodeUrl() {
    this._decodeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeUrlInput() {
    return this._decodeUrl;
  }

  // disable_time_filter - computed: false, optional: true, required: false
  private _disableTimeFilter?: boolean | cdktf.IResolvable; 
  public get disableTimeFilter() {
    return this.getBooleanAttribute('disable_time_filter');
  }
  public set disableTimeFilter(value: boolean | cdktf.IResolvable) {
    this._disableTimeFilter = value;
  }
  public resetDisableTimeFilter() {
    this._disableTimeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTimeFilterInput() {
    return this._disableTimeFilter;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new CollectorInputCollectorRestCollectorConfDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: CollectorInputCollectorRestCollectorConfDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // login_body - computed: false, optional: true, required: false
  private _loginBody?: string; 
  public get loginBody() {
    return this.getStringAttribute('login_body');
  }
  public set loginBody(value: string) {
    this._loginBody = value;
  }
  public resetLoginBody() {
    this._loginBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBodyInput() {
    return this._loginBody;
  }

  // login_url - computed: false, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // pagination - computed: false, optional: true, required: false
  private _pagination = new CollectorInputCollectorRestCollectorConfPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: CollectorInputCollectorRestCollectorConfPagination) {
    this._pagination.internalValue = value;
  }
  public resetPagination() {
    this._pagination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // reject_unauthorized - computed: false, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // retry_rules - computed: false, optional: true, required: false
  private _retryRules = new CollectorInputCollectorRestCollectorConfRetryRulesOutputReference(this, "retry_rules");
  public get retryRules() {
    return this._retryRules;
  }
  public putRetryRules(value: CollectorInputCollectorRestCollectorConfRetryRules) {
    this._retryRules.internalValue = value;
  }
  public resetRetryRules() {
    this._retryRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryRulesInput() {
    return this._retryRules.internalValue;
  }

  // safe_headers - computed: false, optional: true, required: false
  private _safeHeaders?: string[]; 
  public get safeHeaders() {
    return this.getListAttribute('safe_headers');
  }
  public set safeHeaders(value: string[]) {
    this._safeHeaders = value;
  }
  public resetSafeHeaders() {
    this._safeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeHeadersInput() {
    return this._safeHeaders;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new CollectorInputCollectorRestCollectorConfSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: CollectorInputCollectorRestCollectorConfScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_resp_attribute - computed: false, optional: true, required: false
  private _tokenRespAttribute?: string; 
  public get tokenRespAttribute() {
    return this.getStringAttribute('token_resp_attribute');
  }
  public set tokenRespAttribute(value: string) {
    this._tokenRespAttribute = value;
  }
  public resetTokenRespAttribute() {
    this._tokenRespAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRespAttributeInput() {
    return this._tokenRespAttribute;
  }

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  public resetTokenSecret() {
    this._tokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }

  // use_round_robin_dns - computed: false, optional: true, required: false
  private _useRoundRobinDns?: boolean | cdktf.IResolvable; 
  public get useRoundRobinDns() {
    return this.getBooleanAttribute('use_round_robin_dns');
  }
  public set useRoundRobinDns(value: boolean | cdktf.IResolvable) {
    this._useRoundRobinDns = value;
  }
  public resetUseRoundRobinDns() {
    this._useRoundRobinDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRoundRobinDnsInput() {
    return this._useRoundRobinDns;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CollectorInputCollectorRestCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorRestCollectorConf;
  /**
  * must be "rest"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorRestCollectorToTerraform(struct?: CollectorInputCollectorRestCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorRestCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorRestCollectorToHclTerraform(struct?: CollectorInputCollectorRestCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorRestCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollectorConf",
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

export class CollectorInputCollectorRestCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorRestCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorRestCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorRestInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorRestInputMetadataToTerraform(struct?: CollectorInputCollectorRestInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorRestInputMetadataToHclTerraform(struct?: CollectorInputCollectorRestInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorRestInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorRestInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorRestInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorRestInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorRestInputMetadataOutputReference {
    return new CollectorInputCollectorRestInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorRestInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorRestInputPreprocessToTerraform(struct?: CollectorInputCollectorRestInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorRestInputPreprocessToHclTerraform(struct?: CollectorInputCollectorRestInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorRestInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorRestInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorRestInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorRestInputToTerraform(struct?: CollectorInputCollectorRestInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorRestInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorRestInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorRestInputToHclTerraform(struct?: CollectorInputCollectorRestInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorRestInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorRestInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorRestInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorRestInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorRestInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorRestInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorRestInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorRestInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorRestSavedState {
}

export function collectorInputCollectorRestSavedStateToTerraform(struct?: CollectorInputCollectorRestSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorRestSavedStateToHclTerraform(struct?: CollectorInputCollectorRestSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorRestSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorRestScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorRestScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorRestScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorRestScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorRestScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorRestScheduleRunTimeWarning {
}

export function collectorInputCollectorRestScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorRestScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorRestScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorRestScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorRestScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorRestScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorRestScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorRestScheduleRunTimeWarning;
}

export function collectorInputCollectorRestScheduleRunToTerraform(struct?: CollectorInputCollectorRestScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorRestScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorRestScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorRestScheduleRunToHclTerraform(struct?: CollectorInputCollectorRestScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorRestScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorRestScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorRestScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorRestScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorRestScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorRestScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorRestSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorRestScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorRestScheduleToTerraform(struct?: CollectorInputCollectorRestSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorRestScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorRestScheduleToHclTerraform(struct?: CollectorInputCollectorRestSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorRestScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRestSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRestSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorRestScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorRestScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorRestCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorRestInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorRestSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorRestSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorRestToTerraform(struct?: CollectorInputCollectorRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorRestCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorRestInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorRestSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorRestScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorRestToHclTerraform(struct?: CollectorInputCollectorRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorRestCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorRestInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorRestSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestSavedState",
    },
    schedule: {
      value: collectorInputCollectorRestScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorRestSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorRestCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorRestCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorRestInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorRestInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorRestSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorRestSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorRestScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorRestSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorS3CollectorConfExtractors {
}

export function collectorInputCollectorS3CollectorConfExtractorsToTerraform(struct?: CollectorInputCollectorS3CollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorS3CollectorConfExtractorsToHclTerraform(struct?: CollectorInputCollectorS3CollectorConfExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorS3CollectorConfExtractorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorS3CollectorConfExtractors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3CollectorConfExtractors | cdktf.IResolvable | undefined) {
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
}

export class CollectorInputCollectorS3CollectorConfExtractorsList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorS3CollectorConfExtractors[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorS3CollectorConfExtractorsOutputReference {
    return new CollectorInputCollectorS3CollectorConfExtractorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorS3CollectorConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#aws_api_key Collector#aws_api_key}
  */
  readonly awsApiKey?: string;
  /**
  * must be one of ["auto", "manual", "secret"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#aws_authentication_method Collector#aws_authentication_method}
  */
  readonly awsAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#aws_secret Collector#aws_secret}
  */
  readonly awsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#aws_secret_key Collector#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * S3 Bucket from which to collect data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#bucket Collector#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#extractors Collector#extractors}
  */
  readonly extractors?: CollectorInputCollectorS3CollectorConfExtractors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_batch_size Collector#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Directory where data will be collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#path Collector#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#recurse Collector#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * AWS region from which to retrieve data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#region Collector#region}
  */
  readonly region?: string;
}

export function collectorInputCollectorS3CollectorConfToTerraform(struct?: CollectorInputCollectorS3CollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_api_key: cdktf.stringToTerraform(struct!.awsApiKey),
    aws_authentication_method: cdktf.stringToTerraform(struct!.awsAuthenticationMethod),
    aws_secret: cdktf.stringToTerraform(struct!.awsSecret),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    extractors: cdktf.listMapper(collectorInputCollectorS3CollectorConfExtractorsToTerraform, false)(struct!.extractors),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    path: cdktf.stringToTerraform(struct!.path),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function collectorInputCollectorS3CollectorConfToHclTerraform(struct?: CollectorInputCollectorS3CollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_api_key: {
      value: cdktf.stringToHclTerraform(struct!.awsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.awsAuthenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret: {
      value: cdktf.stringToHclTerraform(struct!.awsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extractors: {
      value: cdktf.listMapperHcl(collectorInputCollectorS3CollectorConfExtractorsToHclTerraform, false)(struct!.extractors),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorS3CollectorConfExtractorsList",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3CollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3CollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsApiKey = this._awsApiKey;
    }
    if (this._awsAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthenticationMethod = this._awsAuthenticationMethod;
    }
    if (this._awsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecret = this._awsSecret;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3CollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsApiKey = undefined;
      this._awsAuthenticationMethod = undefined;
      this._awsSecret = undefined;
      this._awsSecretKey = undefined;
      this._bucket = undefined;
      this._extractors.internalValue = undefined;
      this._maxBatchSize = undefined;
      this._path = undefined;
      this._recurse = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsApiKey = value.awsApiKey;
      this._awsAuthenticationMethod = value.awsAuthenticationMethod;
      this._awsSecret = value.awsSecret;
      this._awsSecretKey = value.awsSecretKey;
      this._bucket = value.bucket;
      this._extractors.internalValue = value.extractors;
      this._maxBatchSize = value.maxBatchSize;
      this._path = value.path;
      this._recurse = value.recurse;
      this._region = value.region;
    }
  }

  // aws_api_key - computed: false, optional: true, required: false
  private _awsApiKey?: string; 
  public get awsApiKey() {
    return this.getStringAttribute('aws_api_key');
  }
  public set awsApiKey(value: string) {
    this._awsApiKey = value;
  }
  public resetAwsApiKey() {
    this._awsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiKeyInput() {
    return this._awsApiKey;
  }

  // aws_authentication_method - computed: false, optional: true, required: false
  private _awsAuthenticationMethod?: string; 
  public get awsAuthenticationMethod() {
    return this.getStringAttribute('aws_authentication_method');
  }
  public set awsAuthenticationMethod(value: string) {
    this._awsAuthenticationMethod = value;
  }
  public resetAwsAuthenticationMethod() {
    this._awsAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthenticationMethodInput() {
    return this._awsAuthenticationMethod;
  }

  // aws_secret - computed: false, optional: true, required: false
  private _awsSecret?: string; 
  public get awsSecret() {
    return this.getStringAttribute('aws_secret');
  }
  public set awsSecret(value: string) {
    this._awsSecret = value;
  }
  public resetAwsSecret() {
    this._awsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretInput() {
    return this._awsSecret;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new CollectorInputCollectorS3CollectorConfExtractorsList(this, "extractors", false);
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: CollectorInputCollectorS3CollectorConfExtractors[] | cdktf.IResolvable) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // region - computed: false, optional: true, required: false
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
}
export interface CollectorInputCollectorS3Collector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorS3CollectorConf;
  /**
  * must be "s3"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorS3CollectorToTerraform(struct?: CollectorInputCollectorS3Collector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorS3CollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorS3CollectorToHclTerraform(struct?: CollectorInputCollectorS3Collector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorS3CollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3CollectorConf",
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

export class CollectorInputCollectorS3CollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3Collector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3Collector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorS3CollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorS3CollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorS3InputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorS3InputMetadataToTerraform(struct?: CollectorInputCollectorS3InputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorS3InputMetadataToHclTerraform(struct?: CollectorInputCollectorS3InputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorS3InputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorS3InputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3InputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorS3InputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorS3InputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorS3InputMetadataOutputReference {
    return new CollectorInputCollectorS3InputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorS3InputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorS3InputPreprocessToTerraform(struct?: CollectorInputCollectorS3InputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorS3InputPreprocessToHclTerraform(struct?: CollectorInputCollectorS3InputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3InputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3InputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3InputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorS3Input {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorS3InputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorS3InputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorS3InputToTerraform(struct?: CollectorInputCollectorS3Input | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorS3InputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorS3InputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorS3InputToHclTerraform(struct?: CollectorInputCollectorS3Input | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorS3InputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorS3InputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorS3InputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3InputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorS3InputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3Input | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3Input | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorS3InputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorS3InputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorS3InputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorS3InputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorS3SavedState {
}

export function collectorInputCollectorS3SavedStateToTerraform(struct?: CollectorInputCollectorS3SavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorS3SavedStateToHclTerraform(struct?: CollectorInputCollectorS3SavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorS3SavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3SavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3SavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorS3ScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorS3ScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorS3ScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorS3ScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorS3ScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3ScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3ScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3ScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorS3ScheduleRunTimeWarning {
}

export function collectorInputCollectorS3ScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorS3ScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorS3ScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorS3ScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorS3ScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3ScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3ScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorS3ScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorS3ScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorS3ScheduleRunTimeWarning;
}

export function collectorInputCollectorS3ScheduleRunToTerraform(struct?: CollectorInputCollectorS3ScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorS3ScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorS3ScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorS3ScheduleRunToHclTerraform(struct?: CollectorInputCollectorS3ScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorS3ScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3ScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorS3ScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3ScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3ScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3ScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3ScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorS3ScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorS3ScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorS3ScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorS3ScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorS3Schedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorS3ScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorS3ScheduleToTerraform(struct?: CollectorInputCollectorS3Schedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorS3ScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorS3ScheduleToHclTerraform(struct?: CollectorInputCollectorS3Schedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorS3ScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3ScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3ScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3Schedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3Schedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorS3ScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorS3ScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorS3Collector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorS3Input;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorS3SavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorS3Schedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorS3ToTerraform(struct?: CollectorInputCollectorS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorS3CollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorS3InputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorS3SavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorS3ScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorS3ToHclTerraform(struct?: CollectorInputCollectorS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorS3CollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3Collector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorS3InputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3Input",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorS3SavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3SavedState",
    },
    schedule: {
      value: collectorInputCollectorS3ScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorS3Schedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorS3CollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorS3Collector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorS3InputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorS3Input) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorS3SavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorS3SavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorS3ScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorS3Schedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}
export interface CollectorInputCollectorSplunkCollectorConf {
  /**
  * must be one of ["none", "basic", "basicSecret", "token", "tokenSecret", "login", "loginSecret", "oauth", "oauthSecret", "google_oauth", "google_oauthSecret", "hmac"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#authentication Collector#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#credentials_secret Collector#credentials_secret}
  */
  readonly credentialsSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disable_time_filter Collector#disable_time_filter}
  */
  readonly disableTimeFilter?: boolean | cdktf.IResolvable;
  /**
  * Earliest time boundary for the search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: string;
  /**
  * REST API endpoint used to create a search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#endpoint Collector#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#handle_escaped_chars Collector#handle_escaped_chars}
  */
  readonly handleEscapedChars?: boolean | cdktf.IResolvable;
  /**
  * Latest time boundary for the search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: string;
  /**
  * must be one of ["csv", "json"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output_mode Collector#output_mode}
  */
  readonly outputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#password Collector#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reject_unauthorized Collector#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * Splunk search query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#search Collector#search}
  */
  readonly search?: string;
  /**
  * Search head base URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#search_head Collector#search_head}
  */
  readonly searchHead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#timeout Collector#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#token Collector#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#token_secret Collector#token_secret}
  */
  readonly tokenSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#use_round_robin_dns Collector#use_round_robin_dns}
  */
  readonly useRoundRobinDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#username Collector#username}
  */
  readonly username?: string;
}

export function collectorInputCollectorSplunkCollectorConfToTerraform(struct?: CollectorInputCollectorSplunkCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    disable_time_filter: cdktf.booleanToTerraform(struct!.disableTimeFilter),
    earliest: cdktf.stringToTerraform(struct!.earliest),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    handle_escaped_chars: cdktf.booleanToTerraform(struct!.handleEscapedChars),
    latest: cdktf.stringToTerraform(struct!.latest),
    output_mode: cdktf.stringToTerraform(struct!.outputMode),
    password: cdktf.stringToTerraform(struct!.password),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
    search: cdktf.stringToTerraform(struct!.search),
    search_head: cdktf.stringToTerraform(struct!.searchHead),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token: cdktf.stringToTerraform(struct!.token),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
    use_round_robin_dns: cdktf.booleanToTerraform(struct!.useRoundRobinDns),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function collectorInputCollectorSplunkCollectorConfToHclTerraform(struct?: CollectorInputCollectorSplunkCollectorConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_time_filter: {
      value: cdktf.booleanToHclTerraform(struct!.disableTimeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    earliest: {
      value: cdktf.stringToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handle_escaped_chars: {
      value: cdktf.booleanToHclTerraform(struct!.handleEscapedChars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latest: {
      value: cdktf.stringToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_mode: {
      value: cdktf.stringToHclTerraform(struct!.outputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_head: {
      value: cdktf.stringToHclTerraform(struct!.searchHead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_round_robin_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useRoundRobinDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkCollectorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkCollectorConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._disableTimeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTimeFilter = this._disableTimeFilter;
    }
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._handleEscapedChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleEscapedChars = this._handleEscapedChars;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._outputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputMode = this._outputMode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._searchHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchHead = this._searchHead;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    if (this._useRoundRobinDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRoundRobinDns = this._useRoundRobinDns;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkCollectorConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._credentialsSecret = undefined;
      this._disableTimeFilter = undefined;
      this._earliest = undefined;
      this._endpoint = undefined;
      this._handleEscapedChars = undefined;
      this._latest = undefined;
      this._outputMode = undefined;
      this._password = undefined;
      this._rejectUnauthorized = undefined;
      this._search = undefined;
      this._searchHead = undefined;
      this._timeout = undefined;
      this._token = undefined;
      this._tokenSecret = undefined;
      this._useRoundRobinDns = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._credentialsSecret = value.credentialsSecret;
      this._disableTimeFilter = value.disableTimeFilter;
      this._earliest = value.earliest;
      this._endpoint = value.endpoint;
      this._handleEscapedChars = value.handleEscapedChars;
      this._latest = value.latest;
      this._outputMode = value.outputMode;
      this._password = value.password;
      this._rejectUnauthorized = value.rejectUnauthorized;
      this._search = value.search;
      this._searchHead = value.searchHead;
      this._timeout = value.timeout;
      this._token = value.token;
      this._tokenSecret = value.tokenSecret;
      this._useRoundRobinDns = value.useRoundRobinDns;
      this._username = value.username;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // disable_time_filter - computed: false, optional: true, required: false
  private _disableTimeFilter?: boolean | cdktf.IResolvable; 
  public get disableTimeFilter() {
    return this.getBooleanAttribute('disable_time_filter');
  }
  public set disableTimeFilter(value: boolean | cdktf.IResolvable) {
    this._disableTimeFilter = value;
  }
  public resetDisableTimeFilter() {
    this._disableTimeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTimeFilterInput() {
    return this._disableTimeFilter;
  }

  // earliest - computed: false, optional: true, required: false
  private _earliest?: string; 
  public get earliest() {
    return this.getStringAttribute('earliest');
  }
  public set earliest(value: string) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // handle_escaped_chars - computed: false, optional: true, required: false
  private _handleEscapedChars?: boolean | cdktf.IResolvable; 
  public get handleEscapedChars() {
    return this.getBooleanAttribute('handle_escaped_chars');
  }
  public set handleEscapedChars(value: boolean | cdktf.IResolvable) {
    this._handleEscapedChars = value;
  }
  public resetHandleEscapedChars() {
    this._handleEscapedChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleEscapedCharsInput() {
    return this._handleEscapedChars;
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: string; 
  public get latest() {
    return this.getStringAttribute('latest');
  }
  public set latest(value: string) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // output_mode - computed: false, optional: true, required: false
  private _outputMode?: string; 
  public get outputMode() {
    return this.getStringAttribute('output_mode');
  }
  public set outputMode(value: string) {
    this._outputMode = value;
  }
  public resetOutputMode() {
    this._outputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModeInput() {
    return this._outputMode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // reject_unauthorized - computed: false, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // search_head - computed: false, optional: true, required: false
  private _searchHead?: string; 
  public get searchHead() {
    return this.getStringAttribute('search_head');
  }
  public set searchHead(value: string) {
    this._searchHead = value;
  }
  public resetSearchHead() {
    this._searchHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchHeadInput() {
    return this._searchHead;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  public resetTokenSecret() {
    this._tokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }

  // use_round_robin_dns - computed: false, optional: true, required: false
  private _useRoundRobinDns?: boolean | cdktf.IResolvable; 
  public get useRoundRobinDns() {
    return this.getBooleanAttribute('use_round_robin_dns');
  }
  public set useRoundRobinDns(value: boolean | cdktf.IResolvable) {
    this._useRoundRobinDns = value;
  }
  public resetUseRoundRobinDns() {
    this._useRoundRobinDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRoundRobinDnsInput() {
    return this._useRoundRobinDns;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CollectorInputCollectorSplunkCollector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#conf Collector#conf}
  */
  readonly conf?: CollectorInputCollectorSplunkCollectorConf;
  /**
  * must be "splunk"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type: string;
}

export function collectorInputCollectorSplunkCollectorToTerraform(struct?: CollectorInputCollectorSplunkCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: collectorInputCollectorSplunkCollectorConfToTerraform(struct!.conf),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorSplunkCollectorToHclTerraform(struct?: CollectorInputCollectorSplunkCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: collectorInputCollectorSplunkCollectorConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkCollectorConf",
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

export class CollectorInputCollectorSplunkCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._type = value.type;
    }
  }

  // conf - computed: false, optional: true, required: false
  private _conf = new CollectorInputCollectorSplunkCollectorConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: CollectorInputCollectorSplunkCollectorConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
export interface CollectorInputCollectorSplunkInputMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#name Collector#name}
  */
  readonly name: string;
  /**
  * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#value Collector#value}
  */
  readonly value: string;
}

export function collectorInputCollectorSplunkInputMetadataToTerraform(struct?: CollectorInputCollectorSplunkInputMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorInputCollectorSplunkInputMetadataToHclTerraform(struct?: CollectorInputCollectorSplunkInputMetadata | cdktf.IResolvable): any {
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

export class CollectorInputCollectorSplunkInputMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorInputCollectorSplunkInputMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkInputMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorInputCollectorSplunkInputMetadataList extends cdktf.ComplexList {
  public internalValue? : CollectorInputCollectorSplunkInputMetadata[] | cdktf.IResolvable

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
  public get(index: number): CollectorInputCollectorSplunkInputMetadataOutputReference {
    return new CollectorInputCollectorSplunkInputMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorInputCollectorSplunkInputPreprocess {
  /**
  * Arguments to be added to the custom command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#args Collector#args}
  */
  readonly args?: string[];
  /**
  * Command to feed the data through (via stdin) and process its output (stdout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#command Collector#command}
  */
  readonly command?: string;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#disabled Collector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorSplunkInputPreprocessToTerraform(struct?: CollectorInputCollectorSplunkInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function collectorInputCollectorSplunkInputPreprocessToHclTerraform(struct?: CollectorInputCollectorSplunkInputPreprocess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkInputPreprocessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkInputPreprocess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkInputPreprocess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._disabled = value.disabled;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface CollectorInputCollectorSplunkInput {
  /**
  * A list of event-breaking rulesets that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#breaker_rulesets Collector#breaker_rulesets}
  */
  readonly breakerRulesets?: string[];
  /**
  * Fields to add to events from this input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#metadata Collector#metadata}
  */
  readonly metadata?: CollectorInputCollectorSplunkInputMetadata[] | cdktf.IResolvable;
  /**
  * Destination to send results to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#output Collector#output}
  */
  readonly output?: string;
  /**
  * Pipeline to process results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#pipeline Collector#pipeline}
  */
  readonly pipeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#preprocess Collector#preprocess}
  */
  readonly preprocess?: CollectorInputCollectorSplunkInputPreprocess;
  /**
  * Send events to normal routing and event processing. Disable to select a specific Pipeline/Destination combination. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#send_to_routes Collector#send_to_routes}
  */
  readonly sendToRoutes?: boolean | cdktf.IResolvable;
  /**
  * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific channel before flushing the data stream out, as is, to the Pipelines. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#stale_channel_flush_ms Collector#stale_channel_flush_ms}
  */
  readonly staleChannelFlushMs?: number;
  /**
  * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#throttle_rate_per_sec Collector#throttle_rate_per_sec}
  */
  readonly throttleRatePerSec?: string;
  /**
  * Default: "collection"; must be "collection"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#type Collector#type}
  */
  readonly type?: string;
}

export function collectorInputCollectorSplunkInputToTerraform(struct?: CollectorInputCollectorSplunkInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breaker_rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.breakerRulesets),
    metadata: cdktf.listMapper(collectorInputCollectorSplunkInputMetadataToTerraform, false)(struct!.metadata),
    output: cdktf.stringToTerraform(struct!.output),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    preprocess: collectorInputCollectorSplunkInputPreprocessToTerraform(struct!.preprocess),
    send_to_routes: cdktf.booleanToTerraform(struct!.sendToRoutes),
    stale_channel_flush_ms: cdktf.numberToTerraform(struct!.staleChannelFlushMs),
    throttle_rate_per_sec: cdktf.stringToTerraform(struct!.throttleRatePerSec),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function collectorInputCollectorSplunkInputToHclTerraform(struct?: CollectorInputCollectorSplunkInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breaker_rulesets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.breakerRulesets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(collectorInputCollectorSplunkInputMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CollectorInputCollectorSplunkInputMetadataList",
    },
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktf.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preprocess: {
      value: collectorInputCollectorSplunkInputPreprocessToHclTerraform(struct!.preprocess),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkInputPreprocess",
    },
    send_to_routes: {
      value: cdktf.booleanToHclTerraform(struct!.sendToRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stale_channel_flush_ms: {
      value: cdktf.numberToHclTerraform(struct!.staleChannelFlushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_rate_per_sec: {
      value: cdktf.stringToHclTerraform(struct!.throttleRatePerSec),
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

export class CollectorInputCollectorSplunkInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakerRulesets !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakerRulesets = this._breakerRulesets;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._preprocess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preprocess = this._preprocess?.internalValue;
    }
    if (this._sendToRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToRoutes = this._sendToRoutes;
    }
    if (this._staleChannelFlushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleChannelFlushMs = this._staleChannelFlushMs;
    }
    if (this._throttleRatePerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleRatePerSec = this._throttleRatePerSec;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakerRulesets = undefined;
      this._metadata.internalValue = undefined;
      this._output = undefined;
      this._pipeline = undefined;
      this._preprocess.internalValue = undefined;
      this._sendToRoutes = undefined;
      this._staleChannelFlushMs = undefined;
      this._throttleRatePerSec = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakerRulesets = value.breakerRulesets;
      this._metadata.internalValue = value.metadata;
      this._output = value.output;
      this._pipeline = value.pipeline;
      this._preprocess.internalValue = value.preprocess;
      this._sendToRoutes = value.sendToRoutes;
      this._staleChannelFlushMs = value.staleChannelFlushMs;
      this._throttleRatePerSec = value.throttleRatePerSec;
      this._type = value.type;
    }
  }

  // breaker_rulesets - computed: false, optional: true, required: false
  private _breakerRulesets?: string[]; 
  public get breakerRulesets() {
    return this.getListAttribute('breaker_rulesets');
  }
  public set breakerRulesets(value: string[]) {
    this._breakerRulesets = value;
  }
  public resetBreakerRulesets() {
    this._breakerRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakerRulesetsInput() {
    return this._breakerRulesets;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CollectorInputCollectorSplunkInputMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CollectorInputCollectorSplunkInputMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // preprocess - computed: false, optional: true, required: false
  private _preprocess = new CollectorInputCollectorSplunkInputPreprocessOutputReference(this, "preprocess");
  public get preprocess() {
    return this._preprocess;
  }
  public putPreprocess(value: CollectorInputCollectorSplunkInputPreprocess) {
    this._preprocess.internalValue = value;
  }
  public resetPreprocess() {
    this._preprocess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessInput() {
    return this._preprocess.internalValue;
  }

  // send_to_routes - computed: true, optional: true, required: false
  private _sendToRoutes?: boolean | cdktf.IResolvable; 
  public get sendToRoutes() {
    return this.getBooleanAttribute('send_to_routes');
  }
  public set sendToRoutes(value: boolean | cdktf.IResolvable) {
    this._sendToRoutes = value;
  }
  public resetSendToRoutes() {
    this._sendToRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToRoutesInput() {
    return this._sendToRoutes;
  }

  // stale_channel_flush_ms - computed: true, optional: true, required: false
  private _staleChannelFlushMs?: number; 
  public get staleChannelFlushMs() {
    return this.getNumberAttribute('stale_channel_flush_ms');
  }
  public set staleChannelFlushMs(value: number) {
    this._staleChannelFlushMs = value;
  }
  public resetStaleChannelFlushMs() {
    this._staleChannelFlushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleChannelFlushMsInput() {
    return this._staleChannelFlushMs;
  }

  // throttle_rate_per_sec - computed: true, optional: true, required: false
  private _throttleRatePerSec?: string; 
  public get throttleRatePerSec() {
    return this.getStringAttribute('throttle_rate_per_sec');
  }
  public set throttleRatePerSec(value: string) {
    this._throttleRatePerSec = value;
  }
  public resetThrottleRatePerSec() {
    this._throttleRatePerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleRatePerSecInput() {
    return this._throttleRatePerSec;
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
}
export interface CollectorInputCollectorSplunkSavedState {
}

export function collectorInputCollectorSplunkSavedStateToTerraform(struct?: CollectorInputCollectorSplunkSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorSplunkSavedStateToHclTerraform(struct?: CollectorInputCollectorSplunkSavedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorSplunkSavedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkSavedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkSavedState | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorSplunkScheduleRunStateTracking {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_merge_expression Collector#state_merge_expression}
  */
  readonly stateMergeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_update_expression Collector#state_update_expression}
  */
  readonly stateUpdateExpression?: string;
}

export function collectorInputCollectorSplunkScheduleRunStateTrackingToTerraform(struct?: CollectorInputCollectorSplunkScheduleRunStateTracking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    state_merge_expression: cdktf.stringToTerraform(struct!.stateMergeExpression),
    state_update_expression: cdktf.stringToTerraform(struct!.stateUpdateExpression),
  }
}


export function collectorInputCollectorSplunkScheduleRunStateTrackingToHclTerraform(struct?: CollectorInputCollectorSplunkScheduleRunStateTracking | cdktf.IResolvable): any {
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
    state_merge_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateMergeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_update_expression: {
      value: cdktf.stringToHclTerraform(struct!.stateUpdateExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkScheduleRunStateTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkScheduleRunStateTracking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._stateMergeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMergeExpression = this._stateMergeExpression;
    }
    if (this._stateUpdateExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateUpdateExpression = this._stateUpdateExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkScheduleRunStateTracking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._stateMergeExpression = undefined;
      this._stateUpdateExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._stateMergeExpression = value.stateMergeExpression;
      this._stateUpdateExpression = value.stateUpdateExpression;
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

  // state_merge_expression - computed: false, optional: true, required: false
  private _stateMergeExpression?: string; 
  public get stateMergeExpression() {
    return this.getStringAttribute('state_merge_expression');
  }
  public set stateMergeExpression(value: string) {
    this._stateMergeExpression = value;
  }
  public resetStateMergeExpression() {
    this._stateMergeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMergeExpressionInput() {
    return this._stateMergeExpression;
  }

  // state_update_expression - computed: false, optional: true, required: false
  private _stateUpdateExpression?: string; 
  public get stateUpdateExpression() {
    return this.getStringAttribute('state_update_expression');
  }
  public set stateUpdateExpression(value: string) {
    this._stateUpdateExpression = value;
  }
  public resetStateUpdateExpression() {
    this._stateUpdateExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateExpressionInput() {
    return this._stateUpdateExpression;
  }
}
export interface CollectorInputCollectorSplunkScheduleRunTimeWarning {
}

export function collectorInputCollectorSplunkScheduleRunTimeWarningToTerraform(struct?: CollectorInputCollectorSplunkScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorInputCollectorSplunkScheduleRunTimeWarningToHclTerraform(struct?: CollectorInputCollectorSplunkScheduleRunTimeWarning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorInputCollectorSplunkScheduleRunTimeWarningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkScheduleRunTimeWarning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkScheduleRunTimeWarning | cdktf.IResolvable | undefined) {
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
}
export interface CollectorInputCollectorSplunkScheduleRun {
  /**
  * Earliest time to collect data for the selected timezone. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#earliest Collector#earliest}
  */
  readonly earliest?: number;
  /**
  * A filter for tokens in the provided collect path and/or the events being collected. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#expression Collector#expression}
  */
  readonly expression?: string;
  /**
  * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified (examples: 30, 45s, 15m). Enter 0 for unlimited time. Default: "0"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#job_timeout Collector#job_timeout}
  */
  readonly jobTimeout?: string;
  /**
  * Latest time to collect data for the selected timezone. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#latest Collector#latest}
  */
  readonly latest?: number;
  /**
  * Level at which to set task logging. Default: "info"; must be one of ["error", "warn", "info", "debug", "silly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#log_level Collector#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum number of times a task can be rescheduled. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_reschedule Collector#max_task_reschedule}
  */
  readonly maxTaskReschedule?: number;
  /**
  * Limits the bundle size for files above the lower task bundle size. For example, if your upper bundle size is 10MB, you can bundle up to five 2MB files into one task. Files greater than this size will be assigned to individual tasks. Default: "10MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_task_size Collector#max_task_size}
  */
  readonly maxTaskSize?: string;
  /**
  * Limits the bundle size for small tasks. For example, if your lower bundle size is 1MB, you can bundle up to five 200KB files into one task. Default: "1MB"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#min_task_size Collector#min_task_size}
  */
  readonly minTaskSize?: string;
  /**
  * Job run mode. Preview will either return up to N matching results, or will run until capture time T is reached. Discovery will gather the list of files to turn into streaming tasks, without running the data collection job. Full Run will run the collection job. Default: "list"; must be one of ["list", "preview", "run"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#mode Collector#mode}
  */
  readonly mode?: string;
  /**
  * Reschedule tasks that failed with non-fatal errors. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#reschedule_dropped_tasks Collector#reschedule_dropped_tasks}
  */
  readonly rescheduleDroppedTasks?: boolean | cdktf.IResolvable;
  /**
  * State tracking configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#state_tracking Collector#state_tracking}
  */
  readonly stateTracking?: CollectorInputCollectorSplunkScheduleRunStateTracking;
  /**
  * Default: "relative"; must be one of ["relative", "absolute"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_range_type Collector#time_range_type}
  */
  readonly timeRangeType?: string;
  /**
  * Time warning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#time_warning Collector#time_warning}
  */
  readonly timeWarning?: CollectorInputCollectorSplunkScheduleRunTimeWarning;
}

export function collectorInputCollectorSplunkScheduleRunToTerraform(struct?: CollectorInputCollectorSplunkScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest: cdktf.numberToTerraform(struct!.earliest),
    expression: cdktf.stringToTerraform(struct!.expression),
    job_timeout: cdktf.stringToTerraform(struct!.jobTimeout),
    latest: cdktf.numberToTerraform(struct!.latest),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_task_reschedule: cdktf.numberToTerraform(struct!.maxTaskReschedule),
    max_task_size: cdktf.stringToTerraform(struct!.maxTaskSize),
    min_task_size: cdktf.stringToTerraform(struct!.minTaskSize),
    mode: cdktf.stringToTerraform(struct!.mode),
    reschedule_dropped_tasks: cdktf.booleanToTerraform(struct!.rescheduleDroppedTasks),
    state_tracking: collectorInputCollectorSplunkScheduleRunStateTrackingToTerraform(struct!.stateTracking),
    time_range_type: cdktf.stringToTerraform(struct!.timeRangeType),
    time_warning: collectorInputCollectorSplunkScheduleRunTimeWarningToTerraform(struct!.timeWarning),
  }
}


export function collectorInputCollectorSplunkScheduleRunToHclTerraform(struct?: CollectorInputCollectorSplunkScheduleRun | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest: {
      value: cdktf.numberToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest: {
      value: cdktf.numberToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_task_reschedule: {
      value: cdktf.numberToHclTerraform(struct!.maxTaskReschedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_size: {
      value: cdktf.stringToHclTerraform(struct!.maxTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_task_size: {
      value: cdktf.stringToHclTerraform(struct!.minTaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reschedule_dropped_tasks: {
      value: cdktf.booleanToHclTerraform(struct!.rescheduleDroppedTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state_tracking: {
      value: collectorInputCollectorSplunkScheduleRunStateTrackingToHclTerraform(struct!.stateTracking),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkScheduleRunStateTracking",
    },
    time_range_type: {
      value: cdktf.stringToHclTerraform(struct!.timeRangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_warning: {
      value: collectorInputCollectorSplunkScheduleRunTimeWarningToHclTerraform(struct!.timeWarning),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkScheduleRunTimeWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkScheduleRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkScheduleRun | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxTaskReschedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskReschedule = this._maxTaskReschedule;
    }
    if (this._maxTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskSize = this._maxTaskSize;
    }
    if (this._minTaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskSize = this._minTaskSize;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rescheduleDroppedTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescheduleDroppedTasks = this._rescheduleDroppedTasks;
    }
    if (this._stateTracking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateTracking = this._stateTracking?.internalValue;
    }
    if (this._timeRangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeType = this._timeRangeType;
    }
    if (this._timeWarning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWarning = this._timeWarning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkScheduleRun | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliest = undefined;
      this._expression = undefined;
      this._jobTimeout = undefined;
      this._latest = undefined;
      this._logLevel = undefined;
      this._maxTaskReschedule = undefined;
      this._maxTaskSize = undefined;
      this._minTaskSize = undefined;
      this._mode = undefined;
      this._rescheduleDroppedTasks = undefined;
      this._stateTracking.internalValue = undefined;
      this._timeRangeType = undefined;
      this._timeWarning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliest = value.earliest;
      this._expression = value.expression;
      this._jobTimeout = value.jobTimeout;
      this._latest = value.latest;
      this._logLevel = value.logLevel;
      this._maxTaskReschedule = value.maxTaskReschedule;
      this._maxTaskSize = value.maxTaskSize;
      this._minTaskSize = value.minTaskSize;
      this._mode = value.mode;
      this._rescheduleDroppedTasks = value.rescheduleDroppedTasks;
      this._stateTracking.internalValue = value.stateTracking;
      this._timeRangeType = value.timeRangeType;
      this._timeWarning.internalValue = value.timeWarning;
    }
  }

  // earliest - computed: true, optional: true, required: false
  private _earliest?: number; 
  public get earliest() {
    return this.getNumberAttribute('earliest');
  }
  public set earliest(value: number) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: string; 
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }
  public set jobTimeout(value: string) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // latest - computed: true, optional: true, required: false
  private _latest?: number; 
  public get latest() {
    return this.getNumberAttribute('latest');
  }
  public set latest(value: number) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_task_reschedule - computed: true, optional: true, required: false
  private _maxTaskReschedule?: number; 
  public get maxTaskReschedule() {
    return this.getNumberAttribute('max_task_reschedule');
  }
  public set maxTaskReschedule(value: number) {
    this._maxTaskReschedule = value;
  }
  public resetMaxTaskReschedule() {
    this._maxTaskReschedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRescheduleInput() {
    return this._maxTaskReschedule;
  }

  // max_task_size - computed: true, optional: true, required: false
  private _maxTaskSize?: string; 
  public get maxTaskSize() {
    return this.getStringAttribute('max_task_size');
  }
  public set maxTaskSize(value: string) {
    this._maxTaskSize = value;
  }
  public resetMaxTaskSize() {
    this._maxTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskSizeInput() {
    return this._maxTaskSize;
  }

  // min_task_size - computed: true, optional: true, required: false
  private _minTaskSize?: string; 
  public get minTaskSize() {
    return this.getStringAttribute('min_task_size');
  }
  public set minTaskSize(value: string) {
    this._minTaskSize = value;
  }
  public resetMinTaskSize() {
    this._minTaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskSizeInput() {
    return this._minTaskSize;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // reschedule_dropped_tasks - computed: true, optional: true, required: false
  private _rescheduleDroppedTasks?: boolean | cdktf.IResolvable; 
  public get rescheduleDroppedTasks() {
    return this.getBooleanAttribute('reschedule_dropped_tasks');
  }
  public set rescheduleDroppedTasks(value: boolean | cdktf.IResolvable) {
    this._rescheduleDroppedTasks = value;
  }
  public resetRescheduleDroppedTasks() {
    this._rescheduleDroppedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescheduleDroppedTasksInput() {
    return this._rescheduleDroppedTasks;
  }

  // state_tracking - computed: false, optional: true, required: false
  private _stateTracking = new CollectorInputCollectorSplunkScheduleRunStateTrackingOutputReference(this, "state_tracking");
  public get stateTracking() {
    return this._stateTracking;
  }
  public putStateTracking(value: CollectorInputCollectorSplunkScheduleRunStateTracking) {
    this._stateTracking.internalValue = value;
  }
  public resetStateTracking() {
    this._stateTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTrackingInput() {
    return this._stateTracking.internalValue;
  }

  // time_range_type - computed: true, optional: true, required: false
  private _timeRangeType?: string; 
  public get timeRangeType() {
    return this.getStringAttribute('time_range_type');
  }
  public set timeRangeType(value: string) {
    this._timeRangeType = value;
  }
  public resetTimeRangeType() {
    this._timeRangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeTypeInput() {
    return this._timeRangeType;
  }

  // time_warning - computed: false, optional: true, required: false
  private _timeWarning = new CollectorInputCollectorSplunkScheduleRunTimeWarningOutputReference(this, "time_warning");
  public get timeWarning() {
    return this._timeWarning;
  }
  public putTimeWarning(value: CollectorInputCollectorSplunkScheduleRunTimeWarning) {
    this._timeWarning.internalValue = value;
  }
  public resetTimeWarning() {
    this._timeWarning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWarningInput() {
    return this._timeWarning.internalValue;
  }
}
export interface CollectorInputCollectorSplunkSchedule {
  /**
  * A cron schedule on which to run this job. Default: "* /5 * * * *"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#cron_schedule Collector#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Enable to configure scheduling for this Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#enabled Collector#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances of this scheduled job that may be running at any time. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#max_concurrent_runs Collector#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Resume missed scheduled runs. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_missed Collector#resume_missed}
  */
  readonly resumeMissed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#run Collector#run}
  */
  readonly run?: CollectorInputCollectorSplunkScheduleRun;
  /**
  * Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#skippable Collector#skippable}
  */
  readonly skippable?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorSplunkScheduleToTerraform(struct?: CollectorInputCollectorSplunkSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
    resume_missed: cdktf.booleanToTerraform(struct!.resumeMissed),
    run: collectorInputCollectorSplunkScheduleRunToTerraform(struct!.run),
    skippable: cdktf.booleanToTerraform(struct!.skippable),
  }
}


export function collectorInputCollectorSplunkScheduleToHclTerraform(struct?: CollectorInputCollectorSplunkSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resume_missed: {
      value: cdktf.booleanToHclTerraform(struct!.resumeMissed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run: {
      value: collectorInputCollectorSplunkScheduleRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkScheduleRun",
    },
    skippable: {
      value: cdktf.booleanToHclTerraform(struct!.skippable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunkSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    if (this._resumeMissed !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeMissed = this._resumeMissed;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    if (this._skippable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippable = this._skippable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunkSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._maxConcurrentRuns = undefined;
      this._resumeMissed = undefined;
      this._run.internalValue = undefined;
      this._skippable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
      this._resumeMissed = value.resumeMissed;
      this._run.internalValue = value.run;
      this._skippable = value.skippable;
    }
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_concurrent_runs - computed: true, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // resume_missed - computed: true, optional: true, required: false
  private _resumeMissed?: boolean | cdktf.IResolvable; 
  public get resumeMissed() {
    return this.getBooleanAttribute('resume_missed');
  }
  public set resumeMissed(value: boolean | cdktf.IResolvable) {
    this._resumeMissed = value;
  }
  public resetResumeMissed() {
    this._resumeMissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeMissedInput() {
    return this._resumeMissed;
  }

  // run - computed: false, optional: true, required: false
  private _run = new CollectorInputCollectorSplunkScheduleRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: CollectorInputCollectorSplunkScheduleRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // skippable - computed: true, optional: true, required: false
  private _skippable?: boolean | cdktf.IResolvable; 
  public get skippable() {
    return this.getBooleanAttribute('skippable');
  }
  public set skippable(value: boolean | cdktf.IResolvable) {
    this._skippable = value;
  }
  public resetSkippable() {
    this._skippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippableInput() {
    return this._skippable;
  }
}
export interface CollectorInputCollectorSplunk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#collector Collector#collector}
  */
  readonly collector: CollectorInputCollectorSplunkCollector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#environment Collector#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#id Collector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ignore_group_jobs_limit Collector#ignore_group_jobs_limit}
  */
  readonly ignoreGroupJobsLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#input Collector#input}
  */
  readonly input?: CollectorInputCollectorSplunkInput;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#remove_fields Collector#remove_fields}
  */
  readonly removeFields?: string[];
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#resume_on_boot Collector#resume_on_boot}
  */
  readonly resumeOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Saved state for the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#saved_state Collector#saved_state}
  */
  readonly savedState?: CollectorInputCollectorSplunkSavedState;
  /**
  * Configuration for a scheduled job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#schedule Collector#schedule}
  */
  readonly schedule?: CollectorInputCollectorSplunkSchedule;
  /**
  * Tags for filtering and grouping. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#streamtags Collector#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Default: "4h"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#ttl Collector#ttl}
  */
  readonly ttl?: string;
  /**
  * If enabled, tasks are created and run by the same Worker Node. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#worker_affinity Collector#worker_affinity}
  */
  readonly workerAffinity?: boolean | cdktf.IResolvable;
}

export function collectorInputCollectorSplunkToTerraform(struct?: CollectorInputCollectorSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: collectorInputCollectorSplunkCollectorToTerraform(struct!.collector),
    environment: cdktf.stringToTerraform(struct!.environment),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_group_jobs_limit: cdktf.booleanToTerraform(struct!.ignoreGroupJobsLimit),
    input: collectorInputCollectorSplunkInputToTerraform(struct!.input),
    remove_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeFields),
    resume_on_boot: cdktf.booleanToTerraform(struct!.resumeOnBoot),
    saved_state: collectorInputCollectorSplunkSavedStateToTerraform(struct!.savedState),
    schedule: collectorInputCollectorSplunkScheduleToTerraform(struct!.schedule),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    worker_affinity: cdktf.booleanToTerraform(struct!.workerAffinity),
  }
}


export function collectorInputCollectorSplunkToHclTerraform(struct?: CollectorInputCollectorSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: collectorInputCollectorSplunkCollectorToHclTerraform(struct!.collector),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkCollector",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_group_jobs_limit: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGroupJobsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: collectorInputCollectorSplunkInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkInput",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resume_on_boot: {
      value: cdktf.booleanToHclTerraform(struct!.resumeOnBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saved_state: {
      value: collectorInputCollectorSplunkSavedStateToHclTerraform(struct!.savedState),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkSavedState",
    },
    schedule: {
      value: collectorInputCollectorSplunkScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "CollectorInputCollectorSplunkSchedule",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.workerAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorInputCollectorSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectorInputCollectorSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreGroupJobsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGroupJobsLimit = this._ignoreGroupJobsLimit;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._removeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields;
    }
    if (this._resumeOnBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeOnBoot = this._resumeOnBoot;
    }
    if (this._savedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedState = this._savedState?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._workerAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerAffinity = this._workerAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorInputCollectorSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector.internalValue = undefined;
      this._environment = undefined;
      this._id = undefined;
      this._ignoreGroupJobsLimit = undefined;
      this._input.internalValue = undefined;
      this._removeFields = undefined;
      this._resumeOnBoot = undefined;
      this._savedState.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._streamtags = undefined;
      this._ttl = undefined;
      this._workerAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector.internalValue = value.collector;
      this._environment = value.environment;
      this._id = value.id;
      this._ignoreGroupJobsLimit = value.ignoreGroupJobsLimit;
      this._input.internalValue = value.input;
      this._removeFields = value.removeFields;
      this._resumeOnBoot = value.resumeOnBoot;
      this._savedState.internalValue = value.savedState;
      this._schedule.internalValue = value.schedule;
      this._streamtags = value.streamtags;
      this._ttl = value.ttl;
      this._workerAffinity = value.workerAffinity;
    }
  }

  // collector - computed: false, optional: false, required: true
  private _collector = new CollectorInputCollectorSplunkCollectorOutputReference(this, "collector");
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CollectorInputCollectorSplunkCollector) {
    this._collector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: false, optional: true, required: false
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

  // ignore_group_jobs_limit - computed: true, optional: true, required: false
  private _ignoreGroupJobsLimit?: boolean | cdktf.IResolvable; 
  public get ignoreGroupJobsLimit() {
    return this.getBooleanAttribute('ignore_group_jobs_limit');
  }
  public set ignoreGroupJobsLimit(value: boolean | cdktf.IResolvable) {
    this._ignoreGroupJobsLimit = value;
  }
  public resetIgnoreGroupJobsLimit() {
    this._ignoreGroupJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGroupJobsLimitInput() {
    return this._ignoreGroupJobsLimit;
  }

  // input - computed: false, optional: true, required: false
  private _input = new CollectorInputCollectorSplunkInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CollectorInputCollectorSplunkInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // remove_fields - computed: true, optional: true, required: false
  private _removeFields?: string[]; 
  public get removeFields() {
    return this.getListAttribute('remove_fields');
  }
  public set removeFields(value: string[]) {
    this._removeFields = value;
  }
  public resetRemoveFields() {
    this._removeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields;
  }

  // resume_on_boot - computed: true, optional: true, required: false
  private _resumeOnBoot?: boolean | cdktf.IResolvable; 
  public get resumeOnBoot() {
    return this.getBooleanAttribute('resume_on_boot');
  }
  public set resumeOnBoot(value: boolean | cdktf.IResolvable) {
    this._resumeOnBoot = value;
  }
  public resetResumeOnBoot() {
    this._resumeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeOnBootInput() {
    return this._resumeOnBoot;
  }

  // saved_state - computed: false, optional: true, required: false
  private _savedState = new CollectorInputCollectorSplunkSavedStateOutputReference(this, "saved_state");
  public get savedState() {
    return this._savedState;
  }
  public putSavedState(value: CollectorInputCollectorSplunkSavedState) {
    this._savedState.internalValue = value;
  }
  public resetSavedState() {
    this._savedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedStateInput() {
    return this._savedState.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new CollectorInputCollectorSplunkScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CollectorInputCollectorSplunkSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // worker_affinity - computed: true, optional: true, required: false
  private _workerAffinity?: boolean | cdktf.IResolvable; 
  public get workerAffinity() {
    return this.getBooleanAttribute('worker_affinity');
  }
  public set workerAffinity(value: boolean | cdktf.IResolvable) {
    this._workerAffinity = value;
  }
  public resetWorkerAffinity() {
    this._workerAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAffinityInput() {
    return this._workerAffinity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector criblio_collector}
*/
export class Collector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Collector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Collector to import
  * @param importFromId The id of the existing Collector that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Collector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.48/docs/resources/collector criblio_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectorConfig
  */
  public constructor(scope: Construct, id: string, config: CollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_collector',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.48',
        providerVersionConstraint: '1.20.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._inputCollectorAzureBlob.internalValue = config.inputCollectorAzureBlob;
    this._inputCollectorCriblLake.internalValue = config.inputCollectorCriblLake;
    this._inputCollectorDatabase.internalValue = config.inputCollectorDatabase;
    this._inputCollectorGcs.internalValue = config.inputCollectorGcs;
    this._inputCollectorHealthCheck.internalValue = config.inputCollectorHealthCheck;
    this._inputCollectorRest.internalValue = config.inputCollectorRest;
    this._inputCollectorS3.internalValue = config.inputCollectorS3;
    this._inputCollectorSplunk.internalValue = config.inputCollectorSplunk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // input_collector_azure_blob - computed: false, optional: true, required: false
  private _inputCollectorAzureBlob = new CollectorInputCollectorAzureBlobOutputReference(this, "input_collector_azure_blob");
  public get inputCollectorAzureBlob() {
    return this._inputCollectorAzureBlob;
  }
  public putInputCollectorAzureBlob(value: CollectorInputCollectorAzureBlob) {
    this._inputCollectorAzureBlob.internalValue = value;
  }
  public resetInputCollectorAzureBlob() {
    this._inputCollectorAzureBlob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorAzureBlobInput() {
    return this._inputCollectorAzureBlob.internalValue;
  }

  // input_collector_cribl_lake - computed: false, optional: true, required: false
  private _inputCollectorCriblLake = new CollectorInputCollectorCriblLakeOutputReference(this, "input_collector_cribl_lake");
  public get inputCollectorCriblLake() {
    return this._inputCollectorCriblLake;
  }
  public putInputCollectorCriblLake(value: CollectorInputCollectorCriblLake) {
    this._inputCollectorCriblLake.internalValue = value;
  }
  public resetInputCollectorCriblLake() {
    this._inputCollectorCriblLake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorCriblLakeInput() {
    return this._inputCollectorCriblLake.internalValue;
  }

  // input_collector_database - computed: false, optional: true, required: false
  private _inputCollectorDatabase = new CollectorInputCollectorDatabaseOutputReference(this, "input_collector_database");
  public get inputCollectorDatabase() {
    return this._inputCollectorDatabase;
  }
  public putInputCollectorDatabase(value: CollectorInputCollectorDatabase) {
    this._inputCollectorDatabase.internalValue = value;
  }
  public resetInputCollectorDatabase() {
    this._inputCollectorDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorDatabaseInput() {
    return this._inputCollectorDatabase.internalValue;
  }

  // input_collector_gcs - computed: false, optional: true, required: false
  private _inputCollectorGcs = new CollectorInputCollectorGcsOutputReference(this, "input_collector_gcs");
  public get inputCollectorGcs() {
    return this._inputCollectorGcs;
  }
  public putInputCollectorGcs(value: CollectorInputCollectorGcs) {
    this._inputCollectorGcs.internalValue = value;
  }
  public resetInputCollectorGcs() {
    this._inputCollectorGcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorGcsInput() {
    return this._inputCollectorGcs.internalValue;
  }

  // input_collector_health_check - computed: false, optional: true, required: false
  private _inputCollectorHealthCheck = new CollectorInputCollectorHealthCheckOutputReference(this, "input_collector_health_check");
  public get inputCollectorHealthCheck() {
    return this._inputCollectorHealthCheck;
  }
  public putInputCollectorHealthCheck(value: CollectorInputCollectorHealthCheck) {
    this._inputCollectorHealthCheck.internalValue = value;
  }
  public resetInputCollectorHealthCheck() {
    this._inputCollectorHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorHealthCheckInput() {
    return this._inputCollectorHealthCheck.internalValue;
  }

  // input_collector_rest - computed: false, optional: true, required: false
  private _inputCollectorRest = new CollectorInputCollectorRestOutputReference(this, "input_collector_rest");
  public get inputCollectorRest() {
    return this._inputCollectorRest;
  }
  public putInputCollectorRest(value: CollectorInputCollectorRest) {
    this._inputCollectorRest.internalValue = value;
  }
  public resetInputCollectorRest() {
    this._inputCollectorRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorRestInput() {
    return this._inputCollectorRest.internalValue;
  }

  // input_collector_s3 - computed: false, optional: true, required: false
  private _inputCollectorS3 = new CollectorInputCollectorS3OutputReference(this, "input_collector_s3");
  public get inputCollectorS3() {
    return this._inputCollectorS3;
  }
  public putInputCollectorS3(value: CollectorInputCollectorS3) {
    this._inputCollectorS3.internalValue = value;
  }
  public resetInputCollectorS3() {
    this._inputCollectorS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorS3Input() {
    return this._inputCollectorS3.internalValue;
  }

  // input_collector_splunk - computed: false, optional: true, required: false
  private _inputCollectorSplunk = new CollectorInputCollectorSplunkOutputReference(this, "input_collector_splunk");
  public get inputCollectorSplunk() {
    return this._inputCollectorSplunk;
  }
  public putInputCollectorSplunk(value: CollectorInputCollectorSplunk) {
    this._inputCollectorSplunk.internalValue = value;
  }
  public resetInputCollectorSplunk() {
    this._inputCollectorSplunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCollectorSplunkInput() {
    return this._inputCollectorSplunk.internalValue;
  }

  // items - computed: true, optional: false, required: false
  private _items = new cdktf.StringMapList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      input_collector_azure_blob: collectorInputCollectorAzureBlobToTerraform(this._inputCollectorAzureBlob.internalValue),
      input_collector_cribl_lake: collectorInputCollectorCriblLakeToTerraform(this._inputCollectorCriblLake.internalValue),
      input_collector_database: collectorInputCollectorDatabaseToTerraform(this._inputCollectorDatabase.internalValue),
      input_collector_gcs: collectorInputCollectorGcsToTerraform(this._inputCollectorGcs.internalValue),
      input_collector_health_check: collectorInputCollectorHealthCheckToTerraform(this._inputCollectorHealthCheck.internalValue),
      input_collector_rest: collectorInputCollectorRestToTerraform(this._inputCollectorRest.internalValue),
      input_collector_s3: collectorInputCollectorS3ToTerraform(this._inputCollectorS3.internalValue),
      input_collector_splunk: collectorInputCollectorSplunkToTerraform(this._inputCollectorSplunk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      input_collector_azure_blob: {
        value: collectorInputCollectorAzureBlobToHclTerraform(this._inputCollectorAzureBlob.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorAzureBlob",
      },
      input_collector_cribl_lake: {
        value: collectorInputCollectorCriblLakeToHclTerraform(this._inputCollectorCriblLake.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorCriblLake",
      },
      input_collector_database: {
        value: collectorInputCollectorDatabaseToHclTerraform(this._inputCollectorDatabase.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorDatabase",
      },
      input_collector_gcs: {
        value: collectorInputCollectorGcsToHclTerraform(this._inputCollectorGcs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorGcs",
      },
      input_collector_health_check: {
        value: collectorInputCollectorHealthCheckToHclTerraform(this._inputCollectorHealthCheck.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorHealthCheck",
      },
      input_collector_rest: {
        value: collectorInputCollectorRestToHclTerraform(this._inputCollectorRest.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorRest",
      },
      input_collector_s3: {
        value: collectorInputCollectorS3ToHclTerraform(this._inputCollectorS3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorS3",
      },
      input_collector_splunk: {
        value: collectorInputCollectorSplunkToHclTerraform(this._inputCollectorSplunk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectorInputCollectorSplunk",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
