// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchIndexLifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional user metadata about the ilm policy. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#metadata ElasticsearchIndexLifecycle#metadata}
  */
  readonly metadata?: string;
  /**
  * Identifier for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#name ElasticsearchIndexLifecycle#name}
  */
  readonly name: string;
  /**
  * cold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#cold ElasticsearchIndexLifecycle#cold}
  */
  readonly cold?: ElasticsearchIndexLifecycleCold;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#delete ElasticsearchIndexLifecycle#delete}
  */
  readonly delete?: ElasticsearchIndexLifecycleDelete;
  /**
  * elasticsearch_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#elasticsearch_connection ElasticsearchIndexLifecycle#elasticsearch_connection}
  */
  readonly elasticsearchConnection?: ElasticsearchIndexLifecycleElasticsearchConnection;
  /**
  * frozen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#frozen ElasticsearchIndexLifecycle#frozen}
  */
  readonly frozen?: ElasticsearchIndexLifecycleFrozen;
  /**
  * hot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#hot ElasticsearchIndexLifecycle#hot}
  */
  readonly hot?: ElasticsearchIndexLifecycleHot;
  /**
  * warm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#warm ElasticsearchIndexLifecycle#warm}
  */
  readonly warm?: ElasticsearchIndexLifecycleWarm;
}
export interface ElasticsearchIndexLifecycleColdAllocate {
  /**
  * Assigns an index to nodes that have none of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#exclude ElasticsearchIndexLifecycle#exclude}
  */
  readonly exclude?: string;
  /**
  * Assigns an index to nodes that have at least one of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#include ElasticsearchIndexLifecycle#include}
  */
  readonly include?: string;
  /**
  * Number of replicas to assign to the index. Default: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#number_of_replicas ElasticsearchIndexLifecycle#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * Assigns an index to nodes that have all of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#require ElasticsearchIndexLifecycle#require}
  */
  readonly require?: string;
  /**
  * The maximum number of shards for the index on a single Elasticsearch node. Defaults to `-1` (unlimited). Supported from Elasticsearch version **7.16**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#total_shards_per_node ElasticsearchIndexLifecycle#total_shards_per_node}
  */
  readonly totalShardsPerNode?: number;
}

export function elasticsearchIndexLifecycleColdAllocateToTerraform(struct?: ElasticsearchIndexLifecycleColdAllocateOutputReference | ElasticsearchIndexLifecycleColdAllocate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    require: cdktf.stringToTerraform(struct!.require),
    total_shards_per_node: cdktf.numberToTerraform(struct!.totalShardsPerNode),
  }
}


export function elasticsearchIndexLifecycleColdAllocateToHclTerraform(struct?: ElasticsearchIndexLifecycleColdAllocateOutputReference | ElasticsearchIndexLifecycleColdAllocate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require: {
      value: cdktf.stringToHclTerraform(struct!.require),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_shards_per_node: {
      value: cdktf.numberToHclTerraform(struct!.totalShardsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdAllocateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdAllocate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._require !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require;
    }
    if (this._totalShardsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalShardsPerNode = this._totalShardsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdAllocate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._numberOfReplicas = undefined;
      this._require = undefined;
      this._totalShardsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._numberOfReplicas = value.numberOfReplicas;
      this._require = value.require;
      this._totalShardsPerNode = value.totalShardsPerNode;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // require - computed: false, optional: true, required: false
  private _require?: string; 
  public get require() {
    return this.getStringAttribute('require');
  }
  public set require(value: string) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }

  // total_shards_per_node - computed: false, optional: true, required: false
  private _totalShardsPerNode?: number; 
  public get totalShardsPerNode() {
    return this.getNumberAttribute('total_shards_per_node');
  }
  public set totalShardsPerNode(value: number) {
    this._totalShardsPerNode = value;
  }
  public resetTotalShardsPerNode() {
    this._totalShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalShardsPerNodeInput() {
    return this._totalShardsPerNode;
  }
}
export interface ElasticsearchIndexLifecycleColdDownsample {
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#fixed_interval ElasticsearchIndexLifecycle#fixed_interval}
  */
  readonly fixedInterval: string;
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#wait_timeout ElasticsearchIndexLifecycle#wait_timeout}
  */
  readonly waitTimeout?: string;
}

export function elasticsearchIndexLifecycleColdDownsampleToTerraform(struct?: ElasticsearchIndexLifecycleColdDownsampleOutputReference | ElasticsearchIndexLifecycleColdDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_interval: cdktf.stringToTerraform(struct!.fixedInterval),
    wait_timeout: cdktf.stringToTerraform(struct!.waitTimeout),
  }
}


export function elasticsearchIndexLifecycleColdDownsampleToHclTerraform(struct?: ElasticsearchIndexLifecycleColdDownsampleOutputReference | ElasticsearchIndexLifecycleColdDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_interval: {
      value: cdktf.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdDownsampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdDownsample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdDownsample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedInterval = undefined;
      this._waitTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedInterval = value.fixedInterval;
      this._waitTimeout = value.waitTimeout;
    }
  }

  // fixed_interval - computed: false, optional: false, required: true
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}
export interface ElasticsearchIndexLifecycleColdFreeze {
  /**
  * Controls whether ILM freezes the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleColdFreezeToTerraform(struct?: ElasticsearchIndexLifecycleColdFreezeOutputReference | ElasticsearchIndexLifecycleColdFreeze): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleColdFreezeToHclTerraform(struct?: ElasticsearchIndexLifecycleColdFreezeOutputReference | ElasticsearchIndexLifecycleColdFreeze): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdFreezeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdFreeze | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdFreeze | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleColdMigrate {
  /**
  * Controls whether ILM automatically migrates the index during this phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleColdMigrateToTerraform(struct?: ElasticsearchIndexLifecycleColdMigrateOutputReference | ElasticsearchIndexLifecycleColdMigrate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleColdMigrateToHclTerraform(struct?: ElasticsearchIndexLifecycleColdMigrateOutputReference | ElasticsearchIndexLifecycleColdMigrate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdMigrateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdMigrate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdMigrate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleColdReadonly {
  /**
  * Controls whether ILM makes the index read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleColdReadonlyToTerraform(struct?: ElasticsearchIndexLifecycleColdReadonlyOutputReference | ElasticsearchIndexLifecycleColdReadonly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleColdReadonlyToHclTerraform(struct?: ElasticsearchIndexLifecycleColdReadonlyOutputReference | ElasticsearchIndexLifecycleColdReadonly): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdReadonlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdReadonly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdReadonly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleColdSearchableSnapshot {
  /**
  * Force merges the managed index to one segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#force_merge_index ElasticsearchIndexLifecycle#force_merge_index}
  */
  readonly forceMergeIndex?: boolean | cdktf.IResolvable;
  /**
  * Repository used to store the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#snapshot_repository ElasticsearchIndexLifecycle#snapshot_repository}
  */
  readonly snapshotRepository: string;
}

export function elasticsearchIndexLifecycleColdSearchableSnapshotToTerraform(struct?: ElasticsearchIndexLifecycleColdSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleColdSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_merge_index: cdktf.booleanToTerraform(struct!.forceMergeIndex),
    snapshot_repository: cdktf.stringToTerraform(struct!.snapshotRepository),
  }
}


export function elasticsearchIndexLifecycleColdSearchableSnapshotToHclTerraform(struct?: ElasticsearchIndexLifecycleColdSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleColdSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_merge_index: {
      value: cdktf.booleanToHclTerraform(struct!.forceMergeIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_repository: {
      value: cdktf.stringToHclTerraform(struct!.snapshotRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdSearchableSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdSearchableSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceMergeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMergeIndex = this._forceMergeIndex;
    }
    if (this._snapshotRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRepository = this._snapshotRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdSearchableSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceMergeIndex = undefined;
      this._snapshotRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceMergeIndex = value.forceMergeIndex;
      this._snapshotRepository = value.snapshotRepository;
    }
  }

  // force_merge_index - computed: false, optional: true, required: false
  private _forceMergeIndex?: boolean | cdktf.IResolvable; 
  public get forceMergeIndex() {
    return this.getBooleanAttribute('force_merge_index');
  }
  public set forceMergeIndex(value: boolean | cdktf.IResolvable) {
    this._forceMergeIndex = value;
  }
  public resetForceMergeIndex() {
    this._forceMergeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMergeIndexInput() {
    return this._forceMergeIndex;
  }

  // snapshot_repository - computed: false, optional: false, required: true
  private _snapshotRepository?: string; 
  public get snapshotRepository() {
    return this.getStringAttribute('snapshot_repository');
  }
  public set snapshotRepository(value: string) {
    this._snapshotRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRepositoryInput() {
    return this._snapshotRepository;
  }
}
export interface ElasticsearchIndexLifecycleColdSetPriority {
  /**
  * The priority for the index. Must be 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#priority ElasticsearchIndexLifecycle#priority}
  */
  readonly priority: number;
}

export function elasticsearchIndexLifecycleColdSetPriorityToTerraform(struct?: ElasticsearchIndexLifecycleColdSetPriorityOutputReference | ElasticsearchIndexLifecycleColdSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function elasticsearchIndexLifecycleColdSetPriorityToHclTerraform(struct?: ElasticsearchIndexLifecycleColdSetPriorityOutputReference | ElasticsearchIndexLifecycleColdSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdSetPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdSetPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdSetPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface ElasticsearchIndexLifecycleColdUnfollow {
  /**
  * Controls whether ILM makes the follower index a regular one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleColdUnfollowToTerraform(struct?: ElasticsearchIndexLifecycleColdUnfollowOutputReference | ElasticsearchIndexLifecycleColdUnfollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleColdUnfollowToHclTerraform(struct?: ElasticsearchIndexLifecycleColdUnfollowOutputReference | ElasticsearchIndexLifecycleColdUnfollow): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdUnfollowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleColdUnfollow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleColdUnfollow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleCold {
  /**
  * ILM moves indices through the lifecycle according to their age. To control the timing of these transitions, you set a minimum age for each phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * allocate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#allocate ElasticsearchIndexLifecycle#allocate}
  */
  readonly allocate?: ElasticsearchIndexLifecycleColdAllocate;
  /**
  * downsample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#downsample ElasticsearchIndexLifecycle#downsample}
  */
  readonly downsample?: ElasticsearchIndexLifecycleColdDownsample;
  /**
  * freeze block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#freeze ElasticsearchIndexLifecycle#freeze}
  */
  readonly freeze?: ElasticsearchIndexLifecycleColdFreeze;
  /**
  * migrate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#migrate ElasticsearchIndexLifecycle#migrate}
  */
  readonly migrate?: ElasticsearchIndexLifecycleColdMigrate;
  /**
  * readonly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#readonly ElasticsearchIndexLifecycle#readonly}
  */
  readonly readonly?: ElasticsearchIndexLifecycleColdReadonly;
  /**
  * searchable_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#searchable_snapshot ElasticsearchIndexLifecycle#searchable_snapshot}
  */
  readonly searchableSnapshot?: ElasticsearchIndexLifecycleColdSearchableSnapshot;
  /**
  * set_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#set_priority ElasticsearchIndexLifecycle#set_priority}
  */
  readonly setPriority?: ElasticsearchIndexLifecycleColdSetPriority;
  /**
  * unfollow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#unfollow ElasticsearchIndexLifecycle#unfollow}
  */
  readonly unfollow?: ElasticsearchIndexLifecycleColdUnfollow;
}

export function elasticsearchIndexLifecycleColdToTerraform(struct?: ElasticsearchIndexLifecycleColdOutputReference | ElasticsearchIndexLifecycleCold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    allocate: elasticsearchIndexLifecycleColdAllocateToTerraform(struct!.allocate),
    downsample: elasticsearchIndexLifecycleColdDownsampleToTerraform(struct!.downsample),
    freeze: elasticsearchIndexLifecycleColdFreezeToTerraform(struct!.freeze),
    migrate: elasticsearchIndexLifecycleColdMigrateToTerraform(struct!.migrate),
    readonly: elasticsearchIndexLifecycleColdReadonlyToTerraform(struct!.readonly),
    searchable_snapshot: elasticsearchIndexLifecycleColdSearchableSnapshotToTerraform(struct!.searchableSnapshot),
    set_priority: elasticsearchIndexLifecycleColdSetPriorityToTerraform(struct!.setPriority),
    unfollow: elasticsearchIndexLifecycleColdUnfollowToTerraform(struct!.unfollow),
  }
}


export function elasticsearchIndexLifecycleColdToHclTerraform(struct?: ElasticsearchIndexLifecycleColdOutputReference | ElasticsearchIndexLifecycleCold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocate: {
      value: elasticsearchIndexLifecycleColdAllocateToHclTerraform(struct!.allocate),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdAllocateList",
    },
    downsample: {
      value: elasticsearchIndexLifecycleColdDownsampleToHclTerraform(struct!.downsample),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdDownsampleList",
    },
    freeze: {
      value: elasticsearchIndexLifecycleColdFreezeToHclTerraform(struct!.freeze),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdFreezeList",
    },
    migrate: {
      value: elasticsearchIndexLifecycleColdMigrateToHclTerraform(struct!.migrate),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdMigrateList",
    },
    readonly: {
      value: elasticsearchIndexLifecycleColdReadonlyToHclTerraform(struct!.readonly),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdReadonlyList",
    },
    searchable_snapshot: {
      value: elasticsearchIndexLifecycleColdSearchableSnapshotToHclTerraform(struct!.searchableSnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdSearchableSnapshotList",
    },
    set_priority: {
      value: elasticsearchIndexLifecycleColdSetPriorityToHclTerraform(struct!.setPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdSetPriorityList",
    },
    unfollow: {
      value: elasticsearchIndexLifecycleColdUnfollowToHclTerraform(struct!.unfollow),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleColdUnfollowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleColdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleCold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._allocate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate?.internalValue;
    }
    if (this._downsample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downsample = this._downsample?.internalValue;
    }
    if (this._freeze?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeze = this._freeze?.internalValue;
    }
    if (this._migrate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrate = this._migrate?.internalValue;
    }
    if (this._readonly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly?.internalValue;
    }
    if (this._searchableSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchableSnapshot = this._searchableSnapshot?.internalValue;
    }
    if (this._setPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPriority = this._setPriority?.internalValue;
    }
    if (this._unfollow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unfollow = this._unfollow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleCold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._allocate.internalValue = undefined;
      this._downsample.internalValue = undefined;
      this._freeze.internalValue = undefined;
      this._migrate.internalValue = undefined;
      this._readonly.internalValue = undefined;
      this._searchableSnapshot.internalValue = undefined;
      this._setPriority.internalValue = undefined;
      this._unfollow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._allocate.internalValue = value.allocate;
      this._downsample.internalValue = value.downsample;
      this._freeze.internalValue = value.freeze;
      this._migrate.internalValue = value.migrate;
      this._readonly.internalValue = value.readonly;
      this._searchableSnapshot.internalValue = value.searchableSnapshot;
      this._setPriority.internalValue = value.setPriority;
      this._unfollow.internalValue = value.unfollow;
    }
  }

  // min_age - computed: true, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate = new ElasticsearchIndexLifecycleColdAllocateOutputReference(this, "allocate");
  public get allocate() {
    return this._allocate;
  }
  public putAllocate(value: ElasticsearchIndexLifecycleColdAllocate) {
    this._allocate.internalValue = value;
  }
  public resetAllocate() {
    this._allocate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate.internalValue;
  }

  // downsample - computed: false, optional: true, required: false
  private _downsample = new ElasticsearchIndexLifecycleColdDownsampleOutputReference(this, "downsample");
  public get downsample() {
    return this._downsample;
  }
  public putDownsample(value: ElasticsearchIndexLifecycleColdDownsample) {
    this._downsample.internalValue = value;
  }
  public resetDownsample() {
    this._downsample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downsampleInput() {
    return this._downsample.internalValue;
  }

  // freeze - computed: false, optional: true, required: false
  private _freeze = new ElasticsearchIndexLifecycleColdFreezeOutputReference(this, "freeze");
  public get freeze() {
    return this._freeze;
  }
  public putFreeze(value: ElasticsearchIndexLifecycleColdFreeze) {
    this._freeze.internalValue = value;
  }
  public resetFreeze() {
    this._freeze.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeInput() {
    return this._freeze.internalValue;
  }

  // migrate - computed: false, optional: true, required: false
  private _migrate = new ElasticsearchIndexLifecycleColdMigrateOutputReference(this, "migrate");
  public get migrate() {
    return this._migrate;
  }
  public putMigrate(value: ElasticsearchIndexLifecycleColdMigrate) {
    this._migrate.internalValue = value;
  }
  public resetMigrate() {
    this._migrate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateInput() {
    return this._migrate.internalValue;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly = new ElasticsearchIndexLifecycleColdReadonlyOutputReference(this, "readonly");
  public get readonly() {
    return this._readonly;
  }
  public putReadonly(value: ElasticsearchIndexLifecycleColdReadonly) {
    this._readonly.internalValue = value;
  }
  public resetReadonly() {
    this._readonly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly.internalValue;
  }

  // searchable_snapshot - computed: false, optional: true, required: false
  private _searchableSnapshot = new ElasticsearchIndexLifecycleColdSearchableSnapshotOutputReference(this, "searchable_snapshot");
  public get searchableSnapshot() {
    return this._searchableSnapshot;
  }
  public putSearchableSnapshot(value: ElasticsearchIndexLifecycleColdSearchableSnapshot) {
    this._searchableSnapshot.internalValue = value;
  }
  public resetSearchableSnapshot() {
    this._searchableSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableSnapshotInput() {
    return this._searchableSnapshot.internalValue;
  }

  // set_priority - computed: false, optional: true, required: false
  private _setPriority = new ElasticsearchIndexLifecycleColdSetPriorityOutputReference(this, "set_priority");
  public get setPriority() {
    return this._setPriority;
  }
  public putSetPriority(value: ElasticsearchIndexLifecycleColdSetPriority) {
    this._setPriority.internalValue = value;
  }
  public resetSetPriority() {
    this._setPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPriorityInput() {
    return this._setPriority.internalValue;
  }

  // unfollow - computed: false, optional: true, required: false
  private _unfollow = new ElasticsearchIndexLifecycleColdUnfollowOutputReference(this, "unfollow");
  public get unfollow() {
    return this._unfollow;
  }
  public putUnfollow(value: ElasticsearchIndexLifecycleColdUnfollow) {
    this._unfollow.internalValue = value;
  }
  public resetUnfollow() {
    this._unfollow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfollowInput() {
    return this._unfollow.internalValue;
  }
}
export interface ElasticsearchIndexLifecycleDeleteDelete {
  /**
  * Deletes the searchable snapshot created in a previous phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#delete_searchable_snapshot ElasticsearchIndexLifecycle#delete_searchable_snapshot}
  */
  readonly deleteSearchableSnapshot?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleDeleteDeleteToTerraform(struct?: ElasticsearchIndexLifecycleDeleteDeleteOutputReference | ElasticsearchIndexLifecycleDeleteDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_searchable_snapshot: cdktf.booleanToTerraform(struct!.deleteSearchableSnapshot),
  }
}


export function elasticsearchIndexLifecycleDeleteDeleteToHclTerraform(struct?: ElasticsearchIndexLifecycleDeleteDeleteOutputReference | ElasticsearchIndexLifecycleDeleteDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_searchable_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.deleteSearchableSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleDeleteDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleDeleteDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteSearchableSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteSearchableSnapshot = this._deleteSearchableSnapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleDeleteDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteSearchableSnapshot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteSearchableSnapshot = value.deleteSearchableSnapshot;
    }
  }

  // delete_searchable_snapshot - computed: false, optional: true, required: false
  private _deleteSearchableSnapshot?: boolean | cdktf.IResolvable; 
  public get deleteSearchableSnapshot() {
    return this.getBooleanAttribute('delete_searchable_snapshot');
  }
  public set deleteSearchableSnapshot(value: boolean | cdktf.IResolvable) {
    this._deleteSearchableSnapshot = value;
  }
  public resetDeleteSearchableSnapshot() {
    this._deleteSearchableSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSearchableSnapshotInput() {
    return this._deleteSearchableSnapshot;
  }
}
export interface ElasticsearchIndexLifecycleDeleteWaitForSnapshot {
  /**
  * Name of the SLM policy that the delete action should wait for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#policy ElasticsearchIndexLifecycle#policy}
  */
  readonly policy: string;
}

export function elasticsearchIndexLifecycleDeleteWaitForSnapshotToTerraform(struct?: ElasticsearchIndexLifecycleDeleteWaitForSnapshotOutputReference | ElasticsearchIndexLifecycleDeleteWaitForSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function elasticsearchIndexLifecycleDeleteWaitForSnapshotToHclTerraform(struct?: ElasticsearchIndexLifecycleDeleteWaitForSnapshotOutputReference | ElasticsearchIndexLifecycleDeleteWaitForSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleDeleteWaitForSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleDeleteWaitForSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleDeleteWaitForSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ElasticsearchIndexLifecycleDelete {
  /**
  * ILM moves indices through the lifecycle according to their age. To control the timing of these transitions, you set a minimum age for each phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#delete ElasticsearchIndexLifecycle#delete}
  */
  readonly delete?: ElasticsearchIndexLifecycleDeleteDelete;
  /**
  * wait_for_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#wait_for_snapshot ElasticsearchIndexLifecycle#wait_for_snapshot}
  */
  readonly waitForSnapshot?: ElasticsearchIndexLifecycleDeleteWaitForSnapshot;
}

export function elasticsearchIndexLifecycleDeleteToTerraform(struct?: ElasticsearchIndexLifecycleDeleteOutputReference | ElasticsearchIndexLifecycleDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    delete: elasticsearchIndexLifecycleDeleteDeleteToTerraform(struct!.delete),
    wait_for_snapshot: elasticsearchIndexLifecycleDeleteWaitForSnapshotToTerraform(struct!.waitForSnapshot),
  }
}


export function elasticsearchIndexLifecycleDeleteToHclTerraform(struct?: ElasticsearchIndexLifecycleDeleteOutputReference | ElasticsearchIndexLifecycleDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: elasticsearchIndexLifecycleDeleteDeleteToHclTerraform(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleDeleteDeleteList",
    },
    wait_for_snapshot: {
      value: elasticsearchIndexLifecycleDeleteWaitForSnapshotToHclTerraform(struct!.waitForSnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleDeleteWaitForSnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    if (this._waitForSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForSnapshot = this._waitForSnapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._delete.internalValue = undefined;
      this._waitForSnapshot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._delete.internalValue = value.delete;
      this._waitForSnapshot.internalValue = value.waitForSnapshot;
    }
  }

  // min_age - computed: true, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new ElasticsearchIndexLifecycleDeleteDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: ElasticsearchIndexLifecycleDeleteDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // wait_for_snapshot - computed: false, optional: true, required: false
  private _waitForSnapshot = new ElasticsearchIndexLifecycleDeleteWaitForSnapshotOutputReference(this, "wait_for_snapshot");
  public get waitForSnapshot() {
    return this._waitForSnapshot;
  }
  public putWaitForSnapshot(value: ElasticsearchIndexLifecycleDeleteWaitForSnapshot) {
    this._waitForSnapshot.internalValue = value;
  }
  public resetWaitForSnapshot() {
    this._waitForSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSnapshotInput() {
    return this._waitForSnapshot.internalValue;
  }
}
export interface ElasticsearchIndexLifecycleElasticsearchConnection {
  /**
  * API Key to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#api_key ElasticsearchIndexLifecycle#api_key}
  */
  readonly apiKey?: string;
  /**
  * Bearer Token to use for authentication to Elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#bearer_token ElasticsearchIndexLifecycle#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * PEM-encoded custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#ca_data ElasticsearchIndexLifecycle#ca_data}
  */
  readonly caData?: string;
  /**
  * Path to a custom Certificate Authority certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#ca_file ElasticsearchIndexLifecycle#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#cert_data ElasticsearchIndexLifecycle#cert_data}
  */
  readonly certData?: string;
  /**
  * Path to a file containing the PEM encoded certificate for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#cert_file ElasticsearchIndexLifecycle#cert_file}
  */
  readonly certFile?: string;
  /**
  * A list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#endpoints ElasticsearchIndexLifecycle#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * ES Client Authentication field to be used with the JWT token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#es_client_authentication ElasticsearchIndexLifecycle#es_client_authentication}
  */
  readonly esClientAuthentication?: string;
  /**
  * A list of headers to be sent with each request to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#headers ElasticsearchIndexLifecycle#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#insecure ElasticsearchIndexLifecycle#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#key_data ElasticsearchIndexLifecycle#key_data}
  */
  readonly keyData?: string;
  /**
  * Path to a file containing the PEM encoded private key for client auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#key_file ElasticsearchIndexLifecycle#key_file}
  */
  readonly keyFile?: string;
  /**
  * Password to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#password ElasticsearchIndexLifecycle#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#username ElasticsearchIndexLifecycle#username}
  */
  readonly username?: string;
}

export function elasticsearchIndexLifecycleElasticsearchConnectionToTerraform(struct?: ElasticsearchIndexLifecycleElasticsearchConnectionOutputReference | ElasticsearchIndexLifecycleElasticsearchConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    ca_data: cdktf.stringToTerraform(struct!.caData),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    es_client_authentication: cdktf.stringToTerraform(struct!.esClientAuthentication),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function elasticsearchIndexLifecycleElasticsearchConnectionToHclTerraform(struct?: ElasticsearchIndexLifecycleElasticsearchConnectionOutputReference | ElasticsearchIndexLifecycleElasticsearchConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    es_client_authentication: {
      value: cdktf.stringToHclTerraform(struct!.esClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
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

export class ElasticsearchIndexLifecycleElasticsearchConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleElasticsearchConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._esClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.esClientAuthentication = this._esClientAuthentication;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleElasticsearchConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._bearerToken = undefined;
      this._caData = undefined;
      this._caFile = undefined;
      this._certData = undefined;
      this._certFile = undefined;
      this._endpoints = undefined;
      this._esClientAuthentication = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._keyFile = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._bearerToken = value.bearerToken;
      this._caData = value.caData;
      this._caFile = value.caFile;
      this._certData = value.certData;
      this._certFile = value.certFile;
      this._endpoints = value.endpoints;
      this._esClientAuthentication = value.esClientAuthentication;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._keyFile = value.keyFile;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // es_client_authentication - computed: false, optional: true, required: false
  private _esClientAuthentication?: string; 
  public get esClientAuthentication() {
    return this.getStringAttribute('es_client_authentication');
  }
  public set esClientAuthentication(value: string) {
    this._esClientAuthentication = value;
  }
  public resetEsClientAuthentication() {
    this._esClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esClientAuthenticationInput() {
    return this._esClientAuthentication;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
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
export interface ElasticsearchIndexLifecycleFrozenSearchableSnapshot {
  /**
  * Force merges the managed index to one segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#force_merge_index ElasticsearchIndexLifecycle#force_merge_index}
  */
  readonly forceMergeIndex?: boolean | cdktf.IResolvable;
  /**
  * Repository used to store the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#snapshot_repository ElasticsearchIndexLifecycle#snapshot_repository}
  */
  readonly snapshotRepository: string;
}

export function elasticsearchIndexLifecycleFrozenSearchableSnapshotToTerraform(struct?: ElasticsearchIndexLifecycleFrozenSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleFrozenSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_merge_index: cdktf.booleanToTerraform(struct!.forceMergeIndex),
    snapshot_repository: cdktf.stringToTerraform(struct!.snapshotRepository),
  }
}


export function elasticsearchIndexLifecycleFrozenSearchableSnapshotToHclTerraform(struct?: ElasticsearchIndexLifecycleFrozenSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleFrozenSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_merge_index: {
      value: cdktf.booleanToHclTerraform(struct!.forceMergeIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_repository: {
      value: cdktf.stringToHclTerraform(struct!.snapshotRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleFrozenSearchableSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleFrozenSearchableSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceMergeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMergeIndex = this._forceMergeIndex;
    }
    if (this._snapshotRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRepository = this._snapshotRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleFrozenSearchableSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceMergeIndex = undefined;
      this._snapshotRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceMergeIndex = value.forceMergeIndex;
      this._snapshotRepository = value.snapshotRepository;
    }
  }

  // force_merge_index - computed: false, optional: true, required: false
  private _forceMergeIndex?: boolean | cdktf.IResolvable; 
  public get forceMergeIndex() {
    return this.getBooleanAttribute('force_merge_index');
  }
  public set forceMergeIndex(value: boolean | cdktf.IResolvable) {
    this._forceMergeIndex = value;
  }
  public resetForceMergeIndex() {
    this._forceMergeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMergeIndexInput() {
    return this._forceMergeIndex;
  }

  // snapshot_repository - computed: false, optional: false, required: true
  private _snapshotRepository?: string; 
  public get snapshotRepository() {
    return this.getStringAttribute('snapshot_repository');
  }
  public set snapshotRepository(value: string) {
    this._snapshotRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRepositoryInput() {
    return this._snapshotRepository;
  }
}
export interface ElasticsearchIndexLifecycleFrozen {
  /**
  * ILM moves indices through the lifecycle according to their age. To control the timing of these transitions, you set a minimum age for each phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * searchable_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#searchable_snapshot ElasticsearchIndexLifecycle#searchable_snapshot}
  */
  readonly searchableSnapshot?: ElasticsearchIndexLifecycleFrozenSearchableSnapshot;
}

export function elasticsearchIndexLifecycleFrozenToTerraform(struct?: ElasticsearchIndexLifecycleFrozenOutputReference | ElasticsearchIndexLifecycleFrozen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    searchable_snapshot: elasticsearchIndexLifecycleFrozenSearchableSnapshotToTerraform(struct!.searchableSnapshot),
  }
}


export function elasticsearchIndexLifecycleFrozenToHclTerraform(struct?: ElasticsearchIndexLifecycleFrozenOutputReference | ElasticsearchIndexLifecycleFrozen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    searchable_snapshot: {
      value: elasticsearchIndexLifecycleFrozenSearchableSnapshotToHclTerraform(struct!.searchableSnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleFrozenSearchableSnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleFrozenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleFrozen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._searchableSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchableSnapshot = this._searchableSnapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleFrozen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._searchableSnapshot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._searchableSnapshot.internalValue = value.searchableSnapshot;
    }
  }

  // min_age - computed: true, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // searchable_snapshot - computed: false, optional: true, required: false
  private _searchableSnapshot = new ElasticsearchIndexLifecycleFrozenSearchableSnapshotOutputReference(this, "searchable_snapshot");
  public get searchableSnapshot() {
    return this._searchableSnapshot;
  }
  public putSearchableSnapshot(value: ElasticsearchIndexLifecycleFrozenSearchableSnapshot) {
    this._searchableSnapshot.internalValue = value;
  }
  public resetSearchableSnapshot() {
    this._searchableSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableSnapshotInput() {
    return this._searchableSnapshot.internalValue;
  }
}
export interface ElasticsearchIndexLifecycleHotDownsample {
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#fixed_interval ElasticsearchIndexLifecycle#fixed_interval}
  */
  readonly fixedInterval: string;
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#wait_timeout ElasticsearchIndexLifecycle#wait_timeout}
  */
  readonly waitTimeout?: string;
}

export function elasticsearchIndexLifecycleHotDownsampleToTerraform(struct?: ElasticsearchIndexLifecycleHotDownsampleOutputReference | ElasticsearchIndexLifecycleHotDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_interval: cdktf.stringToTerraform(struct!.fixedInterval),
    wait_timeout: cdktf.stringToTerraform(struct!.waitTimeout),
  }
}


export function elasticsearchIndexLifecycleHotDownsampleToHclTerraform(struct?: ElasticsearchIndexLifecycleHotDownsampleOutputReference | ElasticsearchIndexLifecycleHotDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_interval: {
      value: cdktf.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotDownsampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotDownsample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotDownsample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedInterval = undefined;
      this._waitTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedInterval = value.fixedInterval;
      this._waitTimeout = value.waitTimeout;
    }
  }

  // fixed_interval - computed: false, optional: false, required: true
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}
export interface ElasticsearchIndexLifecycleHotForcemerge {
  /**
  * Codec used to compress the document store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#index_codec ElasticsearchIndexLifecycle#index_codec}
  */
  readonly indexCodec?: string;
  /**
  * Number of segments to merge to. To fully merge the index, set to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_num_segments ElasticsearchIndexLifecycle#max_num_segments}
  */
  readonly maxNumSegments: number;
}

export function elasticsearchIndexLifecycleHotForcemergeToTerraform(struct?: ElasticsearchIndexLifecycleHotForcemergeOutputReference | ElasticsearchIndexLifecycleHotForcemerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_codec: cdktf.stringToTerraform(struct!.indexCodec),
    max_num_segments: cdktf.numberToTerraform(struct!.maxNumSegments),
  }
}


export function elasticsearchIndexLifecycleHotForcemergeToHclTerraform(struct?: ElasticsearchIndexLifecycleHotForcemergeOutputReference | ElasticsearchIndexLifecycleHotForcemerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_codec: {
      value: cdktf.stringToHclTerraform(struct!.indexCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_num_segments: {
      value: cdktf.numberToHclTerraform(struct!.maxNumSegments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotForcemergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotForcemerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexCodec = this._indexCodec;
    }
    if (this._maxNumSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumSegments = this._maxNumSegments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotForcemerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexCodec = undefined;
      this._maxNumSegments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexCodec = value.indexCodec;
      this._maxNumSegments = value.maxNumSegments;
    }
  }

  // index_codec - computed: false, optional: true, required: false
  private _indexCodec?: string; 
  public get indexCodec() {
    return this.getStringAttribute('index_codec');
  }
  public set indexCodec(value: string) {
    this._indexCodec = value;
  }
  public resetIndexCodec() {
    this._indexCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexCodecInput() {
    return this._indexCodec;
  }

  // max_num_segments - computed: false, optional: false, required: true
  private _maxNumSegments?: number; 
  public get maxNumSegments() {
    return this.getNumberAttribute('max_num_segments');
  }
  public set maxNumSegments(value: number) {
    this._maxNumSegments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumSegmentsInput() {
    return this._maxNumSegments;
  }
}
export interface ElasticsearchIndexLifecycleHotReadonly {
  /**
  * Controls whether ILM makes the index read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleHotReadonlyToTerraform(struct?: ElasticsearchIndexLifecycleHotReadonlyOutputReference | ElasticsearchIndexLifecycleHotReadonly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleHotReadonlyToHclTerraform(struct?: ElasticsearchIndexLifecycleHotReadonlyOutputReference | ElasticsearchIndexLifecycleHotReadonly): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotReadonlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotReadonly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotReadonly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleHotRollover {
  /**
  * Triggers rollover after the maximum elapsed time from index creation is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_age ElasticsearchIndexLifecycle#max_age}
  */
  readonly maxAge?: string;
  /**
  * Triggers rollover after the specified maximum number of documents is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_docs ElasticsearchIndexLifecycle#max_docs}
  */
  readonly maxDocs?: number;
  /**
  * Triggers rollover when the largest primary shard in the index reaches a certain number of documents. Supported from Elasticsearch version **8.2**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_primary_shard_docs ElasticsearchIndexLifecycle#max_primary_shard_docs}
  */
  readonly maxPrimaryShardDocs?: number;
  /**
  * Triggers rollover when the largest primary shard in the index reaches a certain size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_primary_shard_size ElasticsearchIndexLifecycle#max_primary_shard_size}
  */
  readonly maxPrimaryShardSize?: string;
  /**
  * Triggers rollover when the index reaches a certain size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_size ElasticsearchIndexLifecycle#max_size}
  */
  readonly maxSize?: string;
  /**
  * Prevents rollover until after the minimum elapsed time from index creation is reached. Supported from Elasticsearch version **8.4**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * Prevents rollover until after the specified minimum number of documents is reached. Supported from Elasticsearch version **8.4**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_docs ElasticsearchIndexLifecycle#min_docs}
  */
  readonly minDocs?: number;
  /**
  * Prevents rollover until the largest primary shard in the index reaches a certain number of documents. Supported from Elasticsearch version **8.4**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_primary_shard_docs ElasticsearchIndexLifecycle#min_primary_shard_docs}
  */
  readonly minPrimaryShardDocs?: number;
  /**
  * Prevents rollover until the largest primary shard in the index reaches a certain size. Supported from Elasticsearch version **8.4**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_primary_shard_size ElasticsearchIndexLifecycle#min_primary_shard_size}
  */
  readonly minPrimaryShardSize?: string;
  /**
  * Prevents rollover until the index reaches a certain size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_size ElasticsearchIndexLifecycle#min_size}
  */
  readonly minSize?: string;
}

export function elasticsearchIndexLifecycleHotRolloverToTerraform(struct?: ElasticsearchIndexLifecycleHotRolloverOutputReference | ElasticsearchIndexLifecycleHotRollover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    max_docs: cdktf.numberToTerraform(struct!.maxDocs),
    max_primary_shard_docs: cdktf.numberToTerraform(struct!.maxPrimaryShardDocs),
    max_primary_shard_size: cdktf.stringToTerraform(struct!.maxPrimaryShardSize),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    min_age: cdktf.stringToTerraform(struct!.minAge),
    min_docs: cdktf.numberToTerraform(struct!.minDocs),
    min_primary_shard_docs: cdktf.numberToTerraform(struct!.minPrimaryShardDocs),
    min_primary_shard_size: cdktf.stringToTerraform(struct!.minPrimaryShardSize),
    min_size: cdktf.stringToTerraform(struct!.minSize),
  }
}


export function elasticsearchIndexLifecycleHotRolloverToHclTerraform(struct?: ElasticsearchIndexLifecycleHotRolloverOutputReference | ElasticsearchIndexLifecycleHotRollover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_docs: {
      value: cdktf.numberToHclTerraform(struct!.maxDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_primary_shard_docs: {
      value: cdktf.numberToHclTerraform(struct!.maxPrimaryShardDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_primary_shard_size: {
      value: cdktf.stringToHclTerraform(struct!.maxPrimaryShardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_docs: {
      value: cdktf.numberToHclTerraform(struct!.minDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_primary_shard_docs: {
      value: cdktf.numberToHclTerraform(struct!.minPrimaryShardDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_primary_shard_size: {
      value: cdktf.stringToHclTerraform(struct!.minPrimaryShardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotRolloverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotRollover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDocs = this._maxDocs;
    }
    if (this._maxPrimaryShardDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrimaryShardDocs = this._maxPrimaryShardDocs;
    }
    if (this._maxPrimaryShardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrimaryShardSize = this._maxPrimaryShardSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._minDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDocs = this._minDocs;
    }
    if (this._minPrimaryShardDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPrimaryShardDocs = this._minPrimaryShardDocs;
    }
    if (this._minPrimaryShardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPrimaryShardSize = this._minPrimaryShardSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotRollover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAge = undefined;
      this._maxDocs = undefined;
      this._maxPrimaryShardDocs = undefined;
      this._maxPrimaryShardSize = undefined;
      this._maxSize = undefined;
      this._minAge = undefined;
      this._minDocs = undefined;
      this._minPrimaryShardDocs = undefined;
      this._minPrimaryShardSize = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAge = value.maxAge;
      this._maxDocs = value.maxDocs;
      this._maxPrimaryShardDocs = value.maxPrimaryShardDocs;
      this._maxPrimaryShardSize = value.maxPrimaryShardSize;
      this._maxSize = value.maxSize;
      this._minAge = value.minAge;
      this._minDocs = value.minDocs;
      this._minPrimaryShardDocs = value.minPrimaryShardDocs;
      this._minPrimaryShardSize = value.minPrimaryShardSize;
      this._minSize = value.minSize;
    }
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_docs - computed: false, optional: true, required: false
  private _maxDocs?: number; 
  public get maxDocs() {
    return this.getNumberAttribute('max_docs');
  }
  public set maxDocs(value: number) {
    this._maxDocs = value;
  }
  public resetMaxDocs() {
    this._maxDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDocsInput() {
    return this._maxDocs;
  }

  // max_primary_shard_docs - computed: false, optional: true, required: false
  private _maxPrimaryShardDocs?: number; 
  public get maxPrimaryShardDocs() {
    return this.getNumberAttribute('max_primary_shard_docs');
  }
  public set maxPrimaryShardDocs(value: number) {
    this._maxPrimaryShardDocs = value;
  }
  public resetMaxPrimaryShardDocs() {
    this._maxPrimaryShardDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrimaryShardDocsInput() {
    return this._maxPrimaryShardDocs;
  }

  // max_primary_shard_size - computed: false, optional: true, required: false
  private _maxPrimaryShardSize?: string; 
  public get maxPrimaryShardSize() {
    return this.getStringAttribute('max_primary_shard_size');
  }
  public set maxPrimaryShardSize(value: string) {
    this._maxPrimaryShardSize = value;
  }
  public resetMaxPrimaryShardSize() {
    this._maxPrimaryShardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrimaryShardSizeInput() {
    return this._maxPrimaryShardSize;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // min_docs - computed: false, optional: true, required: false
  private _minDocs?: number; 
  public get minDocs() {
    return this.getNumberAttribute('min_docs');
  }
  public set minDocs(value: number) {
    this._minDocs = value;
  }
  public resetMinDocs() {
    this._minDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDocsInput() {
    return this._minDocs;
  }

  // min_primary_shard_docs - computed: false, optional: true, required: false
  private _minPrimaryShardDocs?: number; 
  public get minPrimaryShardDocs() {
    return this.getNumberAttribute('min_primary_shard_docs');
  }
  public set minPrimaryShardDocs(value: number) {
    this._minPrimaryShardDocs = value;
  }
  public resetMinPrimaryShardDocs() {
    this._minPrimaryShardDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPrimaryShardDocsInput() {
    return this._minPrimaryShardDocs;
  }

  // min_primary_shard_size - computed: false, optional: true, required: false
  private _minPrimaryShardSize?: string; 
  public get minPrimaryShardSize() {
    return this.getStringAttribute('min_primary_shard_size');
  }
  public set minPrimaryShardSize(value: string) {
    this._minPrimaryShardSize = value;
  }
  public resetMinPrimaryShardSize() {
    this._minPrimaryShardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPrimaryShardSizeInput() {
    return this._minPrimaryShardSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }
}
export interface ElasticsearchIndexLifecycleHotSearchableSnapshot {
  /**
  * Force merges the managed index to one segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#force_merge_index ElasticsearchIndexLifecycle#force_merge_index}
  */
  readonly forceMergeIndex?: boolean | cdktf.IResolvable;
  /**
  * Repository used to store the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#snapshot_repository ElasticsearchIndexLifecycle#snapshot_repository}
  */
  readonly snapshotRepository: string;
}

export function elasticsearchIndexLifecycleHotSearchableSnapshotToTerraform(struct?: ElasticsearchIndexLifecycleHotSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleHotSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_merge_index: cdktf.booleanToTerraform(struct!.forceMergeIndex),
    snapshot_repository: cdktf.stringToTerraform(struct!.snapshotRepository),
  }
}


export function elasticsearchIndexLifecycleHotSearchableSnapshotToHclTerraform(struct?: ElasticsearchIndexLifecycleHotSearchableSnapshotOutputReference | ElasticsearchIndexLifecycleHotSearchableSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_merge_index: {
      value: cdktf.booleanToHclTerraform(struct!.forceMergeIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_repository: {
      value: cdktf.stringToHclTerraform(struct!.snapshotRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotSearchableSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotSearchableSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceMergeIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMergeIndex = this._forceMergeIndex;
    }
    if (this._snapshotRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRepository = this._snapshotRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotSearchableSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceMergeIndex = undefined;
      this._snapshotRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceMergeIndex = value.forceMergeIndex;
      this._snapshotRepository = value.snapshotRepository;
    }
  }

  // force_merge_index - computed: false, optional: true, required: false
  private _forceMergeIndex?: boolean | cdktf.IResolvable; 
  public get forceMergeIndex() {
    return this.getBooleanAttribute('force_merge_index');
  }
  public set forceMergeIndex(value: boolean | cdktf.IResolvable) {
    this._forceMergeIndex = value;
  }
  public resetForceMergeIndex() {
    this._forceMergeIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMergeIndexInput() {
    return this._forceMergeIndex;
  }

  // snapshot_repository - computed: false, optional: false, required: true
  private _snapshotRepository?: string; 
  public get snapshotRepository() {
    return this.getStringAttribute('snapshot_repository');
  }
  public set snapshotRepository(value: string) {
    this._snapshotRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRepositoryInput() {
    return this._snapshotRepository;
  }
}
export interface ElasticsearchIndexLifecycleHotSetPriority {
  /**
  * The priority for the index. Must be 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#priority ElasticsearchIndexLifecycle#priority}
  */
  readonly priority: number;
}

export function elasticsearchIndexLifecycleHotSetPriorityToTerraform(struct?: ElasticsearchIndexLifecycleHotSetPriorityOutputReference | ElasticsearchIndexLifecycleHotSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function elasticsearchIndexLifecycleHotSetPriorityToHclTerraform(struct?: ElasticsearchIndexLifecycleHotSetPriorityOutputReference | ElasticsearchIndexLifecycleHotSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotSetPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotSetPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotSetPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface ElasticsearchIndexLifecycleHotShrink {
  /**
  * If true, the shrunken index is made writable by removing the write block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#allow_write_after_shrink ElasticsearchIndexLifecycle#allow_write_after_shrink}
  */
  readonly allowWriteAfterShrink?: boolean | cdktf.IResolvable;
  /**
  * The max primary shard size for the target index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_primary_shard_size ElasticsearchIndexLifecycle#max_primary_shard_size}
  */
  readonly maxPrimaryShardSize?: string;
  /**
  * Number of shards to shrink to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#number_of_shards ElasticsearchIndexLifecycle#number_of_shards}
  */
  readonly numberOfShards?: number;
}

export function elasticsearchIndexLifecycleHotShrinkToTerraform(struct?: ElasticsearchIndexLifecycleHotShrinkOutputReference | ElasticsearchIndexLifecycleHotShrink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_write_after_shrink: cdktf.booleanToTerraform(struct!.allowWriteAfterShrink),
    max_primary_shard_size: cdktf.stringToTerraform(struct!.maxPrimaryShardSize),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
  }
}


export function elasticsearchIndexLifecycleHotShrinkToHclTerraform(struct?: ElasticsearchIndexLifecycleHotShrinkOutputReference | ElasticsearchIndexLifecycleHotShrink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_write_after_shrink: {
      value: cdktf.booleanToHclTerraform(struct!.allowWriteAfterShrink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_primary_shard_size: {
      value: cdktf.stringToHclTerraform(struct!.maxPrimaryShardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotShrinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotShrink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowWriteAfterShrink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWriteAfterShrink = this._allowWriteAfterShrink;
    }
    if (this._maxPrimaryShardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrimaryShardSize = this._maxPrimaryShardSize;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotShrink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowWriteAfterShrink = undefined;
      this._maxPrimaryShardSize = undefined;
      this._numberOfShards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowWriteAfterShrink = value.allowWriteAfterShrink;
      this._maxPrimaryShardSize = value.maxPrimaryShardSize;
      this._numberOfShards = value.numberOfShards;
    }
  }

  // allow_write_after_shrink - computed: false, optional: true, required: false
  private _allowWriteAfterShrink?: boolean | cdktf.IResolvable; 
  public get allowWriteAfterShrink() {
    return this.getBooleanAttribute('allow_write_after_shrink');
  }
  public set allowWriteAfterShrink(value: boolean | cdktf.IResolvable) {
    this._allowWriteAfterShrink = value;
  }
  public resetAllowWriteAfterShrink() {
    this._allowWriteAfterShrink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWriteAfterShrinkInput() {
    return this._allowWriteAfterShrink;
  }

  // max_primary_shard_size - computed: false, optional: true, required: false
  private _maxPrimaryShardSize?: string; 
  public get maxPrimaryShardSize() {
    return this.getStringAttribute('max_primary_shard_size');
  }
  public set maxPrimaryShardSize(value: string) {
    this._maxPrimaryShardSize = value;
  }
  public resetMaxPrimaryShardSize() {
    this._maxPrimaryShardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrimaryShardSizeInput() {
    return this._maxPrimaryShardSize;
  }

  // number_of_shards - computed: false, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }
}
export interface ElasticsearchIndexLifecycleHotUnfollow {
  /**
  * Controls whether ILM makes the follower index a regular one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleHotUnfollowToTerraform(struct?: ElasticsearchIndexLifecycleHotUnfollowOutputReference | ElasticsearchIndexLifecycleHotUnfollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleHotUnfollowToHclTerraform(struct?: ElasticsearchIndexLifecycleHotUnfollowOutputReference | ElasticsearchIndexLifecycleHotUnfollow): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotUnfollowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHotUnfollow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHotUnfollow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleHot {
  /**
  * ILM moves indices through the lifecycle according to their age. To control the timing of these transitions, you set a minimum age for each phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * downsample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#downsample ElasticsearchIndexLifecycle#downsample}
  */
  readonly downsample?: ElasticsearchIndexLifecycleHotDownsample;
  /**
  * forcemerge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#forcemerge ElasticsearchIndexLifecycle#forcemerge}
  */
  readonly forcemerge?: ElasticsearchIndexLifecycleHotForcemerge;
  /**
  * readonly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#readonly ElasticsearchIndexLifecycle#readonly}
  */
  readonly readonly?: ElasticsearchIndexLifecycleHotReadonly;
  /**
  * rollover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#rollover ElasticsearchIndexLifecycle#rollover}
  */
  readonly rollover?: ElasticsearchIndexLifecycleHotRollover;
  /**
  * searchable_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#searchable_snapshot ElasticsearchIndexLifecycle#searchable_snapshot}
  */
  readonly searchableSnapshot?: ElasticsearchIndexLifecycleHotSearchableSnapshot;
  /**
  * set_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#set_priority ElasticsearchIndexLifecycle#set_priority}
  */
  readonly setPriority?: ElasticsearchIndexLifecycleHotSetPriority;
  /**
  * shrink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#shrink ElasticsearchIndexLifecycle#shrink}
  */
  readonly shrink?: ElasticsearchIndexLifecycleHotShrink;
  /**
  * unfollow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#unfollow ElasticsearchIndexLifecycle#unfollow}
  */
  readonly unfollow?: ElasticsearchIndexLifecycleHotUnfollow;
}

export function elasticsearchIndexLifecycleHotToTerraform(struct?: ElasticsearchIndexLifecycleHotOutputReference | ElasticsearchIndexLifecycleHot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    downsample: elasticsearchIndexLifecycleHotDownsampleToTerraform(struct!.downsample),
    forcemerge: elasticsearchIndexLifecycleHotForcemergeToTerraform(struct!.forcemerge),
    readonly: elasticsearchIndexLifecycleHotReadonlyToTerraform(struct!.readonly),
    rollover: elasticsearchIndexLifecycleHotRolloverToTerraform(struct!.rollover),
    searchable_snapshot: elasticsearchIndexLifecycleHotSearchableSnapshotToTerraform(struct!.searchableSnapshot),
    set_priority: elasticsearchIndexLifecycleHotSetPriorityToTerraform(struct!.setPriority),
    shrink: elasticsearchIndexLifecycleHotShrinkToTerraform(struct!.shrink),
    unfollow: elasticsearchIndexLifecycleHotUnfollowToTerraform(struct!.unfollow),
  }
}


export function elasticsearchIndexLifecycleHotToHclTerraform(struct?: ElasticsearchIndexLifecycleHotOutputReference | ElasticsearchIndexLifecycleHot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downsample: {
      value: elasticsearchIndexLifecycleHotDownsampleToHclTerraform(struct!.downsample),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotDownsampleList",
    },
    forcemerge: {
      value: elasticsearchIndexLifecycleHotForcemergeToHclTerraform(struct!.forcemerge),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotForcemergeList",
    },
    readonly: {
      value: elasticsearchIndexLifecycleHotReadonlyToHclTerraform(struct!.readonly),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotReadonlyList",
    },
    rollover: {
      value: elasticsearchIndexLifecycleHotRolloverToHclTerraform(struct!.rollover),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotRolloverList",
    },
    searchable_snapshot: {
      value: elasticsearchIndexLifecycleHotSearchableSnapshotToHclTerraform(struct!.searchableSnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotSearchableSnapshotList",
    },
    set_priority: {
      value: elasticsearchIndexLifecycleHotSetPriorityToHclTerraform(struct!.setPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotSetPriorityList",
    },
    shrink: {
      value: elasticsearchIndexLifecycleHotShrinkToHclTerraform(struct!.shrink),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotShrinkList",
    },
    unfollow: {
      value: elasticsearchIndexLifecycleHotUnfollowToHclTerraform(struct!.unfollow),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleHotUnfollowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleHotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleHot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._downsample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downsample = this._downsample?.internalValue;
    }
    if (this._forcemerge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcemerge = this._forcemerge?.internalValue;
    }
    if (this._readonly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly?.internalValue;
    }
    if (this._rollover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollover = this._rollover?.internalValue;
    }
    if (this._searchableSnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchableSnapshot = this._searchableSnapshot?.internalValue;
    }
    if (this._setPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPriority = this._setPriority?.internalValue;
    }
    if (this._shrink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shrink = this._shrink?.internalValue;
    }
    if (this._unfollow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unfollow = this._unfollow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleHot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._downsample.internalValue = undefined;
      this._forcemerge.internalValue = undefined;
      this._readonly.internalValue = undefined;
      this._rollover.internalValue = undefined;
      this._searchableSnapshot.internalValue = undefined;
      this._setPriority.internalValue = undefined;
      this._shrink.internalValue = undefined;
      this._unfollow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._downsample.internalValue = value.downsample;
      this._forcemerge.internalValue = value.forcemerge;
      this._readonly.internalValue = value.readonly;
      this._rollover.internalValue = value.rollover;
      this._searchableSnapshot.internalValue = value.searchableSnapshot;
      this._setPriority.internalValue = value.setPriority;
      this._shrink.internalValue = value.shrink;
      this._unfollow.internalValue = value.unfollow;
    }
  }

  // min_age - computed: true, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // downsample - computed: false, optional: true, required: false
  private _downsample = new ElasticsearchIndexLifecycleHotDownsampleOutputReference(this, "downsample");
  public get downsample() {
    return this._downsample;
  }
  public putDownsample(value: ElasticsearchIndexLifecycleHotDownsample) {
    this._downsample.internalValue = value;
  }
  public resetDownsample() {
    this._downsample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downsampleInput() {
    return this._downsample.internalValue;
  }

  // forcemerge - computed: false, optional: true, required: false
  private _forcemerge = new ElasticsearchIndexLifecycleHotForcemergeOutputReference(this, "forcemerge");
  public get forcemerge() {
    return this._forcemerge;
  }
  public putForcemerge(value: ElasticsearchIndexLifecycleHotForcemerge) {
    this._forcemerge.internalValue = value;
  }
  public resetForcemerge() {
    this._forcemerge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcemergeInput() {
    return this._forcemerge.internalValue;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly = new ElasticsearchIndexLifecycleHotReadonlyOutputReference(this, "readonly");
  public get readonly() {
    return this._readonly;
  }
  public putReadonly(value: ElasticsearchIndexLifecycleHotReadonly) {
    this._readonly.internalValue = value;
  }
  public resetReadonly() {
    this._readonly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly.internalValue;
  }

  // rollover - computed: false, optional: true, required: false
  private _rollover = new ElasticsearchIndexLifecycleHotRolloverOutputReference(this, "rollover");
  public get rollover() {
    return this._rollover;
  }
  public putRollover(value: ElasticsearchIndexLifecycleHotRollover) {
    this._rollover.internalValue = value;
  }
  public resetRollover() {
    this._rollover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloverInput() {
    return this._rollover.internalValue;
  }

  // searchable_snapshot - computed: false, optional: true, required: false
  private _searchableSnapshot = new ElasticsearchIndexLifecycleHotSearchableSnapshotOutputReference(this, "searchable_snapshot");
  public get searchableSnapshot() {
    return this._searchableSnapshot;
  }
  public putSearchableSnapshot(value: ElasticsearchIndexLifecycleHotSearchableSnapshot) {
    this._searchableSnapshot.internalValue = value;
  }
  public resetSearchableSnapshot() {
    this._searchableSnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableSnapshotInput() {
    return this._searchableSnapshot.internalValue;
  }

  // set_priority - computed: false, optional: true, required: false
  private _setPriority = new ElasticsearchIndexLifecycleHotSetPriorityOutputReference(this, "set_priority");
  public get setPriority() {
    return this._setPriority;
  }
  public putSetPriority(value: ElasticsearchIndexLifecycleHotSetPriority) {
    this._setPriority.internalValue = value;
  }
  public resetSetPriority() {
    this._setPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPriorityInput() {
    return this._setPriority.internalValue;
  }

  // shrink - computed: false, optional: true, required: false
  private _shrink = new ElasticsearchIndexLifecycleHotShrinkOutputReference(this, "shrink");
  public get shrink() {
    return this._shrink;
  }
  public putShrink(value: ElasticsearchIndexLifecycleHotShrink) {
    this._shrink.internalValue = value;
  }
  public resetShrink() {
    this._shrink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shrinkInput() {
    return this._shrink.internalValue;
  }

  // unfollow - computed: false, optional: true, required: false
  private _unfollow = new ElasticsearchIndexLifecycleHotUnfollowOutputReference(this, "unfollow");
  public get unfollow() {
    return this._unfollow;
  }
  public putUnfollow(value: ElasticsearchIndexLifecycleHotUnfollow) {
    this._unfollow.internalValue = value;
  }
  public resetUnfollow() {
    this._unfollow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfollowInput() {
    return this._unfollow.internalValue;
  }
}
export interface ElasticsearchIndexLifecycleWarmAllocate {
  /**
  * Assigns an index to nodes that have none of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#exclude ElasticsearchIndexLifecycle#exclude}
  */
  readonly exclude?: string;
  /**
  * Assigns an index to nodes that have at least one of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#include ElasticsearchIndexLifecycle#include}
  */
  readonly include?: string;
  /**
  * Number of replicas to assign to the index. Default: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#number_of_replicas ElasticsearchIndexLifecycle#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * Assigns an index to nodes that have all of the specified custom attributes. Must be valid JSON document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#require ElasticsearchIndexLifecycle#require}
  */
  readonly require?: string;
  /**
  * The maximum number of shards for the index on a single Elasticsearch node. Defaults to `-1` (unlimited). Supported from Elasticsearch version **7.16**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#total_shards_per_node ElasticsearchIndexLifecycle#total_shards_per_node}
  */
  readonly totalShardsPerNode?: number;
}

export function elasticsearchIndexLifecycleWarmAllocateToTerraform(struct?: ElasticsearchIndexLifecycleWarmAllocateOutputReference | ElasticsearchIndexLifecycleWarmAllocate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    require: cdktf.stringToTerraform(struct!.require),
    total_shards_per_node: cdktf.numberToTerraform(struct!.totalShardsPerNode),
  }
}


export function elasticsearchIndexLifecycleWarmAllocateToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmAllocateOutputReference | ElasticsearchIndexLifecycleWarmAllocate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require: {
      value: cdktf.stringToHclTerraform(struct!.require),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_shards_per_node: {
      value: cdktf.numberToHclTerraform(struct!.totalShardsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmAllocateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmAllocate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._require !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require;
    }
    if (this._totalShardsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalShardsPerNode = this._totalShardsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmAllocate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._numberOfReplicas = undefined;
      this._require = undefined;
      this._totalShardsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._numberOfReplicas = value.numberOfReplicas;
      this._require = value.require;
      this._totalShardsPerNode = value.totalShardsPerNode;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // require - computed: false, optional: true, required: false
  private _require?: string; 
  public get require() {
    return this.getStringAttribute('require');
  }
  public set require(value: string) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }

  // total_shards_per_node - computed: false, optional: true, required: false
  private _totalShardsPerNode?: number; 
  public get totalShardsPerNode() {
    return this.getNumberAttribute('total_shards_per_node');
  }
  public set totalShardsPerNode(value: number) {
    this._totalShardsPerNode = value;
  }
  public resetTotalShardsPerNode() {
    this._totalShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalShardsPerNodeInput() {
    return this._totalShardsPerNode;
  }
}
export interface ElasticsearchIndexLifecycleWarmDownsample {
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#fixed_interval ElasticsearchIndexLifecycle#fixed_interval}
  */
  readonly fixedInterval: string;
  /**
  * Downsampling interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#wait_timeout ElasticsearchIndexLifecycle#wait_timeout}
  */
  readonly waitTimeout?: string;
}

export function elasticsearchIndexLifecycleWarmDownsampleToTerraform(struct?: ElasticsearchIndexLifecycleWarmDownsampleOutputReference | ElasticsearchIndexLifecycleWarmDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_interval: cdktf.stringToTerraform(struct!.fixedInterval),
    wait_timeout: cdktf.stringToTerraform(struct!.waitTimeout),
  }
}


export function elasticsearchIndexLifecycleWarmDownsampleToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmDownsampleOutputReference | ElasticsearchIndexLifecycleWarmDownsample): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_interval: {
      value: cdktf.stringToHclTerraform(struct!.fixedInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmDownsampleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmDownsample | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedInterval = this._fixedInterval;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmDownsample | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedInterval = undefined;
      this._waitTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedInterval = value.fixedInterval;
      this._waitTimeout = value.waitTimeout;
    }
  }

  // fixed_interval - computed: false, optional: false, required: true
  private _fixedInterval?: string; 
  public get fixedInterval() {
    return this.getStringAttribute('fixed_interval');
  }
  public set fixedInterval(value: string) {
    this._fixedInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIntervalInput() {
    return this._fixedInterval;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}
export interface ElasticsearchIndexLifecycleWarmForcemerge {
  /**
  * Codec used to compress the document store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#index_codec ElasticsearchIndexLifecycle#index_codec}
  */
  readonly indexCodec?: string;
  /**
  * Number of segments to merge to. To fully merge the index, set to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_num_segments ElasticsearchIndexLifecycle#max_num_segments}
  */
  readonly maxNumSegments: number;
}

export function elasticsearchIndexLifecycleWarmForcemergeToTerraform(struct?: ElasticsearchIndexLifecycleWarmForcemergeOutputReference | ElasticsearchIndexLifecycleWarmForcemerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_codec: cdktf.stringToTerraform(struct!.indexCodec),
    max_num_segments: cdktf.numberToTerraform(struct!.maxNumSegments),
  }
}


export function elasticsearchIndexLifecycleWarmForcemergeToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmForcemergeOutputReference | ElasticsearchIndexLifecycleWarmForcemerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_codec: {
      value: cdktf.stringToHclTerraform(struct!.indexCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_num_segments: {
      value: cdktf.numberToHclTerraform(struct!.maxNumSegments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmForcemergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmForcemerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexCodec = this._indexCodec;
    }
    if (this._maxNumSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumSegments = this._maxNumSegments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmForcemerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indexCodec = undefined;
      this._maxNumSegments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indexCodec = value.indexCodec;
      this._maxNumSegments = value.maxNumSegments;
    }
  }

  // index_codec - computed: false, optional: true, required: false
  private _indexCodec?: string; 
  public get indexCodec() {
    return this.getStringAttribute('index_codec');
  }
  public set indexCodec(value: string) {
    this._indexCodec = value;
  }
  public resetIndexCodec() {
    this._indexCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexCodecInput() {
    return this._indexCodec;
  }

  // max_num_segments - computed: false, optional: false, required: true
  private _maxNumSegments?: number; 
  public get maxNumSegments() {
    return this.getNumberAttribute('max_num_segments');
  }
  public set maxNumSegments(value: number) {
    this._maxNumSegments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumSegmentsInput() {
    return this._maxNumSegments;
  }
}
export interface ElasticsearchIndexLifecycleWarmMigrate {
  /**
  * Controls whether ILM automatically migrates the index during this phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleWarmMigrateToTerraform(struct?: ElasticsearchIndexLifecycleWarmMigrateOutputReference | ElasticsearchIndexLifecycleWarmMigrate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleWarmMigrateToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmMigrateOutputReference | ElasticsearchIndexLifecycleWarmMigrate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmMigrateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmMigrate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmMigrate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleWarmReadonly {
  /**
  * Controls whether ILM makes the index read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleWarmReadonlyToTerraform(struct?: ElasticsearchIndexLifecycleWarmReadonlyOutputReference | ElasticsearchIndexLifecycleWarmReadonly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleWarmReadonlyToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmReadonlyOutputReference | ElasticsearchIndexLifecycleWarmReadonly): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmReadonlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmReadonly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmReadonly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleWarmSetPriority {
  /**
  * The priority for the index. Must be 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#priority ElasticsearchIndexLifecycle#priority}
  */
  readonly priority: number;
}

export function elasticsearchIndexLifecycleWarmSetPriorityToTerraform(struct?: ElasticsearchIndexLifecycleWarmSetPriorityOutputReference | ElasticsearchIndexLifecycleWarmSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function elasticsearchIndexLifecycleWarmSetPriorityToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmSetPriorityOutputReference | ElasticsearchIndexLifecycleWarmSetPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmSetPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmSetPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmSetPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface ElasticsearchIndexLifecycleWarmShrink {
  /**
  * If true, the shrunken index is made writable by removing the write block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#allow_write_after_shrink ElasticsearchIndexLifecycle#allow_write_after_shrink}
  */
  readonly allowWriteAfterShrink?: boolean | cdktf.IResolvable;
  /**
  * The max primary shard size for the target index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#max_primary_shard_size ElasticsearchIndexLifecycle#max_primary_shard_size}
  */
  readonly maxPrimaryShardSize?: string;
  /**
  * Number of shards to shrink to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#number_of_shards ElasticsearchIndexLifecycle#number_of_shards}
  */
  readonly numberOfShards?: number;
}

export function elasticsearchIndexLifecycleWarmShrinkToTerraform(struct?: ElasticsearchIndexLifecycleWarmShrinkOutputReference | ElasticsearchIndexLifecycleWarmShrink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_write_after_shrink: cdktf.booleanToTerraform(struct!.allowWriteAfterShrink),
    max_primary_shard_size: cdktf.stringToTerraform(struct!.maxPrimaryShardSize),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
  }
}


export function elasticsearchIndexLifecycleWarmShrinkToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmShrinkOutputReference | ElasticsearchIndexLifecycleWarmShrink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_write_after_shrink: {
      value: cdktf.booleanToHclTerraform(struct!.allowWriteAfterShrink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_primary_shard_size: {
      value: cdktf.stringToHclTerraform(struct!.maxPrimaryShardSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmShrinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmShrink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowWriteAfterShrink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWriteAfterShrink = this._allowWriteAfterShrink;
    }
    if (this._maxPrimaryShardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrimaryShardSize = this._maxPrimaryShardSize;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmShrink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowWriteAfterShrink = undefined;
      this._maxPrimaryShardSize = undefined;
      this._numberOfShards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowWriteAfterShrink = value.allowWriteAfterShrink;
      this._maxPrimaryShardSize = value.maxPrimaryShardSize;
      this._numberOfShards = value.numberOfShards;
    }
  }

  // allow_write_after_shrink - computed: false, optional: true, required: false
  private _allowWriteAfterShrink?: boolean | cdktf.IResolvable; 
  public get allowWriteAfterShrink() {
    return this.getBooleanAttribute('allow_write_after_shrink');
  }
  public set allowWriteAfterShrink(value: boolean | cdktf.IResolvable) {
    this._allowWriteAfterShrink = value;
  }
  public resetAllowWriteAfterShrink() {
    this._allowWriteAfterShrink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWriteAfterShrinkInput() {
    return this._allowWriteAfterShrink;
  }

  // max_primary_shard_size - computed: false, optional: true, required: false
  private _maxPrimaryShardSize?: string; 
  public get maxPrimaryShardSize() {
    return this.getStringAttribute('max_primary_shard_size');
  }
  public set maxPrimaryShardSize(value: string) {
    this._maxPrimaryShardSize = value;
  }
  public resetMaxPrimaryShardSize() {
    this._maxPrimaryShardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrimaryShardSizeInput() {
    return this._maxPrimaryShardSize;
  }

  // number_of_shards - computed: false, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }
}
export interface ElasticsearchIndexLifecycleWarmUnfollow {
  /**
  * Controls whether ILM makes the follower index a regular one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#enabled ElasticsearchIndexLifecycle#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function elasticsearchIndexLifecycleWarmUnfollowToTerraform(struct?: ElasticsearchIndexLifecycleWarmUnfollowOutputReference | ElasticsearchIndexLifecycleWarmUnfollow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function elasticsearchIndexLifecycleWarmUnfollowToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmUnfollowOutputReference | ElasticsearchIndexLifecycleWarmUnfollow): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmUnfollowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarmUnfollow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarmUnfollow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ElasticsearchIndexLifecycleWarm {
  /**
  * ILM moves indices through the lifecycle according to their age. To control the timing of these transitions, you set a minimum age for each phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#min_age ElasticsearchIndexLifecycle#min_age}
  */
  readonly minAge?: string;
  /**
  * allocate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#allocate ElasticsearchIndexLifecycle#allocate}
  */
  readonly allocate?: ElasticsearchIndexLifecycleWarmAllocate;
  /**
  * downsample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#downsample ElasticsearchIndexLifecycle#downsample}
  */
  readonly downsample?: ElasticsearchIndexLifecycleWarmDownsample;
  /**
  * forcemerge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#forcemerge ElasticsearchIndexLifecycle#forcemerge}
  */
  readonly forcemerge?: ElasticsearchIndexLifecycleWarmForcemerge;
  /**
  * migrate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#migrate ElasticsearchIndexLifecycle#migrate}
  */
  readonly migrate?: ElasticsearchIndexLifecycleWarmMigrate;
  /**
  * readonly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#readonly ElasticsearchIndexLifecycle#readonly}
  */
  readonly readonly?: ElasticsearchIndexLifecycleWarmReadonly;
  /**
  * set_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#set_priority ElasticsearchIndexLifecycle#set_priority}
  */
  readonly setPriority?: ElasticsearchIndexLifecycleWarmSetPriority;
  /**
  * shrink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#shrink ElasticsearchIndexLifecycle#shrink}
  */
  readonly shrink?: ElasticsearchIndexLifecycleWarmShrink;
  /**
  * unfollow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#unfollow ElasticsearchIndexLifecycle#unfollow}
  */
  readonly unfollow?: ElasticsearchIndexLifecycleWarmUnfollow;
}

export function elasticsearchIndexLifecycleWarmToTerraform(struct?: ElasticsearchIndexLifecycleWarmOutputReference | ElasticsearchIndexLifecycleWarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    allocate: elasticsearchIndexLifecycleWarmAllocateToTerraform(struct!.allocate),
    downsample: elasticsearchIndexLifecycleWarmDownsampleToTerraform(struct!.downsample),
    forcemerge: elasticsearchIndexLifecycleWarmForcemergeToTerraform(struct!.forcemerge),
    migrate: elasticsearchIndexLifecycleWarmMigrateToTerraform(struct!.migrate),
    readonly: elasticsearchIndexLifecycleWarmReadonlyToTerraform(struct!.readonly),
    set_priority: elasticsearchIndexLifecycleWarmSetPriorityToTerraform(struct!.setPriority),
    shrink: elasticsearchIndexLifecycleWarmShrinkToTerraform(struct!.shrink),
    unfollow: elasticsearchIndexLifecycleWarmUnfollowToTerraform(struct!.unfollow),
  }
}


export function elasticsearchIndexLifecycleWarmToHclTerraform(struct?: ElasticsearchIndexLifecycleWarmOutputReference | ElasticsearchIndexLifecycleWarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocate: {
      value: elasticsearchIndexLifecycleWarmAllocateToHclTerraform(struct!.allocate),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmAllocateList",
    },
    downsample: {
      value: elasticsearchIndexLifecycleWarmDownsampleToHclTerraform(struct!.downsample),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmDownsampleList",
    },
    forcemerge: {
      value: elasticsearchIndexLifecycleWarmForcemergeToHclTerraform(struct!.forcemerge),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmForcemergeList",
    },
    migrate: {
      value: elasticsearchIndexLifecycleWarmMigrateToHclTerraform(struct!.migrate),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmMigrateList",
    },
    readonly: {
      value: elasticsearchIndexLifecycleWarmReadonlyToHclTerraform(struct!.readonly),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmReadonlyList",
    },
    set_priority: {
      value: elasticsearchIndexLifecycleWarmSetPriorityToHclTerraform(struct!.setPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmSetPriorityList",
    },
    shrink: {
      value: elasticsearchIndexLifecycleWarmShrinkToHclTerraform(struct!.shrink),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmShrinkList",
    },
    unfollow: {
      value: elasticsearchIndexLifecycleWarmUnfollowToHclTerraform(struct!.unfollow),
      isBlock: true,
      type: "list",
      storageClassType: "ElasticsearchIndexLifecycleWarmUnfollowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchIndexLifecycleWarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchIndexLifecycleWarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._allocate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate?.internalValue;
    }
    if (this._downsample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downsample = this._downsample?.internalValue;
    }
    if (this._forcemerge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcemerge = this._forcemerge?.internalValue;
    }
    if (this._migrate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrate = this._migrate?.internalValue;
    }
    if (this._readonly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly?.internalValue;
    }
    if (this._setPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPriority = this._setPriority?.internalValue;
    }
    if (this._shrink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shrink = this._shrink?.internalValue;
    }
    if (this._unfollow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unfollow = this._unfollow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchIndexLifecycleWarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._allocate.internalValue = undefined;
      this._downsample.internalValue = undefined;
      this._forcemerge.internalValue = undefined;
      this._migrate.internalValue = undefined;
      this._readonly.internalValue = undefined;
      this._setPriority.internalValue = undefined;
      this._shrink.internalValue = undefined;
      this._unfollow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._allocate.internalValue = value.allocate;
      this._downsample.internalValue = value.downsample;
      this._forcemerge.internalValue = value.forcemerge;
      this._migrate.internalValue = value.migrate;
      this._readonly.internalValue = value.readonly;
      this._setPriority.internalValue = value.setPriority;
      this._shrink.internalValue = value.shrink;
      this._unfollow.internalValue = value.unfollow;
    }
  }

  // min_age - computed: true, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate = new ElasticsearchIndexLifecycleWarmAllocateOutputReference(this, "allocate");
  public get allocate() {
    return this._allocate;
  }
  public putAllocate(value: ElasticsearchIndexLifecycleWarmAllocate) {
    this._allocate.internalValue = value;
  }
  public resetAllocate() {
    this._allocate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate.internalValue;
  }

  // downsample - computed: false, optional: true, required: false
  private _downsample = new ElasticsearchIndexLifecycleWarmDownsampleOutputReference(this, "downsample");
  public get downsample() {
    return this._downsample;
  }
  public putDownsample(value: ElasticsearchIndexLifecycleWarmDownsample) {
    this._downsample.internalValue = value;
  }
  public resetDownsample() {
    this._downsample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downsampleInput() {
    return this._downsample.internalValue;
  }

  // forcemerge - computed: false, optional: true, required: false
  private _forcemerge = new ElasticsearchIndexLifecycleWarmForcemergeOutputReference(this, "forcemerge");
  public get forcemerge() {
    return this._forcemerge;
  }
  public putForcemerge(value: ElasticsearchIndexLifecycleWarmForcemerge) {
    this._forcemerge.internalValue = value;
  }
  public resetForcemerge() {
    this._forcemerge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcemergeInput() {
    return this._forcemerge.internalValue;
  }

  // migrate - computed: false, optional: true, required: false
  private _migrate = new ElasticsearchIndexLifecycleWarmMigrateOutputReference(this, "migrate");
  public get migrate() {
    return this._migrate;
  }
  public putMigrate(value: ElasticsearchIndexLifecycleWarmMigrate) {
    this._migrate.internalValue = value;
  }
  public resetMigrate() {
    this._migrate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateInput() {
    return this._migrate.internalValue;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly = new ElasticsearchIndexLifecycleWarmReadonlyOutputReference(this, "readonly");
  public get readonly() {
    return this._readonly;
  }
  public putReadonly(value: ElasticsearchIndexLifecycleWarmReadonly) {
    this._readonly.internalValue = value;
  }
  public resetReadonly() {
    this._readonly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly.internalValue;
  }

  // set_priority - computed: false, optional: true, required: false
  private _setPriority = new ElasticsearchIndexLifecycleWarmSetPriorityOutputReference(this, "set_priority");
  public get setPriority() {
    return this._setPriority;
  }
  public putSetPriority(value: ElasticsearchIndexLifecycleWarmSetPriority) {
    this._setPriority.internalValue = value;
  }
  public resetSetPriority() {
    this._setPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPriorityInput() {
    return this._setPriority.internalValue;
  }

  // shrink - computed: false, optional: true, required: false
  private _shrink = new ElasticsearchIndexLifecycleWarmShrinkOutputReference(this, "shrink");
  public get shrink() {
    return this._shrink;
  }
  public putShrink(value: ElasticsearchIndexLifecycleWarmShrink) {
    this._shrink.internalValue = value;
  }
  public resetShrink() {
    this._shrink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shrinkInput() {
    return this._shrink.internalValue;
  }

  // unfollow - computed: false, optional: true, required: false
  private _unfollow = new ElasticsearchIndexLifecycleWarmUnfollowOutputReference(this, "unfollow");
  public get unfollow() {
    return this._unfollow;
  }
  public putUnfollow(value: ElasticsearchIndexLifecycleWarmUnfollow) {
    this._unfollow.internalValue = value;
  }
  public resetUnfollow() {
    this._unfollow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfollowInput() {
    return this._unfollow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle elasticstack_elasticsearch_index_lifecycle}
*/
export class ElasticsearchIndexLifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_index_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchIndexLifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchIndexLifecycle to import
  * @param importFromId The id of the existing ElasticsearchIndexLifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchIndexLifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_index_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/elasticsearch_index_lifecycle elasticstack_elasticsearch_index_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchIndexLifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchIndexLifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_index_lifecycle',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata = config.metadata;
    this._name = config.name;
    this._cold.internalValue = config.cold;
    this._delete.internalValue = config.delete;
    this._elasticsearchConnection.internalValue = config.elasticsearchConnection;
    this._frozen.internalValue = config.frozen;
    this._hot.internalValue = config.hot;
    this._warm.internalValue = config.warm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
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

  // cold - computed: false, optional: true, required: false
  private _cold = new ElasticsearchIndexLifecycleColdOutputReference(this, "cold");
  public get cold() {
    return this._cold;
  }
  public putCold(value: ElasticsearchIndexLifecycleCold) {
    this._cold.internalValue = value;
  }
  public resetCold() {
    this._cold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldInput() {
    return this._cold.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new ElasticsearchIndexLifecycleDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: ElasticsearchIndexLifecycleDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // elasticsearch_connection - computed: false, optional: true, required: false
  private _elasticsearchConnection = new ElasticsearchIndexLifecycleElasticsearchConnectionOutputReference(this, "elasticsearch_connection");
  public get elasticsearchConnection() {
    return this._elasticsearchConnection;
  }
  public putElasticsearchConnection(value: ElasticsearchIndexLifecycleElasticsearchConnection) {
    this._elasticsearchConnection.internalValue = value;
  }
  public resetElasticsearchConnection() {
    this._elasticsearchConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConnectionInput() {
    return this._elasticsearchConnection.internalValue;
  }

  // frozen - computed: false, optional: true, required: false
  private _frozen = new ElasticsearchIndexLifecycleFrozenOutputReference(this, "frozen");
  public get frozen() {
    return this._frozen;
  }
  public putFrozen(value: ElasticsearchIndexLifecycleFrozen) {
    this._frozen.internalValue = value;
  }
  public resetFrozen() {
    this._frozen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frozenInput() {
    return this._frozen.internalValue;
  }

  // hot - computed: false, optional: true, required: false
  private _hot = new ElasticsearchIndexLifecycleHotOutputReference(this, "hot");
  public get hot() {
    return this._hot;
  }
  public putHot(value: ElasticsearchIndexLifecycleHot) {
    this._hot.internalValue = value;
  }
  public resetHot() {
    this._hot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotInput() {
    return this._hot.internalValue;
  }

  // warm - computed: false, optional: true, required: false
  private _warm = new ElasticsearchIndexLifecycleWarmOutputReference(this, "warm");
  public get warm() {
    return this._warm;
  }
  public putWarm(value: ElasticsearchIndexLifecycleWarm) {
    this._warm.internalValue = value;
  }
  public resetWarm() {
    this._warm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmInput() {
    return this._warm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      cold: elasticsearchIndexLifecycleColdToTerraform(this._cold.internalValue),
      delete: elasticsearchIndexLifecycleDeleteToTerraform(this._delete.internalValue),
      elasticsearch_connection: elasticsearchIndexLifecycleElasticsearchConnectionToTerraform(this._elasticsearchConnection.internalValue),
      frozen: elasticsearchIndexLifecycleFrozenToTerraform(this._frozen.internalValue),
      hot: elasticsearchIndexLifecycleHotToTerraform(this._hot.internalValue),
      warm: elasticsearchIndexLifecycleWarmToTerraform(this._warm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      cold: {
        value: elasticsearchIndexLifecycleColdToHclTerraform(this._cold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleColdList",
      },
      delete: {
        value: elasticsearchIndexLifecycleDeleteToHclTerraform(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleDeleteList",
      },
      elasticsearch_connection: {
        value: elasticsearchIndexLifecycleElasticsearchConnectionToHclTerraform(this._elasticsearchConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleElasticsearchConnectionList",
      },
      frozen: {
        value: elasticsearchIndexLifecycleFrozenToHclTerraform(this._frozen.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleFrozenList",
      },
      hot: {
        value: elasticsearchIndexLifecycleHotToHclTerraform(this._hot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleHotList",
      },
      warm: {
        value: elasticsearchIndexLifecycleWarmToHclTerraform(this._warm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchIndexLifecycleWarmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
