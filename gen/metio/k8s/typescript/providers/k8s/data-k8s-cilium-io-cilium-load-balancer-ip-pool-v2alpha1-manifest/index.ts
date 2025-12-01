// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#metadata DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata;
  /**
  * Spec is a human readable description for a BGP load balancer ip pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#spec DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#spec}
  */
  readonly spec: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec;
}
export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#annotations DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#labels DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#name DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#cidr DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#start DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#start}
  */
  readonly start?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#stop DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#stop}
  */
  readonly stop?: string;
}

export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksToTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    start: cdktf.stringToTerraform(struct!.start),
    stop: cdktf.stringToTerraform(struct!.stop),
  }
}


export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksToHclTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks | cdktf.IResolvable): any {
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
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop: {
      value: cdktf.stringToHclTerraform(struct!.stop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._stop !== undefined) {
      hasAnyValues = true;
      internalValueResult.stop = this._stop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._start = undefined;
      this._stop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._start = value.start;
      this._stop = value.stop;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // stop - computed: false, optional: true, required: false
  private _stop?: string; 
  public get stop() {
    return this.getStringAttribute('stop');
  }
  public set stop(value: string) {
    this._stop = value;
  }
  public resetStop() {
    this._stop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInput() {
    return this._stop;
  }
}

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksOutputReference {
    return new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#key DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#operator DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#values DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#match_expressions DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#match_labels DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec {
  /**
  * AllowFirstLastIPs, if set to 'Yes' or undefined means that the first and last IPs of each CIDR will be allocatable. If 'No', these IPs will be reserved. This field is ignored for /{31,32} and /{127,128} CIDRs since reserving the first and last IPs would make the CIDRs unusable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#allow_first_last_i_ps DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#allow_first_last_i_ps}
  */
  readonly allowFirstLastIPs?: string;
  /**
  * Blocks is a list of CIDRs comprising this IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#blocks DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#blocks}
  */
  readonly blocks?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks[] | cdktf.IResolvable;
  /**
  * Disabled, if set to true means that no new IPs will be allocated from this pool. Existing allocations will not be removed from services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#disabled DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * ServiceSelector selects a set of services which are eligible to receive IPs from this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#service_selector DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest#service_selector}
  */
  readonly serviceSelector?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector;
}

export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_first_last_i_ps: cdktf.stringToTerraform(struct!.allowFirstLastIPs),
    blocks: cdktf.listMapper(dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksToTerraform, false)(struct!.blocks),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    service_selector: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorToTerraform(struct!.serviceSelector),
  }
}


export function dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_first_last_i_ps: {
      value: cdktf.stringToHclTerraform(struct!.allowFirstLastIPs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocks: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksToHclTerraform, false)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_selector: {
      value: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorToHclTerraform(struct!.serviceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFirstLastIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFirstLastIPs = this._allowFirstLastIPs;
    }
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._serviceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSelector = this._serviceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFirstLastIPs = undefined;
      this._blocks.internalValue = undefined;
      this._disabled = undefined;
      this._serviceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFirstLastIPs = value.allowFirstLastIPs;
      this._blocks.internalValue = value.blocks;
      this._disabled = value.disabled;
      this._serviceSelector.internalValue = value.serviceSelector;
    }
  }

  // allow_first_last_i_ps - computed: false, optional: true, required: false
  private _allowFirstLastIPs?: string; 
  public get allowFirstLastIPs() {
    return this.getStringAttribute('allow_first_last_i_ps');
  }
  public set allowFirstLastIPs(value: string) {
    this._allowFirstLastIPs = value;
  }
  public resetAllowFirstLastIPs() {
    this._allowFirstLastIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFirstLastIPsInput() {
    return this._allowFirstLastIPs;
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // service_selector - computed: false, optional: true, required: false
  private _serviceSelector = new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelectorOutputReference(this, "service_selector");
  public get serviceSelector() {
    return this._serviceSelector;
  }
  public putServiceSelector(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecServiceSelector) {
    this._serviceSelector.internalValue = value;
  }
  public resetServiceSelector() {
    this._serviceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSelectorInput() {
    return this._serviceSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest k8s_cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest}
*/
export class DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest k8s_cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_load_balancer_ip_pool_v2alpha1_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumLoadBalancerIpPoolV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
