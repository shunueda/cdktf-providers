// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster(s) this queue manager is part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#clusters QueueManager#clusters}
  */
  readonly clusters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#id QueueManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the queue manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#name QueueManager#name}
  */
  readonly name: string;
  /**
  * alias_queues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#alias_queues QueueManager#alias_queues}
  */
  readonly aliasQueues?: QueueManagerAliasQueues[] | cdktf.IResolvable;
  /**
  * cluster_queues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#cluster_queues QueueManager#cluster_queues}
  */
  readonly clusterQueues?: QueueManagerClusterQueues[] | cdktf.IResolvable;
  /**
  * remote_queues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#remote_queues QueueManager#remote_queues}
  */
  readonly remoteQueues?: QueueManagerRemoteQueues[] | cdktf.IResolvable;
}
export interface QueueManagerAliasQueuesAliasQueue {
  /**
  * The name of the alias queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#alias_queue_name QueueManager#alias_queue_name}
  */
  readonly aliasQueueName: string;
  /**
  * The name of the base queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#base_queue_name QueueManager#base_queue_name}
  */
  readonly baseQueueName: string;
  /**
  * Name of the cluster(s) this alias should be visible in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#cluster_visibility QueueManager#cluster_visibility}
  */
  readonly clusterVisibility?: string[];
}

export function queueManagerAliasQueuesAliasQueueToTerraform(struct?: QueueManagerAliasQueuesAliasQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_queue_name: cdktf.stringToTerraform(struct!.aliasQueueName),
    base_queue_name: cdktf.stringToTerraform(struct!.baseQueueName),
    cluster_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterVisibility),
  }
}


export function queueManagerAliasQueuesAliasQueueToHclTerraform(struct?: QueueManagerAliasQueuesAliasQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.baseQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_visibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterVisibility),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerAliasQueuesAliasQueueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerAliasQueuesAliasQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasQueueName = this._aliasQueueName;
    }
    if (this._baseQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseQueueName = this._baseQueueName;
    }
    if (this._clusterVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVisibility = this._clusterVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerAliasQueuesAliasQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasQueueName = undefined;
      this._baseQueueName = undefined;
      this._clusterVisibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasQueueName = value.aliasQueueName;
      this._baseQueueName = value.baseQueueName;
      this._clusterVisibility = value.clusterVisibility;
    }
  }

  // alias_queue_name - computed: false, optional: false, required: true
  private _aliasQueueName?: string; 
  public get aliasQueueName() {
    return this.getStringAttribute('alias_queue_name');
  }
  public set aliasQueueName(value: string) {
    this._aliasQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasQueueNameInput() {
    return this._aliasQueueName;
  }

  // base_queue_name - computed: false, optional: false, required: true
  private _baseQueueName?: string; 
  public get baseQueueName() {
    return this.getStringAttribute('base_queue_name');
  }
  public set baseQueueName(value: string) {
    this._baseQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseQueueNameInput() {
    return this._baseQueueName;
  }

  // cluster_visibility - computed: false, optional: true, required: false
  private _clusterVisibility?: string[]; 
  public get clusterVisibility() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_visibility'));
  }
  public set clusterVisibility(value: string[]) {
    this._clusterVisibility = value;
  }
  public resetClusterVisibility() {
    this._clusterVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVisibilityInput() {
    return this._clusterVisibility;
  }
}

export class QueueManagerAliasQueuesAliasQueueList extends cdktf.ComplexList {
  public internalValue? : QueueManagerAliasQueuesAliasQueue[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerAliasQueuesAliasQueueOutputReference {
    return new QueueManagerAliasQueuesAliasQueueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueManagerAliasQueues {
  /**
  * alias_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#alias_queue QueueManager#alias_queue}
  */
  readonly aliasQueue?: QueueManagerAliasQueuesAliasQueue[] | cdktf.IResolvable;
}

export function queueManagerAliasQueuesToTerraform(struct?: QueueManagerAliasQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_queue: cdktf.listMapper(queueManagerAliasQueuesAliasQueueToTerraform, true)(struct!.aliasQueue),
  }
}


export function queueManagerAliasQueuesToHclTerraform(struct?: QueueManagerAliasQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_queue: {
      value: cdktf.listMapperHcl(queueManagerAliasQueuesAliasQueueToHclTerraform, true)(struct!.aliasQueue),
      isBlock: true,
      type: "list",
      storageClassType: "QueueManagerAliasQueuesAliasQueueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerAliasQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerAliasQueues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasQueue = this._aliasQueue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerAliasQueues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasQueue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasQueue.internalValue = value.aliasQueue;
    }
  }

  // alias_queue - computed: false, optional: true, required: false
  private _aliasQueue = new QueueManagerAliasQueuesAliasQueueList(this, "alias_queue", false);
  public get aliasQueue() {
    return this._aliasQueue;
  }
  public putAliasQueue(value: QueueManagerAliasQueuesAliasQueue[] | cdktf.IResolvable) {
    this._aliasQueue.internalValue = value;
  }
  public resetAliasQueue() {
    this._aliasQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasQueueInput() {
    return this._aliasQueue.internalValue;
  }
}

export class QueueManagerAliasQueuesList extends cdktf.ComplexList {
  public internalValue? : QueueManagerAliasQueues[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerAliasQueuesOutputReference {
    return new QueueManagerAliasQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueManagerClusterQueuesClusterQueue {
  /**
  * Name of the cluster(s) this local queue should be visible in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#cluster_visibility QueueManager#cluster_visibility}
  */
  readonly clusterVisibility?: string[];
  /**
  * The name of the local queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#local_queue_name QueueManager#local_queue_name}
  */
  readonly localQueueName: string;
}

export function queueManagerClusterQueuesClusterQueueToTerraform(struct?: QueueManagerClusterQueuesClusterQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterVisibility),
    local_queue_name: cdktf.stringToTerraform(struct!.localQueueName),
  }
}


export function queueManagerClusterQueuesClusterQueueToHclTerraform(struct?: QueueManagerClusterQueuesClusterQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_visibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterVisibility),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.localQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerClusterQueuesClusterQueueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerClusterQueuesClusterQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVisibility = this._clusterVisibility;
    }
    if (this._localQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localQueueName = this._localQueueName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerClusterQueuesClusterQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterVisibility = undefined;
      this._localQueueName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterVisibility = value.clusterVisibility;
      this._localQueueName = value.localQueueName;
    }
  }

  // cluster_visibility - computed: false, optional: true, required: false
  private _clusterVisibility?: string[]; 
  public get clusterVisibility() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_visibility'));
  }
  public set clusterVisibility(value: string[]) {
    this._clusterVisibility = value;
  }
  public resetClusterVisibility() {
    this._clusterVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVisibilityInput() {
    return this._clusterVisibility;
  }

  // local_queue_name - computed: false, optional: false, required: true
  private _localQueueName?: string; 
  public get localQueueName() {
    return this.getStringAttribute('local_queue_name');
  }
  public set localQueueName(value: string) {
    this._localQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localQueueNameInput() {
    return this._localQueueName;
  }
}

export class QueueManagerClusterQueuesClusterQueueList extends cdktf.ComplexList {
  public internalValue? : QueueManagerClusterQueuesClusterQueue[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerClusterQueuesClusterQueueOutputReference {
    return new QueueManagerClusterQueuesClusterQueueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueManagerClusterQueues {
  /**
  * cluster_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#cluster_queue QueueManager#cluster_queue}
  */
  readonly clusterQueue?: QueueManagerClusterQueuesClusterQueue[] | cdktf.IResolvable;
}

export function queueManagerClusterQueuesToTerraform(struct?: QueueManagerClusterQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_queue: cdktf.listMapper(queueManagerClusterQueuesClusterQueueToTerraform, true)(struct!.clusterQueue),
  }
}


export function queueManagerClusterQueuesToHclTerraform(struct?: QueueManagerClusterQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_queue: {
      value: cdktf.listMapperHcl(queueManagerClusterQueuesClusterQueueToHclTerraform, true)(struct!.clusterQueue),
      isBlock: true,
      type: "list",
      storageClassType: "QueueManagerClusterQueuesClusterQueueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerClusterQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerClusterQueues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterQueue = this._clusterQueue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerClusterQueues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterQueue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterQueue.internalValue = value.clusterQueue;
    }
  }

  // cluster_queue - computed: false, optional: true, required: false
  private _clusterQueue = new QueueManagerClusterQueuesClusterQueueList(this, "cluster_queue", false);
  public get clusterQueue() {
    return this._clusterQueue;
  }
  public putClusterQueue(value: QueueManagerClusterQueuesClusterQueue[] | cdktf.IResolvable) {
    this._clusterQueue.internalValue = value;
  }
  public resetClusterQueue() {
    this._clusterQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterQueueInput() {
    return this._clusterQueue.internalValue;
  }
}

export class QueueManagerClusterQueuesList extends cdktf.ComplexList {
  public internalValue? : QueueManagerClusterQueues[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerClusterQueuesOutputReference {
    return new QueueManagerClusterQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueManagerRemoteQueuesRemoteQueue {
  /**
  * Name of the cluster(s) this local definition of the remote queue should be visible in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#cluster_visibility QueueManager#cluster_visibility}
  */
  readonly clusterVisibility?: string[];
  /**
  * The name of the local queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#local_queue_name QueueManager#local_queue_name}
  */
  readonly localQueueName: string;
  /**
  * The name of the remote queue manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#remote_queue_manager QueueManager#remote_queue_manager}
  */
  readonly remoteQueueManager: string;
  /**
  * The name of the remote queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#remote_queue_name QueueManager#remote_queue_name}
  */
  readonly remoteQueueName: string;
}

export function queueManagerRemoteQueuesRemoteQueueToTerraform(struct?: QueueManagerRemoteQueuesRemoteQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterVisibility),
    local_queue_name: cdktf.stringToTerraform(struct!.localQueueName),
    remote_queue_manager: cdktf.stringToTerraform(struct!.remoteQueueManager),
    remote_queue_name: cdktf.stringToTerraform(struct!.remoteQueueName),
  }
}


export function queueManagerRemoteQueuesRemoteQueueToHclTerraform(struct?: QueueManagerRemoteQueuesRemoteQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_visibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterVisibility),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.localQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_queue_manager: {
      value: cdktf.stringToHclTerraform(struct!.remoteQueueManager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.remoteQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerRemoteQueuesRemoteQueueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerRemoteQueuesRemoteQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVisibility = this._clusterVisibility;
    }
    if (this._localQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localQueueName = this._localQueueName;
    }
    if (this._remoteQueueManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteQueueManager = this._remoteQueueManager;
    }
    if (this._remoteQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteQueueName = this._remoteQueueName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerRemoteQueuesRemoteQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterVisibility = undefined;
      this._localQueueName = undefined;
      this._remoteQueueManager = undefined;
      this._remoteQueueName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterVisibility = value.clusterVisibility;
      this._localQueueName = value.localQueueName;
      this._remoteQueueManager = value.remoteQueueManager;
      this._remoteQueueName = value.remoteQueueName;
    }
  }

  // cluster_visibility - computed: false, optional: true, required: false
  private _clusterVisibility?: string[]; 
  public get clusterVisibility() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_visibility'));
  }
  public set clusterVisibility(value: string[]) {
    this._clusterVisibility = value;
  }
  public resetClusterVisibility() {
    this._clusterVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVisibilityInput() {
    return this._clusterVisibility;
  }

  // local_queue_name - computed: false, optional: false, required: true
  private _localQueueName?: string; 
  public get localQueueName() {
    return this.getStringAttribute('local_queue_name');
  }
  public set localQueueName(value: string) {
    this._localQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localQueueNameInput() {
    return this._localQueueName;
  }

  // remote_queue_manager - computed: false, optional: false, required: true
  private _remoteQueueManager?: string; 
  public get remoteQueueManager() {
    return this.getStringAttribute('remote_queue_manager');
  }
  public set remoteQueueManager(value: string) {
    this._remoteQueueManager = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteQueueManagerInput() {
    return this._remoteQueueManager;
  }

  // remote_queue_name - computed: false, optional: false, required: true
  private _remoteQueueName?: string; 
  public get remoteQueueName() {
    return this.getStringAttribute('remote_queue_name');
  }
  public set remoteQueueName(value: string) {
    this._remoteQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteQueueNameInput() {
    return this._remoteQueueName;
  }
}

export class QueueManagerRemoteQueuesRemoteQueueList extends cdktf.ComplexList {
  public internalValue? : QueueManagerRemoteQueuesRemoteQueue[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerRemoteQueuesRemoteQueueOutputReference {
    return new QueueManagerRemoteQueuesRemoteQueueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QueueManagerRemoteQueues {
  /**
  * remote_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#remote_queue QueueManager#remote_queue}
  */
  readonly remoteQueue?: QueueManagerRemoteQueuesRemoteQueue[] | cdktf.IResolvable;
}

export function queueManagerRemoteQueuesToTerraform(struct?: QueueManagerRemoteQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_queue: cdktf.listMapper(queueManagerRemoteQueuesRemoteQueueToTerraform, true)(struct!.remoteQueue),
  }
}


export function queueManagerRemoteQueuesToHclTerraform(struct?: QueueManagerRemoteQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_queue: {
      value: cdktf.listMapperHcl(queueManagerRemoteQueuesRemoteQueueToHclTerraform, true)(struct!.remoteQueue),
      isBlock: true,
      type: "list",
      storageClassType: "QueueManagerRemoteQueuesRemoteQueueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QueueManagerRemoteQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QueueManagerRemoteQueues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteQueue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteQueue = this._remoteQueue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QueueManagerRemoteQueues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteQueue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteQueue.internalValue = value.remoteQueue;
    }
  }

  // remote_queue - computed: false, optional: true, required: false
  private _remoteQueue = new QueueManagerRemoteQueuesRemoteQueueList(this, "remote_queue", false);
  public get remoteQueue() {
    return this._remoteQueue;
  }
  public putRemoteQueue(value: QueueManagerRemoteQueuesRemoteQueue[] | cdktf.IResolvable) {
    this._remoteQueue.internalValue = value;
  }
  public resetRemoteQueue() {
    this._remoteQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteQueueInput() {
    return this._remoteQueue.internalValue;
  }
}

export class QueueManagerRemoteQueuesList extends cdktf.ComplexList {
  public internalValue? : QueueManagerRemoteQueues[] | cdktf.IResolvable

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
  public get(index: number): QueueManagerRemoteQueuesOutputReference {
    return new QueueManagerRemoteQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager dynatrace_queue_manager}
*/
export class QueueManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_queue_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueManager to import
  * @param importFromId The id of the existing QueueManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_queue_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/queue_manager dynatrace_queue_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueManagerConfig
  */
  public constructor(scope: Construct, id: string, config: QueueManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_queue_manager',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusters = config.clusters;
    this._id = config.id;
    this._name = config.name;
    this._aliasQueues.internalValue = config.aliasQueues;
    this._clusterQueues.internalValue = config.clusterQueues;
    this._remoteQueues.internalValue = config.remoteQueues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return cdktf.Fn.tolist(this.getListAttribute('clusters'));
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
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

  // alias_queues - computed: false, optional: true, required: false
  private _aliasQueues = new QueueManagerAliasQueuesList(this, "alias_queues", false);
  public get aliasQueues() {
    return this._aliasQueues;
  }
  public putAliasQueues(value: QueueManagerAliasQueues[] | cdktf.IResolvable) {
    this._aliasQueues.internalValue = value;
  }
  public resetAliasQueues() {
    this._aliasQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasQueuesInput() {
    return this._aliasQueues.internalValue;
  }

  // cluster_queues - computed: false, optional: true, required: false
  private _clusterQueues = new QueueManagerClusterQueuesList(this, "cluster_queues", false);
  public get clusterQueues() {
    return this._clusterQueues;
  }
  public putClusterQueues(value: QueueManagerClusterQueues[] | cdktf.IResolvable) {
    this._clusterQueues.internalValue = value;
  }
  public resetClusterQueues() {
    this._clusterQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterQueuesInput() {
    return this._clusterQueues.internalValue;
  }

  // remote_queues - computed: false, optional: true, required: false
  private _remoteQueues = new QueueManagerRemoteQueuesList(this, "remote_queues", false);
  public get remoteQueues() {
    return this._remoteQueues;
  }
  public putRemoteQueues(value: QueueManagerRemoteQueues[] | cdktf.IResolvable) {
    this._remoteQueues.internalValue = value;
  }
  public resetRemoteQueues() {
    this._remoteQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteQueuesInput() {
    return this._remoteQueues.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusters),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      alias_queues: cdktf.listMapper(queueManagerAliasQueuesToTerraform, true)(this._aliasQueues.internalValue),
      cluster_queues: cdktf.listMapper(queueManagerClusterQueuesToTerraform, true)(this._clusterQueues.internalValue),
      remote_queues: cdktf.listMapper(queueManagerRemoteQueuesToTerraform, true)(this._remoteQueues.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clusters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      alias_queues: {
        value: cdktf.listMapperHcl(queueManagerAliasQueuesToHclTerraform, true)(this._aliasQueues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QueueManagerAliasQueuesList",
      },
      cluster_queues: {
        value: cdktf.listMapperHcl(queueManagerClusterQueuesToHclTerraform, true)(this._clusterQueues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QueueManagerClusterQueuesList",
      },
      remote_queues: {
        value: cdktf.listMapperHcl(queueManagerRemoteQueuesToHclTerraform, true)(this._remoteQueues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QueueManagerRemoteQueuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
