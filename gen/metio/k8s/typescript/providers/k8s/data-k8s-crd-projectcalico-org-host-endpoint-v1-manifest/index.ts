// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#metadata DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata;
  /**
  * HostEndpointSpec contains the specification for a HostEndpoint resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#spec DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#annotations DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#labels DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#name DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#name DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#port DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#protocol DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsToTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
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

export class DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsOutputReference {
    return new DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec {
  /**
  * The expected IP addresses (IPv4 and IPv6) of the endpoint. If 'InterfaceName' is not present, Calico will look for an interface matching any of the IPs in the list and apply policy to that. Note: When using the selector match criteria in an ingress or egress security Policy or Profile, Calico converts the selector into a set of IP addresses. For host endpoints, the ExpectedIPs field is used for that purpose. (If only the interface name is specified, Calico does not learn the IPs of the interface for use in match criteria.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#expected_i_ps DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#expected_i_ps}
  */
  readonly expectedIPs?: string[];
  /**
  * Either '*', or the name of a specific Linux interface to apply policy to; or empty. '*' indicates that this HostEndpoint governs all traffic to, from or through the default network namespace of the host named by the 'Node' field; entering and leaving that namespace via any interface, including those from/to non-host-networked local workloads. If InterfaceName is not '*', this HostEndpoint only governs traffic that enters or leaves the host through the specific interface named by InterfaceName, or - when InterfaceName is empty - through the specific interface that has one of the IPs in ExpectedIPs. Therefore, when InterfaceName is empty, at least one expected IP must be specified. Only external interfaces (such as 'eth0') are supported here; it isn't possible for a HostEndpoint to protect traffic through a specific local workload interface. Note: Only some kinds of policy are implemented for '*' HostEndpoints; initially just pre-DNAT policy. Please check Calico documentation for the latest position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#interface_name DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * The node name identifying the Calico node instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#node DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Ports contains the endpoint's named ports, which may be referenced in security policy rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#ports DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#ports}
  */
  readonly ports?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts[] | cdktf.IResolvable;
  /**
  * A list of identifiers of security Profile objects that apply to this endpoint. Each profile is applied in the order that they appear in this list. Profile rules are applied after the selector-based security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#profiles DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest#profiles}
  */
  readonly profiles?: string[];
}

export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedIPs),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    ports: cdktf.listMapper(dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsToTerraform, false)(struct!.ports),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
  }
}


export function dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsList",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedIPs = this._expectedIPs;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedIPs = undefined;
      this._interfaceName = undefined;
      this._node = undefined;
      this._ports.internalValue = undefined;
      this._profiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedIPs = value.expectedIPs;
      this._interfaceName = value.interfaceName;
      this._node = value.nodeAttribute;
      this._ports.internalValue = value.ports;
      this._profiles = value.profiles;
    }
  }

  // expected_i_ps - computed: false, optional: true, required: false
  private _expectedIPs?: string[]; 
  public get expectedIPs() {
    return this.getListAttribute('expected_i_ps');
  }
  public set expectedIPs(value: string[]) {
    this._expectedIPs = value;
  }
  public resetExpectedIPs() {
    this._expectedIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedIPsInput() {
    return this._expectedIPs;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest k8s_crd_projectcalico_org_host_endpoint_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_host_endpoint_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgHostEndpointV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_host_endpoint_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/crd_projectcalico_org_host_endpoint_v1_manifest k8s_crd_projectcalico_org_host_endpoint_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_host_endpoint_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgHostEndpointV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
