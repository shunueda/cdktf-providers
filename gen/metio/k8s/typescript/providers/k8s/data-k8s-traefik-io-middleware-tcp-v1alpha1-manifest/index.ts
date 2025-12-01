// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#metadata DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata;
  /**
  * MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#spec DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#annotations DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#labels DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#name DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#namespace DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn {
  /**
  * Amount defines the maximum amount of allowed simultaneous connections. The middleware closes the connection if there are already amount connections opened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#amount DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#amount}
  */
  readonly amount?: number;
}

export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnToTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
  }
}


export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnToHclTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }
}
export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct {
  /**
  * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#source_range DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#source_range}
  */
  readonly sourceRange?: string[];
}

export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructToTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRange),
  }
}


export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructToHclTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRange = this._sourceRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRange = value.sourceRange;
    }
  }

  // source_range - computed: false, optional: true, required: false
  private _sourceRange?: string[]; 
  public get sourceRange() {
    return this.getListAttribute('source_range');
  }
  public set sourceRange(value: string[]) {
    this._sourceRange = value;
  }
  public resetSourceRange() {
    this._sourceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange;
  }
}
export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct {
  /**
  * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#source_range DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#source_range}
  */
  readonly sourceRange?: string[];
}

export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructToTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRange),
  }
}


export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructToHclTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRange),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRange = this._sourceRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRange = value.sourceRange;
    }
  }

  // source_range - computed: false, optional: true, required: false
  private _sourceRange?: string[]; 
  public get sourceRange() {
    return this.getListAttribute('source_range');
  }
  public set sourceRange(value: string[]) {
    this._sourceRange = value;
  }
  public resetSourceRange() {
    this._sourceRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangeInput() {
    return this._sourceRange;
  }
}
export interface DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec {
  /**
  * InFlightConn defines the InFlightConn middleware configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#in_flight_conn DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#in_flight_conn}
  */
  readonly inFlightConn?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn;
  /**
  * IPAllowList defines the IPAllowList middleware configuration. This middleware accepts/refuses connections based on the client IP. More info: https://doc.traefik.io/traefik/v3.2/middlewares/tcp/ipallowlist/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#ip_allow_list DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#ip_allow_list}
  */
  readonly ipAllowList?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct;
  /**
  * IPWhiteList defines the IPWhiteList middleware configuration. This middleware accepts/refuses connections based on the client IP. Deprecated: please use IPAllowList instead. More info: https://doc.traefik.io/traefik/v3.2/middlewares/tcp/ipwhitelist/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#ip_white_list DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest#ip_white_list}
  */
  readonly ipWhiteList?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct;
}

export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_flight_conn: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnToTerraform(struct!.inFlightConn),
    ip_allow_list: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructToTerraform(struct!.ipAllowList),
    ip_white_list: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructToTerraform(struct!.ipWhiteList),
  }
}


export function dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_flight_conn: {
      value: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnToHclTerraform(struct!.inFlightConn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn",
    },
    ip_allow_list: {
      value: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructToHclTerraform(struct!.ipAllowList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct",
    },
    ip_white_list: {
      value: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructToHclTerraform(struct!.ipWhiteList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inFlightConn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inFlightConn = this._inFlightConn?.internalValue;
    }
    if (this._ipAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowList = this._ipAllowList?.internalValue;
    }
    if (this._ipWhiteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipWhiteList = this._ipWhiteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inFlightConn.internalValue = undefined;
      this._ipAllowList.internalValue = undefined;
      this._ipWhiteList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inFlightConn.internalValue = value.inFlightConn;
      this._ipAllowList.internalValue = value.ipAllowList;
      this._ipWhiteList.internalValue = value.ipWhiteList;
    }
  }

  // in_flight_conn - computed: false, optional: true, required: false
  private _inFlightConn = new DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConnOutputReference(this, "in_flight_conn");
  public get inFlightConn() {
    return this._inFlightConn;
  }
  public putInFlightConn(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecInFlightConn) {
    this._inFlightConn.internalValue = value;
  }
  public resetInFlightConn() {
    this._inFlightConn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFlightConnInput() {
    return this._inFlightConn.internalValue;
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList = new DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStructOutputReference(this, "ip_allow_list");
  public get ipAllowList() {
    return this._ipAllowList;
  }
  public putIpAllowList(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpAllowListStruct) {
    this._ipAllowList.internalValue = value;
  }
  public resetIpAllowList() {
    this._ipAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList.internalValue;
  }

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList = new DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStructOutputReference(this, "ip_white_list");
  public get ipWhiteList() {
    return this._ipWhiteList;
  }
  public putIpWhiteList(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecIpWhiteListStruct) {
    this._ipWhiteList.internalValue = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest k8s_traefik_io_middleware_tcp_v1alpha1_manifest}
*/
export class DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_middleware_tcp_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoMiddlewareTcpV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_middleware_tcp_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/traefik_io_middleware_tcp_v1alpha1_manifest k8s_traefik_io_middleware_tcp_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_middleware_tcp_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoMiddlewareTcpV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
