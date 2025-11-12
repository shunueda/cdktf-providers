// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata;
  /**
  * TinkerbellDatacenterConfigSpec defines the desired state of TinkerbellDatacenterConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec {
  /**
  * HookImagesURLPath can be used to override the default Hook images path to pull from a local server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#hook_images_url_path DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#hook_images_url_path}
  */
  readonly hookImagesUrlPath?: string;
  /**
  * LoadBalancerInterface can be used to configure a load balancer interface for the Tinkerbell stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#load_balancer_interface DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#load_balancer_interface}
  */
  readonly loadBalancerInterface?: string;
  /**
  * OSImageURL can be used to override the default OS image path to pull from a local server. OSImageURL is a URL to the OS image used during provisioning. To perform modular upgrades the OSImageURL must be specified on the TinkerbellMachineConfig objects. You cannot specify an OSImageURL on the TinkerbellDatacenterConfig and TinkerbellMachineConfigs simultaneously. It must include the Kubernetes version(s). For example, a URL used for Kubernetes 1.27 could be http://localhost:8080/ubuntu-2204-1.27.tgz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#os_image_url DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#os_image_url}
  */
  readonly osImageUrl?: string;
  /**
  * SkipLoadBalancerDeployment when set to 'true' can be used to skip deploying a load balancer to expose Tinkerbell stack. Users will need to deploy and configure a load balancer manually after the cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#skip_load_balancer_deployment DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#skip_load_balancer_deployment}
  */
  readonly skipLoadBalancerDeployment?: boolean | cdktf.IResolvable;
  /**
  * TinkerbellIP is used to configure a VIP for hosting the Tinkerbell services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#tinkerbell_ip DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest#tinkerbell_ip}
  */
  readonly tinkerbellIp: string;
}

export function dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hook_images_url_path: cdktf.stringToTerraform(struct!.hookImagesUrlPath),
    load_balancer_interface: cdktf.stringToTerraform(struct!.loadBalancerInterface),
    os_image_url: cdktf.stringToTerraform(struct!.osImageUrl),
    skip_load_balancer_deployment: cdktf.booleanToTerraform(struct!.skipLoadBalancerDeployment),
    tinkerbell_ip: cdktf.stringToTerraform(struct!.tinkerbellIp),
  }
}


export function dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hook_images_url_path: {
      value: cdktf.stringToHclTerraform(struct!.hookImagesUrlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_interface: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_image_url: {
      value: cdktf.stringToHclTerraform(struct!.osImageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_load_balancer_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.skipLoadBalancerDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tinkerbell_ip: {
      value: cdktf.stringToHclTerraform(struct!.tinkerbellIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hookImagesUrlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hookImagesUrlPath = this._hookImagesUrlPath;
    }
    if (this._loadBalancerInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerInterface = this._loadBalancerInterface;
    }
    if (this._osImageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.osImageUrl = this._osImageUrl;
    }
    if (this._skipLoadBalancerDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLoadBalancerDeployment = this._skipLoadBalancerDeployment;
    }
    if (this._tinkerbellIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkerbellIp = this._tinkerbellIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hookImagesUrlPath = undefined;
      this._loadBalancerInterface = undefined;
      this._osImageUrl = undefined;
      this._skipLoadBalancerDeployment = undefined;
      this._tinkerbellIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hookImagesUrlPath = value.hookImagesUrlPath;
      this._loadBalancerInterface = value.loadBalancerInterface;
      this._osImageUrl = value.osImageUrl;
      this._skipLoadBalancerDeployment = value.skipLoadBalancerDeployment;
      this._tinkerbellIp = value.tinkerbellIp;
    }
  }

  // hook_images_url_path - computed: false, optional: true, required: false
  private _hookImagesUrlPath?: string; 
  public get hookImagesUrlPath() {
    return this.getStringAttribute('hook_images_url_path');
  }
  public set hookImagesUrlPath(value: string) {
    this._hookImagesUrlPath = value;
  }
  public resetHookImagesUrlPath() {
    this._hookImagesUrlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookImagesUrlPathInput() {
    return this._hookImagesUrlPath;
  }

  // load_balancer_interface - computed: false, optional: true, required: false
  private _loadBalancerInterface?: string; 
  public get loadBalancerInterface() {
    return this.getStringAttribute('load_balancer_interface');
  }
  public set loadBalancerInterface(value: string) {
    this._loadBalancerInterface = value;
  }
  public resetLoadBalancerInterface() {
    this._loadBalancerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInterfaceInput() {
    return this._loadBalancerInterface;
  }

  // os_image_url - computed: false, optional: true, required: false
  private _osImageUrl?: string; 
  public get osImageUrl() {
    return this.getStringAttribute('os_image_url');
  }
  public set osImageUrl(value: string) {
    this._osImageUrl = value;
  }
  public resetOsImageUrl() {
    this._osImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageUrlInput() {
    return this._osImageUrl;
  }

  // skip_load_balancer_deployment - computed: false, optional: true, required: false
  private _skipLoadBalancerDeployment?: boolean | cdktf.IResolvable; 
  public get skipLoadBalancerDeployment() {
    return this.getBooleanAttribute('skip_load_balancer_deployment');
  }
  public set skipLoadBalancerDeployment(value: boolean | cdktf.IResolvable) {
    this._skipLoadBalancerDeployment = value;
  }
  public resetSkipLoadBalancerDeployment() {
    this._skipLoadBalancerDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLoadBalancerDeploymentInput() {
    return this._skipLoadBalancerDeployment;
  }

  // tinkerbell_ip - computed: false, optional: false, required: true
  private _tinkerbellIp?: string; 
  public get tinkerbellIp() {
    return this.getStringAttribute('tinkerbell_ip');
  }
  public set tinkerbellIp(value: string) {
    this._tinkerbellIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkerbellIpInput() {
    return this._tinkerbellIp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_tinkerbell_datacenter_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComTinkerbellDatacenterConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
