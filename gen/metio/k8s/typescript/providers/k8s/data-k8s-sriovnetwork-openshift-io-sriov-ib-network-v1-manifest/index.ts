// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#metadata DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#metadata}
  */
  readonly metadata: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata;
  /**
  * SriovIBNetworkSpec defines the desired state of SriovIBNetwork
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#spec DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#spec}
  */
  readonly spec?: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec;
}
export interface DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#annotations DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#labels DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#name DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#namespace DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec {
  /**
  * Capabilities to be configured for this network. Capabilities supported: (infinibandGUID), e.g. '{'infinibandGUID': true}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#capabilities DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#capabilities}
  */
  readonly capabilities?: string;
  /**
  * IPAM configuration to be used for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#ipam DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#ipam}
  */
  readonly ipam?: string;
  /**
  * VF link state (enable|disable|auto)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#link_state DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#link_state}
  */
  readonly linkState?: string;
  /**
  * MetaPluginsConfig configuration to be used in order to chain metaplugins to the sriov interface returned by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#meta_plugins DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#meta_plugins}
  */
  readonly metaPlugins?: string;
  /**
  * Namespace of the NetworkAttachmentDefinition custom resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#network_namespace DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#network_namespace}
  */
  readonly networkNamespace?: string;
  /**
  * SRIOV Network device plugin endpoint resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#resource_name DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest#resource_name}
  */
  readonly resourceName: string;
}

export function dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecToTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.stringToTerraform(struct!.capabilities),
    ipam: cdktf.stringToTerraform(struct!.ipam),
    link_state: cdktf.stringToTerraform(struct!.linkState),
    meta_plugins: cdktf.stringToTerraform(struct!.metaPlugins),
    network_namespace: cdktf.stringToTerraform(struct!.networkNamespace),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecToHclTerraform(struct?: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.stringToHclTerraform(struct!.capabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam: {
      value: cdktf.stringToHclTerraform(struct!.ipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state: {
      value: cdktf.stringToHclTerraform(struct!.linkState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta_plugins: {
      value: cdktf.stringToHclTerraform(struct!.metaPlugins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_namespace: {
      value: cdktf.stringToHclTerraform(struct!.networkNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._ipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipam = this._ipam;
    }
    if (this._linkState !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkState = this._linkState;
    }
    if (this._metaPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaPlugins = this._metaPlugins;
    }
    if (this._networkNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkNamespace = this._networkNamespace;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._ipam = undefined;
      this._linkState = undefined;
      this._metaPlugins = undefined;
      this._networkNamespace = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._ipam = value.ipam;
      this._linkState = value.linkState;
      this._metaPlugins = value.metaPlugins;
      this._networkNamespace = value.networkNamespace;
      this._resourceName = value.resourceName;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string; 
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }
  public set capabilities(value: string) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // ipam - computed: false, optional: true, required: false
  private _ipam?: string; 
  public get ipam() {
    return this.getStringAttribute('ipam');
  }
  public set ipam(value: string) {
    this._ipam = value;
  }
  public resetIpam() {
    this._ipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam;
  }

  // link_state - computed: false, optional: true, required: false
  private _linkState?: string; 
  public get linkState() {
    return this.getStringAttribute('link_state');
  }
  public set linkState(value: string) {
    this._linkState = value;
  }
  public resetLinkState() {
    this._linkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateInput() {
    return this._linkState;
  }

  // meta_plugins - computed: false, optional: true, required: false
  private _metaPlugins?: string; 
  public get metaPlugins() {
    return this.getStringAttribute('meta_plugins');
  }
  public set metaPlugins(value: string) {
    this._metaPlugins = value;
  }
  public resetMetaPlugins() {
    this._metaPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaPluginsInput() {
    return this._metaPlugins;
  }

  // network_namespace - computed: false, optional: true, required: false
  private _networkNamespace?: string; 
  public get networkNamespace() {
    return this.getStringAttribute('network_namespace');
  }
  public set networkNamespace(value: string) {
    this._networkNamespace = value;
  }
  public resetNetworkNamespace() {
    this._networkNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNamespaceInput() {
    return this._networkNamespace;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest k8s_sriovnetwork_openshift_io_sriov_ib_network_v1_manifest}
*/
export class DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sriovnetwork_openshift_io_sriov_ib_network_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest to import
  * @param importFromId The id of the existing DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sriovnetwork_openshift_io_sriov_ib_network_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sriovnetwork_openshift_io_sriov_ib_network_v1_manifest k8s_sriovnetwork_openshift_io_sriov_ib_network_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sriovnetwork_openshift_io_sriov_ib_network_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec) {
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
      metadata: dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestMetadata",
      },
      spec: {
        value: dataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSriovnetworkOpenshiftIoSriovIbNetworkV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
