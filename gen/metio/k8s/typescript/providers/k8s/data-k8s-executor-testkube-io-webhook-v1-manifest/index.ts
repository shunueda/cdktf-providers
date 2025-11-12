// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExecutorTestkubeIoWebhookV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#metadata DataK8SExecutorTestkubeIoWebhookV1Manifest#metadata}
  */
  readonly metadata: DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata;
  /**
  * WebhookSpec defines the desired state of Webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#spec DataK8SExecutorTestkubeIoWebhookV1Manifest#spec}
  */
  readonly spec?: DataK8SExecutorTestkubeIoWebhookV1ManifestSpec;
}
export interface DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#annotations DataK8SExecutorTestkubeIoWebhookV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#labels DataK8SExecutorTestkubeIoWebhookV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#name DataK8SExecutorTestkubeIoWebhookV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#namespace DataK8SExecutorTestkubeIoWebhookV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExecutorTestkubeIoWebhookV1ManifestMetadataToTerraform(struct?: DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExecutorTestkubeIoWebhookV1ManifestMetadataToHclTerraform(struct?: DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutorTestkubeIoWebhookV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SExecutorTestkubeIoWebhookV1ManifestSpec {
  /**
  * Disabled will disable the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#disabled DataK8SExecutorTestkubeIoWebhookV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Events declare list if events on which webhook should be called
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#events DataK8SExecutorTestkubeIoWebhookV1Manifest#events}
  */
  readonly events?: string[];
  /**
  * webhook headers (golang template supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#headers DataK8SExecutorTestkubeIoWebhookV1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * OnStateChange will trigger the webhook only when the result of the current execution differs from the previous result of the same test/test suite/workflow Deprecated: field is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#on_state_change DataK8SExecutorTestkubeIoWebhookV1Manifest#on_state_change}
  */
  readonly onStateChange?: boolean | cdktf.IResolvable;
  /**
  * will load the generated payload for notification inside the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#payload_object_field DataK8SExecutorTestkubeIoWebhookV1Manifest#payload_object_field}
  */
  readonly payloadObjectField?: string;
  /**
  * golang based template for notification payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#payload_template DataK8SExecutorTestkubeIoWebhookV1Manifest#payload_template}
  */
  readonly payloadTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#payload_template_reference DataK8SExecutorTestkubeIoWebhookV1Manifest#payload_template_reference}
  */
  readonly payloadTemplateReference?: string;
  /**
  * Labels to filter for tests and test suites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#selector DataK8SExecutorTestkubeIoWebhookV1Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Uri is address where webhook should be made (golang template supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#uri DataK8SExecutorTestkubeIoWebhookV1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SExecutorTestkubeIoWebhookV1ManifestSpecToTerraform(struct?: DataK8SExecutorTestkubeIoWebhookV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    on_state_change: cdktf.booleanToTerraform(struct!.onStateChange),
    payload_object_field: cdktf.stringToTerraform(struct!.payloadObjectField),
    payload_template: cdktf.stringToTerraform(struct!.payloadTemplate),
    payload_template_reference: cdktf.stringToTerraform(struct!.payloadTemplateReference),
    selector: cdktf.stringToTerraform(struct!.selector),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SExecutorTestkubeIoWebhookV1ManifestSpecToHclTerraform(struct?: DataK8SExecutorTestkubeIoWebhookV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_state_change: {
      value: cdktf.booleanToHclTerraform(struct!.onStateChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    payload_object_field: {
      value: cdktf.stringToHclTerraform(struct!.payloadObjectField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_template: {
      value: cdktf.stringToHclTerraform(struct!.payloadTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.payloadTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutorTestkubeIoWebhookV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoWebhookV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._onStateChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStateChange = this._onStateChange;
    }
    if (this._payloadObjectField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadObjectField = this._payloadObjectField;
    }
    if (this._payloadTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTemplate = this._payloadTemplate;
    }
    if (this._payloadTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTemplateReference = this._payloadTemplateReference;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutorTestkubeIoWebhookV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._events = undefined;
      this._headers = undefined;
      this._onStateChange = undefined;
      this._payloadObjectField = undefined;
      this._payloadTemplate = undefined;
      this._payloadTemplateReference = undefined;
      this._selector = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._events = value.events;
      this._headers = value.headers;
      this._onStateChange = value.onStateChange;
      this._payloadObjectField = value.payloadObjectField;
      this._payloadTemplate = value.payloadTemplate;
      this._payloadTemplateReference = value.payloadTemplateReference;
      this._selector = value.selector;
      this._uri = value.uri;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // on_state_change - computed: false, optional: true, required: false
  private _onStateChange?: boolean | cdktf.IResolvable; 
  public get onStateChange() {
    return this.getBooleanAttribute('on_state_change');
  }
  public set onStateChange(value: boolean | cdktf.IResolvable) {
    this._onStateChange = value;
  }
  public resetOnStateChange() {
    this._onStateChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStateChangeInput() {
    return this._onStateChange;
  }

  // payload_object_field - computed: false, optional: true, required: false
  private _payloadObjectField?: string; 
  public get payloadObjectField() {
    return this.getStringAttribute('payload_object_field');
  }
  public set payloadObjectField(value: string) {
    this._payloadObjectField = value;
  }
  public resetPayloadObjectField() {
    this._payloadObjectField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadObjectFieldInput() {
    return this._payloadObjectField;
  }

  // payload_template - computed: false, optional: true, required: false
  private _payloadTemplate?: string; 
  public get payloadTemplate() {
    return this.getStringAttribute('payload_template');
  }
  public set payloadTemplate(value: string) {
    this._payloadTemplate = value;
  }
  public resetPayloadTemplate() {
    this._payloadTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTemplateInput() {
    return this._payloadTemplate;
  }

  // payload_template_reference - computed: false, optional: true, required: false
  private _payloadTemplateReference?: string; 
  public get payloadTemplateReference() {
    return this.getStringAttribute('payload_template_reference');
  }
  public set payloadTemplateReference(value: string) {
    this._payloadTemplateReference = value;
  }
  public resetPayloadTemplateReference() {
    this._payloadTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTemplateReferenceInput() {
    return this._payloadTemplateReference;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest k8s_executor_testkube_io_webhook_v1_manifest}
*/
export class DataK8SExecutorTestkubeIoWebhookV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_executor_testkube_io_webhook_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExecutorTestkubeIoWebhookV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExecutorTestkubeIoWebhookV1Manifest to import
  * @param importFromId The id of the existing DataK8SExecutorTestkubeIoWebhookV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExecutorTestkubeIoWebhookV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_executor_testkube_io_webhook_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/executor_testkube_io_webhook_v1_manifest k8s_executor_testkube_io_webhook_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExecutorTestkubeIoWebhookV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExecutorTestkubeIoWebhookV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_executor_testkube_io_webhook_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SExecutorTestkubeIoWebhookV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExecutorTestkubeIoWebhookV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExecutorTestkubeIoWebhookV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SExecutorTestkubeIoWebhookV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExecutorTestkubeIoWebhookV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExecutorTestkubeIoWebhookV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutorTestkubeIoWebhookV1ManifestMetadata",
      },
      spec: {
        value: dataK8SExecutorTestkubeIoWebhookV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutorTestkubeIoWebhookV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
