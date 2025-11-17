// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#metadata DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata;
  /**
  * Specification of the desired behavior of AdminNetworkPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#spec DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#annotations DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#name DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber {
  /**
  * Number defines a network port value. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol is the network protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#protocol DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange {
  /**
  * End defines a network port that is the end of a port range, the End value must be greater than Start. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#end DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#end}
  */
  readonly end: number;
  /**
  * Protocol is the network protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#protocol DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Start defines a network port that is the start of a port range, the Start value must be less than End. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#start DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#start}
  */
  readonly start: number;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
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
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._protocol = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._protocol = value.protocol;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts {
  /**
  * Port selects a port on a pod(s) based on number. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port_number DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port_number}
  */
  readonly portNumber?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber;
  /**
  * PortRange selects a port range on a pod(s) based on provided start and end values. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port_range DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port_range}
  */
  readonly portRange?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberToTerraform(struct!.portNumber),
    port_range: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeToTerraform(struct!.portRange),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberToHclTerraform(struct!.portNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber",
    },
    port_range: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber.internalValue = value.portNumber;
      this._portRange.internalValue = value.portRange;
    }
  }

  // port_number - computed: false, optional: true, required: false
  private _portNumber = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumberOutputReference(this, "port_number");
  public get portNumber() {
    return this._portNumber;
  }
  public putPortNumber(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortNumber) {
    this._portNumber.internalValue = value;
  }
  public resetPortNumber() {
    this._portNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods {
  /**
  * NamespaceSelector follows standard label selector semantics; if empty, it selects all Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespace_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector;
  /**
  * PodSelector is used to explicitly select pods within a namespace; if empty, it selects all Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pod_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: false, required: true
  private _namespaceSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo {
  /**
  * Namespaces defines a way to select all pods within a set of Namespaces. Note that host-networked pods are not included in this type of peer. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespaces DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces;
  /**
  * Pods defines a way to select a set of pods in a set of namespaces. Note that host-networked pods are not included in this type of peer. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pods DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesToTerraform(struct!.namespaces),
    pods: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsToTerraform(struct!.pods),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces",
    },
    pods: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = undefined;
      this._pods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = value.namespaces;
      this._pods.internalValue = value.pods;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress {
  /**
  * Action specifies the effect this rule will have on matching traffic. Currently the following actions are supported: Allow: allows the selected traffic (even if it would otherwise have been denied by NetworkPolicy) Deny: denies the selected traffic Pass: instructs the selected traffic to skip any remaining ANP rules, and then pass execution to any NetworkPolicies that select the pod. If the pod is not selected by any NetworkPolicies then execution is passed to any BaselineAdminNetworkPolicies that select the pod. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#action DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Name is an identifier for this rule, that may be no more than 100 characters in length. This field should be used by the implementation to help improve observability, readability and error-reporting for any applied AdminNetworkPolicies. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#name DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Ports allows for matching traffic based on port and protocols. This field is a list of destination ports for the outgoing egress traffic. If Ports is not set then the rule does not filter traffic via port. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#ports DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable;
  /**
  * To is the List of destinations whose traffic this rule applies to. If any AdminNetworkPolicyEgressPeer matches the destination of outgoing traffic then the specified action is applied. This field must be defined and contain at least one item. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#to DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#to}
  */
  readonly to: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo[] | cdktf.IResolvable;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsToTerraform, false)(struct!.ports),
    to: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToToTerraform, false)(struct!.to),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    ports: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
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
      this._action = value.action;
      this._name = value.name;
      this._ports.internalValue = value.ports;
      this._to.internalValue = value.to;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // to - computed: false, optional: false, required: true
  private _to = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods {
  /**
  * NamespaceSelector follows standard label selector semantics; if empty, it selects all Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespace_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector;
  /**
  * PodSelector is used to explicitly select pods within a namespace; if empty, it selects all Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pod_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: false, required: true
  private _namespaceSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom {
  /**
  * Namespaces defines a way to select all pods within a set of Namespaces. Note that host-networked pods are not included in this type of peer. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespaces DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces;
  /**
  * Pods defines a way to select a set of pods in a set of namespaces. Note that host-networked pods are not included in this type of peer. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pods DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesToTerraform(struct!.namespaces),
    pods: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsToTerraform(struct!.pods),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces",
    },
    pods: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = undefined;
      this._pods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = value.namespaces;
      this._pods.internalValue = value.pods;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber {
  /**
  * Number defines a network port value. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol is the network protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#protocol DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange {
  /**
  * End defines a network port that is the end of a port range, the End value must be greater than Start. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#end DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#end}
  */
  readonly end: number;
  /**
  * Protocol is the network protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#protocol DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Start defines a network port that is the start of a port range, the Start value must be less than End. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#start DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#start}
  */
  readonly start: number;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
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
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._protocol = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._protocol = value.protocol;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts {
  /**
  * Port selects a port on a pod(s) based on number. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port_number DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port_number}
  */
  readonly portNumber?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber;
  /**
  * PortRange selects a port range on a pod(s) based on provided start and end values. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#port_range DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#port_range}
  */
  readonly portRange?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_number: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberToTerraform(struct!.portNumber),
    port_range: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeToTerraform(struct!.portRange),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_number: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberToHclTerraform(struct!.portNumber),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber",
    },
    port_range: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNumber.internalValue = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNumber.internalValue = value.portNumber;
      this._portRange.internalValue = value.portRange;
    }
  }

  // port_number - computed: false, optional: true, required: false
  private _portNumber = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumberOutputReference(this, "port_number");
  public get portNumber() {
    return this._portNumber;
  }
  public putPortNumber(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortNumber) {
    this._portNumber.internalValue = value;
  }
  public resetPortNumber() {
    this._portNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber.internalValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress {
  /**
  * Action specifies the effect this rule will have on matching traffic. Currently the following actions are supported: Allow: allows the selected traffic (even if it would otherwise have been denied by NetworkPolicy) Deny: denies the selected traffic Pass: instructs the selected traffic to skip any remaining ANP rules, and then pass execution to any NetworkPolicies that select the pod. If the pod is not selected by any NetworkPolicies then execution is passed to any BaselineAdminNetworkPolicies that select the pod. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#action DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * From is the list of sources whose traffic this rule applies to. If any AdminNetworkPolicyIngressPeer matches the source of incoming traffic then the specified action is applied. This field must be defined and contain at least one item. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#from DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#from}
  */
  readonly from: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom[] | cdktf.IResolvable;
  /**
  * Name is an identifier for this rule, that may be no more than 100 characters in length. This field should be used by the implementation to help improve observability, readability and error-reporting for any applied AdminNetworkPolicies. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#name DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Ports allows for matching traffic based on port and protocols. This field is a list of ports which should be matched on the pods selected for this policy i.e the subject of the policy. So it matches on the destination port for the ingress traffic. If Ports is not set then the rule does not filter traffic via port. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#ports DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    from: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromToTerraform, false)(struct!.from),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._from.internalValue = undefined;
      this._name = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._from.internalValue = value.from;
      this._name = value.name;
      this._ports.internalValue = value.ports;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // from - computed: false, optional: false, required: true
  private _from = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressPorts[] | cdktf.IResolvable) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#key DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#operator DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#values DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsOutputReference {
    return new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_expressions DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#match_labels DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsList",
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

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods {
  /**
  * NamespaceSelector follows standard label selector semantics; if empty, it selects all Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespace_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector;
  /**
  * PodSelector is used to explicitly select pods within a namespace; if empty, it selects all Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pod_selector DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector",
    },
    pod_selector: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: false, required: true
  private _namespaceSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject {
  /**
  * Namespaces is used to select pods via namespace selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#namespaces DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces;
  /**
  * Pods is used to select pods via namespace AND pod selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#pods DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesToTerraform(struct!.namespaces),
    pods: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsToTerraform(struct!.pods),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesToHclTerraform(struct!.namespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces",
    },
    pods: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = undefined;
      this._pods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces.internalValue = value.namespaces;
      this._pods.internalValue = value.pods;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespacesOutputReference(this, "namespaces");
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectNamespaces) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }
}
export interface DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec {
  /**
  * Egress is the list of Egress rules to be applied to the selected pods. A total of 100 rules will be allowed in each ANP instance. The relative precedence of egress rules within a single ANP object (all of which share the priority) will be determined by the order in which the rule is written. Thus, a rule that appears at the top of the egress rules would take the highest precedence. ANPs with no egress rules do not affect egress traffic. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#egress DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#egress}
  */
  readonly egress?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable;
  /**
  * Ingress is the list of Ingress rules to be applied to the selected pods. A total of 100 rules will be allowed in each ANP instance. The relative precedence of ingress rules within a single ANP object (all of which share the priority) will be determined by the order in which the rule is written. Thus, a rule that appears at the top of the ingress rules would take the highest precedence. ANPs with no ingress rules do not affect ingress traffic. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#ingress DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable;
  /**
  * Priority is a value from 0 to 1000. Policies with lower priority values have higher precedence, and are checked before policies with higher priority values. All AdminNetworkPolicy rules have higher precedence than NetworkPolicy or BaselineAdminNetworkPolicy rules Every AdminNetworkPolicy should have a unique priority value; if two (or more) policies with the same priority could both match a connection, then the implementation can apply any of the matching policies to the connection, and there is no way for the user to reliably determine which one it will choose. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#priority DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#priority}
  */
  readonly priority: number;
  /**
  * Subject defines the pods to which this AdminNetworkPolicy applies. Note that host-networked pods are not included in subject selection. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#subject DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest#subject}
  */
  readonly subject: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject;
}

export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToTerraform, false)(struct!.egress),
    ingress: cdktf.listMapper(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressToTerraform, false)(struct!.ingress),
    priority: cdktf.numberToTerraform(struct!.priority),
    subject: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectToTerraform(struct!.subject),
  }
}


export function dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject: {
      value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._priority = undefined;
      this._subject.internalValue = undefined;
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
      this._priority = value.priority;
      this._subject.internalValue = value.subject;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecEgress[] | cdktf.IResolvable) {
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
  private _ingress = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecSubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest k8s_policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest}
*/
export class DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest k8s_policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_policy_networking_k8s_io_admin_network_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPolicyNetworkingK8SIoAdminNetworkPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
