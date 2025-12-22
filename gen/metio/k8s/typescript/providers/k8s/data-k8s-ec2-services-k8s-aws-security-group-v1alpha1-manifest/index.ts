// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#metadata DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata;
  /**
  * SecurityGroupSpec defines the desired state of SecurityGroup. Describes a security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#spec DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec;
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#annotations DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#labels DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#cidr_ip DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._description = value.description;
    }
  }

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#cidr_i_pv6 DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#cidr_i_pv6}
  */
  readonly cidrIPv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_i_pv6: cdktf.stringToTerraform(struct!.cidrIPv6),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_i_pv6: {
      value: cdktf.stringToHclTerraform(struct!.cidrIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIPv6 = this._cidrIPv6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIPv6 = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIPv6 = value.cidrIPv6;
      this._description = value.description;
    }
  }

  // cidr_i_pv6 - computed: false, optional: true, required: false
  private _cidrIPv6?: string; 
  public get cidrIPv6() {
    return this.getStringAttribute('cidr_i_pv6');
  }
  public set cidrIPv6(value: string) {
    this._cidrIPv6 = value;
  }
  public resetCidrIPv6() {
    this._cidrIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIPv6Input() {
    return this._cidrIPv6;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#prefix_list_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#prefix_list_id}
  */
  readonly prefixListId?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._prefixListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._prefixListId = value.prefixListId;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_name}
  */
  readonly groupName?: string;
  /**
  * Reference field for GroupID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_ref DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_ref}
  */
  readonly groupRef?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#peering_status DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#peering_status}
  */
  readonly peeringStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#user_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_peering_connection_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
  /**
  * Reference field for VPCID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    group_ref: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefToTerraform(struct!.groupRef),
    peering_status: cdktf.stringToTerraform(struct!.peeringStatus),
    user_id: cdktf.stringToTerraform(struct!.userId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
    vpc_ref: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ref: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefToHclTerraform(struct!.groupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef",
    },
    peering_status: {
      value: cdktf.stringToHclTerraform(struct!.peeringStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_peering_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcPeeringConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._groupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRef = this._groupRef?.internalValue;
    }
    if (this._peeringStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringStatus = this._peeringStatus;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcPeeringConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPeeringConnectionId = this._vpcPeeringConnectionId;
    }
    if (this._vpcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRef = this._vpcRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
      this._groupRef.internalValue = undefined;
      this._peeringStatus = undefined;
      this._userId = undefined;
      this._vpcId = undefined;
      this._vpcPeeringConnectionId = undefined;
      this._vpcRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
      this._groupRef.internalValue = value.groupRef;
      this._peeringStatus = value.peeringStatus;
      this._userId = value.userId;
      this._vpcId = value.vpcId;
      this._vpcPeeringConnectionId = value.vpcPeeringConnectionId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_ref - computed: false, optional: true, required: false
  private _groupRef = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRefOutputReference(this, "group_ref");
  public get groupRef() {
    return this._groupRef;
  }
  public putGroupRef(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsGroupRef) {
    this._groupRef.internalValue = value;
  }
  public resetGroupRef() {
    this._groupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefInput() {
    return this._groupRef.internalValue;
  }

  // peering_status - computed: false, optional: true, required: false
  private _peeringStatus?: string; 
  public get peeringStatus() {
    return this.getStringAttribute('peering_status');
  }
  public set peeringStatus(value: string) {
    this._peeringStatus = value;
  }
  public resetPeeringStatus() {
    this._peeringStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringStatusInput() {
    return this._peeringStatus;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

  // vpc_peering_connection_id - computed: false, optional: true, required: false
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  public resetVpcPeeringConnectionId() {
    this._vpcPeeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // vpc_ref - computed: false, optional: true, required: false
  private _vpcRef = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsVpcRef) {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from_port DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ip_protocol DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ip_ranges DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ip_ranges}
  */
  readonly ipRanges?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ipv6_ranges DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ipv6_ranges}
  */
  readonly ipv6Ranges?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#prefix_list_i_ds DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#prefix_list_i_ds}
  */
  readonly prefixListIDs?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#to_port DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#to_port}
  */
  readonly toPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#user_id_group_pairs DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#user_id_group_pairs}
  */
  readonly userIdGroupPairs?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs[] | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ip_ranges: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesToTerraform, false)(struct!.ipRanges),
    ipv6_ranges: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesToTerraform, false)(struct!.ipv6Ranges),
    prefix_list_i_ds: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsToTerraform, false)(struct!.prefixListIDs),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    user_id_group_pairs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsToTerraform, false)(struct!.userIdGroupPairs),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesToHclTerraform, false)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesList",
    },
    ipv6_ranges: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesToHclTerraform, false)(struct!.ipv6Ranges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesList",
    },
    prefix_list_i_ds: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsToHclTerraform, false)(struct!.prefixListIDs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsList",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id_group_pairs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsToHclTerraform, false)(struct!.userIdGroupPairs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    if (this._ipv6Ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ranges = this._ipv6Ranges?.internalValue;
    }
    if (this._prefixListIDs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIDs = this._prefixListIDs?.internalValue;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    if (this._userIdGroupPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdGroupPairs = this._userIdGroupPairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._ipProtocol = undefined;
      this._ipRanges.internalValue = undefined;
      this._ipv6Ranges.internalValue = undefined;
      this._prefixListIDs.internalValue = undefined;
      this._toPort = undefined;
      this._userIdGroupPairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._ipProtocol = value.ipProtocol;
      this._ipRanges.internalValue = value.ipRanges;
      this._ipv6Ranges.internalValue = value.ipv6Ranges;
      this._prefixListIDs.internalValue = value.prefixListIDs;
      this._toPort = value.toPort;
      this._userIdGroupPairs.internalValue = value.userIdGroupPairs;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // ipv6_ranges - computed: false, optional: true, required: false
  private _ipv6Ranges = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6RangesList(this, "ipv6_ranges", false);
  public get ipv6Ranges() {
    return this._ipv6Ranges;
  }
  public putIpv6Ranges(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesIpv6Ranges[] | cdktf.IResolvable) {
    this._ipv6Ranges.internalValue = value;
  }
  public resetIpv6Ranges() {
    this._ipv6Ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangesInput() {
    return this._ipv6Ranges.internalValue;
  }

  // prefix_list_i_ds - computed: false, optional: true, required: false
  private _prefixListIDs = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDsList(this, "prefix_list_i_ds", false);
  public get prefixListIDs() {
    return this._prefixListIDs;
  }
  public putPrefixListIDs(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesPrefixListIDs[] | cdktf.IResolvable) {
    this._prefixListIDs.internalValue = value;
  }
  public resetPrefixListIDs() {
    this._prefixListIDs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIDsInput() {
    return this._prefixListIDs.internalValue;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }

  // user_id_group_pairs - computed: false, optional: true, required: false
  private _userIdGroupPairs = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairsList(this, "user_id_group_pairs", false);
  public get userIdGroupPairs() {
    return this._userIdGroupPairs;
  }
  public putUserIdGroupPairs(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesUserIdGroupPairs[] | cdktf.IResolvable) {
    this._userIdGroupPairs.internalValue = value;
  }
  public resetUserIdGroupPairs() {
    this._userIdGroupPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdGroupPairsInput() {
    return this._userIdGroupPairs.internalValue;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#cidr_ip DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ip: cdktf.stringToTerraform(struct!.cidrIp),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_ip: {
      value: cdktf.stringToHclTerraform(struct!.cidrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIp = this._cidrIp;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIp = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIp = value.cidrIp;
      this._description = value.description;
    }
  }

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#cidr_i_pv6 DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#cidr_i_pv6}
  */
  readonly cidrIPv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_i_pv6: cdktf.stringToTerraform(struct!.cidrIPv6),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_i_pv6: {
      value: cdktf.stringToHclTerraform(struct!.cidrIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrIPv6 = this._cidrIPv6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrIPv6 = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrIPv6 = value.cidrIPv6;
      this._description = value.description;
    }
  }

  // cidr_i_pv6 - computed: false, optional: true, required: false
  private _cidrIPv6?: string; 
  public get cidrIPv6() {
    return this.getStringAttribute('cidr_i_pv6');
  }
  public set cidrIPv6(value: string) {
    this._cidrIPv6 = value;
  }
  public resetCidrIPv6() {
    this._cidrIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIPv6Input() {
    return this._cidrIPv6;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#prefix_list_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#prefix_list_id}
  */
  readonly prefixListId?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._prefixListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._prefixListId = value.prefixListId;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_name}
  */
  readonly groupName?: string;
  /**
  * Reference field for GroupID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#group_ref DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#group_ref}
  */
  readonly groupRef?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#peering_status DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#peering_status}
  */
  readonly peeringStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#user_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_peering_connection_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId?: string;
  /**
  * Reference field for VPCID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    group_ref: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefToTerraform(struct!.groupRef),
    peering_status: cdktf.stringToTerraform(struct!.peeringStatus),
    user_id: cdktf.stringToTerraform(struct!.userId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_peering_connection_id: cdktf.stringToTerraform(struct!.vpcPeeringConnectionId),
    vpc_ref: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ref: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefToHclTerraform(struct!.groupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef",
    },
    peering_status: {
      value: cdktf.stringToHclTerraform(struct!.peeringStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_peering_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcPeeringConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._groupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRef = this._groupRef?.internalValue;
    }
    if (this._peeringStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringStatus = this._peeringStatus;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcPeeringConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcPeeringConnectionId = this._vpcPeeringConnectionId;
    }
    if (this._vpcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRef = this._vpcRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
      this._groupRef.internalValue = undefined;
      this._peeringStatus = undefined;
      this._userId = undefined;
      this._vpcId = undefined;
      this._vpcPeeringConnectionId = undefined;
      this._vpcRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
      this._groupRef.internalValue = value.groupRef;
      this._peeringStatus = value.peeringStatus;
      this._userId = value.userId;
      this._vpcId = value.vpcId;
      this._vpcPeeringConnectionId = value.vpcPeeringConnectionId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_ref - computed: false, optional: true, required: false
  private _groupRef = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRefOutputReference(this, "group_ref");
  public get groupRef() {
    return this._groupRef;
  }
  public putGroupRef(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsGroupRef) {
    this._groupRef.internalValue = value;
  }
  public resetGroupRef() {
    this._groupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefInput() {
    return this._groupRef.internalValue;
  }

  // peering_status - computed: false, optional: true, required: false
  private _peeringStatus?: string; 
  public get peeringStatus() {
    return this.getStringAttribute('peering_status');
  }
  public set peeringStatus(value: string) {
    this._peeringStatus = value;
  }
  public resetPeeringStatus() {
    this._peeringStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringStatusInput() {
    return this._peeringStatus;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

  // vpc_peering_connection_id - computed: false, optional: true, required: false
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  public resetVpcPeeringConnectionId() {
    this._vpcPeeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // vpc_ref - computed: false, optional: true, required: false
  private _vpcRef = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsVpcRef) {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from_port DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ip_protocol DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ip_ranges DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ip_ranges}
  */
  readonly ipRanges?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ipv6_ranges DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ipv6_ranges}
  */
  readonly ipv6Ranges?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#prefix_list_i_ds DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#prefix_list_i_ds}
  */
  readonly prefixListIDs?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#to_port DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#to_port}
  */
  readonly toPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#user_id_group_pairs DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#user_id_group_pairs}
  */
  readonly userIdGroupPairs?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs[] | cdktf.IResolvable;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ip_ranges: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesToTerraform, false)(struct!.ipRanges),
    ipv6_ranges: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesToTerraform, false)(struct!.ipv6Ranges),
    prefix_list_i_ds: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsToTerraform, false)(struct!.prefixListIDs),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    user_id_group_pairs: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsToTerraform, false)(struct!.userIdGroupPairs),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesToHclTerraform, false)(struct!.ipRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesList",
    },
    ipv6_ranges: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesToHclTerraform, false)(struct!.ipv6Ranges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesList",
    },
    prefix_list_i_ds: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsToHclTerraform, false)(struct!.prefixListIDs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsList",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id_group_pairs: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsToHclTerraform, false)(struct!.userIdGroupPairs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ipRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges?.internalValue;
    }
    if (this._ipv6Ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ranges = this._ipv6Ranges?.internalValue;
    }
    if (this._prefixListIDs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIDs = this._prefixListIDs?.internalValue;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    if (this._userIdGroupPairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdGroupPairs = this._userIdGroupPairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._ipProtocol = undefined;
      this._ipRanges.internalValue = undefined;
      this._ipv6Ranges.internalValue = undefined;
      this._prefixListIDs.internalValue = undefined;
      this._toPort = undefined;
      this._userIdGroupPairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._ipProtocol = value.ipProtocol;
      this._ipRanges.internalValue = value.ipRanges;
      this._ipv6Ranges.internalValue = value.ipv6Ranges;
      this._prefixListIDs.internalValue = value.prefixListIDs;
      this._toPort = value.toPort;
      this._userIdGroupPairs.internalValue = value.userIdGroupPairs;
    }
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // ipv6_ranges - computed: false, optional: true, required: false
  private _ipv6Ranges = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6RangesList(this, "ipv6_ranges", false);
  public get ipv6Ranges() {
    return this._ipv6Ranges;
  }
  public putIpv6Ranges(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesIpv6Ranges[] | cdktf.IResolvable) {
    this._ipv6Ranges.internalValue = value;
  }
  public resetIpv6Ranges() {
    this._ipv6Ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangesInput() {
    return this._ipv6Ranges.internalValue;
  }

  // prefix_list_i_ds - computed: false, optional: true, required: false
  private _prefixListIDs = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDsList(this, "prefix_list_i_ds", false);
  public get prefixListIDs() {
    return this._prefixListIDs;
  }
  public putPrefixListIDs(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesPrefixListIDs[] | cdktf.IResolvable) {
    this._prefixListIDs.internalValue = value;
  }
  public resetPrefixListIDs() {
    this._prefixListIDs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIDsInput() {
    return this._prefixListIDs.internalValue;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }

  // user_id_group_pairs - computed: false, optional: true, required: false
  private _userIdGroupPairs = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairsList(this, "user_id_group_pairs", false);
  public get userIdGroupPairs() {
    return this._userIdGroupPairs;
  }
  public putUserIdGroupPairs(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesUserIdGroupPairs[] | cdktf.IResolvable) {
    this._userIdGroupPairs.internalValue = value;
  }
  public resetUserIdGroupPairs() {
    this._userIdGroupPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdGroupPairsInput() {
    return this._userIdGroupPairs.internalValue;
  }
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#key DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#value DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#namespace DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#from DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefFrom) {
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
export interface DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec {
  /**
  * A description for the security group. This is informational only. Constraints: Up to 255 characters in length Constraints for EC2-Classic: ASCII characters Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#description DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#egress_rules DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#egress_rules}
  */
  readonly egressRules?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#ingress_rules DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#ingress_rules}
  */
  readonly ingressRules?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules[] | cdktf.IResolvable;
  /**
  * The name of the security group. Constraints: Up to 255 characters in length. Cannot start with sg-. Constraints for EC2-Classic: ASCII characters Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#name DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#tags DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * [EC2-VPC] The ID of the VPC. Required for EC2-VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_id DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#vpc_ref DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest#vpc_ref}
  */
  readonly vpcRef?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef;
}

export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    egress_rules: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesToTerraform, false)(struct!.egressRules),
    ingress_rules: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesToTerraform, false)(struct!.ingressRules),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_ref: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefToTerraform(struct!.vpcRef),
  }
}


export function dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_rules: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesToHclTerraform, false)(struct!.egressRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesList",
    },
    ingress_rules: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesToHclTerraform, false)(struct!.ingressRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ref: {
      value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefToHclTerraform(struct!.vpcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._egressRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRules = this._egressRules?.internalValue;
    }
    if (this._ingressRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRules = this._ingressRules?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._egressRules.internalValue = undefined;
      this._ingressRules.internalValue = undefined;
      this._name = undefined;
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
      this._description = value.description;
      this._egressRules.internalValue = value.egressRules;
      this._ingressRules.internalValue = value.ingressRules;
      this._name = value.name;
      this._tags.internalValue = value.tags;
      this._vpcId = value.vpcId;
      this._vpcRef.internalValue = value.vpcRef;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // egress_rules - computed: false, optional: true, required: false
  private _egressRules = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRulesList(this, "egress_rules", false);
  public get egressRules() {
    return this._egressRules;
  }
  public putEgressRules(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecEgressRules[] | cdktf.IResolvable) {
    this._egressRules.internalValue = value;
  }
  public resetEgressRules() {
    this._egressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRulesInput() {
    return this._egressRules.internalValue;
  }

  // ingress_rules - computed: false, optional: true, required: false
  private _ingressRules = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRulesList(this, "ingress_rules", false);
  public get ingressRules() {
    return this._ingressRules;
  }
  public putIngressRules(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecIngressRules[] | cdktf.IResolvable) {
    this._ingressRules.internalValue = value;
  }
  public resetIngressRules() {
    this._ingressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRulesInput() {
    return this._ingressRules.internalValue;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
  private _vpcRef = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRefOutputReference(this, "vpc_ref");
  public get vpcRef() {
    return this._vpcRef;
  }
  public putVpcRef(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecVpcRef) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest k8s_ec2_services_k8s_aws_security_group_v1alpha1_manifest}
*/
export class DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ec2_services_k8s_aws_security_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ec2_services_k8s_aws_security_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/ec2_services_k8s_aws_security_group_v1alpha1_manifest k8s_ec2_services_k8s_aws_security_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ec2_services_k8s_aws_security_group_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEc2ServicesK8SAwsSecurityGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
