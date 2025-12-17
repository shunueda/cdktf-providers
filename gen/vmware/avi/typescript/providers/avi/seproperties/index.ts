// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SepropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#id Seproperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#uuid Seproperties#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#configpb_attributes Seproperties#configpb_attributes}
  */
  readonly configpbAttributes?: SepropertiesConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * se_agent_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_agent_properties Seproperties#se_agent_properties}
  */
  readonly seAgentProperties?: SepropertiesSeAgentProperties[] | cdktf.IResolvable;
  /**
  * se_bootup_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_bootup_properties Seproperties#se_bootup_properties}
  */
  readonly seBootupProperties?: SepropertiesSeBootupProperties[] | cdktf.IResolvable;
  /**
  * se_runtime_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_runtime_properties Seproperties#se_runtime_properties}
  */
  readonly seRuntimeProperties?: SepropertiesSeRuntimeProperties[] | cdktf.IResolvable;
}
export interface SepropertiesConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#version Seproperties#version}
  */
  readonly version?: string;
}

export function sepropertiesConfigpbAttributesToTerraform(struct?: SepropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function sepropertiesConfigpbAttributesToHclTerraform(struct?: SepropertiesConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SepropertiesConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesConfigpbAttributesOutputReference {
    return new SepropertiesConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeAgentPropertiesSeagentStatecacheProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_batch_buffer_flush_limit Seproperties#sc_batch_buffer_flush_limit}
  */
  readonly scBatchBufferFlushLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_cfg_q_batch_dequeue_limit Seproperties#sc_cfg_q_batch_dequeue_limit}
  */
  readonly scCfgQBatchDequeueLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_cfg_q_max_size Seproperties#sc_cfg_q_max_size}
  */
  readonly scCfgQMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_dns_q_batch_dequeue_limit Seproperties#sc_dns_q_batch_dequeue_limit}
  */
  readonly scDnsQBatchDequeueLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_dns_q_max_size Seproperties#sc_dns_q_max_size}
  */
  readonly scDnsQMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_shard_cleanup_max_time Seproperties#sc_shard_cleanup_max_time}
  */
  readonly scShardCleanupMaxTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_state_ring_batch_dequeue_limit Seproperties#sc_state_ring_batch_dequeue_limit}
  */
  readonly scStateRingBatchDequeueLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_states_flush_interval Seproperties#sc_states_flush_interval}
  */
  readonly scStatesFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_stream_check_interval Seproperties#sc_stream_check_interval}
  */
  readonly scStreamCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_thread_q_batch_dequeue_limit Seproperties#sc_thread_q_batch_dequeue_limit}
  */
  readonly scThreadQBatchDequeueLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_thread_q_max_size Seproperties#sc_thread_q_max_size}
  */
  readonly scThreadQMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sc_thread_sleep_interval Seproperties#sc_thread_sleep_interval}
  */
  readonly scThreadSleepInterval?: string;
}

export function sepropertiesSeAgentPropertiesSeagentStatecachePropertiesToTerraform(struct?: SepropertiesSeAgentPropertiesSeagentStatecacheProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sc_batch_buffer_flush_limit: cdktf.stringToTerraform(struct!.scBatchBufferFlushLimit),
    sc_cfg_q_batch_dequeue_limit: cdktf.stringToTerraform(struct!.scCfgQBatchDequeueLimit),
    sc_cfg_q_max_size: cdktf.stringToTerraform(struct!.scCfgQMaxSize),
    sc_dns_q_batch_dequeue_limit: cdktf.stringToTerraform(struct!.scDnsQBatchDequeueLimit),
    sc_dns_q_max_size: cdktf.stringToTerraform(struct!.scDnsQMaxSize),
    sc_shard_cleanup_max_time: cdktf.stringToTerraform(struct!.scShardCleanupMaxTime),
    sc_state_ring_batch_dequeue_limit: cdktf.stringToTerraform(struct!.scStateRingBatchDequeueLimit),
    sc_states_flush_interval: cdktf.stringToTerraform(struct!.scStatesFlushInterval),
    sc_stream_check_interval: cdktf.stringToTerraform(struct!.scStreamCheckInterval),
    sc_thread_q_batch_dequeue_limit: cdktf.stringToTerraform(struct!.scThreadQBatchDequeueLimit),
    sc_thread_q_max_size: cdktf.stringToTerraform(struct!.scThreadQMaxSize),
    sc_thread_sleep_interval: cdktf.stringToTerraform(struct!.scThreadSleepInterval),
  }
}


export function sepropertiesSeAgentPropertiesSeagentStatecachePropertiesToHclTerraform(struct?: SepropertiesSeAgentPropertiesSeagentStatecacheProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sc_batch_buffer_flush_limit: {
      value: cdktf.stringToHclTerraform(struct!.scBatchBufferFlushLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_cfg_q_batch_dequeue_limit: {
      value: cdktf.stringToHclTerraform(struct!.scCfgQBatchDequeueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_cfg_q_max_size: {
      value: cdktf.stringToHclTerraform(struct!.scCfgQMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_dns_q_batch_dequeue_limit: {
      value: cdktf.stringToHclTerraform(struct!.scDnsQBatchDequeueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_dns_q_max_size: {
      value: cdktf.stringToHclTerraform(struct!.scDnsQMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_shard_cleanup_max_time: {
      value: cdktf.stringToHclTerraform(struct!.scShardCleanupMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_state_ring_batch_dequeue_limit: {
      value: cdktf.stringToHclTerraform(struct!.scStateRingBatchDequeueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_states_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.scStatesFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_stream_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.scStreamCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_thread_q_batch_dequeue_limit: {
      value: cdktf.stringToHclTerraform(struct!.scThreadQBatchDequeueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_thread_q_max_size: {
      value: cdktf.stringToHclTerraform(struct!.scThreadQMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sc_thread_sleep_interval: {
      value: cdktf.stringToHclTerraform(struct!.scThreadSleepInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeAgentPropertiesSeagentStatecacheProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scBatchBufferFlushLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scBatchBufferFlushLimit = this._scBatchBufferFlushLimit;
    }
    if (this._scCfgQBatchDequeueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scCfgQBatchDequeueLimit = this._scCfgQBatchDequeueLimit;
    }
    if (this._scCfgQMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.scCfgQMaxSize = this._scCfgQMaxSize;
    }
    if (this._scDnsQBatchDequeueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scDnsQBatchDequeueLimit = this._scDnsQBatchDequeueLimit;
    }
    if (this._scDnsQMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.scDnsQMaxSize = this._scDnsQMaxSize;
    }
    if (this._scShardCleanupMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scShardCleanupMaxTime = this._scShardCleanupMaxTime;
    }
    if (this._scStateRingBatchDequeueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scStateRingBatchDequeueLimit = this._scStateRingBatchDequeueLimit;
    }
    if (this._scStatesFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scStatesFlushInterval = this._scStatesFlushInterval;
    }
    if (this._scStreamCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scStreamCheckInterval = this._scStreamCheckInterval;
    }
    if (this._scThreadQBatchDequeueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scThreadQBatchDequeueLimit = this._scThreadQBatchDequeueLimit;
    }
    if (this._scThreadQMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.scThreadQMaxSize = this._scThreadQMaxSize;
    }
    if (this._scThreadSleepInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scThreadSleepInterval = this._scThreadSleepInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeAgentPropertiesSeagentStatecacheProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scBatchBufferFlushLimit = undefined;
      this._scCfgQBatchDequeueLimit = undefined;
      this._scCfgQMaxSize = undefined;
      this._scDnsQBatchDequeueLimit = undefined;
      this._scDnsQMaxSize = undefined;
      this._scShardCleanupMaxTime = undefined;
      this._scStateRingBatchDequeueLimit = undefined;
      this._scStatesFlushInterval = undefined;
      this._scStreamCheckInterval = undefined;
      this._scThreadQBatchDequeueLimit = undefined;
      this._scThreadQMaxSize = undefined;
      this._scThreadSleepInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scBatchBufferFlushLimit = value.scBatchBufferFlushLimit;
      this._scCfgQBatchDequeueLimit = value.scCfgQBatchDequeueLimit;
      this._scCfgQMaxSize = value.scCfgQMaxSize;
      this._scDnsQBatchDequeueLimit = value.scDnsQBatchDequeueLimit;
      this._scDnsQMaxSize = value.scDnsQMaxSize;
      this._scShardCleanupMaxTime = value.scShardCleanupMaxTime;
      this._scStateRingBatchDequeueLimit = value.scStateRingBatchDequeueLimit;
      this._scStatesFlushInterval = value.scStatesFlushInterval;
      this._scStreamCheckInterval = value.scStreamCheckInterval;
      this._scThreadQBatchDequeueLimit = value.scThreadQBatchDequeueLimit;
      this._scThreadQMaxSize = value.scThreadQMaxSize;
      this._scThreadSleepInterval = value.scThreadSleepInterval;
    }
  }

  // sc_batch_buffer_flush_limit - computed: false, optional: true, required: false
  private _scBatchBufferFlushLimit?: string; 
  public get scBatchBufferFlushLimit() {
    return this.getStringAttribute('sc_batch_buffer_flush_limit');
  }
  public set scBatchBufferFlushLimit(value: string) {
    this._scBatchBufferFlushLimit = value;
  }
  public resetScBatchBufferFlushLimit() {
    this._scBatchBufferFlushLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scBatchBufferFlushLimitInput() {
    return this._scBatchBufferFlushLimit;
  }

  // sc_cfg_q_batch_dequeue_limit - computed: false, optional: true, required: false
  private _scCfgQBatchDequeueLimit?: string; 
  public get scCfgQBatchDequeueLimit() {
    return this.getStringAttribute('sc_cfg_q_batch_dequeue_limit');
  }
  public set scCfgQBatchDequeueLimit(value: string) {
    this._scCfgQBatchDequeueLimit = value;
  }
  public resetScCfgQBatchDequeueLimit() {
    this._scCfgQBatchDequeueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scCfgQBatchDequeueLimitInput() {
    return this._scCfgQBatchDequeueLimit;
  }

  // sc_cfg_q_max_size - computed: false, optional: true, required: false
  private _scCfgQMaxSize?: string; 
  public get scCfgQMaxSize() {
    return this.getStringAttribute('sc_cfg_q_max_size');
  }
  public set scCfgQMaxSize(value: string) {
    this._scCfgQMaxSize = value;
  }
  public resetScCfgQMaxSize() {
    this._scCfgQMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scCfgQMaxSizeInput() {
    return this._scCfgQMaxSize;
  }

  // sc_dns_q_batch_dequeue_limit - computed: false, optional: true, required: false
  private _scDnsQBatchDequeueLimit?: string; 
  public get scDnsQBatchDequeueLimit() {
    return this.getStringAttribute('sc_dns_q_batch_dequeue_limit');
  }
  public set scDnsQBatchDequeueLimit(value: string) {
    this._scDnsQBatchDequeueLimit = value;
  }
  public resetScDnsQBatchDequeueLimit() {
    this._scDnsQBatchDequeueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scDnsQBatchDequeueLimitInput() {
    return this._scDnsQBatchDequeueLimit;
  }

  // sc_dns_q_max_size - computed: false, optional: true, required: false
  private _scDnsQMaxSize?: string; 
  public get scDnsQMaxSize() {
    return this.getStringAttribute('sc_dns_q_max_size');
  }
  public set scDnsQMaxSize(value: string) {
    this._scDnsQMaxSize = value;
  }
  public resetScDnsQMaxSize() {
    this._scDnsQMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scDnsQMaxSizeInput() {
    return this._scDnsQMaxSize;
  }

  // sc_shard_cleanup_max_time - computed: false, optional: true, required: false
  private _scShardCleanupMaxTime?: string; 
  public get scShardCleanupMaxTime() {
    return this.getStringAttribute('sc_shard_cleanup_max_time');
  }
  public set scShardCleanupMaxTime(value: string) {
    this._scShardCleanupMaxTime = value;
  }
  public resetScShardCleanupMaxTime() {
    this._scShardCleanupMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scShardCleanupMaxTimeInput() {
    return this._scShardCleanupMaxTime;
  }

  // sc_state_ring_batch_dequeue_limit - computed: false, optional: true, required: false
  private _scStateRingBatchDequeueLimit?: string; 
  public get scStateRingBatchDequeueLimit() {
    return this.getStringAttribute('sc_state_ring_batch_dequeue_limit');
  }
  public set scStateRingBatchDequeueLimit(value: string) {
    this._scStateRingBatchDequeueLimit = value;
  }
  public resetScStateRingBatchDequeueLimit() {
    this._scStateRingBatchDequeueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scStateRingBatchDequeueLimitInput() {
    return this._scStateRingBatchDequeueLimit;
  }

  // sc_states_flush_interval - computed: false, optional: true, required: false
  private _scStatesFlushInterval?: string; 
  public get scStatesFlushInterval() {
    return this.getStringAttribute('sc_states_flush_interval');
  }
  public set scStatesFlushInterval(value: string) {
    this._scStatesFlushInterval = value;
  }
  public resetScStatesFlushInterval() {
    this._scStatesFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scStatesFlushIntervalInput() {
    return this._scStatesFlushInterval;
  }

  // sc_stream_check_interval - computed: false, optional: true, required: false
  private _scStreamCheckInterval?: string; 
  public get scStreamCheckInterval() {
    return this.getStringAttribute('sc_stream_check_interval');
  }
  public set scStreamCheckInterval(value: string) {
    this._scStreamCheckInterval = value;
  }
  public resetScStreamCheckInterval() {
    this._scStreamCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scStreamCheckIntervalInput() {
    return this._scStreamCheckInterval;
  }

  // sc_thread_q_batch_dequeue_limit - computed: false, optional: true, required: false
  private _scThreadQBatchDequeueLimit?: string; 
  public get scThreadQBatchDequeueLimit() {
    return this.getStringAttribute('sc_thread_q_batch_dequeue_limit');
  }
  public set scThreadQBatchDequeueLimit(value: string) {
    this._scThreadQBatchDequeueLimit = value;
  }
  public resetScThreadQBatchDequeueLimit() {
    this._scThreadQBatchDequeueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scThreadQBatchDequeueLimitInput() {
    return this._scThreadQBatchDequeueLimit;
  }

  // sc_thread_q_max_size - computed: false, optional: true, required: false
  private _scThreadQMaxSize?: string; 
  public get scThreadQMaxSize() {
    return this.getStringAttribute('sc_thread_q_max_size');
  }
  public set scThreadQMaxSize(value: string) {
    this._scThreadQMaxSize = value;
  }
  public resetScThreadQMaxSize() {
    this._scThreadQMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scThreadQMaxSizeInput() {
    return this._scThreadQMaxSize;
  }

  // sc_thread_sleep_interval - computed: false, optional: true, required: false
  private _scThreadSleepInterval?: string; 
  public get scThreadSleepInterval() {
    return this.getStringAttribute('sc_thread_sleep_interval');
  }
  public set scThreadSleepInterval(value: string) {
    this._scThreadSleepInterval = value;
  }
  public resetScThreadSleepInterval() {
    this._scThreadSleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scThreadSleepIntervalInput() {
    return this._scThreadSleepInterval;
  }
}

export class SepropertiesSeAgentPropertiesSeagentStatecachePropertiesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeAgentPropertiesSeagentStatecacheProperties[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference {
    return new SepropertiesSeAgentPropertiesSeagentStatecachePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeAgentProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_echo_miss_aggressive_limit Seproperties#controller_echo_miss_aggressive_limit}
  */
  readonly controllerEchoMissAggressiveLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_echo_miss_limit Seproperties#controller_echo_miss_limit}
  */
  readonly controllerEchoMissLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_echo_rpc_aggressive_timeout Seproperties#controller_echo_rpc_aggressive_timeout}
  */
  readonly controllerEchoRpcAggressiveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_echo_rpc_timeout Seproperties#controller_echo_rpc_timeout}
  */
  readonly controllerEchoRpcTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_heartbeat_miss_limit Seproperties#controller_heartbeat_miss_limit}
  */
  readonly controllerHeartbeatMissLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_heartbeat_timeout_sec Seproperties#controller_heartbeat_timeout_sec}
  */
  readonly controllerHeartbeatTimeoutSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_registration_timeout_sec Seproperties#controller_registration_timeout_sec}
  */
  readonly controllerRegistrationTimeoutSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#controller_rpc_timeout Seproperties#controller_rpc_timeout}
  */
  readonly controllerRpcTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#cpustats_interval Seproperties#cpustats_interval}
  */
  readonly cpustatsInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ctrl_reg_pending_max_wait_time Seproperties#ctrl_reg_pending_max_wait_time}
  */
  readonly ctrlRegPendingMaxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#debug_mode Seproperties#debug_mode}
  */
  readonly debugMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_aggressive_deq_interval_msec Seproperties#dp_aggressive_deq_interval_msec}
  */
  readonly dpAggressiveDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_aggressive_enq_interval_msec Seproperties#dp_aggressive_enq_interval_msec}
  */
  readonly dpAggressiveEnqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_batch_size Seproperties#dp_batch_size}
  */
  readonly dpBatchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_deq_interval_msec Seproperties#dp_deq_interval_msec}
  */
  readonly dpDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_enq_interval_msec Seproperties#dp_enq_interval_msec}
  */
  readonly dpEnqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_max_wait_rsp_time_sec Seproperties#dp_max_wait_rsp_time_sec}
  */
  readonly dpMaxWaitRspTimeSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_reg_pending_max_wait_time Seproperties#dp_reg_pending_max_wait_time}
  */
  readonly dpRegPendingMaxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#headless_timeout_sec Seproperties#headless_timeout_sec}
  */
  readonly headlessTimeoutSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ignore_docker_mac_change Seproperties#ignore_docker_mac_change}
  */
  readonly ignoreDockerMacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ns_helper_deq_interval_msec Seproperties#ns_helper_deq_interval_msec}
  */
  readonly nsHelperDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sdb_flush_interval Seproperties#sdb_flush_interval}
  */
  readonly sdbFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sdb_pipeline_size Seproperties#sdb_pipeline_size}
  */
  readonly sdbPipelineSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#sdb_scan_count Seproperties#sdb_scan_count}
  */
  readonly sdbScanCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_grp_change_disruptive Seproperties#se_grp_change_disruptive}
  */
  readonly seGrpChangeDisruptive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#send_se_ready_timeout Seproperties#send_se_ready_timeout}
  */
  readonly sendSeReadyTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#states_flush_interval Seproperties#states_flush_interval}
  */
  readonly statesFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnic_dhcp_ip_check_interval Seproperties#vnic_dhcp_ip_check_interval}
  */
  readonly vnicDhcpIpCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnic_dhcp_ip_max_retries Seproperties#vnic_dhcp_ip_max_retries}
  */
  readonly vnicDhcpIpMaxRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnic_ip_delete_interval Seproperties#vnic_ip_delete_interval}
  */
  readonly vnicIpDeleteInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnic_probe_interval Seproperties#vnic_probe_interval}
  */
  readonly vnicProbeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnic_rpc_retry_interval Seproperties#vnic_rpc_retry_interval}
  */
  readonly vnicRpcRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#vnicdb_cmd_history_size Seproperties#vnicdb_cmd_history_size}
  */
  readonly vnicdbCmdHistorySize?: string;
  /**
  * seagent_statecache_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#seagent_statecache_properties Seproperties#seagent_statecache_properties}
  */
  readonly seagentStatecacheProperties?: SepropertiesSeAgentPropertiesSeagentStatecacheProperties[] | cdktf.IResolvable;
}

export function sepropertiesSeAgentPropertiesToTerraform(struct?: SepropertiesSeAgentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_echo_miss_aggressive_limit: cdktf.stringToTerraform(struct!.controllerEchoMissAggressiveLimit),
    controller_echo_miss_limit: cdktf.stringToTerraform(struct!.controllerEchoMissLimit),
    controller_echo_rpc_aggressive_timeout: cdktf.stringToTerraform(struct!.controllerEchoRpcAggressiveTimeout),
    controller_echo_rpc_timeout: cdktf.stringToTerraform(struct!.controllerEchoRpcTimeout),
    controller_heartbeat_miss_limit: cdktf.stringToTerraform(struct!.controllerHeartbeatMissLimit),
    controller_heartbeat_timeout_sec: cdktf.stringToTerraform(struct!.controllerHeartbeatTimeoutSec),
    controller_registration_timeout_sec: cdktf.stringToTerraform(struct!.controllerRegistrationTimeoutSec),
    controller_rpc_timeout: cdktf.stringToTerraform(struct!.controllerRpcTimeout),
    cpustats_interval: cdktf.stringToTerraform(struct!.cpustatsInterval),
    ctrl_reg_pending_max_wait_time: cdktf.stringToTerraform(struct!.ctrlRegPendingMaxWaitTime),
    debug_mode: cdktf.stringToTerraform(struct!.debugMode),
    dp_aggressive_deq_interval_msec: cdktf.stringToTerraform(struct!.dpAggressiveDeqIntervalMsec),
    dp_aggressive_enq_interval_msec: cdktf.stringToTerraform(struct!.dpAggressiveEnqIntervalMsec),
    dp_batch_size: cdktf.stringToTerraform(struct!.dpBatchSize),
    dp_deq_interval_msec: cdktf.stringToTerraform(struct!.dpDeqIntervalMsec),
    dp_enq_interval_msec: cdktf.stringToTerraform(struct!.dpEnqIntervalMsec),
    dp_max_wait_rsp_time_sec: cdktf.stringToTerraform(struct!.dpMaxWaitRspTimeSec),
    dp_reg_pending_max_wait_time: cdktf.stringToTerraform(struct!.dpRegPendingMaxWaitTime),
    headless_timeout_sec: cdktf.stringToTerraform(struct!.headlessTimeoutSec),
    ignore_docker_mac_change: cdktf.stringToTerraform(struct!.ignoreDockerMacChange),
    ns_helper_deq_interval_msec: cdktf.stringToTerraform(struct!.nsHelperDeqIntervalMsec),
    sdb_flush_interval: cdktf.stringToTerraform(struct!.sdbFlushInterval),
    sdb_pipeline_size: cdktf.stringToTerraform(struct!.sdbPipelineSize),
    sdb_scan_count: cdktf.stringToTerraform(struct!.sdbScanCount),
    se_grp_change_disruptive: cdktf.stringToTerraform(struct!.seGrpChangeDisruptive),
    send_se_ready_timeout: cdktf.stringToTerraform(struct!.sendSeReadyTimeout),
    states_flush_interval: cdktf.stringToTerraform(struct!.statesFlushInterval),
    vnic_dhcp_ip_check_interval: cdktf.stringToTerraform(struct!.vnicDhcpIpCheckInterval),
    vnic_dhcp_ip_max_retries: cdktf.stringToTerraform(struct!.vnicDhcpIpMaxRetries),
    vnic_ip_delete_interval: cdktf.stringToTerraform(struct!.vnicIpDeleteInterval),
    vnic_probe_interval: cdktf.stringToTerraform(struct!.vnicProbeInterval),
    vnic_rpc_retry_interval: cdktf.stringToTerraform(struct!.vnicRpcRetryInterval),
    vnicdb_cmd_history_size: cdktf.stringToTerraform(struct!.vnicdbCmdHistorySize),
    seagent_statecache_properties: cdktf.listMapper(sepropertiesSeAgentPropertiesSeagentStatecachePropertiesToTerraform, true)(struct!.seagentStatecacheProperties),
  }
}


export function sepropertiesSeAgentPropertiesToHclTerraform(struct?: SepropertiesSeAgentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_echo_miss_aggressive_limit: {
      value: cdktf.stringToHclTerraform(struct!.controllerEchoMissAggressiveLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_echo_miss_limit: {
      value: cdktf.stringToHclTerraform(struct!.controllerEchoMissLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_echo_rpc_aggressive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.controllerEchoRpcAggressiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_echo_rpc_timeout: {
      value: cdktf.stringToHclTerraform(struct!.controllerEchoRpcTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_heartbeat_miss_limit: {
      value: cdktf.stringToHclTerraform(struct!.controllerHeartbeatMissLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_heartbeat_timeout_sec: {
      value: cdktf.stringToHclTerraform(struct!.controllerHeartbeatTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_registration_timeout_sec: {
      value: cdktf.stringToHclTerraform(struct!.controllerRegistrationTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_rpc_timeout: {
      value: cdktf.stringToHclTerraform(struct!.controllerRpcTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpustats_interval: {
      value: cdktf.stringToHclTerraform(struct!.cpustatsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ctrl_reg_pending_max_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.ctrlRegPendingMaxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_mode: {
      value: cdktf.stringToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_aggressive_deq_interval_msec: {
      value: cdktf.stringToHclTerraform(struct!.dpAggressiveDeqIntervalMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_aggressive_enq_interval_msec: {
      value: cdktf.stringToHclTerraform(struct!.dpAggressiveEnqIntervalMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_batch_size: {
      value: cdktf.stringToHclTerraform(struct!.dpBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_deq_interval_msec: {
      value: cdktf.stringToHclTerraform(struct!.dpDeqIntervalMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_enq_interval_msec: {
      value: cdktf.stringToHclTerraform(struct!.dpEnqIntervalMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_max_wait_rsp_time_sec: {
      value: cdktf.stringToHclTerraform(struct!.dpMaxWaitRspTimeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_reg_pending_max_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.dpRegPendingMaxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headless_timeout_sec: {
      value: cdktf.stringToHclTerraform(struct!.headlessTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_docker_mac_change: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDockerMacChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_helper_deq_interval_msec: {
      value: cdktf.stringToHclTerraform(struct!.nsHelperDeqIntervalMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdb_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.sdbFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdb_pipeline_size: {
      value: cdktf.stringToHclTerraform(struct!.sdbPipelineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdb_scan_count: {
      value: cdktf.stringToHclTerraform(struct!.sdbScanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_grp_change_disruptive: {
      value: cdktf.stringToHclTerraform(struct!.seGrpChangeDisruptive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_se_ready_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendSeReadyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    states_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.statesFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_dhcp_ip_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.vnicDhcpIpCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_dhcp_ip_max_retries: {
      value: cdktf.stringToHclTerraform(struct!.vnicDhcpIpMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_ip_delete_interval: {
      value: cdktf.stringToHclTerraform(struct!.vnicIpDeleteInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_probe_interval: {
      value: cdktf.stringToHclTerraform(struct!.vnicProbeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_rpc_retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.vnicRpcRetryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnicdb_cmd_history_size: {
      value: cdktf.stringToHclTerraform(struct!.vnicdbCmdHistorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seagent_statecache_properties: {
      value: cdktf.listMapperHcl(sepropertiesSeAgentPropertiesSeagentStatecachePropertiesToHclTerraform, true)(struct!.seagentStatecacheProperties),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeAgentPropertiesSeagentStatecachePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeAgentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeAgentProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerEchoMissAggressiveLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerEchoMissAggressiveLimit = this._controllerEchoMissAggressiveLimit;
    }
    if (this._controllerEchoMissLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerEchoMissLimit = this._controllerEchoMissLimit;
    }
    if (this._controllerEchoRpcAggressiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerEchoRpcAggressiveTimeout = this._controllerEchoRpcAggressiveTimeout;
    }
    if (this._controllerEchoRpcTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerEchoRpcTimeout = this._controllerEchoRpcTimeout;
    }
    if (this._controllerHeartbeatMissLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerHeartbeatMissLimit = this._controllerHeartbeatMissLimit;
    }
    if (this._controllerHeartbeatTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerHeartbeatTimeoutSec = this._controllerHeartbeatTimeoutSec;
    }
    if (this._controllerRegistrationTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerRegistrationTimeoutSec = this._controllerRegistrationTimeoutSec;
    }
    if (this._controllerRpcTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerRpcTimeout = this._controllerRpcTimeout;
    }
    if (this._cpustatsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpustatsInterval = this._cpustatsInterval;
    }
    if (this._ctrlRegPendingMaxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlRegPendingMaxWaitTime = this._ctrlRegPendingMaxWaitTime;
    }
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._dpAggressiveDeqIntervalMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpAggressiveDeqIntervalMsec = this._dpAggressiveDeqIntervalMsec;
    }
    if (this._dpAggressiveEnqIntervalMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpAggressiveEnqIntervalMsec = this._dpAggressiveEnqIntervalMsec;
    }
    if (this._dpBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpBatchSize = this._dpBatchSize;
    }
    if (this._dpDeqIntervalMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpDeqIntervalMsec = this._dpDeqIntervalMsec;
    }
    if (this._dpEnqIntervalMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpEnqIntervalMsec = this._dpEnqIntervalMsec;
    }
    if (this._dpMaxWaitRspTimeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpMaxWaitRspTimeSec = this._dpMaxWaitRspTimeSec;
    }
    if (this._dpRegPendingMaxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpRegPendingMaxWaitTime = this._dpRegPendingMaxWaitTime;
    }
    if (this._headlessTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.headlessTimeoutSec = this._headlessTimeoutSec;
    }
    if (this._ignoreDockerMacChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDockerMacChange = this._ignoreDockerMacChange;
    }
    if (this._nsHelperDeqIntervalMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsHelperDeqIntervalMsec = this._nsHelperDeqIntervalMsec;
    }
    if (this._sdbFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdbFlushInterval = this._sdbFlushInterval;
    }
    if (this._sdbPipelineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdbPipelineSize = this._sdbPipelineSize;
    }
    if (this._sdbScanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdbScanCount = this._sdbScanCount;
    }
    if (this._seGrpChangeDisruptive !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGrpChangeDisruptive = this._seGrpChangeDisruptive;
    }
    if (this._sendSeReadyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSeReadyTimeout = this._sendSeReadyTimeout;
    }
    if (this._statesFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.statesFlushInterval = this._statesFlushInterval;
    }
    if (this._vnicDhcpIpCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicDhcpIpCheckInterval = this._vnicDhcpIpCheckInterval;
    }
    if (this._vnicDhcpIpMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicDhcpIpMaxRetries = this._vnicDhcpIpMaxRetries;
    }
    if (this._vnicIpDeleteInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicIpDeleteInterval = this._vnicIpDeleteInterval;
    }
    if (this._vnicProbeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicProbeInterval = this._vnicProbeInterval;
    }
    if (this._vnicRpcRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicRpcRetryInterval = this._vnicRpcRetryInterval;
    }
    if (this._vnicdbCmdHistorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicdbCmdHistorySize = this._vnicdbCmdHistorySize;
    }
    if (this._seagentStatecacheProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seagentStatecacheProperties = this._seagentStatecacheProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeAgentProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerEchoMissAggressiveLimit = undefined;
      this._controllerEchoMissLimit = undefined;
      this._controllerEchoRpcAggressiveTimeout = undefined;
      this._controllerEchoRpcTimeout = undefined;
      this._controllerHeartbeatMissLimit = undefined;
      this._controllerHeartbeatTimeoutSec = undefined;
      this._controllerRegistrationTimeoutSec = undefined;
      this._controllerRpcTimeout = undefined;
      this._cpustatsInterval = undefined;
      this._ctrlRegPendingMaxWaitTime = undefined;
      this._debugMode = undefined;
      this._dpAggressiveDeqIntervalMsec = undefined;
      this._dpAggressiveEnqIntervalMsec = undefined;
      this._dpBatchSize = undefined;
      this._dpDeqIntervalMsec = undefined;
      this._dpEnqIntervalMsec = undefined;
      this._dpMaxWaitRspTimeSec = undefined;
      this._dpRegPendingMaxWaitTime = undefined;
      this._headlessTimeoutSec = undefined;
      this._ignoreDockerMacChange = undefined;
      this._nsHelperDeqIntervalMsec = undefined;
      this._sdbFlushInterval = undefined;
      this._sdbPipelineSize = undefined;
      this._sdbScanCount = undefined;
      this._seGrpChangeDisruptive = undefined;
      this._sendSeReadyTimeout = undefined;
      this._statesFlushInterval = undefined;
      this._vnicDhcpIpCheckInterval = undefined;
      this._vnicDhcpIpMaxRetries = undefined;
      this._vnicIpDeleteInterval = undefined;
      this._vnicProbeInterval = undefined;
      this._vnicRpcRetryInterval = undefined;
      this._vnicdbCmdHistorySize = undefined;
      this._seagentStatecacheProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerEchoMissAggressiveLimit = value.controllerEchoMissAggressiveLimit;
      this._controllerEchoMissLimit = value.controllerEchoMissLimit;
      this._controllerEchoRpcAggressiveTimeout = value.controllerEchoRpcAggressiveTimeout;
      this._controllerEchoRpcTimeout = value.controllerEchoRpcTimeout;
      this._controllerHeartbeatMissLimit = value.controllerHeartbeatMissLimit;
      this._controllerHeartbeatTimeoutSec = value.controllerHeartbeatTimeoutSec;
      this._controllerRegistrationTimeoutSec = value.controllerRegistrationTimeoutSec;
      this._controllerRpcTimeout = value.controllerRpcTimeout;
      this._cpustatsInterval = value.cpustatsInterval;
      this._ctrlRegPendingMaxWaitTime = value.ctrlRegPendingMaxWaitTime;
      this._debugMode = value.debugMode;
      this._dpAggressiveDeqIntervalMsec = value.dpAggressiveDeqIntervalMsec;
      this._dpAggressiveEnqIntervalMsec = value.dpAggressiveEnqIntervalMsec;
      this._dpBatchSize = value.dpBatchSize;
      this._dpDeqIntervalMsec = value.dpDeqIntervalMsec;
      this._dpEnqIntervalMsec = value.dpEnqIntervalMsec;
      this._dpMaxWaitRspTimeSec = value.dpMaxWaitRspTimeSec;
      this._dpRegPendingMaxWaitTime = value.dpRegPendingMaxWaitTime;
      this._headlessTimeoutSec = value.headlessTimeoutSec;
      this._ignoreDockerMacChange = value.ignoreDockerMacChange;
      this._nsHelperDeqIntervalMsec = value.nsHelperDeqIntervalMsec;
      this._sdbFlushInterval = value.sdbFlushInterval;
      this._sdbPipelineSize = value.sdbPipelineSize;
      this._sdbScanCount = value.sdbScanCount;
      this._seGrpChangeDisruptive = value.seGrpChangeDisruptive;
      this._sendSeReadyTimeout = value.sendSeReadyTimeout;
      this._statesFlushInterval = value.statesFlushInterval;
      this._vnicDhcpIpCheckInterval = value.vnicDhcpIpCheckInterval;
      this._vnicDhcpIpMaxRetries = value.vnicDhcpIpMaxRetries;
      this._vnicIpDeleteInterval = value.vnicIpDeleteInterval;
      this._vnicProbeInterval = value.vnicProbeInterval;
      this._vnicRpcRetryInterval = value.vnicRpcRetryInterval;
      this._vnicdbCmdHistorySize = value.vnicdbCmdHistorySize;
      this._seagentStatecacheProperties.internalValue = value.seagentStatecacheProperties;
    }
  }

  // controller_echo_miss_aggressive_limit - computed: false, optional: true, required: false
  private _controllerEchoMissAggressiveLimit?: string; 
  public get controllerEchoMissAggressiveLimit() {
    return this.getStringAttribute('controller_echo_miss_aggressive_limit');
  }
  public set controllerEchoMissAggressiveLimit(value: string) {
    this._controllerEchoMissAggressiveLimit = value;
  }
  public resetControllerEchoMissAggressiveLimit() {
    this._controllerEchoMissAggressiveLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerEchoMissAggressiveLimitInput() {
    return this._controllerEchoMissAggressiveLimit;
  }

  // controller_echo_miss_limit - computed: false, optional: true, required: false
  private _controllerEchoMissLimit?: string; 
  public get controllerEchoMissLimit() {
    return this.getStringAttribute('controller_echo_miss_limit');
  }
  public set controllerEchoMissLimit(value: string) {
    this._controllerEchoMissLimit = value;
  }
  public resetControllerEchoMissLimit() {
    this._controllerEchoMissLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerEchoMissLimitInput() {
    return this._controllerEchoMissLimit;
  }

  // controller_echo_rpc_aggressive_timeout - computed: false, optional: true, required: false
  private _controllerEchoRpcAggressiveTimeout?: string; 
  public get controllerEchoRpcAggressiveTimeout() {
    return this.getStringAttribute('controller_echo_rpc_aggressive_timeout');
  }
  public set controllerEchoRpcAggressiveTimeout(value: string) {
    this._controllerEchoRpcAggressiveTimeout = value;
  }
  public resetControllerEchoRpcAggressiveTimeout() {
    this._controllerEchoRpcAggressiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerEchoRpcAggressiveTimeoutInput() {
    return this._controllerEchoRpcAggressiveTimeout;
  }

  // controller_echo_rpc_timeout - computed: false, optional: true, required: false
  private _controllerEchoRpcTimeout?: string; 
  public get controllerEchoRpcTimeout() {
    return this.getStringAttribute('controller_echo_rpc_timeout');
  }
  public set controllerEchoRpcTimeout(value: string) {
    this._controllerEchoRpcTimeout = value;
  }
  public resetControllerEchoRpcTimeout() {
    this._controllerEchoRpcTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerEchoRpcTimeoutInput() {
    return this._controllerEchoRpcTimeout;
  }

  // controller_heartbeat_miss_limit - computed: false, optional: true, required: false
  private _controllerHeartbeatMissLimit?: string; 
  public get controllerHeartbeatMissLimit() {
    return this.getStringAttribute('controller_heartbeat_miss_limit');
  }
  public set controllerHeartbeatMissLimit(value: string) {
    this._controllerHeartbeatMissLimit = value;
  }
  public resetControllerHeartbeatMissLimit() {
    this._controllerHeartbeatMissLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHeartbeatMissLimitInput() {
    return this._controllerHeartbeatMissLimit;
  }

  // controller_heartbeat_timeout_sec - computed: false, optional: true, required: false
  private _controllerHeartbeatTimeoutSec?: string; 
  public get controllerHeartbeatTimeoutSec() {
    return this.getStringAttribute('controller_heartbeat_timeout_sec');
  }
  public set controllerHeartbeatTimeoutSec(value: string) {
    this._controllerHeartbeatTimeoutSec = value;
  }
  public resetControllerHeartbeatTimeoutSec() {
    this._controllerHeartbeatTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHeartbeatTimeoutSecInput() {
    return this._controllerHeartbeatTimeoutSec;
  }

  // controller_registration_timeout_sec - computed: false, optional: true, required: false
  private _controllerRegistrationTimeoutSec?: string; 
  public get controllerRegistrationTimeoutSec() {
    return this.getStringAttribute('controller_registration_timeout_sec');
  }
  public set controllerRegistrationTimeoutSec(value: string) {
    this._controllerRegistrationTimeoutSec = value;
  }
  public resetControllerRegistrationTimeoutSec() {
    this._controllerRegistrationTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerRegistrationTimeoutSecInput() {
    return this._controllerRegistrationTimeoutSec;
  }

  // controller_rpc_timeout - computed: false, optional: true, required: false
  private _controllerRpcTimeout?: string; 
  public get controllerRpcTimeout() {
    return this.getStringAttribute('controller_rpc_timeout');
  }
  public set controllerRpcTimeout(value: string) {
    this._controllerRpcTimeout = value;
  }
  public resetControllerRpcTimeout() {
    this._controllerRpcTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerRpcTimeoutInput() {
    return this._controllerRpcTimeout;
  }

  // cpustats_interval - computed: false, optional: true, required: false
  private _cpustatsInterval?: string; 
  public get cpustatsInterval() {
    return this.getStringAttribute('cpustats_interval');
  }
  public set cpustatsInterval(value: string) {
    this._cpustatsInterval = value;
  }
  public resetCpustatsInterval() {
    this._cpustatsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpustatsIntervalInput() {
    return this._cpustatsInterval;
  }

  // ctrl_reg_pending_max_wait_time - computed: false, optional: true, required: false
  private _ctrlRegPendingMaxWaitTime?: string; 
  public get ctrlRegPendingMaxWaitTime() {
    return this.getStringAttribute('ctrl_reg_pending_max_wait_time');
  }
  public set ctrlRegPendingMaxWaitTime(value: string) {
    this._ctrlRegPendingMaxWaitTime = value;
  }
  public resetCtrlRegPendingMaxWaitTime() {
    this._ctrlRegPendingMaxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlRegPendingMaxWaitTimeInput() {
    return this._ctrlRegPendingMaxWaitTime;
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: string; 
  public get debugMode() {
    return this.getStringAttribute('debug_mode');
  }
  public set debugMode(value: string) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // dp_aggressive_deq_interval_msec - computed: false, optional: true, required: false
  private _dpAggressiveDeqIntervalMsec?: string; 
  public get dpAggressiveDeqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_deq_interval_msec');
  }
  public set dpAggressiveDeqIntervalMsec(value: string) {
    this._dpAggressiveDeqIntervalMsec = value;
  }
  public resetDpAggressiveDeqIntervalMsec() {
    this._dpAggressiveDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveDeqIntervalMsecInput() {
    return this._dpAggressiveDeqIntervalMsec;
  }

  // dp_aggressive_enq_interval_msec - computed: false, optional: true, required: false
  private _dpAggressiveEnqIntervalMsec?: string; 
  public get dpAggressiveEnqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_enq_interval_msec');
  }
  public set dpAggressiveEnqIntervalMsec(value: string) {
    this._dpAggressiveEnqIntervalMsec = value;
  }
  public resetDpAggressiveEnqIntervalMsec() {
    this._dpAggressiveEnqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveEnqIntervalMsecInput() {
    return this._dpAggressiveEnqIntervalMsec;
  }

  // dp_batch_size - computed: false, optional: true, required: false
  private _dpBatchSize?: string; 
  public get dpBatchSize() {
    return this.getStringAttribute('dp_batch_size');
  }
  public set dpBatchSize(value: string) {
    this._dpBatchSize = value;
  }
  public resetDpBatchSize() {
    this._dpBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpBatchSizeInput() {
    return this._dpBatchSize;
  }

  // dp_deq_interval_msec - computed: false, optional: true, required: false
  private _dpDeqIntervalMsec?: string; 
  public get dpDeqIntervalMsec() {
    return this.getStringAttribute('dp_deq_interval_msec');
  }
  public set dpDeqIntervalMsec(value: string) {
    this._dpDeqIntervalMsec = value;
  }
  public resetDpDeqIntervalMsec() {
    this._dpDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpDeqIntervalMsecInput() {
    return this._dpDeqIntervalMsec;
  }

  // dp_enq_interval_msec - computed: false, optional: true, required: false
  private _dpEnqIntervalMsec?: string; 
  public get dpEnqIntervalMsec() {
    return this.getStringAttribute('dp_enq_interval_msec');
  }
  public set dpEnqIntervalMsec(value: string) {
    this._dpEnqIntervalMsec = value;
  }
  public resetDpEnqIntervalMsec() {
    this._dpEnqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpEnqIntervalMsecInput() {
    return this._dpEnqIntervalMsec;
  }

  // dp_max_wait_rsp_time_sec - computed: false, optional: true, required: false
  private _dpMaxWaitRspTimeSec?: string; 
  public get dpMaxWaitRspTimeSec() {
    return this.getStringAttribute('dp_max_wait_rsp_time_sec');
  }
  public set dpMaxWaitRspTimeSec(value: string) {
    this._dpMaxWaitRspTimeSec = value;
  }
  public resetDpMaxWaitRspTimeSec() {
    this._dpMaxWaitRspTimeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpMaxWaitRspTimeSecInput() {
    return this._dpMaxWaitRspTimeSec;
  }

  // dp_reg_pending_max_wait_time - computed: false, optional: true, required: false
  private _dpRegPendingMaxWaitTime?: string; 
  public get dpRegPendingMaxWaitTime() {
    return this.getStringAttribute('dp_reg_pending_max_wait_time');
  }
  public set dpRegPendingMaxWaitTime(value: string) {
    this._dpRegPendingMaxWaitTime = value;
  }
  public resetDpRegPendingMaxWaitTime() {
    this._dpRegPendingMaxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpRegPendingMaxWaitTimeInput() {
    return this._dpRegPendingMaxWaitTime;
  }

  // headless_timeout_sec - computed: false, optional: true, required: false
  private _headlessTimeoutSec?: string; 
  public get headlessTimeoutSec() {
    return this.getStringAttribute('headless_timeout_sec');
  }
  public set headlessTimeoutSec(value: string) {
    this._headlessTimeoutSec = value;
  }
  public resetHeadlessTimeoutSec() {
    this._headlessTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessTimeoutSecInput() {
    return this._headlessTimeoutSec;
  }

  // ignore_docker_mac_change - computed: false, optional: true, required: false
  private _ignoreDockerMacChange?: string; 
  public get ignoreDockerMacChange() {
    return this.getStringAttribute('ignore_docker_mac_change');
  }
  public set ignoreDockerMacChange(value: string) {
    this._ignoreDockerMacChange = value;
  }
  public resetIgnoreDockerMacChange() {
    this._ignoreDockerMacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDockerMacChangeInput() {
    return this._ignoreDockerMacChange;
  }

  // ns_helper_deq_interval_msec - computed: false, optional: true, required: false
  private _nsHelperDeqIntervalMsec?: string; 
  public get nsHelperDeqIntervalMsec() {
    return this.getStringAttribute('ns_helper_deq_interval_msec');
  }
  public set nsHelperDeqIntervalMsec(value: string) {
    this._nsHelperDeqIntervalMsec = value;
  }
  public resetNsHelperDeqIntervalMsec() {
    this._nsHelperDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsHelperDeqIntervalMsecInput() {
    return this._nsHelperDeqIntervalMsec;
  }

  // sdb_flush_interval - computed: false, optional: true, required: false
  private _sdbFlushInterval?: string; 
  public get sdbFlushInterval() {
    return this.getStringAttribute('sdb_flush_interval');
  }
  public set sdbFlushInterval(value: string) {
    this._sdbFlushInterval = value;
  }
  public resetSdbFlushInterval() {
    this._sdbFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbFlushIntervalInput() {
    return this._sdbFlushInterval;
  }

  // sdb_pipeline_size - computed: false, optional: true, required: false
  private _sdbPipelineSize?: string; 
  public get sdbPipelineSize() {
    return this.getStringAttribute('sdb_pipeline_size');
  }
  public set sdbPipelineSize(value: string) {
    this._sdbPipelineSize = value;
  }
  public resetSdbPipelineSize() {
    this._sdbPipelineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbPipelineSizeInput() {
    return this._sdbPipelineSize;
  }

  // sdb_scan_count - computed: false, optional: true, required: false
  private _sdbScanCount?: string; 
  public get sdbScanCount() {
    return this.getStringAttribute('sdb_scan_count');
  }
  public set sdbScanCount(value: string) {
    this._sdbScanCount = value;
  }
  public resetSdbScanCount() {
    this._sdbScanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbScanCountInput() {
    return this._sdbScanCount;
  }

  // se_grp_change_disruptive - computed: false, optional: true, required: false
  private _seGrpChangeDisruptive?: string; 
  public get seGrpChangeDisruptive() {
    return this.getStringAttribute('se_grp_change_disruptive');
  }
  public set seGrpChangeDisruptive(value: string) {
    this._seGrpChangeDisruptive = value;
  }
  public resetSeGrpChangeDisruptive() {
    this._seGrpChangeDisruptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGrpChangeDisruptiveInput() {
    return this._seGrpChangeDisruptive;
  }

  // send_se_ready_timeout - computed: false, optional: true, required: false
  private _sendSeReadyTimeout?: string; 
  public get sendSeReadyTimeout() {
    return this.getStringAttribute('send_se_ready_timeout');
  }
  public set sendSeReadyTimeout(value: string) {
    this._sendSeReadyTimeout = value;
  }
  public resetSendSeReadyTimeout() {
    this._sendSeReadyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSeReadyTimeoutInput() {
    return this._sendSeReadyTimeout;
  }

  // states_flush_interval - computed: false, optional: true, required: false
  private _statesFlushInterval?: string; 
  public get statesFlushInterval() {
    return this.getStringAttribute('states_flush_interval');
  }
  public set statesFlushInterval(value: string) {
    this._statesFlushInterval = value;
  }
  public resetStatesFlushInterval() {
    this._statesFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesFlushIntervalInput() {
    return this._statesFlushInterval;
  }

  // vnic_dhcp_ip_check_interval - computed: false, optional: true, required: false
  private _vnicDhcpIpCheckInterval?: string; 
  public get vnicDhcpIpCheckInterval() {
    return this.getStringAttribute('vnic_dhcp_ip_check_interval');
  }
  public set vnicDhcpIpCheckInterval(value: string) {
    this._vnicDhcpIpCheckInterval = value;
  }
  public resetVnicDhcpIpCheckInterval() {
    this._vnicDhcpIpCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicDhcpIpCheckIntervalInput() {
    return this._vnicDhcpIpCheckInterval;
  }

  // vnic_dhcp_ip_max_retries - computed: false, optional: true, required: false
  private _vnicDhcpIpMaxRetries?: string; 
  public get vnicDhcpIpMaxRetries() {
    return this.getStringAttribute('vnic_dhcp_ip_max_retries');
  }
  public set vnicDhcpIpMaxRetries(value: string) {
    this._vnicDhcpIpMaxRetries = value;
  }
  public resetVnicDhcpIpMaxRetries() {
    this._vnicDhcpIpMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicDhcpIpMaxRetriesInput() {
    return this._vnicDhcpIpMaxRetries;
  }

  // vnic_ip_delete_interval - computed: false, optional: true, required: false
  private _vnicIpDeleteInterval?: string; 
  public get vnicIpDeleteInterval() {
    return this.getStringAttribute('vnic_ip_delete_interval');
  }
  public set vnicIpDeleteInterval(value: string) {
    this._vnicIpDeleteInterval = value;
  }
  public resetVnicIpDeleteInterval() {
    this._vnicIpDeleteInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIpDeleteIntervalInput() {
    return this._vnicIpDeleteInterval;
  }

  // vnic_probe_interval - computed: false, optional: true, required: false
  private _vnicProbeInterval?: string; 
  public get vnicProbeInterval() {
    return this.getStringAttribute('vnic_probe_interval');
  }
  public set vnicProbeInterval(value: string) {
    this._vnicProbeInterval = value;
  }
  public resetVnicProbeInterval() {
    this._vnicProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicProbeIntervalInput() {
    return this._vnicProbeInterval;
  }

  // vnic_rpc_retry_interval - computed: false, optional: true, required: false
  private _vnicRpcRetryInterval?: string; 
  public get vnicRpcRetryInterval() {
    return this.getStringAttribute('vnic_rpc_retry_interval');
  }
  public set vnicRpcRetryInterval(value: string) {
    this._vnicRpcRetryInterval = value;
  }
  public resetVnicRpcRetryInterval() {
    this._vnicRpcRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicRpcRetryIntervalInput() {
    return this._vnicRpcRetryInterval;
  }

  // vnicdb_cmd_history_size - computed: false, optional: true, required: false
  private _vnicdbCmdHistorySize?: string; 
  public get vnicdbCmdHistorySize() {
    return this.getStringAttribute('vnicdb_cmd_history_size');
  }
  public set vnicdbCmdHistorySize(value: string) {
    this._vnicdbCmdHistorySize = value;
  }
  public resetVnicdbCmdHistorySize() {
    this._vnicdbCmdHistorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicdbCmdHistorySizeInput() {
    return this._vnicdbCmdHistorySize;
  }

  // seagent_statecache_properties - computed: false, optional: true, required: false
  private _seagentStatecacheProperties = new SepropertiesSeAgentPropertiesSeagentStatecachePropertiesList(this, "seagent_statecache_properties", true);
  public get seagentStatecacheProperties() {
    return this._seagentStatecacheProperties;
  }
  public putSeagentStatecacheProperties(value: SepropertiesSeAgentPropertiesSeagentStatecacheProperties[] | cdktf.IResolvable) {
    this._seagentStatecacheProperties.internalValue = value;
  }
  public resetSeagentStatecacheProperties() {
    this._seagentStatecacheProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seagentStatecachePropertiesInput() {
    return this._seagentStatecacheProperties.internalValue;
  }
}

export class SepropertiesSeAgentPropertiesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeAgentProperties[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeAgentPropertiesOutputReference {
    return new SepropertiesSeAgentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeBootupPropertiesSeDpCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#buf_num Seproperties#buf_num}
  */
  readonly bufNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#buf_size Seproperties#buf_size}
  */
  readonly bufSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#hash_size Seproperties#hash_size}
  */
  readonly hashSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#level_aggressive Seproperties#level_aggressive}
  */
  readonly levelAggressive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#level_normal Seproperties#level_normal}
  */
  readonly levelNormal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#window_size Seproperties#window_size}
  */
  readonly windowSize?: string;
}

export function sepropertiesSeBootupPropertiesSeDpCompressionToTerraform(struct?: SepropertiesSeBootupPropertiesSeDpCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_num: cdktf.stringToTerraform(struct!.bufNum),
    buf_size: cdktf.stringToTerraform(struct!.bufSize),
    hash_size: cdktf.stringToTerraform(struct!.hashSize),
    level_aggressive: cdktf.stringToTerraform(struct!.levelAggressive),
    level_normal: cdktf.stringToTerraform(struct!.levelNormal),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function sepropertiesSeBootupPropertiesSeDpCompressionToHclTerraform(struct?: SepropertiesSeBootupPropertiesSeDpCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_num: {
      value: cdktf.stringToHclTerraform(struct!.bufNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buf_size: {
      value: cdktf.stringToHclTerraform(struct!.bufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_size: {
      value: cdktf.stringToHclTerraform(struct!.hashSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_aggressive: {
      value: cdktf.stringToHclTerraform(struct!.levelAggressive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_normal: {
      value: cdktf.stringToHclTerraform(struct!.levelNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeBootupPropertiesSeDpCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeBootupPropertiesSeDpCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufNum = this._bufNum;
    }
    if (this._bufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufSize = this._bufSize;
    }
    if (this._hashSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSize = this._hashSize;
    }
    if (this._levelAggressive !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelAggressive = this._levelAggressive;
    }
    if (this._levelNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNormal = this._levelNormal;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeBootupPropertiesSeDpCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufNum = undefined;
      this._bufSize = undefined;
      this._hashSize = undefined;
      this._levelAggressive = undefined;
      this._levelNormal = undefined;
      this._windowSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufNum = value.bufNum;
      this._bufSize = value.bufSize;
      this._hashSize = value.hashSize;
      this._levelAggressive = value.levelAggressive;
      this._levelNormal = value.levelNormal;
      this._windowSize = value.windowSize;
    }
  }

  // buf_num - computed: false, optional: true, required: false
  private _bufNum?: string; 
  public get bufNum() {
    return this.getStringAttribute('buf_num');
  }
  public set bufNum(value: string) {
    this._bufNum = value;
  }
  public resetBufNum() {
    this._bufNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufNumInput() {
    return this._bufNum;
  }

  // buf_size - computed: false, optional: true, required: false
  private _bufSize?: string; 
  public get bufSize() {
    return this.getStringAttribute('buf_size');
  }
  public set bufSize(value: string) {
    this._bufSize = value;
  }
  public resetBufSize() {
    this._bufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufSizeInput() {
    return this._bufSize;
  }

  // hash_size - computed: false, optional: true, required: false
  private _hashSize?: string; 
  public get hashSize() {
    return this.getStringAttribute('hash_size');
  }
  public set hashSize(value: string) {
    this._hashSize = value;
  }
  public resetHashSize() {
    this._hashSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSizeInput() {
    return this._hashSize;
  }

  // level_aggressive - computed: false, optional: true, required: false
  private _levelAggressive?: string; 
  public get levelAggressive() {
    return this.getStringAttribute('level_aggressive');
  }
  public set levelAggressive(value: string) {
    this._levelAggressive = value;
  }
  public resetLevelAggressive() {
    this._levelAggressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelAggressiveInput() {
    return this._levelAggressive;
  }

  // level_normal - computed: false, optional: true, required: false
  private _levelNormal?: string; 
  public get levelNormal() {
    return this.getStringAttribute('level_normal');
  }
  public set levelNormal(value: string) {
    this._levelNormal = value;
  }
  public resetLevelNormal() {
    this._levelNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNormalInput() {
    return this._levelNormal;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}

export class SepropertiesSeBootupPropertiesSeDpCompressionList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeBootupPropertiesSeDpCompression[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeBootupPropertiesSeDpCompressionOutputReference {
    return new SepropertiesSeBootupPropertiesSeDpCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeBootupProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#docker_backend_portend Seproperties#docker_backend_portend}
  */
  readonly dockerBackendPortend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#docker_backend_portstart Seproperties#docker_backend_portstart}
  */
  readonly dockerBackendPortstart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#fair_queueing_enabled Seproperties#fair_queueing_enabled}
  */
  readonly fairQueueingEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#geo_db_granularity Seproperties#geo_db_granularity}
  */
  readonly geoDbGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#l7_conns_per_core Seproperties#l7_conns_per_core}
  */
  readonly l7ConnsPerCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#l7_resvd_listen_conns_per_core Seproperties#l7_resvd_listen_conns_per_core}
  */
  readonly l7ResvdListenConnsPerCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_debug_enabled Seproperties#log_agent_debug_enabled}
  */
  readonly logAgentDebugEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_trace_enabled Seproperties#log_agent_trace_enabled}
  */
  readonly logAgentTraceEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_emulated_cores Seproperties#se_emulated_cores}
  */
  readonly seEmulatedCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_ip_encap_ipc Seproperties#se_ip_encap_ipc}
  */
  readonly seIpEncapIpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_l3_encap_ipc Seproperties#se_l3_encap_ipc}
  */
  readonly seL3EncapIpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_app_blocking_dequeue Seproperties#se_log_buffer_app_blocking_dequeue}
  */
  readonly seLogBufferAppBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_applog_size Seproperties#se_log_buffer_applog_size}
  */
  readonly seLogBufferApplogSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_chunk_count Seproperties#se_log_buffer_chunk_count}
  */
  readonly seLogBufferChunkCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_conn_blocking_dequeue Seproperties#se_log_buffer_conn_blocking_dequeue}
  */
  readonly seLogBufferConnBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_connlog_size Seproperties#se_log_buffer_connlog_size}
  */
  readonly seLogBufferConnlogSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_events_blocking_dequeue Seproperties#se_log_buffer_events_blocking_dequeue}
  */
  readonly seLogBufferEventsBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_log_buffer_events_size Seproperties#se_log_buffer_events_size}
  */
  readonly seLogBufferEventsSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ssl_sess_cache_per_vs Seproperties#ssl_sess_cache_per_vs}
  */
  readonly sslSessCachePerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#tcp_syncache_hashsize Seproperties#tcp_syncache_hashsize}
  */
  readonly tcpSyncacheHashsize?: string;
  /**
  * se_dp_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_compression Seproperties#se_dp_compression}
  */
  readonly seDpCompression?: SepropertiesSeBootupPropertiesSeDpCompression[] | cdktf.IResolvable;
}

export function sepropertiesSeBootupPropertiesToTerraform(struct?: SepropertiesSeBootupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_backend_portend: cdktf.stringToTerraform(struct!.dockerBackendPortend),
    docker_backend_portstart: cdktf.stringToTerraform(struct!.dockerBackendPortstart),
    fair_queueing_enabled: cdktf.stringToTerraform(struct!.fairQueueingEnabled),
    geo_db_granularity: cdktf.stringToTerraform(struct!.geoDbGranularity),
    l7_conns_per_core: cdktf.stringToTerraform(struct!.l7ConnsPerCore),
    l7_resvd_listen_conns_per_core: cdktf.stringToTerraform(struct!.l7ResvdListenConnsPerCore),
    log_agent_debug_enabled: cdktf.stringToTerraform(struct!.logAgentDebugEnabled),
    log_agent_trace_enabled: cdktf.stringToTerraform(struct!.logAgentTraceEnabled),
    se_emulated_cores: cdktf.stringToTerraform(struct!.seEmulatedCores),
    se_ip_encap_ipc: cdktf.stringToTerraform(struct!.seIpEncapIpc),
    se_l3_encap_ipc: cdktf.stringToTerraform(struct!.seL3EncapIpc),
    se_log_buffer_app_blocking_dequeue: cdktf.stringToTerraform(struct!.seLogBufferAppBlockingDequeue),
    se_log_buffer_applog_size: cdktf.stringToTerraform(struct!.seLogBufferApplogSize),
    se_log_buffer_chunk_count: cdktf.stringToTerraform(struct!.seLogBufferChunkCount),
    se_log_buffer_conn_blocking_dequeue: cdktf.stringToTerraform(struct!.seLogBufferConnBlockingDequeue),
    se_log_buffer_connlog_size: cdktf.stringToTerraform(struct!.seLogBufferConnlogSize),
    se_log_buffer_events_blocking_dequeue: cdktf.stringToTerraform(struct!.seLogBufferEventsBlockingDequeue),
    se_log_buffer_events_size: cdktf.stringToTerraform(struct!.seLogBufferEventsSize),
    ssl_sess_cache_per_vs: cdktf.stringToTerraform(struct!.sslSessCachePerVs),
    tcp_syncache_hashsize: cdktf.stringToTerraform(struct!.tcpSyncacheHashsize),
    se_dp_compression: cdktf.listMapper(sepropertiesSeBootupPropertiesSeDpCompressionToTerraform, true)(struct!.seDpCompression),
  }
}


export function sepropertiesSeBootupPropertiesToHclTerraform(struct?: SepropertiesSeBootupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_backend_portend: {
      value: cdktf.stringToHclTerraform(struct!.dockerBackendPortend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_backend_portstart: {
      value: cdktf.stringToHclTerraform(struct!.dockerBackendPortstart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fair_queueing_enabled: {
      value: cdktf.stringToHclTerraform(struct!.fairQueueingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_db_granularity: {
      value: cdktf.stringToHclTerraform(struct!.geoDbGranularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l7_conns_per_core: {
      value: cdktf.stringToHclTerraform(struct!.l7ConnsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l7_resvd_listen_conns_per_core: {
      value: cdktf.stringToHclTerraform(struct!.l7ResvdListenConnsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_debug_enabled: {
      value: cdktf.stringToHclTerraform(struct!.logAgentDebugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_trace_enabled: {
      value: cdktf.stringToHclTerraform(struct!.logAgentTraceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_emulated_cores: {
      value: cdktf.stringToHclTerraform(struct!.seEmulatedCores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ip_encap_ipc: {
      value: cdktf.stringToHclTerraform(struct!.seIpEncapIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_l3_encap_ipc: {
      value: cdktf.stringToHclTerraform(struct!.seL3EncapIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_app_blocking_dequeue: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferAppBlockingDequeue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_applog_size: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferApplogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_chunk_count: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferChunkCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_conn_blocking_dequeue: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferConnBlockingDequeue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_connlog_size: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferConnlogSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_events_blocking_dequeue: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferEventsBlockingDequeue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_log_buffer_events_size: {
      value: cdktf.stringToHclTerraform(struct!.seLogBufferEventsSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_sess_cache_per_vs: {
      value: cdktf.stringToHclTerraform(struct!.sslSessCachePerVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syncache_hashsize: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyncacheHashsize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dp_compression: {
      value: cdktf.listMapperHcl(sepropertiesSeBootupPropertiesSeDpCompressionToHclTerraform, true)(struct!.seDpCompression),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeBootupPropertiesSeDpCompressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeBootupPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeBootupProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerBackendPortend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerBackendPortend = this._dockerBackendPortend;
    }
    if (this._dockerBackendPortstart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerBackendPortstart = this._dockerBackendPortstart;
    }
    if (this._fairQueueingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fairQueueingEnabled = this._fairQueueingEnabled;
    }
    if (this._geoDbGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoDbGranularity = this._geoDbGranularity;
    }
    if (this._l7ConnsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7ConnsPerCore = this._l7ConnsPerCore;
    }
    if (this._l7ResvdListenConnsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7ResvdListenConnsPerCore = this._l7ResvdListenConnsPerCore;
    }
    if (this._logAgentDebugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentDebugEnabled = this._logAgentDebugEnabled;
    }
    if (this._logAgentTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentTraceEnabled = this._logAgentTraceEnabled;
    }
    if (this._seEmulatedCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.seEmulatedCores = this._seEmulatedCores;
    }
    if (this._seIpEncapIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.seIpEncapIpc = this._seIpEncapIpc;
    }
    if (this._seL3EncapIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.seL3EncapIpc = this._seL3EncapIpc;
    }
    if (this._seLogBufferAppBlockingDequeue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferAppBlockingDequeue = this._seLogBufferAppBlockingDequeue;
    }
    if (this._seLogBufferApplogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferApplogSize = this._seLogBufferApplogSize;
    }
    if (this._seLogBufferChunkCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferChunkCount = this._seLogBufferChunkCount;
    }
    if (this._seLogBufferConnBlockingDequeue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferConnBlockingDequeue = this._seLogBufferConnBlockingDequeue;
    }
    if (this._seLogBufferConnlogSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferConnlogSize = this._seLogBufferConnlogSize;
    }
    if (this._seLogBufferEventsBlockingDequeue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferEventsBlockingDequeue = this._seLogBufferEventsBlockingDequeue;
    }
    if (this._seLogBufferEventsSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLogBufferEventsSize = this._seLogBufferEventsSize;
    }
    if (this._sslSessCachePerVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessCachePerVs = this._sslSessCachePerVs;
    }
    if (this._tcpSyncacheHashsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncacheHashsize = this._tcpSyncacheHashsize;
    }
    if (this._seDpCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpCompression = this._seDpCompression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeBootupProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerBackendPortend = undefined;
      this._dockerBackendPortstart = undefined;
      this._fairQueueingEnabled = undefined;
      this._geoDbGranularity = undefined;
      this._l7ConnsPerCore = undefined;
      this._l7ResvdListenConnsPerCore = undefined;
      this._logAgentDebugEnabled = undefined;
      this._logAgentTraceEnabled = undefined;
      this._seEmulatedCores = undefined;
      this._seIpEncapIpc = undefined;
      this._seL3EncapIpc = undefined;
      this._seLogBufferAppBlockingDequeue = undefined;
      this._seLogBufferApplogSize = undefined;
      this._seLogBufferChunkCount = undefined;
      this._seLogBufferConnBlockingDequeue = undefined;
      this._seLogBufferConnlogSize = undefined;
      this._seLogBufferEventsBlockingDequeue = undefined;
      this._seLogBufferEventsSize = undefined;
      this._sslSessCachePerVs = undefined;
      this._tcpSyncacheHashsize = undefined;
      this._seDpCompression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerBackendPortend = value.dockerBackendPortend;
      this._dockerBackendPortstart = value.dockerBackendPortstart;
      this._fairQueueingEnabled = value.fairQueueingEnabled;
      this._geoDbGranularity = value.geoDbGranularity;
      this._l7ConnsPerCore = value.l7ConnsPerCore;
      this._l7ResvdListenConnsPerCore = value.l7ResvdListenConnsPerCore;
      this._logAgentDebugEnabled = value.logAgentDebugEnabled;
      this._logAgentTraceEnabled = value.logAgentTraceEnabled;
      this._seEmulatedCores = value.seEmulatedCores;
      this._seIpEncapIpc = value.seIpEncapIpc;
      this._seL3EncapIpc = value.seL3EncapIpc;
      this._seLogBufferAppBlockingDequeue = value.seLogBufferAppBlockingDequeue;
      this._seLogBufferApplogSize = value.seLogBufferApplogSize;
      this._seLogBufferChunkCount = value.seLogBufferChunkCount;
      this._seLogBufferConnBlockingDequeue = value.seLogBufferConnBlockingDequeue;
      this._seLogBufferConnlogSize = value.seLogBufferConnlogSize;
      this._seLogBufferEventsBlockingDequeue = value.seLogBufferEventsBlockingDequeue;
      this._seLogBufferEventsSize = value.seLogBufferEventsSize;
      this._sslSessCachePerVs = value.sslSessCachePerVs;
      this._tcpSyncacheHashsize = value.tcpSyncacheHashsize;
      this._seDpCompression.internalValue = value.seDpCompression;
    }
  }

  // docker_backend_portend - computed: false, optional: true, required: false
  private _dockerBackendPortend?: string; 
  public get dockerBackendPortend() {
    return this.getStringAttribute('docker_backend_portend');
  }
  public set dockerBackendPortend(value: string) {
    this._dockerBackendPortend = value;
  }
  public resetDockerBackendPortend() {
    this._dockerBackendPortend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBackendPortendInput() {
    return this._dockerBackendPortend;
  }

  // docker_backend_portstart - computed: false, optional: true, required: false
  private _dockerBackendPortstart?: string; 
  public get dockerBackendPortstart() {
    return this.getStringAttribute('docker_backend_portstart');
  }
  public set dockerBackendPortstart(value: string) {
    this._dockerBackendPortstart = value;
  }
  public resetDockerBackendPortstart() {
    this._dockerBackendPortstart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBackendPortstartInput() {
    return this._dockerBackendPortstart;
  }

  // fair_queueing_enabled - computed: false, optional: true, required: false
  private _fairQueueingEnabled?: string; 
  public get fairQueueingEnabled() {
    return this.getStringAttribute('fair_queueing_enabled');
  }
  public set fairQueueingEnabled(value: string) {
    this._fairQueueingEnabled = value;
  }
  public resetFairQueueingEnabled() {
    this._fairQueueingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairQueueingEnabledInput() {
    return this._fairQueueingEnabled;
  }

  // geo_db_granularity - computed: false, optional: true, required: false
  private _geoDbGranularity?: string; 
  public get geoDbGranularity() {
    return this.getStringAttribute('geo_db_granularity');
  }
  public set geoDbGranularity(value: string) {
    this._geoDbGranularity = value;
  }
  public resetGeoDbGranularity() {
    this._geoDbGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoDbGranularityInput() {
    return this._geoDbGranularity;
  }

  // l7_conns_per_core - computed: false, optional: true, required: false
  private _l7ConnsPerCore?: string; 
  public get l7ConnsPerCore() {
    return this.getStringAttribute('l7_conns_per_core');
  }
  public set l7ConnsPerCore(value: string) {
    this._l7ConnsPerCore = value;
  }
  public resetL7ConnsPerCore() {
    this._l7ConnsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ConnsPerCoreInput() {
    return this._l7ConnsPerCore;
  }

  // l7_resvd_listen_conns_per_core - computed: false, optional: true, required: false
  private _l7ResvdListenConnsPerCore?: string; 
  public get l7ResvdListenConnsPerCore() {
    return this.getStringAttribute('l7_resvd_listen_conns_per_core');
  }
  public set l7ResvdListenConnsPerCore(value: string) {
    this._l7ResvdListenConnsPerCore = value;
  }
  public resetL7ResvdListenConnsPerCore() {
    this._l7ResvdListenConnsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ResvdListenConnsPerCoreInput() {
    return this._l7ResvdListenConnsPerCore;
  }

  // log_agent_debug_enabled - computed: false, optional: true, required: false
  private _logAgentDebugEnabled?: string; 
  public get logAgentDebugEnabled() {
    return this.getStringAttribute('log_agent_debug_enabled');
  }
  public set logAgentDebugEnabled(value: string) {
    this._logAgentDebugEnabled = value;
  }
  public resetLogAgentDebugEnabled() {
    this._logAgentDebugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentDebugEnabledInput() {
    return this._logAgentDebugEnabled;
  }

  // log_agent_trace_enabled - computed: false, optional: true, required: false
  private _logAgentTraceEnabled?: string; 
  public get logAgentTraceEnabled() {
    return this.getStringAttribute('log_agent_trace_enabled');
  }
  public set logAgentTraceEnabled(value: string) {
    this._logAgentTraceEnabled = value;
  }
  public resetLogAgentTraceEnabled() {
    this._logAgentTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentTraceEnabledInput() {
    return this._logAgentTraceEnabled;
  }

  // se_emulated_cores - computed: false, optional: true, required: false
  private _seEmulatedCores?: string; 
  public get seEmulatedCores() {
    return this.getStringAttribute('se_emulated_cores');
  }
  public set seEmulatedCores(value: string) {
    this._seEmulatedCores = value;
  }
  public resetSeEmulatedCores() {
    this._seEmulatedCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seEmulatedCoresInput() {
    return this._seEmulatedCores;
  }

  // se_ip_encap_ipc - computed: false, optional: true, required: false
  private _seIpEncapIpc?: string; 
  public get seIpEncapIpc() {
    return this.getStringAttribute('se_ip_encap_ipc');
  }
  public set seIpEncapIpc(value: string) {
    this._seIpEncapIpc = value;
  }
  public resetSeIpEncapIpc() {
    this._seIpEncapIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIpEncapIpcInput() {
    return this._seIpEncapIpc;
  }

  // se_l3_encap_ipc - computed: false, optional: true, required: false
  private _seL3EncapIpc?: string; 
  public get seL3EncapIpc() {
    return this.getStringAttribute('se_l3_encap_ipc');
  }
  public set seL3EncapIpc(value: string) {
    this._seL3EncapIpc = value;
  }
  public resetSeL3EncapIpc() {
    this._seL3EncapIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seL3EncapIpcInput() {
    return this._seL3EncapIpc;
  }

  // se_log_buffer_app_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferAppBlockingDequeue?: string; 
  public get seLogBufferAppBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_app_blocking_dequeue');
  }
  public set seLogBufferAppBlockingDequeue(value: string) {
    this._seLogBufferAppBlockingDequeue = value;
  }
  public resetSeLogBufferAppBlockingDequeue() {
    this._seLogBufferAppBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferAppBlockingDequeueInput() {
    return this._seLogBufferAppBlockingDequeue;
  }

  // se_log_buffer_applog_size - computed: false, optional: true, required: false
  private _seLogBufferApplogSize?: string; 
  public get seLogBufferApplogSize() {
    return this.getStringAttribute('se_log_buffer_applog_size');
  }
  public set seLogBufferApplogSize(value: string) {
    this._seLogBufferApplogSize = value;
  }
  public resetSeLogBufferApplogSize() {
    this._seLogBufferApplogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferApplogSizeInput() {
    return this._seLogBufferApplogSize;
  }

  // se_log_buffer_chunk_count - computed: false, optional: true, required: false
  private _seLogBufferChunkCount?: string; 
  public get seLogBufferChunkCount() {
    return this.getStringAttribute('se_log_buffer_chunk_count');
  }
  public set seLogBufferChunkCount(value: string) {
    this._seLogBufferChunkCount = value;
  }
  public resetSeLogBufferChunkCount() {
    this._seLogBufferChunkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferChunkCountInput() {
    return this._seLogBufferChunkCount;
  }

  // se_log_buffer_conn_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferConnBlockingDequeue?: string; 
  public get seLogBufferConnBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_conn_blocking_dequeue');
  }
  public set seLogBufferConnBlockingDequeue(value: string) {
    this._seLogBufferConnBlockingDequeue = value;
  }
  public resetSeLogBufferConnBlockingDequeue() {
    this._seLogBufferConnBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferConnBlockingDequeueInput() {
    return this._seLogBufferConnBlockingDequeue;
  }

  // se_log_buffer_connlog_size - computed: false, optional: true, required: false
  private _seLogBufferConnlogSize?: string; 
  public get seLogBufferConnlogSize() {
    return this.getStringAttribute('se_log_buffer_connlog_size');
  }
  public set seLogBufferConnlogSize(value: string) {
    this._seLogBufferConnlogSize = value;
  }
  public resetSeLogBufferConnlogSize() {
    this._seLogBufferConnlogSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferConnlogSizeInput() {
    return this._seLogBufferConnlogSize;
  }

  // se_log_buffer_events_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferEventsBlockingDequeue?: string; 
  public get seLogBufferEventsBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_events_blocking_dequeue');
  }
  public set seLogBufferEventsBlockingDequeue(value: string) {
    this._seLogBufferEventsBlockingDequeue = value;
  }
  public resetSeLogBufferEventsBlockingDequeue() {
    this._seLogBufferEventsBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferEventsBlockingDequeueInput() {
    return this._seLogBufferEventsBlockingDequeue;
  }

  // se_log_buffer_events_size - computed: false, optional: true, required: false
  private _seLogBufferEventsSize?: string; 
  public get seLogBufferEventsSize() {
    return this.getStringAttribute('se_log_buffer_events_size');
  }
  public set seLogBufferEventsSize(value: string) {
    this._seLogBufferEventsSize = value;
  }
  public resetSeLogBufferEventsSize() {
    this._seLogBufferEventsSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferEventsSizeInput() {
    return this._seLogBufferEventsSize;
  }

  // ssl_sess_cache_per_vs - computed: false, optional: true, required: false
  private _sslSessCachePerVs?: string; 
  public get sslSessCachePerVs() {
    return this.getStringAttribute('ssl_sess_cache_per_vs');
  }
  public set sslSessCachePerVs(value: string) {
    this._sslSessCachePerVs = value;
  }
  public resetSslSessCachePerVs() {
    this._sslSessCachePerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessCachePerVsInput() {
    return this._sslSessCachePerVs;
  }

  // tcp_syncache_hashsize - computed: false, optional: true, required: false
  private _tcpSyncacheHashsize?: string; 
  public get tcpSyncacheHashsize() {
    return this.getStringAttribute('tcp_syncache_hashsize');
  }
  public set tcpSyncacheHashsize(value: string) {
    this._tcpSyncacheHashsize = value;
  }
  public resetTcpSyncacheHashsize() {
    this._tcpSyncacheHashsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncacheHashsizeInput() {
    return this._tcpSyncacheHashsize;
  }

  // se_dp_compression - computed: false, optional: true, required: false
  private _seDpCompression = new SepropertiesSeBootupPropertiesSeDpCompressionList(this, "se_dp_compression", true);
  public get seDpCompression() {
    return this._seDpCompression;
  }
  public putSeDpCompression(value: SepropertiesSeBootupPropertiesSeDpCompression[] | cdktf.IResolvable) {
    this._seDpCompression.internalValue = value;
  }
  public resetSeDpCompression() {
    this._seDpCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpCompressionInput() {
    return this._seDpCompression.internalValue;
  }
}

export class SepropertiesSeBootupPropertiesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeBootupProperties[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeBootupPropertiesOutputReference {
    return new SepropertiesSeBootupPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesAppHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#hdr_match_case Seproperties#hdr_match_case}
  */
  readonly hdrMatchCase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#hdr_name Seproperties#hdr_name}
  */
  readonly hdrName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#hdr_string_op Seproperties#hdr_string_op}
  */
  readonly hdrStringOp: string;
}

export function sepropertiesSeRuntimePropertiesAppHeadersToTerraform(struct?: SepropertiesSeRuntimePropertiesAppHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr_match_case: cdktf.stringToTerraform(struct!.hdrMatchCase),
    hdr_name: cdktf.stringToTerraform(struct!.hdrName),
    hdr_string_op: cdktf.stringToTerraform(struct!.hdrStringOp),
  }
}


export function sepropertiesSeRuntimePropertiesAppHeadersToHclTerraform(struct?: SepropertiesSeRuntimePropertiesAppHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr_match_case: {
      value: cdktf.stringToHclTerraform(struct!.hdrMatchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdr_name: {
      value: cdktf.stringToHclTerraform(struct!.hdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdr_string_op: {
      value: cdktf.stringToHclTerraform(struct!.hdrStringOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesAppHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesAppHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdrMatchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrMatchCase = this._hdrMatchCase;
    }
    if (this._hdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrName = this._hdrName;
    }
    if (this._hdrStringOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrStringOp = this._hdrStringOp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesAppHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdrMatchCase = undefined;
      this._hdrName = undefined;
      this._hdrStringOp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdrMatchCase = value.hdrMatchCase;
      this._hdrName = value.hdrName;
      this._hdrStringOp = value.hdrStringOp;
    }
  }

  // hdr_match_case - computed: false, optional: false, required: true
  private _hdrMatchCase?: string; 
  public get hdrMatchCase() {
    return this.getStringAttribute('hdr_match_case');
  }
  public set hdrMatchCase(value: string) {
    this._hdrMatchCase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrMatchCaseInput() {
    return this._hdrMatchCase;
  }

  // hdr_name - computed: false, optional: false, required: true
  private _hdrName?: string; 
  public get hdrName() {
    return this.getStringAttribute('hdr_name');
  }
  public set hdrName(value: string) {
    this._hdrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrNameInput() {
    return this._hdrName;
  }

  // hdr_string_op - computed: false, optional: false, required: true
  private _hdrStringOp?: string; 
  public get hdrStringOp() {
    return this.getStringAttribute('hdr_string_op');
  }
  public set hdrStringOp(value: string) {
    this._hdrStringOp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrStringOpInput() {
    return this._hdrStringOp;
  }
}

export class SepropertiesSeRuntimePropertiesAppHeadersList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesAppHeaders[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesAppHeadersOutputReference {
    return new SepropertiesSeRuntimePropertiesAppHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesDosProfileThreshInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#attack Seproperties#attack}
  */
  readonly attack: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#max_value Seproperties#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#min_value Seproperties#min_value}
  */
  readonly minValue: string;
}

export function sepropertiesSeRuntimePropertiesDosProfileThreshInfoToTerraform(struct?: SepropertiesSeRuntimePropertiesDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack: cdktf.stringToTerraform(struct!.attack),
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}


export function sepropertiesSeRuntimePropertiesDosProfileThreshInfoToHclTerraform(struct?: SepropertiesSeRuntimePropertiesDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack: {
      value: cdktf.stringToHclTerraform(struct!.attack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesDosProfileThreshInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attack !== undefined) {
      hasAnyValues = true;
      internalValueResult.attack = this._attack;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesDosProfileThreshInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attack = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attack = value.attack;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // attack - computed: false, optional: false, required: true
  private _attack?: string; 
  public get attack() {
    return this.getStringAttribute('attack');
  }
  public set attack(value: string) {
    this._attack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackInput() {
    return this._attack;
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class SepropertiesSeRuntimePropertiesDosProfileThreshInfoList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesDosProfileThreshInfo[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference {
    return new SepropertiesSeRuntimePropertiesDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesDosProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#thresh_period Seproperties#thresh_period}
  */
  readonly threshPeriod: string;
  /**
  * thresh_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#thresh_info Seproperties#thresh_info}
  */
  readonly threshInfo?: SepropertiesSeRuntimePropertiesDosProfileThreshInfo[] | cdktf.IResolvable;
}

export function sepropertiesSeRuntimePropertiesDosProfileToTerraform(struct?: SepropertiesSeRuntimePropertiesDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thresh_period: cdktf.stringToTerraform(struct!.threshPeriod),
    thresh_info: cdktf.listMapper(sepropertiesSeRuntimePropertiesDosProfileThreshInfoToTerraform, true)(struct!.threshInfo),
  }
}


export function sepropertiesSeRuntimePropertiesDosProfileToHclTerraform(struct?: SepropertiesSeRuntimePropertiesDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thresh_period: {
      value: cdktf.stringToHclTerraform(struct!.threshPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresh_info: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesDosProfileThreshInfoToHclTerraform, true)(struct!.threshInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SepropertiesSeRuntimePropertiesDosProfileThreshInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesDosProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshPeriod = this._threshPeriod;
    }
    if (this._threshInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshInfo = this._threshInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesDosProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshPeriod = undefined;
      this._threshInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshPeriod = value.threshPeriod;
      this._threshInfo.internalValue = value.threshInfo;
    }
  }

  // thresh_period - computed: false, optional: false, required: true
  private _threshPeriod?: string; 
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
  public set threshPeriod(value: string) {
    this._threshPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threshPeriodInput() {
    return this._threshPeriod;
  }

  // thresh_info - computed: false, optional: true, required: false
  private _threshInfo = new SepropertiesSeRuntimePropertiesDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }
  public putThreshInfo(value: SepropertiesSeRuntimePropertiesDosProfileThreshInfo[] | cdktf.IResolvable) {
    this._threshInfo.internalValue = value;
  }
  public resetThreshInfo() {
    this._threshInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threshInfoInput() {
    return this._threshInfo.internalValue;
  }
}

export class SepropertiesSeRuntimePropertiesDosProfileList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesDosProfile[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesDosProfileOutputReference {
    return new SepropertiesSeRuntimePropertiesDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesSeDpCompression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#max_low_rtt Seproperties#max_low_rtt}
  */
  readonly maxLowRtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#min_high_rtt Seproperties#min_high_rtt}
  */
  readonly minHighRtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#min_length Seproperties#min_length}
  */
  readonly minLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#mobile_str Seproperties#mobile_str}
  */
  readonly mobileStr?: string[];
}

export function sepropertiesSeRuntimePropertiesSeDpCompressionToTerraform(struct?: SepropertiesSeRuntimePropertiesSeDpCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_low_rtt: cdktf.stringToTerraform(struct!.maxLowRtt),
    min_high_rtt: cdktf.stringToTerraform(struct!.minHighRtt),
    min_length: cdktf.stringToTerraform(struct!.minLength),
    mobile_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mobileStr),
  }
}


export function sepropertiesSeRuntimePropertiesSeDpCompressionToHclTerraform(struct?: SepropertiesSeRuntimePropertiesSeDpCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_low_rtt: {
      value: cdktf.stringToHclTerraform(struct!.maxLowRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_high_rtt: {
      value: cdktf.stringToHclTerraform(struct!.minHighRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_length: {
      value: cdktf.stringToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mobileStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesSeDpCompressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesSeDpCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLowRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLowRtt = this._maxLowRtt;
    }
    if (this._minHighRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHighRtt = this._minHighRtt;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._mobileStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileStr = this._mobileStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesSeDpCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLowRtt = undefined;
      this._minHighRtt = undefined;
      this._minLength = undefined;
      this._mobileStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLowRtt = value.maxLowRtt;
      this._minHighRtt = value.minHighRtt;
      this._minLength = value.minLength;
      this._mobileStr = value.mobileStr;
    }
  }

  // max_low_rtt - computed: false, optional: true, required: false
  private _maxLowRtt?: string; 
  public get maxLowRtt() {
    return this.getStringAttribute('max_low_rtt');
  }
  public set maxLowRtt(value: string) {
    this._maxLowRtt = value;
  }
  public resetMaxLowRtt() {
    this._maxLowRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLowRttInput() {
    return this._maxLowRtt;
  }

  // min_high_rtt - computed: false, optional: true, required: false
  private _minHighRtt?: string; 
  public get minHighRtt() {
    return this.getStringAttribute('min_high_rtt');
  }
  public set minHighRtt(value: string) {
    this._minHighRtt = value;
  }
  public resetMinHighRtt() {
    this._minHighRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHighRttInput() {
    return this._minHighRtt;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // mobile_str - computed: false, optional: true, required: false
  private _mobileStr?: string[]; 
  public get mobileStr() {
    return this.getListAttribute('mobile_str');
  }
  public set mobileStr(value: string[]) {
    this._mobileStr = value;
  }
  public resetMobileStr() {
    this._mobileStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileStrInput() {
    return this._mobileStr;
  }
}

export class SepropertiesSeRuntimePropertiesSeDpCompressionList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesSeDpCompression[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesSeDpCompressionOutputReference {
    return new SepropertiesSeRuntimePropertiesSeDpCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesSeRateLimiters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#arp_rl Seproperties#arp_rl}
  */
  readonly arpRl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#default_rl Seproperties#default_rl}
  */
  readonly defaultRl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#flow_probe_rl Seproperties#flow_probe_rl}
  */
  readonly flowProbeRl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#icmp_rl Seproperties#icmp_rl}
  */
  readonly icmpRl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#icmp_rsp_rl Seproperties#icmp_rsp_rl}
  */
  readonly icmpRspRl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#rst_rl Seproperties#rst_rl}
  */
  readonly rstRl?: string;
}

export function sepropertiesSeRuntimePropertiesSeRateLimitersToTerraform(struct?: SepropertiesSeRuntimePropertiesSeRateLimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp_rl: cdktf.stringToTerraform(struct!.arpRl),
    default_rl: cdktf.stringToTerraform(struct!.defaultRl),
    flow_probe_rl: cdktf.stringToTerraform(struct!.flowProbeRl),
    icmp_rl: cdktf.stringToTerraform(struct!.icmpRl),
    icmp_rsp_rl: cdktf.stringToTerraform(struct!.icmpRspRl),
    rst_rl: cdktf.stringToTerraform(struct!.rstRl),
  }
}


export function sepropertiesSeRuntimePropertiesSeRateLimitersToHclTerraform(struct?: SepropertiesSeRuntimePropertiesSeRateLimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp_rl: {
      value: cdktf.stringToHclTerraform(struct!.arpRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_rl: {
      value: cdktf.stringToHclTerraform(struct!.defaultRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_probe_rl: {
      value: cdktf.stringToHclTerraform(struct!.flowProbeRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_rl: {
      value: cdktf.stringToHclTerraform(struct!.icmpRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_rsp_rl: {
      value: cdktf.stringToHclTerraform(struct!.icmpRspRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rst_rl: {
      value: cdktf.stringToHclTerraform(struct!.rstRl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesSeRateLimitersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesSeRateLimiters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arpRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpRl = this._arpRl;
    }
    if (this._defaultRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRl = this._defaultRl;
    }
    if (this._flowProbeRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowProbeRl = this._flowProbeRl;
    }
    if (this._icmpRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRl = this._icmpRl;
    }
    if (this._icmpRspRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRspRl = this._icmpRspRl;
    }
    if (this._rstRl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstRl = this._rstRl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesSeRateLimiters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arpRl = undefined;
      this._defaultRl = undefined;
      this._flowProbeRl = undefined;
      this._icmpRl = undefined;
      this._icmpRspRl = undefined;
      this._rstRl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arpRl = value.arpRl;
      this._defaultRl = value.defaultRl;
      this._flowProbeRl = value.flowProbeRl;
      this._icmpRl = value.icmpRl;
      this._icmpRspRl = value.icmpRspRl;
      this._rstRl = value.rstRl;
    }
  }

  // arp_rl - computed: false, optional: true, required: false
  private _arpRl?: string; 
  public get arpRl() {
    return this.getStringAttribute('arp_rl');
  }
  public set arpRl(value: string) {
    this._arpRl = value;
  }
  public resetArpRl() {
    this._arpRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpRlInput() {
    return this._arpRl;
  }

  // default_rl - computed: false, optional: true, required: false
  private _defaultRl?: string; 
  public get defaultRl() {
    return this.getStringAttribute('default_rl');
  }
  public set defaultRl(value: string) {
    this._defaultRl = value;
  }
  public resetDefaultRl() {
    this._defaultRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRlInput() {
    return this._defaultRl;
  }

  // flow_probe_rl - computed: false, optional: true, required: false
  private _flowProbeRl?: string; 
  public get flowProbeRl() {
    return this.getStringAttribute('flow_probe_rl');
  }
  public set flowProbeRl(value: string) {
    this._flowProbeRl = value;
  }
  public resetFlowProbeRl() {
    this._flowProbeRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowProbeRlInput() {
    return this._flowProbeRl;
  }

  // icmp_rl - computed: false, optional: true, required: false
  private _icmpRl?: string; 
  public get icmpRl() {
    return this.getStringAttribute('icmp_rl');
  }
  public set icmpRl(value: string) {
    this._icmpRl = value;
  }
  public resetIcmpRl() {
    this._icmpRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRlInput() {
    return this._icmpRl;
  }

  // icmp_rsp_rl - computed: false, optional: true, required: false
  private _icmpRspRl?: string; 
  public get icmpRspRl() {
    return this.getStringAttribute('icmp_rsp_rl');
  }
  public set icmpRspRl(value: string) {
    this._icmpRspRl = value;
  }
  public resetIcmpRspRl() {
    this._icmpRspRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRspRlInput() {
    return this._icmpRspRl;
  }

  // rst_rl - computed: false, optional: true, required: false
  private _rstRl?: string; 
  public get rstRl() {
    return this.getStringAttribute('rst_rl');
  }
  public set rstRl(value: string) {
    this._rstRl = value;
  }
  public resetRstRl() {
    this._rstRl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstRlInput() {
    return this._rstRl;
  }
}

export class SepropertiesSeRuntimePropertiesSeRateLimitersList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesSeRateLimiters[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesSeRateLimitersOutputReference {
    return new SepropertiesSeRuntimePropertiesSeRateLimitersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#addr Seproperties#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#type Seproperties#type}
  */
  readonly type: string;
}

export function sepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToTerraform(struct?: SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToHclTerraform(struct?: SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference {
    return new SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesServiceIpSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#mask Seproperties#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ip_addr Seproperties#ip_addr}
  */
  readonly ipAddr: SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr[] | cdktf.IResolvable;
}

export function sepropertiesSeRuntimePropertiesServiceIpSubnetsToTerraform(struct?: SepropertiesSeRuntimePropertiesServiceIpSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(sepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function sepropertiesSeRuntimePropertiesServiceIpSubnetsToHclTerraform(struct?: SepropertiesSeRuntimePropertiesServiceIpSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesServiceIpSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesServiceIpSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SepropertiesSeRuntimePropertiesServiceIpSubnetsIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SepropertiesSeRuntimePropertiesServiceIpSubnetsList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesServiceIpSubnets[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference {
    return new SepropertiesSeRuntimePropertiesServiceIpSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimePropertiesServicePortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#end Seproperties#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#start Seproperties#start}
  */
  readonly start: string;
}

export function sepropertiesSeRuntimePropertiesServicePortRangesToTerraform(struct?: SepropertiesSeRuntimePropertiesServicePortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function sepropertiesSeRuntimePropertiesServicePortRangesToHclTerraform(struct?: SepropertiesSeRuntimePropertiesServicePortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesServicePortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimePropertiesServicePortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimePropertiesServicePortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class SepropertiesSeRuntimePropertiesServicePortRangesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimePropertiesServicePortRanges[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesServicePortRangesOutputReference {
    return new SepropertiesSeRuntimePropertiesServicePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SepropertiesSeRuntimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#admin_ssh_enabled Seproperties#admin_ssh_enabled}
  */
  readonly adminSshEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#baremetal_dispatcher_handles_flows Seproperties#baremetal_dispatcher_handles_flows}
  */
  readonly baremetalDispatcherHandlesFlows?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#connections_lossy_log_rate_limiter_threshold Seproperties#connections_lossy_log_rate_limiter_threshold}
  */
  readonly connectionsLossyLogRateLimiterThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#connections_udfnf_log_rate_limiter_threshold Seproperties#connections_udfnf_log_rate_limiter_threshold}
  */
  readonly connectionsUdfnfLogRateLimiterThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#disable_flow_probes Seproperties#disable_flow_probes}
  */
  readonly disableFlowProbes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#downstream_send_timeout Seproperties#downstream_send_timeout}
  */
  readonly downstreamSendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_aggressive_hb_frequency Seproperties#dp_aggressive_hb_frequency}
  */
  readonly dpAggressiveHbFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_aggressive_hb_timeout_count Seproperties#dp_aggressive_hb_timeout_count}
  */
  readonly dpAggressiveHbTimeoutCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_hb_frequency Seproperties#dp_hb_frequency}
  */
  readonly dpHbFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dp_hb_timeout_count Seproperties#dp_hb_timeout_count}
  */
  readonly dpHbTimeoutCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dupip_frequency Seproperties#dupip_frequency}
  */
  readonly dupipFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dupip_timeout_count Seproperties#dupip_timeout_count}
  */
  readonly dupipTimeoutCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#enable_hsm_log Seproperties#enable_hsm_log}
  */
  readonly enableHsmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#feproxy_vips_enable_proxy_arp Seproperties#feproxy_vips_enable_proxy_arp}
  */
  readonly feproxyVipsEnableProxyArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#flow_table_batch_push_frequency Seproperties#flow_table_batch_push_frequency}
  */
  readonly flowTableBatchPushFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#global_mtu Seproperties#global_mtu}
  */
  readonly globalMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#http_rum_console_log Seproperties#http_rum_console_log}
  */
  readonly httpRumConsoleLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#http_rum_min_content_length Seproperties#http_rum_min_content_length}
  */
  readonly httpRumMinContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#lbaction_num_requests_to_dispatch Seproperties#lbaction_num_requests_to_dispatch}
  */
  readonly lbactionNumRequestsToDispatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#lbaction_rq_per_request_max_retries Seproperties#lbaction_rq_per_request_max_retries}
  */
  readonly lbactionRqPerRequestMaxRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_compress_logs Seproperties#log_agent_compress_logs}
  */
  readonly logAgentCompressLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_file_sz_appl Seproperties#log_agent_file_sz_appl}
  */
  readonly logAgentFileSzAppl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_file_sz_conn Seproperties#log_agent_file_sz_conn}
  */
  readonly logAgentFileSzConn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_file_sz_debug Seproperties#log_agent_file_sz_debug}
  */
  readonly logAgentFileSzDebug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_file_sz_event Seproperties#log_agent_file_sz_event}
  */
  readonly logAgentFileSzEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_log_storage_min_sz Seproperties#log_agent_log_storage_min_sz}
  */
  readonly logAgentLogStorageMinSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_max_concurrent_rsync Seproperties#log_agent_max_concurrent_rsync}
  */
  readonly logAgentMaxConcurrentRsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_max_storage_excess_percent Seproperties#log_agent_max_storage_excess_percent}
  */
  readonly logAgentMaxStorageExcessPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_max_storage_ignore_percent Seproperties#log_agent_max_storage_ignore_percent}
  */
  readonly logAgentMaxStorageIgnorePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_min_storage_per_vs Seproperties#log_agent_min_storage_per_vs}
  */
  readonly logAgentMinStoragePerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_sleep_interval Seproperties#log_agent_sleep_interval}
  */
  readonly logAgentSleepInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_agent_unknown_vs_timer Seproperties#log_agent_unknown_vs_timer}
  */
  readonly logAgentUnknownVsTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#log_message_max_file_list_size Seproperties#log_message_max_file_list_size}
  */
  readonly logMessageMaxFileListSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#ngx_free_connection_stack Seproperties#ngx_free_connection_stack}
  */
  readonly ngxFreeConnectionStack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#persistence_mem_max Seproperties#persistence_mem_max}
  */
  readonly persistenceMemMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#scaleout_udp_per_pkt Seproperties#scaleout_udp_per_pkt}
  */
  readonly scaleoutUdpPerPkt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_bind_timeout Seproperties#se_auth_ldap_bind_timeout}
  */
  readonly seAuthLdapBindTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_cache_size Seproperties#se_auth_ldap_cache_size}
  */
  readonly seAuthLdapCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_connect_timeout Seproperties#se_auth_ldap_connect_timeout}
  */
  readonly seAuthLdapConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_conns_per_server Seproperties#se_auth_ldap_conns_per_server}
  */
  readonly seAuthLdapConnsPerServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_reconnect_timeout Seproperties#se_auth_ldap_reconnect_timeout}
  */
  readonly seAuthLdapReconnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_request_timeout Seproperties#se_auth_ldap_request_timeout}
  */
  readonly seAuthLdapRequestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_auth_ldap_servers_failover_only Seproperties#se_auth_ldap_servers_failover_only}
  */
  readonly seAuthLdapServersFailoverOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_hm_drops Seproperties#se_dp_hm_drops}
  */
  readonly seDpHmDrops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_if_state_poll_interval Seproperties#se_dp_if_state_poll_interval}
  */
  readonly seDpIfStatePollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_log_nf_enqueue_percent Seproperties#se_dp_log_nf_enqueue_percent}
  */
  readonly seDpLogNfEnqueuePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_log_udf_enqueue_percent Seproperties#se_dp_log_udf_enqueue_percent}
  */
  readonly seDpLogUdfEnqueuePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dump_core_on_assert Seproperties#se_dump_core_on_assert}
  */
  readonly seDumpCoreOnAssert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_handle_interface_routes Seproperties#se_handle_interface_routes}
  */
  readonly seHandleInterfaceRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_hb_persist_fudge_bits Seproperties#se_hb_persist_fudge_bits}
  */
  readonly seHbPersistFudgeBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_mac_error_threshold_to_disable_promiscious Seproperties#se_mac_error_threshold_to_disable_promiscious}
  */
  readonly seMacErrorThresholdToDisablePromiscious?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_memory_poison Seproperties#se_memory_poison}
  */
  readonly seMemoryPoison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_metrics_interval Seproperties#se_metrics_interval}
  */
  readonly seMetricsInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_metrics_rt_enabled Seproperties#se_metrics_rt_enabled}
  */
  readonly seMetricsRtEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_metrics_rt_interval Seproperties#se_metrics_rt_interval}
  */
  readonly seMetricsRtInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_packet_buffer_max Seproperties#se_packet_buffer_max}
  */
  readonly sePacketBufferMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_random_tcp_drops Seproperties#se_random_tcp_drops}
  */
  readonly seRandomTcpDrops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#services_accessible_all_interfaces Seproperties#services_accessible_all_interfaces}
  */
  readonly servicesAccessibleAllInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#tcp_syncache_max_retransmit_default Seproperties#tcp_syncache_max_retransmit_default}
  */
  readonly tcpSyncacheMaxRetransmitDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_connect_timeout Seproperties#upstream_connect_timeout}
  */
  readonly upstreamConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_connpool_cache_thresh Seproperties#upstream_connpool_cache_thresh}
  */
  readonly upstreamConnpoolCacheThresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_connpool_conn_idle_thresh_tmo Seproperties#upstream_connpool_conn_idle_thresh_tmo}
  */
  readonly upstreamConnpoolConnIdleThreshTmo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_connpool_core_max_cache Seproperties#upstream_connpool_core_max_cache}
  */
  readonly upstreamConnpoolCoreMaxCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_connpool_enable Seproperties#upstream_connpool_enable}
  */
  readonly upstreamConnpoolEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_keepalive Seproperties#upstream_keepalive}
  */
  readonly upstreamKeepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_read_timeout Seproperties#upstream_read_timeout}
  */
  readonly upstreamReadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#upstream_send_timeout Seproperties#upstream_send_timeout}
  */
  readonly upstreamSendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#user_defined_metric_age Seproperties#user_defined_metric_age}
  */
  readonly userDefinedMetricAge?: string;
  /**
  * app_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#app_headers Seproperties#app_headers}
  */
  readonly appHeaders?: SepropertiesSeRuntimePropertiesAppHeaders[] | cdktf.IResolvable;
  /**
  * dos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#dos_profile Seproperties#dos_profile}
  */
  readonly dosProfile?: SepropertiesSeRuntimePropertiesDosProfile[] | cdktf.IResolvable;
  /**
  * se_dp_compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_dp_compression Seproperties#se_dp_compression}
  */
  readonly seDpCompression?: SepropertiesSeRuntimePropertiesSeDpCompression[] | cdktf.IResolvable;
  /**
  * se_rate_limiters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#se_rate_limiters Seproperties#se_rate_limiters}
  */
  readonly seRateLimiters?: SepropertiesSeRuntimePropertiesSeRateLimiters[] | cdktf.IResolvable;
  /**
  * service_ip_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#service_ip_subnets Seproperties#service_ip_subnets}
  */
  readonly serviceIpSubnets?: SepropertiesSeRuntimePropertiesServiceIpSubnets[] | cdktf.IResolvable;
  /**
  * service_port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#service_port_ranges Seproperties#service_port_ranges}
  */
  readonly servicePortRanges?: SepropertiesSeRuntimePropertiesServicePortRanges[] | cdktf.IResolvable;
}

export function sepropertiesSeRuntimePropertiesToTerraform(struct?: SepropertiesSeRuntimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ssh_enabled: cdktf.stringToTerraform(struct!.adminSshEnabled),
    baremetal_dispatcher_handles_flows: cdktf.stringToTerraform(struct!.baremetalDispatcherHandlesFlows),
    connections_lossy_log_rate_limiter_threshold: cdktf.stringToTerraform(struct!.connectionsLossyLogRateLimiterThreshold),
    connections_udfnf_log_rate_limiter_threshold: cdktf.stringToTerraform(struct!.connectionsUdfnfLogRateLimiterThreshold),
    disable_flow_probes: cdktf.stringToTerraform(struct!.disableFlowProbes),
    downstream_send_timeout: cdktf.stringToTerraform(struct!.downstreamSendTimeout),
    dp_aggressive_hb_frequency: cdktf.stringToTerraform(struct!.dpAggressiveHbFrequency),
    dp_aggressive_hb_timeout_count: cdktf.stringToTerraform(struct!.dpAggressiveHbTimeoutCount),
    dp_hb_frequency: cdktf.stringToTerraform(struct!.dpHbFrequency),
    dp_hb_timeout_count: cdktf.stringToTerraform(struct!.dpHbTimeoutCount),
    dupip_frequency: cdktf.stringToTerraform(struct!.dupipFrequency),
    dupip_timeout_count: cdktf.stringToTerraform(struct!.dupipTimeoutCount),
    enable_hsm_log: cdktf.stringToTerraform(struct!.enableHsmLog),
    feproxy_vips_enable_proxy_arp: cdktf.stringToTerraform(struct!.feproxyVipsEnableProxyArp),
    flow_table_batch_push_frequency: cdktf.stringToTerraform(struct!.flowTableBatchPushFrequency),
    global_mtu: cdktf.stringToTerraform(struct!.globalMtu),
    http_rum_console_log: cdktf.stringToTerraform(struct!.httpRumConsoleLog),
    http_rum_min_content_length: cdktf.stringToTerraform(struct!.httpRumMinContentLength),
    lbaction_num_requests_to_dispatch: cdktf.stringToTerraform(struct!.lbactionNumRequestsToDispatch),
    lbaction_rq_per_request_max_retries: cdktf.stringToTerraform(struct!.lbactionRqPerRequestMaxRetries),
    log_agent_compress_logs: cdktf.stringToTerraform(struct!.logAgentCompressLogs),
    log_agent_file_sz_appl: cdktf.stringToTerraform(struct!.logAgentFileSzAppl),
    log_agent_file_sz_conn: cdktf.stringToTerraform(struct!.logAgentFileSzConn),
    log_agent_file_sz_debug: cdktf.stringToTerraform(struct!.logAgentFileSzDebug),
    log_agent_file_sz_event: cdktf.stringToTerraform(struct!.logAgentFileSzEvent),
    log_agent_log_storage_min_sz: cdktf.stringToTerraform(struct!.logAgentLogStorageMinSz),
    log_agent_max_concurrent_rsync: cdktf.stringToTerraform(struct!.logAgentMaxConcurrentRsync),
    log_agent_max_storage_excess_percent: cdktf.stringToTerraform(struct!.logAgentMaxStorageExcessPercent),
    log_agent_max_storage_ignore_percent: cdktf.stringToTerraform(struct!.logAgentMaxStorageIgnorePercent),
    log_agent_min_storage_per_vs: cdktf.stringToTerraform(struct!.logAgentMinStoragePerVs),
    log_agent_sleep_interval: cdktf.stringToTerraform(struct!.logAgentSleepInterval),
    log_agent_unknown_vs_timer: cdktf.stringToTerraform(struct!.logAgentUnknownVsTimer),
    log_message_max_file_list_size: cdktf.stringToTerraform(struct!.logMessageMaxFileListSize),
    ngx_free_connection_stack: cdktf.stringToTerraform(struct!.ngxFreeConnectionStack),
    persistence_mem_max: cdktf.stringToTerraform(struct!.persistenceMemMax),
    scaleout_udp_per_pkt: cdktf.stringToTerraform(struct!.scaleoutUdpPerPkt),
    se_auth_ldap_bind_timeout: cdktf.stringToTerraform(struct!.seAuthLdapBindTimeout),
    se_auth_ldap_cache_size: cdktf.stringToTerraform(struct!.seAuthLdapCacheSize),
    se_auth_ldap_connect_timeout: cdktf.stringToTerraform(struct!.seAuthLdapConnectTimeout),
    se_auth_ldap_conns_per_server: cdktf.stringToTerraform(struct!.seAuthLdapConnsPerServer),
    se_auth_ldap_reconnect_timeout: cdktf.stringToTerraform(struct!.seAuthLdapReconnectTimeout),
    se_auth_ldap_request_timeout: cdktf.stringToTerraform(struct!.seAuthLdapRequestTimeout),
    se_auth_ldap_servers_failover_only: cdktf.stringToTerraform(struct!.seAuthLdapServersFailoverOnly),
    se_dp_hm_drops: cdktf.stringToTerraform(struct!.seDpHmDrops),
    se_dp_if_state_poll_interval: cdktf.stringToTerraform(struct!.seDpIfStatePollInterval),
    se_dp_log_nf_enqueue_percent: cdktf.stringToTerraform(struct!.seDpLogNfEnqueuePercent),
    se_dp_log_udf_enqueue_percent: cdktf.stringToTerraform(struct!.seDpLogUdfEnqueuePercent),
    se_dump_core_on_assert: cdktf.stringToTerraform(struct!.seDumpCoreOnAssert),
    se_handle_interface_routes: cdktf.stringToTerraform(struct!.seHandleInterfaceRoutes),
    se_hb_persist_fudge_bits: cdktf.stringToTerraform(struct!.seHbPersistFudgeBits),
    se_mac_error_threshold_to_disable_promiscious: cdktf.stringToTerraform(struct!.seMacErrorThresholdToDisablePromiscious),
    se_memory_poison: cdktf.stringToTerraform(struct!.seMemoryPoison),
    se_metrics_interval: cdktf.stringToTerraform(struct!.seMetricsInterval),
    se_metrics_rt_enabled: cdktf.stringToTerraform(struct!.seMetricsRtEnabled),
    se_metrics_rt_interval: cdktf.stringToTerraform(struct!.seMetricsRtInterval),
    se_packet_buffer_max: cdktf.stringToTerraform(struct!.sePacketBufferMax),
    se_random_tcp_drops: cdktf.stringToTerraform(struct!.seRandomTcpDrops),
    services_accessible_all_interfaces: cdktf.stringToTerraform(struct!.servicesAccessibleAllInterfaces),
    tcp_syncache_max_retransmit_default: cdktf.stringToTerraform(struct!.tcpSyncacheMaxRetransmitDefault),
    upstream_connect_timeout: cdktf.stringToTerraform(struct!.upstreamConnectTimeout),
    upstream_connpool_cache_thresh: cdktf.stringToTerraform(struct!.upstreamConnpoolCacheThresh),
    upstream_connpool_conn_idle_thresh_tmo: cdktf.stringToTerraform(struct!.upstreamConnpoolConnIdleThreshTmo),
    upstream_connpool_core_max_cache: cdktf.stringToTerraform(struct!.upstreamConnpoolCoreMaxCache),
    upstream_connpool_enable: cdktf.stringToTerraform(struct!.upstreamConnpoolEnable),
    upstream_keepalive: cdktf.stringToTerraform(struct!.upstreamKeepalive),
    upstream_read_timeout: cdktf.stringToTerraform(struct!.upstreamReadTimeout),
    upstream_send_timeout: cdktf.stringToTerraform(struct!.upstreamSendTimeout),
    user_defined_metric_age: cdktf.stringToTerraform(struct!.userDefinedMetricAge),
    app_headers: cdktf.listMapper(sepropertiesSeRuntimePropertiesAppHeadersToTerraform, true)(struct!.appHeaders),
    dos_profile: cdktf.listMapper(sepropertiesSeRuntimePropertiesDosProfileToTerraform, true)(struct!.dosProfile),
    se_dp_compression: cdktf.listMapper(sepropertiesSeRuntimePropertiesSeDpCompressionToTerraform, true)(struct!.seDpCompression),
    se_rate_limiters: cdktf.listMapper(sepropertiesSeRuntimePropertiesSeRateLimitersToTerraform, true)(struct!.seRateLimiters),
    service_ip_subnets: cdktf.listMapper(sepropertiesSeRuntimePropertiesServiceIpSubnetsToTerraform, true)(struct!.serviceIpSubnets),
    service_port_ranges: cdktf.listMapper(sepropertiesSeRuntimePropertiesServicePortRangesToTerraform, true)(struct!.servicePortRanges),
  }
}


export function sepropertiesSeRuntimePropertiesToHclTerraform(struct?: SepropertiesSeRuntimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ssh_enabled: {
      value: cdktf.stringToHclTerraform(struct!.adminSshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    baremetal_dispatcher_handles_flows: {
      value: cdktf.stringToHclTerraform(struct!.baremetalDispatcherHandlesFlows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections_lossy_log_rate_limiter_threshold: {
      value: cdktf.stringToHclTerraform(struct!.connectionsLossyLogRateLimiterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections_udfnf_log_rate_limiter_threshold: {
      value: cdktf.stringToHclTerraform(struct!.connectionsUdfnfLogRateLimiterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_flow_probes: {
      value: cdktf.stringToHclTerraform(struct!.disableFlowProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.downstreamSendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_aggressive_hb_frequency: {
      value: cdktf.stringToHclTerraform(struct!.dpAggressiveHbFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_aggressive_hb_timeout_count: {
      value: cdktf.stringToHclTerraform(struct!.dpAggressiveHbTimeoutCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_hb_frequency: {
      value: cdktf.stringToHclTerraform(struct!.dpHbFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp_hb_timeout_count: {
      value: cdktf.stringToHclTerraform(struct!.dpHbTimeoutCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dupip_frequency: {
      value: cdktf.stringToHclTerraform(struct!.dupipFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dupip_timeout_count: {
      value: cdktf.stringToHclTerraform(struct!.dupipTimeoutCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_hsm_log: {
      value: cdktf.stringToHclTerraform(struct!.enableHsmLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feproxy_vips_enable_proxy_arp: {
      value: cdktf.stringToHclTerraform(struct!.feproxyVipsEnableProxyArp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_table_batch_push_frequency: {
      value: cdktf.stringToHclTerraform(struct!.flowTableBatchPushFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_mtu: {
      value: cdktf.stringToHclTerraform(struct!.globalMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_rum_console_log: {
      value: cdktf.stringToHclTerraform(struct!.httpRumConsoleLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_rum_min_content_length: {
      value: cdktf.stringToHclTerraform(struct!.httpRumMinContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lbaction_num_requests_to_dispatch: {
      value: cdktf.stringToHclTerraform(struct!.lbactionNumRequestsToDispatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lbaction_rq_per_request_max_retries: {
      value: cdktf.stringToHclTerraform(struct!.lbactionRqPerRequestMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_compress_logs: {
      value: cdktf.stringToHclTerraform(struct!.logAgentCompressLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_file_sz_appl: {
      value: cdktf.stringToHclTerraform(struct!.logAgentFileSzAppl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_file_sz_conn: {
      value: cdktf.stringToHclTerraform(struct!.logAgentFileSzConn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_file_sz_debug: {
      value: cdktf.stringToHclTerraform(struct!.logAgentFileSzDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_file_sz_event: {
      value: cdktf.stringToHclTerraform(struct!.logAgentFileSzEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_log_storage_min_sz: {
      value: cdktf.stringToHclTerraform(struct!.logAgentLogStorageMinSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_max_concurrent_rsync: {
      value: cdktf.stringToHclTerraform(struct!.logAgentMaxConcurrentRsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_max_storage_excess_percent: {
      value: cdktf.stringToHclTerraform(struct!.logAgentMaxStorageExcessPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_max_storage_ignore_percent: {
      value: cdktf.stringToHclTerraform(struct!.logAgentMaxStorageIgnorePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_min_storage_per_vs: {
      value: cdktf.stringToHclTerraform(struct!.logAgentMinStoragePerVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_sleep_interval: {
      value: cdktf.stringToHclTerraform(struct!.logAgentSleepInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_agent_unknown_vs_timer: {
      value: cdktf.stringToHclTerraform(struct!.logAgentUnknownVsTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_message_max_file_list_size: {
      value: cdktf.stringToHclTerraform(struct!.logMessageMaxFileListSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngx_free_connection_stack: {
      value: cdktf.stringToHclTerraform(struct!.ngxFreeConnectionStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistence_mem_max: {
      value: cdktf.stringToHclTerraform(struct!.persistenceMemMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaleout_udp_per_pkt: {
      value: cdktf.stringToHclTerraform(struct!.scaleoutUdpPerPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_bind_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapBindTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_conns_per_server: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapConnsPerServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_reconnect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapReconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_servers_failover_only: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapServersFailoverOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dp_hm_drops: {
      value: cdktf.stringToHclTerraform(struct!.seDpHmDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dp_if_state_poll_interval: {
      value: cdktf.stringToHclTerraform(struct!.seDpIfStatePollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dp_log_nf_enqueue_percent: {
      value: cdktf.stringToHclTerraform(struct!.seDpLogNfEnqueuePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dp_log_udf_enqueue_percent: {
      value: cdktf.stringToHclTerraform(struct!.seDpLogUdfEnqueuePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_dump_core_on_assert: {
      value: cdktf.stringToHclTerraform(struct!.seDumpCoreOnAssert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_handle_interface_routes: {
      value: cdktf.stringToHclTerraform(struct!.seHandleInterfaceRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_hb_persist_fudge_bits: {
      value: cdktf.stringToHclTerraform(struct!.seHbPersistFudgeBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_mac_error_threshold_to_disable_promiscious: {
      value: cdktf.stringToHclTerraform(struct!.seMacErrorThresholdToDisablePromiscious),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_memory_poison: {
      value: cdktf.stringToHclTerraform(struct!.seMemoryPoison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_metrics_interval: {
      value: cdktf.stringToHclTerraform(struct!.seMetricsInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_metrics_rt_enabled: {
      value: cdktf.stringToHclTerraform(struct!.seMetricsRtEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_metrics_rt_interval: {
      value: cdktf.stringToHclTerraform(struct!.seMetricsRtInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_packet_buffer_max: {
      value: cdktf.stringToHclTerraform(struct!.sePacketBufferMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_random_tcp_drops: {
      value: cdktf.stringToHclTerraform(struct!.seRandomTcpDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_accessible_all_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.servicesAccessibleAllInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syncache_max_retransmit_default: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyncacheMaxRetransmitDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_cache_thresh: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolCacheThresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_conn_idle_thresh_tmo: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolConnIdleThreshTmo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_core_max_cache: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolCoreMaxCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_enable: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_keepalive: {
      value: cdktf.stringToHclTerraform(struct!.upstreamKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upstreamReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.upstreamSendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_defined_metric_age: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedMetricAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_headers: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesAppHeadersToHclTerraform, true)(struct!.appHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "SepropertiesSeRuntimePropertiesAppHeadersList",
    },
    dos_profile: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesDosProfileToHclTerraform, true)(struct!.dosProfile),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeRuntimePropertiesDosProfileList",
    },
    se_dp_compression: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesSeDpCompressionToHclTerraform, true)(struct!.seDpCompression),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeRuntimePropertiesSeDpCompressionList",
    },
    se_rate_limiters: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesSeRateLimitersToHclTerraform, true)(struct!.seRateLimiters),
      isBlock: true,
      type: "set",
      storageClassType: "SepropertiesSeRuntimePropertiesSeRateLimitersList",
    },
    service_ip_subnets: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesServiceIpSubnetsToHclTerraform, true)(struct!.serviceIpSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "SepropertiesSeRuntimePropertiesServiceIpSubnetsList",
    },
    service_port_ranges: {
      value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesServicePortRangesToHclTerraform, true)(struct!.servicePortRanges),
      isBlock: true,
      type: "list",
      storageClassType: "SepropertiesSeRuntimePropertiesServicePortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SepropertiesSeRuntimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SepropertiesSeRuntimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSshEnabled = this._adminSshEnabled;
    }
    if (this._baremetalDispatcherHandlesFlows !== undefined) {
      hasAnyValues = true;
      internalValueResult.baremetalDispatcherHandlesFlows = this._baremetalDispatcherHandlesFlows;
    }
    if (this._connectionsLossyLogRateLimiterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsLossyLogRateLimiterThreshold = this._connectionsLossyLogRateLimiterThreshold;
    }
    if (this._connectionsUdfnfLogRateLimiterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsUdfnfLogRateLimiterThreshold = this._connectionsUdfnfLogRateLimiterThreshold;
    }
    if (this._disableFlowProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFlowProbes = this._disableFlowProbes;
    }
    if (this._downstreamSendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamSendTimeout = this._downstreamSendTimeout;
    }
    if (this._dpAggressiveHbFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpAggressiveHbFrequency = this._dpAggressiveHbFrequency;
    }
    if (this._dpAggressiveHbTimeoutCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpAggressiveHbTimeoutCount = this._dpAggressiveHbTimeoutCount;
    }
    if (this._dpHbFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHbFrequency = this._dpHbFrequency;
    }
    if (this._dpHbTimeoutCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpHbTimeoutCount = this._dpHbTimeoutCount;
    }
    if (this._dupipFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupipFrequency = this._dupipFrequency;
    }
    if (this._dupipTimeoutCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dupipTimeoutCount = this._dupipTimeoutCount;
    }
    if (this._enableHsmLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHsmLog = this._enableHsmLog;
    }
    if (this._feproxyVipsEnableProxyArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.feproxyVipsEnableProxyArp = this._feproxyVipsEnableProxyArp;
    }
    if (this._flowTableBatchPushFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowTableBatchPushFrequency = this._flowTableBatchPushFrequency;
    }
    if (this._globalMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalMtu = this._globalMtu;
    }
    if (this._httpRumConsoleLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRumConsoleLog = this._httpRumConsoleLog;
    }
    if (this._httpRumMinContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRumMinContentLength = this._httpRumMinContentLength;
    }
    if (this._lbactionNumRequestsToDispatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbactionNumRequestsToDispatch = this._lbactionNumRequestsToDispatch;
    }
    if (this._lbactionRqPerRequestMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbactionRqPerRequestMaxRetries = this._lbactionRqPerRequestMaxRetries;
    }
    if (this._logAgentCompressLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentCompressLogs = this._logAgentCompressLogs;
    }
    if (this._logAgentFileSzAppl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentFileSzAppl = this._logAgentFileSzAppl;
    }
    if (this._logAgentFileSzConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentFileSzConn = this._logAgentFileSzConn;
    }
    if (this._logAgentFileSzDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentFileSzDebug = this._logAgentFileSzDebug;
    }
    if (this._logAgentFileSzEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentFileSzEvent = this._logAgentFileSzEvent;
    }
    if (this._logAgentLogStorageMinSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentLogStorageMinSz = this._logAgentLogStorageMinSz;
    }
    if (this._logAgentMaxConcurrentRsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentMaxConcurrentRsync = this._logAgentMaxConcurrentRsync;
    }
    if (this._logAgentMaxStorageExcessPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentMaxStorageExcessPercent = this._logAgentMaxStorageExcessPercent;
    }
    if (this._logAgentMaxStorageIgnorePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentMaxStorageIgnorePercent = this._logAgentMaxStorageIgnorePercent;
    }
    if (this._logAgentMinStoragePerVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentMinStoragePerVs = this._logAgentMinStoragePerVs;
    }
    if (this._logAgentSleepInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentSleepInterval = this._logAgentSleepInterval;
    }
    if (this._logAgentUnknownVsTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAgentUnknownVsTimer = this._logAgentUnknownVsTimer;
    }
    if (this._logMessageMaxFileListSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMessageMaxFileListSize = this._logMessageMaxFileListSize;
    }
    if (this._ngxFreeConnectionStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngxFreeConnectionStack = this._ngxFreeConnectionStack;
    }
    if (this._persistenceMemMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceMemMax = this._persistenceMemMax;
    }
    if (this._scaleoutUdpPerPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutUdpPerPkt = this._scaleoutUdpPerPkt;
    }
    if (this._seAuthLdapBindTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapBindTimeout = this._seAuthLdapBindTimeout;
    }
    if (this._seAuthLdapCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapCacheSize = this._seAuthLdapCacheSize;
    }
    if (this._seAuthLdapConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapConnectTimeout = this._seAuthLdapConnectTimeout;
    }
    if (this._seAuthLdapConnsPerServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapConnsPerServer = this._seAuthLdapConnsPerServer;
    }
    if (this._seAuthLdapReconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapReconnectTimeout = this._seAuthLdapReconnectTimeout;
    }
    if (this._seAuthLdapRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapRequestTimeout = this._seAuthLdapRequestTimeout;
    }
    if (this._seAuthLdapServersFailoverOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapServersFailoverOnly = this._seAuthLdapServersFailoverOnly;
    }
    if (this._seDpHmDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpHmDrops = this._seDpHmDrops;
    }
    if (this._seDpIfStatePollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpIfStatePollInterval = this._seDpIfStatePollInterval;
    }
    if (this._seDpLogNfEnqueuePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpLogNfEnqueuePercent = this._seDpLogNfEnqueuePercent;
    }
    if (this._seDpLogUdfEnqueuePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpLogUdfEnqueuePercent = this._seDpLogUdfEnqueuePercent;
    }
    if (this._seDumpCoreOnAssert !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDumpCoreOnAssert = this._seDumpCoreOnAssert;
    }
    if (this._seHandleInterfaceRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.seHandleInterfaceRoutes = this._seHandleInterfaceRoutes;
    }
    if (this._seHbPersistFudgeBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.seHbPersistFudgeBits = this._seHbPersistFudgeBits;
    }
    if (this._seMacErrorThresholdToDisablePromiscious !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMacErrorThresholdToDisablePromiscious = this._seMacErrorThresholdToDisablePromiscious;
    }
    if (this._seMemoryPoison !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMemoryPoison = this._seMemoryPoison;
    }
    if (this._seMetricsInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMetricsInterval = this._seMetricsInterval;
    }
    if (this._seMetricsRtEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMetricsRtEnabled = this._seMetricsRtEnabled;
    }
    if (this._seMetricsRtInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMetricsRtInterval = this._seMetricsRtInterval;
    }
    if (this._sePacketBufferMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sePacketBufferMax = this._sePacketBufferMax;
    }
    if (this._seRandomTcpDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRandomTcpDrops = this._seRandomTcpDrops;
    }
    if (this._servicesAccessibleAllInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesAccessibleAllInterfaces = this._servicesAccessibleAllInterfaces;
    }
    if (this._tcpSyncacheMaxRetransmitDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncacheMaxRetransmitDefault = this._tcpSyncacheMaxRetransmitDefault;
    }
    if (this._upstreamConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnectTimeout = this._upstreamConnectTimeout;
    }
    if (this._upstreamConnpoolCacheThresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolCacheThresh = this._upstreamConnpoolCacheThresh;
    }
    if (this._upstreamConnpoolConnIdleThreshTmo !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolConnIdleThreshTmo = this._upstreamConnpoolConnIdleThreshTmo;
    }
    if (this._upstreamConnpoolCoreMaxCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolCoreMaxCache = this._upstreamConnpoolCoreMaxCache;
    }
    if (this._upstreamConnpoolEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolEnable = this._upstreamConnpoolEnable;
    }
    if (this._upstreamKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamKeepalive = this._upstreamKeepalive;
    }
    if (this._upstreamReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamReadTimeout = this._upstreamReadTimeout;
    }
    if (this._upstreamSendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamSendTimeout = this._upstreamSendTimeout;
    }
    if (this._userDefinedMetricAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedMetricAge = this._userDefinedMetricAge;
    }
    if (this._appHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appHeaders = this._appHeaders?.internalValue;
    }
    if (this._dosProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProfile = this._dosProfile?.internalValue;
    }
    if (this._seDpCompression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDpCompression = this._seDpCompression?.internalValue;
    }
    if (this._seRateLimiters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRateLimiters = this._seRateLimiters?.internalValue;
    }
    if (this._serviceIpSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpSubnets = this._serviceIpSubnets?.internalValue;
    }
    if (this._servicePortRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePortRanges = this._servicePortRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SepropertiesSeRuntimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSshEnabled = undefined;
      this._baremetalDispatcherHandlesFlows = undefined;
      this._connectionsLossyLogRateLimiterThreshold = undefined;
      this._connectionsUdfnfLogRateLimiterThreshold = undefined;
      this._disableFlowProbes = undefined;
      this._downstreamSendTimeout = undefined;
      this._dpAggressiveHbFrequency = undefined;
      this._dpAggressiveHbTimeoutCount = undefined;
      this._dpHbFrequency = undefined;
      this._dpHbTimeoutCount = undefined;
      this._dupipFrequency = undefined;
      this._dupipTimeoutCount = undefined;
      this._enableHsmLog = undefined;
      this._feproxyVipsEnableProxyArp = undefined;
      this._flowTableBatchPushFrequency = undefined;
      this._globalMtu = undefined;
      this._httpRumConsoleLog = undefined;
      this._httpRumMinContentLength = undefined;
      this._lbactionNumRequestsToDispatch = undefined;
      this._lbactionRqPerRequestMaxRetries = undefined;
      this._logAgentCompressLogs = undefined;
      this._logAgentFileSzAppl = undefined;
      this._logAgentFileSzConn = undefined;
      this._logAgentFileSzDebug = undefined;
      this._logAgentFileSzEvent = undefined;
      this._logAgentLogStorageMinSz = undefined;
      this._logAgentMaxConcurrentRsync = undefined;
      this._logAgentMaxStorageExcessPercent = undefined;
      this._logAgentMaxStorageIgnorePercent = undefined;
      this._logAgentMinStoragePerVs = undefined;
      this._logAgentSleepInterval = undefined;
      this._logAgentUnknownVsTimer = undefined;
      this._logMessageMaxFileListSize = undefined;
      this._ngxFreeConnectionStack = undefined;
      this._persistenceMemMax = undefined;
      this._scaleoutUdpPerPkt = undefined;
      this._seAuthLdapBindTimeout = undefined;
      this._seAuthLdapCacheSize = undefined;
      this._seAuthLdapConnectTimeout = undefined;
      this._seAuthLdapConnsPerServer = undefined;
      this._seAuthLdapReconnectTimeout = undefined;
      this._seAuthLdapRequestTimeout = undefined;
      this._seAuthLdapServersFailoverOnly = undefined;
      this._seDpHmDrops = undefined;
      this._seDpIfStatePollInterval = undefined;
      this._seDpLogNfEnqueuePercent = undefined;
      this._seDpLogUdfEnqueuePercent = undefined;
      this._seDumpCoreOnAssert = undefined;
      this._seHandleInterfaceRoutes = undefined;
      this._seHbPersistFudgeBits = undefined;
      this._seMacErrorThresholdToDisablePromiscious = undefined;
      this._seMemoryPoison = undefined;
      this._seMetricsInterval = undefined;
      this._seMetricsRtEnabled = undefined;
      this._seMetricsRtInterval = undefined;
      this._sePacketBufferMax = undefined;
      this._seRandomTcpDrops = undefined;
      this._servicesAccessibleAllInterfaces = undefined;
      this._tcpSyncacheMaxRetransmitDefault = undefined;
      this._upstreamConnectTimeout = undefined;
      this._upstreamConnpoolCacheThresh = undefined;
      this._upstreamConnpoolConnIdleThreshTmo = undefined;
      this._upstreamConnpoolCoreMaxCache = undefined;
      this._upstreamConnpoolEnable = undefined;
      this._upstreamKeepalive = undefined;
      this._upstreamReadTimeout = undefined;
      this._upstreamSendTimeout = undefined;
      this._userDefinedMetricAge = undefined;
      this._appHeaders.internalValue = undefined;
      this._dosProfile.internalValue = undefined;
      this._seDpCompression.internalValue = undefined;
      this._seRateLimiters.internalValue = undefined;
      this._serviceIpSubnets.internalValue = undefined;
      this._servicePortRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSshEnabled = value.adminSshEnabled;
      this._baremetalDispatcherHandlesFlows = value.baremetalDispatcherHandlesFlows;
      this._connectionsLossyLogRateLimiterThreshold = value.connectionsLossyLogRateLimiterThreshold;
      this._connectionsUdfnfLogRateLimiterThreshold = value.connectionsUdfnfLogRateLimiterThreshold;
      this._disableFlowProbes = value.disableFlowProbes;
      this._downstreamSendTimeout = value.downstreamSendTimeout;
      this._dpAggressiveHbFrequency = value.dpAggressiveHbFrequency;
      this._dpAggressiveHbTimeoutCount = value.dpAggressiveHbTimeoutCount;
      this._dpHbFrequency = value.dpHbFrequency;
      this._dpHbTimeoutCount = value.dpHbTimeoutCount;
      this._dupipFrequency = value.dupipFrequency;
      this._dupipTimeoutCount = value.dupipTimeoutCount;
      this._enableHsmLog = value.enableHsmLog;
      this._feproxyVipsEnableProxyArp = value.feproxyVipsEnableProxyArp;
      this._flowTableBatchPushFrequency = value.flowTableBatchPushFrequency;
      this._globalMtu = value.globalMtu;
      this._httpRumConsoleLog = value.httpRumConsoleLog;
      this._httpRumMinContentLength = value.httpRumMinContentLength;
      this._lbactionNumRequestsToDispatch = value.lbactionNumRequestsToDispatch;
      this._lbactionRqPerRequestMaxRetries = value.lbactionRqPerRequestMaxRetries;
      this._logAgentCompressLogs = value.logAgentCompressLogs;
      this._logAgentFileSzAppl = value.logAgentFileSzAppl;
      this._logAgentFileSzConn = value.logAgentFileSzConn;
      this._logAgentFileSzDebug = value.logAgentFileSzDebug;
      this._logAgentFileSzEvent = value.logAgentFileSzEvent;
      this._logAgentLogStorageMinSz = value.logAgentLogStorageMinSz;
      this._logAgentMaxConcurrentRsync = value.logAgentMaxConcurrentRsync;
      this._logAgentMaxStorageExcessPercent = value.logAgentMaxStorageExcessPercent;
      this._logAgentMaxStorageIgnorePercent = value.logAgentMaxStorageIgnorePercent;
      this._logAgentMinStoragePerVs = value.logAgentMinStoragePerVs;
      this._logAgentSleepInterval = value.logAgentSleepInterval;
      this._logAgentUnknownVsTimer = value.logAgentUnknownVsTimer;
      this._logMessageMaxFileListSize = value.logMessageMaxFileListSize;
      this._ngxFreeConnectionStack = value.ngxFreeConnectionStack;
      this._persistenceMemMax = value.persistenceMemMax;
      this._scaleoutUdpPerPkt = value.scaleoutUdpPerPkt;
      this._seAuthLdapBindTimeout = value.seAuthLdapBindTimeout;
      this._seAuthLdapCacheSize = value.seAuthLdapCacheSize;
      this._seAuthLdapConnectTimeout = value.seAuthLdapConnectTimeout;
      this._seAuthLdapConnsPerServer = value.seAuthLdapConnsPerServer;
      this._seAuthLdapReconnectTimeout = value.seAuthLdapReconnectTimeout;
      this._seAuthLdapRequestTimeout = value.seAuthLdapRequestTimeout;
      this._seAuthLdapServersFailoverOnly = value.seAuthLdapServersFailoverOnly;
      this._seDpHmDrops = value.seDpHmDrops;
      this._seDpIfStatePollInterval = value.seDpIfStatePollInterval;
      this._seDpLogNfEnqueuePercent = value.seDpLogNfEnqueuePercent;
      this._seDpLogUdfEnqueuePercent = value.seDpLogUdfEnqueuePercent;
      this._seDumpCoreOnAssert = value.seDumpCoreOnAssert;
      this._seHandleInterfaceRoutes = value.seHandleInterfaceRoutes;
      this._seHbPersistFudgeBits = value.seHbPersistFudgeBits;
      this._seMacErrorThresholdToDisablePromiscious = value.seMacErrorThresholdToDisablePromiscious;
      this._seMemoryPoison = value.seMemoryPoison;
      this._seMetricsInterval = value.seMetricsInterval;
      this._seMetricsRtEnabled = value.seMetricsRtEnabled;
      this._seMetricsRtInterval = value.seMetricsRtInterval;
      this._sePacketBufferMax = value.sePacketBufferMax;
      this._seRandomTcpDrops = value.seRandomTcpDrops;
      this._servicesAccessibleAllInterfaces = value.servicesAccessibleAllInterfaces;
      this._tcpSyncacheMaxRetransmitDefault = value.tcpSyncacheMaxRetransmitDefault;
      this._upstreamConnectTimeout = value.upstreamConnectTimeout;
      this._upstreamConnpoolCacheThresh = value.upstreamConnpoolCacheThresh;
      this._upstreamConnpoolConnIdleThreshTmo = value.upstreamConnpoolConnIdleThreshTmo;
      this._upstreamConnpoolCoreMaxCache = value.upstreamConnpoolCoreMaxCache;
      this._upstreamConnpoolEnable = value.upstreamConnpoolEnable;
      this._upstreamKeepalive = value.upstreamKeepalive;
      this._upstreamReadTimeout = value.upstreamReadTimeout;
      this._upstreamSendTimeout = value.upstreamSendTimeout;
      this._userDefinedMetricAge = value.userDefinedMetricAge;
      this._appHeaders.internalValue = value.appHeaders;
      this._dosProfile.internalValue = value.dosProfile;
      this._seDpCompression.internalValue = value.seDpCompression;
      this._seRateLimiters.internalValue = value.seRateLimiters;
      this._serviceIpSubnets.internalValue = value.serviceIpSubnets;
      this._servicePortRanges.internalValue = value.servicePortRanges;
    }
  }

  // admin_ssh_enabled - computed: false, optional: true, required: false
  private _adminSshEnabled?: string; 
  public get adminSshEnabled() {
    return this.getStringAttribute('admin_ssh_enabled');
  }
  public set adminSshEnabled(value: string) {
    this._adminSshEnabled = value;
  }
  public resetAdminSshEnabled() {
    this._adminSshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshEnabledInput() {
    return this._adminSshEnabled;
  }

  // baremetal_dispatcher_handles_flows - computed: false, optional: true, required: false
  private _baremetalDispatcherHandlesFlows?: string; 
  public get baremetalDispatcherHandlesFlows() {
    return this.getStringAttribute('baremetal_dispatcher_handles_flows');
  }
  public set baremetalDispatcherHandlesFlows(value: string) {
    this._baremetalDispatcherHandlesFlows = value;
  }
  public resetBaremetalDispatcherHandlesFlows() {
    this._baremetalDispatcherHandlesFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baremetalDispatcherHandlesFlowsInput() {
    return this._baremetalDispatcherHandlesFlows;
  }

  // connections_lossy_log_rate_limiter_threshold - computed: false, optional: true, required: false
  private _connectionsLossyLogRateLimiterThreshold?: string; 
  public get connectionsLossyLogRateLimiterThreshold() {
    return this.getStringAttribute('connections_lossy_log_rate_limiter_threshold');
  }
  public set connectionsLossyLogRateLimiterThreshold(value: string) {
    this._connectionsLossyLogRateLimiterThreshold = value;
  }
  public resetConnectionsLossyLogRateLimiterThreshold() {
    this._connectionsLossyLogRateLimiterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsLossyLogRateLimiterThresholdInput() {
    return this._connectionsLossyLogRateLimiterThreshold;
  }

  // connections_udfnf_log_rate_limiter_threshold - computed: false, optional: true, required: false
  private _connectionsUdfnfLogRateLimiterThreshold?: string; 
  public get connectionsUdfnfLogRateLimiterThreshold() {
    return this.getStringAttribute('connections_udfnf_log_rate_limiter_threshold');
  }
  public set connectionsUdfnfLogRateLimiterThreshold(value: string) {
    this._connectionsUdfnfLogRateLimiterThreshold = value;
  }
  public resetConnectionsUdfnfLogRateLimiterThreshold() {
    this._connectionsUdfnfLogRateLimiterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsUdfnfLogRateLimiterThresholdInput() {
    return this._connectionsUdfnfLogRateLimiterThreshold;
  }

  // disable_flow_probes - computed: false, optional: true, required: false
  private _disableFlowProbes?: string; 
  public get disableFlowProbes() {
    return this.getStringAttribute('disable_flow_probes');
  }
  public set disableFlowProbes(value: string) {
    this._disableFlowProbes = value;
  }
  public resetDisableFlowProbes() {
    this._disableFlowProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlowProbesInput() {
    return this._disableFlowProbes;
  }

  // downstream_send_timeout - computed: false, optional: true, required: false
  private _downstreamSendTimeout?: string; 
  public get downstreamSendTimeout() {
    return this.getStringAttribute('downstream_send_timeout');
  }
  public set downstreamSendTimeout(value: string) {
    this._downstreamSendTimeout = value;
  }
  public resetDownstreamSendTimeout() {
    this._downstreamSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamSendTimeoutInput() {
    return this._downstreamSendTimeout;
  }

  // dp_aggressive_hb_frequency - computed: false, optional: true, required: false
  private _dpAggressiveHbFrequency?: string; 
  public get dpAggressiveHbFrequency() {
    return this.getStringAttribute('dp_aggressive_hb_frequency');
  }
  public set dpAggressiveHbFrequency(value: string) {
    this._dpAggressiveHbFrequency = value;
  }
  public resetDpAggressiveHbFrequency() {
    this._dpAggressiveHbFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveHbFrequencyInput() {
    return this._dpAggressiveHbFrequency;
  }

  // dp_aggressive_hb_timeout_count - computed: false, optional: true, required: false
  private _dpAggressiveHbTimeoutCount?: string; 
  public get dpAggressiveHbTimeoutCount() {
    return this.getStringAttribute('dp_aggressive_hb_timeout_count');
  }
  public set dpAggressiveHbTimeoutCount(value: string) {
    this._dpAggressiveHbTimeoutCount = value;
  }
  public resetDpAggressiveHbTimeoutCount() {
    this._dpAggressiveHbTimeoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveHbTimeoutCountInput() {
    return this._dpAggressiveHbTimeoutCount;
  }

  // dp_hb_frequency - computed: false, optional: true, required: false
  private _dpHbFrequency?: string; 
  public get dpHbFrequency() {
    return this.getStringAttribute('dp_hb_frequency');
  }
  public set dpHbFrequency(value: string) {
    this._dpHbFrequency = value;
  }
  public resetDpHbFrequency() {
    this._dpHbFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHbFrequencyInput() {
    return this._dpHbFrequency;
  }

  // dp_hb_timeout_count - computed: false, optional: true, required: false
  private _dpHbTimeoutCount?: string; 
  public get dpHbTimeoutCount() {
    return this.getStringAttribute('dp_hb_timeout_count');
  }
  public set dpHbTimeoutCount(value: string) {
    this._dpHbTimeoutCount = value;
  }
  public resetDpHbTimeoutCount() {
    this._dpHbTimeoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHbTimeoutCountInput() {
    return this._dpHbTimeoutCount;
  }

  // dupip_frequency - computed: false, optional: true, required: false
  private _dupipFrequency?: string; 
  public get dupipFrequency() {
    return this.getStringAttribute('dupip_frequency');
  }
  public set dupipFrequency(value: string) {
    this._dupipFrequency = value;
  }
  public resetDupipFrequency() {
    this._dupipFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupipFrequencyInput() {
    return this._dupipFrequency;
  }

  // dupip_timeout_count - computed: false, optional: true, required: false
  private _dupipTimeoutCount?: string; 
  public get dupipTimeoutCount() {
    return this.getStringAttribute('dupip_timeout_count');
  }
  public set dupipTimeoutCount(value: string) {
    this._dupipTimeoutCount = value;
  }
  public resetDupipTimeoutCount() {
    this._dupipTimeoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupipTimeoutCountInput() {
    return this._dupipTimeoutCount;
  }

  // enable_hsm_log - computed: false, optional: true, required: false
  private _enableHsmLog?: string; 
  public get enableHsmLog() {
    return this.getStringAttribute('enable_hsm_log');
  }
  public set enableHsmLog(value: string) {
    this._enableHsmLog = value;
  }
  public resetEnableHsmLog() {
    this._enableHsmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsmLogInput() {
    return this._enableHsmLog;
  }

  // feproxy_vips_enable_proxy_arp - computed: false, optional: true, required: false
  private _feproxyVipsEnableProxyArp?: string; 
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }
  public set feproxyVipsEnableProxyArp(value: string) {
    this._feproxyVipsEnableProxyArp = value;
  }
  public resetFeproxyVipsEnableProxyArp() {
    this._feproxyVipsEnableProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feproxyVipsEnableProxyArpInput() {
    return this._feproxyVipsEnableProxyArp;
  }

  // flow_table_batch_push_frequency - computed: false, optional: true, required: false
  private _flowTableBatchPushFrequency?: string; 
  public get flowTableBatchPushFrequency() {
    return this.getStringAttribute('flow_table_batch_push_frequency');
  }
  public set flowTableBatchPushFrequency(value: string) {
    this._flowTableBatchPushFrequency = value;
  }
  public resetFlowTableBatchPushFrequency() {
    this._flowTableBatchPushFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTableBatchPushFrequencyInput() {
    return this._flowTableBatchPushFrequency;
  }

  // global_mtu - computed: false, optional: true, required: false
  private _globalMtu?: string; 
  public get globalMtu() {
    return this.getStringAttribute('global_mtu');
  }
  public set globalMtu(value: string) {
    this._globalMtu = value;
  }
  public resetGlobalMtu() {
    this._globalMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalMtuInput() {
    return this._globalMtu;
  }

  // http_rum_console_log - computed: false, optional: true, required: false
  private _httpRumConsoleLog?: string; 
  public get httpRumConsoleLog() {
    return this.getStringAttribute('http_rum_console_log');
  }
  public set httpRumConsoleLog(value: string) {
    this._httpRumConsoleLog = value;
  }
  public resetHttpRumConsoleLog() {
    this._httpRumConsoleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRumConsoleLogInput() {
    return this._httpRumConsoleLog;
  }

  // http_rum_min_content_length - computed: false, optional: true, required: false
  private _httpRumMinContentLength?: string; 
  public get httpRumMinContentLength() {
    return this.getStringAttribute('http_rum_min_content_length');
  }
  public set httpRumMinContentLength(value: string) {
    this._httpRumMinContentLength = value;
  }
  public resetHttpRumMinContentLength() {
    this._httpRumMinContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRumMinContentLengthInput() {
    return this._httpRumMinContentLength;
  }

  // lbaction_num_requests_to_dispatch - computed: false, optional: true, required: false
  private _lbactionNumRequestsToDispatch?: string; 
  public get lbactionNumRequestsToDispatch() {
    return this.getStringAttribute('lbaction_num_requests_to_dispatch');
  }
  public set lbactionNumRequestsToDispatch(value: string) {
    this._lbactionNumRequestsToDispatch = value;
  }
  public resetLbactionNumRequestsToDispatch() {
    this._lbactionNumRequestsToDispatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbactionNumRequestsToDispatchInput() {
    return this._lbactionNumRequestsToDispatch;
  }

  // lbaction_rq_per_request_max_retries - computed: false, optional: true, required: false
  private _lbactionRqPerRequestMaxRetries?: string; 
  public get lbactionRqPerRequestMaxRetries() {
    return this.getStringAttribute('lbaction_rq_per_request_max_retries');
  }
  public set lbactionRqPerRequestMaxRetries(value: string) {
    this._lbactionRqPerRequestMaxRetries = value;
  }
  public resetLbactionRqPerRequestMaxRetries() {
    this._lbactionRqPerRequestMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbactionRqPerRequestMaxRetriesInput() {
    return this._lbactionRqPerRequestMaxRetries;
  }

  // log_agent_compress_logs - computed: false, optional: true, required: false
  private _logAgentCompressLogs?: string; 
  public get logAgentCompressLogs() {
    return this.getStringAttribute('log_agent_compress_logs');
  }
  public set logAgentCompressLogs(value: string) {
    this._logAgentCompressLogs = value;
  }
  public resetLogAgentCompressLogs() {
    this._logAgentCompressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentCompressLogsInput() {
    return this._logAgentCompressLogs;
  }

  // log_agent_file_sz_appl - computed: false, optional: true, required: false
  private _logAgentFileSzAppl?: string; 
  public get logAgentFileSzAppl() {
    return this.getStringAttribute('log_agent_file_sz_appl');
  }
  public set logAgentFileSzAppl(value: string) {
    this._logAgentFileSzAppl = value;
  }
  public resetLogAgentFileSzAppl() {
    this._logAgentFileSzAppl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzApplInput() {
    return this._logAgentFileSzAppl;
  }

  // log_agent_file_sz_conn - computed: false, optional: true, required: false
  private _logAgentFileSzConn?: string; 
  public get logAgentFileSzConn() {
    return this.getStringAttribute('log_agent_file_sz_conn');
  }
  public set logAgentFileSzConn(value: string) {
    this._logAgentFileSzConn = value;
  }
  public resetLogAgentFileSzConn() {
    this._logAgentFileSzConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzConnInput() {
    return this._logAgentFileSzConn;
  }

  // log_agent_file_sz_debug - computed: false, optional: true, required: false
  private _logAgentFileSzDebug?: string; 
  public get logAgentFileSzDebug() {
    return this.getStringAttribute('log_agent_file_sz_debug');
  }
  public set logAgentFileSzDebug(value: string) {
    this._logAgentFileSzDebug = value;
  }
  public resetLogAgentFileSzDebug() {
    this._logAgentFileSzDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzDebugInput() {
    return this._logAgentFileSzDebug;
  }

  // log_agent_file_sz_event - computed: false, optional: true, required: false
  private _logAgentFileSzEvent?: string; 
  public get logAgentFileSzEvent() {
    return this.getStringAttribute('log_agent_file_sz_event');
  }
  public set logAgentFileSzEvent(value: string) {
    this._logAgentFileSzEvent = value;
  }
  public resetLogAgentFileSzEvent() {
    this._logAgentFileSzEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzEventInput() {
    return this._logAgentFileSzEvent;
  }

  // log_agent_log_storage_min_sz - computed: false, optional: true, required: false
  private _logAgentLogStorageMinSz?: string; 
  public get logAgentLogStorageMinSz() {
    return this.getStringAttribute('log_agent_log_storage_min_sz');
  }
  public set logAgentLogStorageMinSz(value: string) {
    this._logAgentLogStorageMinSz = value;
  }
  public resetLogAgentLogStorageMinSz() {
    this._logAgentLogStorageMinSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentLogStorageMinSzInput() {
    return this._logAgentLogStorageMinSz;
  }

  // log_agent_max_concurrent_rsync - computed: false, optional: true, required: false
  private _logAgentMaxConcurrentRsync?: string; 
  public get logAgentMaxConcurrentRsync() {
    return this.getStringAttribute('log_agent_max_concurrent_rsync');
  }
  public set logAgentMaxConcurrentRsync(value: string) {
    this._logAgentMaxConcurrentRsync = value;
  }
  public resetLogAgentMaxConcurrentRsync() {
    this._logAgentMaxConcurrentRsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxConcurrentRsyncInput() {
    return this._logAgentMaxConcurrentRsync;
  }

  // log_agent_max_storage_excess_percent - computed: false, optional: true, required: false
  private _logAgentMaxStorageExcessPercent?: string; 
  public get logAgentMaxStorageExcessPercent() {
    return this.getStringAttribute('log_agent_max_storage_excess_percent');
  }
  public set logAgentMaxStorageExcessPercent(value: string) {
    this._logAgentMaxStorageExcessPercent = value;
  }
  public resetLogAgentMaxStorageExcessPercent() {
    this._logAgentMaxStorageExcessPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxStorageExcessPercentInput() {
    return this._logAgentMaxStorageExcessPercent;
  }

  // log_agent_max_storage_ignore_percent - computed: false, optional: true, required: false
  private _logAgentMaxStorageIgnorePercent?: string; 
  public get logAgentMaxStorageIgnorePercent() {
    return this.getStringAttribute('log_agent_max_storage_ignore_percent');
  }
  public set logAgentMaxStorageIgnorePercent(value: string) {
    this._logAgentMaxStorageIgnorePercent = value;
  }
  public resetLogAgentMaxStorageIgnorePercent() {
    this._logAgentMaxStorageIgnorePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxStorageIgnorePercentInput() {
    return this._logAgentMaxStorageIgnorePercent;
  }

  // log_agent_min_storage_per_vs - computed: false, optional: true, required: false
  private _logAgentMinStoragePerVs?: string; 
  public get logAgentMinStoragePerVs() {
    return this.getStringAttribute('log_agent_min_storage_per_vs');
  }
  public set logAgentMinStoragePerVs(value: string) {
    this._logAgentMinStoragePerVs = value;
  }
  public resetLogAgentMinStoragePerVs() {
    this._logAgentMinStoragePerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMinStoragePerVsInput() {
    return this._logAgentMinStoragePerVs;
  }

  // log_agent_sleep_interval - computed: false, optional: true, required: false
  private _logAgentSleepInterval?: string; 
  public get logAgentSleepInterval() {
    return this.getStringAttribute('log_agent_sleep_interval');
  }
  public set logAgentSleepInterval(value: string) {
    this._logAgentSleepInterval = value;
  }
  public resetLogAgentSleepInterval() {
    this._logAgentSleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentSleepIntervalInput() {
    return this._logAgentSleepInterval;
  }

  // log_agent_unknown_vs_timer - computed: false, optional: true, required: false
  private _logAgentUnknownVsTimer?: string; 
  public get logAgentUnknownVsTimer() {
    return this.getStringAttribute('log_agent_unknown_vs_timer');
  }
  public set logAgentUnknownVsTimer(value: string) {
    this._logAgentUnknownVsTimer = value;
  }
  public resetLogAgentUnknownVsTimer() {
    this._logAgentUnknownVsTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentUnknownVsTimerInput() {
    return this._logAgentUnknownVsTimer;
  }

  // log_message_max_file_list_size - computed: false, optional: true, required: false
  private _logMessageMaxFileListSize?: string; 
  public get logMessageMaxFileListSize() {
    return this.getStringAttribute('log_message_max_file_list_size');
  }
  public set logMessageMaxFileListSize(value: string) {
    this._logMessageMaxFileListSize = value;
  }
  public resetLogMessageMaxFileListSize() {
    this._logMessageMaxFileListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageMaxFileListSizeInput() {
    return this._logMessageMaxFileListSize;
  }

  // ngx_free_connection_stack - computed: false, optional: true, required: false
  private _ngxFreeConnectionStack?: string; 
  public get ngxFreeConnectionStack() {
    return this.getStringAttribute('ngx_free_connection_stack');
  }
  public set ngxFreeConnectionStack(value: string) {
    this._ngxFreeConnectionStack = value;
  }
  public resetNgxFreeConnectionStack() {
    this._ngxFreeConnectionStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngxFreeConnectionStackInput() {
    return this._ngxFreeConnectionStack;
  }

  // persistence_mem_max - computed: false, optional: true, required: false
  private _persistenceMemMax?: string; 
  public get persistenceMemMax() {
    return this.getStringAttribute('persistence_mem_max');
  }
  public set persistenceMemMax(value: string) {
    this._persistenceMemMax = value;
  }
  public resetPersistenceMemMax() {
    this._persistenceMemMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceMemMaxInput() {
    return this._persistenceMemMax;
  }

  // scaleout_udp_per_pkt - computed: false, optional: true, required: false
  private _scaleoutUdpPerPkt?: string; 
  public get scaleoutUdpPerPkt() {
    return this.getStringAttribute('scaleout_udp_per_pkt');
  }
  public set scaleoutUdpPerPkt(value: string) {
    this._scaleoutUdpPerPkt = value;
  }
  public resetScaleoutUdpPerPkt() {
    this._scaleoutUdpPerPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutUdpPerPktInput() {
    return this._scaleoutUdpPerPkt;
  }

  // se_auth_ldap_bind_timeout - computed: false, optional: true, required: false
  private _seAuthLdapBindTimeout?: string; 
  public get seAuthLdapBindTimeout() {
    return this.getStringAttribute('se_auth_ldap_bind_timeout');
  }
  public set seAuthLdapBindTimeout(value: string) {
    this._seAuthLdapBindTimeout = value;
  }
  public resetSeAuthLdapBindTimeout() {
    this._seAuthLdapBindTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapBindTimeoutInput() {
    return this._seAuthLdapBindTimeout;
  }

  // se_auth_ldap_cache_size - computed: false, optional: true, required: false
  private _seAuthLdapCacheSize?: string; 
  public get seAuthLdapCacheSize() {
    return this.getStringAttribute('se_auth_ldap_cache_size');
  }
  public set seAuthLdapCacheSize(value: string) {
    this._seAuthLdapCacheSize = value;
  }
  public resetSeAuthLdapCacheSize() {
    this._seAuthLdapCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapCacheSizeInput() {
    return this._seAuthLdapCacheSize;
  }

  // se_auth_ldap_connect_timeout - computed: false, optional: true, required: false
  private _seAuthLdapConnectTimeout?: string; 
  public get seAuthLdapConnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_connect_timeout');
  }
  public set seAuthLdapConnectTimeout(value: string) {
    this._seAuthLdapConnectTimeout = value;
  }
  public resetSeAuthLdapConnectTimeout() {
    this._seAuthLdapConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapConnectTimeoutInput() {
    return this._seAuthLdapConnectTimeout;
  }

  // se_auth_ldap_conns_per_server - computed: false, optional: true, required: false
  private _seAuthLdapConnsPerServer?: string; 
  public get seAuthLdapConnsPerServer() {
    return this.getStringAttribute('se_auth_ldap_conns_per_server');
  }
  public set seAuthLdapConnsPerServer(value: string) {
    this._seAuthLdapConnsPerServer = value;
  }
  public resetSeAuthLdapConnsPerServer() {
    this._seAuthLdapConnsPerServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapConnsPerServerInput() {
    return this._seAuthLdapConnsPerServer;
  }

  // se_auth_ldap_reconnect_timeout - computed: false, optional: true, required: false
  private _seAuthLdapReconnectTimeout?: string; 
  public get seAuthLdapReconnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_reconnect_timeout');
  }
  public set seAuthLdapReconnectTimeout(value: string) {
    this._seAuthLdapReconnectTimeout = value;
  }
  public resetSeAuthLdapReconnectTimeout() {
    this._seAuthLdapReconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapReconnectTimeoutInput() {
    return this._seAuthLdapReconnectTimeout;
  }

  // se_auth_ldap_request_timeout - computed: false, optional: true, required: false
  private _seAuthLdapRequestTimeout?: string; 
  public get seAuthLdapRequestTimeout() {
    return this.getStringAttribute('se_auth_ldap_request_timeout');
  }
  public set seAuthLdapRequestTimeout(value: string) {
    this._seAuthLdapRequestTimeout = value;
  }
  public resetSeAuthLdapRequestTimeout() {
    this._seAuthLdapRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapRequestTimeoutInput() {
    return this._seAuthLdapRequestTimeout;
  }

  // se_auth_ldap_servers_failover_only - computed: false, optional: true, required: false
  private _seAuthLdapServersFailoverOnly?: string; 
  public get seAuthLdapServersFailoverOnly() {
    return this.getStringAttribute('se_auth_ldap_servers_failover_only');
  }
  public set seAuthLdapServersFailoverOnly(value: string) {
    this._seAuthLdapServersFailoverOnly = value;
  }
  public resetSeAuthLdapServersFailoverOnly() {
    this._seAuthLdapServersFailoverOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapServersFailoverOnlyInput() {
    return this._seAuthLdapServersFailoverOnly;
  }

  // se_dp_hm_drops - computed: false, optional: true, required: false
  private _seDpHmDrops?: string; 
  public get seDpHmDrops() {
    return this.getStringAttribute('se_dp_hm_drops');
  }
  public set seDpHmDrops(value: string) {
    this._seDpHmDrops = value;
  }
  public resetSeDpHmDrops() {
    this._seDpHmDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpHmDropsInput() {
    return this._seDpHmDrops;
  }

  // se_dp_if_state_poll_interval - computed: false, optional: true, required: false
  private _seDpIfStatePollInterval?: string; 
  public get seDpIfStatePollInterval() {
    return this.getStringAttribute('se_dp_if_state_poll_interval');
  }
  public set seDpIfStatePollInterval(value: string) {
    this._seDpIfStatePollInterval = value;
  }
  public resetSeDpIfStatePollInterval() {
    this._seDpIfStatePollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpIfStatePollIntervalInput() {
    return this._seDpIfStatePollInterval;
  }

  // se_dp_log_nf_enqueue_percent - computed: false, optional: true, required: false
  private _seDpLogNfEnqueuePercent?: string; 
  public get seDpLogNfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_nf_enqueue_percent');
  }
  public set seDpLogNfEnqueuePercent(value: string) {
    this._seDpLogNfEnqueuePercent = value;
  }
  public resetSeDpLogNfEnqueuePercent() {
    this._seDpLogNfEnqueuePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpLogNfEnqueuePercentInput() {
    return this._seDpLogNfEnqueuePercent;
  }

  // se_dp_log_udf_enqueue_percent - computed: false, optional: true, required: false
  private _seDpLogUdfEnqueuePercent?: string; 
  public get seDpLogUdfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_udf_enqueue_percent');
  }
  public set seDpLogUdfEnqueuePercent(value: string) {
    this._seDpLogUdfEnqueuePercent = value;
  }
  public resetSeDpLogUdfEnqueuePercent() {
    this._seDpLogUdfEnqueuePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpLogUdfEnqueuePercentInput() {
    return this._seDpLogUdfEnqueuePercent;
  }

  // se_dump_core_on_assert - computed: false, optional: true, required: false
  private _seDumpCoreOnAssert?: string; 
  public get seDumpCoreOnAssert() {
    return this.getStringAttribute('se_dump_core_on_assert');
  }
  public set seDumpCoreOnAssert(value: string) {
    this._seDumpCoreOnAssert = value;
  }
  public resetSeDumpCoreOnAssert() {
    this._seDumpCoreOnAssert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDumpCoreOnAssertInput() {
    return this._seDumpCoreOnAssert;
  }

  // se_handle_interface_routes - computed: false, optional: true, required: false
  private _seHandleInterfaceRoutes?: string; 
  public get seHandleInterfaceRoutes() {
    return this.getStringAttribute('se_handle_interface_routes');
  }
  public set seHandleInterfaceRoutes(value: string) {
    this._seHandleInterfaceRoutes = value;
  }
  public resetSeHandleInterfaceRoutes() {
    this._seHandleInterfaceRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seHandleInterfaceRoutesInput() {
    return this._seHandleInterfaceRoutes;
  }

  // se_hb_persist_fudge_bits - computed: false, optional: true, required: false
  private _seHbPersistFudgeBits?: string; 
  public get seHbPersistFudgeBits() {
    return this.getStringAttribute('se_hb_persist_fudge_bits');
  }
  public set seHbPersistFudgeBits(value: string) {
    this._seHbPersistFudgeBits = value;
  }
  public resetSeHbPersistFudgeBits() {
    this._seHbPersistFudgeBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seHbPersistFudgeBitsInput() {
    return this._seHbPersistFudgeBits;
  }

  // se_mac_error_threshold_to_disable_promiscious - computed: false, optional: true, required: false
  private _seMacErrorThresholdToDisablePromiscious?: string; 
  public get seMacErrorThresholdToDisablePromiscious() {
    return this.getStringAttribute('se_mac_error_threshold_to_disable_promiscious');
  }
  public set seMacErrorThresholdToDisablePromiscious(value: string) {
    this._seMacErrorThresholdToDisablePromiscious = value;
  }
  public resetSeMacErrorThresholdToDisablePromiscious() {
    this._seMacErrorThresholdToDisablePromiscious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMacErrorThresholdToDisablePromisciousInput() {
    return this._seMacErrorThresholdToDisablePromiscious;
  }

  // se_memory_poison - computed: false, optional: true, required: false
  private _seMemoryPoison?: string; 
  public get seMemoryPoison() {
    return this.getStringAttribute('se_memory_poison');
  }
  public set seMemoryPoison(value: string) {
    this._seMemoryPoison = value;
  }
  public resetSeMemoryPoison() {
    this._seMemoryPoison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMemoryPoisonInput() {
    return this._seMemoryPoison;
  }

  // se_metrics_interval - computed: false, optional: true, required: false
  private _seMetricsInterval?: string; 
  public get seMetricsInterval() {
    return this.getStringAttribute('se_metrics_interval');
  }
  public set seMetricsInterval(value: string) {
    this._seMetricsInterval = value;
  }
  public resetSeMetricsInterval() {
    this._seMetricsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMetricsIntervalInput() {
    return this._seMetricsInterval;
  }

  // se_metrics_rt_enabled - computed: false, optional: true, required: false
  private _seMetricsRtEnabled?: string; 
  public get seMetricsRtEnabled() {
    return this.getStringAttribute('se_metrics_rt_enabled');
  }
  public set seMetricsRtEnabled(value: string) {
    this._seMetricsRtEnabled = value;
  }
  public resetSeMetricsRtEnabled() {
    this._seMetricsRtEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMetricsRtEnabledInput() {
    return this._seMetricsRtEnabled;
  }

  // se_metrics_rt_interval - computed: false, optional: true, required: false
  private _seMetricsRtInterval?: string; 
  public get seMetricsRtInterval() {
    return this.getStringAttribute('se_metrics_rt_interval');
  }
  public set seMetricsRtInterval(value: string) {
    this._seMetricsRtInterval = value;
  }
  public resetSeMetricsRtInterval() {
    this._seMetricsRtInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMetricsRtIntervalInput() {
    return this._seMetricsRtInterval;
  }

  // se_packet_buffer_max - computed: false, optional: true, required: false
  private _sePacketBufferMax?: string; 
  public get sePacketBufferMax() {
    return this.getStringAttribute('se_packet_buffer_max');
  }
  public set sePacketBufferMax(value: string) {
    this._sePacketBufferMax = value;
  }
  public resetSePacketBufferMax() {
    this._sePacketBufferMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePacketBufferMaxInput() {
    return this._sePacketBufferMax;
  }

  // se_random_tcp_drops - computed: false, optional: true, required: false
  private _seRandomTcpDrops?: string; 
  public get seRandomTcpDrops() {
    return this.getStringAttribute('se_random_tcp_drops');
  }
  public set seRandomTcpDrops(value: string) {
    this._seRandomTcpDrops = value;
  }
  public resetSeRandomTcpDrops() {
    this._seRandomTcpDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRandomTcpDropsInput() {
    return this._seRandomTcpDrops;
  }

  // services_accessible_all_interfaces - computed: false, optional: true, required: false
  private _servicesAccessibleAllInterfaces?: string; 
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }
  public set servicesAccessibleAllInterfaces(value: string) {
    this._servicesAccessibleAllInterfaces = value;
  }
  public resetServicesAccessibleAllInterfaces() {
    this._servicesAccessibleAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesAccessibleAllInterfacesInput() {
    return this._servicesAccessibleAllInterfaces;
  }

  // tcp_syncache_max_retransmit_default - computed: false, optional: true, required: false
  private _tcpSyncacheMaxRetransmitDefault?: string; 
  public get tcpSyncacheMaxRetransmitDefault() {
    return this.getStringAttribute('tcp_syncache_max_retransmit_default');
  }
  public set tcpSyncacheMaxRetransmitDefault(value: string) {
    this._tcpSyncacheMaxRetransmitDefault = value;
  }
  public resetTcpSyncacheMaxRetransmitDefault() {
    this._tcpSyncacheMaxRetransmitDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncacheMaxRetransmitDefaultInput() {
    return this._tcpSyncacheMaxRetransmitDefault;
  }

  // upstream_connect_timeout - computed: false, optional: true, required: false
  private _upstreamConnectTimeout?: string; 
  public get upstreamConnectTimeout() {
    return this.getStringAttribute('upstream_connect_timeout');
  }
  public set upstreamConnectTimeout(value: string) {
    this._upstreamConnectTimeout = value;
  }
  public resetUpstreamConnectTimeout() {
    this._upstreamConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnectTimeoutInput() {
    return this._upstreamConnectTimeout;
  }

  // upstream_connpool_cache_thresh - computed: false, optional: true, required: false
  private _upstreamConnpoolCacheThresh?: string; 
  public get upstreamConnpoolCacheThresh() {
    return this.getStringAttribute('upstream_connpool_cache_thresh');
  }
  public set upstreamConnpoolCacheThresh(value: string) {
    this._upstreamConnpoolCacheThresh = value;
  }
  public resetUpstreamConnpoolCacheThresh() {
    this._upstreamConnpoolCacheThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolCacheThreshInput() {
    return this._upstreamConnpoolCacheThresh;
  }

  // upstream_connpool_conn_idle_thresh_tmo - computed: false, optional: true, required: false
  private _upstreamConnpoolConnIdleThreshTmo?: string; 
  public get upstreamConnpoolConnIdleThreshTmo() {
    return this.getStringAttribute('upstream_connpool_conn_idle_thresh_tmo');
  }
  public set upstreamConnpoolConnIdleThreshTmo(value: string) {
    this._upstreamConnpoolConnIdleThreshTmo = value;
  }
  public resetUpstreamConnpoolConnIdleThreshTmo() {
    this._upstreamConnpoolConnIdleThreshTmo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolConnIdleThreshTmoInput() {
    return this._upstreamConnpoolConnIdleThreshTmo;
  }

  // upstream_connpool_core_max_cache - computed: false, optional: true, required: false
  private _upstreamConnpoolCoreMaxCache?: string; 
  public get upstreamConnpoolCoreMaxCache() {
    return this.getStringAttribute('upstream_connpool_core_max_cache');
  }
  public set upstreamConnpoolCoreMaxCache(value: string) {
    this._upstreamConnpoolCoreMaxCache = value;
  }
  public resetUpstreamConnpoolCoreMaxCache() {
    this._upstreamConnpoolCoreMaxCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolCoreMaxCacheInput() {
    return this._upstreamConnpoolCoreMaxCache;
  }

  // upstream_connpool_enable - computed: false, optional: true, required: false
  private _upstreamConnpoolEnable?: string; 
  public get upstreamConnpoolEnable() {
    return this.getStringAttribute('upstream_connpool_enable');
  }
  public set upstreamConnpoolEnable(value: string) {
    this._upstreamConnpoolEnable = value;
  }
  public resetUpstreamConnpoolEnable() {
    this._upstreamConnpoolEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolEnableInput() {
    return this._upstreamConnpoolEnable;
  }

  // upstream_keepalive - computed: false, optional: true, required: false
  private _upstreamKeepalive?: string; 
  public get upstreamKeepalive() {
    return this.getStringAttribute('upstream_keepalive');
  }
  public set upstreamKeepalive(value: string) {
    this._upstreamKeepalive = value;
  }
  public resetUpstreamKeepalive() {
    this._upstreamKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamKeepaliveInput() {
    return this._upstreamKeepalive;
  }

  // upstream_read_timeout - computed: false, optional: true, required: false
  private _upstreamReadTimeout?: string; 
  public get upstreamReadTimeout() {
    return this.getStringAttribute('upstream_read_timeout');
  }
  public set upstreamReadTimeout(value: string) {
    this._upstreamReadTimeout = value;
  }
  public resetUpstreamReadTimeout() {
    this._upstreamReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamReadTimeoutInput() {
    return this._upstreamReadTimeout;
  }

  // upstream_send_timeout - computed: false, optional: true, required: false
  private _upstreamSendTimeout?: string; 
  public get upstreamSendTimeout() {
    return this.getStringAttribute('upstream_send_timeout');
  }
  public set upstreamSendTimeout(value: string) {
    this._upstreamSendTimeout = value;
  }
  public resetUpstreamSendTimeout() {
    this._upstreamSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSendTimeoutInput() {
    return this._upstreamSendTimeout;
  }

  // user_defined_metric_age - computed: false, optional: true, required: false
  private _userDefinedMetricAge?: string; 
  public get userDefinedMetricAge() {
    return this.getStringAttribute('user_defined_metric_age');
  }
  public set userDefinedMetricAge(value: string) {
    this._userDefinedMetricAge = value;
  }
  public resetUserDefinedMetricAge() {
    this._userDefinedMetricAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedMetricAgeInput() {
    return this._userDefinedMetricAge;
  }

  // app_headers - computed: false, optional: true, required: false
  private _appHeaders = new SepropertiesSeRuntimePropertiesAppHeadersList(this, "app_headers", false);
  public get appHeaders() {
    return this._appHeaders;
  }
  public putAppHeaders(value: SepropertiesSeRuntimePropertiesAppHeaders[] | cdktf.IResolvable) {
    this._appHeaders.internalValue = value;
  }
  public resetAppHeaders() {
    this._appHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appHeadersInput() {
    return this._appHeaders.internalValue;
  }

  // dos_profile - computed: false, optional: true, required: false
  private _dosProfile = new SepropertiesSeRuntimePropertiesDosProfileList(this, "dos_profile", true);
  public get dosProfile() {
    return this._dosProfile;
  }
  public putDosProfile(value: SepropertiesSeRuntimePropertiesDosProfile[] | cdktf.IResolvable) {
    this._dosProfile.internalValue = value;
  }
  public resetDosProfile() {
    this._dosProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProfileInput() {
    return this._dosProfile.internalValue;
  }

  // se_dp_compression - computed: false, optional: true, required: false
  private _seDpCompression = new SepropertiesSeRuntimePropertiesSeDpCompressionList(this, "se_dp_compression", true);
  public get seDpCompression() {
    return this._seDpCompression;
  }
  public putSeDpCompression(value: SepropertiesSeRuntimePropertiesSeDpCompression[] | cdktf.IResolvable) {
    this._seDpCompression.internalValue = value;
  }
  public resetSeDpCompression() {
    this._seDpCompression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpCompressionInput() {
    return this._seDpCompression.internalValue;
  }

  // se_rate_limiters - computed: false, optional: true, required: false
  private _seRateLimiters = new SepropertiesSeRuntimePropertiesSeRateLimitersList(this, "se_rate_limiters", true);
  public get seRateLimiters() {
    return this._seRateLimiters;
  }
  public putSeRateLimiters(value: SepropertiesSeRuntimePropertiesSeRateLimiters[] | cdktf.IResolvable) {
    this._seRateLimiters.internalValue = value;
  }
  public resetSeRateLimiters() {
    this._seRateLimiters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRateLimitersInput() {
    return this._seRateLimiters.internalValue;
  }

  // service_ip_subnets - computed: false, optional: true, required: false
  private _serviceIpSubnets = new SepropertiesSeRuntimePropertiesServiceIpSubnetsList(this, "service_ip_subnets", false);
  public get serviceIpSubnets() {
    return this._serviceIpSubnets;
  }
  public putServiceIpSubnets(value: SepropertiesSeRuntimePropertiesServiceIpSubnets[] | cdktf.IResolvable) {
    this._serviceIpSubnets.internalValue = value;
  }
  public resetServiceIpSubnets() {
    this._serviceIpSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpSubnetsInput() {
    return this._serviceIpSubnets.internalValue;
  }

  // service_port_ranges - computed: false, optional: true, required: false
  private _servicePortRanges = new SepropertiesSeRuntimePropertiesServicePortRangesList(this, "service_port_ranges", false);
  public get servicePortRanges() {
    return this._servicePortRanges;
  }
  public putServicePortRanges(value: SepropertiesSeRuntimePropertiesServicePortRanges[] | cdktf.IResolvable) {
    this._servicePortRanges.internalValue = value;
  }
  public resetServicePortRanges() {
    this._servicePortRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortRangesInput() {
    return this._servicePortRanges.internalValue;
  }
}

export class SepropertiesSeRuntimePropertiesList extends cdktf.ComplexList {
  public internalValue? : SepropertiesSeRuntimeProperties[] | cdktf.IResolvable

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
  public get(index: number): SepropertiesSeRuntimePropertiesOutputReference {
    return new SepropertiesSeRuntimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties avi_seproperties}
*/
export class Seproperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_seproperties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Seproperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Seproperties to import
  * @param importFromId The id of the existing Seproperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Seproperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_seproperties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/seproperties avi_seproperties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SepropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SepropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_seproperties',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
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
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._seAgentProperties.internalValue = config.seAgentProperties;
    this._seBootupProperties.internalValue = config.seBootupProperties;
    this._seRuntimeProperties.internalValue = config.seRuntimeProperties;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SepropertiesConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SepropertiesConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // se_agent_properties - computed: false, optional: true, required: false
  private _seAgentProperties = new SepropertiesSeAgentPropertiesList(this, "se_agent_properties", true);
  public get seAgentProperties() {
    return this._seAgentProperties;
  }
  public putSeAgentProperties(value: SepropertiesSeAgentProperties[] | cdktf.IResolvable) {
    this._seAgentProperties.internalValue = value;
  }
  public resetSeAgentProperties() {
    this._seAgentProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAgentPropertiesInput() {
    return this._seAgentProperties.internalValue;
  }

  // se_bootup_properties - computed: false, optional: true, required: false
  private _seBootupProperties = new SepropertiesSeBootupPropertiesList(this, "se_bootup_properties", true);
  public get seBootupProperties() {
    return this._seBootupProperties;
  }
  public putSeBootupProperties(value: SepropertiesSeBootupProperties[] | cdktf.IResolvable) {
    this._seBootupProperties.internalValue = value;
  }
  public resetSeBootupProperties() {
    this._seBootupProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seBootupPropertiesInput() {
    return this._seBootupProperties.internalValue;
  }

  // se_runtime_properties - computed: false, optional: true, required: false
  private _seRuntimeProperties = new SepropertiesSeRuntimePropertiesList(this, "se_runtime_properties", true);
  public get seRuntimeProperties() {
    return this._seRuntimeProperties;
  }
  public putSeRuntimeProperties(value: SepropertiesSeRuntimeProperties[] | cdktf.IResolvable) {
    this._seRuntimeProperties.internalValue = value;
  }
  public resetSeRuntimeProperties() {
    this._seRuntimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRuntimePropertiesInput() {
    return this._seRuntimeProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(sepropertiesConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      se_agent_properties: cdktf.listMapper(sepropertiesSeAgentPropertiesToTerraform, true)(this._seAgentProperties.internalValue),
      se_bootup_properties: cdktf.listMapper(sepropertiesSeBootupPropertiesToTerraform, true)(this._seBootupProperties.internalValue),
      se_runtime_properties: cdktf.listMapper(sepropertiesSeRuntimePropertiesToTerraform, true)(this._seRuntimeProperties.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(sepropertiesConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SepropertiesConfigpbAttributesList",
      },
      se_agent_properties: {
        value: cdktf.listMapperHcl(sepropertiesSeAgentPropertiesToHclTerraform, true)(this._seAgentProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SepropertiesSeAgentPropertiesList",
      },
      se_bootup_properties: {
        value: cdktf.listMapperHcl(sepropertiesSeBootupPropertiesToHclTerraform, true)(this._seBootupProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SepropertiesSeBootupPropertiesList",
      },
      se_runtime_properties: {
        value: cdktf.listMapperHcl(sepropertiesSeRuntimePropertiesToHclTerraform, true)(this._seRuntimeProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SepropertiesSeRuntimePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
