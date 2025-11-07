// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#metadata DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#spec DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec;
}
export interface DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#annotations DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#labels DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#name DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4 {
  /**
  * CIDRs is a list of IPv4 CIDRs that are part of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#cidrs DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#cidrs}
  */
  readonly cidrs: string[];
  /**
  * MaskSize is the mask size of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#mask_size DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#mask_size}
  */
  readonly maskSize: number;
}

export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4ToTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    mask_size: cdktf.numberToTerraform(struct!.maskSize),
  }
}


export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4ToHclTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mask_size: {
      value: cdktf.numberToHclTerraform(struct!.maskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._maskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskSize = this._maskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._maskSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._maskSize = value.maskSize;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // mask_size - computed: false, optional: false, required: true
  private _maskSize?: number; 
  public get maskSize() {
    return this.getNumberAttribute('mask_size');
  }
  public set maskSize(value: number) {
    this._maskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskSizeInput() {
    return this._maskSize;
  }
}
export interface DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6 {
  /**
  * CIDRs is a list of IPv6 CIDRs that are part of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#cidrs DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#cidrs}
  */
  readonly cidrs: string[];
  /**
  * MaskSize is the mask size of the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#mask_size DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#mask_size}
  */
  readonly maskSize: number;
}

export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6ToTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    mask_size: cdktf.numberToTerraform(struct!.maskSize),
  }
}


export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6ToHclTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mask_size: {
      value: cdktf.numberToHclTerraform(struct!.maskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._maskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskSize = this._maskSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._maskSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._maskSize = value.maskSize;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // mask_size - computed: false, optional: false, required: true
  private _maskSize?: number; 
  public get maskSize() {
    return this.getNumberAttribute('mask_size');
  }
  public set maskSize(value: number) {
    this._maskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskSizeInput() {
    return this._maskSize;
  }
}
export interface DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec {
  /**
  * IPv4 specifies the IPv4 CIDRs and mask sizes of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#ipv4 DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#ipv4}
  */
  readonly ipv4?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4;
  /**
  * IPv6 specifies the IPv6 CIDRs and mask sizes of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#ipv6 DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest#ipv6}
  */
  readonly ipv6?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6;
}

export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4ToTerraform(struct!.ipv4),
    ipv6: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4",
    },
    ipv6: {
      value: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest k8s_cilium_io_cilium_pod_ip_pool_v2alpha1_manifest}
*/
export class DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_pod_ip_pool_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumPodIpPoolV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_pod_ip_pool_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cilium_io_cilium_pod_ip_pool_v2alpha1_manifest k8s_cilium_io_cilium_pod_ip_pool_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_pod_ip_pool_v2alpha1_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumPodIpPoolV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
