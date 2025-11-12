// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration.  If not set on creation, the `true` value is used.  If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#active K8SCredentials#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Active Gate group to filter active gates for this credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#active_gate_group K8SCredentials#active_gate_group}
  */
  readonly activeGateGroup?: string;
  /**
  * The service account bearer token for the Kubernetes API server.  Submit your token on creation or update of the configuration. For security reasons, GET requests return this field as `null`.  If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#auth_token K8SCredentials#auth_token}
  */
  readonly authToken?: string;
  /**
  * The check of SSL certificates is enabled (`true`) or disabled (`false`) for the Kubernetes cluster.  If not set on creation, the `true` value is used.  If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#certificate_check_enabled K8SCredentials#certificate_check_enabled}
  */
  readonly certificateCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Inclusion of all Davis relevant events is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#davis_events_integration_enabled K8SCredentials#davis_events_integration_enabled}
  */
  readonly davisEventsIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The URL of the Kubernetes API server.  It must be unique within a Dynatrace environment.  The URL must valid according to RFC 2396. Leading or trailing whitespaces are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#endpoint_url K8SCredentials#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Event analysis and alerting is (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#event_analysis_and_alerting_enabled K8SCredentials#event_analysis_and_alerting_enabled}
  */
  readonly eventAnalysisAndAlertingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Monitoring of events is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. Event monitoring depends on the active state of this configuration to be true.  If not set on creation, the `false` value is used.  If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#events_integration_enabled K8SCredentials#events_integration_enabled}
  */
  readonly eventsIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Verify hostname in certificate against Kubernetes API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#hostname_verification K8SCredentials#hostname_verification}
  */
  readonly hostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#id K8SCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Kubernetes credentials configuration.  Allowed characters are letters, numbers, whitespaces, and the following characters: `.+-_`. Leading or trailing whitespace is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#label K8SCredentials#label}
  */
  readonly label: string;
  /**
  * Prometheus exporters integration is enabled (`true`) or disabled (`false`) for the Kubernetes cluster.If the field is omitted during an update, the old value remains unaffected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#prometheus_exporters K8SCredentials#prometheus_exporters}
  */
  readonly prometheusExporters?: boolean | cdktf.IResolvable;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#unknowns K8SCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Workload and cloud application processing is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#workload_integration_enabled K8SCredentials#workload_integration_enabled}
  */
  readonly workloadIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * events_field_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#events_field_selectors K8SCredentials#events_field_selectors}
  */
  readonly eventsFieldSelectors?: K8SCredentialsEventsFieldSelectors[] | cdktf.IResolvable;
}
export interface K8SCredentialsEventsFieldSelectors {
  /**
  * Whether subscription to this events field selector is enabled (value set to `true`). If disabled (value set to `false`), Dynatrace will stop fetching events from the Kubernetes API for this events field selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#active K8SCredentials#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The field selector string (url decoding is applied) when storing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#field_selector K8SCredentials#field_selector}
  */
  readonly fieldSelector: string;
  /**
  * A label of the events field selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#label K8SCredentials#label}
  */
  readonly label: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#unknowns K8SCredentials#unknowns}
  */
  readonly unknowns?: string;
}

export function k8SCredentialsEventsFieldSelectorsToTerraform(struct?: K8SCredentialsEventsFieldSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    label: cdktf.stringToTerraform(struct!.label),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function k8SCredentialsEventsFieldSelectorsToHclTerraform(struct?: K8SCredentialsEventsFieldSelectors | cdktf.IResolvable): any {
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
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SCredentialsEventsFieldSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SCredentialsEventsFieldSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SCredentialsEventsFieldSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._fieldSelector = undefined;
      this._label = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._fieldSelector = value.fieldSelector;
      this._label = value.label;
      this._unknowns = value.unknowns;
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

  // field_selector - computed: false, optional: false, required: true
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class K8SCredentialsEventsFieldSelectorsList extends cdktf.ComplexList {
  public internalValue? : K8SCredentialsEventsFieldSelectors[] | cdktf.IResolvable

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
  public get(index: number): K8SCredentialsEventsFieldSelectorsOutputReference {
    return new K8SCredentialsEventsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials dynatrace_k8s_credentials}
*/
export class K8SCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_k8s_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SCredentials to import
  * @param importFromId The id of the existing K8SCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_k8s_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/k8s_credentials dynatrace_k8s_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: K8SCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_k8s_credentials',
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
    this._active = config.active;
    this._activeGateGroup = config.activeGateGroup;
    this._authToken = config.authToken;
    this._certificateCheckEnabled = config.certificateCheckEnabled;
    this._davisEventsIntegrationEnabled = config.davisEventsIntegrationEnabled;
    this._endpointUrl = config.endpointUrl;
    this._eventAnalysisAndAlertingEnabled = config.eventAnalysisAndAlertingEnabled;
    this._eventsIntegrationEnabled = config.eventsIntegrationEnabled;
    this._hostnameVerification = config.hostnameVerification;
    this._id = config.id;
    this._label = config.label;
    this._prometheusExporters = config.prometheusExporters;
    this._unknowns = config.unknowns;
    this._workloadIntegrationEnabled = config.workloadIntegrationEnabled;
    this._eventsFieldSelectors.internalValue = config.eventsFieldSelectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

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

  // davis_events_integration_enabled - computed: false, optional: true, required: false
  private _davisEventsIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get davisEventsIntegrationEnabled() {
    return this.getBooleanAttribute('davis_events_integration_enabled');
  }
  public set davisEventsIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._davisEventsIntegrationEnabled = value;
  }
  public resetDavisEventsIntegrationEnabled() {
    this._davisEventsIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisEventsIntegrationEnabledInput() {
    return this._davisEventsIntegrationEnabled;
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

  // event_analysis_and_alerting_enabled - computed: false, optional: true, required: false
  private _eventAnalysisAndAlertingEnabled?: boolean | cdktf.IResolvable; 
  public get eventAnalysisAndAlertingEnabled() {
    return this.getBooleanAttribute('event_analysis_and_alerting_enabled');
  }
  public set eventAnalysisAndAlertingEnabled(value: boolean | cdktf.IResolvable) {
    this._eventAnalysisAndAlertingEnabled = value;
  }
  public resetEventAnalysisAndAlertingEnabled() {
    this._eventAnalysisAndAlertingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventAnalysisAndAlertingEnabledInput() {
    return this._eventAnalysisAndAlertingEnabled;
  }

  // events_integration_enabled - computed: false, optional: true, required: false
  private _eventsIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get eventsIntegrationEnabled() {
    return this.getBooleanAttribute('events_integration_enabled');
  }
  public set eventsIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._eventsIntegrationEnabled = value;
  }
  public resetEventsIntegrationEnabled() {
    this._eventsIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsIntegrationEnabledInput() {
    return this._eventsIntegrationEnabled;
  }

  // hostname_verification - computed: false, optional: true, required: false
  private _hostnameVerification?: boolean | cdktf.IResolvable; 
  public get hostnameVerification() {
    return this.getBooleanAttribute('hostname_verification');
  }
  public set hostnameVerification(value: boolean | cdktf.IResolvable) {
    this._hostnameVerification = value;
  }
  public resetHostnameVerification() {
    this._hostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameVerificationInput() {
    return this._hostnameVerification;
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

  // prometheus_exporters - computed: false, optional: true, required: false
  private _prometheusExporters?: boolean | cdktf.IResolvable; 
  public get prometheusExporters() {
    return this.getBooleanAttribute('prometheus_exporters');
  }
  public set prometheusExporters(value: boolean | cdktf.IResolvable) {
    this._prometheusExporters = value;
  }
  public resetPrometheusExporters() {
    this._prometheusExporters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusExportersInput() {
    return this._prometheusExporters;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // workload_integration_enabled - computed: false, optional: true, required: false
  private _workloadIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get workloadIntegrationEnabled() {
    return this.getBooleanAttribute('workload_integration_enabled');
  }
  public set workloadIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._workloadIntegrationEnabled = value;
  }
  public resetWorkloadIntegrationEnabled() {
    this._workloadIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIntegrationEnabledInput() {
    return this._workloadIntegrationEnabled;
  }

  // events_field_selectors - computed: false, optional: true, required: false
  private _eventsFieldSelectors = new K8SCredentialsEventsFieldSelectorsList(this, "events_field_selectors", false);
  public get eventsFieldSelectors() {
    return this._eventsFieldSelectors;
  }
  public putEventsFieldSelectors(value: K8SCredentialsEventsFieldSelectors[] | cdktf.IResolvable) {
    this._eventsFieldSelectors.internalValue = value;
  }
  public resetEventsFieldSelectors() {
    this._eventsFieldSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsFieldSelectorsInput() {
    return this._eventsFieldSelectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      active_gate_group: cdktf.stringToTerraform(this._activeGateGroup),
      auth_token: cdktf.stringToTerraform(this._authToken),
      certificate_check_enabled: cdktf.booleanToTerraform(this._certificateCheckEnabled),
      davis_events_integration_enabled: cdktf.booleanToTerraform(this._davisEventsIntegrationEnabled),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      event_analysis_and_alerting_enabled: cdktf.booleanToTerraform(this._eventAnalysisAndAlertingEnabled),
      events_integration_enabled: cdktf.booleanToTerraform(this._eventsIntegrationEnabled),
      hostname_verification: cdktf.booleanToTerraform(this._hostnameVerification),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      prometheus_exporters: cdktf.booleanToTerraform(this._prometheusExporters),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      workload_integration_enabled: cdktf.booleanToTerraform(this._workloadIntegrationEnabled),
      events_field_selectors: cdktf.listMapper(k8SCredentialsEventsFieldSelectorsToTerraform, true)(this._eventsFieldSelectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      davis_events_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._davisEventsIntegrationEnabled),
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
      event_analysis_and_alerting_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventAnalysisAndAlertingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventsIntegrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname_verification: {
        value: cdktf.booleanToHclTerraform(this._hostnameVerification),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus_exporters: {
        value: cdktf.booleanToHclTerraform(this._prometheusExporters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._workloadIntegrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_field_selectors: {
        value: cdktf.listMapperHcl(k8SCredentialsEventsFieldSelectorsToHclTerraform, true)(this._eventsFieldSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SCredentialsEventsFieldSelectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
