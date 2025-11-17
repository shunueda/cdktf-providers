// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#metadata DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata;
  /**
  * OcmAgentSpec defines the desired state of OcmAgent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#spec DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec;
}
export interface DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#annotations DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#labels DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#name DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#namespace DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig {
  /**
  * OcmBaseUrl defines the OCM api endpoint for OCM agent to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#ocm_base_url DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#ocm_base_url}
  */
  readonly ocmBaseUrl: string;
  /**
  * Services defines the supported OCM services, eg, service_log, cluster_management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#services DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#services}
  */
  readonly services: string[];
}

export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocm_base_url: cdktf.stringToTerraform(struct!.ocmBaseUrl),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocm_base_url: {
      value: cdktf.stringToHclTerraform(struct!.ocmBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocmBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocmBaseUrl = this._ocmBaseUrl;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocmBaseUrl = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocmBaseUrl = value.ocmBaseUrl;
      this._services = value.services;
    }
  }

  // ocm_base_url - computed: false, optional: false, required: true
  private _ocmBaseUrl?: string; 
  public get ocmBaseUrl() {
    return this.getStringAttribute('ocm_base_url');
  }
  public set ocmBaseUrl(value: string) {
    this._ocmBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocmBaseUrlInput() {
    return this._ocmBaseUrl;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec {
  /**
  * AgentConfig refers to OCM agent config fields separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#agent_config DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#agent_config}
  */
  readonly agentConfig: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig;
  /**
  * FleetMode indicates if the OCM agent is running in fleet mode, default to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#fleet_mode DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#fleet_mode}
  */
  readonly fleetMode?: boolean | cdktf.IResolvable;
  /**
  * OcmAgentImage defines the image which will be used by the OCM Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#ocm_agent_image DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#ocm_agent_image}
  */
  readonly ocmAgentImage: string;
  /**
  * Replicas defines the replica count for the OCM Agent service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#replicas DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * TokenSecret points to the secret name which stores the access token to OCM server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#token_secret DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest#token_secret}
  */
  readonly tokenSecret: string;
}

export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_config: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigToTerraform(struct!.agentConfig),
    fleet_mode: cdktf.booleanToTerraform(struct!.fleetMode),
    ocm_agent_image: cdktf.stringToTerraform(struct!.ocmAgentImage),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
  }
}


export function dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_config: {
      value: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig",
    },
    fleet_mode: {
      value: cdktf.booleanToHclTerraform(struct!.fleetMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocm_agent_image: {
      value: cdktf.stringToHclTerraform(struct!.ocmAgentImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._fleetMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetMode = this._fleetMode;
    }
    if (this._ocmAgentImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocmAgentImage = this._ocmAgentImage;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = undefined;
      this._fleetMode = undefined;
      this._ocmAgentImage = undefined;
      this._replicas = undefined;
      this._tokenSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentConfig.internalValue = value.agentConfig;
      this._fleetMode = value.fleetMode;
      this._ocmAgentImage = value.ocmAgentImage;
      this._replicas = value.replicas;
      this._tokenSecret = value.tokenSecret;
    }
  }

  // agent_config - computed: false, optional: false, required: true
  private _agentConfig = new DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // fleet_mode - computed: false, optional: true, required: false
  private _fleetMode?: boolean | cdktf.IResolvable; 
  public get fleetMode() {
    return this.getBooleanAttribute('fleet_mode');
  }
  public set fleetMode(value: boolean | cdktf.IResolvable) {
    this._fleetMode = value;
  }
  public resetFleetMode() {
    this._fleetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetModeInput() {
    return this._fleetMode;
  }

  // ocm_agent_image - computed: false, optional: false, required: true
  private _ocmAgentImage?: string; 
  public get ocmAgentImage() {
    return this.getStringAttribute('ocm_agent_image');
  }
  public set ocmAgentImage(value: string) {
    this._ocmAgentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocmAgentImageInput() {
    return this._ocmAgentImage;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // token_secret - computed: false, optional: false, required: true
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest k8s_ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest}
*/
export class DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest k8s_ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ocmagent_managed_openshift_io_ocm_agent_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOcmagentManagedOpenshiftIoOcmAgentV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
