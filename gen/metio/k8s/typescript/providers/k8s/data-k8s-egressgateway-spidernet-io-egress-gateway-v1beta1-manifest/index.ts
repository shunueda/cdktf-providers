// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#metadata DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#spec DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec;
}
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#annotations DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#labels DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#name DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#ipv4 DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#ipv4_default_eip DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#ipv4_default_eip}
  */
  readonly ipv4DefaultEip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#ipv6 DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#ipv6_default_eip DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#ipv6_default_eip}
  */
  readonly ipv6DefaultEip?: string;
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4),
    ipv4_default_eip: cdktf.stringToTerraform(struct!.ipv4DefaultEip),
    ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6),
    ipv6_default_eip: cdktf.stringToTerraform(struct!.ipv6DefaultEip),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_default_eip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4DefaultEip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_default_eip: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DefaultEip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv4DefaultEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DefaultEip = this._ipv4DefaultEip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6DefaultEip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DefaultEip = this._ipv6DefaultEip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv4DefaultEip = undefined;
      this._ipv6 = undefined;
      this._ipv6DefaultEip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv4DefaultEip = value.ipv4DefaultEip;
      this._ipv6 = value.ipv6;
      this._ipv6DefaultEip = value.ipv6DefaultEip;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_default_eip - computed: false, optional: true, required: false
  private _ipv4DefaultEip?: string; 
  public get ipv4DefaultEip() {
    return this.getStringAttribute('ipv4_default_eip');
  }
  public set ipv4DefaultEip(value: string) {
    this._ipv4DefaultEip = value;
  }
  public resetIpv4DefaultEip() {
    this._ipv4DefaultEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DefaultEipInput() {
    return this._ipv4DefaultEip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_default_eip - computed: false, optional: true, required: false
  private _ipv6DefaultEip?: string; 
  public get ipv6DefaultEip() {
    return this.getStringAttribute('ipv6_default_eip');
  }
  public set ipv6DefaultEip(value: string) {
    this._ipv6DefaultEip = value;
  }
  public resetIpv6DefaultEip() {
    this._ipv6DefaultEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DefaultEipInput() {
    return this._ipv6DefaultEip;
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#key DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#operator DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#values DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsOutputReference {
    return new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#match_expressions DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#match_labels DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsList",
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

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#policy DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#selector DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector;
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    selector: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._selector.internalValue = value.selector;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#cluster_default DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#cluster_default}
  */
  readonly clusterDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#ippools DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#ippools}
  */
  readonly ippools?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#node_selector DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector;
}

export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecToTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_default: cdktf.booleanToTerraform(struct!.clusterDefault),
    ippools: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsToTerraform(struct!.ippools),
    node_selector: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
  }
}


export function dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_default: {
      value: cdktf.booleanToHclTerraform(struct!.clusterDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ippools: {
      value: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsToHclTerraform(struct!.ippools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools",
    },
    node_selector: {
      value: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDefault = this._clusterDefault;
    }
    if (this._ippools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ippools = this._ippools?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDefault = undefined;
      this._ippools.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDefault = value.clusterDefault;
      this._ippools.internalValue = value.ippools;
      this._nodeSelector.internalValue = value.nodeSelector;
    }
  }

  // cluster_default - computed: false, optional: true, required: false
  private _clusterDefault?: boolean | cdktf.IResolvable; 
  public get clusterDefault() {
    return this.getBooleanAttribute('cluster_default');
  }
  public set clusterDefault(value: boolean | cdktf.IResolvable) {
    this._clusterDefault = value;
  }
  public resetClusterDefault() {
    this._clusterDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefaultInput() {
    return this._clusterDefault;
  }

  // ippools - computed: false, optional: true, required: false
  private _ippools = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppoolsOutputReference(this, "ippools");
  public get ippools() {
    return this._ippools;
  }
  public putIppools(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecIppools) {
    this._ippools.internalValue = value;
  }
  public resetIppools() {
    this._ippools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolsInput() {
    return this._ippools.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_gateway_v1beta1_manifest}
*/
export class DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_egressgateway_spidernet_io_egress_gateway_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_egressgateway_spidernet_io_egress_gateway_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/egressgateway_spidernet_io_egress_gateway_v1beta1_manifest k8s_egressgateway_spidernet_io_egress_gateway_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_egressgateway_spidernet_io_egress_gateway_v1beta1_manifest',
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
  private _metadata = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec) {
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
      metadata: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEgressgatewaySpidernetIoEgressGatewayV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
