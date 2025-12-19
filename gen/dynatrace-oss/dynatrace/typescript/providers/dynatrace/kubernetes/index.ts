// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ActiveGate Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#active_gate_group Kubernetes#active_gate_group}
  */
  readonly activeGateGroup?: string;
  /**
  * Create a bearer token for [Kubernetes](https://dt-url.net/og43szq "Kubernetes") or [OpenShift](https://dt-url.net/7l43xtp "OpenShift").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#auth_token Kubernetes#auth_token}
  */
  readonly authToken?: string;
  /**
  * Require valid certificates for communication with API server (recommended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#certificate_check_enabled Kubernetes#certificate_check_enabled}
  */
  readonly certificateCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Monitor Kubernetes namespaces, services, workloads, and pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#cloud_application_pipeline_enabled Kubernetes#cloud_application_pipeline_enabled}
  */
  readonly cloudApplicationPipelineEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the cluster, the containerized ActiveGate is deployed to. Defaults to the UUID of the kube-system namespace. The cluster ID of containerized ActiveGates is shown on the Deployment status screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#cluster_id Kubernetes#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * For more information on local Kubernetes API monitoring, see the [documentation](https://dt-url.net/6q62uep).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#cluster_id_enabled Kubernetes#cluster_id_enabled}
  */
  readonly clusterIdEnabled: boolean | cdktf.IResolvable;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#enabled Kubernetes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Get the API URL for [Kubernetes](https://dt-url.net/kz23snj "Kubernetes") or [OpenShift](https://dt-url.net/d623xgw "OpenShift").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#endpoint_url Kubernetes#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * All events are monitored by default unless event filters are specified.
  * 
  * Kubernetes events are subject to Davis data units (DDU) licensing.
  * See [DDUs for events](https://dt-url.net/5n03vcu) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#event_processing_active Kubernetes#event_processing_active}
  */
  readonly eventProcessingActive?: boolean | cdktf.IResolvable;
  /**
  * Include only events specified by Events Field Selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#filter_events Kubernetes#filter_events}
  */
  readonly filterEvents?: boolean | cdktf.IResolvable;
  /**
  * Verify hostname in certificate against Kubernetes API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#hostname_verification_enabled Kubernetes#hostname_verification_enabled}
  */
  readonly hostnameVerificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#id Kubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For a list of included events, see the [documentation](https://dt-url.net/l61d02no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#include_all_fdi_events Kubernetes#include_all_fdi_events}
  */
  readonly includeAllFdiEvents?: boolean | cdktf.IResolvable;
  /**
  * Renaming the cluster breaks configurations that are based on its name (e.g., management zones, and alerting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#label Kubernetes#label}
  */
  readonly label: string;
  /**
  * The workload resource metrics are based on a subset of cAdvisor metrics. Depending on your Kubernetes cluster size, this may increase the CPU/memory resource consumption of your ActiveGate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#open_metrics_builtin_enabled Kubernetes#open_metrics_builtin_enabled}
  */
  readonly openMetricsBuiltinEnabled?: boolean | cdktf.IResolvable;
  /**
  * For annotation guidance, see the [documentation](https://dt-url.net/g42i0ppw).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#open_metrics_pipeline_enabled Kubernetes#open_metrics_pipeline_enabled}
  */
  readonly openMetricsPipelineEnabled?: boolean | cdktf.IResolvable;
  /**
  * To enable dashboards and alerts, add the [Kubernetes persistent volume claims](ui/hub/ext/com.dynatrace.extension.kubernetes-pvc) extension to your environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#pvc_monitoring_enabled Kubernetes#pvc_monitoring_enabled}
  */
  readonly pvcMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (KUBERNETES_CLUSTER)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#scope Kubernetes#scope}
  */
  readonly scope?: string;
  /**
  * event_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#event_patterns Kubernetes#event_patterns}
  */
  readonly eventPatterns?: KubernetesEventPatterns;
}
export interface KubernetesEventPatternsEventPattern {
  /**
  * Activate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#active Kubernetes#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Field selector name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#label Kubernetes#label}
  */
  readonly label: string;
  /**
  * The set of allowed characters for this field has been extended with ActiveGate version 1.259. For more details, see the [documentation](https://dt-url.net/7h23wuk#set-up-event-field-selectors).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#pattern Kubernetes#pattern}
  */
  readonly pattern: string;
}

export function kubernetesEventPatternsEventPatternToTerraform(struct?: KubernetesEventPatternsEventPattern | cdktf.IResolvable): any {
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


export function kubernetesEventPatternsEventPatternToHclTerraform(struct?: KubernetesEventPatternsEventPattern | cdktf.IResolvable): any {
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

export class KubernetesEventPatternsEventPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesEventPatternsEventPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesEventPatternsEventPattern | cdktf.IResolvable | undefined) {
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

export class KubernetesEventPatternsEventPatternList extends cdktf.ComplexList {
  public internalValue? : KubernetesEventPatternsEventPattern[] | cdktf.IResolvable

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
  public get(index: number): KubernetesEventPatternsEventPatternOutputReference {
    return new KubernetesEventPatternsEventPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesEventPatterns {
  /**
  * event_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#event_pattern Kubernetes#event_pattern}
  */
  readonly eventPattern: KubernetesEventPatternsEventPattern[] | cdktf.IResolvable;
}

export function kubernetesEventPatternsToTerraform(struct?: KubernetesEventPatternsOutputReference | KubernetesEventPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_pattern: cdktf.listMapper(kubernetesEventPatternsEventPatternToTerraform, true)(struct!.eventPattern),
  }
}


export function kubernetesEventPatternsToHclTerraform(struct?: KubernetesEventPatternsOutputReference | KubernetesEventPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_pattern: {
      value: cdktf.listMapperHcl(kubernetesEventPatternsEventPatternToHclTerraform, true)(struct!.eventPattern),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesEventPatternsEventPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesEventPatternsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesEventPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesEventPatterns | undefined) {
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
  private _eventPattern = new KubernetesEventPatternsEventPatternList(this, "event_pattern", false);
  public get eventPattern() {
    return this._eventPattern;
  }
  public putEventPattern(value: KubernetesEventPatternsEventPattern[] | cdktf.IResolvable) {
    this._eventPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes dynatrace_kubernetes}
*/
export class Kubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kubernetes to import
  * @param importFromId The id of the existing Kubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/kubernetes dynatrace_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeGateGroup = config.activeGateGroup;
    this._authToken = config.authToken;
    this._certificateCheckEnabled = config.certificateCheckEnabled;
    this._cloudApplicationPipelineEnabled = config.cloudApplicationPipelineEnabled;
    this._clusterId = config.clusterId;
    this._clusterIdEnabled = config.clusterIdEnabled;
    this._enabled = config.enabled;
    this._endpointUrl = config.endpointUrl;
    this._eventProcessingActive = config.eventProcessingActive;
    this._filterEvents = config.filterEvents;
    this._hostnameVerificationEnabled = config.hostnameVerificationEnabled;
    this._id = config.id;
    this._includeAllFdiEvents = config.includeAllFdiEvents;
    this._label = config.label;
    this._openMetricsBuiltinEnabled = config.openMetricsBuiltinEnabled;
    this._openMetricsPipelineEnabled = config.openMetricsPipelineEnabled;
    this._pvcMonitoringEnabled = config.pvcMonitoringEnabled;
    this._scope = config.scope;
    this._eventPatterns.internalValue = config.eventPatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_gate_group - computed: false, optional: true, required: false
  private _activeGateGroup?: string; 
  public get activeGateGroup() {
    return this.getStringAttribute('active_gate_group');
  }
  public set activeGateGroup(value: string) {
    this._activeGateGroup = value;
  }
  public resetActiveGateGroup() {
    this._activeGateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeGateGroupInput() {
    return this._activeGateGroup;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // certificate_check_enabled - computed: false, optional: true, required: false
  private _certificateCheckEnabled?: boolean | cdktf.IResolvable; 
  public get certificateCheckEnabled() {
    return this.getBooleanAttribute('certificate_check_enabled');
  }
  public set certificateCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._certificateCheckEnabled = value;
  }
  public resetCertificateCheckEnabled() {
    this._certificateCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCheckEnabledInput() {
    return this._certificateCheckEnabled;
  }

  // cloud_application_pipeline_enabled - computed: false, optional: true, required: false
  private _cloudApplicationPipelineEnabled?: boolean | cdktf.IResolvable; 
  public get cloudApplicationPipelineEnabled() {
    return this.getBooleanAttribute('cloud_application_pipeline_enabled');
  }
  public set cloudApplicationPipelineEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudApplicationPipelineEnabled = value;
  }
  public resetCloudApplicationPipelineEnabled() {
    this._cloudApplicationPipelineEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationPipelineEnabledInput() {
    return this._cloudApplicationPipelineEnabled;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_id_enabled - computed: false, optional: false, required: true
  private _clusterIdEnabled?: boolean | cdktf.IResolvable; 
  public get clusterIdEnabled() {
    return this.getBooleanAttribute('cluster_id_enabled');
  }
  public set clusterIdEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterIdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdEnabledInput() {
    return this._clusterIdEnabled;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // event_processing_active - computed: false, optional: true, required: false
  private _eventProcessingActive?: boolean | cdktf.IResolvable; 
  public get eventProcessingActive() {
    return this.getBooleanAttribute('event_processing_active');
  }
  public set eventProcessingActive(value: boolean | cdktf.IResolvable) {
    this._eventProcessingActive = value;
  }
  public resetEventProcessingActive() {
    this._eventProcessingActive = undefined;
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

  // hostname_verification_enabled - computed: false, optional: true, required: false
  private _hostnameVerificationEnabled?: boolean | cdktf.IResolvable; 
  public get hostnameVerificationEnabled() {
    return this.getBooleanAttribute('hostname_verification_enabled');
  }
  public set hostnameVerificationEnabled(value: boolean | cdktf.IResolvable) {
    this._hostnameVerificationEnabled = value;
  }
  public resetHostnameVerificationEnabled() {
    this._hostnameVerificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVerificationEnabledInput() {
    return this._hostnameVerificationEnabled;
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

  // open_metrics_builtin_enabled - computed: false, optional: true, required: false
  private _openMetricsBuiltinEnabled?: boolean | cdktf.IResolvable; 
  public get openMetricsBuiltinEnabled() {
    return this.getBooleanAttribute('open_metrics_builtin_enabled');
  }
  public set openMetricsBuiltinEnabled(value: boolean | cdktf.IResolvable) {
    this._openMetricsBuiltinEnabled = value;
  }
  public resetOpenMetricsBuiltinEnabled() {
    this._openMetricsBuiltinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMetricsBuiltinEnabledInput() {
    return this._openMetricsBuiltinEnabled;
  }

  // open_metrics_pipeline_enabled - computed: false, optional: true, required: false
  private _openMetricsPipelineEnabled?: boolean | cdktf.IResolvable; 
  public get openMetricsPipelineEnabled() {
    return this.getBooleanAttribute('open_metrics_pipeline_enabled');
  }
  public set openMetricsPipelineEnabled(value: boolean | cdktf.IResolvable) {
    this._openMetricsPipelineEnabled = value;
  }
  public resetOpenMetricsPipelineEnabled() {
    this._openMetricsPipelineEnabled = undefined;
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
  private _eventPatterns = new KubernetesEventPatternsOutputReference(this, "event_patterns");
  public get eventPatterns() {
    return this._eventPatterns;
  }
  public putEventPatterns(value: KubernetesEventPatterns) {
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
      active_gate_group: cdktf.stringToTerraform(this._activeGateGroup),
      auth_token: cdktf.stringToTerraform(this._authToken),
      certificate_check_enabled: cdktf.booleanToTerraform(this._certificateCheckEnabled),
      cloud_application_pipeline_enabled: cdktf.booleanToTerraform(this._cloudApplicationPipelineEnabled),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_id_enabled: cdktf.booleanToTerraform(this._clusterIdEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      event_processing_active: cdktf.booleanToTerraform(this._eventProcessingActive),
      filter_events: cdktf.booleanToTerraform(this._filterEvents),
      hostname_verification_enabled: cdktf.booleanToTerraform(this._hostnameVerificationEnabled),
      id: cdktf.stringToTerraform(this._id),
      include_all_fdi_events: cdktf.booleanToTerraform(this._includeAllFdiEvents),
      label: cdktf.stringToTerraform(this._label),
      open_metrics_builtin_enabled: cdktf.booleanToTerraform(this._openMetricsBuiltinEnabled),
      open_metrics_pipeline_enabled: cdktf.booleanToTerraform(this._openMetricsPipelineEnabled),
      pvc_monitoring_enabled: cdktf.booleanToTerraform(this._pvcMonitoringEnabled),
      scope: cdktf.stringToTerraform(this._scope),
      event_patterns: kubernetesEventPatternsToTerraform(this._eventPatterns.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_gate_group: {
        value: cdktf.stringToHclTerraform(this._activeGateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._certificateCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_application_pipeline_enabled: {
        value: cdktf.booleanToHclTerraform(this._cloudApplicationPipelineEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._clusterIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_url: {
        value: cdktf.stringToHclTerraform(this._endpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      hostname_verification_enabled: {
        value: cdktf.booleanToHclTerraform(this._hostnameVerificationEnabled),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: kubernetesEventPatternsToHclTerraform(this._eventPatterns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesEventPatternsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
