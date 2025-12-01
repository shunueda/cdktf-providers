// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#metadata DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#spec DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec;
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#annotations DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#labels DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#name DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#namespace DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#ip_address DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#port DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#proto DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#proto}
  */
  readonly proto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#status DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    status: cdktf.booleanToTerraform(struct!.status),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.booleanToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._proto = value.proto;
      this._status = value.status;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // status - computed: false, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructOutputReference {
    return new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#ip_address DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#port DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#proto DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#proto}
  */
  readonly proto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#status DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    status: cdktf.booleanToTerraform(struct!.status),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.booleanToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._proto = value.proto;
      this._status = value.status;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // status - computed: false, optional: true, required: false
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructList extends cdktf.ComplexList {
  public internalValue? : DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructOutputReference {
    return new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#end_points_list DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#end_points_list}
  */
  readonly endPointsList?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#path DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_points_list: cdktf.listMapper(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructToTerraform, false)(struct!.endPointsList),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_points_list: {
      value: cdktf.listMapperHcl(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructToHclTerraform, false)(struct!.endPointsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPointsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointsList = this._endPointsList?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPointsList.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPointsList.internalValue = value.endPointsList;
      this._path = value.path;
    }
  }

  // end_points_list - computed: false, optional: true, required: false
  private _endPointsList = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStructList(this, "end_points_list", false);
  public get endPointsList() {
    return this._endPointsList;
  }
  public putEndPointsList(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsEndPointsListStruct[] | cdktf.IResolvable) {
    this._endPointsList.internalValue = value;
  }
  public resetEndPointsList() {
    this._endPointsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointsListInput() {
    return this._endPointsList.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsOutputReference {
    return new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#back_end_service DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#back_end_service}
  */
  readonly backEndService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#end_points_list DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#end_points_list}
  */
  readonly endPointsList?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#path DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#proto DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#proxy_paths DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#proxy_paths}
  */
  readonly proxyPaths?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#server_port DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#server_port}
  */
  readonly serverPort: number;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_end_service: cdktf.stringToTerraform(struct!.backEndService),
    end_points_list: cdktf.listMapper(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructToTerraform, false)(struct!.endPointsList),
    path: cdktf.stringToTerraform(struct!.path),
    proto: cdktf.stringToTerraform(struct!.proto),
    proxy_paths: cdktf.listMapper(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsToTerraform, false)(struct!.proxyPaths),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_end_service: {
      value: cdktf.stringToHclTerraform(struct!.backEndService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_points_list: {
      value: cdktf.listMapperHcl(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructToHclTerraform, false)(struct!.endPointsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_paths: {
      value: cdktf.listMapperHcl(dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsToHclTerraform, false)(struct!.proxyPaths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsList",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backEndService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backEndService = this._backEndService;
    }
    if (this._endPointsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointsList = this._endPointsList?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._proxyPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPaths = this._proxyPaths?.internalValue;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backEndService = undefined;
      this._endPointsList.internalValue = undefined;
      this._path = undefined;
      this._proto = undefined;
      this._proxyPaths.internalValue = undefined;
      this._serverPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backEndService = value.backEndService;
      this._endPointsList.internalValue = value.endPointsList;
      this._path = value.path;
      this._proto = value.proto;
      this._proxyPaths.internalValue = value.proxyPaths;
      this._serverPort = value.serverPort;
    }
  }

  // back_end_service - computed: false, optional: true, required: false
  private _backEndService?: string; 
  public get backEndService() {
    return this.getStringAttribute('back_end_service');
  }
  public set backEndService(value: string) {
    this._backEndService = value;
  }
  public resetBackEndService() {
    this._backEndService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backEndServiceInput() {
    return this._backEndService;
  }

  // end_points_list - computed: false, optional: true, required: false
  private _endPointsList = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStructList(this, "end_points_list", false);
  public get endPointsList() {
    return this._endPointsList;
  }
  public putEndPointsList(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerEndPointsListStruct[] | cdktf.IResolvable) {
    this._endPointsList.internalValue = value;
  }
  public resetEndPointsList() {
    this._endPointsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointsListInput() {
    return this._endPointsList.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // proxy_paths - computed: false, optional: true, required: false
  private _proxyPaths = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPathsList(this, "proxy_paths", false);
  public get proxyPaths() {
    return this._proxyPaths;
  }
  public putProxyPaths(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerProxyPaths[] | cdktf.IResolvable) {
    this._proxyPaths.internalValue = value;
  }
  public resetProxyPaths() {
    this._proxyPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPathsInput() {
    return this._proxyPaths.internalValue;
  }

  // server_port - computed: false, optional: false, required: true
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#document_root DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#document_root}
  */
  readonly documentRoot: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#server_admin DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#server_admin}
  */
  readonly serverAdmin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#server_port DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#server_port}
  */
  readonly serverPort: number;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_root: cdktf.stringToTerraform(struct!.documentRoot),
    server_admin: cdktf.stringToTerraform(struct!.serverAdmin),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    document_root: {
      value: cdktf.stringToHclTerraform(struct!.documentRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_admin: {
      value: cdktf.stringToHclTerraform(struct!.serverAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentRoot = this._documentRoot;
    }
    if (this._serverAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAdmin = this._serverAdmin;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentRoot = undefined;
      this._serverAdmin = undefined;
      this._serverPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentRoot = value.documentRoot;
      this._serverAdmin = value.serverAdmin;
      this._serverPort = value.serverPort;
    }
  }

  // document_root - computed: false, optional: false, required: true
  private _documentRoot?: string; 
  public get documentRoot() {
    return this.getStringAttribute('document_root');
  }
  public set documentRoot(value: string) {
    this._documentRoot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootInput() {
    return this._documentRoot;
  }

  // server_admin - computed: false, optional: false, required: true
  private _serverAdmin?: string; 
  public get serverAdmin() {
    return this.getStringAttribute('server_admin');
  }
  public set serverAdmin(value: string) {
    this._serverAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdminInput() {
    return this._serverAdmin;
  }

  // server_port - computed: false, optional: false, required: true
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }
}
export interface DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#load_balancer DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#server_name DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#size DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#type DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#web_server DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest#web_server}
  */
  readonly webServer?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer;
}

export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerToTerraform(struct!.loadBalancer),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    web_server: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerToTerraform(struct!.webServer),
  }
}


export function dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer: {
      value: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_server: {
      value: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerToHclTerraform(struct!.webServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._webServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServer = this._webServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._serverName = undefined;
      this._size = undefined;
      this._type = undefined;
      this._webServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._serverName = value.serverName;
      this._size = value.size;
      this._type = value.type;
      this._webServer.internalValue = value.webServer;
    }
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // web_server - computed: false, optional: true, required: false
  private _webServer = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServerOutputReference(this, "web_server");
  public get webServer() {
    return this._webServer;
  }
  public putWebServer(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecWebServer) {
    this._webServer.internalValue = value;
  }
  public resetWebServer() {
    this._webServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerInput() {
    return this._webServer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest k8s_apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest}
*/
export class DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApachewebArsenalDevApachewebV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest k8s_apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apacheweb_arsenal_dev_apacheweb_v1alpha1_manifest',
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
  private _metadata = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApachewebArsenalDevApachewebV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
