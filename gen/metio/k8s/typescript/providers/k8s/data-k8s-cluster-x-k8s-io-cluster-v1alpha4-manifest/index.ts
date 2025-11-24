// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#spec DataK8SClusterXK8SIoClusterV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec;
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#cidr_blocks DataK8SClusterXK8SIoClusterV1Alpha4Manifest#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#cidr_blocks DataK8SClusterXK8SIoClusterV1Alpha4Manifest#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork {
  /**
  * APIServerPort specifies the port the API Server should bind to. Defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#api_server_port DataK8SClusterXK8SIoClusterV1Alpha4Manifest#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * The network ranges from which Pod networks are allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#pods DataK8SClusterXK8SIoClusterV1Alpha4Manifest#pods}
  */
  readonly pods?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods;
  /**
  * Domain name for services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#service_domain DataK8SClusterXK8SIoClusterV1Alpha4Manifest#service_domain}
  */
  readonly serviceDomain?: string;
  /**
  * The network ranges from which service VIPs are allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#services DataK8SClusterXK8SIoClusterV1Alpha4Manifest#services}
  */
  readonly services?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    pods: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsToTerraform(struct!.pods),
    service_domain: cdktf.stringToTerraform(struct!.serviceDomain),
    services: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesToTerraform(struct!.services),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods",
    },
    service_domain: {
      value: cdktf.stringToHclTerraform(struct!.serviceDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._serviceDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDomain = this._serviceDomain;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServerPort = undefined;
      this._pods.internalValue = undefined;
      this._serviceDomain = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServerPort = value.apiServerPort;
      this._pods.internalValue = value.pods;
      this._serviceDomain = value.serviceDomain;
      this._services.internalValue = value.services;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // service_domain - computed: false, optional: true, required: false
  private _serviceDomain?: string; 
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }
  public set serviceDomain(value: string) {
    this._serviceDomain = value;
  }
  public resetServiceDomain() {
    this._serviceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainInput() {
    return this._serviceDomain;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#host DataK8SClusterXK8SIoClusterV1Alpha4Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#port DataK8SClusterXK8SIoClusterV1Alpha4Manifest#port}
  */
  readonly port: number;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane {
  /**
  * Metadata is the metadata applied to the machines of the ControlPlane. At runtime this metadata is merged with the corresponding metadata from the ClusterClass. This field is supported if and only if the control plane provider template referenced in the ClusterClass is Machine based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterV1Alpha4Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata;
  /**
  * Replicas is the number of control plane nodes. If the value is nil, the ControlPlane object is created without the number of Replicas and it's assumed that the control plane controller does not implement support for this field. When specified against a control plane provider that lacks support for this field, this value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#replicas DataK8SClusterXK8SIoClusterV1Alpha4Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataToTerraform(struct!.metadata),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._replicas = value.replicas;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments {
  /**
  * Class is the name of the MachineDeploymentClass used to create the set of worker nodes. This should match one of the deployment classes defined in the ClusterClass object mentioned in the 'Cluster.Spec.Class' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#class DataK8SClusterXK8SIoClusterV1Alpha4Manifest#class}
  */
  readonly class: string;
  /**
  * Metadata is the metadata applied to the machines of the MachineDeployment. At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterV1Alpha4Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata;
  /**
  * Name is the unique identifier for this MachineDeploymentTopology. The value is used with other unique identifiers to create a MachineDeployment's Name (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length, the values are hashed together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Replicas is the number of worker nodes belonging to this set. If the value is nil, the MachineDeployment is created without the number of Replicas (defaulting to zero) and it's assumed that an external entity (like cluster autoscaler) is responsible for the management of this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#replicas DataK8SClusterXK8SIoClusterV1Alpha4Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    metadata: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataToTerraform(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._metadata.internalValue = undefined;
      this._name = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._metadata.internalValue = value.metadata;
      this._name = value.name;
      this._replicas = value.replicas;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsOutputReference {
    return new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers {
  /**
  * MachineDeployments is a list of machine deployments in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#machine_deployments DataK8SClusterXK8SIoClusterV1Alpha4Manifest#machine_deployments}
  */
  readonly machineDeployments?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_deployments: cdktf.listMapper(dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsToTerraform, false)(struct!.machineDeployments),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_deployments: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsToHclTerraform, false)(struct!.machineDeployments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineDeployments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDeployments = this._machineDeployments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = value.machineDeployments;
    }
  }

  // machine_deployments - computed: false, optional: true, required: false
  private _machineDeployments = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeploymentsList(this, "machine_deployments", false);
  public get machineDeployments() {
    return this._machineDeployments;
  }
  public putMachineDeployments(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersMachineDeployments[] | cdktf.IResolvable) {
    this._machineDeployments.internalValue = value;
  }
  public resetMachineDeployments() {
    this._machineDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeploymentsInput() {
    return this._machineDeployments.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology {
  /**
  * The name of the ClusterClass object to create the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#class DataK8SClusterXK8SIoClusterV1Alpha4Manifest#class}
  */
  readonly class: string;
  /**
  * ControlPlane describes the cluster control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#control_plane DataK8SClusterXK8SIoClusterV1Alpha4Manifest#control_plane}
  */
  readonly controlPlane?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane;
  /**
  * RolloutAfter performs a rollout of the entire cluster one component at a time, control plane first and then machine deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#rollout_after DataK8SClusterXK8SIoClusterV1Alpha4Manifest#rollout_after}
  */
  readonly rolloutAfter?: string;
  /**
  * The Kubernetes version of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#version DataK8SClusterXK8SIoClusterV1Alpha4Manifest#version}
  */
  readonly version: string;
  /**
  * Workers encapsulates the different constructs that form the worker nodes for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#workers DataK8SClusterXK8SIoClusterV1Alpha4Manifest#workers}
  */
  readonly workers?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    control_plane: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneToTerraform(struct!.controlPlane),
    rollout_after: cdktf.stringToTerraform(struct!.rolloutAfter),
    version: cdktf.stringToTerraform(struct!.version),
    workers: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersToTerraform(struct!.workers),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane",
    },
    rollout_after: {
      value: cdktf.stringToHclTerraform(struct!.rolloutAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workers: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersToHclTerraform(struct!.workers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._rolloutAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutAfter = this._rolloutAfter;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._controlPlane.internalValue = undefined;
      this._rolloutAfter = undefined;
      this._version = undefined;
      this._workers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._controlPlane.internalValue = value.controlPlane;
      this._rolloutAfter = value.rolloutAfter;
      this._version = value.version;
      this._workers.internalValue = value.workers;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // rollout_after - computed: false, optional: true, required: false
  private _rolloutAfter?: string; 
  public get rolloutAfter() {
    return this.getStringAttribute('rollout_after');
  }
  public set rolloutAfter(value: string) {
    this._rolloutAfter = value;
  }
  public resetRolloutAfter() {
    this._rolloutAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutAfterInput() {
    return this._rolloutAfter;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workers - computed: false, optional: true, required: false
  private _workers = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
  public putWorkers(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyWorkers) {
    this._workers.internalValue = value;
  }
  public resetWorkers() {
    this._workers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec {
  /**
  * Cluster network configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#cluster_network DataK8SClusterXK8SIoClusterV1Alpha4Manifest#cluster_network}
  */
  readonly clusterNetwork?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork;
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#control_plane_endpoint DataK8SClusterXK8SIoClusterV1Alpha4Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint;
  /**
  * ControlPlaneRef is an optional reference to a provider-specific resource that holds the details for provisioning the Control Plane for a Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#control_plane_ref DataK8SClusterXK8SIoClusterV1Alpha4Manifest#control_plane_ref}
  */
  readonly controlPlaneRef?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef;
  /**
  * InfrastructureRef is a reference to a provider-specific resource that holds the details for provisioning infrastructure for a cluster in said provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#infrastructure_ref DataK8SClusterXK8SIoClusterV1Alpha4Manifest#infrastructure_ref}
  */
  readonly infrastructureRef?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef;
  /**
  * Paused can be used to prevent controllers from processing the Cluster and all its associated objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#paused DataK8SClusterXK8SIoClusterV1Alpha4Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * This encapsulates the topology for the cluster. NOTE: It is required to enable the ClusterTopology feature gate flag to activate managed topologies support; this feature is highly experimental, and parts of it might still be not implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#topology DataK8SClusterXK8SIoClusterV1Alpha4Manifest#topology}
  */
  readonly topology?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology;
}

export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_network: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkToTerraform(struct!.clusterNetwork),
    control_plane_endpoint: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    control_plane_ref: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefToTerraform(struct!.controlPlaneRef),
    infrastructure_ref: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefToTerraform(struct!.infrastructureRef),
    paused: cdktf.booleanToTerraform(struct!.paused),
    topology: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyToTerraform(struct!.topology),
  }
}


export function dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_network: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkToHclTerraform(struct!.clusterNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork",
    },
    control_plane_endpoint: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint",
    },
    control_plane_ref: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefToHclTerraform(struct!.controlPlaneRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef",
    },
    infrastructure_ref: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefToHclTerraform(struct!.infrastructureRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topology: {
      value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetwork = this._clusterNetwork?.internalValue;
    }
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._controlPlaneRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneRef = this._controlPlaneRef?.internalValue;
    }
    if (this._infrastructureRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRef = this._infrastructureRef?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNetwork.internalValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._controlPlaneRef.internalValue = undefined;
      this._infrastructureRef.internalValue = undefined;
      this._paused = undefined;
      this._topology.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNetwork.internalValue = value.clusterNetwork;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._controlPlaneRef.internalValue = value.controlPlaneRef;
      this._infrastructureRef.internalValue = value.infrastructureRef;
      this._paused = value.paused;
      this._topology.internalValue = value.topology;
    }
  }

  // cluster_network - computed: false, optional: true, required: false
  private _clusterNetwork = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetworkOutputReference(this, "cluster_network");
  public get clusterNetwork() {
    return this._clusterNetwork;
  }
  public putClusterNetwork(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecClusterNetwork) {
    this._clusterNetwork.internalValue = value;
  }
  public resetClusterNetwork() {
    this._clusterNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkInput() {
    return this._clusterNetwork.internalValue;
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // control_plane_ref - computed: false, optional: true, required: false
  private _controlPlaneRef = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRefOutputReference(this, "control_plane_ref");
  public get controlPlaneRef() {
    return this._controlPlaneRef;
  }
  public putControlPlaneRef(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecControlPlaneRef) {
    this._controlPlaneRef.internalValue = value;
  }
  public resetControlPlaneRef() {
    this._controlPlaneRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneRefInput() {
    return this._controlPlaneRef.internalValue;
  }

  // infrastructure_ref - computed: false, optional: true, required: false
  private _infrastructureRef = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRefOutputReference(this, "infrastructure_ref");
  public get infrastructureRef() {
    return this._infrastructureRef;
  }
  public putInfrastructureRef(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecInfrastructureRef) {
    this._infrastructureRef.internalValue = value;
  }
  public resetInfrastructureRef() {
    this._infrastructureRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRefInput() {
    return this._infrastructureRef.internalValue;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecTopology) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest k8s_cluster_x_k8s_io_cluster_v1alpha4_manifest}
*/
export class DataK8SClusterXK8SIoClusterV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_cluster_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoClusterV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoClusterV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoClusterV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoClusterV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_cluster_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_v1alpha4_manifest k8s_cluster_x_k8s_io_cluster_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoClusterV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoClusterV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_cluster_v1alpha4_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoClusterV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
