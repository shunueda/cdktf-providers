// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#metadata DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata;
  /**
  * ResolverRuleSpec defines the desired state of ResolverRule. For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The ResolverRule parameter appears in the response to a CreateResolverRule (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html), DeleteResolverRule (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html), GetResolverRule (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html), ListResolverRules (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html), or UpdateResolverRule (https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html) request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#spec DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec;
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#annotations DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#labels DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#namespace DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#id DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#resolver_rule_id DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#resolver_rule_id}
  */
  readonly resolverRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#status DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#status_message DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#status_message}
  */
  readonly statusMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#vpc_id DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    resolver_rule_id: cdktf.stringToTerraform(struct!.resolverRuleId),
    status: cdktf.stringToTerraform(struct!.status),
    status_message: cdktf.stringToTerraform(struct!.statusMessage),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    resolver_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.resolverRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_message: {
      value: cdktf.stringToHclTerraform(struct!.statusMessage),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolverRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverRuleId = this._resolverRuleId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMessage = this._statusMessage;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._resolverRuleId = undefined;
      this._status = undefined;
      this._statusMessage = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._resolverRuleId = value.resolverRuleId;
      this._status = value.status;
      this._statusMessage = value.statusMessage;
      this._vpcId = value.vpcId;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
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

  // resolver_rule_id - computed: false, optional: true, required: false
  private _resolverRuleId?: string; 
  public get resolverRuleId() {
    return this.getStringAttribute('resolver_rule_id');
  }
  public set resolverRuleId(value: string) {
    this._resolverRuleId = value;
  }
  public resetResolverRuleId() {
    this._resolverRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverRuleIdInput() {
    return this._resolverRuleId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_message - computed: false, optional: true, required: false
  private _statusMessage?: string; 
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
  public set statusMessage(value: string) {
    this._statusMessage = value;
  }
  public resetStatusMessage() {
    this._statusMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMessageInput() {
    return this._statusMessage;
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
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#key DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#value DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#ip DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#ipv6 DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#port DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsOutputReference {
    return new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#associations DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#associations}
  */
  readonly associations?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations[] | cdktf.IResolvable;
  /**
  * DNS queries for this domain name are forwarded to the IP addresses that you specify in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#domain_name DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#domain_name}
  */
  readonly domainName: string;
  /**
  * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#name DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#resolver_endpoint_id DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#resolver_endpoint_id}
  */
  readonly resolverEndpointId?: string;
  /**
  * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#rule_type DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#rule_type}
  */
  readonly ruleType: string;
  /**
  * A list of the tag keys and values that you want to associate with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#tags DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a space. TargetIps is available only when the value of Rule type is FORWARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#target_i_ps DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest#target_i_ps}
  */
  readonly targetIPs?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs[] | cdktf.IResolvable;
}

export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associations: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsToTerraform, false)(struct!.associations),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    name: cdktf.stringToTerraform(struct!.name),
    resolver_endpoint_id: cdktf.stringToTerraform(struct!.resolverEndpointId),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    tags: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    target_i_ps: cdktf.listMapper(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsToTerraform, false)(struct!.targetIPs),
  }
}


export function dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associations: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsToHclTerraform, false)(struct!.associations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsList",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
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
    resolver_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.resolverEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsList",
    },
    target_i_ps: {
      value: cdktf.listMapperHcl(dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsToHclTerraform, false)(struct!.targetIPs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associations = this._associations?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolverEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverEndpointId = this._resolverEndpointId;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetIPs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIPs = this._targetIPs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associations.internalValue = undefined;
      this._domainName = undefined;
      this._name = undefined;
      this._resolverEndpointId = undefined;
      this._ruleType = undefined;
      this._tags.internalValue = undefined;
      this._targetIPs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associations.internalValue = value.associations;
      this._domainName = value.domainName;
      this._name = value.name;
      this._resolverEndpointId = value.resolverEndpointId;
      this._ruleType = value.ruleType;
      this._tags.internalValue = value.tags;
      this._targetIPs.internalValue = value.targetIPs;
    }
  }

  // associations - computed: false, optional: true, required: false
  private _associations = new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociationsList(this, "associations", false);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  public resetAssociations() {
    this._associations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string; 
  public get resolverEndpointId() {
    return this.getStringAttribute('resolver_endpoint_id');
  }
  public set resolverEndpointId(value: string) {
    this._resolverEndpointId = value;
  }
  public resetResolverEndpointId() {
    this._resolverEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverEndpointIdInput() {
    return this._resolverEndpointId;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_i_ps - computed: false, optional: true, required: false
  private _targetIPs = new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPsList(this, "target_i_ps", false);
  public get targetIPs() {
    return this._targetIPs;
  }
  public putTargetIPs(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecTargetIPs[] | cdktf.IResolvable) {
    this._targetIPs.internalValue = value;
  }
  public resetTargetIPs() {
    this._targetIPs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIPsInput() {
    return this._targetIPs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest k8s_route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest}
*/
export class DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest k8s_route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_route53resolver_services_k8s_aws_resolver_rule_v1alpha1_manifest',
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
  private _metadata = new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ResolverServicesK8SAwsResolverRuleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
