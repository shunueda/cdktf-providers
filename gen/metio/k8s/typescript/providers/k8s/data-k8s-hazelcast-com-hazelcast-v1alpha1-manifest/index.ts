// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#metadata DataK8SHazelcastComHazelcastV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata;
  /**
  * Initial values will be filled with its fields' default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#spec DataK8SHazelcastComHazelcastV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec;
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#annotations DataK8SHazelcastComHazelcastV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespace DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#interfaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#interfaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#port DataK8SHazelcastComHazelcastV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#port_count DataK8SHazelcastComHazelcastV1Alpha1Manifest#port_count}
  */
  readonly portCount?: number;
  /**
  * Service Type string describes ingress methods for a service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#service_type DataK8SHazelcastComHazelcastV1Alpha1Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan | cdktf.IResolvable): any {
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
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan | cdktf.IResolvable | undefined {
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
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._portCount = undefined;
      this._serviceType = undefined;
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
      this._portCount = value.portCount;
      this._serviceType = value.serviceType;
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

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#client_server_socket_endpoint_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#client_server_socket_endpoint_config}
  */
  readonly clientServerSocketEndpointConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#member_server_socket_endpoint_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#member_server_socket_endpoint_config}
  */
  readonly memberServerSocketEndpointConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#wan DataK8SHazelcastComHazelcastV1Alpha1Manifest#wan}
  */
  readonly wan?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_server_socket_endpoint_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigToTerraform(struct!.clientServerSocketEndpointConfig),
    member_server_socket_endpoint_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigToTerraform(struct!.memberServerSocketEndpointConfig),
    wan: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanToTerraform, false)(struct!.wan),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_server_socket_endpoint_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigToHclTerraform(struct!.clientServerSocketEndpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig",
    },
    member_server_socket_endpoint_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigToHclTerraform(struct!.memberServerSocketEndpointConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig",
    },
    wan: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanToHclTerraform, false)(struct!.wan),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientServerSocketEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientServerSocketEndpointConfig = this._clientServerSocketEndpointConfig?.internalValue;
    }
    if (this._memberServerSocketEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberServerSocketEndpointConfig = this._memberServerSocketEndpointConfig?.internalValue;
    }
    if (this._wan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wan = this._wan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientServerSocketEndpointConfig.internalValue = undefined;
      this._memberServerSocketEndpointConfig.internalValue = undefined;
      this._wan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientServerSocketEndpointConfig.internalValue = value.clientServerSocketEndpointConfig;
      this._memberServerSocketEndpointConfig.internalValue = value.memberServerSocketEndpointConfig;
      this._wan.internalValue = value.wan;
    }
  }

  // client_server_socket_endpoint_config - computed: false, optional: true, required: false
  private _clientServerSocketEndpointConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfigOutputReference(this, "client_server_socket_endpoint_config");
  public get clientServerSocketEndpointConfig() {
    return this._clientServerSocketEndpointConfig;
  }
  public putClientServerSocketEndpointConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkClientServerSocketEndpointConfig) {
    this._clientServerSocketEndpointConfig.internalValue = value;
  }
  public resetClientServerSocketEndpointConfig() {
    this._clientServerSocketEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientServerSocketEndpointConfigInput() {
    return this._clientServerSocketEndpointConfig.internalValue;
  }

  // member_server_socket_endpoint_config - computed: false, optional: true, required: false
  private _memberServerSocketEndpointConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfigOutputReference(this, "member_server_socket_endpoint_config");
  public get memberServerSocketEndpointConfig() {
    return this._memberServerSocketEndpointConfig;
  }
  public putMemberServerSocketEndpointConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkMemberServerSocketEndpointConfig) {
    this._memberServerSocketEndpointConfig.internalValue = value;
  }
  public resetMemberServerSocketEndpointConfig() {
    this._memberServerSocketEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberServerSocketEndpointConfigInput() {
    return this._memberServerSocketEndpointConfig.internalValue;
  }

  // wan - computed: false, optional: true, required: false
  private _wan = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWanList(this, "wan", false);
  public get wan() {
    return this._wan;
  }
  public putWan(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkWan[] | cdktf.IResolvable) {
    this._wan.internalValue = value;
  }
  public resetWan() {
    this._wan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInput() {
    return this._wan.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#claims DataK8SHazelcastComHazelcastV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#limits DataK8SHazelcastComHazelcastV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#requests DataK8SHazelcastComHazelcastV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent {
  /**
  * Repository to pull Hazelcast Platform Operator Agent(https://github.com/hazelcast/platform-operator-agent)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#repository DataK8SHazelcastComHazelcastV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Compute Resources required by the Agent container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#resources DataK8SHazelcastComHazelcastV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources;
  /**
  * Version of Hazelcast Platform Operator Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#version DataK8SHazelcastComHazelcastV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    resources: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesToTerraform(struct!.resources),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._resources.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._resources.internalValue = value.resources;
      this._version = value.version;
    }
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc {
  /**
  * AccessModes contains the actual access modes of the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#access_modes DataK8SHazelcastComHazelcastV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * A description of the PVC request capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#request_storage DataK8SHazelcastComHazelcastV1Alpha1Manifest#request_storage}
  */
  readonly requestStorage?: string;
  /**
  * Name of StorageClass which this persistent volume belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#storage_class_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    request_storage: cdktf.stringToTerraform(struct!.requestStorage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_storage: {
      value: cdktf.stringToHclTerraform(struct!.requestStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._requestStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestStorage = this._requestStorage;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._requestStorage = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._requestStorage = value.requestStorage;
      this._storageClassName = value.storageClassName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // request_storage - computed: false, optional: true, required: false
  private _requestStorage?: string; 
  public get requestStorage() {
    return this.getStringAttribute('request_storage');
  }
  public set requestStorage(value: string) {
    this._requestStorage = value;
  }
  public resetRequestStorage() {
    this._requestStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStorageInput() {
    return this._requestStorage;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem {
  /**
  * DataLoadTimeoutSeconds is the timeout duration in seconds for CP members to restore their persisted data from disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#data_load_timeout_seconds DataK8SHazelcastComHazelcastV1Alpha1Manifest#data_load_timeout_seconds}
  */
  readonly dataLoadTimeoutSeconds?: number;
  /**
  * FailOnIndeterminateOperationState indicated whether CP Subsystem operations use at-least-once and at-most-once execution guarantees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#fail_on_indeterminate_operation_state DataK8SHazelcastComHazelcastV1Alpha1Manifest#fail_on_indeterminate_operation_state}
  */
  readonly failOnIndeterminateOperationState?: boolean | cdktf.IResolvable;
  /**
  * MissingCpMemberAutoRemovalSeconds is the duration in seconds to wait before automatically removing a missing CP member from the CP Subsystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#missing_cp_member_auto_removal_seconds DataK8SHazelcastComHazelcastV1Alpha1Manifest#missing_cp_member_auto_removal_seconds}
  */
  readonly missingCpMemberAutoRemovalSeconds?: number;
  /**
  * PVC is the configuration of PersistenceVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pvc DataK8SHazelcastComHazelcastV1Alpha1Manifest#pvc}
  */
  readonly pvc?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc;
  /**
  * SessionHeartbeatIntervalSeconds Interval in seconds for the periodically committed CP session heartbeats. Must be smaller than SessionTTLSeconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#session_heartbeat_interval_seconds DataK8SHazelcastComHazelcastV1Alpha1Manifest#session_heartbeat_interval_seconds}
  */
  readonly sessionHeartbeatIntervalSeconds?: number;
  /**
  * SessionTTLSeconds is the duration for a CP session to be kept alive after the last received heartbeat. Must be greater than or equal to SessionHeartbeatIntervalSeconds and smaller than or equal to MissingCpMemberAutoRemovalSeconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#session_ttl_seconds DataK8SHazelcastComHazelcastV1Alpha1Manifest#session_ttl_seconds}
  */
  readonly sessionTtlSeconds?: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_load_timeout_seconds: cdktf.numberToTerraform(struct!.dataLoadTimeoutSeconds),
    fail_on_indeterminate_operation_state: cdktf.booleanToTerraform(struct!.failOnIndeterminateOperationState),
    missing_cp_member_auto_removal_seconds: cdktf.numberToTerraform(struct!.missingCpMemberAutoRemovalSeconds),
    pvc: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcToTerraform(struct!.pvc),
    session_heartbeat_interval_seconds: cdktf.numberToTerraform(struct!.sessionHeartbeatIntervalSeconds),
    session_ttl_seconds: cdktf.numberToTerraform(struct!.sessionTtlSeconds),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_load_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.dataLoadTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_on_indeterminate_operation_state: {
      value: cdktf.booleanToHclTerraform(struct!.failOnIndeterminateOperationState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    missing_cp_member_auto_removal_seconds: {
      value: cdktf.numberToHclTerraform(struct!.missingCpMemberAutoRemovalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc",
    },
    session_heartbeat_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sessionHeartbeatIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sessionTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLoadTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLoadTimeoutSeconds = this._dataLoadTimeoutSeconds;
    }
    if (this._failOnIndeterminateOperationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnIndeterminateOperationState = this._failOnIndeterminateOperationState;
    }
    if (this._missingCpMemberAutoRemovalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingCpMemberAutoRemovalSeconds = this._missingCpMemberAutoRemovalSeconds;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    if (this._sessionHeartbeatIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHeartbeatIntervalSeconds = this._sessionHeartbeatIntervalSeconds;
    }
    if (this._sessionTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTtlSeconds = this._sessionTtlSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLoadTimeoutSeconds = undefined;
      this._failOnIndeterminateOperationState = undefined;
      this._missingCpMemberAutoRemovalSeconds = undefined;
      this._pvc.internalValue = undefined;
      this._sessionHeartbeatIntervalSeconds = undefined;
      this._sessionTtlSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLoadTimeoutSeconds = value.dataLoadTimeoutSeconds;
      this._failOnIndeterminateOperationState = value.failOnIndeterminateOperationState;
      this._missingCpMemberAutoRemovalSeconds = value.missingCpMemberAutoRemovalSeconds;
      this._pvc.internalValue = value.pvc;
      this._sessionHeartbeatIntervalSeconds = value.sessionHeartbeatIntervalSeconds;
      this._sessionTtlSeconds = value.sessionTtlSeconds;
    }
  }

  // data_load_timeout_seconds - computed: false, optional: true, required: false
  private _dataLoadTimeoutSeconds?: number; 
  public get dataLoadTimeoutSeconds() {
    return this.getNumberAttribute('data_load_timeout_seconds');
  }
  public set dataLoadTimeoutSeconds(value: number) {
    this._dataLoadTimeoutSeconds = value;
  }
  public resetDataLoadTimeoutSeconds() {
    this._dataLoadTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLoadTimeoutSecondsInput() {
    return this._dataLoadTimeoutSeconds;
  }

  // fail_on_indeterminate_operation_state - computed: false, optional: true, required: false
  private _failOnIndeterminateOperationState?: boolean | cdktf.IResolvable; 
  public get failOnIndeterminateOperationState() {
    return this.getBooleanAttribute('fail_on_indeterminate_operation_state');
  }
  public set failOnIndeterminateOperationState(value: boolean | cdktf.IResolvable) {
    this._failOnIndeterminateOperationState = value;
  }
  public resetFailOnIndeterminateOperationState() {
    this._failOnIndeterminateOperationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnIndeterminateOperationStateInput() {
    return this._failOnIndeterminateOperationState;
  }

  // missing_cp_member_auto_removal_seconds - computed: false, optional: true, required: false
  private _missingCpMemberAutoRemovalSeconds?: number; 
  public get missingCpMemberAutoRemovalSeconds() {
    return this.getNumberAttribute('missing_cp_member_auto_removal_seconds');
  }
  public set missingCpMemberAutoRemovalSeconds(value: number) {
    this._missingCpMemberAutoRemovalSeconds = value;
  }
  public resetMissingCpMemberAutoRemovalSeconds() {
    this._missingCpMemberAutoRemovalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingCpMemberAutoRemovalSecondsInput() {
    return this._missingCpMemberAutoRemovalSeconds;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemPvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }

  // session_heartbeat_interval_seconds - computed: false, optional: true, required: false
  private _sessionHeartbeatIntervalSeconds?: number; 
  public get sessionHeartbeatIntervalSeconds() {
    return this.getNumberAttribute('session_heartbeat_interval_seconds');
  }
  public set sessionHeartbeatIntervalSeconds(value: number) {
    this._sessionHeartbeatIntervalSeconds = value;
  }
  public resetSessionHeartbeatIntervalSeconds() {
    this._sessionHeartbeatIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHeartbeatIntervalSecondsInput() {
    return this._sessionHeartbeatIntervalSeconds;
  }

  // session_ttl_seconds - computed: false, optional: true, required: false
  private _sessionTtlSeconds?: number; 
  public get sessionTtlSeconds() {
    return this.getNumberAttribute('session_ttl_seconds');
  }
  public set sessionTtlSeconds(value: number) {
    this._sessionTtlSeconds = value;
  }
  public resetSessionTtlSeconds() {
    this._sessionTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlSecondsInput() {
    return this._sessionTtlSeconds;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices {
  /**
  * Capacity of the executor task per partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#capacity DataK8SHazelcastComHazelcastV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Durability of the executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#durability DataK8SHazelcastComHazelcastV1Alpha1Manifest#durability}
  */
  readonly durability?: number;
  /**
  * The name of the executor service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The number of executor threads per member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pool_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Name of the User Code Namespace applied to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#user_code_namespace DataK8SHazelcastComHazelcastV1Alpha1Manifest#user_code_namespace}
  */
  readonly userCodeNamespace?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    durability: cdktf.numberToTerraform(struct!.durability),
    name: cdktf.stringToTerraform(struct!.name),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    user_code_namespace: cdktf.stringToTerraform(struct!.userCodeNamespace),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    durability: {
      value: cdktf.numberToHclTerraform(struct!.durability),
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
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_code_namespace: {
      value: cdktf.stringToHclTerraform(struct!.userCodeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._durability !== undefined) {
      hasAnyValues = true;
      internalValueResult.durability = this._durability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._userCodeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeNamespace = this._userCodeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._durability = undefined;
      this._name = undefined;
      this._poolSize = undefined;
      this._userCodeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._durability = value.durability;
      this._name = value.name;
      this._poolSize = value.poolSize;
      this._userCodeNamespace = value.userCodeNamespace;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // durability - computed: false, optional: true, required: false
  private _durability?: number; 
  public get durability() {
    return this.getNumberAttribute('durability');
  }
  public set durability(value: number) {
    this._durability = value;
  }
  public resetDurability() {
    this._durability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durabilityInput() {
    return this._durability;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // user_code_namespace - computed: false, optional: true, required: false
  private _userCodeNamespace?: string; 
  public get userCodeNamespace() {
    return this.getStringAttribute('user_code_namespace');
  }
  public set userCodeNamespace(value: string) {
    this._userCodeNamespace = value;
  }
  public resetUserCodeNamespace() {
    this._userCodeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeNamespaceInput() {
    return this._userCodeNamespace;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#optional DataK8SHazelcastComHazelcastV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#api_version DataK8SHazelcastComHazelcastV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#field_path DataK8SHazelcastComHazelcastV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#container_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#divisor DataK8SHazelcastComHazelcastV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#resource DataK8SHazelcastComHazelcastV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#optional DataK8SHazelcastComHazelcastV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#config_map_key_ref DataK8SHazelcastComHazelcastV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#field_ref DataK8SHazelcastComHazelcastV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#resource_field_ref DataK8SHazelcastComHazelcastV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret_key_ref DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#value DataK8SHazelcastComHazelcastV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#value_from DataK8SHazelcastComHazelcastV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices {
  /**
  * The name of the executor service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The number of executor threads per member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pool_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Task queue capacity of the executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#queue_capacity DataK8SHazelcastComHazelcastV1Alpha1Manifest#queue_capacity}
  */
  readonly queueCapacity?: number;
  /**
  * Name of the User Code Namespace applied to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#user_code_namespace DataK8SHazelcastComHazelcastV1Alpha1Manifest#user_code_namespace}
  */
  readonly userCodeNamespace?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    queue_capacity: cdktf.numberToTerraform(struct!.queueCapacity),
    user_code_namespace: cdktf.stringToTerraform(struct!.userCodeNamespace),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices | cdktf.IResolvable): any {
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
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_capacity: {
      value: cdktf.numberToHclTerraform(struct!.queueCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_code_namespace: {
      value: cdktf.stringToHclTerraform(struct!.userCodeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._queueCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCapacity = this._queueCapacity;
    }
    if (this._userCodeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeNamespace = this._userCodeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._poolSize = undefined;
      this._queueCapacity = undefined;
      this._userCodeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._poolSize = value.poolSize;
      this._queueCapacity = value.queueCapacity;
      this._userCodeNamespace = value.userCodeNamespace;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // queue_capacity - computed: false, optional: true, required: false
  private _queueCapacity?: number; 
  public get queueCapacity() {
    return this.getNumberAttribute('queue_capacity');
  }
  public set queueCapacity(value: number) {
    this._queueCapacity = value;
  }
  public resetQueueCapacity() {
    this._queueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCapacityInput() {
    return this._queueCapacity;
  }

  // user_code_namespace - computed: false, optional: true, required: false
  private _userCodeNamespace?: string; 
  public get userCodeNamespace() {
    return this.getStringAttribute('user_code_namespace');
  }
  public set userCodeNamespace(value: string) {
    this._userCodeNamespace = value;
  }
  public resetUserCodeNamespace() {
    this._userCodeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeNamespaceInput() {
    return this._userCodeNamespace;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally {
  /**
  * Type of the service used to discover Hazelcast cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#discovery_service_type DataK8SHazelcastComHazelcastV1Alpha1Manifest#discovery_service_type}
  */
  readonly discoveryServiceType?: string;
  /**
  * How each member is accessed from the external client. Only available for 'Smart' client and valid values are: - 'NodePortExternalIP' (default): each member is accessed by the NodePort service and the node external IP/hostname - 'NodePortNodeName': each member is accessed by the NodePort service and the node name - 'LoadBalancer': each member is accessed by the LoadBalancer service external address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#member_access DataK8SHazelcastComHazelcastV1Alpha1Manifest#member_access}
  */
  readonly memberAccess?: string;
  /**
  * Specifies how members are exposed. Valid values are: - 'Smart' (default): each member pod is exposed with a separate external address - 'Unisocket': all member pods are exposed with one external address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#type DataK8SHazelcastComHazelcastV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery_service_type: cdktf.stringToTerraform(struct!.discoveryServiceType),
    member_access: cdktf.stringToTerraform(struct!.memberAccess),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery_service_type: {
      value: cdktf.stringToHclTerraform(struct!.discoveryServiceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_access: {
      value: cdktf.stringToHclTerraform(struct!.memberAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryServiceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryServiceType = this._discoveryServiceType;
    }
    if (this._memberAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberAccess = this._memberAccess;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryServiceType = undefined;
      this._memberAccess = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryServiceType = value.discoveryServiceType;
      this._memberAccess = value.memberAccess;
      this._type = value.type;
    }
  }

  // discovery_service_type - computed: false, optional: true, required: false
  private _discoveryServiceType?: string; 
  public get discoveryServiceType() {
    return this.getStringAttribute('discovery_service_type');
  }
  public set discoveryServiceType(value: string) {
    this._discoveryServiceType = value;
  }
  public resetDiscoveryServiceType() {
    this._discoveryServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryServiceTypeInput() {
    return this._discoveryServiceType;
  }

  // member_access - computed: false, optional: true, required: false
  private _memberAccess?: string; 
  public get memberAccess() {
    return this.getStringAttribute('member_access');
  }
  public set memberAccess(value: string) {
    this._memberAccess = value;
  }
  public resetMemberAccess() {
    this._memberAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccessInput() {
    return this._memberAccess;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig {
  /**
  * URL of the bucket to download HotBackup folders. AWS S3, GCP Bucket and Azure Blob storage buckets are supported. Example bucket URIs: - AWS S3 -> s3://bucket-name/path/to/folder - GCP Bucket -> gs://bucket-name/path/to/folder - Azure Blob -> azblob://bucket-name/path/to/folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_uri DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * secret is a deprecated alias for secretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Name of the secret with credentials for cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketUri = undefined;
      this._secret = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketUri = value.bucketUri;
      this._secret = value.secret;
      this._secretName = value.secretName;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults {
  /**
  * Limits the size of the packet in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#packet_size_limit DataK8SHazelcastComHazelcastV1Alpha1Manifest#packet_size_limit}
  */
  readonly packetSizeLimit?: number;
  /**
  * Sets the capacity of processor-to-processor concurrent queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#queue_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#queue_size}
  */
  readonly queueSize?: number;
  /**
  * Sets the scaling factor used by the adaptive receive window sizing function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#receive_window_multiplier DataK8SHazelcastComHazelcastV1Alpha1Manifest#receive_window_multiplier}
  */
  readonly receiveWindowMultiplier?: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packet_size_limit: cdktf.numberToTerraform(struct!.packetSizeLimit),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
    receive_window_multiplier: cdktf.numberToTerraform(struct!.receiveWindowMultiplier),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packet_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.packetSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_window_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.receiveWindowMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSizeLimit = this._packetSizeLimit;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    if (this._receiveWindowMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveWindowMultiplier = this._receiveWindowMultiplier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetSizeLimit = undefined;
      this._queueSize = undefined;
      this._receiveWindowMultiplier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetSizeLimit = value.packetSizeLimit;
      this._queueSize = value.queueSize;
      this._receiveWindowMultiplier = value.receiveWindowMultiplier;
    }
  }

  // packet_size_limit - computed: false, optional: true, required: false
  private _packetSizeLimit?: number; 
  public get packetSizeLimit() {
    return this.getNumberAttribute('packet_size_limit');
  }
  public set packetSizeLimit(value: number) {
    this._packetSizeLimit = value;
  }
  public resetPacketSizeLimit() {
    this._packetSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeLimitInput() {
    return this._packetSizeLimit;
  }

  // queue_size - computed: false, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // receive_window_multiplier - computed: false, optional: true, required: false
  private _receiveWindowMultiplier?: number; 
  public get receiveWindowMultiplier() {
    return this.getNumberAttribute('receive_window_multiplier');
  }
  public set receiveWindowMultiplier(value: number) {
    this._receiveWindowMultiplier = value;
  }
  public resetReceiveWindowMultiplier() {
    this._receiveWindowMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowMultiplierInput() {
    return this._receiveWindowMultiplier;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance {
  /**
  * The number of synchronous backups to configure on the IMap that Jet needs internally to store job metadata and snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#backup_count DataK8SHazelcastComHazelcastV1Alpha1Manifest#backup_count}
  */
  readonly backupCount?: number;
  /**
  * The number of threads Jet creates in its cooperative multithreading pool. Its default value is the number of cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#cooperative_thread_count DataK8SHazelcastComHazelcastV1Alpha1Manifest#cooperative_thread_count}
  */
  readonly cooperativeThreadCount?: number;
  /**
  * The duration of the interval between flow-control packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#flow_control_period_millis DataK8SHazelcastComHazelcastV1Alpha1Manifest#flow_control_period_millis}
  */
  readonly flowControlPeriodMillis?: number;
  /**
  * Specifies whether the Lossless Cluster Restart feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#lossless_restart_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#lossless_restart_enabled}
  */
  readonly losslessRestartEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of records that can be accumulated by any single processor instance. Default value is Long.MAX_VALUE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#max_processor_accumulated_records DataK8SHazelcastComHazelcastV1Alpha1Manifest#max_processor_accumulated_records}
  */
  readonly maxProcessorAccumulatedRecords?: number;
  /**
  * The delay after which the auto-scaled jobs restart if a new member joins the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#scale_up_delay_millis DataK8SHazelcastComHazelcastV1Alpha1Manifest#scale_up_delay_millis}
  */
  readonly scaleUpDelayMillis?: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_count: cdktf.numberToTerraform(struct!.backupCount),
    cooperative_thread_count: cdktf.numberToTerraform(struct!.cooperativeThreadCount),
    flow_control_period_millis: cdktf.numberToTerraform(struct!.flowControlPeriodMillis),
    lossless_restart_enabled: cdktf.booleanToTerraform(struct!.losslessRestartEnabled),
    max_processor_accumulated_records: cdktf.numberToTerraform(struct!.maxProcessorAccumulatedRecords),
    scale_up_delay_millis: cdktf.numberToTerraform(struct!.scaleUpDelayMillis),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_count: {
      value: cdktf.numberToHclTerraform(struct!.backupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cooperative_thread_count: {
      value: cdktf.numberToHclTerraform(struct!.cooperativeThreadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_control_period_millis: {
      value: cdktf.numberToHclTerraform(struct!.flowControlPeriodMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lossless_restart_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.losslessRestartEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_processor_accumulated_records: {
      value: cdktf.numberToHclTerraform(struct!.maxProcessorAccumulatedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_up_delay_millis: {
      value: cdktf.numberToHclTerraform(struct!.scaleUpDelayMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCount = this._backupCount;
    }
    if (this._cooperativeThreadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooperativeThreadCount = this._cooperativeThreadCount;
    }
    if (this._flowControlPeriodMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControlPeriodMillis = this._flowControlPeriodMillis;
    }
    if (this._losslessRestartEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.losslessRestartEnabled = this._losslessRestartEnabled;
    }
    if (this._maxProcessorAccumulatedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProcessorAccumulatedRecords = this._maxProcessorAccumulatedRecords;
    }
    if (this._scaleUpDelayMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpDelayMillis = this._scaleUpDelayMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupCount = undefined;
      this._cooperativeThreadCount = undefined;
      this._flowControlPeriodMillis = undefined;
      this._losslessRestartEnabled = undefined;
      this._maxProcessorAccumulatedRecords = undefined;
      this._scaleUpDelayMillis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupCount = value.backupCount;
      this._cooperativeThreadCount = value.cooperativeThreadCount;
      this._flowControlPeriodMillis = value.flowControlPeriodMillis;
      this._losslessRestartEnabled = value.losslessRestartEnabled;
      this._maxProcessorAccumulatedRecords = value.maxProcessorAccumulatedRecords;
      this._scaleUpDelayMillis = value.scaleUpDelayMillis;
    }
  }

  // backup_count - computed: false, optional: true, required: false
  private _backupCount?: number; 
  public get backupCount() {
    return this.getNumberAttribute('backup_count');
  }
  public set backupCount(value: number) {
    this._backupCount = value;
  }
  public resetBackupCount() {
    this._backupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCountInput() {
    return this._backupCount;
  }

  // cooperative_thread_count - computed: false, optional: true, required: false
  private _cooperativeThreadCount?: number; 
  public get cooperativeThreadCount() {
    return this.getNumberAttribute('cooperative_thread_count');
  }
  public set cooperativeThreadCount(value: number) {
    this._cooperativeThreadCount = value;
  }
  public resetCooperativeThreadCount() {
    this._cooperativeThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooperativeThreadCountInput() {
    return this._cooperativeThreadCount;
  }

  // flow_control_period_millis - computed: false, optional: true, required: false
  private _flowControlPeriodMillis?: number; 
  public get flowControlPeriodMillis() {
    return this.getNumberAttribute('flow_control_period_millis');
  }
  public set flowControlPeriodMillis(value: number) {
    this._flowControlPeriodMillis = value;
  }
  public resetFlowControlPeriodMillis() {
    this._flowControlPeriodMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlPeriodMillisInput() {
    return this._flowControlPeriodMillis;
  }

  // lossless_restart_enabled - computed: false, optional: true, required: false
  private _losslessRestartEnabled?: boolean | cdktf.IResolvable; 
  public get losslessRestartEnabled() {
    return this.getBooleanAttribute('lossless_restart_enabled');
  }
  public set losslessRestartEnabled(value: boolean | cdktf.IResolvable) {
    this._losslessRestartEnabled = value;
  }
  public resetLosslessRestartEnabled() {
    this._losslessRestartEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get losslessRestartEnabledInput() {
    return this._losslessRestartEnabled;
  }

  // max_processor_accumulated_records - computed: false, optional: true, required: false
  private _maxProcessorAccumulatedRecords?: number; 
  public get maxProcessorAccumulatedRecords() {
    return this.getNumberAttribute('max_processor_accumulated_records');
  }
  public set maxProcessorAccumulatedRecords(value: number) {
    this._maxProcessorAccumulatedRecords = value;
  }
  public resetMaxProcessorAccumulatedRecords() {
    this._maxProcessorAccumulatedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProcessorAccumulatedRecordsInput() {
    return this._maxProcessorAccumulatedRecords;
  }

  // scale_up_delay_millis - computed: false, optional: true, required: false
  private _scaleUpDelayMillis?: number; 
  public get scaleUpDelayMillis() {
    return this.getNumberAttribute('scale_up_delay_millis');
  }
  public set scaleUpDelayMillis(value: number) {
    this._scaleUpDelayMillis = value;
  }
  public resetScaleUpDelayMillis() {
    this._scaleUpDelayMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpDelayMillisInput() {
    return this._scaleUpDelayMillis;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet {
  /**
  * Bucket config from where the JAR files will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_config}
  */
  readonly bucketConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig;
  /**
  * Names of the list of ConfigMaps. Files in each ConfigMap will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#config_maps DataK8SHazelcastComHazelcastV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * Jet Edge Defaults Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#edge_defaults DataK8SHazelcastComHazelcastV1Alpha1Manifest#edge_defaults}
  */
  readonly edgeDefaults?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults;
  /**
  * When false, disables Jet Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Jet Instance Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#instance DataK8SHazelcastComHazelcastV1Alpha1Manifest#instance}
  */
  readonly instance?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance;
  /**
  * List of URLs from where the files will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#remote_urls DataK8SHazelcastComHazelcastV1Alpha1Manifest#remote_urls}
  */
  readonly remoteUrls?: string[];
  /**
  * When true, enables resource uploading for Jet jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#resource_upload_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#resource_upload_enabled}
  */
  readonly resourceUploadEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigToTerraform(struct!.bucketConfig),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    edge_defaults: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsToTerraform(struct!.edgeDefaults),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    instance: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceToTerraform(struct!.instance),
    remote_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteUrls),
    resource_upload_enabled: cdktf.booleanToTerraform(struct!.resourceUploadEnabled),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigToHclTerraform(struct!.bucketConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    edge_defaults: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsToHclTerraform(struct!.edgeDefaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceToHclTerraform(struct!.instance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance",
    },
    remote_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_upload_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.resourceUploadEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfig = this._bucketConfig?.internalValue;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._edgeDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeDefaults = this._edgeDefaults?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._instance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance?.internalValue;
    }
    if (this._remoteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUrls = this._remoteUrls;
    }
    if (this._resourceUploadEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUploadEnabled = this._resourceUploadEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = undefined;
      this._configMaps = undefined;
      this._edgeDefaults.internalValue = undefined;
      this._enabled = undefined;
      this._instance.internalValue = undefined;
      this._remoteUrls = undefined;
      this._resourceUploadEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = value.bucketConfig;
      this._configMaps = value.configMaps;
      this._edgeDefaults.internalValue = value.edgeDefaults;
      this._enabled = value.enabled;
      this._instance.internalValue = value.instance;
      this._remoteUrls = value.remoteUrls;
      this._resourceUploadEnabled = value.resourceUploadEnabled;
    }
  }

  // bucket_config - computed: false, optional: true, required: false
  private _bucketConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfigOutputReference(this, "bucket_config");
  public get bucketConfig() {
    return this._bucketConfig;
  }
  public putBucketConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetBucketConfig) {
    this._bucketConfig.internalValue = value;
  }
  public resetBucketConfig() {
    this._bucketConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigInput() {
    return this._bucketConfig.internalValue;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // edge_defaults - computed: false, optional: true, required: false
  private _edgeDefaults = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaultsOutputReference(this, "edge_defaults");
  public get edgeDefaults() {
    return this._edgeDefaults;
  }
  public putEdgeDefaults(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetEdgeDefaults) {
    this._edgeDefaults.internalValue = value;
  }
  public resetEdgeDefaults() {
    this._edgeDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeDefaultsInput() {
    return this._edgeDefaults.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // instance - computed: false, optional: true, required: false
  private _instance = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetInstance) {
    this._instance.internalValue = value;
  }
  public resetInstance() {
    this._instance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // remote_urls - computed: false, optional: true, required: false
  private _remoteUrls?: string[]; 
  public get remoteUrls() {
    return this.getListAttribute('remote_urls');
  }
  public set remoteUrls(value: string[]) {
    this._remoteUrls = value;
  }
  public resetRemoteUrls() {
    this._remoteUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUrlsInput() {
    return this._remoteUrls;
  }

  // resource_upload_enabled - computed: false, optional: true, required: false
  private _resourceUploadEnabled?: boolean | cdktf.IResolvable; 
  public get resourceUploadEnabled() {
    return this.getBooleanAttribute('resource_upload_enabled');
  }
  public set resourceUploadEnabled(value: boolean | cdktf.IResolvable) {
    this._resourceUploadEnabled = value;
  }
  public resetResourceUploadEnabled() {
    this._resourceUploadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUploadEnabledInput() {
    return this._resourceUploadEnabled;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc {
  /**
  * Collector is the Garbage Collector type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#collector DataK8SHazelcastComHazelcastV1Alpha1Manifest#collector}
  */
  readonly collector?: string;
  /**
  * Logging enables logging when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#logging DataK8SHazelcastComHazelcastV1Alpha1Manifest#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector: cdktf.stringToTerraform(struct!.collector),
    logging: cdktf.booleanToTerraform(struct!.logging),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector: {
      value: cdktf.stringToHclTerraform(struct!.collector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collector !== undefined) {
      hasAnyValues = true;
      internalValueResult.collector = this._collector;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collector = undefined;
      this._logging = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collector = value.collector;
      this._logging = value.logging;
    }
  }

  // collector - computed: false, optional: true, required: false
  private _collector?: string; 
  public get collector() {
    return this.getStringAttribute('collector');
  }
  public set collector(value: string) {
    this._collector = value;
  }
  public resetCollector() {
    this._collector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory {
  /**
  * InitialRAMPercentage configures JVM initial heap size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#initial_ram_percentage DataK8SHazelcastComHazelcastV1Alpha1Manifest#initial_ram_percentage}
  */
  readonly initialRamPercentage?: string;
  /**
  * MaxRAMPercentage sets the maximum heap size for a JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#max_ram_percentage DataK8SHazelcastComHazelcastV1Alpha1Manifest#max_ram_percentage}
  */
  readonly maxRamPercentage?: string;
  /**
  * MinRAMPercentage sets the minimum heap size for a JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#min_ram_percentage DataK8SHazelcastComHazelcastV1Alpha1Manifest#min_ram_percentage}
  */
  readonly minRamPercentage?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_ram_percentage: cdktf.stringToTerraform(struct!.initialRamPercentage),
    max_ram_percentage: cdktf.stringToTerraform(struct!.maxRamPercentage),
    min_ram_percentage: cdktf.stringToTerraform(struct!.minRamPercentage),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_ram_percentage: {
      value: cdktf.stringToHclTerraform(struct!.initialRamPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ram_percentage: {
      value: cdktf.stringToHclTerraform(struct!.maxRamPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_ram_percentage: {
      value: cdktf.stringToHclTerraform(struct!.minRamPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialRamPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialRamPercentage = this._initialRamPercentage;
    }
    if (this._maxRamPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRamPercentage = this._maxRamPercentage;
    }
    if (this._minRamPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRamPercentage = this._minRamPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialRamPercentage = undefined;
      this._maxRamPercentage = undefined;
      this._minRamPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialRamPercentage = value.initialRamPercentage;
      this._maxRamPercentage = value.maxRamPercentage;
      this._minRamPercentage = value.minRamPercentage;
    }
  }

  // initial_ram_percentage - computed: false, optional: true, required: false
  private _initialRamPercentage?: string; 
  public get initialRamPercentage() {
    return this.getStringAttribute('initial_ram_percentage');
  }
  public set initialRamPercentage(value: string) {
    this._initialRamPercentage = value;
  }
  public resetInitialRamPercentage() {
    this._initialRamPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRamPercentageInput() {
    return this._initialRamPercentage;
  }

  // max_ram_percentage - computed: false, optional: true, required: false
  private _maxRamPercentage?: string; 
  public get maxRamPercentage() {
    return this.getStringAttribute('max_ram_percentage');
  }
  public set maxRamPercentage(value: string) {
    this._maxRamPercentage = value;
  }
  public resetMaxRamPercentage() {
    this._maxRamPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRamPercentageInput() {
    return this._maxRamPercentage;
  }

  // min_ram_percentage - computed: false, optional: true, required: false
  private _minRamPercentage?: string; 
  public get minRamPercentage() {
    return this.getStringAttribute('min_ram_percentage');
  }
  public set minRamPercentage(value: string) {
    this._minRamPercentage = value;
  }
  public resetMinRamPercentage() {
    this._minRamPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamPercentageInput() {
    return this._minRamPercentage;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm {
  /**
  * Args is for arbitrary JVM arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#args DataK8SHazelcastComHazelcastV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * GC is for configuring JVM Garbage Collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#gc DataK8SHazelcastComHazelcastV1Alpha1Manifest#gc}
  */
  readonly gc?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc;
  /**
  * Memory is a JVM memory configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#memory DataK8SHazelcastComHazelcastV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    gc: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcToTerraform(struct!.gc),
    memory: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryToTerraform(struct!.memory),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gc: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcToHclTerraform(struct!.gc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc",
    },
    memory: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._gc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gc = this._gc?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._gc.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._gc.internalValue = value.gc;
      this._memory.internalValue = value.memory;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // gc - computed: false, optional: true, required: false
  private _gc = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGcOutputReference(this, "gc");
  public get gc() {
    return this._gc;
  }
  public putGc(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmGc) {
    this._gc.internalValue = value;
  }
  public resetGc() {
    this._gc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcInput() {
    return this._gc.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc {
  /**
  * AccessModes contains the actual access modes of the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#access_modes DataK8SHazelcastComHazelcastV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * A description of the PVC request capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#request_storage DataK8SHazelcastComHazelcastV1Alpha1Manifest#request_storage}
  */
  readonly requestStorage?: string;
  /**
  * Name of StorageClass which this persistent volume belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#storage_class_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    request_storage: cdktf.stringToTerraform(struct!.requestStorage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_storage: {
      value: cdktf.stringToHclTerraform(struct!.requestStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._requestStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestStorage = this._requestStorage;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._requestStorage = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._requestStorage = value.requestStorage;
      this._storageClassName = value.storageClassName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // request_storage - computed: false, optional: true, required: false
  private _requestStorage?: string; 
  public get requestStorage() {
    return this.getStringAttribute('request_storage');
  }
  public set requestStorage(value: string) {
    this._requestStorage = value;
  }
  public resetRequestStorage() {
    this._requestStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStorageInput() {
    return this._requestStorage;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices {
  /**
  * BlockSize defines Device block/sector size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#block_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#block_size}
  */
  readonly blockSize?: number;
  /**
  * Name represents the name of the local device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Configuration of PersistenceVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pvc DataK8SHazelcastComHazelcastV1Alpha1Manifest#pvc}
  */
  readonly pvc?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc;
  /**
  * ReadIOThreadCount is Read IO thread count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#read_io_thread_count DataK8SHazelcastComHazelcastV1Alpha1Manifest#read_io_thread_count}
  */
  readonly readIoThreadCount?: number;
  /**
  * WriteIOThreadCount is Write IO thread count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#write_io_thread_count DataK8SHazelcastComHazelcastV1Alpha1Manifest#write_io_thread_count}
  */
  readonly writeIoThreadCount?: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size: cdktf.numberToTerraform(struct!.blockSize),
    name: cdktf.stringToTerraform(struct!.name),
    pvc: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcToTerraform(struct!.pvc),
    read_io_thread_count: cdktf.numberToTerraform(struct!.readIoThreadCount),
    write_io_thread_count: cdktf.numberToTerraform(struct!.writeIoThreadCount),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size: {
      value: cdktf.numberToHclTerraform(struct!.blockSize),
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
    pvc: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc",
    },
    read_io_thread_count: {
      value: cdktf.numberToHclTerraform(struct!.readIoThreadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_io_thread_count: {
      value: cdktf.numberToHclTerraform(struct!.writeIoThreadCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    if (this._readIoThreadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.readIoThreadCount = this._readIoThreadCount;
    }
    if (this._writeIoThreadCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeIoThreadCount = this._writeIoThreadCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockSize = undefined;
      this._name = undefined;
      this._pvc.internalValue = undefined;
      this._readIoThreadCount = undefined;
      this._writeIoThreadCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockSize = value.blockSize;
      this._name = value.name;
      this._pvc.internalValue = value.pvc;
      this._readIoThreadCount = value.readIoThreadCount;
      this._writeIoThreadCount = value.writeIoThreadCount;
    }
  }

  // block_size - computed: false, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
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

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesPvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }

  // read_io_thread_count - computed: false, optional: true, required: false
  private _readIoThreadCount?: number; 
  public get readIoThreadCount() {
    return this.getNumberAttribute('read_io_thread_count');
  }
  public set readIoThreadCount(value: number) {
    this._readIoThreadCount = value;
  }
  public resetReadIoThreadCount() {
    this._readIoThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readIoThreadCountInput() {
    return this._readIoThreadCount;
  }

  // write_io_thread_count - computed: false, optional: true, required: false
  private _writeIoThreadCount?: number; 
  public get writeIoThreadCount() {
    return this.getNumberAttribute('write_io_thread_count');
  }
  public set writeIoThreadCount(value: number) {
    this._writeIoThreadCount = value;
  }
  public resetWriteIoThreadCount() {
    this._writeIoThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeIoThreadCountInput() {
    return this._writeIoThreadCount;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter {
  /**
  * Allows you to execute commands from a built-in console in the user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#console_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#console_enabled}
  */
  readonly consoleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allows you to access contents of Hazelcast data structures via SQL Browser or Map Browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#data_access_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#data_access_enabled}
  */
  readonly dataAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allows you to execute scripts that can automate interactions with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#scripting_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#scripting_enabled}
  */
  readonly scriptingEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console_enabled: cdktf.booleanToTerraform(struct!.consoleEnabled),
    data_access_enabled: cdktf.booleanToTerraform(struct!.dataAccessEnabled),
    scripting_enabled: cdktf.booleanToTerraform(struct!.scriptingEnabled),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.consoleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scripting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scriptingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleEnabled = this._consoleEnabled;
    }
    if (this._dataAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessEnabled = this._dataAccessEnabled;
    }
    if (this._scriptingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptingEnabled = this._scriptingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consoleEnabled = undefined;
      this._dataAccessEnabled = undefined;
      this._scriptingEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consoleEnabled = value.consoleEnabled;
      this._dataAccessEnabled = value.dataAccessEnabled;
      this._scriptingEnabled = value.scriptingEnabled;
    }
  }

  // console_enabled - computed: false, optional: true, required: false
  private _consoleEnabled?: boolean | cdktf.IResolvable; 
  public get consoleEnabled() {
    return this.getBooleanAttribute('console_enabled');
  }
  public set consoleEnabled(value: boolean | cdktf.IResolvable) {
    this._consoleEnabled = value;
  }
  public resetConsoleEnabled() {
    this._consoleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleEnabledInput() {
    return this._consoleEnabled;
  }

  // data_access_enabled - computed: false, optional: true, required: false
  private _dataAccessEnabled?: boolean | cdktf.IResolvable; 
  public get dataAccessEnabled() {
    return this.getBooleanAttribute('data_access_enabled');
  }
  public set dataAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._dataAccessEnabled = value;
  }
  public resetDataAccessEnabled() {
    this._dataAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessEnabledInput() {
    return this._dataAccessEnabled;
  }

  // scripting_enabled - computed: false, optional: true, required: false
  private _scriptingEnabled?: boolean | cdktf.IResolvable; 
  public get scriptingEnabled() {
    return this.getBooleanAttribute('scripting_enabled');
  }
  public set scriptingEnabled(value: boolean | cdktf.IResolvable) {
    this._scriptingEnabled = value;
  }
  public resetScriptingEnabled() {
    this._scriptingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptingEnabledInput() {
    return this._scriptingEnabled;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory {
  /**
  * AllocatorType specifies one of 2 types of mechanism for allocating memory to HD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#allocator_type DataK8SHazelcastComHazelcastV1Alpha1Manifest#allocator_type}
  */
  readonly allocatorType?: string;
  /**
  * MetadataSpacePercentage defines percentage of the allocated native memory that is used for the metadata of other map components such as index (for predicates), offset, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#metadata_space_percentage DataK8SHazelcastComHazelcastV1Alpha1Manifest#metadata_space_percentage}
  */
  readonly metadataSpacePercentage?: number;
  /**
  * MinBlockSize is the size of smallest block that will be allocated. It is used only by the POOLED memory allocator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#min_block_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#min_block_size}
  */
  readonly minBlockSize?: number;
  /**
  * PageSize is the size of the page in bytes to allocate memory as a block. It is used only by the POOLED memory allocator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#page_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#page_size}
  */
  readonly pageSize?: number;
  /**
  * Size of the total native memory to allocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#size DataK8SHazelcastComHazelcastV1Alpha1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocator_type: cdktf.stringToTerraform(struct!.allocatorType),
    metadata_space_percentage: cdktf.numberToTerraform(struct!.metadataSpacePercentage),
    min_block_size: cdktf.numberToTerraform(struct!.minBlockSize),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocator_type: {
      value: cdktf.stringToHclTerraform(struct!.allocatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_space_percentage: {
      value: cdktf.numberToHclTerraform(struct!.metadataSpacePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_block_size: {
      value: cdktf.numberToHclTerraform(struct!.minBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatorType = this._allocatorType;
    }
    if (this._metadataSpacePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSpacePercentage = this._metadataSpacePercentage;
    }
    if (this._minBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBlockSize = this._minBlockSize;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatorType = undefined;
      this._metadataSpacePercentage = undefined;
      this._minBlockSize = undefined;
      this._pageSize = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatorType = value.allocatorType;
      this._metadataSpacePercentage = value.metadataSpacePercentage;
      this._minBlockSize = value.minBlockSize;
      this._pageSize = value.pageSize;
      this._size = value.size;
    }
  }

  // allocator_type - computed: false, optional: true, required: false
  private _allocatorType?: string; 
  public get allocatorType() {
    return this.getStringAttribute('allocator_type');
  }
  public set allocatorType(value: string) {
    this._allocatorType = value;
  }
  public resetAllocatorType() {
    this._allocatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatorTypeInput() {
    return this._allocatorType;
  }

  // metadata_space_percentage - computed: false, optional: true, required: false
  private _metadataSpacePercentage?: number; 
  public get metadataSpacePercentage() {
    return this.getNumberAttribute('metadata_space_percentage');
  }
  public set metadataSpacePercentage(value: number) {
    this._metadataSpacePercentage = value;
  }
  public resetMetadataSpacePercentage() {
    this._metadataSpacePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSpacePercentageInput() {
    return this._metadataSpacePercentage;
  }

  // min_block_size - computed: false, optional: true, required: false
  private _minBlockSize?: number; 
  public get minBlockSize() {
    return this.getNumberAttribute('min_block_size');
  }
  public set minBlockSize(value: number) {
    this._minBlockSize = value;
  }
  public resetMinBlockSize() {
    this._minBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBlockSizeInput() {
    return this._minBlockSize;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc {
  /**
  * AccessModes contains the actual access modes of the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#access_modes DataK8SHazelcastComHazelcastV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * A description of the PVC request capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#request_storage DataK8SHazelcastComHazelcastV1Alpha1Manifest#request_storage}
  */
  readonly requestStorage?: string;
  /**
  * Name of StorageClass which this persistent volume belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#storage_class_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    request_storage: cdktf.stringToTerraform(struct!.requestStorage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_storage: {
      value: cdktf.stringToHclTerraform(struct!.requestStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._requestStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestStorage = this._requestStorage;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._requestStorage = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._requestStorage = value.requestStorage;
      this._storageClassName = value.storageClassName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // request_storage - computed: false, optional: true, required: false
  private _requestStorage?: string; 
  public get requestStorage() {
    return this.getStringAttribute('request_storage');
  }
  public set requestStorage(value: string) {
    this._requestStorage = value;
  }
  public resetRequestStorage() {
    this._requestStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStorageInput() {
    return this._requestStorage;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig {
  /**
  * URL of the bucket to download HotBackup folders. AWS S3, GCP Bucket and Azure Blob storage buckets are supported. Example bucket URIs: - AWS S3 -> s3://bucket-name/path/to/folder - GCP Bucket -> gs://bucket-name/path/to/folder - Azure Blob -> azblob://bucket-name/path/to/folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_uri DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * secret is a deprecated alias for secretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Name of the secret with credentials for cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketUri = undefined;
      this._secret = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketUri = value.bucketUri;
      this._secret = value.secret;
      this._secretName = value.secretName;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig {
  /**
  * Local backup base directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#backup_dir DataK8SHazelcastComHazelcastV1Alpha1Manifest#backup_dir}
  */
  readonly backupDir?: string;
  /**
  * Backup directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#backup_folder DataK8SHazelcastComHazelcastV1Alpha1Manifest#backup_folder}
  */
  readonly backupFolder?: string;
  /**
  * Persistence base directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#base_dir DataK8SHazelcastComHazelcastV1Alpha1Manifest#base_dir}
  */
  readonly baseDir?: string;
  /**
  * PVC name prefix used in existing PVCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pvc_name_prefix DataK8SHazelcastComHazelcastV1Alpha1Manifest#pvc_name_prefix}
  */
  readonly pvcNamePrefix?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_dir: cdktf.stringToTerraform(struct!.backupDir),
    backup_folder: cdktf.stringToTerraform(struct!.backupFolder),
    base_dir: cdktf.stringToTerraform(struct!.baseDir),
    pvc_name_prefix: cdktf.stringToTerraform(struct!.pvcNamePrefix),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_dir: {
      value: cdktf.stringToHclTerraform(struct!.backupDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_folder: {
      value: cdktf.stringToHclTerraform(struct!.backupFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_dir: {
      value: cdktf.stringToHclTerraform(struct!.baseDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pvcNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDir = this._backupDir;
    }
    if (this._backupFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupFolder = this._backupFolder;
    }
    if (this._baseDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDir = this._baseDir;
    }
    if (this._pvcNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcNamePrefix = this._pvcNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupDir = undefined;
      this._backupFolder = undefined;
      this._baseDir = undefined;
      this._pvcNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupDir = value.backupDir;
      this._backupFolder = value.backupFolder;
      this._baseDir = value.baseDir;
      this._pvcNamePrefix = value.pvcNamePrefix;
    }
  }

  // backup_dir - computed: false, optional: true, required: false
  private _backupDir?: string; 
  public get backupDir() {
    return this.getStringAttribute('backup_dir');
  }
  public set backupDir(value: string) {
    this._backupDir = value;
  }
  public resetBackupDir() {
    this._backupDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirInput() {
    return this._backupDir;
  }

  // backup_folder - computed: false, optional: true, required: false
  private _backupFolder?: string; 
  public get backupFolder() {
    return this.getStringAttribute('backup_folder');
  }
  public set backupFolder(value: string) {
    this._backupFolder = value;
  }
  public resetBackupFolder() {
    this._backupFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFolderInput() {
    return this._backupFolder;
  }

  // base_dir - computed: false, optional: true, required: false
  private _baseDir?: string; 
  public get baseDir() {
    return this.getStringAttribute('base_dir');
  }
  public set baseDir(value: string) {
    this._baseDir = value;
  }
  public resetBaseDir() {
    this._baseDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirInput() {
    return this._baseDir;
  }

  // pvc_name_prefix - computed: false, optional: true, required: false
  private _pvcNamePrefix?: string; 
  public get pvcNamePrefix() {
    return this.getStringAttribute('pvc_name_prefix');
  }
  public set pvcNamePrefix(value: string) {
    this._pvcNamePrefix = value;
  }
  public resetPvcNamePrefix() {
    this._pvcNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcNamePrefixInput() {
    return this._pvcNamePrefix;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore {
  /**
  * Bucket Configuration from which the backup will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_config}
  */
  readonly bucketConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig;
  /**
  * Name of the HotBackup resource from which backup will be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#hot_backup_resource_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#hot_backup_resource_name}
  */
  readonly hotBackupResourceName?: string;
  /**
  * Configuration to restore from local backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#local_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#local_config}
  */
  readonly localConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigToTerraform(struct!.bucketConfig),
    hot_backup_resource_name: cdktf.stringToTerraform(struct!.hotBackupResourceName),
    local_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigToTerraform(struct!.localConfig),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigToHclTerraform(struct!.bucketConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig",
    },
    hot_backup_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.hotBackupResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigToHclTerraform(struct!.localConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfig = this._bucketConfig?.internalValue;
    }
    if (this._hotBackupResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotBackupResourceName = this._hotBackupResourceName;
    }
    if (this._localConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localConfig = this._localConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = undefined;
      this._hotBackupResourceName = undefined;
      this._localConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = value.bucketConfig;
      this._hotBackupResourceName = value.hotBackupResourceName;
      this._localConfig.internalValue = value.localConfig;
    }
  }

  // bucket_config - computed: false, optional: true, required: false
  private _bucketConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfigOutputReference(this, "bucket_config");
  public get bucketConfig() {
    return this._bucketConfig;
  }
  public putBucketConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreBucketConfig) {
    this._bucketConfig.internalValue = value;
  }
  public resetBucketConfig() {
    this._bucketConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigInput() {
    return this._bucketConfig.internalValue;
  }

  // hot_backup_resource_name - computed: false, optional: true, required: false
  private _hotBackupResourceName?: string; 
  public get hotBackupResourceName() {
    return this.getStringAttribute('hot_backup_resource_name');
  }
  public set hotBackupResourceName(value: string) {
    this._hotBackupResourceName = value;
  }
  public resetHotBackupResourceName() {
    this._hotBackupResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotBackupResourceNameInput() {
    return this._hotBackupResourceName;
  }

  // local_config - computed: false, optional: true, required: false
  private _localConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfigOutputReference(this, "local_config");
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreLocalConfig) {
    this._localConfig.internalValue = value;
  }
  public resetLocalConfig() {
    this._localConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConfigInput() {
    return this._localConfig.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence {
  /**
  * BaseDir is deprecated. Use restore.localConfig to restore from a local backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#base_dir DataK8SHazelcastComHazelcastV1Alpha1Manifest#base_dir}
  */
  readonly baseDir?: string;
  /**
  * Configuration of the cluster recovery strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#cluster_data_recovery_policy DataK8SHazelcastComHazelcastV1Alpha1Manifest#cluster_data_recovery_policy}
  */
  readonly clusterDataRecoveryPolicy?: string;
  /**
  * DataRecoveryTimeout is timeout for each step of data recovery in seconds. Maximum timeout is equal to DataRecoveryTimeout*2 (for each step: validation and data-load).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#data_recovery_timeout DataK8SHazelcastComHazelcastV1Alpha1Manifest#data_recovery_timeout}
  */
  readonly dataRecoveryTimeout?: number;
  /**
  * Configuration of PersistenceVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pvc DataK8SHazelcastComHazelcastV1Alpha1Manifest#pvc}
  */
  readonly pvc?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc;
  /**
  * Restore configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#restore DataK8SHazelcastComHazelcastV1Alpha1Manifest#restore}
  */
  readonly restore?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore;
  /**
  * StartupAction represents the action triggered when the cluster starts to force the cluster startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#startup_action DataK8SHazelcastComHazelcastV1Alpha1Manifest#startup_action}
  */
  readonly startupAction?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dir: cdktf.stringToTerraform(struct!.baseDir),
    cluster_data_recovery_policy: cdktf.stringToTerraform(struct!.clusterDataRecoveryPolicy),
    data_recovery_timeout: cdktf.numberToTerraform(struct!.dataRecoveryTimeout),
    pvc: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcToTerraform(struct!.pvc),
    restore: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreToTerraform(struct!.restore),
    startup_action: cdktf.stringToTerraform(struct!.startupAction),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dir: {
      value: cdktf.stringToHclTerraform(struct!.baseDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_data_recovery_policy: {
      value: cdktf.stringToHclTerraform(struct!.clusterDataRecoveryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_recovery_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataRecoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcToHclTerraform(struct!.pvc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc",
    },
    restore: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore",
    },
    startup_action: {
      value: cdktf.stringToHclTerraform(struct!.startupAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDir = this._baseDir;
    }
    if (this._clusterDataRecoveryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDataRecoveryPolicy = this._clusterDataRecoveryPolicy;
    }
    if (this._dataRecoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRecoveryTimeout = this._dataRecoveryTimeout;
    }
    if (this._pvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc?.internalValue;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    if (this._startupAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupAction = this._startupAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDir = undefined;
      this._clusterDataRecoveryPolicy = undefined;
      this._dataRecoveryTimeout = undefined;
      this._pvc.internalValue = undefined;
      this._restore.internalValue = undefined;
      this._startupAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDir = value.baseDir;
      this._clusterDataRecoveryPolicy = value.clusterDataRecoveryPolicy;
      this._dataRecoveryTimeout = value.dataRecoveryTimeout;
      this._pvc.internalValue = value.pvc;
      this._restore.internalValue = value.restore;
      this._startupAction = value.startupAction;
    }
  }

  // base_dir - computed: false, optional: true, required: false
  private _baseDir?: string; 
  public get baseDir() {
    return this.getStringAttribute('base_dir');
  }
  public set baseDir(value: string) {
    this._baseDir = value;
  }
  public resetBaseDir() {
    this._baseDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirInput() {
    return this._baseDir;
  }

  // cluster_data_recovery_policy - computed: false, optional: true, required: false
  private _clusterDataRecoveryPolicy?: string; 
  public get clusterDataRecoveryPolicy() {
    return this.getStringAttribute('cluster_data_recovery_policy');
  }
  public set clusterDataRecoveryPolicy(value: string) {
    this._clusterDataRecoveryPolicy = value;
  }
  public resetClusterDataRecoveryPolicy() {
    this._clusterDataRecoveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataRecoveryPolicyInput() {
    return this._clusterDataRecoveryPolicy;
  }

  // data_recovery_timeout - computed: false, optional: true, required: false
  private _dataRecoveryTimeout?: number; 
  public get dataRecoveryTimeout() {
    return this.getNumberAttribute('data_recovery_timeout');
  }
  public set dataRecoveryTimeout(value: number) {
    this._dataRecoveryTimeout = value;
  }
  public resetDataRecoveryTimeout() {
    this._dataRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRecoveryTimeoutInput() {
    return this._dataRecoveryTimeout;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvcOutputReference(this, "pvc");
  public get pvc() {
    return this._pvc;
  }
  public putPvc(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistencePvc) {
    this._pvc.internalValue = value;
  }
  public resetPvc() {
    this._pvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // startup_action - computed: false, optional: true, required: false
  private _startupAction?: string; 
  public get startupAction() {
    return this.getStringAttribute('startup_action');
  }
  public set startupAction(value: string) {
    this._startupAction = value;
  }
  public resetStartupAction() {
    this._startupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupActionInput() {
    return this._startupAction;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#claims DataK8SHazelcastComHazelcastV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#limits DataK8SHazelcastComHazelcastV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#requests DataK8SHazelcastComHazelcastV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices {
  /**
  * Capacity of the executor task per partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#capacity DataK8SHazelcastComHazelcastV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * The active policy for the capacity setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#capacity_policy DataK8SHazelcastComHazelcastV1Alpha1Manifest#capacity_policy}
  */
  readonly capacityPolicy?: string;
  /**
  * Durability of the executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#durability DataK8SHazelcastComHazelcastV1Alpha1Manifest#durability}
  */
  readonly durability?: number;
  /**
  * The name of the executor service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#name DataK8SHazelcastComHazelcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The number of executor threads per member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pool_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Name of the User Code Namespace applied to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#user_code_namespace DataK8SHazelcastComHazelcastV1Alpha1Manifest#user_code_namespace}
  */
  readonly userCodeNamespace?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    capacity_policy: cdktf.stringToTerraform(struct!.capacityPolicy),
    durability: cdktf.numberToTerraform(struct!.durability),
    name: cdktf.stringToTerraform(struct!.name),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    user_code_namespace: cdktf.stringToTerraform(struct!.userCodeNamespace),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_policy: {
      value: cdktf.stringToHclTerraform(struct!.capacityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    durability: {
      value: cdktf.numberToHclTerraform(struct!.durability),
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
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_code_namespace: {
      value: cdktf.stringToHclTerraform(struct!.userCodeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._capacityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPolicy = this._capacityPolicy;
    }
    if (this._durability !== undefined) {
      hasAnyValues = true;
      internalValueResult.durability = this._durability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._userCodeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeNamespace = this._userCodeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._capacityPolicy = undefined;
      this._durability = undefined;
      this._name = undefined;
      this._poolSize = undefined;
      this._userCodeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._capacityPolicy = value.capacityPolicy;
      this._durability = value.durability;
      this._name = value.name;
      this._poolSize = value.poolSize;
      this._userCodeNamespace = value.userCodeNamespace;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // capacity_policy - computed: false, optional: true, required: false
  private _capacityPolicy?: string; 
  public get capacityPolicy() {
    return this.getStringAttribute('capacity_policy');
  }
  public set capacityPolicy(value: string) {
    this._capacityPolicy = value;
  }
  public resetCapacityPolicy() {
    this._capacityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPolicyInput() {
    return this._capacityPolicy;
  }

  // durability - computed: false, optional: true, required: false
  private _durability?: number; 
  public get durability() {
    return this.getNumberAttribute('durability');
  }
  public set durability(value: number) {
    this._durability = value;
  }
  public resetDurability() {
    this._durability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durabilityInput() {
    return this._durability;
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

  // pool_size - computed: false, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // user_code_namespace - computed: false, optional: true, required: false
  private _userCodeNamespace?: string; 
  public get userCodeNamespace() {
    return this.getStringAttribute('user_code_namespace');
  }
  public set userCodeNamespace(value: string) {
    this._userCodeNamespace = value;
  }
  public resetUserCodeNamespace() {
    this._userCodeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeNamespaceInput() {
    return this._userCodeNamespace;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_fields DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#preference DataK8SHazelcastComHazelcastV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#weight DataK8SHazelcastComHazelcastV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_fields DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#node_selector_terms DataK8SHazelcastComHazelcastV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#label_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespace_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_key DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    namespace_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pod_affinity_term DataK8SHazelcastComHazelcastV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#weight DataK8SHazelcastComHazelcastV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#label_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespace_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_key DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    namespace_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#label_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespace_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_key DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    namespace_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pod_affinity_term DataK8SHazelcastComHazelcastV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#weight DataK8SHazelcastComHazelcastV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#label_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespace_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#namespaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_key DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    namespace_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SHazelcastComHazelcastV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#node_affinity DataK8SHazelcastComHazelcastV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pod_affinity DataK8SHazelcastComHazelcastV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#pod_anti_affinity DataK8SHazelcastComHazelcastV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#effect DataK8SHazelcastComHazelcastV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#toleration_seconds DataK8SHazelcastComHazelcastV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#value DataK8SHazelcastComHazelcastV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#key DataK8SHazelcastComHazelcastV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#operator DataK8SHazelcastComHazelcastV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#values DataK8SHazelcastComHazelcastV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_expressions DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#label_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#match_label_keys DataK8SHazelcastComHazelcastV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#max_skew DataK8SHazelcastComHazelcastV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#min_domains DataK8SHazelcastComHazelcastV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#node_affinity_policy DataK8SHazelcastComHazelcastV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#node_taints_policy DataK8SHazelcastComHazelcastV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_key DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#when_unsatisfiable DataK8SHazelcastComHazelcastV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling {
  /**
  * Affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#affinity DataK8SHazelcastComHazelcastV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity;
  /**
  * NodeSelector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#node_selector DataK8SHazelcastComHazelcastV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Tolerations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#tolerations DataK8SHazelcastComHazelcastV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#topology_spread_constraints DataK8SHazelcastComHazelcastV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityToTerraform(struct!.affinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization {
  /**
  * Classes is the list of class names for which a zero-config serializer will be registered, without implementing an explicit serializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#classes DataK8SHazelcastComHazelcastV1Alpha1Manifest#classes}
  */
  readonly classes?: string[];
  /**
  * Serializers is the list of explicit serializers to be registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#serializers DataK8SHazelcastComHazelcastV1Alpha1Manifest#serializers}
  */
  readonly serializers?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    serializers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serializers),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serializers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serializers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._serializers !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializers = this._serializers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._serializers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes = value.classes;
      this._serializers = value.serializers;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // serializers - computed: false, optional: true, required: false
  private _serializers?: string[]; 
  public get serializers() {
    return this.getListAttribute('serializers');
  }
  public set serializers(value: string[]) {
    this._serializers = value;
  }
  public resetSerializers() {
    this._serializers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializersInput() {
    return this._serializers;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer {
  /**
  * Class name of the GlobalSerializer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#class_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#class_name}
  */
  readonly className: string;
  /**
  * If set to true, will replace the internal Java serialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#override_java_serialization DataK8SHazelcastComHazelcastV1Alpha1Manifest#override_java_serialization}
  */
  readonly overrideJavaSerialization?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    override_java_serialization: cdktf.booleanToTerraform(struct!.overrideJavaSerialization),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_java_serialization: {
      value: cdktf.booleanToHclTerraform(struct!.overrideJavaSerialization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._overrideJavaSerialization !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideJavaSerialization = this._overrideJavaSerialization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._overrideJavaSerialization = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._overrideJavaSerialization = value.overrideJavaSerialization;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // override_java_serialization - computed: false, optional: true, required: false
  private _overrideJavaSerialization?: boolean | cdktf.IResolvable; 
  public get overrideJavaSerialization() {
    return this.getBooleanAttribute('override_java_serialization');
  }
  public set overrideJavaSerialization(value: boolean | cdktf.IResolvable) {
    this._overrideJavaSerialization = value;
  }
  public resetOverrideJavaSerialization() {
    this._overrideJavaSerialization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideJavaSerializationInput() {
    return this._overrideJavaSerialization;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct {
  /**
  * List of class names to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#classes DataK8SHazelcastComHazelcastV1Alpha1Manifest#classes}
  */
  readonly classes?: string[];
  /**
  * List of packages to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#packages DataK8SHazelcastComHazelcastV1Alpha1Manifest#packages}
  */
  readonly packages?: string[];
  /**
  * List of prefixes to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#prefixes DataK8SHazelcastComHazelcastV1Alpha1Manifest#prefixes}
  */
  readonly prefixes?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._packages = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes = value.classes;
      this._packages = value.packages;
      this._prefixes = value.prefixes;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct {
  /**
  * List of class names to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#classes DataK8SHazelcastComHazelcastV1Alpha1Manifest#classes}
  */
  readonly classes?: string[];
  /**
  * List of packages to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#packages DataK8SHazelcastComHazelcastV1Alpha1Manifest#packages}
  */
  readonly packages?: string[];
  /**
  * List of prefixes to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#prefixes DataK8SHazelcastComHazelcastV1Alpha1Manifest#prefixes}
  */
  readonly prefixes?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._packages = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes = value.classes;
      this._packages = value.packages;
      this._prefixes = value.prefixes;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter {
  /**
  * Java deserialization protection Blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#blacklist DataK8SHazelcastComHazelcastV1Alpha1Manifest#blacklist}
  */
  readonly blacklist?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct;
  /**
  * Java deserialization protection Whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#whitelist DataK8SHazelcastComHazelcastV1Alpha1Manifest#whitelist}
  */
  readonly whitelist?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklist: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructToTerraform(struct!.blacklist),
    whitelist: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructToTerraform(struct!.whitelist),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklist: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructToHclTerraform(struct!.blacklist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct",
    },
    whitelist: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructToHclTerraform(struct!.whitelist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist?.internalValue;
    }
    if (this._whitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklist.internalValue = undefined;
      this._whitelist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklist.internalValue = value.blacklist;
      this._whitelist.internalValue = value.whitelist;
    }
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStructOutputReference(this, "blacklist");
  public get blacklist() {
    return this._blacklist;
  }
  public putBlacklist(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterBlacklistStruct) {
    this._blacklist.internalValue = value;
  }
  public resetBlacklist() {
    this._blacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist.internalValue;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStructOutputReference(this, "whitelist");
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterWhitelistStruct) {
    this._whitelist.internalValue = value;
  }
  public resetWhitelist() {
    this._whitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers {
  /**
  * Class name of the implementation of the serializer class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#class_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#class_name}
  */
  readonly className: string;
  /**
  * Name of the class that will be serialized via this implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#type_class DataK8SHazelcastComHazelcastV1Alpha1Manifest#type_class}
  */
  readonly typeClass: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    type_class: cdktf.stringToTerraform(struct!.typeClass),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_class: {
      value: cdktf.stringToHclTerraform(struct!.typeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._typeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeClass = this._typeClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._typeClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._typeClass = value.typeClass;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // type_class - computed: false, optional: false, required: true
  private _typeClass?: string; 
  public get typeClass() {
    return this.getStringAttribute('type_class');
  }
  public set typeClass(value: string) {
    this._typeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeClassInput() {
    return this._typeClass;
  }
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersOutputReference {
    return new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization {
  /**
  * Allow the usage of unsafe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#allow_unsafe DataK8SHazelcastComHazelcastV1Alpha1Manifest#allow_unsafe}
  */
  readonly allowUnsafe?: boolean | cdktf.IResolvable;
  /**
  * Specifies the byte order that the serialization will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#byte_order DataK8SHazelcastComHazelcastV1Alpha1Manifest#byte_order}
  */
  readonly byteOrder?: string;
  /**
  * Configuration attributes the compact serialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#compact_serialization DataK8SHazelcastComHazelcastV1Alpha1Manifest#compact_serialization}
  */
  readonly compactSerialization?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization;
  /**
  * Lists class implementations of Hazelcast's DataSerializableFactory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#data_serializable_factories DataK8SHazelcastComHazelcastV1Alpha1Manifest#data_serializable_factories}
  */
  readonly dataSerializableFactories?: string[];
  /**
  * Enables compression when default Java serialization is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#enable_compression DataK8SHazelcastComHazelcastV1Alpha1Manifest#enable_compression}
  */
  readonly enableCompression?: boolean | cdktf.IResolvable;
  /**
  * Enables shared object when default Java serialization is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#enable_shared_object DataK8SHazelcastComHazelcastV1Alpha1Manifest#enable_shared_object}
  */
  readonly enableSharedObject?: boolean | cdktf.IResolvable;
  /**
  * List of global serializers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#global_serializer DataK8SHazelcastComHazelcastV1Alpha1Manifest#global_serializer}
  */
  readonly globalSerializer?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer;
  /**
  * Blacklist and whitelist for deserialized classes when Java serialization is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#java_serialization_filter DataK8SHazelcastComHazelcastV1Alpha1Manifest#java_serialization_filter}
  */
  readonly javaSerializationFilter?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter;
  /**
  * Allows override of built-in default serializers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#override_default_serializers DataK8SHazelcastComHazelcastV1Alpha1Manifest#override_default_serializers}
  */
  readonly overrideDefaultSerializers?: boolean | cdktf.IResolvable;
  /**
  * Lists class implementations of Hazelcast's PortableFactory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#portable_factories DataK8SHazelcastComHazelcastV1Alpha1Manifest#portable_factories}
  */
  readonly portableFactories?: string[];
  /**
  * List of serializers (classes) that implemented using Hazelcast's StreamSerializer, ByteArraySerializer etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#serializers DataK8SHazelcastComHazelcastV1Alpha1Manifest#serializers}
  */
  readonly serializers?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers[] | cdktf.IResolvable;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unsafe: cdktf.booleanToTerraform(struct!.allowUnsafe),
    byte_order: cdktf.stringToTerraform(struct!.byteOrder),
    compact_serialization: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationToTerraform(struct!.compactSerialization),
    data_serializable_factories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataSerializableFactories),
    enable_compression: cdktf.booleanToTerraform(struct!.enableCompression),
    enable_shared_object: cdktf.booleanToTerraform(struct!.enableSharedObject),
    global_serializer: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerToTerraform(struct!.globalSerializer),
    java_serialization_filter: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterToTerraform(struct!.javaSerializationFilter),
    override_default_serializers: cdktf.booleanToTerraform(struct!.overrideDefaultSerializers),
    portable_factories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portableFactories),
    serializers: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersToTerraform, false)(struct!.serializers),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unsafe: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnsafe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    byte_order: {
      value: cdktf.stringToHclTerraform(struct!.byteOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compact_serialization: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationToHclTerraform(struct!.compactSerialization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization",
    },
    data_serializable_factories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataSerializableFactories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_compression: {
      value: cdktf.booleanToHclTerraform(struct!.enableCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shared_object: {
      value: cdktf.booleanToHclTerraform(struct!.enableSharedObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_serializer: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerToHclTerraform(struct!.globalSerializer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer",
    },
    java_serialization_filter: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterToHclTerraform(struct!.javaSerializationFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter",
    },
    override_default_serializers: {
      value: cdktf.booleanToHclTerraform(struct!.overrideDefaultSerializers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    portable_factories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portableFactories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serializers: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersToHclTerraform, false)(struct!.serializers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnsafe !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnsafe = this._allowUnsafe;
    }
    if (this._byteOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOrder = this._byteOrder;
    }
    if (this._compactSerialization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactSerialization = this._compactSerialization?.internalValue;
    }
    if (this._dataSerializableFactories !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSerializableFactories = this._dataSerializableFactories;
    }
    if (this._enableCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCompression = this._enableCompression;
    }
    if (this._enableSharedObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSharedObject = this._enableSharedObject;
    }
    if (this._globalSerializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSerializer = this._globalSerializer?.internalValue;
    }
    if (this._javaSerializationFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaSerializationFilter = this._javaSerializationFilter?.internalValue;
    }
    if (this._overrideDefaultSerializers !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDefaultSerializers = this._overrideDefaultSerializers;
    }
    if (this._portableFactories !== undefined) {
      hasAnyValues = true;
      internalValueResult.portableFactories = this._portableFactories;
    }
    if (this._serializers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializers = this._serializers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnsafe = undefined;
      this._byteOrder = undefined;
      this._compactSerialization.internalValue = undefined;
      this._dataSerializableFactories = undefined;
      this._enableCompression = undefined;
      this._enableSharedObject = undefined;
      this._globalSerializer.internalValue = undefined;
      this._javaSerializationFilter.internalValue = undefined;
      this._overrideDefaultSerializers = undefined;
      this._portableFactories = undefined;
      this._serializers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUnsafe = value.allowUnsafe;
      this._byteOrder = value.byteOrder;
      this._compactSerialization.internalValue = value.compactSerialization;
      this._dataSerializableFactories = value.dataSerializableFactories;
      this._enableCompression = value.enableCompression;
      this._enableSharedObject = value.enableSharedObject;
      this._globalSerializer.internalValue = value.globalSerializer;
      this._javaSerializationFilter.internalValue = value.javaSerializationFilter;
      this._overrideDefaultSerializers = value.overrideDefaultSerializers;
      this._portableFactories = value.portableFactories;
      this._serializers.internalValue = value.serializers;
    }
  }

  // allow_unsafe - computed: false, optional: true, required: false
  private _allowUnsafe?: boolean | cdktf.IResolvable; 
  public get allowUnsafe() {
    return this.getBooleanAttribute('allow_unsafe');
  }
  public set allowUnsafe(value: boolean | cdktf.IResolvable) {
    this._allowUnsafe = value;
  }
  public resetAllowUnsafe() {
    this._allowUnsafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsafeInput() {
    return this._allowUnsafe;
  }

  // byte_order - computed: false, optional: true, required: false
  private _byteOrder?: string; 
  public get byteOrder() {
    return this.getStringAttribute('byte_order');
  }
  public set byteOrder(value: string) {
    this._byteOrder = value;
  }
  public resetByteOrder() {
    this._byteOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOrderInput() {
    return this._byteOrder;
  }

  // compact_serialization - computed: false, optional: true, required: false
  private _compactSerialization = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerializationOutputReference(this, "compact_serialization");
  public get compactSerialization() {
    return this._compactSerialization;
  }
  public putCompactSerialization(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationCompactSerialization) {
    this._compactSerialization.internalValue = value;
  }
  public resetCompactSerialization() {
    this._compactSerialization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactSerializationInput() {
    return this._compactSerialization.internalValue;
  }

  // data_serializable_factories - computed: false, optional: true, required: false
  private _dataSerializableFactories?: string[]; 
  public get dataSerializableFactories() {
    return this.getListAttribute('data_serializable_factories');
  }
  public set dataSerializableFactories(value: string[]) {
    this._dataSerializableFactories = value;
  }
  public resetDataSerializableFactories() {
    this._dataSerializableFactories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSerializableFactoriesInput() {
    return this._dataSerializableFactories;
  }

  // enable_compression - computed: false, optional: true, required: false
  private _enableCompression?: boolean | cdktf.IResolvable; 
  public get enableCompression() {
    return this.getBooleanAttribute('enable_compression');
  }
  public set enableCompression(value: boolean | cdktf.IResolvable) {
    this._enableCompression = value;
  }
  public resetEnableCompression() {
    this._enableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCompressionInput() {
    return this._enableCompression;
  }

  // enable_shared_object - computed: false, optional: true, required: false
  private _enableSharedObject?: boolean | cdktf.IResolvable; 
  public get enableSharedObject() {
    return this.getBooleanAttribute('enable_shared_object');
  }
  public set enableSharedObject(value: boolean | cdktf.IResolvable) {
    this._enableSharedObject = value;
  }
  public resetEnableSharedObject() {
    this._enableSharedObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSharedObjectInput() {
    return this._enableSharedObject;
  }

  // global_serializer - computed: false, optional: true, required: false
  private _globalSerializer = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializerOutputReference(this, "global_serializer");
  public get globalSerializer() {
    return this._globalSerializer;
  }
  public putGlobalSerializer(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationGlobalSerializer) {
    this._globalSerializer.internalValue = value;
  }
  public resetGlobalSerializer() {
    this._globalSerializer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSerializerInput() {
    return this._globalSerializer.internalValue;
  }

  // java_serialization_filter - computed: false, optional: true, required: false
  private _javaSerializationFilter = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilterOutputReference(this, "java_serialization_filter");
  public get javaSerializationFilter() {
    return this._javaSerializationFilter;
  }
  public putJavaSerializationFilter(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationJavaSerializationFilter) {
    this._javaSerializationFilter.internalValue = value;
  }
  public resetJavaSerializationFilter() {
    this._javaSerializationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaSerializationFilterInput() {
    return this._javaSerializationFilter.internalValue;
  }

  // override_default_serializers - computed: false, optional: true, required: false
  private _overrideDefaultSerializers?: boolean | cdktf.IResolvable; 
  public get overrideDefaultSerializers() {
    return this.getBooleanAttribute('override_default_serializers');
  }
  public set overrideDefaultSerializers(value: boolean | cdktf.IResolvable) {
    this._overrideDefaultSerializers = value;
  }
  public resetOverrideDefaultSerializers() {
    this._overrideDefaultSerializers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDefaultSerializersInput() {
    return this._overrideDefaultSerializers;
  }

  // portable_factories - computed: false, optional: true, required: false
  private _portableFactories?: string[]; 
  public get portableFactories() {
    return this.getListAttribute('portable_factories');
  }
  public set portableFactories(value: string[]) {
    this._portableFactories = value;
  }
  public resetPortableFactories() {
    this._portableFactories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portableFactoriesInput() {
    return this._portableFactories;
  }

  // serializers - computed: false, optional: true, required: false
  private _serializers = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializersList(this, "serializers", false);
  public get serializers() {
    return this._serializers;
  }
  public putSerializers(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationSerializers[] | cdktf.IResolvable) {
    this._serializers.internalValue = value;
  }
  public resetSerializers() {
    this._serializers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializersInput() {
    return this._serializers.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql {
  /**
  * CatalogPersistenceEnabled sets whether SQL Catalog persistence is enabled for the node. With SQL Catalog persistence enabled you can restart the whole cluster without losing schema definition objects (such as MAPPINGs, TYPEs, VIEWs and DATA CONNECTIONs). The feature is implemented on top of the Hot Restart feature of Hazelcast which persists the data to disk. If enabled, you have to also configure Hot Restart. Feature is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#catalog_persistence_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#catalog_persistence_enabled}
  */
  readonly catalogPersistenceEnabled?: boolean | cdktf.IResolvable;
  /**
  * StatementTimeout defines the timeout in milliseconds that is applied to queries without an explicit timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#statement_timeout DataK8SHazelcastComHazelcastV1Alpha1Manifest#statement_timeout}
  */
  readonly statementTimeout?: number;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_persistence_enabled: cdktf.booleanToTerraform(struct!.catalogPersistenceEnabled),
    statement_timeout: cdktf.numberToTerraform(struct!.statementTimeout),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_persistence_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.catalogPersistenceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    statement_timeout: {
      value: cdktf.numberToHclTerraform(struct!.statementTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogPersistenceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogPersistenceEnabled = this._catalogPersistenceEnabled;
    }
    if (this._statementTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementTimeout = this._statementTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogPersistenceEnabled = undefined;
      this._statementTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogPersistenceEnabled = value.catalogPersistenceEnabled;
      this._statementTimeout = value.statementTimeout;
    }
  }

  // catalog_persistence_enabled - computed: false, optional: true, required: false
  private _catalogPersistenceEnabled?: boolean | cdktf.IResolvable; 
  public get catalogPersistenceEnabled() {
    return this.getBooleanAttribute('catalog_persistence_enabled');
  }
  public set catalogPersistenceEnabled(value: boolean | cdktf.IResolvable) {
    this._catalogPersistenceEnabled = value;
  }
  public resetCatalogPersistenceEnabled() {
    this._catalogPersistenceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogPersistenceEnabledInput() {
    return this._catalogPersistenceEnabled;
  }

  // statement_timeout - computed: false, optional: true, required: false
  private _statementTimeout?: number; 
  public get statementTimeout() {
    return this.getNumberAttribute('statement_timeout');
  }
  public set statementTimeout(value: number) {
    this._statementTimeout = value;
  }
  public resetStatementTimeout() {
    this._statementTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutInput() {
    return this._statementTimeout;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls {
  /**
  * Mutual authentication configuration. It’s None by default which means the client side of connection is not authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#mutual_authentication DataK8SHazelcastComHazelcastV1Alpha1Manifest#mutual_authentication}
  */
  readonly mutualAuthentication?: string;
  /**
  * Name of the secret with TLS certificate and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mutual_authentication: cdktf.stringToTerraform(struct!.mutualAuthentication),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mutual_authentication: {
      value: cdktf.stringToHclTerraform(struct!.mutualAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mutualAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualAuthentication = this._mutualAuthentication;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mutualAuthentication = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mutualAuthentication = value.mutualAuthentication;
      this._secretName = value.secretName;
    }
  }

  // mutual_authentication - computed: false, optional: true, required: false
  private _mutualAuthentication?: string; 
  public get mutualAuthentication() {
    return this.getStringAttribute('mutual_authentication');
  }
  public set mutualAuthentication(value: string) {
    this._mutualAuthentication = value;
  }
  public resetMutualAuthentication() {
    this._mutualAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualAuthenticationInput() {
    return this._mutualAuthentication;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig {
  /**
  * URL of the bucket to download HotBackup folders. AWS S3, GCP Bucket and Azure Blob storage buckets are supported. Example bucket URIs: - AWS S3 -> s3://bucket-name/path/to/folder - GCP Bucket -> gs://bucket-name/path/to/folder - Azure Blob -> azblob://bucket-name/path/to/folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_uri DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_uri}
  */
  readonly bucketUri: string;
  /**
  * secret is a deprecated alias for secretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Name of the secret with credentials for cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#secret_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_uri: cdktf.stringToTerraform(struct!.bucketUri),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_uri: {
      value: cdktf.stringToHclTerraform(struct!.bucketUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUri = this._bucketUri;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketUri = undefined;
      this._secret = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketUri = value.bucketUri;
      this._secret = value.secret;
      this._secretName = value.secretName;
    }
  }

  // bucket_uri - computed: false, optional: false, required: true
  private _bucketUri?: string; 
  public get bucketUri() {
    return this.getStringAttribute('bucket_uri');
  }
  public set bucketUri(value: string) {
    this._bucketUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUriInput() {
    return this._bucketUri;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment {
  /**
  * Bucket config from where the JAR files will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#bucket_config DataK8SHazelcastComHazelcastV1Alpha1Manifest#bucket_config}
  */
  readonly bucketConfig?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig;
  /**
  * When true, allows user code deployment from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#client_enabled DataK8SHazelcastComHazelcastV1Alpha1Manifest#client_enabled}
  */
  readonly clientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Names of the list of ConfigMaps. Files in each ConfigMap will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#config_maps DataK8SHazelcastComHazelcastV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * List of URLs from where the files will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#remote_urls DataK8SHazelcastComHazelcastV1Alpha1Manifest#remote_urls}
  */
  readonly remoteUrls?: string[];
  /**
  * A string for triggering a rolling restart for re-downloading the user code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#trigger_sequence DataK8SHazelcastComHazelcastV1Alpha1Manifest#trigger_sequence}
  */
  readonly triggerSequence?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_config: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigToTerraform(struct!.bucketConfig),
    client_enabled: cdktf.booleanToTerraform(struct!.clientEnabled),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    remote_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteUrls),
    trigger_sequence: cdktf.stringToTerraform(struct!.triggerSequence),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_config: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigToHclTerraform(struct!.bucketConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig",
    },
    client_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clientEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trigger_sequence: {
      value: cdktf.stringToHclTerraform(struct!.triggerSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfig = this._bucketConfig?.internalValue;
    }
    if (this._clientEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEnabled = this._clientEnabled;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._remoteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUrls = this._remoteUrls;
    }
    if (this._triggerSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerSequence = this._triggerSequence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = undefined;
      this._clientEnabled = undefined;
      this._configMaps = undefined;
      this._remoteUrls = undefined;
      this._triggerSequence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketConfig.internalValue = value.bucketConfig;
      this._clientEnabled = value.clientEnabled;
      this._configMaps = value.configMaps;
      this._remoteUrls = value.remoteUrls;
      this._triggerSequence = value.triggerSequence;
    }
  }

  // bucket_config - computed: false, optional: true, required: false
  private _bucketConfig = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfigOutputReference(this, "bucket_config");
  public get bucketConfig() {
    return this._bucketConfig;
  }
  public putBucketConfig(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentBucketConfig) {
    this._bucketConfig.internalValue = value;
  }
  public resetBucketConfig() {
    this._bucketConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigInput() {
    return this._bucketConfig.internalValue;
  }

  // client_enabled - computed: false, optional: true, required: false
  private _clientEnabled?: boolean | cdktf.IResolvable; 
  public get clientEnabled() {
    return this.getBooleanAttribute('client_enabled');
  }
  public set clientEnabled(value: boolean | cdktf.IResolvable) {
    this._clientEnabled = value;
  }
  public resetClientEnabled() {
    this._clientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEnabledInput() {
    return this._clientEnabled;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // remote_urls - computed: false, optional: true, required: false
  private _remoteUrls?: string[]; 
  public get remoteUrls() {
    return this.getListAttribute('remote_urls');
  }
  public set remoteUrls(value: string[]) {
    this._remoteUrls = value;
  }
  public resetRemoteUrls() {
    this._remoteUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUrlsInput() {
    return this._remoteUrls;
  }

  // trigger_sequence - computed: false, optional: true, required: false
  private _triggerSequence?: string; 
  public get triggerSequence() {
    return this.getStringAttribute('trigger_sequence');
  }
  public set triggerSequence(value: string) {
    this._triggerSequence = value;
  }
  public resetTriggerSequence() {
    this._triggerSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSequenceInput() {
    return this._triggerSequence;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct {
  /**
  * List of class names to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#classes DataK8SHazelcastComHazelcastV1Alpha1Manifest#classes}
  */
  readonly classes?: string[];
  /**
  * List of packages to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#packages DataK8SHazelcastComHazelcastV1Alpha1Manifest#packages}
  */
  readonly packages?: string[];
  /**
  * List of prefixes to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#prefixes DataK8SHazelcastComHazelcastV1Alpha1Manifest#prefixes}
  */
  readonly prefixes?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._packages = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes = value.classes;
      this._packages = value.packages;
      this._prefixes = value.prefixes;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct {
  /**
  * List of class names to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#classes DataK8SHazelcastComHazelcastV1Alpha1Manifest#classes}
  */
  readonly classes?: string[];
  /**
  * List of packages to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#packages DataK8SHazelcastComHazelcastV1Alpha1Manifest#packages}
  */
  readonly packages?: string[];
  /**
  * List of prefixes to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#prefixes DataK8SHazelcastComHazelcastV1Alpha1Manifest#prefixes}
  */
  readonly prefixes?: string[];
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._packages = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classes = value.classes;
      this._packages = value.packages;
      this._prefixes = value.prefixes;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter {
  /**
  * Java deserialization protection Blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#blacklist DataK8SHazelcastComHazelcastV1Alpha1Manifest#blacklist}
  */
  readonly blacklist?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct;
  /**
  * Java deserialization protection Whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#whitelist DataK8SHazelcastComHazelcastV1Alpha1Manifest#whitelist}
  */
  readonly whitelist?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklist: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructToTerraform(struct!.blacklist),
    whitelist: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructToTerraform(struct!.whitelist),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklist: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructToHclTerraform(struct!.blacklist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct",
    },
    whitelist: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructToHclTerraform(struct!.whitelist),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist?.internalValue;
    }
    if (this._whitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklist.internalValue = undefined;
      this._whitelist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklist.internalValue = value.blacklist;
      this._whitelist.internalValue = value.whitelist;
    }
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStructOutputReference(this, "blacklist");
  public get blacklist() {
    return this._blacklist;
  }
  public putBlacklist(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterBlacklistStruct) {
    this._blacklist.internalValue = value;
  }
  public resetBlacklist() {
    this._blacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist.internalValue;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStructOutputReference(this, "whitelist");
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterWhitelistStruct) {
    this._whitelist.internalValue = value;
  }
  public resetWhitelist() {
    this._whitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces {
  /**
  * Blacklist and whitelist for classes when User Code Namespaces is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#class_filter DataK8SHazelcastComHazelcastV1Alpha1Manifest#class_filter}
  */
  readonly classFilter?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_filter: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterToTerraform(struct!.classFilter),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_filter: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterToHclTerraform(struct!.classFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classFilter = this._classFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classFilter.internalValue = value.classFilter;
    }
  }

  // class_filter - computed: false, optional: true, required: false
  private _classFilter = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilterOutputReference(this, "class_filter");
  public get classFilter() {
    return this._classFilter;
  }
  public putClassFilter(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesClassFilter) {
    this._classFilter.internalValue = value;
  }
  public resetClassFilter() {
    this._classFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classFilterInput() {
    return this._classFilter.internalValue;
  }
}
export interface DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec {
  /**
  * Hazelcast Advanced Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#advanced_network DataK8SHazelcastComHazelcastV1Alpha1Manifest#advanced_network}
  */
  readonly advancedNetwork?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork;
  /**
  * B&R Agent configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#agent DataK8SHazelcastComHazelcastV1Alpha1Manifest#agent}
  */
  readonly agent?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent;
  /**
  * Hazelcast Kubernetes resource annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#annotations DataK8SHazelcastComHazelcastV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Name of the Hazelcast cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#cluster_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Number of Hazelcast members in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#cluster_size DataK8SHazelcastComHazelcastV1Alpha1Manifest#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * CPSubsystem is the configuration of the Hazelcast CP Subsystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#cp_subsystem DataK8SHazelcastComHazelcastV1Alpha1Manifest#cp_subsystem}
  */
  readonly cpSubsystem?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem;
  /**
  * Name of the ConfigMap with the Hazelcast custom configuration. This configuration from the ConfigMap might be overridden by the Hazelcast CR configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#custom_config_cm_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#custom_config_cm_name}
  */
  readonly customConfigCmName?: string;
  /**
  * Durable Executor Service configurations, see https://docs.hazelcast.com/hazelcast/latest/computing/durable-executor-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#durable_executor_services DataK8SHazelcastComHazelcastV1Alpha1Manifest#durable_executor_services}
  */
  readonly durableExecutorServices?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices[] | cdktf.IResolvable;
  /**
  * Env configuration of environment variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#env DataK8SHazelcastComHazelcastV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Java Executor Service configurations, see https://docs.hazelcast.com/hazelcast/latest/computing/executor-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#executor_services DataK8SHazelcastComHazelcastV1Alpha1Manifest#executor_services}
  */
  readonly executorServices?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices[] | cdktf.IResolvable;
  /**
  * Configuration to expose Hazelcast cluster to external clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#expose_externally DataK8SHazelcastComHazelcastV1Alpha1Manifest#expose_externally}
  */
  readonly exposeExternally?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally;
  /**
  * Configuration to create clusters resilient to node and zone failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#high_availability_mode DataK8SHazelcastComHazelcastV1Alpha1Manifest#high_availability_mode}
  */
  readonly highAvailabilityMode?: string;
  /**
  * Pull policy for the Hazelcast Platform image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#image_pull_policy DataK8SHazelcastComHazelcastV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image pull secrets for the Hazelcast Platform image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#image_pull_secrets DataK8SHazelcastComHazelcastV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Jet Engine configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#jet DataK8SHazelcastComHazelcastV1Alpha1Manifest#jet}
  */
  readonly jet?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet;
  /**
  * Hazelcast JVM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#jvm DataK8SHazelcastComHazelcastV1Alpha1Manifest#jvm}
  */
  readonly jvm?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm;
  /**
  * Hazelcast Kubernetes resource labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#labels DataK8SHazelcastComHazelcastV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * licenseKeySecret is a deprecated alias for licenseKeySecretName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#license_key_secret DataK8SHazelcastComHazelcastV1Alpha1Manifest#license_key_secret}
  */
  readonly licenseKeySecret?: string;
  /**
  * Name of the secret with Hazelcast Enterprise License Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#license_key_secret_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#license_key_secret_name}
  */
  readonly licenseKeySecretName?: string;
  /**
  * Hazelcast LocalDevice configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#local_devices DataK8SHazelcastComHazelcastV1Alpha1Manifest#local_devices}
  */
  readonly localDevices?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices[] | cdktf.IResolvable;
  /**
  * Logging level for Hazelcast members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#logging_level DataK8SHazelcastComHazelcastV1Alpha1Manifest#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Hazelcast Management Center Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#management_center DataK8SHazelcastComHazelcastV1Alpha1Manifest#management_center}
  */
  readonly managementCenter?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter;
  /**
  * Hazelcast Native Memory (HD Memory) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#native_memory DataK8SHazelcastComHazelcastV1Alpha1Manifest#native_memory}
  */
  readonly nativeMemory?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory;
  /**
  * Persistence configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#persistence DataK8SHazelcastComHazelcastV1Alpha1Manifest#persistence}
  */
  readonly persistence?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence;
  /**
  * Hazelcast system properties, see https://docs.hazelcast.com/hazelcast/latest/system-properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#properties DataK8SHazelcastComHazelcastV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Repository to pull the Hazelcast Platform image from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#repository DataK8SHazelcastComHazelcastV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Compute Resources required by the Hazelcast container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#resources DataK8SHazelcastComHazelcastV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources;
  /**
  * Scheduled Executor Service configurations, see https://docs.hazelcast.com/hazelcast/latest/computing/scheduled-executor-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#scheduled_executor_services DataK8SHazelcastComHazelcastV1Alpha1Manifest#scheduled_executor_services}
  */
  readonly scheduledExecutorServices?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices[] | cdktf.IResolvable;
  /**
  * Scheduling details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#scheduling DataK8SHazelcastComHazelcastV1Alpha1Manifest#scheduling}
  */
  readonly scheduling?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling;
  /**
  * Hazelcast serialization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#serialization DataK8SHazelcastComHazelcastV1Alpha1Manifest#serialization}
  */
  readonly serialization?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run Hazelcast cluster. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#service_account_name DataK8SHazelcastComHazelcastV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Hazelcast SQL configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#sql DataK8SHazelcastComHazelcastV1Alpha1Manifest#sql}
  */
  readonly sql?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql;
  /**
  * Hazelcast TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#tls DataK8SHazelcastComHazelcastV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls;
  /**
  * User Codes to Download into CLASSPATH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#user_code_deployment DataK8SHazelcastComHazelcastV1Alpha1Manifest#user_code_deployment}
  */
  readonly userCodeDeployment?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment;
  /**
  * UserCodeNamespaces provide a container for Java classpath resources, such as user code and accompanying artifacts like property files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#user_code_namespaces DataK8SHazelcastComHazelcastV1Alpha1Manifest#user_code_namespaces}
  */
  readonly userCodeNamespaces?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces;
  /**
  * Version of Hazelcast Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#version DataK8SHazelcastComHazelcastV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_network: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkToTerraform(struct!.advancedNetwork),
    agent: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentToTerraform(struct!.agent),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_size: cdktf.numberToTerraform(struct!.clusterSize),
    cp_subsystem: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemToTerraform(struct!.cpSubsystem),
    custom_config_cm_name: cdktf.stringToTerraform(struct!.customConfigCmName),
    durable_executor_services: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesToTerraform, false)(struct!.durableExecutorServices),
    env: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    executor_services: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesToTerraform, false)(struct!.executorServices),
    expose_externally: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyToTerraform(struct!.exposeExternally),
    high_availability_mode: cdktf.stringToTerraform(struct!.highAvailabilityMode),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    jet: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetToTerraform(struct!.jet),
    jvm: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmToTerraform(struct!.jvm),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    license_key_secret: cdktf.stringToTerraform(struct!.licenseKeySecret),
    license_key_secret_name: cdktf.stringToTerraform(struct!.licenseKeySecretName),
    local_devices: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesToTerraform, false)(struct!.localDevices),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    management_center: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterToTerraform(struct!.managementCenter),
    native_memory: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryToTerraform(struct!.nativeMemory),
    persistence: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceToTerraform(struct!.persistence),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    repository: cdktf.stringToTerraform(struct!.repository),
    resources: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    scheduled_executor_services: cdktf.listMapper(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesToTerraform, false)(struct!.scheduledExecutorServices),
    scheduling: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingToTerraform(struct!.scheduling),
    serialization: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationToTerraform(struct!.serialization),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    sql: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlToTerraform(struct!.sql),
    tls: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
    user_code_deployment: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentToTerraform(struct!.userCodeDeployment),
    user_code_namespaces: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesToTerraform(struct!.userCodeNamespaces),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_network: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkToHclTerraform(struct!.advancedNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork",
    },
    agent: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_size: {
      value: cdktf.numberToHclTerraform(struct!.clusterSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cp_subsystem: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemToHclTerraform(struct!.cpSubsystem),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem",
    },
    custom_config_cm_name: {
      value: cdktf.stringToHclTerraform(struct!.customConfigCmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    durable_executor_services: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesToHclTerraform, false)(struct!.durableExecutorServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvList",
    },
    executor_services: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesToHclTerraform, false)(struct!.executorServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesList",
    },
    expose_externally: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyToHclTerraform(struct!.exposeExternally),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally",
    },
    high_availability_mode: {
      value: cdktf.stringToHclTerraform(struct!.highAvailabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsList",
    },
    jet: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetToHclTerraform(struct!.jet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet",
    },
    jvm: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmToHclTerraform(struct!.jvm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    license_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.licenseKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.licenseKeySecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_devices: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesToHclTerraform, false)(struct!.localDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesList",
    },
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_center: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterToHclTerraform(struct!.managementCenter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter",
    },
    native_memory: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryToHclTerraform(struct!.nativeMemory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory",
    },
    persistence: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceToHclTerraform(struct!.persistence),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources",
    },
    scheduled_executor_services: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesToHclTerraform, false)(struct!.scheduledExecutorServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesList",
    },
    scheduling: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling",
    },
    serialization: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationToHclTerraform(struct!.serialization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlToHclTerraform(struct!.sql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql",
    },
    tls: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls",
    },
    user_code_deployment: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentToHclTerraform(struct!.userCodeDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment",
    },
    user_code_namespaces: {
      value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesToHclTerraform(struct!.userCodeNamespaces),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedNetwork = this._advancedNetwork?.internalValue;
    }
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSize = this._clusterSize;
    }
    if (this._cpSubsystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpSubsystem = this._cpSubsystem?.internalValue;
    }
    if (this._customConfigCmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigCmName = this._customConfigCmName;
    }
    if (this._durableExecutorServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durableExecutorServices = this._durableExecutorServices?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._executorServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorServices = this._executorServices?.internalValue;
    }
    if (this._exposeExternally?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeExternally = this._exposeExternally?.internalValue;
    }
    if (this._highAvailabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailabilityMode = this._highAvailabilityMode;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._jet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jet = this._jet?.internalValue;
    }
    if (this._jvm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvm = this._jvm?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._licenseKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKeySecret = this._licenseKeySecret;
    }
    if (this._licenseKeySecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKeySecretName = this._licenseKeySecretName;
    }
    if (this._localDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDevices = this._localDevices?.internalValue;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._managementCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCenter = this._managementCenter?.internalValue;
    }
    if (this._nativeMemory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeMemory = this._nativeMemory?.internalValue;
    }
    if (this._persistence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._scheduledExecutorServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledExecutorServices = this._scheduledExecutorServices?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._serialization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialization = this._serialization?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._sql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._userCodeDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeDeployment = this._userCodeDeployment?.internalValue;
    }
    if (this._userCodeNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeNamespaces = this._userCodeNamespaces?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedNetwork.internalValue = undefined;
      this._agent.internalValue = undefined;
      this._annotations = undefined;
      this._clusterName = undefined;
      this._clusterSize = undefined;
      this._cpSubsystem.internalValue = undefined;
      this._customConfigCmName = undefined;
      this._durableExecutorServices.internalValue = undefined;
      this._env.internalValue = undefined;
      this._executorServices.internalValue = undefined;
      this._exposeExternally.internalValue = undefined;
      this._highAvailabilityMode = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._jet.internalValue = undefined;
      this._jvm.internalValue = undefined;
      this._labels = undefined;
      this._licenseKeySecret = undefined;
      this._licenseKeySecretName = undefined;
      this._localDevices.internalValue = undefined;
      this._loggingLevel = undefined;
      this._managementCenter.internalValue = undefined;
      this._nativeMemory.internalValue = undefined;
      this._persistence.internalValue = undefined;
      this._properties = undefined;
      this._repository = undefined;
      this._resources.internalValue = undefined;
      this._scheduledExecutorServices.internalValue = undefined;
      this._scheduling.internalValue = undefined;
      this._serialization.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._sql.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._userCodeDeployment.internalValue = undefined;
      this._userCodeNamespaces.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedNetwork.internalValue = value.advancedNetwork;
      this._agent.internalValue = value.agent;
      this._annotations = value.annotations;
      this._clusterName = value.clusterName;
      this._clusterSize = value.clusterSize;
      this._cpSubsystem.internalValue = value.cpSubsystem;
      this._customConfigCmName = value.customConfigCmName;
      this._durableExecutorServices.internalValue = value.durableExecutorServices;
      this._env.internalValue = value.env;
      this._executorServices.internalValue = value.executorServices;
      this._exposeExternally.internalValue = value.exposeExternally;
      this._highAvailabilityMode = value.highAvailabilityMode;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._jet.internalValue = value.jet;
      this._jvm.internalValue = value.jvm;
      this._labels = value.labels;
      this._licenseKeySecret = value.licenseKeySecret;
      this._licenseKeySecretName = value.licenseKeySecretName;
      this._localDevices.internalValue = value.localDevices;
      this._loggingLevel = value.loggingLevel;
      this._managementCenter.internalValue = value.managementCenter;
      this._nativeMemory.internalValue = value.nativeMemory;
      this._persistence.internalValue = value.persistence;
      this._properties = value.properties;
      this._repository = value.repository;
      this._resources.internalValue = value.resources;
      this._scheduledExecutorServices.internalValue = value.scheduledExecutorServices;
      this._scheduling.internalValue = value.scheduling;
      this._serialization.internalValue = value.serialization;
      this._serviceAccountName = value.serviceAccountName;
      this._sql.internalValue = value.sql;
      this._tls.internalValue = value.tls;
      this._userCodeDeployment.internalValue = value.userCodeDeployment;
      this._userCodeNamespaces.internalValue = value.userCodeNamespaces;
      this._version = value.version;
    }
  }

  // advanced_network - computed: false, optional: true, required: false
  private _advancedNetwork = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetworkOutputReference(this, "advanced_network");
  public get advancedNetwork() {
    return this._advancedNetwork;
  }
  public putAdvancedNetwork(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAdvancedNetwork) {
    this._advancedNetwork.internalValue = value;
  }
  public resetAdvancedNetwork() {
    this._advancedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedNetworkInput() {
    return this._advancedNetwork.internalValue;
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
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

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_size - computed: false, optional: true, required: false
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // cp_subsystem - computed: false, optional: true, required: false
  private _cpSubsystem = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystemOutputReference(this, "cp_subsystem");
  public get cpSubsystem() {
    return this._cpSubsystem;
  }
  public putCpSubsystem(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecCpSubsystem) {
    this._cpSubsystem.internalValue = value;
  }
  public resetCpSubsystem() {
    this._cpSubsystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpSubsystemInput() {
    return this._cpSubsystem.internalValue;
  }

  // custom_config_cm_name - computed: false, optional: true, required: false
  private _customConfigCmName?: string; 
  public get customConfigCmName() {
    return this.getStringAttribute('custom_config_cm_name');
  }
  public set customConfigCmName(value: string) {
    this._customConfigCmName = value;
  }
  public resetCustomConfigCmName() {
    this._customConfigCmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigCmNameInput() {
    return this._customConfigCmName;
  }

  // durable_executor_services - computed: false, optional: true, required: false
  private _durableExecutorServices = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServicesList(this, "durable_executor_services", false);
  public get durableExecutorServices() {
    return this._durableExecutorServices;
  }
  public putDurableExecutorServices(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecDurableExecutorServices[] | cdktf.IResolvable) {
    this._durableExecutorServices.internalValue = value;
  }
  public resetDurableExecutorServices() {
    this._durableExecutorServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableExecutorServicesInput() {
    return this._durableExecutorServices.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // executor_services - computed: false, optional: true, required: false
  private _executorServices = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServicesList(this, "executor_services", false);
  public get executorServices() {
    return this._executorServices;
  }
  public putExecutorServices(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExecutorServices[] | cdktf.IResolvable) {
    this._executorServices.internalValue = value;
  }
  public resetExecutorServices() {
    this._executorServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorServicesInput() {
    return this._executorServices.internalValue;
  }

  // expose_externally - computed: false, optional: true, required: false
  private _exposeExternally = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternallyOutputReference(this, "expose_externally");
  public get exposeExternally() {
    return this._exposeExternally;
  }
  public putExposeExternally(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecExposeExternally) {
    this._exposeExternally.internalValue = value;
  }
  public resetExposeExternally() {
    this._exposeExternally.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeExternallyInput() {
    return this._exposeExternally.internalValue;
  }

  // high_availability_mode - computed: false, optional: true, required: false
  private _highAvailabilityMode?: string; 
  public get highAvailabilityMode() {
    return this.getStringAttribute('high_availability_mode');
  }
  public set highAvailabilityMode(value: string) {
    this._highAvailabilityMode = value;
  }
  public resetHighAvailabilityMode() {
    this._highAvailabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityModeInput() {
    return this._highAvailabilityMode;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // jet - computed: false, optional: true, required: false
  private _jet = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJetOutputReference(this, "jet");
  public get jet() {
    return this._jet;
  }
  public putJet(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJet) {
    this._jet.internalValue = value;
  }
  public resetJet() {
    this._jet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jetInput() {
    return this._jet.internalValue;
  }

  // jvm - computed: false, optional: true, required: false
  private _jvm = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvmOutputReference(this, "jvm");
  public get jvm() {
    return this._jvm;
  }
  public putJvm(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecJvm) {
    this._jvm.internalValue = value;
  }
  public resetJvm() {
    this._jvm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmInput() {
    return this._jvm.internalValue;
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

  // license_key_secret - computed: false, optional: true, required: false
  private _licenseKeySecret?: string; 
  public get licenseKeySecret() {
    return this.getStringAttribute('license_key_secret');
  }
  public set licenseKeySecret(value: string) {
    this._licenseKeySecret = value;
  }
  public resetLicenseKeySecret() {
    this._licenseKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeySecretInput() {
    return this._licenseKeySecret;
  }

  // license_key_secret_name - computed: false, optional: true, required: false
  private _licenseKeySecretName?: string; 
  public get licenseKeySecretName() {
    return this.getStringAttribute('license_key_secret_name');
  }
  public set licenseKeySecretName(value: string) {
    this._licenseKeySecretName = value;
  }
  public resetLicenseKeySecretName() {
    this._licenseKeySecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeySecretNameInput() {
    return this._licenseKeySecretName;
  }

  // local_devices - computed: false, optional: true, required: false
  private _localDevices = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevicesList(this, "local_devices", false);
  public get localDevices() {
    return this._localDevices;
  }
  public putLocalDevices(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecLocalDevices[] | cdktf.IResolvable) {
    this._localDevices.internalValue = value;
  }
  public resetLocalDevices() {
    this._localDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDevicesInput() {
    return this._localDevices.internalValue;
  }

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // management_center - computed: false, optional: true, required: false
  private _managementCenter = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenterOutputReference(this, "management_center");
  public get managementCenter() {
    return this._managementCenter;
  }
  public putManagementCenter(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecManagementCenter) {
    this._managementCenter.internalValue = value;
  }
  public resetManagementCenter() {
    this._managementCenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementCenterInput() {
    return this._managementCenter.internalValue;
  }

  // native_memory - computed: false, optional: true, required: false
  private _nativeMemory = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemoryOutputReference(this, "native_memory");
  public get nativeMemory() {
    return this._nativeMemory;
  }
  public putNativeMemory(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecNativeMemory) {
    this._nativeMemory.internalValue = value;
  }
  public resetNativeMemory() {
    this._nativeMemory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeMemoryInput() {
    return this._nativeMemory.internalValue;
  }

  // persistence - computed: false, optional: true, required: false
  private _persistence = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistenceOutputReference(this, "persistence");
  public get persistence() {
    return this._persistence;
  }
  public putPersistence(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecPersistence) {
    this._persistence.internalValue = value;
  }
  public resetPersistence() {
    this._persistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduled_executor_services - computed: false, optional: true, required: false
  private _scheduledExecutorServices = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServicesList(this, "scheduled_executor_services", false);
  public get scheduledExecutorServices() {
    return this._scheduledExecutorServices;
  }
  public putScheduledExecutorServices(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduledExecutorServices[] | cdktf.IResolvable) {
    this._scheduledExecutorServices.internalValue = value;
  }
  public resetScheduledExecutorServices() {
    this._scheduledExecutorServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledExecutorServicesInput() {
    return this._scheduledExecutorServices.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // serialization - computed: false, optional: true, required: false
  private _serialization = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerializationOutputReference(this, "serialization");
  public get serialization() {
    return this._serialization;
  }
  public putSerialization(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSerialization) {
    this._serialization.internalValue = value;
  }
  public resetSerialization() {
    this._serialization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // sql - computed: false, optional: true, required: false
  private _sql = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSqlOutputReference(this, "sql");
  public get sql() {
    return this._sql;
  }
  public putSql(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecSql) {
    this._sql.internalValue = value;
  }
  public resetSql() {
    this._sql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // user_code_deployment - computed: false, optional: true, required: false
  private _userCodeDeployment = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeploymentOutputReference(this, "user_code_deployment");
  public get userCodeDeployment() {
    return this._userCodeDeployment;
  }
  public putUserCodeDeployment(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeDeployment) {
    this._userCodeDeployment.internalValue = value;
  }
  public resetUserCodeDeployment() {
    this._userCodeDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeDeploymentInput() {
    return this._userCodeDeployment.internalValue;
  }

  // user_code_namespaces - computed: false, optional: true, required: false
  private _userCodeNamespaces = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespacesOutputReference(this, "user_code_namespaces");
  public get userCodeNamespaces() {
    return this._userCodeNamespaces;
  }
  public putUserCodeNamespaces(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecUserCodeNamespaces) {
    this._userCodeNamespaces.internalValue = value;
  }
  public resetUserCodeNamespaces() {
    this._userCodeNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeNamespacesInput() {
    return this._userCodeNamespaces.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest k8s_hazelcast_com_hazelcast_v1alpha1_manifest}
*/
export class DataK8SHazelcastComHazelcastV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hazelcast_com_hazelcast_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHazelcastComHazelcastV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHazelcastComHazelcastV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHazelcastComHazelcastV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHazelcastComHazelcastV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hazelcast_com_hazelcast_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/hazelcast_com_hazelcast_v1alpha1_manifest k8s_hazelcast_com_hazelcast_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHazelcastComHazelcastV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHazelcastComHazelcastV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hazelcast_com_hazelcast_v1alpha1_manifest',
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
  private _metadata = new DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHazelcastComHazelcastV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHazelcastComHazelcastV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHazelcastComHazelcastV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComHazelcastV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
