// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the transform checkpoint ranges should be optimized for performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#align_checkpoints ElasticsearchTransform#align_checkpoints}
  */
  readonly alignCheckpoints?: boolean | cdktf.IResolvable;
  /**
  * Defines if dates in the output should be written as ISO formatted string (default) or as millis since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#dates_as_epoch_millis ElasticsearchTransform#dates_as_epoch_millis}
  */
  readonly datesAsEpochMillis?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the transform should deduce the destination index mappings from the transform config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#deduce_mappings ElasticsearchTransform#deduce_mappings}
  */
  readonly deduceMappings?: boolean | cdktf.IResolvable;
  /**
  * When true, deferrable validations are not run upon creation, but rather when the transform is started. This behavior may be desired if the source index does not exist until after the transform is created. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#defer_validation ElasticsearchTransform#defer_validation}
  */
  readonly deferValidation?: boolean | cdktf.IResolvable;
  /**
  * Free text description of the transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#description ElasticsearchTransform#description}
  */
  readonly description?: string;
  /**
  * Specifies a limit on the number of input documents per second. Default (unset) value disables throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#docs_per_second ElasticsearchTransform#docs_per_second}
  */
  readonly docsPerSecond?: number;
  /**
  * Controls whether the transform should be started or stopped. Default is `false` (stopped).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#enabled ElasticsearchTransform#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The interval between checks for changes in the source indices when the transform is running continuously. Defaults to `1m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#frequency ElasticsearchTransform#frequency}
  */
  readonly frequency?: string;
  /**
  * The latest method transforms the data by finding the latest document for each unique key. JSON definition expected. Either 'pivot' or 'latest' must be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#latest ElasticsearchTransform#latest}
  */
  readonly latest?: string;
  /**
  * Defines the initial page size to use for the composite aggregation for each checkpoint. Default is 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#max_page_search_size ElasticsearchTransform#max_page_search_size}
  */
  readonly maxPageSearchSize?: number;
  /**
  * Defines optional transform metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#metadata ElasticsearchTransform#metadata}
  */
  readonly metadata?: string;
  /**
  * Name of the transform you wish to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#name ElasticsearchTransform#name}
  */
  readonly name: string;
  /**
  * Defines the number of retries on a recoverable failure before the transform task is marked as failed. The default value is the cluster-level setting num_transform_failure_retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#num_failure_retries ElasticsearchTransform#num_failure_retries}
  */
  readonly numFailureRetries?: number;
  /**
  * The pivot method transforms the data by aggregating and grouping it. JSON definition expected. Either 'pivot' or 'latest' must be present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#pivot ElasticsearchTransform#pivot}
  */
  readonly pivot?: string;
  /**
  * Period to wait for a response from Elasticsearch when performing any management operation. If no response is received before the timeout expires, the operation fails and returns an error. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#timeout ElasticsearchTransform#timeout}
  */
  readonly timeout?: string;
  /**
  * In unattended mode, the transform retries indefinitely in case of an error which means the transform never fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#unattended ElasticsearchTransform#unattended}
  */
  readonly unattended?: boolean | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#destination ElasticsearchTransform#destination}
  */
  readonly destination: ElasticsearchTransformDestination;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#retention_policy ElasticsearchTransform#retention_policy}
  */
  readonly retentionPolicy?: ElasticsearchTransformRetentionPolicy;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#source ElasticsearchTransform#source}
  */
  readonly source: ElasticsearchTransformSource;
  /**
  * sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#sync ElasticsearchTransform#sync}
  */
  readonly sync?: ElasticsearchTransformSync;
}
export interface ElasticsearchTransformDestinationAliases {
  /**
  * The name of the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#alias ElasticsearchTransform#alias}
  */
  readonly alias: string;
  /**
  * Whether the destination index should be the only index in this alias. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#move_on_creation ElasticsearchTransform#move_on_creation}
  */
  readonly moveOnCreation?: boolean | cdktf.IResolvable;
}

export function elasticsearchTransformDestinationAliasesToTerraform(struct?: ElasticsearchTransformDestinationAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    move_on_creation: cdktf.booleanToTerraform(struct!.moveOnCreation),
  }
}


export function elasticsearchTransformDestinationAliasesToHclTerraform(struct?: ElasticsearchTransformDestinationAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    move_on_creation: {
      value: cdktf.booleanToHclTerraform(struct!.moveOnCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformDestinationAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchTransformDestinationAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._moveOnCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveOnCreation = this._moveOnCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformDestinationAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._moveOnCreation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._moveOnCreation = value.moveOnCreation;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // move_on_creation - computed: false, optional: true, required: false
  private _moveOnCreation?: boolean | cdktf.IResolvable; 
  public get moveOnCreation() {
    return this.getBooleanAttribute('move_on_creation');
  }
  public set moveOnCreation(value: boolean | cdktf.IResolvable) {
    this._moveOnCreation = value;
  }
  public resetMoveOnCreation() {
    this._moveOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveOnCreationInput() {
    return this._moveOnCreation;
  }
}

export class ElasticsearchTransformDestinationAliasesList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchTransformDestinationAliases[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchTransformDestinationAliasesOutputReference {
    return new ElasticsearchTransformDestinationAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchTransformDestination {
  /**
  * The destination index for the transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#index ElasticsearchTransform#index}
  */
  readonly index: string;
  /**
  * The unique identifier for an ingest pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#pipeline ElasticsearchTransform#pipeline}
  */
  readonly pipeline?: string;
  /**
  * aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#aliases ElasticsearchTransform#aliases}
  */
  readonly aliases?: ElasticsearchTransformDestinationAliases[] | cdktf.IResolvable;
}

export function elasticsearchTransformDestinationToTerraform(struct?: ElasticsearchTransformDestinationOutputReference | ElasticsearchTransformDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    pipeline: cdktf.stringToTerraform(struct!.pipeline),
    aliases: cdktf.listMapper(elasticsearchTransformDestinationAliasesToTerraform, true)(struct!.aliases),
  }
}


export function elasticsearchTransformDestinationToHclTerraform(struct?: ElasticsearchTransformDestinationOutputReference | ElasticsearchTransformDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    aliases: {
      value: cdktf.listMapperHcl(elasticsearchTransformDestinationAliasesToHclTerraform, true)(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchTransformDestinationAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._pipeline = undefined;
      this._aliases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._pipeline = value.pipeline;
      this._aliases.internalValue = value.aliases;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // aliases - computed: false, optional: true, required: false
  private _aliases = new ElasticsearchTransformDestinationAliasesList(this, "aliases", false);
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: ElasticsearchTransformDestinationAliases[] | cdktf.IResolvable) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }
}
export interface ElasticsearchTransformRetentionPolicyTime {
  /**
  * The date field that is used to calculate the age of the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#field ElasticsearchTransform#field}
  */
  readonly field: string;
  /**
  * Specifies the maximum age of a document in the destination index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#max_age ElasticsearchTransform#max_age}
  */
  readonly maxAge: string;
}

export function elasticsearchTransformRetentionPolicyTimeToTerraform(struct?: ElasticsearchTransformRetentionPolicyTimeOutputReference | ElasticsearchTransformRetentionPolicyTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
  }
}


export function elasticsearchTransformRetentionPolicyTimeToHclTerraform(struct?: ElasticsearchTransformRetentionPolicyTimeOutputReference | ElasticsearchTransformRetentionPolicyTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformRetentionPolicyTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformRetentionPolicyTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformRetentionPolicyTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._maxAge = value.maxAge;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // max_age - computed: false, optional: false, required: true
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ElasticsearchTransformRetentionPolicy {
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#time ElasticsearchTransform#time}
  */
  readonly time: ElasticsearchTransformRetentionPolicyTime;
}

export function elasticsearchTransformRetentionPolicyToTerraform(struct?: ElasticsearchTransformRetentionPolicyOutputReference | ElasticsearchTransformRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: elasticsearchTransformRetentionPolicyTimeToTerraform(struct!.time),
  }
}


export function elasticsearchTransformRetentionPolicyToHclTerraform(struct?: ElasticsearchTransformRetentionPolicyOutputReference | ElasticsearchTransformRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: elasticsearchTransformRetentionPolicyTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchTransformRetentionPolicyTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time.internalValue = value.time;
    }
  }

  // time - computed: false, optional: false, required: true
  private _time = new ElasticsearchTransformRetentionPolicyTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: ElasticsearchTransformRetentionPolicyTime) {
    this._time.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface ElasticsearchTransformSource {
  /**
  * The source indices for the transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#indices ElasticsearchTransform#indices}
  */
  readonly indices: string[];
  /**
  * A query clause that retrieves a subset of data from the source index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#query ElasticsearchTransform#query}
  */
  readonly query?: string;
  /**
  * Definitions of search-time runtime fields that can be used by the transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#runtime_mappings ElasticsearchTransform#runtime_mappings}
  */
  readonly runtimeMappings?: string;
}

export function elasticsearchTransformSourceToTerraform(struct?: ElasticsearchTransformSourceOutputReference | ElasticsearchTransformSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indices),
    query: cdktf.stringToTerraform(struct!.query),
    runtime_mappings: cdktf.stringToTerraform(struct!.runtimeMappings),
  }
}


export function elasticsearchTransformSourceToHclTerraform(struct?: ElasticsearchTransformSourceOutputReference | ElasticsearchTransformSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_mappings: {
      value: cdktf.stringToHclTerraform(struct!.runtimeMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indices !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._runtimeMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeMappings = this._runtimeMappings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indices = undefined;
      this._query = undefined;
      this._runtimeMappings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indices = value.indices;
      this._query = value.query;
      this._runtimeMappings = value.runtimeMappings;
    }
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: string[]; 
  public get indices() {
    return this.getListAttribute('indices');
  }
  public set indices(value: string[]) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
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

  // runtime_mappings - computed: false, optional: true, required: false
  private _runtimeMappings?: string; 
  public get runtimeMappings() {
    return this.getStringAttribute('runtime_mappings');
  }
  public set runtimeMappings(value: string) {
    this._runtimeMappings = value;
  }
  public resetRuntimeMappings() {
    this._runtimeMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeMappingsInput() {
    return this._runtimeMappings;
  }
}
export interface ElasticsearchTransformSyncTime {
  /**
  * The time delay between the current time and the latest input data time. The default value is 60s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#delay ElasticsearchTransform#delay}
  */
  readonly delay?: string;
  /**
  * The date field that is used to identify new documents in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#field ElasticsearchTransform#field}
  */
  readonly field: string;
}

export function elasticsearchTransformSyncTimeToTerraform(struct?: ElasticsearchTransformSyncTimeOutputReference | ElasticsearchTransformSyncTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function elasticsearchTransformSyncTimeToHclTerraform(struct?: ElasticsearchTransformSyncTimeOutputReference | ElasticsearchTransformSyncTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformSyncTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformSyncTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformSyncTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delay = undefined;
      this._field = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delay = value.delay;
      this._field = value.field;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}
export interface ElasticsearchTransformSync {
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#time ElasticsearchTransform#time}
  */
  readonly time: ElasticsearchTransformSyncTime;
}

export function elasticsearchTransformSyncToTerraform(struct?: ElasticsearchTransformSyncOutputReference | ElasticsearchTransformSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: elasticsearchTransformSyncTimeToTerraform(struct!.time),
  }
}


export function elasticsearchTransformSyncToHclTerraform(struct?: ElasticsearchTransformSyncOutputReference | ElasticsearchTransformSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: elasticsearchTransformSyncTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchTransformSyncTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchTransformSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchTransformSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchTransformSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._time.internalValue = value.time;
    }
  }

  // time - computed: false, optional: false, required: true
  private _time = new ElasticsearchTransformSyncTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: ElasticsearchTransformSyncTime) {
    this._time.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform elasticstack_elasticsearch_transform}
*/
export class ElasticsearchTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_transform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchTransform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchTransform to import
  * @param importFromId The id of the existing ElasticsearchTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchTransform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_transform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/elasticsearch_transform elasticstack_elasticsearch_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchTransformConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_transform',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alignCheckpoints = config.alignCheckpoints;
    this._datesAsEpochMillis = config.datesAsEpochMillis;
    this._deduceMappings = config.deduceMappings;
    this._deferValidation = config.deferValidation;
    this._description = config.description;
    this._docsPerSecond = config.docsPerSecond;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._latest = config.latest;
    this._maxPageSearchSize = config.maxPageSearchSize;
    this._metadata = config.metadata;
    this._name = config.name;
    this._numFailureRetries = config.numFailureRetries;
    this._pivot = config.pivot;
    this._timeout = config.timeout;
    this._unattended = config.unattended;
    this._destination.internalValue = config.destination;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._source.internalValue = config.source;
    this._sync.internalValue = config.sync;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // align_checkpoints - computed: false, optional: true, required: false
  private _alignCheckpoints?: boolean | cdktf.IResolvable; 
  public get alignCheckpoints() {
    return this.getBooleanAttribute('align_checkpoints');
  }
  public set alignCheckpoints(value: boolean | cdktf.IResolvable) {
    this._alignCheckpoints = value;
  }
  public resetAlignCheckpoints() {
    this._alignCheckpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignCheckpointsInput() {
    return this._alignCheckpoints;
  }

  // dates_as_epoch_millis - computed: false, optional: true, required: false
  private _datesAsEpochMillis?: boolean | cdktf.IResolvable; 
  public get datesAsEpochMillis() {
    return this.getBooleanAttribute('dates_as_epoch_millis');
  }
  public set datesAsEpochMillis(value: boolean | cdktf.IResolvable) {
    this._datesAsEpochMillis = value;
  }
  public resetDatesAsEpochMillis() {
    this._datesAsEpochMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesAsEpochMillisInput() {
    return this._datesAsEpochMillis;
  }

  // deduce_mappings - computed: false, optional: true, required: false
  private _deduceMappings?: boolean | cdktf.IResolvable; 
  public get deduceMappings() {
    return this.getBooleanAttribute('deduce_mappings');
  }
  public set deduceMappings(value: boolean | cdktf.IResolvable) {
    this._deduceMappings = value;
  }
  public resetDeduceMappings() {
    this._deduceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduceMappingsInput() {
    return this._deduceMappings;
  }

  // defer_validation - computed: false, optional: true, required: false
  private _deferValidation?: boolean | cdktf.IResolvable; 
  public get deferValidation() {
    return this.getBooleanAttribute('defer_validation');
  }
  public set deferValidation(value: boolean | cdktf.IResolvable) {
    this._deferValidation = value;
  }
  public resetDeferValidation() {
    this._deferValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferValidationInput() {
    return this._deferValidation;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // docs_per_second - computed: false, optional: true, required: false
  private _docsPerSecond?: number; 
  public get docsPerSecond() {
    return this.getNumberAttribute('docs_per_second');
  }
  public set docsPerSecond(value: number) {
    this._docsPerSecond = value;
  }
  public resetDocsPerSecond() {
    this._docsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsPerSecondInput() {
    return this._docsPerSecond;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // max_page_search_size - computed: false, optional: true, required: false
  private _maxPageSearchSize?: number; 
  public get maxPageSearchSize() {
    return this.getNumberAttribute('max_page_search_size');
  }
  public set maxPageSearchSize(value: number) {
    this._maxPageSearchSize = value;
  }
  public resetMaxPageSearchSize() {
    this._maxPageSearchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSearchSizeInput() {
    return this._maxPageSearchSize;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // num_failure_retries - computed: false, optional: true, required: false
  private _numFailureRetries?: number; 
  public get numFailureRetries() {
    return this.getNumberAttribute('num_failure_retries');
  }
  public set numFailureRetries(value: number) {
    this._numFailureRetries = value;
  }
  public resetNumFailureRetries() {
    this._numFailureRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFailureRetriesInput() {
    return this._numFailureRetries;
  }

  // pivot - computed: false, optional: true, required: false
  private _pivot?: string; 
  public get pivot() {
    return this.getStringAttribute('pivot');
  }
  public set pivot(value: string) {
    this._pivot = value;
  }
  public resetPivot() {
    this._pivot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotInput() {
    return this._pivot;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unattended - computed: false, optional: true, required: false
  private _unattended?: boolean | cdktf.IResolvable; 
  public get unattended() {
    return this.getBooleanAttribute('unattended');
  }
  public set unattended(value: boolean | cdktf.IResolvable) {
    this._unattended = value;
  }
  public resetUnattended() {
    this._unattended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendedInput() {
    return this._unattended;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new ElasticsearchTransformDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ElasticsearchTransformDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new ElasticsearchTransformRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: ElasticsearchTransformRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ElasticsearchTransformSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ElasticsearchTransformSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new ElasticsearchTransformSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: ElasticsearchTransformSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      align_checkpoints: cdktf.booleanToTerraform(this._alignCheckpoints),
      dates_as_epoch_millis: cdktf.booleanToTerraform(this._datesAsEpochMillis),
      deduce_mappings: cdktf.booleanToTerraform(this._deduceMappings),
      defer_validation: cdktf.booleanToTerraform(this._deferValidation),
      description: cdktf.stringToTerraform(this._description),
      docs_per_second: cdktf.numberToTerraform(this._docsPerSecond),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      latest: cdktf.stringToTerraform(this._latest),
      max_page_search_size: cdktf.numberToTerraform(this._maxPageSearchSize),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      num_failure_retries: cdktf.numberToTerraform(this._numFailureRetries),
      pivot: cdktf.stringToTerraform(this._pivot),
      timeout: cdktf.stringToTerraform(this._timeout),
      unattended: cdktf.booleanToTerraform(this._unattended),
      destination: elasticsearchTransformDestinationToTerraform(this._destination.internalValue),
      retention_policy: elasticsearchTransformRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      source: elasticsearchTransformSourceToTerraform(this._source.internalValue),
      sync: elasticsearchTransformSyncToTerraform(this._sync.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      align_checkpoints: {
        value: cdktf.booleanToHclTerraform(this._alignCheckpoints),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dates_as_epoch_millis: {
        value: cdktf.booleanToHclTerraform(this._datesAsEpochMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deduce_mappings: {
        value: cdktf.booleanToHclTerraform(this._deduceMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      defer_validation: {
        value: cdktf.booleanToHclTerraform(this._deferValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docs_per_second: {
        value: cdktf.numberToHclTerraform(this._docsPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest: {
        value: cdktf.stringToHclTerraform(this._latest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_page_search_size: {
        value: cdktf.numberToHclTerraform(this._maxPageSearchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      num_failure_retries: {
        value: cdktf.numberToHclTerraform(this._numFailureRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pivot: {
        value: cdktf.stringToHclTerraform(this._pivot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unattended: {
        value: cdktf.booleanToHclTerraform(this._unattended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination: {
        value: elasticsearchTransformDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchTransformDestinationList",
      },
      retention_policy: {
        value: elasticsearchTransformRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchTransformRetentionPolicyList",
      },
      source: {
        value: elasticsearchTransformSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchTransformSourceList",
      },
      sync: {
        value: elasticsearchTransformSyncToHclTerraform(this._sync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchTransformSyncList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
