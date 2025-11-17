// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#metadata DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata;
  /**
  * Dest is the destination URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#spec DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#spec}
  */
  readonly spec: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#annotations DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#labels DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#name DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#namespace DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch {
  /**
  * ServerName is used to match the server name for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#server_name DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#server_name}
  */
  readonly serverName: string;
}

export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchToTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverName = value.serverName;
    }
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec {
  /**
  * Destination is the destination url to proxy the request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#destination DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#destination}
  */
  readonly destination: string;
  /**
  * SNIMatch is used to match requests based on the server name for the intended destination server. Matching requests will be proxied to the Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#sni_match DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#sni_match}
  */
  readonly sniMatch: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#target DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest#target}
  */
  readonly target: string;
}

export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    sni_match: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchToTerraform(struct!.sniMatch),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_match: {
      value: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchToHclTerraform(struct!.sniMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._sniMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniMatch = this._sniMatch?.internalValue;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._sniMatch.internalValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._sniMatch.internalValue = value.sniMatch;
      this._target = value.target;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // sni_match - computed: false, optional: false, required: true
  private _sniMatch = new DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatchOutputReference(this, "sni_match");
  public get sniMatch() {
    return this._sniMatch;
  }
  public putSniMatch(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecSniMatch) {
    this._sniMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniMatchInput() {
    return this._sniMatch.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest k8s_operator_tigera_io_tls_pass_through_route_v1_manifest}
*/
export class DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_tls_pass_through_route_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoTlsPassThroughRouteV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_tls_pass_through_route_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_tigera_io_tls_pass_through_route_v1_manifest k8s_operator_tigera_io_tls_pass_through_route_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_tls_pass_through_route_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoTlsPassThroughRouteV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
