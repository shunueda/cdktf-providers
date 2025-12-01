// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Endpoints is a list of coreCEPs packed in a CiliumEndpointSlice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#endpoints DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#endpoints}
  */
  readonly endpoints: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints[] | cdktf.IResolvable;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#metadata DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata;
  /**
  * Namespace indicate as CiliumEndpointSlice namespace. All the CiliumEndpoints within the same namespace are put together in CiliumEndpointSlice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#namespace DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption {
  /**
  * Key is the index to the key to use for encryption or 0 if encryption is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#key DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#key}
  */
  readonly key?: number;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.numberToTerraform(struct!.key),
  }
}


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts {
  /**
  * Optional layer 4 port name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#name DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Layer 4 port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#port DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Layer 4 protocol Enum: [TCP UDP SCTP ICMP ICMPV6 ANY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#protocol DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsOutputReference {
    return new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#ipv4 DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#ipv6 DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#ipv6}
  */
  readonly ipv6?: string;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingOutputReference {
    return new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking {
  /**
  * IP4/6 addresses assigned to this Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#addressing DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#addressing}
  */
  readonly addressing: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing[] | cdktf.IResolvable;
  /**
  * NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#node DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#node}
  */
  readonly nodeAttribute?: string;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addressing: cdktf.listMapper(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingToTerraform, false)(struct!.addressing),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
  }
}


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addressing: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingToHclTerraform, false)(struct!.addressing),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingList",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressing = this._addressing?.internalValue;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressing.internalValue = undefined;
      this._node = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressing.internalValue = value.addressing;
      this._node = value.nodeAttribute;
    }
  }

  // addressing - computed: false, optional: false, required: true
  private _addressing = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressingList(this, "addressing", false);
  public get addressing() {
    return this._addressing;
  }
  public putAddressing(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingAddressing[] | cdktf.IResolvable) {
    this._addressing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressingInput() {
    return this._addressing.internalValue;
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
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints {
  /**
  * EncryptionSpec defines the encryption relevant configuration of a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#encryption DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#encryption}
  */
  readonly encryption?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption;
  /**
  * IdentityID is the numeric identity of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#id DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name indicate as CiliumEndpoint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#name DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * NamedPorts List of named Layer 4 port and protocol pairs which will be used in Network Policy specs. swagger:model NamedPorts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#named_ports DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#named_ports}
  */
  readonly namedPorts?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts[] | cdktf.IResolvable;
  /**
  * EndpointNetworking is the addressing information of an endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#networking DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#networking}
  */
  readonly networking?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionToTerraform(struct!.encryption),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    named_ports: cdktf.listMapper(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsToTerraform, false)(struct!.namedPorts),
    networking: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingToTerraform(struct!.networking),
  }
}


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsToHclTerraform, false)(struct!.namedPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsList",
    },
    networking: {
      value: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namedPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedPorts = this._namedPorts?.internalValue;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._namedPorts.internalValue = undefined;
      this._networking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._id = value.id;
      this._name = value.name;
      this._namedPorts.internalValue = value.namedPorts;
      this._networking.internalValue = value.networking;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // named_ports - computed: false, optional: true, required: false
  private _namedPorts = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPortsList(this, "named_ports", false);
  public get namedPorts() {
    return this._namedPorts;
  }
  public putNamedPorts(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNamedPorts[] | cdktf.IResolvable) {
    this._namedPorts.internalValue = value;
  }
  public resetNamedPorts() {
    this._namedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortsInput() {
    return this._namedPorts.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }
}

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#annotations DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#labels DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#name DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest k8s_cilium_io_cilium_endpoint_slice_v2alpha1_manifest}
*/
export class DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_endpoint_slice_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumEndpointSliceV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_endpoint_slice_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_endpoint_slice_v2alpha1_manifest k8s_cilium_io_cilium_endpoint_slice_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_endpoint_slice_v2alpha1_manifest',
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
    this._endpoints.internalValue = config.endpoints;
    this._metadata.internalValue = config.metadata;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoints - computed: false, optional: false, required: true
  private _endpoints = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsToTerraform, false)(this._endpoints.internalValue),
      metadata: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoints: {
        value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsToHclTerraform, false)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestEndpointsList",
      },
      metadata: {
        value: dataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumEndpointSliceV2Alpha1ManifestMetadata",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
