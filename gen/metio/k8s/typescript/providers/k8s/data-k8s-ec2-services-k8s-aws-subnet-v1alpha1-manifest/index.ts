// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata;
  /**
  * SubnetSpec defines the desired state of Subnet. Describes a subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#assign_i_pv6_address_on_creation DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#assign_i_pv6_address_on_creation}
  */
  readonly assignIPv6AddressOnCreation?: boolean | cdktf.IResolvable;
  /**
  * The Availability Zone or Local Zone for the subnet. Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we do not necessarily select a different zone for each subnet. To create a subnet in a Local Zone, set this value to the Local Zone ID, for example us-west-2-lax-1a. For information about the Regions that support Local Zones, see Available Regions (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions) in the Amazon Elastic Compute Cloud User Guide. To create a subnet in an Outpost, set this value to the Availability Zone for the Outpost and specify the Outpost ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#availability_zone DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The AZ ID or the Local Zone ID of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#availability_zone_id DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * The IPv4 network range for the subnet, in CIDR notation. For example, 10.0.0.0/24. We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18. This parameter is not supported for an IPv6 only subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#cidr_block DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#customer_owned_i_pv4_pool DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#customer_owned_i_pv4_pool}
  */
  readonly customerOwnedIPv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#enable_dns64 DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#enable_dns64}
  */
  readonly enableDns64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#enable_resource_name_dnsa_record DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#enable_resource_name_dnsa_record}
  */
  readonly enableResourceNameDnsaRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#enable_resource_name_dnsaaaa_record DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#enable_resource_name_dnsaaaa_record}
  */
  readonly enableResourceNameDnsaaaaRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#hostname_type DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#hostname_type}
  */
  readonly hostnameType?: string;
  /**
  * The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length. This parameter is required for an IPv6 only subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#ipv6_cidr_block DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Indicates whether to create an IPv6 only subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#ipv6_native DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#ipv6_native}
  */
  readonly ipv6Native?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#map_public_ip_on_launch DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#map_public_ip_on_launch}
  */
  readonly mapPublicIpOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also specify the Availability Zone of the Outpost subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#outpost_arn DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#route_table_refs DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#route_table_refs}
  */
  readonly routeTableRefs?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#route_tables DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#route_tables}
  */
  readonly routeTables?: string[];
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef;
}

export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_i_pv6_address_on_creation: cdktf.booleanToTerraform(struct!.assignIPv6AddressOnCreation),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    availability_zone_id: cdktf.stringToTerraform(struct!.availabilityZoneId),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    customer_owned_i_pv4_pool: cdktf.stringToTerraform(struct!.customerOwnedIPv4Pool),
    enable_dns64: cdktf.booleanToTerraform(struct!.enableDns64),
    enable_resource_name_dnsa_record: cdktf.booleanToTerraform(struct!.enableResourceNameDnsaRecord),
    enable_resource_name_dnsaaaa_record: cdktf.booleanToTerraform(struct!.enableResourceNameDnsaaaaRecord),
    hostname_type: cdktf.stringToTerraform(struct!.hostnameType),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    ipv6_native: cdktf.booleanToTerraform(struct!.ipv6Native),
    map_public_ip_on_launch: cdktf.booleanToTerraform(struct!.mapPublicIpOnLaunch),
    outpost_arn: cdktf.stringToTerraform(struct!.outpostArn),
    route_table_refs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsToTerraform, false)(struct!.routeTableRefs),
    route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTables),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_ref: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_i_pv6_address_on_creation: {
      value: cdktf.booleanToHclTerraform(struct!.assignIPv6AddressOnCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_owned_i_pv4_pool: {
      value: cdktf.stringToHclTerraform(struct!.customerOwnedIPv4Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dns64: {
      value: cdktf.booleanToHclTerraform(struct!.enableDns64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_name_dnsa_record: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceNameDnsaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_name_dnsaaaa_record: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceNameDnsaaaaRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname_type: {
      value: cdktf.stringToHclTerraform(struct!.hostnameType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_native: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Native),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    map_public_ip_on_launch: {
      value: cdktf.booleanToHclTerraform(struct!.mapPublicIpOnLaunch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outpost_arn: {
      value: cdktf.stringToHclTerraform(struct!.outpostArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_refs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsToHclTerraform, false)(struct!.routeTableRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsList",
    },
    route_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIPv6AddressOnCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIPv6AddressOnCreation = this._assignIPv6AddressOnCreation;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._availabilityZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneId = this._availabilityZoneId;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._customerOwnedIPv4Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerOwnedIPv4Pool = this._customerOwnedIPv4Pool;
    }
    if (this._enableDns64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDns64 = this._enableDns64;
    }
    if (this._enableResourceNameDnsaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsaRecord = this._enableResourceNameDnsaRecord;
    }
    if (this._enableResourceNameDnsaaaaRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceNameDnsaaaaRecord = this._enableResourceNameDnsaaaaRecord;
    }
    if (this._hostnameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameType = this._hostnameType;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._ipv6Native !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Native = this._ipv6Native;
    }
    if (this._mapPublicIpOnLaunch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapPublicIpOnLaunch = this._mapPublicIpOnLaunch;
    }
    if (this._outpostArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostArn = this._outpostArn;
    }
    if (this._routeTableRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableRefs = this._routeTableRefs?.internalValue;
    }
    if (this._routeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTables = this._routeTables;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRef = this._vpcRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIPv6AddressOnCreation = undefined;
      this._availabilityZone = undefined;
      this._availabilityZoneId = undefined;
      this._cidrBlock = undefined;
      this._customerOwnedIPv4Pool = undefined;
      this._enableDns64 = undefined;
      this._enableResourceNameDnsaRecord = undefined;
      this._enableResourceNameDnsaaaaRecord = undefined;
      this._hostnameType = undefined;
      this._ipv6CidrBlock = undefined;
      this._ipv6Native = undefined;
      this._mapPublicIpOnLaunch = undefined;
      this._outpostArn = undefined;
      this._routeTableRefs.internalValue = undefined;
      this._routeTables = undefined;
      this._tags.internalValue = undefined;
      this._vpcId = undefined;
      this._vpcRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIPv6AddressOnCreation = value.assignIPv6AddressOnCreation;
      this._availabilityZone = value.availabilityZone;
      this._availabilityZoneId = value.availabilityZoneId;
      this._cidrBlock = value.cidrBlock;
      this._customerOwnedIPv4Pool = value.customerOwnedIPv4Pool;
      this._enableDns64 = value.enableDns64;
      this._enableResourceNameDnsaRecord = value.enableResourceNameDnsaRecord;
      this._enableResourceNameDnsaaaaRecord = value.enableResourceNameDnsaaaaRecord;
      this._hostnameType = value.hostnameType;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._ipv6Native = value.ipv6Native;
      this._mapPublicIpOnLaunch = value.mapPublicIpOnLaunch;
      this._outpostArn = value.outpostArn;
      this._routeTableRefs.internalValue = value.routeTableRefs;
      this._routeTables = value.routeTables;
      this._tags.internalValue = value.tags;
      this._vpcId = value.vpcId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // assign_i_pv6_address_on_creation - computed: false, optional: true, required: false
  private _assignIPv6AddressOnCreation?: boolean | cdktf.IResolvable; 
  public get assignIPv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_i_pv6_address_on_creation');
  }
  public set assignIPv6AddressOnCreation(value: boolean | cdktf.IResolvable) {
    this._assignIPv6AddressOnCreation = value;
  }
  public resetAssignIPv6AddressOnCreation() {
    this._assignIPv6AddressOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIPv6AddressOnCreationInput() {
    return this._assignIPv6AddressOnCreation;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: false, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // customer_owned_i_pv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIPv4Pool?: string; 
  public get customerOwnedIPv4Pool() {
    return this.getStringAttribute('customer_owned_i_pv4_pool');
  }
  public set customerOwnedIPv4Pool(value: string) {
    this._customerOwnedIPv4Pool = value;
  }
  public resetCustomerOwnedIPv4Pool() {
    this._customerOwnedIPv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIPv4PoolInput() {
    return this._customerOwnedIPv4Pool;
  }

  // enable_dns64 - computed: false, optional: true, required: false
  private _enableDns64?: boolean | cdktf.IResolvable; 
  public get enableDns64() {
    return this.getBooleanAttribute('enable_dns64');
  }
  public set enableDns64(value: boolean | cdktf.IResolvable) {
    this._enableDns64 = value;
  }
  public resetEnableDns64() {
    this._enableDns64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDns64Input() {
    return this._enableDns64;
  }

  // enable_resource_name_dnsa_record - computed: false, optional: true, required: false
  private _enableResourceNameDnsaRecord?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dnsa_record');
  }
  public set enableResourceNameDnsaRecord(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsaRecord = value;
  }
  public resetEnableResourceNameDnsaRecord() {
    this._enableResourceNameDnsaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsaRecordInput() {
    return this._enableResourceNameDnsaRecord;
  }

  // enable_resource_name_dnsaaaa_record - computed: false, optional: true, required: false
  private _enableResourceNameDnsaaaaRecord?: boolean | cdktf.IResolvable; 
  public get enableResourceNameDnsaaaaRecord() {
    return this.getBooleanAttribute('enable_resource_name_dnsaaaa_record');
  }
  public set enableResourceNameDnsaaaaRecord(value: boolean | cdktf.IResolvable) {
    this._enableResourceNameDnsaaaaRecord = value;
  }
  public resetEnableResourceNameDnsaaaaRecord() {
    this._enableResourceNameDnsaaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceNameDnsaaaaRecordInput() {
    return this._enableResourceNameDnsaaaaRecord;
  }

  // hostname_type - computed: false, optional: true, required: false
  private _hostnameType?: string; 
  public get hostnameType() {
    return this.getStringAttribute('hostname_type');
  }
  public set hostnameType(value: string) {
    this._hostnameType = value;
  }
  public resetHostnameType() {
    this._hostnameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameTypeInput() {
    return this._hostnameType;
  }

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_native - computed: false, optional: true, required: false
  private _ipv6Native?: boolean | cdktf.IResolvable; 
  public get ipv6Native() {
    return this.getBooleanAttribute('ipv6_native');
  }
  public set ipv6Native(value: boolean | cdktf.IResolvable) {
    this._ipv6Native = value;
  }
  public resetIpv6Native() {
    this._ipv6Native = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NativeInput() {
    return this._ipv6Native;
  }

  // map_public_ip_on_launch - computed: false, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean | cdktf.IResolvable; 
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }
  public set mapPublicIpOnLaunch(value: boolean | cdktf.IResolvable) {
    this._mapPublicIpOnLaunch = value;
  }
  public resetMapPublicIpOnLaunch() {
    this._mapPublicIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPublicIpOnLaunchInput() {
    return this._mapPublicIpOnLaunch;
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string; 
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn;
  }

  // route_table_refs - computed: false, optional: true, required: false
  private _routeTableRefs = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefsList(this, "route_table_refs", false);
  public get routeTableRefs() {
    return this._routeTableRefs;
  }
  public putRouteTableRefs(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecRouteTableRefs[] | cdktf.IResolvable) {
    this._routeTableRefs.internalValue = value;
  }
  public resetRouteTableRefs() {
    this._routeTableRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRefsInput() {
    return this._routeTableRefs.internalValue;
  }

  // route_tables - computed: false, optional: true, required: false
  private _routeTables?: string[]; 
  public get routeTables() {
    return this.getListAttribute('route_tables');
  }
  public set routeTables(value: string[]) {
    this._routeTables = value;
  }
  public resetRouteTables() {
    this._routeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTablesInput() {
    return this._routeTables;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_ref - computed: false, optional: true, required: false
  private _vpcRef = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecVpcRef) {
    this._vpcRef.internalValue = value;
  }
  public resetVpcRef() {
    this._vpcRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRefInput() {
    return this._vpcRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest k8s_ec2_services_k8s_aws_subnet_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_subnet_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsSubnetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_subnet_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/ec2_services_k8s_aws_subnet_v1alpha1_manifest k8s_ec2_services_k8s_aws_subnet_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_subnet_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsSubnetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
