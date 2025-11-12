// https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#allow_concurrent_executions Job#allow_concurrent_executions}
  */
  readonly allowConcurrentExecutions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#command_ordering_strategy Job#command_ordering_strategy}
  */
  readonly commandOrderingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#continue_next_node_on_error Job#continue_next_node_on_error}
  */
  readonly continueNextNodeOnError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#continue_on_error Job#continue_on_error}
  */
  readonly continueOnError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#default_tab Job#default_tab}
  */
  readonly defaultTab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#description Job#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#execution_enabled Job#execution_enabled}
  */
  readonly executionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#group_name Job#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#log_level Job#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#max_thread_count Job#max_thread_count}
  */
  readonly maxThreadCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#name Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_filter_exclude_precedence Job#node_filter_exclude_precedence}
  */
  readonly nodeFilterExcludePrecedence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_filter_exclude_query Job#node_filter_exclude_query}
  */
  readonly nodeFilterExcludeQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_filter_query Job#node_filter_query}
  */
  readonly nodeFilterQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#nodes_selected_by_default Job#nodes_selected_by_default}
  */
  readonly nodesSelectedByDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#preserve_options_order Job#preserve_options_order}
  */
  readonly preserveOptionsOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#project_name Job#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#rank_attribute Job#rank_attribute}
  */
  readonly rankAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#rank_order Job#rank_order}
  */
  readonly rankOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#retry Job#retry}
  */
  readonly retry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#retry_delay Job#retry_delay}
  */
  readonly retryDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#runner_selector_filter Job#runner_selector_filter}
  */
  readonly runnerSelectorFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#runner_selector_filter_mode Job#runner_selector_filter_mode}
  */
  readonly runnerSelectorFilterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#runner_selector_filter_type Job#runner_selector_filter_type}
  */
  readonly runnerSelectorFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#schedule Job#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#schedule_enabled Job#schedule_enabled}
  */
  readonly scheduleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#success_on_empty_node_filter Job#success_on_empty_node_filter}
  */
  readonly successOnEmptyNodeFilter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#time_zone Job#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#timeout Job#timeout}
  */
  readonly timeout?: string;
  /**
  * command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#command Job#command}
  */
  readonly command: JobCommand[] | cdktf.IResolvable;
  /**
  * global_log_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#global_log_filter Job#global_log_filter}
  */
  readonly globalLogFilter?: JobGlobalLogFilter[] | cdktf.IResolvable;
  /**
  * log_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#log_limit Job#log_limit}
  */
  readonly logLimit?: JobLogLimit[] | cdktf.IResolvable;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#notification Job#notification}
  */
  readonly notification?: JobNotification[] | cdktf.IResolvable;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#option Job#option}
  */
  readonly option?: JobOption[] | cdktf.IResolvable;
  /**
  * orchestrator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#orchestrator Job#orchestrator}
  */
  readonly orchestrator?: JobOrchestrator[] | cdktf.IResolvable;
}
export interface JobCommandErrorHandlerJobNodeFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#exclude_filter Job#exclude_filter}
  */
  readonly excludeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#exclude_precedence Job#exclude_precedence}
  */
  readonly excludePrecedence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#filter Job#filter}
  */
  readonly filter?: string;
}

export function jobCommandErrorHandlerJobNodeFiltersToTerraform(struct?: JobCommandErrorHandlerJobNodeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_filter: cdktf.stringToTerraform(struct!.excludeFilter),
    exclude_precedence: cdktf.booleanToTerraform(struct!.excludePrecedence),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function jobCommandErrorHandlerJobNodeFiltersToHclTerraform(struct?: JobCommandErrorHandlerJobNodeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_filter: {
      value: cdktf.stringToHclTerraform(struct!.excludeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_precedence: {
      value: cdktf.booleanToHclTerraform(struct!.excludePrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandErrorHandlerJobNodeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerJobNodeFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilter = this._excludeFilter;
    }
    if (this._excludePrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrecedence = this._excludePrecedence;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerJobNodeFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeFilter = undefined;
      this._excludePrecedence = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeFilter = value.excludeFilter;
      this._excludePrecedence = value.excludePrecedence;
      this._filter = value.filter;
    }
  }

  // exclude_filter - computed: false, optional: true, required: false
  private _excludeFilter?: string; 
  public get excludeFilter() {
    return this.getStringAttribute('exclude_filter');
  }
  public set excludeFilter(value: string) {
    this._excludeFilter = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter;
  }

  // exclude_precedence - computed: false, optional: true, required: false
  private _excludePrecedence?: boolean | cdktf.IResolvable; 
  public get excludePrecedence() {
    return this.getBooleanAttribute('exclude_precedence');
  }
  public set excludePrecedence(value: boolean | cdktf.IResolvable) {
    this._excludePrecedence = value;
  }
  public resetExcludePrecedence() {
    this._excludePrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrecedenceInput() {
    return this._excludePrecedence;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}

export class JobCommandErrorHandlerJobNodeFiltersList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerJobNodeFilters[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerJobNodeFiltersOutputReference {
    return new JobCommandErrorHandlerJobNodeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#args Job#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#child_nodes Job#child_nodes}
  */
  readonly childNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#fail_on_disable Job#fail_on_disable}
  */
  readonly failOnDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#group_name Job#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#ignore_notifications Job#ignore_notifications}
  */
  readonly ignoreNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#import_options Job#import_options}
  */
  readonly importOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#name Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#project_name Job#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#run_for_each_node Job#run_for_each_node}
  */
  readonly runForEachNode?: boolean | cdktf.IResolvable;
  /**
  * node_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_filters Job#node_filters}
  */
  readonly nodeFilters?: JobCommandErrorHandlerJobNodeFilters[] | cdktf.IResolvable;
}

export function jobCommandErrorHandlerJobToTerraform(struct?: JobCommandErrorHandlerJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    child_nodes: cdktf.booleanToTerraform(struct!.childNodes),
    fail_on_disable: cdktf.booleanToTerraform(struct!.failOnDisable),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ignore_notifications: cdktf.booleanToTerraform(struct!.ignoreNotifications),
    import_options: cdktf.booleanToTerraform(struct!.importOptions),
    name: cdktf.stringToTerraform(struct!.name),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    run_for_each_node: cdktf.booleanToTerraform(struct!.runForEachNode),
    node_filters: cdktf.listMapper(jobCommandErrorHandlerJobNodeFiltersToTerraform, true)(struct!.nodeFilters),
  }
}


export function jobCommandErrorHandlerJobToHclTerraform(struct?: JobCommandErrorHandlerJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.childNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_disable: {
      value: cdktf.booleanToHclTerraform(struct!.failOnDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    import_options: {
      value: cdktf.booleanToHclTerraform(struct!.importOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_for_each_node: {
      value: cdktf.booleanToHclTerraform(struct!.runForEachNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_filters: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerJobNodeFiltersToHclTerraform, true)(struct!.nodeFilters),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerJobNodeFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandErrorHandlerJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._childNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.childNodes = this._childNodes;
    }
    if (this._failOnDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnDisable = this._failOnDisable;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ignoreNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNotifications = this._ignoreNotifications;
    }
    if (this._importOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.importOptions = this._importOptions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._runForEachNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runForEachNode = this._runForEachNode;
    }
    if (this._nodeFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._childNodes = undefined;
      this._failOnDisable = undefined;
      this._groupName = undefined;
      this._ignoreNotifications = undefined;
      this._importOptions = undefined;
      this._name = undefined;
      this._projectName = undefined;
      this._runForEachNode = undefined;
      this._nodeFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._childNodes = value.childNodes;
      this._failOnDisable = value.failOnDisable;
      this._groupName = value.groupName;
      this._ignoreNotifications = value.ignoreNotifications;
      this._importOptions = value.importOptions;
      this._name = value.name;
      this._projectName = value.projectName;
      this._runForEachNode = value.runForEachNode;
      this._nodeFilters.internalValue = value.nodeFilters;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // child_nodes - computed: false, optional: true, required: false
  private _childNodes?: boolean | cdktf.IResolvable; 
  public get childNodes() {
    return this.getBooleanAttribute('child_nodes');
  }
  public set childNodes(value: boolean | cdktf.IResolvable) {
    this._childNodes = value;
  }
  public resetChildNodes() {
    this._childNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childNodesInput() {
    return this._childNodes;
  }

  // fail_on_disable - computed: false, optional: true, required: false
  private _failOnDisable?: boolean | cdktf.IResolvable; 
  public get failOnDisable() {
    return this.getBooleanAttribute('fail_on_disable');
  }
  public set failOnDisable(value: boolean | cdktf.IResolvable) {
    this._failOnDisable = value;
  }
  public resetFailOnDisable() {
    this._failOnDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnDisableInput() {
    return this._failOnDisable;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ignore_notifications - computed: false, optional: true, required: false
  private _ignoreNotifications?: boolean | cdktf.IResolvable; 
  public get ignoreNotifications() {
    return this.getBooleanAttribute('ignore_notifications');
  }
  public set ignoreNotifications(value: boolean | cdktf.IResolvable) {
    this._ignoreNotifications = value;
  }
  public resetIgnoreNotifications() {
    this._ignoreNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNotificationsInput() {
    return this._ignoreNotifications;
  }

  // import_options - computed: false, optional: true, required: false
  private _importOptions?: boolean | cdktf.IResolvable; 
  public get importOptions() {
    return this.getBooleanAttribute('import_options');
  }
  public set importOptions(value: boolean | cdktf.IResolvable) {
    this._importOptions = value;
  }
  public resetImportOptions() {
    this._importOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOptionsInput() {
    return this._importOptions;
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

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // run_for_each_node - computed: false, optional: true, required: false
  private _runForEachNode?: boolean | cdktf.IResolvable; 
  public get runForEachNode() {
    return this.getBooleanAttribute('run_for_each_node');
  }
  public set runForEachNode(value: boolean | cdktf.IResolvable) {
    this._runForEachNode = value;
  }
  public resetRunForEachNode() {
    this._runForEachNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runForEachNodeInput() {
    return this._runForEachNode;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters = new JobCommandErrorHandlerJobNodeFiltersList(this, "node_filters", false);
  public get nodeFilters() {
    return this._nodeFilters;
  }
  public putNodeFilters(value: JobCommandErrorHandlerJobNodeFilters[] | cdktf.IResolvable) {
    this._nodeFilters.internalValue = value;
  }
  public resetNodeFilters() {
    this._nodeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters.internalValue;
  }
}

export class JobCommandErrorHandlerJobList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerJob[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerJobOutputReference {
    return new JobCommandErrorHandlerJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerNodeStepPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandErrorHandlerNodeStepPluginToTerraform(struct?: JobCommandErrorHandlerNodeStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandErrorHandlerNodeStepPluginToHclTerraform(struct?: JobCommandErrorHandlerNodeStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandErrorHandlerNodeStepPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerNodeStepPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerNodeStepPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandErrorHandlerNodeStepPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerNodeStepPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerNodeStepPluginOutputReference {
    return new JobCommandErrorHandlerNodeStepPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerPluginsLogFilterPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandErrorHandlerPluginsLogFilterPluginToTerraform(struct?: JobCommandErrorHandlerPluginsLogFilterPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandErrorHandlerPluginsLogFilterPluginToHclTerraform(struct?: JobCommandErrorHandlerPluginsLogFilterPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandErrorHandlerPluginsLogFilterPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerPluginsLogFilterPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerPluginsLogFilterPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandErrorHandlerPluginsLogFilterPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerPluginsLogFilterPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerPluginsLogFilterPluginOutputReference {
    return new JobCommandErrorHandlerPluginsLogFilterPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerPlugins {
  /**
  * log_filter_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#log_filter_plugin Job#log_filter_plugin}
  */
  readonly logFilterPlugin: JobCommandErrorHandlerPluginsLogFilterPlugin[] | cdktf.IResolvable;
}

export function jobCommandErrorHandlerPluginsToTerraform(struct?: JobCommandErrorHandlerPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_filter_plugin: cdktf.listMapper(jobCommandErrorHandlerPluginsLogFilterPluginToTerraform, true)(struct!.logFilterPlugin),
  }
}


export function jobCommandErrorHandlerPluginsToHclTerraform(struct?: JobCommandErrorHandlerPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_filter_plugin: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerPluginsLogFilterPluginToHclTerraform, true)(struct!.logFilterPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerPluginsLogFilterPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandErrorHandlerPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFilterPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilterPlugin = this._logFilterPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFilterPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFilterPlugin.internalValue = value.logFilterPlugin;
    }
  }

  // log_filter_plugin - computed: false, optional: false, required: true
  private _logFilterPlugin = new JobCommandErrorHandlerPluginsLogFilterPluginList(this, "log_filter_plugin", false);
  public get logFilterPlugin() {
    return this._logFilterPlugin;
  }
  public putLogFilterPlugin(value: JobCommandErrorHandlerPluginsLogFilterPlugin[] | cdktf.IResolvable) {
    this._logFilterPlugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterPluginInput() {
    return this._logFilterPlugin.internalValue;
  }
}

export class JobCommandErrorHandlerPluginsList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerPlugins[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerPluginsOutputReference {
    return new JobCommandErrorHandlerPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerScriptInterpreter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#args_quoted Job#args_quoted}
  */
  readonly argsQuoted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#invocation_string Job#invocation_string}
  */
  readonly invocationString?: string;
}

export function jobCommandErrorHandlerScriptInterpreterToTerraform(struct?: JobCommandErrorHandlerScriptInterpreter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args_quoted: cdktf.booleanToTerraform(struct!.argsQuoted),
    invocation_string: cdktf.stringToTerraform(struct!.invocationString),
  }
}


export function jobCommandErrorHandlerScriptInterpreterToHclTerraform(struct?: JobCommandErrorHandlerScriptInterpreter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args_quoted: {
      value: cdktf.booleanToHclTerraform(struct!.argsQuoted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invocation_string: {
      value: cdktf.stringToHclTerraform(struct!.invocationString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandErrorHandlerScriptInterpreterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerScriptInterpreter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argsQuoted !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsQuoted = this._argsQuoted;
    }
    if (this._invocationString !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationString = this._invocationString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerScriptInterpreter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argsQuoted = undefined;
      this._invocationString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argsQuoted = value.argsQuoted;
      this._invocationString = value.invocationString;
    }
  }

  // args_quoted - computed: false, optional: true, required: false
  private _argsQuoted?: boolean | cdktf.IResolvable; 
  public get argsQuoted() {
    return this.getBooleanAttribute('args_quoted');
  }
  public set argsQuoted(value: boolean | cdktf.IResolvable) {
    this._argsQuoted = value;
  }
  public resetArgsQuoted() {
    this._argsQuoted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsQuotedInput() {
    return this._argsQuoted;
  }

  // invocation_string - computed: false, optional: true, required: false
  private _invocationString?: string; 
  public get invocationString() {
    return this.getStringAttribute('invocation_string');
  }
  public set invocationString(value: string) {
    this._invocationString = value;
  }
  public resetInvocationString() {
    this._invocationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationStringInput() {
    return this._invocationString;
  }
}

export class JobCommandErrorHandlerScriptInterpreterList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerScriptInterpreter[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerScriptInterpreterOutputReference {
    return new JobCommandErrorHandlerScriptInterpreterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandlerStepPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandErrorHandlerStepPluginToTerraform(struct?: JobCommandErrorHandlerStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandErrorHandlerStepPluginToHclTerraform(struct?: JobCommandErrorHandlerStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandErrorHandlerStepPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandlerStepPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandlerStepPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandErrorHandlerStepPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandlerStepPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerStepPluginOutputReference {
    return new JobCommandErrorHandlerStepPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandErrorHandler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#expand_token_in_script_file Job#expand_token_in_script_file}
  */
  readonly expandTokenInScriptFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#file_extension Job#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#inline_script Job#inline_script}
  */
  readonly inlineScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#keep_going_on_success Job#keep_going_on_success}
  */
  readonly keepGoingOnSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_file Job#script_file}
  */
  readonly scriptFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_file_args Job#script_file_args}
  */
  readonly scriptFileArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_url Job#script_url}
  */
  readonly scriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#shell_command Job#shell_command}
  */
  readonly shellCommand?: string;
  /**
  * job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#job Job#job}
  */
  readonly job?: JobCommandErrorHandlerJob[] | cdktf.IResolvable;
  /**
  * node_step_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_step_plugin Job#node_step_plugin}
  */
  readonly nodeStepPlugin?: JobCommandErrorHandlerNodeStepPlugin[] | cdktf.IResolvable;
  /**
  * plugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#plugins Job#plugins}
  */
  readonly plugins?: JobCommandErrorHandlerPlugins[] | cdktf.IResolvable;
  /**
  * script_interpreter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_interpreter Job#script_interpreter}
  */
  readonly scriptInterpreter?: JobCommandErrorHandlerScriptInterpreter[] | cdktf.IResolvable;
  /**
  * step_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#step_plugin Job#step_plugin}
  */
  readonly stepPlugin?: JobCommandErrorHandlerStepPlugin[] | cdktf.IResolvable;
}

export function jobCommandErrorHandlerToTerraform(struct?: JobCommandErrorHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expand_token_in_script_file: cdktf.booleanToTerraform(struct!.expandTokenInScriptFile),
    file_extension: cdktf.stringToTerraform(struct!.fileExtension),
    inline_script: cdktf.stringToTerraform(struct!.inlineScript),
    keep_going_on_success: cdktf.booleanToTerraform(struct!.keepGoingOnSuccess),
    script_file: cdktf.stringToTerraform(struct!.scriptFile),
    script_file_args: cdktf.stringToTerraform(struct!.scriptFileArgs),
    script_url: cdktf.stringToTerraform(struct!.scriptUrl),
    shell_command: cdktf.stringToTerraform(struct!.shellCommand),
    job: cdktf.listMapper(jobCommandErrorHandlerJobToTerraform, true)(struct!.job),
    node_step_plugin: cdktf.listMapper(jobCommandErrorHandlerNodeStepPluginToTerraform, true)(struct!.nodeStepPlugin),
    plugins: cdktf.listMapper(jobCommandErrorHandlerPluginsToTerraform, true)(struct!.plugins),
    script_interpreter: cdktf.listMapper(jobCommandErrorHandlerScriptInterpreterToTerraform, true)(struct!.scriptInterpreter),
    step_plugin: cdktf.listMapper(jobCommandErrorHandlerStepPluginToTerraform, true)(struct!.stepPlugin),
  }
}


export function jobCommandErrorHandlerToHclTerraform(struct?: JobCommandErrorHandler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expand_token_in_script_file: {
      value: cdktf.booleanToHclTerraform(struct!.expandTokenInScriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_extension: {
      value: cdktf.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_script: {
      value: cdktf.stringToHclTerraform(struct!.inlineScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_going_on_success: {
      value: cdktf.booleanToHclTerraform(struct!.keepGoingOnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_file: {
      value: cdktf.stringToHclTerraform(struct!.scriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_file_args: {
      value: cdktf.stringToHclTerraform(struct!.scriptFileArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_url: {
      value: cdktf.stringToHclTerraform(struct!.scriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell_command: {
      value: cdktf.stringToHclTerraform(struct!.shellCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerJobToHclTerraform, true)(struct!.job),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerJobList",
    },
    node_step_plugin: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerNodeStepPluginToHclTerraform, true)(struct!.nodeStepPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerNodeStepPluginList",
    },
    plugins: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerPluginsToHclTerraform, true)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerPluginsList",
    },
    script_interpreter: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerScriptInterpreterToHclTerraform, true)(struct!.scriptInterpreter),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerScriptInterpreterList",
    },
    step_plugin: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerStepPluginToHclTerraform, true)(struct!.stepPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerStepPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandErrorHandlerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandErrorHandler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expandTokenInScriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandTokenInScriptFile = this._expandTokenInScriptFile;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._inlineScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineScript = this._inlineScript;
    }
    if (this._keepGoingOnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepGoingOnSuccess = this._keepGoingOnSuccess;
    }
    if (this._scriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFile = this._scriptFile;
    }
    if (this._scriptFileArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFileArgs = this._scriptFileArgs;
    }
    if (this._scriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptUrl = this._scriptUrl;
    }
    if (this._shellCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellCommand = this._shellCommand;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._nodeStepPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStepPlugin = this._nodeStepPlugin?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._scriptInterpreter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptInterpreter = this._scriptInterpreter?.internalValue;
    }
    if (this._stepPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepPlugin = this._stepPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandErrorHandler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expandTokenInScriptFile = undefined;
      this._fileExtension = undefined;
      this._inlineScript = undefined;
      this._keepGoingOnSuccess = undefined;
      this._scriptFile = undefined;
      this._scriptFileArgs = undefined;
      this._scriptUrl = undefined;
      this._shellCommand = undefined;
      this._job.internalValue = undefined;
      this._nodeStepPlugin.internalValue = undefined;
      this._plugins.internalValue = undefined;
      this._scriptInterpreter.internalValue = undefined;
      this._stepPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expandTokenInScriptFile = value.expandTokenInScriptFile;
      this._fileExtension = value.fileExtension;
      this._inlineScript = value.inlineScript;
      this._keepGoingOnSuccess = value.keepGoingOnSuccess;
      this._scriptFile = value.scriptFile;
      this._scriptFileArgs = value.scriptFileArgs;
      this._scriptUrl = value.scriptUrl;
      this._shellCommand = value.shellCommand;
      this._job.internalValue = value.job;
      this._nodeStepPlugin.internalValue = value.nodeStepPlugin;
      this._plugins.internalValue = value.plugins;
      this._scriptInterpreter.internalValue = value.scriptInterpreter;
      this._stepPlugin.internalValue = value.stepPlugin;
    }
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

  // expand_token_in_script_file - computed: false, optional: true, required: false
  private _expandTokenInScriptFile?: boolean | cdktf.IResolvable; 
  public get expandTokenInScriptFile() {
    return this.getBooleanAttribute('expand_token_in_script_file');
  }
  public set expandTokenInScriptFile(value: boolean | cdktf.IResolvable) {
    this._expandTokenInScriptFile = value;
  }
  public resetExpandTokenInScriptFile() {
    this._expandTokenInScriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandTokenInScriptFileInput() {
    return this._expandTokenInScriptFile;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // inline_script - computed: false, optional: true, required: false
  private _inlineScript?: string; 
  public get inlineScript() {
    return this.getStringAttribute('inline_script');
  }
  public set inlineScript(value: string) {
    this._inlineScript = value;
  }
  public resetInlineScript() {
    this._inlineScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineScriptInput() {
    return this._inlineScript;
  }

  // keep_going_on_success - computed: false, optional: true, required: false
  private _keepGoingOnSuccess?: boolean | cdktf.IResolvable; 
  public get keepGoingOnSuccess() {
    return this.getBooleanAttribute('keep_going_on_success');
  }
  public set keepGoingOnSuccess(value: boolean | cdktf.IResolvable) {
    this._keepGoingOnSuccess = value;
  }
  public resetKeepGoingOnSuccess() {
    this._keepGoingOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepGoingOnSuccessInput() {
    return this._keepGoingOnSuccess;
  }

  // script_file - computed: false, optional: true, required: false
  private _scriptFile?: string; 
  public get scriptFile() {
    return this.getStringAttribute('script_file');
  }
  public set scriptFile(value: string) {
    this._scriptFile = value;
  }
  public resetScriptFile() {
    this._scriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileInput() {
    return this._scriptFile;
  }

  // script_file_args - computed: false, optional: true, required: false
  private _scriptFileArgs?: string; 
  public get scriptFileArgs() {
    return this.getStringAttribute('script_file_args');
  }
  public set scriptFileArgs(value: string) {
    this._scriptFileArgs = value;
  }
  public resetScriptFileArgs() {
    this._scriptFileArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileArgsInput() {
    return this._scriptFileArgs;
  }

  // script_url - computed: false, optional: true, required: false
  private _scriptUrl?: string; 
  public get scriptUrl() {
    return this.getStringAttribute('script_url');
  }
  public set scriptUrl(value: string) {
    this._scriptUrl = value;
  }
  public resetScriptUrl() {
    this._scriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptUrlInput() {
    return this._scriptUrl;
  }

  // shell_command - computed: false, optional: true, required: false
  private _shellCommand?: string; 
  public get shellCommand() {
    return this.getStringAttribute('shell_command');
  }
  public set shellCommand(value: string) {
    this._shellCommand = value;
  }
  public resetShellCommand() {
    this._shellCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellCommandInput() {
    return this._shellCommand;
  }

  // job - computed: false, optional: true, required: false
  private _job = new JobCommandErrorHandlerJobList(this, "job", false);
  public get job() {
    return this._job;
  }
  public putJob(value: JobCommandErrorHandlerJob[] | cdktf.IResolvable) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // node_step_plugin - computed: false, optional: true, required: false
  private _nodeStepPlugin = new JobCommandErrorHandlerNodeStepPluginList(this, "node_step_plugin", false);
  public get nodeStepPlugin() {
    return this._nodeStepPlugin;
  }
  public putNodeStepPlugin(value: JobCommandErrorHandlerNodeStepPlugin[] | cdktf.IResolvable) {
    this._nodeStepPlugin.internalValue = value;
  }
  public resetNodeStepPlugin() {
    this._nodeStepPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStepPluginInput() {
    return this._nodeStepPlugin.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new JobCommandErrorHandlerPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: JobCommandErrorHandlerPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // script_interpreter - computed: false, optional: true, required: false
  private _scriptInterpreter = new JobCommandErrorHandlerScriptInterpreterList(this, "script_interpreter", false);
  public get scriptInterpreter() {
    return this._scriptInterpreter;
  }
  public putScriptInterpreter(value: JobCommandErrorHandlerScriptInterpreter[] | cdktf.IResolvable) {
    this._scriptInterpreter.internalValue = value;
  }
  public resetScriptInterpreter() {
    this._scriptInterpreter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInterpreterInput() {
    return this._scriptInterpreter.internalValue;
  }

  // step_plugin - computed: false, optional: true, required: false
  private _stepPlugin = new JobCommandErrorHandlerStepPluginList(this, "step_plugin", false);
  public get stepPlugin() {
    return this._stepPlugin;
  }
  public putStepPlugin(value: JobCommandErrorHandlerStepPlugin[] | cdktf.IResolvable) {
    this._stepPlugin.internalValue = value;
  }
  public resetStepPlugin() {
    this._stepPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepPluginInput() {
    return this._stepPlugin.internalValue;
  }
}

export class JobCommandErrorHandlerList extends cdktf.ComplexList {
  public internalValue? : JobCommandErrorHandler[] | cdktf.IResolvable

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
  public get(index: number): JobCommandErrorHandlerOutputReference {
    return new JobCommandErrorHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandJobNodeFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#exclude_filter Job#exclude_filter}
  */
  readonly excludeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#exclude_precedence Job#exclude_precedence}
  */
  readonly excludePrecedence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#filter Job#filter}
  */
  readonly filter?: string;
}

export function jobCommandJobNodeFiltersToTerraform(struct?: JobCommandJobNodeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_filter: cdktf.stringToTerraform(struct!.excludeFilter),
    exclude_precedence: cdktf.booleanToTerraform(struct!.excludePrecedence),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function jobCommandJobNodeFiltersToHclTerraform(struct?: JobCommandJobNodeFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_filter: {
      value: cdktf.stringToHclTerraform(struct!.excludeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_precedence: {
      value: cdktf.booleanToHclTerraform(struct!.excludePrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandJobNodeFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandJobNodeFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFilter = this._excludeFilter;
    }
    if (this._excludePrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrecedence = this._excludePrecedence;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandJobNodeFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeFilter = undefined;
      this._excludePrecedence = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeFilter = value.excludeFilter;
      this._excludePrecedence = value.excludePrecedence;
      this._filter = value.filter;
    }
  }

  // exclude_filter - computed: false, optional: true, required: false
  private _excludeFilter?: string; 
  public get excludeFilter() {
    return this.getStringAttribute('exclude_filter');
  }
  public set excludeFilter(value: string) {
    this._excludeFilter = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter;
  }

  // exclude_precedence - computed: false, optional: true, required: false
  private _excludePrecedence?: boolean | cdktf.IResolvable; 
  public get excludePrecedence() {
    return this.getBooleanAttribute('exclude_precedence');
  }
  public set excludePrecedence(value: boolean | cdktf.IResolvable) {
    this._excludePrecedence = value;
  }
  public resetExcludePrecedence() {
    this._excludePrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrecedenceInput() {
    return this._excludePrecedence;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}

export class JobCommandJobNodeFiltersList extends cdktf.ComplexList {
  public internalValue? : JobCommandJobNodeFilters[] | cdktf.IResolvable

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
  public get(index: number): JobCommandJobNodeFiltersOutputReference {
    return new JobCommandJobNodeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#args Job#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#child_nodes Job#child_nodes}
  */
  readonly childNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#fail_on_disable Job#fail_on_disable}
  */
  readonly failOnDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#group_name Job#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#ignore_notifications Job#ignore_notifications}
  */
  readonly ignoreNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#import_options Job#import_options}
  */
  readonly importOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#name Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#project_name Job#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#run_for_each_node Job#run_for_each_node}
  */
  readonly runForEachNode?: boolean | cdktf.IResolvable;
  /**
  * node_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_filters Job#node_filters}
  */
  readonly nodeFilters?: JobCommandJobNodeFilters[] | cdktf.IResolvable;
}

export function jobCommandJobToTerraform(struct?: JobCommandJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    child_nodes: cdktf.booleanToTerraform(struct!.childNodes),
    fail_on_disable: cdktf.booleanToTerraform(struct!.failOnDisable),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ignore_notifications: cdktf.booleanToTerraform(struct!.ignoreNotifications),
    import_options: cdktf.booleanToTerraform(struct!.importOptions),
    name: cdktf.stringToTerraform(struct!.name),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    run_for_each_node: cdktf.booleanToTerraform(struct!.runForEachNode),
    node_filters: cdktf.listMapper(jobCommandJobNodeFiltersToTerraform, true)(struct!.nodeFilters),
  }
}


export function jobCommandJobToHclTerraform(struct?: JobCommandJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.childNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_disable: {
      value: cdktf.booleanToHclTerraform(struct!.failOnDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    import_options: {
      value: cdktf.booleanToHclTerraform(struct!.importOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_for_each_node: {
      value: cdktf.booleanToHclTerraform(struct!.runForEachNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_filters: {
      value: cdktf.listMapperHcl(jobCommandJobNodeFiltersToHclTerraform, true)(struct!.nodeFilters),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandJobNodeFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._childNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.childNodes = this._childNodes;
    }
    if (this._failOnDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnDisable = this._failOnDisable;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ignoreNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNotifications = this._ignoreNotifications;
    }
    if (this._importOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.importOptions = this._importOptions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._runForEachNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runForEachNode = this._runForEachNode;
    }
    if (this._nodeFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._childNodes = undefined;
      this._failOnDisable = undefined;
      this._groupName = undefined;
      this._ignoreNotifications = undefined;
      this._importOptions = undefined;
      this._name = undefined;
      this._projectName = undefined;
      this._runForEachNode = undefined;
      this._nodeFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._childNodes = value.childNodes;
      this._failOnDisable = value.failOnDisable;
      this._groupName = value.groupName;
      this._ignoreNotifications = value.ignoreNotifications;
      this._importOptions = value.importOptions;
      this._name = value.name;
      this._projectName = value.projectName;
      this._runForEachNode = value.runForEachNode;
      this._nodeFilters.internalValue = value.nodeFilters;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // child_nodes - computed: false, optional: true, required: false
  private _childNodes?: boolean | cdktf.IResolvable; 
  public get childNodes() {
    return this.getBooleanAttribute('child_nodes');
  }
  public set childNodes(value: boolean | cdktf.IResolvable) {
    this._childNodes = value;
  }
  public resetChildNodes() {
    this._childNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childNodesInput() {
    return this._childNodes;
  }

  // fail_on_disable - computed: false, optional: true, required: false
  private _failOnDisable?: boolean | cdktf.IResolvable; 
  public get failOnDisable() {
    return this.getBooleanAttribute('fail_on_disable');
  }
  public set failOnDisable(value: boolean | cdktf.IResolvable) {
    this._failOnDisable = value;
  }
  public resetFailOnDisable() {
    this._failOnDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnDisableInput() {
    return this._failOnDisable;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ignore_notifications - computed: false, optional: true, required: false
  private _ignoreNotifications?: boolean | cdktf.IResolvable; 
  public get ignoreNotifications() {
    return this.getBooleanAttribute('ignore_notifications');
  }
  public set ignoreNotifications(value: boolean | cdktf.IResolvable) {
    this._ignoreNotifications = value;
  }
  public resetIgnoreNotifications() {
    this._ignoreNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNotificationsInput() {
    return this._ignoreNotifications;
  }

  // import_options - computed: false, optional: true, required: false
  private _importOptions?: boolean | cdktf.IResolvable; 
  public get importOptions() {
    return this.getBooleanAttribute('import_options');
  }
  public set importOptions(value: boolean | cdktf.IResolvable) {
    this._importOptions = value;
  }
  public resetImportOptions() {
    this._importOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importOptionsInput() {
    return this._importOptions;
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

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // run_for_each_node - computed: false, optional: true, required: false
  private _runForEachNode?: boolean | cdktf.IResolvable; 
  public get runForEachNode() {
    return this.getBooleanAttribute('run_for_each_node');
  }
  public set runForEachNode(value: boolean | cdktf.IResolvable) {
    this._runForEachNode = value;
  }
  public resetRunForEachNode() {
    this._runForEachNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runForEachNodeInput() {
    return this._runForEachNode;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters = new JobCommandJobNodeFiltersList(this, "node_filters", false);
  public get nodeFilters() {
    return this._nodeFilters;
  }
  public putNodeFilters(value: JobCommandJobNodeFilters[] | cdktf.IResolvable) {
    this._nodeFilters.internalValue = value;
  }
  public resetNodeFilters() {
    this._nodeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters.internalValue;
  }
}

export class JobCommandJobList extends cdktf.ComplexList {
  public internalValue? : JobCommandJob[] | cdktf.IResolvable

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
  public get(index: number): JobCommandJobOutputReference {
    return new JobCommandJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandNodeStepPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandNodeStepPluginToTerraform(struct?: JobCommandNodeStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandNodeStepPluginToHclTerraform(struct?: JobCommandNodeStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandNodeStepPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandNodeStepPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandNodeStepPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandNodeStepPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandNodeStepPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandNodeStepPluginOutputReference {
    return new JobCommandNodeStepPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandPluginsLogFilterPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandPluginsLogFilterPluginToTerraform(struct?: JobCommandPluginsLogFilterPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandPluginsLogFilterPluginToHclTerraform(struct?: JobCommandPluginsLogFilterPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandPluginsLogFilterPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandPluginsLogFilterPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandPluginsLogFilterPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandPluginsLogFilterPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandPluginsLogFilterPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandPluginsLogFilterPluginOutputReference {
    return new JobCommandPluginsLogFilterPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandPlugins {
  /**
  * log_filter_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#log_filter_plugin Job#log_filter_plugin}
  */
  readonly logFilterPlugin: JobCommandPluginsLogFilterPlugin[] | cdktf.IResolvable;
}

export function jobCommandPluginsToTerraform(struct?: JobCommandPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_filter_plugin: cdktf.listMapper(jobCommandPluginsLogFilterPluginToTerraform, true)(struct!.logFilterPlugin),
  }
}


export function jobCommandPluginsToHclTerraform(struct?: JobCommandPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_filter_plugin: {
      value: cdktf.listMapperHcl(jobCommandPluginsLogFilterPluginToHclTerraform, true)(struct!.logFilterPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandPluginsLogFilterPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFilterPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilterPlugin = this._logFilterPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFilterPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFilterPlugin.internalValue = value.logFilterPlugin;
    }
  }

  // log_filter_plugin - computed: false, optional: false, required: true
  private _logFilterPlugin = new JobCommandPluginsLogFilterPluginList(this, "log_filter_plugin", false);
  public get logFilterPlugin() {
    return this._logFilterPlugin;
  }
  public putLogFilterPlugin(value: JobCommandPluginsLogFilterPlugin[] | cdktf.IResolvable) {
    this._logFilterPlugin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterPluginInput() {
    return this._logFilterPlugin.internalValue;
  }
}

export class JobCommandPluginsList extends cdktf.ComplexList {
  public internalValue? : JobCommandPlugins[] | cdktf.IResolvable

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
  public get(index: number): JobCommandPluginsOutputReference {
    return new JobCommandPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandScriptInterpreter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#args_quoted Job#args_quoted}
  */
  readonly argsQuoted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#invocation_string Job#invocation_string}
  */
  readonly invocationString?: string;
}

export function jobCommandScriptInterpreterToTerraform(struct?: JobCommandScriptInterpreter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args_quoted: cdktf.booleanToTerraform(struct!.argsQuoted),
    invocation_string: cdktf.stringToTerraform(struct!.invocationString),
  }
}


export function jobCommandScriptInterpreterToHclTerraform(struct?: JobCommandScriptInterpreter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args_quoted: {
      value: cdktf.booleanToHclTerraform(struct!.argsQuoted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invocation_string: {
      value: cdktf.stringToHclTerraform(struct!.invocationString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandScriptInterpreterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandScriptInterpreter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argsQuoted !== undefined) {
      hasAnyValues = true;
      internalValueResult.argsQuoted = this._argsQuoted;
    }
    if (this._invocationString !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationString = this._invocationString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandScriptInterpreter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argsQuoted = undefined;
      this._invocationString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argsQuoted = value.argsQuoted;
      this._invocationString = value.invocationString;
    }
  }

  // args_quoted - computed: false, optional: true, required: false
  private _argsQuoted?: boolean | cdktf.IResolvable; 
  public get argsQuoted() {
    return this.getBooleanAttribute('args_quoted');
  }
  public set argsQuoted(value: boolean | cdktf.IResolvable) {
    this._argsQuoted = value;
  }
  public resetArgsQuoted() {
    this._argsQuoted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsQuotedInput() {
    return this._argsQuoted;
  }

  // invocation_string - computed: false, optional: true, required: false
  private _invocationString?: string; 
  public get invocationString() {
    return this.getStringAttribute('invocation_string');
  }
  public set invocationString(value: string) {
    this._invocationString = value;
  }
  public resetInvocationString() {
    this._invocationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationStringInput() {
    return this._invocationString;
  }
}

export class JobCommandScriptInterpreterList extends cdktf.ComplexList {
  public internalValue? : JobCommandScriptInterpreter[] | cdktf.IResolvable

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
  public get(index: number): JobCommandScriptInterpreterOutputReference {
    return new JobCommandScriptInterpreterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommandStepPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobCommandStepPluginToTerraform(struct?: JobCommandStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobCommandStepPluginToHclTerraform(struct?: JobCommandStepPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobCommandStepPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommandStepPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommandStepPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobCommandStepPluginList extends cdktf.ComplexList {
  public internalValue? : JobCommandStepPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobCommandStepPluginOutputReference {
    return new JobCommandStepPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#expand_token_in_script_file Job#expand_token_in_script_file}
  */
  readonly expandTokenInScriptFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#file_extension Job#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#inline_script Job#inline_script}
  */
  readonly inlineScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#keep_going_on_success Job#keep_going_on_success}
  */
  readonly keepGoingOnSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_file Job#script_file}
  */
  readonly scriptFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_file_args Job#script_file_args}
  */
  readonly scriptFileArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_url Job#script_url}
  */
  readonly scriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#shell_command Job#shell_command}
  */
  readonly shellCommand?: string;
  /**
  * error_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#error_handler Job#error_handler}
  */
  readonly errorHandler?: JobCommandErrorHandler[] | cdktf.IResolvable;
  /**
  * job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#job Job#job}
  */
  readonly job?: JobCommandJob[] | cdktf.IResolvable;
  /**
  * node_step_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#node_step_plugin Job#node_step_plugin}
  */
  readonly nodeStepPlugin?: JobCommandNodeStepPlugin[] | cdktf.IResolvable;
  /**
  * plugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#plugins Job#plugins}
  */
  readonly plugins?: JobCommandPlugins[] | cdktf.IResolvable;
  /**
  * script_interpreter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#script_interpreter Job#script_interpreter}
  */
  readonly scriptInterpreter?: JobCommandScriptInterpreter[] | cdktf.IResolvable;
  /**
  * step_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#step_plugin Job#step_plugin}
  */
  readonly stepPlugin?: JobCommandStepPlugin[] | cdktf.IResolvable;
}

export function jobCommandToTerraform(struct?: JobCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expand_token_in_script_file: cdktf.booleanToTerraform(struct!.expandTokenInScriptFile),
    file_extension: cdktf.stringToTerraform(struct!.fileExtension),
    inline_script: cdktf.stringToTerraform(struct!.inlineScript),
    keep_going_on_success: cdktf.booleanToTerraform(struct!.keepGoingOnSuccess),
    script_file: cdktf.stringToTerraform(struct!.scriptFile),
    script_file_args: cdktf.stringToTerraform(struct!.scriptFileArgs),
    script_url: cdktf.stringToTerraform(struct!.scriptUrl),
    shell_command: cdktf.stringToTerraform(struct!.shellCommand),
    error_handler: cdktf.listMapper(jobCommandErrorHandlerToTerraform, true)(struct!.errorHandler),
    job: cdktf.listMapper(jobCommandJobToTerraform, true)(struct!.job),
    node_step_plugin: cdktf.listMapper(jobCommandNodeStepPluginToTerraform, true)(struct!.nodeStepPlugin),
    plugins: cdktf.listMapper(jobCommandPluginsToTerraform, true)(struct!.plugins),
    script_interpreter: cdktf.listMapper(jobCommandScriptInterpreterToTerraform, true)(struct!.scriptInterpreter),
    step_plugin: cdktf.listMapper(jobCommandStepPluginToTerraform, true)(struct!.stepPlugin),
  }
}


export function jobCommandToHclTerraform(struct?: JobCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expand_token_in_script_file: {
      value: cdktf.booleanToHclTerraform(struct!.expandTokenInScriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_extension: {
      value: cdktf.stringToHclTerraform(struct!.fileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_script: {
      value: cdktf.stringToHclTerraform(struct!.inlineScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_going_on_success: {
      value: cdktf.booleanToHclTerraform(struct!.keepGoingOnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_file: {
      value: cdktf.stringToHclTerraform(struct!.scriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_file_args: {
      value: cdktf.stringToHclTerraform(struct!.scriptFileArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_url: {
      value: cdktf.stringToHclTerraform(struct!.scriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell_command: {
      value: cdktf.stringToHclTerraform(struct!.shellCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handler: {
      value: cdktf.listMapperHcl(jobCommandErrorHandlerToHclTerraform, true)(struct!.errorHandler),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandErrorHandlerList",
    },
    job: {
      value: cdktf.listMapperHcl(jobCommandJobToHclTerraform, true)(struct!.job),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandJobList",
    },
    node_step_plugin: {
      value: cdktf.listMapperHcl(jobCommandNodeStepPluginToHclTerraform, true)(struct!.nodeStepPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandNodeStepPluginList",
    },
    plugins: {
      value: cdktf.listMapperHcl(jobCommandPluginsToHclTerraform, true)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandPluginsList",
    },
    script_interpreter: {
      value: cdktf.listMapperHcl(jobCommandScriptInterpreterToHclTerraform, true)(struct!.scriptInterpreter),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandScriptInterpreterList",
    },
    step_plugin: {
      value: cdktf.listMapperHcl(jobCommandStepPluginToHclTerraform, true)(struct!.stepPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobCommandStepPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobCommand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expandTokenInScriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandTokenInScriptFile = this._expandTokenInScriptFile;
    }
    if (this._fileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtension = this._fileExtension;
    }
    if (this._inlineScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineScript = this._inlineScript;
    }
    if (this._keepGoingOnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepGoingOnSuccess = this._keepGoingOnSuccess;
    }
    if (this._scriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFile = this._scriptFile;
    }
    if (this._scriptFileArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptFileArgs = this._scriptFileArgs;
    }
    if (this._scriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptUrl = this._scriptUrl;
    }
    if (this._shellCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellCommand = this._shellCommand;
    }
    if (this._errorHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandler = this._errorHandler?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._nodeStepPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStepPlugin = this._nodeStepPlugin?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._scriptInterpreter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptInterpreter = this._scriptInterpreter?.internalValue;
    }
    if (this._stepPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepPlugin = this._stepPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobCommand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expandTokenInScriptFile = undefined;
      this._fileExtension = undefined;
      this._inlineScript = undefined;
      this._keepGoingOnSuccess = undefined;
      this._scriptFile = undefined;
      this._scriptFileArgs = undefined;
      this._scriptUrl = undefined;
      this._shellCommand = undefined;
      this._errorHandler.internalValue = undefined;
      this._job.internalValue = undefined;
      this._nodeStepPlugin.internalValue = undefined;
      this._plugins.internalValue = undefined;
      this._scriptInterpreter.internalValue = undefined;
      this._stepPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expandTokenInScriptFile = value.expandTokenInScriptFile;
      this._fileExtension = value.fileExtension;
      this._inlineScript = value.inlineScript;
      this._keepGoingOnSuccess = value.keepGoingOnSuccess;
      this._scriptFile = value.scriptFile;
      this._scriptFileArgs = value.scriptFileArgs;
      this._scriptUrl = value.scriptUrl;
      this._shellCommand = value.shellCommand;
      this._errorHandler.internalValue = value.errorHandler;
      this._job.internalValue = value.job;
      this._nodeStepPlugin.internalValue = value.nodeStepPlugin;
      this._plugins.internalValue = value.plugins;
      this._scriptInterpreter.internalValue = value.scriptInterpreter;
      this._stepPlugin.internalValue = value.stepPlugin;
    }
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

  // expand_token_in_script_file - computed: false, optional: true, required: false
  private _expandTokenInScriptFile?: boolean | cdktf.IResolvable; 
  public get expandTokenInScriptFile() {
    return this.getBooleanAttribute('expand_token_in_script_file');
  }
  public set expandTokenInScriptFile(value: boolean | cdktf.IResolvable) {
    this._expandTokenInScriptFile = value;
  }
  public resetExpandTokenInScriptFile() {
    this._expandTokenInScriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandTokenInScriptFileInput() {
    return this._expandTokenInScriptFile;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // inline_script - computed: false, optional: true, required: false
  private _inlineScript?: string; 
  public get inlineScript() {
    return this.getStringAttribute('inline_script');
  }
  public set inlineScript(value: string) {
    this._inlineScript = value;
  }
  public resetInlineScript() {
    this._inlineScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineScriptInput() {
    return this._inlineScript;
  }

  // keep_going_on_success - computed: false, optional: true, required: false
  private _keepGoingOnSuccess?: boolean | cdktf.IResolvable; 
  public get keepGoingOnSuccess() {
    return this.getBooleanAttribute('keep_going_on_success');
  }
  public set keepGoingOnSuccess(value: boolean | cdktf.IResolvable) {
    this._keepGoingOnSuccess = value;
  }
  public resetKeepGoingOnSuccess() {
    this._keepGoingOnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepGoingOnSuccessInput() {
    return this._keepGoingOnSuccess;
  }

  // script_file - computed: false, optional: true, required: false
  private _scriptFile?: string; 
  public get scriptFile() {
    return this.getStringAttribute('script_file');
  }
  public set scriptFile(value: string) {
    this._scriptFile = value;
  }
  public resetScriptFile() {
    this._scriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileInput() {
    return this._scriptFile;
  }

  // script_file_args - computed: false, optional: true, required: false
  private _scriptFileArgs?: string; 
  public get scriptFileArgs() {
    return this.getStringAttribute('script_file_args');
  }
  public set scriptFileArgs(value: string) {
    this._scriptFileArgs = value;
  }
  public resetScriptFileArgs() {
    this._scriptFileArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptFileArgsInput() {
    return this._scriptFileArgs;
  }

  // script_url - computed: false, optional: true, required: false
  private _scriptUrl?: string; 
  public get scriptUrl() {
    return this.getStringAttribute('script_url');
  }
  public set scriptUrl(value: string) {
    this._scriptUrl = value;
  }
  public resetScriptUrl() {
    this._scriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptUrlInput() {
    return this._scriptUrl;
  }

  // shell_command - computed: false, optional: true, required: false
  private _shellCommand?: string; 
  public get shellCommand() {
    return this.getStringAttribute('shell_command');
  }
  public set shellCommand(value: string) {
    this._shellCommand = value;
  }
  public resetShellCommand() {
    this._shellCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellCommandInput() {
    return this._shellCommand;
  }

  // error_handler - computed: false, optional: true, required: false
  private _errorHandler = new JobCommandErrorHandlerList(this, "error_handler", false);
  public get errorHandler() {
    return this._errorHandler;
  }
  public putErrorHandler(value: JobCommandErrorHandler[] | cdktf.IResolvable) {
    this._errorHandler.internalValue = value;
  }
  public resetErrorHandler() {
    this._errorHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerInput() {
    return this._errorHandler.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new JobCommandJobList(this, "job", false);
  public get job() {
    return this._job;
  }
  public putJob(value: JobCommandJob[] | cdktf.IResolvable) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // node_step_plugin - computed: false, optional: true, required: false
  private _nodeStepPlugin = new JobCommandNodeStepPluginList(this, "node_step_plugin", false);
  public get nodeStepPlugin() {
    return this._nodeStepPlugin;
  }
  public putNodeStepPlugin(value: JobCommandNodeStepPlugin[] | cdktf.IResolvable) {
    this._nodeStepPlugin.internalValue = value;
  }
  public resetNodeStepPlugin() {
    this._nodeStepPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStepPluginInput() {
    return this._nodeStepPlugin.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new JobCommandPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: JobCommandPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // script_interpreter - computed: false, optional: true, required: false
  private _scriptInterpreter = new JobCommandScriptInterpreterList(this, "script_interpreter", false);
  public get scriptInterpreter() {
    return this._scriptInterpreter;
  }
  public putScriptInterpreter(value: JobCommandScriptInterpreter[] | cdktf.IResolvable) {
    this._scriptInterpreter.internalValue = value;
  }
  public resetScriptInterpreter() {
    this._scriptInterpreter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInterpreterInput() {
    return this._scriptInterpreter.internalValue;
  }

  // step_plugin - computed: false, optional: true, required: false
  private _stepPlugin = new JobCommandStepPluginList(this, "step_plugin", false);
  public get stepPlugin() {
    return this._stepPlugin;
  }
  public putStepPlugin(value: JobCommandStepPlugin[] | cdktf.IResolvable) {
    this._stepPlugin.internalValue = value;
  }
  public resetStepPlugin() {
    this._stepPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepPluginInput() {
    return this._stepPlugin.internalValue;
  }
}

export class JobCommandList extends cdktf.ComplexList {
  public internalValue? : JobCommand[] | cdktf.IResolvable

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
  public get(index: number): JobCommandOutputReference {
    return new JobCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobGlobalLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobGlobalLogFilterToTerraform(struct?: JobGlobalLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobGlobalLogFilterToHclTerraform(struct?: JobGlobalLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobGlobalLogFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobGlobalLogFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobGlobalLogFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobGlobalLogFilterList extends cdktf.ComplexList {
  public internalValue? : JobGlobalLogFilter[] | cdktf.IResolvable

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
  public get(index: number): JobGlobalLogFilterOutputReference {
    return new JobGlobalLogFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobLogLimit {
  /**
  * Enter either "halt" or "truncate" to specify the action to take when the log limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#action Job#action}
  */
  readonly action: string;
  /**
  * Enter either maximum total line-count (e.g. "100"), maximum per-node line-count ("100/node"), or maximum log file size ("100MB", "100KB", etc.), using "GB","MB","KB","B" as Giga- Mega- Kilo- and bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#output Job#output}
  */
  readonly output: string;
  /**
  * Enter either "failed" or "canceled" or any custom status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#status Job#status}
  */
  readonly status: string;
}

export function jobLogLimitToTerraform(struct?: JobLogLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    output: cdktf.stringToTerraform(struct!.output),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function jobLogLimitToHclTerraform(struct?: JobLogLimit | cdktf.IResolvable): any {
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
    output: {
      value: cdktf.stringToHclTerraform(struct!.output),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobLogLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobLogLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._output !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobLogLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._output = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._output = value.output;
      this._status = value.status;
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

  // output - computed: false, optional: false, required: true
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class JobLogLimitList extends cdktf.ComplexList {
  public internalValue? : JobLogLimit[] | cdktf.IResolvable

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
  public get(index: number): JobLogLimitOutputReference {
    return new JobLogLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNotificationEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#attach_log Job#attach_log}
  */
  readonly attachLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#recipients Job#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#subject Job#subject}
  */
  readonly subject?: string;
}

export function jobNotificationEmailToTerraform(struct?: JobNotificationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_log: cdktf.booleanToTerraform(struct!.attachLog),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function jobNotificationEmailToHclTerraform(struct?: JobNotificationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_log: {
      value: cdktf.booleanToHclTerraform(struct!.attachLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNotificationEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNotificationEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachLog = this._attachLog;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNotificationEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachLog = undefined;
      this._recipients = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachLog = value.attachLog;
      this._recipients = value.recipients;
      this._subject = value.subject;
    }
  }

  // attach_log - computed: false, optional: true, required: false
  private _attachLog?: boolean | cdktf.IResolvable; 
  public get attachLog() {
    return this.getBooleanAttribute('attach_log');
  }
  public set attachLog(value: boolean | cdktf.IResolvable) {
    this._attachLog = value;
  }
  public resetAttachLog() {
    this._attachLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachLogInput() {
    return this._attachLog;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class JobNotificationEmailList extends cdktf.ComplexList {
  public internalValue? : JobNotificationEmail[] | cdktf.IResolvable

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
  public get(index: number): JobNotificationEmailOutputReference {
    return new JobNotificationEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNotificationPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#config Job#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobNotificationPluginToTerraform(struct?: JobNotificationPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobNotificationPluginToHclTerraform(struct?: JobNotificationPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class JobNotificationPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNotificationPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNotificationPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

export class JobNotificationPluginList extends cdktf.ComplexList {
  public internalValue? : JobNotificationPlugin[] | cdktf.IResolvable

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
  public get(index: number): JobNotificationPluginOutputReference {
    return new JobNotificationPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobNotification {
  /**
  * The webhook payload format (`json` or `xml`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#format Job#format}
  */
  readonly format?: string;
  /**
  * HTTP method to use for webhook delivery (`post` or `get`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#http_method Job#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Option of `on_success`, `on_failure`, `on_start`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#webhook_urls Job#webhook_urls}
  */
  readonly webhookUrls?: string[];
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#email Job#email}
  */
  readonly email?: JobNotificationEmail[] | cdktf.IResolvable;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#plugin Job#plugin}
  */
  readonly plugin?: JobNotificationPlugin[] | cdktf.IResolvable;
}

export function jobNotificationToTerraform(struct?: JobNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    type: cdktf.stringToTerraform(struct!.type),
    webhook_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webhookUrls),
    email: cdktf.listMapper(jobNotificationEmailToTerraform, true)(struct!.email),
    plugin: cdktf.listMapper(jobNotificationPluginToTerraform, true)(struct!.plugin),
  }
}


export function jobNotificationToHclTerraform(struct?: JobNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
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
    webhook_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webhookUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email: {
      value: cdktf.listMapperHcl(jobNotificationEmailToHclTerraform, true)(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "JobNotificationEmailList",
    },
    plugin: {
      value: cdktf.listMapperHcl(jobNotificationPluginToHclTerraform, true)(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "JobNotificationPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._webhookUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookUrls = this._webhookUrls;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._httpMethod = undefined;
      this._type = undefined;
      this._webhookUrls = undefined;
      this._email.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._httpMethod = value.httpMethod;
      this._type = value.type;
      this._webhookUrls = value.webhookUrls;
      this._email.internalValue = value.email;
      this._plugin.internalValue = value.plugin;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // webhook_urls - computed: false, optional: true, required: false
  private _webhookUrls?: string[]; 
  public get webhookUrls() {
    return this.getListAttribute('webhook_urls');
  }
  public set webhookUrls(value: string[]) {
    this._webhookUrls = value;
  }
  public resetWebhookUrls() {
    this._webhookUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlsInput() {
    return this._webhookUrls;
  }

  // email - computed: false, optional: true, required: false
  private _email = new JobNotificationEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: JobNotificationEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new JobNotificationPluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: JobNotificationPlugin[] | cdktf.IResolvable) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class JobNotificationList extends cdktf.ComplexList {
  public internalValue? : JobNotification[] | cdktf.IResolvable

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
  public get(index: number): JobNotificationOutputReference {
    return new JobNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#allow_multiple_values Job#allow_multiple_values}
  */
  readonly allowMultipleValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#date_format Job#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#default_value Job#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#exposed_to_scripts Job#exposed_to_scripts}
  */
  readonly exposedToScripts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#hidden Job#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#is_date Job#is_date}
  */
  readonly isDate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#label Job#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#multi_value_delimiter Job#multi_value_delimiter}
  */
  readonly multiValueDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#name Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#obscure_input Job#obscure_input}
  */
  readonly obscureInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#require_predefined_choice Job#require_predefined_choice}
  */
  readonly requirePredefinedChoice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#required Job#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#storage_path Job#storage_path}
  */
  readonly storagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#validation_regex Job#validation_regex}
  */
  readonly validationRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#value_choices Job#value_choices}
  */
  readonly valueChoices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#value_choices_url Job#value_choices_url}
  */
  readonly valueChoicesUrl?: string;
}

export function jobOptionToTerraform(struct?: JobOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_multiple_values: cdktf.booleanToTerraform(struct!.allowMultipleValues),
    date_format: cdktf.stringToTerraform(struct!.dateFormat),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    exposed_to_scripts: cdktf.booleanToTerraform(struct!.exposedToScripts),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    is_date: cdktf.booleanToTerraform(struct!.isDate),
    label: cdktf.stringToTerraform(struct!.label),
    multi_value_delimiter: cdktf.stringToTerraform(struct!.multiValueDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    obscure_input: cdktf.booleanToTerraform(struct!.obscureInput),
    require_predefined_choice: cdktf.booleanToTerraform(struct!.requirePredefinedChoice),
    required: cdktf.booleanToTerraform(struct!.required),
    storage_path: cdktf.stringToTerraform(struct!.storagePath),
    type: cdktf.stringToTerraform(struct!.type),
    validation_regex: cdktf.stringToTerraform(struct!.validationRegex),
    value_choices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueChoices),
    value_choices_url: cdktf.stringToTerraform(struct!.valueChoicesUrl),
  }
}


export function jobOptionToHclTerraform(struct?: JobOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_multiple_values: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultipleValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    date_format: {
      value: cdktf.stringToHclTerraform(struct!.dateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exposed_to_scripts: {
      value: cdktf.booleanToHclTerraform(struct!.exposedToScripts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_date: {
      value: cdktf.booleanToHclTerraform(struct!.isDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.multiValueDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obscure_input: {
      value: cdktf.booleanToHclTerraform(struct!.obscureInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_predefined_choice: {
      value: cdktf.booleanToHclTerraform(struct!.requirePredefinedChoice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_path: {
      value: cdktf.stringToHclTerraform(struct!.storagePath),
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
    validation_regex: {
      value: cdktf.stringToHclTerraform(struct!.validationRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_choices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueChoices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value_choices_url: {
      value: cdktf.stringToHclTerraform(struct!.valueChoicesUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMultipleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultipleValues = this._allowMultipleValues;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exposedToScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedToScripts = this._exposedToScripts;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._isDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDate = this._isDate;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._multiValueDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueDelimiter = this._multiValueDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._obscureInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.obscureInput = this._obscureInput;
    }
    if (this._requirePredefinedChoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePredefinedChoice = this._requirePredefinedChoice;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._storagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePath = this._storagePath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validationRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRegex = this._validationRegex;
    }
    if (this._valueChoices !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueChoices = this._valueChoices;
    }
    if (this._valueChoicesUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueChoicesUrl = this._valueChoicesUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMultipleValues = undefined;
      this._dateFormat = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._exposedToScripts = undefined;
      this._hidden = undefined;
      this._isDate = undefined;
      this._label = undefined;
      this._multiValueDelimiter = undefined;
      this._name = undefined;
      this._obscureInput = undefined;
      this._requirePredefinedChoice = undefined;
      this._required = undefined;
      this._storagePath = undefined;
      this._type = undefined;
      this._validationRegex = undefined;
      this._valueChoices = undefined;
      this._valueChoicesUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMultipleValues = value.allowMultipleValues;
      this._dateFormat = value.dateFormat;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._exposedToScripts = value.exposedToScripts;
      this._hidden = value.hidden;
      this._isDate = value.isDate;
      this._label = value.label;
      this._multiValueDelimiter = value.multiValueDelimiter;
      this._name = value.name;
      this._obscureInput = value.obscureInput;
      this._requirePredefinedChoice = value.requirePredefinedChoice;
      this._required = value.required;
      this._storagePath = value.storagePath;
      this._type = value.type;
      this._validationRegex = value.validationRegex;
      this._valueChoices = value.valueChoices;
      this._valueChoicesUrl = value.valueChoicesUrl;
    }
  }

  // allow_multiple_values - computed: false, optional: true, required: false
  private _allowMultipleValues?: boolean | cdktf.IResolvable; 
  public get allowMultipleValues() {
    return this.getBooleanAttribute('allow_multiple_values');
  }
  public set allowMultipleValues(value: boolean | cdktf.IResolvable) {
    this._allowMultipleValues = value;
  }
  public resetAllowMultipleValues() {
    this._allowMultipleValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleValuesInput() {
    return this._allowMultipleValues;
  }

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // exposed_to_scripts - computed: false, optional: true, required: false
  private _exposedToScripts?: boolean | cdktf.IResolvable; 
  public get exposedToScripts() {
    return this.getBooleanAttribute('exposed_to_scripts');
  }
  public set exposedToScripts(value: boolean | cdktf.IResolvable) {
    this._exposedToScripts = value;
  }
  public resetExposedToScripts() {
    this._exposedToScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedToScriptsInput() {
    return this._exposedToScripts;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // is_date - computed: false, optional: true, required: false
  private _isDate?: boolean | cdktf.IResolvable; 
  public get isDate() {
    return this.getBooleanAttribute('is_date');
  }
  public set isDate(value: boolean | cdktf.IResolvable) {
    this._isDate = value;
  }
  public resetIsDate() {
    this._isDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDateInput() {
    return this._isDate;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // multi_value_delimiter - computed: false, optional: true, required: false
  private _multiValueDelimiter?: string; 
  public get multiValueDelimiter() {
    return this.getStringAttribute('multi_value_delimiter');
  }
  public set multiValueDelimiter(value: string) {
    this._multiValueDelimiter = value;
  }
  public resetMultiValueDelimiter() {
    this._multiValueDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueDelimiterInput() {
    return this._multiValueDelimiter;
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

  // obscure_input - computed: false, optional: true, required: false
  private _obscureInput?: boolean | cdktf.IResolvable; 
  public get obscureInput() {
    return this.getBooleanAttribute('obscure_input');
  }
  public set obscureInput(value: boolean | cdktf.IResolvable) {
    this._obscureInput = value;
  }
  public resetObscureInput() {
    this._obscureInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obscureInputInput() {
    return this._obscureInput;
  }

  // require_predefined_choice - computed: false, optional: true, required: false
  private _requirePredefinedChoice?: boolean | cdktf.IResolvable; 
  public get requirePredefinedChoice() {
    return this.getBooleanAttribute('require_predefined_choice');
  }
  public set requirePredefinedChoice(value: boolean | cdktf.IResolvable) {
    this._requirePredefinedChoice = value;
  }
  public resetRequirePredefinedChoice() {
    this._requirePredefinedChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePredefinedChoiceInput() {
    return this._requirePredefinedChoice;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // storage_path - computed: false, optional: true, required: false
  private _storagePath?: string; 
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
  public set storagePath(value: string) {
    this._storagePath = value;
  }
  public resetStoragePath() {
    this._storagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathInput() {
    return this._storagePath;
  }

  // type - computed: false, optional: true, required: false
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

  // validation_regex - computed: false, optional: true, required: false
  private _validationRegex?: string; 
  public get validationRegex() {
    return this.getStringAttribute('validation_regex');
  }
  public set validationRegex(value: string) {
    this._validationRegex = value;
  }
  public resetValidationRegex() {
    this._validationRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRegexInput() {
    return this._validationRegex;
  }

  // value_choices - computed: false, optional: true, required: false
  private _valueChoices?: string[]; 
  public get valueChoices() {
    return this.getListAttribute('value_choices');
  }
  public set valueChoices(value: string[]) {
    this._valueChoices = value;
  }
  public resetValueChoices() {
    this._valueChoices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueChoicesInput() {
    return this._valueChoices;
  }

  // value_choices_url - computed: false, optional: true, required: false
  private _valueChoicesUrl?: string; 
  public get valueChoicesUrl() {
    return this.getStringAttribute('value_choices_url');
  }
  public set valueChoicesUrl(value: string) {
    this._valueChoicesUrl = value;
  }
  public resetValueChoicesUrl() {
    this._valueChoicesUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueChoicesUrlInput() {
    return this._valueChoicesUrl;
  }
}

export class JobOptionList extends cdktf.ComplexList {
  public internalValue? : JobOption[] | cdktf.IResolvable

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
  public get(index: number): JobOptionOutputReference {
    return new JobOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobOrchestrator {
  /**
  * The Node Attribute that shoud be used to rank nodes in High/Low Orchestrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#attribute Job#attribute}
  */
  readonly attribute?: string;
  /**
  * Value for the subset orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#count Job#count}
  */
  readonly count?: number;
  /**
  * Value for the maxPercentage orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#percent Job#percent}
  */
  readonly percent?: number;
  /**
  * Option of `highest` or `lowest` for High/Low Orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#sort Job#sort}
  */
  readonly sort?: string;
  /**
  * Option of `subset`, `rankTiered`, `maxPercentage`, `orchestrator-highest-lowest-attribute`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#type Job#type}
  */
  readonly type: string;
}

export function jobOrchestratorToTerraform(struct?: JobOrchestrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
    sort: cdktf.stringToTerraform(struct!.sort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function jobOrchestratorToHclTerraform(struct?: JobOrchestrator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
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

export class JobOrchestratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobOrchestrator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobOrchestrator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._count = undefined;
      this._percent = undefined;
      this._sort = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._count = value.count;
      this._percent = value.percent;
      this._sort = value.sort;
      this._type = value.type;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
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

export class JobOrchestratorList extends cdktf.ComplexList {
  public internalValue? : JobOrchestrator[] | cdktf.IResolvable

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
  public get(index: number): JobOrchestratorOutputReference {
    return new JobOrchestratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job rundeck_job}
*/
export class Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Job to import
  * @param importFromId The id of the existing Job that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Job to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/0.5.2/docs/resources/job rundeck_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobConfig
  */
  public constructor(scope: Construct, id: string, config: JobConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_job',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowConcurrentExecutions = config.allowConcurrentExecutions;
    this._commandOrderingStrategy = config.commandOrderingStrategy;
    this._continueNextNodeOnError = config.continueNextNodeOnError;
    this._continueOnError = config.continueOnError;
    this._defaultTab = config.defaultTab;
    this._description = config.description;
    this._executionEnabled = config.executionEnabled;
    this._groupName = config.groupName;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._maxThreadCount = config.maxThreadCount;
    this._name = config.name;
    this._nodeFilterExcludePrecedence = config.nodeFilterExcludePrecedence;
    this._nodeFilterExcludeQuery = config.nodeFilterExcludeQuery;
    this._nodeFilterQuery = config.nodeFilterQuery;
    this._nodesSelectedByDefault = config.nodesSelectedByDefault;
    this._preserveOptionsOrder = config.preserveOptionsOrder;
    this._projectName = config.projectName;
    this._rankAttribute = config.rankAttribute;
    this._rankOrder = config.rankOrder;
    this._retry = config.retry;
    this._retryDelay = config.retryDelay;
    this._runnerSelectorFilter = config.runnerSelectorFilter;
    this._runnerSelectorFilterMode = config.runnerSelectorFilterMode;
    this._runnerSelectorFilterType = config.runnerSelectorFilterType;
    this._schedule = config.schedule;
    this._scheduleEnabled = config.scheduleEnabled;
    this._successOnEmptyNodeFilter = config.successOnEmptyNodeFilter;
    this._timeZone = config.timeZone;
    this._timeout = config.timeout;
    this._command.internalValue = config.command;
    this._globalLogFilter.internalValue = config.globalLogFilter;
    this._logLimit.internalValue = config.logLimit;
    this._notification.internalValue = config.notification;
    this._option.internalValue = config.option;
    this._orchestrator.internalValue = config.orchestrator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_concurrent_executions - computed: false, optional: true, required: false
  private _allowConcurrentExecutions?: boolean | cdktf.IResolvable; 
  public get allowConcurrentExecutions() {
    return this.getBooleanAttribute('allow_concurrent_executions');
  }
  public set allowConcurrentExecutions(value: boolean | cdktf.IResolvable) {
    this._allowConcurrentExecutions = value;
  }
  public resetAllowConcurrentExecutions() {
    this._allowConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConcurrentExecutionsInput() {
    return this._allowConcurrentExecutions;
  }

  // command_ordering_strategy - computed: false, optional: true, required: false
  private _commandOrderingStrategy?: string; 
  public get commandOrderingStrategy() {
    return this.getStringAttribute('command_ordering_strategy');
  }
  public set commandOrderingStrategy(value: string) {
    this._commandOrderingStrategy = value;
  }
  public resetCommandOrderingStrategy() {
    this._commandOrderingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandOrderingStrategyInput() {
    return this._commandOrderingStrategy;
  }

  // continue_next_node_on_error - computed: false, optional: true, required: false
  private _continueNextNodeOnError?: boolean | cdktf.IResolvable; 
  public get continueNextNodeOnError() {
    return this.getBooleanAttribute('continue_next_node_on_error');
  }
  public set continueNextNodeOnError(value: boolean | cdktf.IResolvable) {
    this._continueNextNodeOnError = value;
  }
  public resetContinueNextNodeOnError() {
    this._continueNextNodeOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueNextNodeOnErrorInput() {
    return this._continueNextNodeOnError;
  }

  // continue_on_error - computed: false, optional: true, required: false
  private _continueOnError?: boolean | cdktf.IResolvable; 
  public get continueOnError() {
    return this.getBooleanAttribute('continue_on_error');
  }
  public set continueOnError(value: boolean | cdktf.IResolvable) {
    this._continueOnError = value;
  }
  public resetContinueOnError() {
    this._continueOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorInput() {
    return this._continueOnError;
  }

  // default_tab - computed: false, optional: true, required: false
  private _defaultTab?: string; 
  public get defaultTab() {
    return this.getStringAttribute('default_tab');
  }
  public set defaultTab(value: string) {
    this._defaultTab = value;
  }
  public resetDefaultTab() {
    this._defaultTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTabInput() {
    return this._defaultTab;
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

  // execution_enabled - computed: false, optional: true, required: false
  private _executionEnabled?: boolean | cdktf.IResolvable; 
  public get executionEnabled() {
    return this.getBooleanAttribute('execution_enabled');
  }
  public set executionEnabled(value: boolean | cdktf.IResolvable) {
    this._executionEnabled = value;
  }
  public resetExecutionEnabled() {
    this._executionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnabledInput() {
    return this._executionEnabled;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // log_level - computed: false, optional: true, required: false
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

  // max_thread_count - computed: false, optional: true, required: false
  private _maxThreadCount?: number; 
  public get maxThreadCount() {
    return this.getNumberAttribute('max_thread_count');
  }
  public set maxThreadCount(value: number) {
    this._maxThreadCount = value;
  }
  public resetMaxThreadCount() {
    this._maxThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadCountInput() {
    return this._maxThreadCount;
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

  // node_filter_exclude_precedence - computed: false, optional: true, required: false
  private _nodeFilterExcludePrecedence?: boolean | cdktf.IResolvable; 
  public get nodeFilterExcludePrecedence() {
    return this.getBooleanAttribute('node_filter_exclude_precedence');
  }
  public set nodeFilterExcludePrecedence(value: boolean | cdktf.IResolvable) {
    this._nodeFilterExcludePrecedence = value;
  }
  public resetNodeFilterExcludePrecedence() {
    this._nodeFilterExcludePrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFilterExcludePrecedenceInput() {
    return this._nodeFilterExcludePrecedence;
  }

  // node_filter_exclude_query - computed: false, optional: true, required: false
  private _nodeFilterExcludeQuery?: string; 
  public get nodeFilterExcludeQuery() {
    return this.getStringAttribute('node_filter_exclude_query');
  }
  public set nodeFilterExcludeQuery(value: string) {
    this._nodeFilterExcludeQuery = value;
  }
  public resetNodeFilterExcludeQuery() {
    this._nodeFilterExcludeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFilterExcludeQueryInput() {
    return this._nodeFilterExcludeQuery;
  }

  // node_filter_query - computed: false, optional: true, required: false
  private _nodeFilterQuery?: string; 
  public get nodeFilterQuery() {
    return this.getStringAttribute('node_filter_query');
  }
  public set nodeFilterQuery(value: string) {
    this._nodeFilterQuery = value;
  }
  public resetNodeFilterQuery() {
    this._nodeFilterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFilterQueryInput() {
    return this._nodeFilterQuery;
  }

  // nodes_selected_by_default - computed: false, optional: true, required: false
  private _nodesSelectedByDefault?: boolean | cdktf.IResolvable; 
  public get nodesSelectedByDefault() {
    return this.getBooleanAttribute('nodes_selected_by_default');
  }
  public set nodesSelectedByDefault(value: boolean | cdktf.IResolvable) {
    this._nodesSelectedByDefault = value;
  }
  public resetNodesSelectedByDefault() {
    this._nodesSelectedByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesSelectedByDefaultInput() {
    return this._nodesSelectedByDefault;
  }

  // preserve_options_order - computed: true, optional: true, required: false
  private _preserveOptionsOrder?: boolean | cdktf.IResolvable; 
  public get preserveOptionsOrder() {
    return this.getBooleanAttribute('preserve_options_order');
  }
  public set preserveOptionsOrder(value: boolean | cdktf.IResolvable) {
    this._preserveOptionsOrder = value;
  }
  public resetPreserveOptionsOrder() {
    this._preserveOptionsOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveOptionsOrderInput() {
    return this._preserveOptionsOrder;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // rank_attribute - computed: false, optional: true, required: false
  private _rankAttribute?: string; 
  public get rankAttribute() {
    return this.getStringAttribute('rank_attribute');
  }
  public set rankAttribute(value: string) {
    this._rankAttribute = value;
  }
  public resetRankAttribute() {
    this._rankAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankAttributeInput() {
    return this._rankAttribute;
  }

  // rank_order - computed: false, optional: true, required: false
  private _rankOrder?: string; 
  public get rankOrder() {
    return this.getStringAttribute('rank_order');
  }
  public set rankOrder(value: string) {
    this._rankOrder = value;
  }
  public resetRankOrder() {
    this._rankOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankOrderInput() {
    return this._rankOrder;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: string; 
  public get retry() {
    return this.getStringAttribute('retry');
  }
  public set retry(value: string) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: string; 
  public get retryDelay() {
    return this.getStringAttribute('retry_delay');
  }
  public set retryDelay(value: string) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // runner_selector_filter - computed: false, optional: true, required: false
  private _runnerSelectorFilter?: string; 
  public get runnerSelectorFilter() {
    return this.getStringAttribute('runner_selector_filter');
  }
  public set runnerSelectorFilter(value: string) {
    this._runnerSelectorFilter = value;
  }
  public resetRunnerSelectorFilter() {
    this._runnerSelectorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerSelectorFilterInput() {
    return this._runnerSelectorFilter;
  }

  // runner_selector_filter_mode - computed: false, optional: true, required: false
  private _runnerSelectorFilterMode?: string; 
  public get runnerSelectorFilterMode() {
    return this.getStringAttribute('runner_selector_filter_mode');
  }
  public set runnerSelectorFilterMode(value: string) {
    this._runnerSelectorFilterMode = value;
  }
  public resetRunnerSelectorFilterMode() {
    this._runnerSelectorFilterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerSelectorFilterModeInput() {
    return this._runnerSelectorFilterMode;
  }

  // runner_selector_filter_type - computed: false, optional: true, required: false
  private _runnerSelectorFilterType?: string; 
  public get runnerSelectorFilterType() {
    return this.getStringAttribute('runner_selector_filter_type');
  }
  public set runnerSelectorFilterType(value: string) {
    this._runnerSelectorFilterType = value;
  }
  public resetRunnerSelectorFilterType() {
    this._runnerSelectorFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerSelectorFilterTypeInput() {
    return this._runnerSelectorFilterType;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schedule_enabled - computed: false, optional: true, required: false
  private _scheduleEnabled?: boolean | cdktf.IResolvable; 
  public get scheduleEnabled() {
    return this.getBooleanAttribute('schedule_enabled');
  }
  public set scheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._scheduleEnabled = value;
  }
  public resetScheduleEnabled() {
    this._scheduleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEnabledInput() {
    return this._scheduleEnabled;
  }

  // success_on_empty_node_filter - computed: false, optional: true, required: false
  private _successOnEmptyNodeFilter?: boolean | cdktf.IResolvable; 
  public get successOnEmptyNodeFilter() {
    return this.getBooleanAttribute('success_on_empty_node_filter');
  }
  public set successOnEmptyNodeFilter(value: boolean | cdktf.IResolvable) {
    this._successOnEmptyNodeFilter = value;
  }
  public resetSuccessOnEmptyNodeFilter() {
    this._successOnEmptyNodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successOnEmptyNodeFilterInput() {
    return this._successOnEmptyNodeFilter;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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

  // command - computed: false, optional: false, required: true
  private _command = new JobCommandList(this, "command", false);
  public get command() {
    return this._command;
  }
  public putCommand(value: JobCommand[] | cdktf.IResolvable) {
    this._command.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // global_log_filter - computed: false, optional: true, required: false
  private _globalLogFilter = new JobGlobalLogFilterList(this, "global_log_filter", false);
  public get globalLogFilter() {
    return this._globalLogFilter;
  }
  public putGlobalLogFilter(value: JobGlobalLogFilter[] | cdktf.IResolvable) {
    this._globalLogFilter.internalValue = value;
  }
  public resetGlobalLogFilter() {
    this._globalLogFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalLogFilterInput() {
    return this._globalLogFilter.internalValue;
  }

  // log_limit - computed: false, optional: true, required: false
  private _logLimit = new JobLogLimitList(this, "log_limit", false);
  public get logLimit() {
    return this._logLimit;
  }
  public putLogLimit(value: JobLogLimit[] | cdktf.IResolvable) {
    this._logLimit.internalValue = value;
  }
  public resetLogLimit() {
    this._logLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLimitInput() {
    return this._logLimit.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new JobNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: JobNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // option - computed: false, optional: true, required: false
  private _option = new JobOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: JobOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // orchestrator - computed: false, optional: true, required: false
  private _orchestrator = new JobOrchestratorList(this, "orchestrator", false);
  public get orchestrator() {
    return this._orchestrator;
  }
  public putOrchestrator(value: JobOrchestrator[] | cdktf.IResolvable) {
    this._orchestrator.internalValue = value;
  }
  public resetOrchestrator() {
    this._orchestrator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorInput() {
    return this._orchestrator.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_concurrent_executions: cdktf.booleanToTerraform(this._allowConcurrentExecutions),
      command_ordering_strategy: cdktf.stringToTerraform(this._commandOrderingStrategy),
      continue_next_node_on_error: cdktf.booleanToTerraform(this._continueNextNodeOnError),
      continue_on_error: cdktf.booleanToTerraform(this._continueOnError),
      default_tab: cdktf.stringToTerraform(this._defaultTab),
      description: cdktf.stringToTerraform(this._description),
      execution_enabled: cdktf.booleanToTerraform(this._executionEnabled),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      max_thread_count: cdktf.numberToTerraform(this._maxThreadCount),
      name: cdktf.stringToTerraform(this._name),
      node_filter_exclude_precedence: cdktf.booleanToTerraform(this._nodeFilterExcludePrecedence),
      node_filter_exclude_query: cdktf.stringToTerraform(this._nodeFilterExcludeQuery),
      node_filter_query: cdktf.stringToTerraform(this._nodeFilterQuery),
      nodes_selected_by_default: cdktf.booleanToTerraform(this._nodesSelectedByDefault),
      preserve_options_order: cdktf.booleanToTerraform(this._preserveOptionsOrder),
      project_name: cdktf.stringToTerraform(this._projectName),
      rank_attribute: cdktf.stringToTerraform(this._rankAttribute),
      rank_order: cdktf.stringToTerraform(this._rankOrder),
      retry: cdktf.stringToTerraform(this._retry),
      retry_delay: cdktf.stringToTerraform(this._retryDelay),
      runner_selector_filter: cdktf.stringToTerraform(this._runnerSelectorFilter),
      runner_selector_filter_mode: cdktf.stringToTerraform(this._runnerSelectorFilterMode),
      runner_selector_filter_type: cdktf.stringToTerraform(this._runnerSelectorFilterType),
      schedule: cdktf.stringToTerraform(this._schedule),
      schedule_enabled: cdktf.booleanToTerraform(this._scheduleEnabled),
      success_on_empty_node_filter: cdktf.booleanToTerraform(this._successOnEmptyNodeFilter),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      timeout: cdktf.stringToTerraform(this._timeout),
      command: cdktf.listMapper(jobCommandToTerraform, true)(this._command.internalValue),
      global_log_filter: cdktf.listMapper(jobGlobalLogFilterToTerraform, true)(this._globalLogFilter.internalValue),
      log_limit: cdktf.listMapper(jobLogLimitToTerraform, true)(this._logLimit.internalValue),
      notification: cdktf.listMapper(jobNotificationToTerraform, true)(this._notification.internalValue),
      option: cdktf.listMapper(jobOptionToTerraform, true)(this._option.internalValue),
      orchestrator: cdktf.listMapper(jobOrchestratorToTerraform, true)(this._orchestrator.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_concurrent_executions: {
        value: cdktf.booleanToHclTerraform(this._allowConcurrentExecutions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      command_ordering_strategy: {
        value: cdktf.stringToHclTerraform(this._commandOrderingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continue_next_node_on_error: {
        value: cdktf.booleanToHclTerraform(this._continueNextNodeOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continue_on_error: {
        value: cdktf.booleanToHclTerraform(this._continueOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_tab: {
        value: cdktf.stringToHclTerraform(this._defaultTab),
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
      execution_enabled: {
        value: cdktf.booleanToHclTerraform(this._executionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_thread_count: {
        value: cdktf.numberToHclTerraform(this._maxThreadCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_filter_exclude_precedence: {
        value: cdktf.booleanToHclTerraform(this._nodeFilterExcludePrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_filter_exclude_query: {
        value: cdktf.stringToHclTerraform(this._nodeFilterExcludeQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_filter_query: {
        value: cdktf.stringToHclTerraform(this._nodeFilterQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes_selected_by_default: {
        value: cdktf.booleanToHclTerraform(this._nodesSelectedByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preserve_options_order: {
        value: cdktf.booleanToHclTerraform(this._preserveOptionsOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank_attribute: {
        value: cdktf.stringToHclTerraform(this._rankAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rank_order: {
        value: cdktf.stringToHclTerraform(this._rankOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.stringToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_delay: {
        value: cdktf.stringToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_selector_filter: {
        value: cdktf.stringToHclTerraform(this._runnerSelectorFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_selector_filter_mode: {
        value: cdktf.stringToHclTerraform(this._runnerSelectorFilterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runner_selector_filter_type: {
        value: cdktf.stringToHclTerraform(this._runnerSelectorFilterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_enabled: {
        value: cdktf.booleanToHclTerraform(this._scheduleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      success_on_empty_node_filter: {
        value: cdktf.booleanToHclTerraform(this._successOnEmptyNodeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
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
      command: {
        value: cdktf.listMapperHcl(jobCommandToHclTerraform, true)(this._command.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobCommandList",
      },
      global_log_filter: {
        value: cdktf.listMapperHcl(jobGlobalLogFilterToHclTerraform, true)(this._globalLogFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobGlobalLogFilterList",
      },
      log_limit: {
        value: cdktf.listMapperHcl(jobLogLimitToHclTerraform, true)(this._logLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobLogLimitList",
      },
      notification: {
        value: cdktf.listMapperHcl(jobNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobNotificationList",
      },
      option: {
        value: cdktf.listMapperHcl(jobOptionToHclTerraform, true)(this._option.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobOptionList",
      },
      orchestrator: {
        value: cdktf.listMapperHcl(jobOrchestratorToHclTerraform, true)(this._orchestrator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobOrchestratorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
