// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Monitor Kubernetes namespaces, services, workloads, and pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#cloud_application_pipeline_enabled K8SMonitoring#cloud_application_pipeline_enabled}
  */
  readonly cloudApplicationPipelineEnabled: boolean | cdktf.IResolvable;
  /**
  * All events are monitored unless event filters are specified. All ingested events are subject to licensing by default.
  * 
  * If you have a DPS license see [licensing documentation](https://dt-url.net/cee34zj) for details.
  * 
  * If you have a non-DPS license see [DDUs for events](https://dt-url.net/5n03vcu) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#event_processing_active K8SMonitoring#event_processing_active}
  */
  readonly eventProcessingActive: boolean | cdktf.IResolvable;
  /**
  * Include only events specified by Events Field Selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#filter_events K8SMonitoring#filter_events}
  */
  readonly filterEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#id K8SMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For a list of included events, see the [documentation](https://dt-url.net/l61d02no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#include_all_fdi_events K8SMonitoring#include_all_fdi_events}
  */
  readonly includeAllFdiEvents?: boolean | cdktf.IResolvable;
  /**
  * Workload and node resource metrics are based on a subset of cAdvisor metrics. Depending on your Kubernetes cluster size, this may increase the CPU/memory resource consumption of your ActiveGate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#open_metrics_builtin_enabled K8SMonitoring#open_metrics_builtin_enabled}
  */
  readonly openMetricsBuiltinEnabled: boolean | cdktf.IResolvable;
  /**
  * For annotation guidance, see the [documentation](https://dt-url.net/g42i0ppw).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#open_metrics_pipeline_enabled K8SMonitoring#open_metrics_pipeline_enabled}
  */
  readonly openMetricsPipelineEnabled: boolean | cdktf.IResolvable;
  /**
  * To enable dashboards and alerts, add the [Kubernetes persistent volume claims](ui/hub/ext/com.dynatrace.extension.kubernetes-pvc) extension to your environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#pvc_monitoring_enabled K8SMonitoring#pvc_monitoring_enabled}
  */
  readonly pvcMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (KUBERNETES_CLUSTER). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#scope K8SMonitoring#scope}
  */
  readonly scope?: string;
  /**
  * event_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#event_patterns K8SMonitoring#event_patterns}
  */
  readonly eventPatterns?: K8SMonitoringEventPatterns;
}
export interface K8SMonitoringEventPatternsEventPattern {
  /**
  * Activate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#active K8SMonitoring#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Field selector name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#label K8SMonitoring#label}
  */
  readonly label: string;
  /**
  * The set of allowed characters for this field has been extended with ActiveGate version 1.259. For more details, see the [documentation](https://dt-url.net/7h23wuk#set-up-event-field-selectors).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#pattern K8SMonitoring#pattern}
  */
  readonly pattern: string;
}

export function k8SMonitoringEventPatternsEventPatternToTerraform(struct?: K8SMonitoringEventPatternsEventPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    label: cdktf.stringToTerraform(struct!.label),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function k8SMonitoringEventPatternsEventPatternToHclTerraform(struct?: K8SMonitoringEventPatternsEventPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SMonitoringEventPatternsEventPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SMonitoringEventPatternsEventPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SMonitoringEventPatternsEventPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._label = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._label = value.label;
      this._pattern = value.pattern;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class K8SMonitoringEventPatternsEventPatternList extends cdktf.ComplexList {
  public internalValue? : K8SMonitoringEventPatternsEventPattern[] | cdktf.IResolvable

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
  public get(index: number): K8SMonitoringEventPatternsEventPatternOutputReference {
    return new K8SMonitoringEventPatternsEventPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SMonitoringEventPatterns {
  /**
  * event_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#event_pattern K8SMonitoring#event_pattern}
  */
  readonly eventPattern: K8SMonitoringEventPatternsEventPattern[] | cdktf.IResolvable;
}

export function k8SMonitoringEventPatternsToTerraform(struct?: K8SMonitoringEventPatternsOutputReference | K8SMonitoringEventPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_pattern: cdktf.listMapper(k8SMonitoringEventPatternsEventPatternToTerraform, true)(struct!.eventPattern),
  }
}


export function k8SMonitoringEventPatternsToHclTerraform(struct?: K8SMonitoringEventPatternsOutputReference | K8SMonitoringEventPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_pattern: {
      value: cdktf.listMapperHcl(k8SMonitoringEventPatternsEventPatternToHclTerraform, true)(struct!.eventPattern),
      isBlock: true,
      type: "list",
      storageClassType: "K8SMonitoringEventPatternsEventPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SMonitoringEventPatternsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SMonitoringEventPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SMonitoringEventPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventPattern.internalValue = value.eventPattern;
    }
  }

  // event_pattern - computed: false, optional: false, required: true
  private _eventPattern = new K8SMonitoringEventPatternsEventPatternList(this, "event_pattern", false);
  public get eventPattern() {
    return this._eventPattern;
  }
  public putEventPattern(value: K8SMonitoringEventPatternsEventPattern[] | cdktf.IResolvable) {
    this._eventPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring dynatrace_k8s_monitoring}
*/
export class K8SMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SMonitoring to import
  * @param importFromId The id of the existing K8SMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_monitoring dynatrace_k8s_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: K8SMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudApplicationPipelineEnabled = config.cloudApplicationPipelineEnabled;
    this._eventProcessingActive = config.eventProcessingActive;
    this._filterEvents = config.filterEvents;
    this._id = config.id;
    this._includeAllFdiEvents = config.includeAllFdiEvents;
    this._openMetricsBuiltinEnabled = config.openMetricsBuiltinEnabled;
    this._openMetricsPipelineEnabled = config.openMetricsPipelineEnabled;
    this._pvcMonitoringEnabled = config.pvcMonitoringEnabled;
    this._scope = config.scope;
    this._eventPatterns.internalValue = config.eventPatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_application_pipeline_enabled - computed: false, optional: false, required: true
  private _cloudApplicationPipelineEnabled?: boolean | cdktf.IResolvable; 
  public get cloudApplicationPipelineEnabled() {
    return this.getBooleanAttribute('cloud_application_pipeline_enabled');
  }
  public set cloudApplicationPipelineEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudApplicationPipelineEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationPipelineEnabledInput() {
    return this._cloudApplicationPipelineEnabled;
  }

  // event_processing_active - computed: false, optional: false, required: true
  private _eventProcessingActive?: boolean | cdktf.IResolvable; 
  public get eventProcessingActive() {
    return this.getBooleanAttribute('event_processing_active');
  }
  public set eventProcessingActive(value: boolean | cdktf.IResolvable) {
    this._eventProcessingActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProcessingActiveInput() {
    return this._eventProcessingActive;
  }

  // filter_events - computed: false, optional: true, required: false
  private _filterEvents?: boolean | cdktf.IResolvable; 
  public get filterEvents() {
    return this.getBooleanAttribute('filter_events');
  }
  public set filterEvents(value: boolean | cdktf.IResolvable) {
    this._filterEvents = value;
  }
  public resetFilterEvents() {
    this._filterEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEventsInput() {
    return this._filterEvents;
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

  // include_all_fdi_events - computed: false, optional: true, required: false
  private _includeAllFdiEvents?: boolean | cdktf.IResolvable; 
  public get includeAllFdiEvents() {
    return this.getBooleanAttribute('include_all_fdi_events');
  }
  public set includeAllFdiEvents(value: boolean | cdktf.IResolvable) {
    this._includeAllFdiEvents = value;
  }
  public resetIncludeAllFdiEvents() {
    this._includeAllFdiEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllFdiEventsInput() {
    return this._includeAllFdiEvents;
  }

  // open_metrics_builtin_enabled - computed: false, optional: false, required: true
  private _openMetricsBuiltinEnabled?: boolean | cdktf.IResolvable; 
  public get openMetricsBuiltinEnabled() {
    return this.getBooleanAttribute('open_metrics_builtin_enabled');
  }
  public set openMetricsBuiltinEnabled(value: boolean | cdktf.IResolvable) {
    this._openMetricsBuiltinEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openMetricsBuiltinEnabledInput() {
    return this._openMetricsBuiltinEnabled;
  }

  // open_metrics_pipeline_enabled - computed: false, optional: false, required: true
  private _openMetricsPipelineEnabled?: boolean | cdktf.IResolvable; 
  public get openMetricsPipelineEnabled() {
    return this.getBooleanAttribute('open_metrics_pipeline_enabled');
  }
  public set openMetricsPipelineEnabled(value: boolean | cdktf.IResolvable) {
    this._openMetricsPipelineEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openMetricsPipelineEnabledInput() {
    return this._openMetricsPipelineEnabled;
  }

  // pvc_monitoring_enabled - computed: false, optional: true, required: false
  private _pvcMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get pvcMonitoringEnabled() {
    return this.getBooleanAttribute('pvc_monitoring_enabled');
  }
  public set pvcMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._pvcMonitoringEnabled = value;
  }
  public resetPvcMonitoringEnabled() {
    this._pvcMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcMonitoringEnabledInput() {
    return this._pvcMonitoringEnabled;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // event_patterns - computed: false, optional: true, required: false
  private _eventPatterns = new K8SMonitoringEventPatternsOutputReference(this, "event_patterns");
  public get eventPatterns() {
    return this._eventPatterns;
  }
  public putEventPatterns(value: K8SMonitoringEventPatterns) {
    this._eventPatterns.internalValue = value;
  }
  public resetEventPatterns() {
    this._eventPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternsInput() {
    return this._eventPatterns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_application_pipeline_enabled: cdktf.booleanToTerraform(this._cloudApplicationPipelineEnabled),
      event_processing_active: cdktf.booleanToTerraform(this._eventProcessingActive),
      filter_events: cdktf.booleanToTerraform(this._filterEvents),
      id: cdktf.stringToTerraform(this._id),
      include_all_fdi_events: cdktf.booleanToTerraform(this._includeAllFdiEvents),
      open_metrics_builtin_enabled: cdktf.booleanToTerraform(this._openMetricsBuiltinEnabled),
      open_metrics_pipeline_enabled: cdktf.booleanToTerraform(this._openMetricsPipelineEnabled),
      pvc_monitoring_enabled: cdktf.booleanToTerraform(this._pvcMonitoringEnabled),
      scope: cdktf.stringToTerraform(this._scope),
      event_patterns: k8SMonitoringEventPatternsToTerraform(this._eventPatterns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_application_pipeline_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudApplicationPipelineEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_processing_active: {
        value: cdktf.booleanToHclTerraform(this._eventProcessingActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_events: {
        value: cdktf.booleanToHclTerraform(this._filterEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_all_fdi_events: {
        value: cdktf.booleanToHclTerraform(this._includeAllFdiEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_metrics_builtin_enabled: {
        value: cdktf.booleanToHclTerraform(this._openMetricsBuiltinEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_metrics_pipeline_enabled: {
        value: cdktf.booleanToHclTerraform(this._openMetricsPipelineEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pvc_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._pvcMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_patterns: {
        value: k8SMonitoringEventPatternsToHclTerraform(this._eventPatterns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SMonitoringEventPatternsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
