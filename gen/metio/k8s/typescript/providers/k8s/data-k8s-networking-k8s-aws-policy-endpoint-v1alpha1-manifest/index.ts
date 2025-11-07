// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#metadata DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata;
  /**
  * PolicyEndpointSpec defines the desired state of PolicyEndpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#spec DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec;
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#annotations DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#labels DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#name DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#namespace DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts {
  /**
  * Endport specifies the port range port to endPort port must be defined and an integer, endPort > port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#end_port DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port specifies the numerical port for the protocol. If empty applies to all ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#port DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Protocol specifies the transport protocol, default TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#protocol DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress {
  /**
  * CIDR is the network address(s) of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#cidr DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Except is the exceptions to the CIDR ranges mentioned above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#except DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#except}
  */
  readonly except?: string[];
  /**
  * Ports is the list of ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#ports DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    ports: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
      this._ports.internalValue = value.ports;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts {
  /**
  * Endport specifies the port range port to endPort port must be defined and an integer, endPort > port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#end_port DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port specifies the numerical port for the protocol. If empty applies to all ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#port DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Protocol specifies the transport protocol, default TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#protocol DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress {
  /**
  * CIDR is the network address(s) of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#cidr DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Except is the exceptions to the CIDR ranges mentioned above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#except DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#except}
  */
  readonly except?: string[];
  /**
  * Ports is the list of ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#ports DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
    ports: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
      this._ports.internalValue = value.ports;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#key DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#operator DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#values DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#match_expressions DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#match_labels DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints {
  /**
  * HostIP is the IP address of the host the pod is currently running on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#host_ip DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#host_ip}
  */
  readonly hostIp: string;
  /**
  * Name is the pod name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#name DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the pod namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#namespace DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * PodIP is the IP address of the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#pod_ip DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#pod_ip}
  */
  readonly podIp: string;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pod_ip: cdktf.stringToTerraform(struct!.podIp),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
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
    pod_ip: {
      value: cdktf.stringToHclTerraform(struct!.podIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._podIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIp = this._podIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostIp = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._podIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostIp = value.hostIp;
      this._name = value.name;
      this._namespace = value.namespace;
      this._podIp = value.podIp;
    }
  }

  // host_ip - computed: false, optional: false, required: true
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
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

  // pod_ip - computed: false, optional: false, required: true
  private _podIp?: string; 
  public get podIp() {
    return this.getStringAttribute('pod_ip');
  }
  public set podIp(value: string) {
    this._podIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpInput() {
    return this._podIp;
  }
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsOutputReference {
    return new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef {
  /**
  * Name is the name of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#name DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#namespace DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
export interface DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec {
  /**
  * Egress is the list of egress rules containing resolved network addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#egress DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#egress}
  */
  readonly egress?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * Ingress is the list of ingress rules containing resolved network addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#ingress DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * PodIsolation specifies whether the pod needs to be isolated for a particular traffic direction Ingress or Egress, or both. If default isolation is not specified, and there are no ingress/egress rules, then the pod is not isolated from the point of view of this policy. This follows the NetworkPolicy spec.PolicyTypes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#pod_isolation DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#pod_isolation}
  */
  readonly podIsolation?: string[];
  /**
  * PodSelector is the podSelector from the policy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#pod_selector DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector;
  /**
  * PodSelectorEndpoints contains information about the pods matching the podSelector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#pod_selector_endpoints DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#pod_selector_endpoints}
  */
  readonly podSelectorEndpoints?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints[] | cdktf.IResolvable;
  /**
  * PolicyRef is a reference to the Kubernetes NetworkPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#policy_ref DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest#policy_ref}
  */
  readonly policyRef: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef;
}

export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressToTerraform, false)(struct!.ingress),
    pod_isolation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podIsolation),
    pod_selector: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorToTerraform(struct!.podSelector),
    pod_selector_endpoints: cdktf.listMapper(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsToTerraform, false)(struct!.podSelectorEndpoints),
    policy_ref: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefToTerraform(struct!.policyRef),
  }
}


export function dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressList",
    },
    pod_isolation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podIsolation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_selector: {
      value: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector",
    },
    pod_selector_endpoints: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsToHclTerraform, false)(struct!.podSelectorEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsList",
    },
    policy_ref: {
      value: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct!.policyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._podIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIsolation = this._podIsolation;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._podSelectorEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelectorEndpoints = this._podSelectorEndpoints?.internalValue;
    }
    if (this._policyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRef = this._policyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._podIsolation = undefined;
      this._podSelector.internalValue = undefined;
      this._podSelectorEndpoints.internalValue = undefined;
      this._policyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
      this._podIsolation = value.podIsolation;
      this._podSelector.internalValue = value.podSelector;
      this._podSelectorEndpoints.internalValue = value.podSelectorEndpoints;
      this._policyRef.internalValue = value.policyRef;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // pod_isolation - computed: false, optional: true, required: false
  private _podIsolation?: string[]; 
  public get podIsolation() {
    return this.getListAttribute('pod_isolation');
  }
  public set podIsolation(value: string[]) {
    this._podIsolation = value;
  }
  public resetPodIsolation() {
    this._podIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIsolationInput() {
    return this._podIsolation;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // pod_selector_endpoints - computed: false, optional: true, required: false
  private _podSelectorEndpoints = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpointsList(this, "pod_selector_endpoints", false);
  public get podSelectorEndpoints() {
    return this._podSelectorEndpoints;
  }
  public putPodSelectorEndpoints(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPodSelectorEndpoints[] | cdktf.IResolvable) {
    this._podSelectorEndpoints.internalValue = value;
  }
  public resetPodSelectorEndpoints() {
    this._podSelectorEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorEndpointsInput() {
    return this._podSelectorEndpoints.internalValue;
  }

  // policy_ref - computed: false, optional: false, required: true
  private _policyRef = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRefOutputReference(this, "policy_ref");
  public get policyRef() {
    return this._policyRef;
  }
  public putPolicyRef(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecPolicyRef) {
    this._policyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefInput() {
    return this._policyRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest k8s_networking_k8s_aws_policy_endpoint_v1alpha1_manifest}
*/
export class DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_k8s_aws_policy_endpoint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_k8s_aws_policy_endpoint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_k8s_aws_policy_endpoint_v1alpha1_manifest k8s_networking_k8s_aws_policy_endpoint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_k8s_aws_policy_endpoint_v1alpha1_manifest',
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
  private _metadata = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec) {
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
      metadata: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingK8SAwsPolicyEndpointV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
