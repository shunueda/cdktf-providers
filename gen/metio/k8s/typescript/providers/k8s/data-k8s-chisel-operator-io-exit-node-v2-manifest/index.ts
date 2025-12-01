// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChiselOperatorIoExitNodeV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#metadata DataK8SChiselOperatorIoExitNodeV2Manifest#metadata}
  */
  readonly metadata: DataK8SChiselOperatorIoExitNodeV2ManifestMetadata;
  /**
  * ExitNode is a custom resource that represents a Chisel exit node. It will be used as the reverse proxy for all services in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#spec DataK8SChiselOperatorIoExitNodeV2Manifest#spec}
  */
  readonly spec: DataK8SChiselOperatorIoExitNodeV2ManifestSpec;
}
export interface DataK8SChiselOperatorIoExitNodeV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#annotations DataK8SChiselOperatorIoExitNodeV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#labels DataK8SChiselOperatorIoExitNodeV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#name DataK8SChiselOperatorIoExitNodeV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#namespace DataK8SChiselOperatorIoExitNodeV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChiselOperatorIoExitNodeV2ManifestMetadataToTerraform(struct?: DataK8SChiselOperatorIoExitNodeV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChiselOperatorIoExitNodeV2ManifestMetadataToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChiselOperatorIoExitNodeV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChiselOperatorIoExitNodeV2ManifestSpec {
  /**
  * Optional authentication secret name to connect to the control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#auth DataK8SChiselOperatorIoExitNodeV2Manifest#auth}
  */
  readonly auth?: string;
  /**
  * Optional value for the chisel client image used to connect to the chisel server If not provided, jpillora/chisel:latest is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#chisel_image DataK8SChiselOperatorIoExitNodeV2Manifest#chisel_image}
  */
  readonly chiselImage?: string;
  /**
  * Optional boolean value for whether to make the exit node the default route for the cluster If true, the exit node will be the default route for the cluster default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#default_route DataK8SChiselOperatorIoExitNodeV2Manifest#default_route}
  */
  readonly defaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Optional real external hostname/IP of exit node If not provided, the host field will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#external_host DataK8SChiselOperatorIoExitNodeV2Manifest#external_host}
  */
  readonly externalHost?: string;
  /**
  * Optional but highly recommended fingerprint to perform host-key validation against the server's public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#fingerprint DataK8SChiselOperatorIoExitNodeV2Manifest#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Hostname or IP address of the chisel server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#host DataK8SChiselOperatorIoExitNodeV2Manifest#host}
  */
  readonly host: string;
  /**
  * Control plane port of the chisel server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#port DataK8SChiselOperatorIoExitNodeV2Manifest#port}
  */
  readonly port: number;
}

export function dataK8SChiselOperatorIoExitNodeV2ManifestSpecToTerraform(struct?: DataK8SChiselOperatorIoExitNodeV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    chisel_image: cdktf.stringToTerraform(struct!.chiselImage),
    default_route: cdktf.booleanToTerraform(struct!.defaultRoute),
    external_host: cdktf.stringToTerraform(struct!.externalHost),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SChiselOperatorIoExitNodeV2ManifestSpecToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chisel_image: {
      value: cdktf.stringToHclTerraform(struct!.chiselImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_route: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_host: {
      value: cdktf.stringToHclTerraform(struct!.externalHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SChiselOperatorIoExitNodeV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._chiselImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.chiselImage = this._chiselImage;
    }
    if (this._defaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute;
    }
    if (this._externalHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalHost = this._externalHost;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
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

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._chiselImage = undefined;
      this._defaultRoute = undefined;
      this._externalHost = undefined;
      this._fingerprint = undefined;
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
      this._auth = value.auth;
      this._chiselImage = value.chiselImage;
      this._defaultRoute = value.defaultRoute;
      this._externalHost = value.externalHost;
      this._fingerprint = value.fingerprint;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // chisel_image - computed: false, optional: true, required: false
  private _chiselImage?: string; 
  public get chiselImage() {
    return this.getStringAttribute('chisel_image');
  }
  public set chiselImage(value: string) {
    this._chiselImage = value;
  }
  public resetChiselImage() {
    this._chiselImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chiselImageInput() {
    return this._chiselImage;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute?: boolean | cdktf.IResolvable; 
  public get defaultRoute() {
    return this.getBooleanAttribute('default_route');
  }
  public set defaultRoute(value: boolean | cdktf.IResolvable) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
  }

  // external_host - computed: false, optional: true, required: false
  private _externalHost?: string; 
  public get externalHost() {
    return this.getStringAttribute('external_host');
  }
  public set externalHost(value: string) {
    this._externalHost = value;
  }
  public resetExternalHost() {
    this._externalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalHostInput() {
    return this._externalHost;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest k8s_chisel_operator_io_exit_node_v2_manifest}
*/
export class DataK8SChiselOperatorIoExitNodeV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chisel_operator_io_exit_node_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChiselOperatorIoExitNodeV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChiselOperatorIoExitNodeV2Manifest to import
  * @param importFromId The id of the existing DataK8SChiselOperatorIoExitNodeV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChiselOperatorIoExitNodeV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chisel_operator_io_exit_node_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chisel_operator_io_exit_node_v2_manifest k8s_chisel_operator_io_exit_node_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChiselOperatorIoExitNodeV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChiselOperatorIoExitNodeV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chisel_operator_io_exit_node_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SChiselOperatorIoExitNodeV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChiselOperatorIoExitNodeV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChiselOperatorIoExitNodeV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChiselOperatorIoExitNodeV2ManifestSpec) {
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
      metadata: dataK8SChiselOperatorIoExitNodeV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChiselOperatorIoExitNodeV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChiselOperatorIoExitNodeV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChiselOperatorIoExitNodeV2ManifestMetadata",
      },
      spec: {
        value: dataK8SChiselOperatorIoExitNodeV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChiselOperatorIoExitNodeV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
