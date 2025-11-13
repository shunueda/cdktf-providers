// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcmqQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#id DataTencentcloudTcmqQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For filtering by tag, this parameter must be set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#is_tag_filter DataTencentcloudTcmqQueue#is_tag_filter}
  */
  readonly isTagFilter?: boolean | cdktf.IResolvable;
  /**
  * The number of queues to be returned per page in case of paginated return. If this parameter is not passed in, 20 will be used by default. Maximum value: 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#limit DataTencentcloudTcmqQueue#limit}
  */
  readonly limit?: number;
  /**
  * Starting position of a queue list to be returned on the current page in case of paginated return. If a value is entered, limit must be specified. If this parameter is left empty, 0 will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#offset DataTencentcloudTcmqQueue#offset}
  */
  readonly offset?: number;
  /**
  * Filter by QueueName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#queue_name DataTencentcloudTcmqQueue#queue_name}
  */
  readonly queueName?: string;
  /**
  * Filter by CMQ queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#queue_name_list DataTencentcloudTcmqQueue#queue_name_list}
  */
  readonly queueNameList?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#result_output_file DataTencentcloudTcmqQueue#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#filters DataTencentcloudTcmqQueue#filters}
  */
  readonly filters?: DataTencentcloudTcmqQueueFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudTcmqQueueQueueListDeadLetterPolicy {
}

export function dataTencentcloudTcmqQueueQueueListDeadLetterPolicyToTerraform(struct?: DataTencentcloudTcmqQueueQueueListDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmqQueueQueueListDeadLetterPolicyToHclTerraform(struct?: DataTencentcloudTcmqQueueQueueListDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmqQueueQueueListDeadLetterPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueQueueListDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueQueueListDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_letter_queue - computed: true, optional: false, required: false
  public get deadLetterQueue() {
    return this.getStringAttribute('dead_letter_queue');
  }

  // max_receive_count - computed: true, optional: false, required: false
  public get maxReceiveCount() {
    return this.getNumberAttribute('max_receive_count');
  }

  // max_time_to_live - computed: true, optional: false, required: false
  public get maxTimeToLive() {
    return this.getNumberAttribute('max_time_to_live');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getNumberAttribute('policy');
  }
}

export class DataTencentcloudTcmqQueueQueueListDeadLetterPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmqQueueQueueListDeadLetterPolicyOutputReference {
    return new DataTencentcloudTcmqQueueQueueListDeadLetterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmqQueueQueueListDeadLetterSource {
}

export function dataTencentcloudTcmqQueueQueueListDeadLetterSourceToTerraform(struct?: DataTencentcloudTcmqQueueQueueListDeadLetterSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmqQueueQueueListDeadLetterSourceToHclTerraform(struct?: DataTencentcloudTcmqQueueQueueListDeadLetterSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmqQueueQueueListDeadLetterSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueQueueListDeadLetterSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueQueueListDeadLetterSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
}

export class DataTencentcloudTcmqQueueQueueListDeadLetterSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmqQueueQueueListDeadLetterSourceOutputReference {
    return new DataTencentcloudTcmqQueueQueueListDeadLetterSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmqQueueQueueListTags {
}

export function dataTencentcloudTcmqQueueQueueListTagsToTerraform(struct?: DataTencentcloudTcmqQueueQueueListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmqQueueQueueListTagsToHclTerraform(struct?: DataTencentcloudTcmqQueueQueueListTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmqQueueQueueListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueQueueListTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueQueueListTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudTcmqQueueQueueListTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmqQueueQueueListTagsOutputReference {
    return new DataTencentcloudTcmqQueueQueueListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmqQueueQueueListTransactionPolicy {
}

export function dataTencentcloudTcmqQueueQueueListTransactionPolicyToTerraform(struct?: DataTencentcloudTcmqQueueQueueListTransactionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmqQueueQueueListTransactionPolicyToHclTerraform(struct?: DataTencentcloudTcmqQueueQueueListTransactionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmqQueueQueueListTransactionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueQueueListTransactionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueQueueListTransactionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_query_interval - computed: true, optional: false, required: false
  public get firstQueryInterval() {
    return this.getNumberAttribute('first_query_interval');
  }

  // max_query_count - computed: true, optional: false, required: false
  public get maxQueryCount() {
    return this.getNumberAttribute('max_query_count');
  }
}

export class DataTencentcloudTcmqQueueQueueListTransactionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmqQueueQueueListTransactionPolicyOutputReference {
    return new DataTencentcloudTcmqQueueQueueListTransactionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmqQueueQueueListStruct {
}

export function dataTencentcloudTcmqQueueQueueListStructToTerraform(struct?: DataTencentcloudTcmqQueueQueueListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcmqQueueQueueListStructToHclTerraform(struct?: DataTencentcloudTcmqQueueQueueListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcmqQueueQueueListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueQueueListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueQueueListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_msg_num - computed: true, optional: false, required: false
  public get activeMsgNum() {
    return this.getNumberAttribute('active_msg_num');
  }

  // bps - computed: true, optional: false, required: false
  public get bps() {
    return this.getNumberAttribute('bps');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // create_uin - computed: true, optional: false, required: false
  public get createUin() {
    return this.getNumberAttribute('create_uin');
  }

  // dead_letter_policy - computed: true, optional: false, required: false
  private _deadLetterPolicy = new DataTencentcloudTcmqQueueQueueListDeadLetterPolicyList(this, "dead_letter_policy", false);
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }

  // dead_letter_source - computed: true, optional: false, required: false
  private _deadLetterSource = new DataTencentcloudTcmqQueueQueueListDeadLetterSourceList(this, "dead_letter_source", false);
  public get deadLetterSource() {
    return this._deadLetterSource;
  }

  // delay_msg_num - computed: true, optional: false, required: false
  public get delayMsgNum() {
    return this.getNumberAttribute('delay_msg_num');
  }

  // inactive_msg_num - computed: true, optional: false, required: false
  public get inactiveMsgNum() {
    return this.getNumberAttribute('inactive_msg_num');
  }

  // last_modify_time - computed: true, optional: false, required: false
  public get lastModifyTime() {
    return this.getNumberAttribute('last_modify_time');
  }

  // max_delay_seconds - computed: true, optional: false, required: false
  public get maxDelaySeconds() {
    return this.getNumberAttribute('max_delay_seconds');
  }

  // max_msg_backlog_size - computed: true, optional: false, required: false
  public get maxMsgBacklogSize() {
    return this.getNumberAttribute('max_msg_backlog_size');
  }

  // max_msg_heap_num - computed: true, optional: false, required: false
  public get maxMsgHeapNum() {
    return this.getNumberAttribute('max_msg_heap_num');
  }

  // max_msg_size - computed: true, optional: false, required: false
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }

  // max_unacked_msg_num - computed: true, optional: false, required: false
  public get maxUnackedMsgNum() {
    return this.getNumberAttribute('max_unacked_msg_num');
  }

  // min_msg_time - computed: true, optional: false, required: false
  public get minMsgTime() {
    return this.getNumberAttribute('min_msg_time');
  }

  // msg_retention_seconds - computed: true, optional: false, required: false
  public get msgRetentionSeconds() {
    return this.getNumberAttribute('msg_retention_seconds');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // polling_wait_seconds - computed: true, optional: false, required: false
  public get pollingWaitSeconds() {
    return this.getNumberAttribute('polling_wait_seconds');
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // retention_size_in_mb - computed: true, optional: false, required: false
  public get retentionSizeInMb() {
    return this.getNumberAttribute('retention_size_in_mb');
  }

  // rewind_msg_num - computed: true, optional: false, required: false
  public get rewindMsgNum() {
    return this.getNumberAttribute('rewind_msg_num');
  }

  // rewind_seconds - computed: true, optional: false, required: false
  public get rewindSeconds() {
    return this.getNumberAttribute('rewind_seconds');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudTcmqQueueQueueListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // trace - computed: true, optional: false, required: false
  public get trace() {
    return this.getBooleanAttribute('trace');
  }

  // transaction - computed: true, optional: false, required: false
  public get transaction() {
    return this.getBooleanAttribute('transaction');
  }

  // transaction_policy - computed: true, optional: false, required: false
  private _transactionPolicy = new DataTencentcloudTcmqQueueQueueListTransactionPolicyList(this, "transaction_policy", false);
  public get transactionPolicy() {
    return this._transactionPolicy;
  }

  // visibility_timeout - computed: true, optional: false, required: false
  public get visibilityTimeout() {
    return this.getNumberAttribute('visibility_timeout');
  }
}

export class DataTencentcloudTcmqQueueQueueListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcmqQueueQueueListStructOutputReference {
    return new DataTencentcloudTcmqQueueQueueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTcmqQueueFilters {
  /**
  * Filter parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#name DataTencentcloudTcmqQueue#name}
  */
  readonly name?: string;
  /**
  * Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#values DataTencentcloudTcmqQueue#values}
  */
  readonly values?: string[];
}

export function dataTencentcloudTcmqQueueFiltersToTerraform(struct?: DataTencentcloudTcmqQueueFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudTcmqQueueFiltersToHclTerraform(struct?: DataTencentcloudTcmqQueueFilters | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudTcmqQueueFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcmqQueueFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcmqQueueFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudTcmqQueueFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudTcmqQueueFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudTcmqQueueFiltersOutputReference {
    return new DataTencentcloudTcmqQueueFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue tencentcloud_tcmq_queue}
*/
export class DataTencentcloudTcmqQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcmq_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcmqQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcmqQueue to import
  * @param importFromId The id of the existing DataTencentcloudTcmqQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcmqQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcmq_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/tcmq_queue tencentcloud_tcmq_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcmqQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcmqQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcmq_queue',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._isTagFilter = config.isTagFilter;
    this._limit = config.limit;
    this._offset = config.offset;
    this._queueName = config.queueName;
    this._queueNameList = config.queueNameList;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
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

  // is_tag_filter - computed: false, optional: true, required: false
  private _isTagFilter?: boolean | cdktf.IResolvable; 
  public get isTagFilter() {
    return this.getBooleanAttribute('is_tag_filter');
  }
  public set isTagFilter(value: boolean | cdktf.IResolvable) {
    this._isTagFilter = value;
  }
  public resetIsTagFilter() {
    this._isTagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTagFilterInput() {
    return this._isTagFilter;
  }

  // limit - computed: false, optional: true, required: false
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

  // queue_list - computed: true, optional: false, required: false
  private _queueList = new DataTencentcloudTcmqQueueQueueListStructList(this, "queue_list", false);
  public get queueList() {
    return this._queueList;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // queue_name_list - computed: false, optional: true, required: false
  private _queueNameList?: string[]; 
  public get queueNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('queue_name_list'));
  }
  public set queueNameList(value: string[]) {
    this._queueNameList = value;
  }
  public resetQueueNameList() {
    this._queueNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameListInput() {
    return this._queueNameList;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudTcmqQueueFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudTcmqQueueFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_tag_filter: cdktf.booleanToTerraform(this._isTagFilter),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      queue_name: cdktf.stringToTerraform(this._queueName),
      queue_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queueNameList),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudTcmqQueueFiltersToTerraform, true)(this._filters.internalValue),
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
      is_tag_filter: {
        value: cdktf.booleanToHclTerraform(this._isTagFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queueNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudTcmqQueueFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudTcmqQueueFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
