// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SListenersStackableTechListenerClassV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#metadata DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata;
  /**
  * Defines a policy for how [Listeners](https://docs.stackable.tech/home/nightly/listener-operator/listener) should be exposed. Read the [ListenerClass documentation](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#spec DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec;
}
export interface DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#annotations DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#labels DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#name DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec {
  /**
  * Whether addresses should prefer using the IP address ('IP') or the hostname ('Hostname'). The other type will be used if the preferred type is not available. By default 'Hostname' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#preferred_address_type DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#preferred_address_type}
  */
  readonly preferredAddressType?: string;
  /**
  * Annotations that should be added to the Service object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#service_annotations DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * 'externalTrafficPolicy' that should be set on the created ['Service'] objects. The default is 'Local' (in contrast to 'Cluster'), as we aim to direct traffic to a node running the workload and we should keep testing that as the primary configuration. Cluster is a fallback option for providers that break Local mode (IONOS so far).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#service_external_traffic_policy DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#service_external_traffic_policy}
  */
  readonly serviceExternalTrafficPolicy?: string;
  /**
  * The method used to access the services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#service_type DataK8SListenersStackableTechListenerClassV1Alpha1Manifest#service_type}
  */
  readonly serviceType: string;
}

export function dataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecToTerraform(struct?: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_address_type: cdktf.stringToTerraform(struct!.preferredAddressType),
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    service_external_traffic_policy: cdktf.stringToTerraform(struct!.serviceExternalTrafficPolicy),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_address_type: {
      value: cdktf.stringToHclTerraform(struct!.preferredAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.serviceExternalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAddressType = this._preferredAddressType;
    }
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._serviceExternalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExternalTrafficPolicy = this._serviceExternalTrafficPolicy;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredAddressType = undefined;
      this._serviceAnnotations = undefined;
      this._serviceExternalTrafficPolicy = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredAddressType = value.preferredAddressType;
      this._serviceAnnotations = value.serviceAnnotations;
      this._serviceExternalTrafficPolicy = value.serviceExternalTrafficPolicy;
      this._serviceType = value.serviceType;
    }
  }

  // preferred_address_type - computed: false, optional: true, required: false
  private _preferredAddressType?: string; 
  public get preferredAddressType() {
    return this.getStringAttribute('preferred_address_type');
  }
  public set preferredAddressType(value: string) {
    this._preferredAddressType = value;
  }
  public resetPreferredAddressType() {
    this._preferredAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAddressTypeInput() {
    return this._preferredAddressType;
  }

  // service_annotations - computed: false, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }

  // service_external_traffic_policy - computed: false, optional: true, required: false
  private _serviceExternalTrafficPolicy?: string; 
  public get serviceExternalTrafficPolicy() {
    return this.getStringAttribute('service_external_traffic_policy');
  }
  public set serviceExternalTrafficPolicy(value: string) {
    this._serviceExternalTrafficPolicy = value;
  }
  public resetServiceExternalTrafficPolicy() {
    this._serviceExternalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExternalTrafficPolicyInput() {
    return this._serviceExternalTrafficPolicy;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest k8s_listeners_stackable_tech_listener_class_v1alpha1_manifest}
*/
export class DataK8SListenersStackableTechListenerClassV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_listeners_stackable_tech_listener_class_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SListenersStackableTechListenerClassV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SListenersStackableTechListenerClassV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SListenersStackableTechListenerClassV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SListenersStackableTechListenerClassV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_listeners_stackable_tech_listener_class_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/listeners_stackable_tech_listener_class_v1alpha1_manifest k8s_listeners_stackable_tech_listener_class_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SListenersStackableTechListenerClassV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_listeners_stackable_tech_listener_class_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SListenersStackableTechListenerClassV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SListenersStackableTechListenerClassV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
