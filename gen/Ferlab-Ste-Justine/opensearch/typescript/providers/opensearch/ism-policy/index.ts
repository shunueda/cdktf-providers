// https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default states that indices will have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#default_state IsmPolicy#default_state}
  */
  readonly defaultState: string;
  /**
  * Description for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#description IsmPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#id IsmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#policy_id IsmPolicy#policy_id}
  */
  readonly policyId: string;
  /**
  * ism_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#ism_template IsmPolicy#ism_template}
  */
  readonly ismTemplate?: IsmPolicyIsmTemplate[] | cdktf.IResolvable;
  /**
  * states block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#states IsmPolicy#states}
  */
  readonly states: IsmPolicyStates[] | cdktf.IResolvable;
}
export interface IsmPolicyIsmTemplate {
  /**
  * Indexes to include with wildcard support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#index_patterns IsmPolicy#index_patterns}
  */
  readonly indexPatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#priority IsmPolicy#priority}
  */
  readonly priority?: number;
}

export function ismPolicyIsmTemplateToTerraform(struct?: IsmPolicyIsmTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexPatterns),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function ismPolicyIsmTemplateToHclTerraform(struct?: IsmPolicyIsmTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indexPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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

export class IsmPolicyIsmTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IsmPolicyIsmTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPatterns = this._indexPatterns;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyIsmTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexPatterns = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexPatterns = value.indexPatterns;
      this._priority = value.priority;
    }
  }

  // index_patterns - computed: false, optional: false, required: true
  private _indexPatterns?: string[]; 
  public get indexPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('index_patterns'));
  }
  public set indexPatterns(value: string[]) {
    this._indexPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternsInput() {
    return this._indexPatterns;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class IsmPolicyIsmTemplateList extends cdktf.ComplexList {
  public internalValue? : IsmPolicyIsmTemplate[] | cdktf.IResolvable

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
  public get(index: number): IsmPolicyIsmTemplateOutputReference {
    return new IsmPolicyIsmTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IsmPolicyStatesActionsRetry {
  /**
  * Backoff policy when retrying. Can be: Exponential, Constant and Linear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#backoff IsmPolicy#backoff}
  */
  readonly backoff?: string;
  /**
  * Number of retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#count IsmPolicy#count}
  */
  readonly count: number;
  /**
  * Base time to wait between retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#delay IsmPolicy#delay}
  */
  readonly delay?: string;
}

export function ismPolicyStatesActionsRetryToTerraform(struct?: IsmPolicyStatesActionsRetryOutputReference | IsmPolicyStatesActionsRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff: cdktf.stringToTerraform(struct!.backoff),
    count: cdktf.numberToTerraform(struct!.count),
    delay: cdktf.stringToTerraform(struct!.delay),
  }
}


export function ismPolicyStatesActionsRetryToHclTerraform(struct?: IsmPolicyStatesActionsRetryOutputReference | IsmPolicyStatesActionsRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff: {
      value: cdktf.stringToHclTerraform(struct!.backoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IsmPolicyStatesActionsRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IsmPolicyStatesActionsRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyStatesActionsRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backoff = undefined;
      this._count = undefined;
      this._delay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backoff = value.backoff;
      this._count = value.count;
      this._delay = value.delay;
    }
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff?: string; 
  public get backoff() {
    return this.getStringAttribute('backoff');
  }
  public set backoff(value: string) {
    this._backoff = value;
  }
  public resetBackoff() {
    this._backoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff;
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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
}
export interface IsmPolicyStatesActions {
  /**
  * The action to execute. Currently supports: read_only, read_write, replica_count, open, close, delete, index_priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#action IsmPolicy#action}
  */
  readonly action: string;
  /**
  * Priority to set for the index if the action is index_priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#index_priority IsmPolicy#index_priority}
  */
  readonly indexPriority?: number;
  /**
  * Replicat count to set for the index if the action is replica_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#replica_count IsmPolicy#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Time limit to perform the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#timeout IsmPolicy#timeout}
  */
  readonly timeout?: string;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#retry IsmPolicy#retry}
  */
  readonly retry?: IsmPolicyStatesActionsRetry;
}

export function ismPolicyStatesActionsToTerraform(struct?: IsmPolicyStatesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    index_priority: cdktf.numberToTerraform(struct!.indexPriority),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    retry: ismPolicyStatesActionsRetryToTerraform(struct!.retry),
  }
}


export function ismPolicyStatesActionsToHclTerraform(struct?: IsmPolicyStatesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_priority: {
      value: cdktf.numberToHclTerraform(struct!.indexPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: ismPolicyStatesActionsRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "set",
      storageClassType: "IsmPolicyStatesActionsRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IsmPolicyStatesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IsmPolicyStatesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._indexPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPriority = this._indexPriority;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyStatesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._indexPriority = undefined;
      this._replicaCount = undefined;
      this._timeout = undefined;
      this._retry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._indexPriority = value.indexPriority;
      this._replicaCount = value.replicaCount;
      this._timeout = value.timeout;
      this._retry.internalValue = value.retry;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // index_priority - computed: false, optional: true, required: false
  private _indexPriority?: number; 
  public get indexPriority() {
    return this.getNumberAttribute('index_priority');
  }
  public set indexPriority(value: number) {
    this._indexPriority = value;
  }
  public resetIndexPriority() {
    this._indexPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPriorityInput() {
    return this._indexPriority;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
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

  // retry - computed: false, optional: true, required: false
  private _retry = new IsmPolicyStatesActionsRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: IsmPolicyStatesActionsRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}

export class IsmPolicyStatesActionsList extends cdktf.ComplexList {
  public internalValue? : IsmPolicyStatesActions[] | cdktf.IResolvable

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
  public get(index: number): IsmPolicyStatesActionsOutputReference {
    return new IsmPolicyStatesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IsmPolicyStatesTransitionsConditions {
  /**
  * Minimum number of documents after which the index will transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#min_doc_count IsmPolicy#min_doc_count}
  */
  readonly minDocCount?: number;
  /**
  * Minimum age at which the index will transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#min_index_age IsmPolicy#min_index_age}
  */
  readonly minIndexAge?: string;
  /**
  * Minimum size (not counting replication) after which the index will transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#min_size IsmPolicy#min_size}
  */
  readonly minSize?: string;
}

export function ismPolicyStatesTransitionsConditionsToTerraform(struct?: IsmPolicyStatesTransitionsConditionsOutputReference | IsmPolicyStatesTransitionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_doc_count: cdktf.numberToTerraform(struct!.minDocCount),
    min_index_age: cdktf.stringToTerraform(struct!.minIndexAge),
    min_size: cdktf.stringToTerraform(struct!.minSize),
  }
}


export function ismPolicyStatesTransitionsConditionsToHclTerraform(struct?: IsmPolicyStatesTransitionsConditionsOutputReference | IsmPolicyStatesTransitionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_doc_count: {
      value: cdktf.numberToHclTerraform(struct!.minDocCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_index_age: {
      value: cdktf.stringToHclTerraform(struct!.minIndexAge),
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

export class IsmPolicyStatesTransitionsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IsmPolicyStatesTransitionsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minDocCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDocCount = this._minDocCount;
    }
    if (this._minIndexAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIndexAge = this._minIndexAge;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyStatesTransitionsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minDocCount = undefined;
      this._minIndexAge = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minDocCount = value.minDocCount;
      this._minIndexAge = value.minIndexAge;
      this._minSize = value.minSize;
    }
  }

  // min_doc_count - computed: false, optional: true, required: false
  private _minDocCount?: number; 
  public get minDocCount() {
    return this.getNumberAttribute('min_doc_count');
  }
  public set minDocCount(value: number) {
    this._minDocCount = value;
  }
  public resetMinDocCount() {
    this._minDocCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDocCountInput() {
    return this._minDocCount;
  }

  // min_index_age - computed: false, optional: true, required: false
  private _minIndexAge?: string; 
  public get minIndexAge() {
    return this.getStringAttribute('min_index_age');
  }
  public set minIndexAge(value: string) {
    this._minIndexAge = value;
  }
  public resetMinIndexAge() {
    this._minIndexAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIndexAgeInput() {
    return this._minIndexAge;
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
export interface IsmPolicyStatesTransitions {
  /**
  * Name of the state to transition to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#state_name IsmPolicy#state_name}
  */
  readonly stateName: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#conditions IsmPolicy#conditions}
  */
  readonly conditions: IsmPolicyStatesTransitionsConditions;
}

export function ismPolicyStatesTransitionsToTerraform(struct?: IsmPolicyStatesTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state_name: cdktf.stringToTerraform(struct!.stateName),
    conditions: ismPolicyStatesTransitionsConditionsToTerraform(struct!.conditions),
  }
}


export function ismPolicyStatesTransitionsToHclTerraform(struct?: IsmPolicyStatesTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state_name: {
      value: cdktf.stringToHclTerraform(struct!.stateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: ismPolicyStatesTransitionsConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "IsmPolicyStatesTransitionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IsmPolicyStatesTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IsmPolicyStatesTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateName = this._stateName;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyStatesTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stateName = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stateName = value.stateName;
      this._conditions.internalValue = value.conditions;
    }
  }

  // state_name - computed: false, optional: false, required: true
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new IsmPolicyStatesTransitionsConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: IsmPolicyStatesTransitionsConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class IsmPolicyStatesTransitionsList extends cdktf.ComplexList {
  public internalValue? : IsmPolicyStatesTransitions[] | cdktf.IResolvable

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
  public get(index: number): IsmPolicyStatesTransitionsOutputReference {
    return new IsmPolicyStatesTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IsmPolicyStates {
  /**
  * Name of the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#name IsmPolicy#name}
  */
  readonly name: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#actions IsmPolicy#actions}
  */
  readonly actions?: IsmPolicyStatesActions[] | cdktf.IResolvable;
  /**
  * transitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#transitions IsmPolicy#transitions}
  */
  readonly transitions?: IsmPolicyStatesTransitions[] | cdktf.IResolvable;
}

export function ismPolicyStatesToTerraform(struct?: IsmPolicyStates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(ismPolicyStatesActionsToTerraform, true)(struct!.actions),
    transitions: cdktf.listMapper(ismPolicyStatesTransitionsToTerraform, true)(struct!.transitions),
  }
}


export function ismPolicyStatesToHclTerraform(struct?: IsmPolicyStates | cdktf.IResolvable): any {
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
    actions: {
      value: cdktf.listMapperHcl(ismPolicyStatesActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IsmPolicyStatesActionsList",
    },
    transitions: {
      value: cdktf.listMapperHcl(ismPolicyStatesTransitionsToHclTerraform, true)(struct!.transitions),
      isBlock: true,
      type: "list",
      storageClassType: "IsmPolicyStatesTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IsmPolicyStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IsmPolicyStates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._transitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitions = this._transitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IsmPolicyStates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._transitions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._transitions.internalValue = value.transitions;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new IsmPolicyStatesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IsmPolicyStatesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // transitions - computed: false, optional: true, required: false
  private _transitions = new IsmPolicyStatesTransitionsList(this, "transitions", false);
  public get transitions() {
    return this._transitions;
  }
  public putTransitions(value: IsmPolicyStatesTransitions[] | cdktf.IResolvable) {
    this._transitions.internalValue = value;
  }
  public resetTransitions() {
    this._transitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionsInput() {
    return this._transitions.internalValue;
  }
}

export class IsmPolicyStatesList extends cdktf.ComplexList {
  public internalValue? : IsmPolicyStates[] | cdktf.IResolvable

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
  public get(index: number): IsmPolicyStatesOutputReference {
    return new IsmPolicyStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy opensearch_ism_policy}
*/
export class IsmPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_ism_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsmPolicy to import
  * @param importFromId The id of the existing IsmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_ism_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/ism_policy opensearch_ism_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IsmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_ism_policy',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultState = config.defaultState;
    this._description = config.description;
    this._id = config.id;
    this._policyId = config.policyId;
    this._ismTemplate.internalValue = config.ismTemplate;
    this._states.internalValue = config.states;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_state - computed: false, optional: false, required: true
  private _defaultState?: string; 
  public get defaultState() {
    return this.getStringAttribute('default_state');
  }
  public set defaultState(value: string) {
    this._defaultState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStateInput() {
    return this._defaultState;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // ism_template - computed: false, optional: true, required: false
  private _ismTemplate = new IsmPolicyIsmTemplateList(this, "ism_template", true);
  public get ismTemplate() {
    return this._ismTemplate;
  }
  public putIsmTemplate(value: IsmPolicyIsmTemplate[] | cdktf.IResolvable) {
    this._ismTemplate.internalValue = value;
  }
  public resetIsmTemplate() {
    this._ismTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismTemplateInput() {
    return this._ismTemplate.internalValue;
  }

  // states - computed: false, optional: false, required: true
  private _states = new IsmPolicyStatesList(this, "states", true);
  public get states() {
    return this._states;
  }
  public putStates(value: IsmPolicyStates[] | cdktf.IResolvable) {
    this._states.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_state: cdktf.stringToTerraform(this._defaultState),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      ism_template: cdktf.listMapper(ismPolicyIsmTemplateToTerraform, true)(this._ismTemplate.internalValue),
      states: cdktf.listMapper(ismPolicyStatesToTerraform, true)(this._states.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_state: {
        value: cdktf.stringToHclTerraform(this._defaultState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ism_template: {
        value: cdktf.listMapperHcl(ismPolicyIsmTemplateToHclTerraform, true)(this._ismTemplate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IsmPolicyIsmTemplateList",
      },
      states: {
        value: cdktf.listMapperHcl(ismPolicyStatesToHclTerraform, true)(this._states.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IsmPolicyStatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
