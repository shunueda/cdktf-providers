// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#metadata DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata;
  /**
  * NetworkPolicySpec provides the specification of a NetworkPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#spec DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec;
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#annotations DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#name DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#namespace DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#end_port DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * IntOrString is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#port DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#protocol DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts | cdktf.IResolvable | undefined) {
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
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#cidr DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#except DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
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
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#key DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#operator DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#values DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_expressions DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsList",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#key DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#operator DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#values DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_expressions DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsList",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo {
  /**
  * IPBlock describes a particular CIDR (Ex. '192.168.1.0/24','2001:db8::/64') that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#ip_block DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#namespace_selector DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#pod_selector DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock",
    },
    namespace_selector: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToIpBlock) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress {
  /**
  * ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#ports DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts[] | cdktf.IResolvable;
  /**
  * to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#to DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#to}
  */
  readonly to?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo[] | cdktf.IResolvable;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsToTerraform, false)(struct!.ports),
    to: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToToTerraform, false)(struct!.to),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
      this._to.internalValue = value.to;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock {
  /**
  * cidr is a string representing the IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#cidr DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * except is a slice of CIDRs that should not be included within an IPBlock Valid examples are '192.168.1.0/24' or '2001:db8::/64' Except values will be rejected if they are outside the cidr range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#except DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
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
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#key DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#operator DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#values DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_expressions DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsList",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#key DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#operator DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#values DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_expressions DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsList",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom {
  /**
  * IPBlock describes a particular CIDR (Ex. '192.168.1.0/24','2001:db8::/64') that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#ip_block DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#namespace_selector DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#pod_selector DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#pod_selector}
  */
  readonly podSelector?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock",
    },
    namespace_selector: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromIpBlock) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts {
  /**
  * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#end_port DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * IntOrString is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#port DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#port}
  */
  readonly port?: string;
  /**
  * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#protocol DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts | cdktf.IResolvable | undefined) {
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
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress {
  /**
  * from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#from DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#from}
  */
  readonly from?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom[] | cdktf.IResolvable;
  /**
  * ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#ports DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#ports}
  */
  readonly ports?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromToTerraform, false)(struct!.from),
    ports: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._ports.internalValue = value.ports;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressPorts[] | cdktf.IResolvable) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#key DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#operator DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#values DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_expressions DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#match_labels DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsList",
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

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec {
  /**
  * egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#egress DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#egress}
  */
  readonly egress?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#ingress DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#ingress}
  */
  readonly ingress?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#pod_selector DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector;
  /**
  * policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ['Ingress'], ['Egress'], or ['Ingress', 'Egress']. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ 'Egress' ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include 'Egress' (since such a policy would not include an egress section and would otherwise default to just [ 'Ingress' ]). This field is beta-level in 1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#policy_types DataK8SNetworkingK8SIoNetworkPolicyV1Manifest#policy_types}
  */
  readonly policyTypes?: string[];
}

export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecToTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressToTerraform, false)(struct!.ingress),
    pod_selector: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorToTerraform(struct!.podSelector),
    policy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyTypes),
  }
}


export function dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressList",
    },
    pod_selector: {
      value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector",
    },
    policy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._policyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTypes = this._policyTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._podSelector.internalValue = undefined;
      this._policyTypes = undefined;
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
      this._podSelector.internalValue = value.podSelector;
      this._policyTypes = value.policyTypes;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecEgress[] | cdktf.IResolvable) {
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
  private _ingress = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // policy_types - computed: false, optional: true, required: false
  private _policyTypes?: string[]; 
  public get policyTypes() {
    return this.getListAttribute('policy_types');
  }
  public set policyTypes(value: string[]) {
    this._policyTypes = value;
  }
  public resetPolicyTypes() {
    this._policyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypesInput() {
    return this._policyTypes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest k8s_networking_k8s_io_network_policy_v1_manifest}
*/
export class DataK8SNetworkingK8SIoNetworkPolicyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_k8s_io_network_policy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingK8SIoNetworkPolicyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingK8SIoNetworkPolicyV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingK8SIoNetworkPolicyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingK8SIoNetworkPolicyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_k8s_io_network_policy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/networking_k8s_io_network_policy_v1_manifest k8s_networking_k8s_io_network_policy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingK8SIoNetworkPolicyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_k8s_io_network_policy_v1_manifest',
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
  private _metadata = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec) {
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
      metadata: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingK8SIoNetworkPolicyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
