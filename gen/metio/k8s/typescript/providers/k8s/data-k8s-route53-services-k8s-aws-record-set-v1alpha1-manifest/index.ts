// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#metadata DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata;
  /**
  * RecordSetSpec defines the desired state of RecordSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#spec DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec;
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#annotations DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#labels DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#namespace DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#dns_name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#evaluate_target_health DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#hosted_zone_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate_target_health: {
      value: cdktf.booleanToHclTerraform(struct!.evaluateTargetHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._evaluateTargetHealth = undefined;
      this._hostedZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._hostedZoneId = value.hostedZoneId;
    }
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // hosted_zone_id - computed: false, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#dns_name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#evaluate_target_health DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#evaluate_target_health}
  */
  readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#hosted_zone_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate_target_health: {
      value: cdktf.booleanToHclTerraform(struct!.evaluateTargetHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._evaluateTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateTargetHealth = this._evaluateTargetHealth;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._evaluateTargetHealth = undefined;
      this._hostedZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._evaluateTargetHealth = value.evaluateTargetHealth;
      this._hostedZoneId = value.hostedZoneId;
    }
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // evaluate_target_health - computed: false, optional: true, required: false
  private _evaluateTargetHealth?: boolean | cdktf.IResolvable; 
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }
  public set evaluateTargetHealth(value: boolean | cdktf.IResolvable) {
    this._evaluateTargetHealth = value;
  }
  public resetEvaluateTargetHealth() {
    this._evaluateTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateTargetHealthInput() {
    return this._evaluateTargetHealth;
  }

  // hosted_zone_id - computed: false, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#collection_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#collection_id}
  */
  readonly collectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#location_name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#location_name}
  */
  readonly locationName?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_id: cdktf.stringToTerraform(struct!.collectionId),
    location_name: cdktf.stringToTerraform(struct!.locationName),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_id: {
      value: cdktf.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionId = undefined;
      this._locationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionId = value.collectionId;
      this._locationName = value.locationName;
    }
  }

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#continent_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#continent_code}
  */
  readonly continentCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#country_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#subdivision_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#subdivision_code}
  */
  readonly subdivisionCode?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent_code: cdktf.stringToTerraform(struct!.continentCode),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    subdivision_code: cdktf.stringToTerraform(struct!.subdivisionCode),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continent_code: {
      value: cdktf.stringToHclTerraform(struct!.continentCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivision_code: {
      value: cdktf.stringToHclTerraform(struct!.subdivisionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continentCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.continentCode = this._continentCode;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._subdivisionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivisionCode = this._subdivisionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continentCode = undefined;
      this._countryCode = undefined;
      this._subdivisionCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continentCode = value.continentCode;
      this._countryCode = value.countryCode;
      this._subdivisionCode = value.subdivisionCode;
    }
  }

  // continent_code - computed: false, optional: true, required: false
  private _continentCode?: string; 
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }
  public set continentCode(value: string) {
    this._continentCode = value;
  }
  public resetContinentCode() {
    this._continentCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentCodeInput() {
    return this._continentCode;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // subdivision_code - computed: false, optional: true, required: false
  private _subdivisionCode?: string; 
  public get subdivisionCode() {
    return this.getStringAttribute('subdivision_code');
  }
  public set subdivisionCode(value: string) {
    this._subdivisionCode = value;
  }
  public resetSubdivisionCode() {
    this._subdivisionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionCodeInput() {
    return this._subdivisionCode;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#value DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsOutputReference {
    return new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet {
  /**
  * Alias resource record sets only: Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. When creating resource record sets for a private hosted zone, note the following: * For information about creating failover resource record sets in a private hosted zone, see Configuring Failover in a Private Hosted Zone (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#alias_target DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#alias_target}
  */
  readonly aliasTarget?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget;
  /**
  * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location. A LocationName with an asterisk “*” can be used to create a default CIDR record. CollectionId is still required for default record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#cidr_routing_config DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#cidr_routing_config}
  */
  readonly cidrRoutingConfig?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#failover DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#failover}
  */
  readonly failover?: string;
  /**
  * A complex type that contains information about a geographic location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#geo_location DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#geo_location}
  */
  readonly geoLocation?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#health_check_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#multi_value_answer DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#multi_value_answer}
  */
  readonly multiValueAnswer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#region DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#resource_records DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#resource_records}
  */
  readonly resourceRecords?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#set_identifier DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#traffic_policy_instance_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#traffic_policy_instance_id}
  */
  readonly trafficPolicyInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#ttl DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#type_ DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#weight DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_target: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetToTerraform(struct!.aliasTarget),
    cidr_routing_config: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigToTerraform(struct!.cidrRoutingConfig),
    failover: cdktf.stringToTerraform(struct!.failover),
    geo_location: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationToTerraform(struct!.geoLocation),
    health_check_id: cdktf.stringToTerraform(struct!.healthCheckId),
    multi_value_answer: cdktf.booleanToTerraform(struct!.multiValueAnswer),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    resource_records: cdktf.listMapper(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsToTerraform, false)(struct!.resourceRecords),
    set_identifier: cdktf.stringToTerraform(struct!.setIdentifier),
    traffic_policy_instance_id: cdktf.stringToTerraform(struct!.trafficPolicyInstanceId),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type_: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_target: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetToHclTerraform(struct!.aliasTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget",
    },
    cidr_routing_config: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigToHclTerraform(struct!.cidrRoutingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig",
    },
    failover: {
      value: cdktf.stringToHclTerraform(struct!.failover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationToHclTerraform(struct!.geoLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation",
    },
    health_check_id: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_answer: {
      value: cdktf.booleanToHclTerraform(struct!.multiValueAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_records: {
      value: cdktf.listMapperHcl(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsToHclTerraform, false)(struct!.resourceRecords),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsList",
    },
    set_identifier: {
      value: cdktf.stringToHclTerraform(struct!.setIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_policy_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.trafficPolicyInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasTarget = this._aliasTarget?.internalValue;
    }
    if (this._cidrRoutingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRoutingConfig = this._cidrRoutingConfig?.internalValue;
    }
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._geoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation?.internalValue;
    }
    if (this._healthCheckId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckId = this._healthCheckId;
    }
    if (this._multiValueAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueAnswer = this._multiValueAnswer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecords = this._resourceRecords?.internalValue;
    }
    if (this._setIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIdentifier = this._setIdentifier;
    }
    if (this._trafficPolicyInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPolicyInstanceId = this._trafficPolicyInstanceId;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasTarget.internalValue = undefined;
      this._cidrRoutingConfig.internalValue = undefined;
      this._failover = undefined;
      this._geoLocation.internalValue = undefined;
      this._healthCheckId = undefined;
      this._multiValueAnswer = undefined;
      this._name = undefined;
      this._region = undefined;
      this._resourceRecords.internalValue = undefined;
      this._setIdentifier = undefined;
      this._trafficPolicyInstanceId = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasTarget.internalValue = value.aliasTarget;
      this._cidrRoutingConfig.internalValue = value.cidrRoutingConfig;
      this._failover = value.failover;
      this._geoLocation.internalValue = value.geoLocation;
      this._healthCheckId = value.healthCheckId;
      this._multiValueAnswer = value.multiValueAnswer;
      this._name = value.name;
      this._region = value.region;
      this._resourceRecords.internalValue = value.resourceRecords;
      this._setIdentifier = value.setIdentifier;
      this._trafficPolicyInstanceId = value.trafficPolicyInstanceId;
      this._ttl = value.ttl;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // alias_target - computed: false, optional: true, required: false
  private _aliasTarget = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTargetOutputReference(this, "alias_target");
  public get aliasTarget() {
    return this._aliasTarget;
  }
  public putAliasTarget(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetAliasTarget) {
    this._aliasTarget.internalValue = value;
  }
  public resetAliasTarget() {
    this._aliasTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasTargetInput() {
    return this._aliasTarget.internalValue;
  }

  // cidr_routing_config - computed: false, optional: true, required: false
  private _cidrRoutingConfig = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfigOutputReference(this, "cidr_routing_config");
  public get cidrRoutingConfig() {
    return this._cidrRoutingConfig;
  }
  public putCidrRoutingConfig(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetCidrRoutingConfig) {
    this._cidrRoutingConfig.internalValue = value;
  }
  public resetCidrRoutingConfig() {
    this._cidrRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRoutingConfigInput() {
    return this._cidrRoutingConfig.internalValue;
  }

  // failover - computed: false, optional: true, required: false
  private _failover?: string; 
  public get failover() {
    return this.getStringAttribute('failover');
  }
  public set failover(value: string) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocationOutputReference(this, "geo_location");
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetGeoLocation) {
    this._geoLocation.internalValue = value;
  }
  public resetGeoLocation() {
    this._geoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string; 
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }
  public set healthCheckId(value: string) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
  }

  // multi_value_answer - computed: false, optional: true, required: false
  private _multiValueAnswer?: boolean | cdktf.IResolvable; 
  public get multiValueAnswer() {
    return this.getBooleanAttribute('multi_value_answer');
  }
  public set multiValueAnswer(value: boolean | cdktf.IResolvable) {
    this._multiValueAnswer = value;
  }
  public resetMultiValueAnswer() {
    this._multiValueAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueAnswerInput() {
    return this._multiValueAnswer;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_records - computed: false, optional: true, required: false
  private _resourceRecords = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecordsList(this, "resource_records", false);
  public get resourceRecords() {
    return this._resourceRecords;
  }
  public putResourceRecords(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetResourceRecords[] | cdktf.IResolvable) {
    this._resourceRecords.internalValue = value;
  }
  public resetResourceRecords() {
    this._resourceRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordsInput() {
    return this._resourceRecords.internalValue;
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // traffic_policy_instance_id - computed: false, optional: true, required: false
  private _trafficPolicyInstanceId?: string; 
  public get trafficPolicyInstanceId() {
    return this.getStringAttribute('traffic_policy_instance_id');
  }
  public set trafficPolicyInstanceId(value: string) {
    this._trafficPolicyInstanceId = value;
  }
  public resetTrafficPolicyInstanceId() {
    this._trafficPolicyInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInstanceIdInput() {
    return this._trafficPolicyInstanceId;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#action DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#action}
  */
  readonly action?: string;
  /**
  * Information about the resource record set to create or delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#resource_record_set DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#resource_record_set}
  */
  readonly resourceRecordSet?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    resource_record_set: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetToTerraform(struct!.resourceRecordSet),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_record_set: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetToHclTerraform(struct!.resourceRecordSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._resourceRecordSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecordSet = this._resourceRecordSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._resourceRecordSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._resourceRecordSet.internalValue = value.resourceRecordSet;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // resource_record_set - computed: false, optional: true, required: false
  private _resourceRecordSet = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSetOutputReference(this, "resource_record_set");
  public get resourceRecordSet() {
    return this._resourceRecordSet;
  }
  public putResourceRecordSet(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesResourceRecordSet) {
    this._resourceRecordSet.internalValue = value;
  }
  public resetResourceRecordSet() {
    this._resourceRecordSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordSetInput() {
    return this._resourceRecordSet.internalValue;
  }
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesOutputReference {
    return new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#changes DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#changes}
  */
  readonly changes?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#comment DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#comment}
  */
  readonly comment?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changes: cdktf.listMapper(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesToTerraform, false)(struct!.changes),
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changes: {
      value: cdktf.listMapperHcl(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesToHclTerraform, false)(struct!.changes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changes = this._changes?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changes.internalValue = undefined;
      this._comment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changes.internalValue = value.changes;
      this._comment = value.comment;
    }
  }

  // changes - computed: false, optional: true, required: false
  private _changes = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChangesList(this, "changes", false);
  public get changes() {
    return this._changes;
  }
  public putChanges(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchChanges[] | cdktf.IResolvable) {
    this._changes.internalValue = value;
  }
  public resetChanges() {
    this._changes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesInput() {
    return this._changes.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#collection_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#collection_id}
  */
  readonly collectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#location_name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#location_name}
  */
  readonly locationName?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_id: cdktf.stringToTerraform(struct!.collectionId),
    location_name: cdktf.stringToTerraform(struct!.locationName),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_id: {
      value: cdktf.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionId = undefined;
      this._locationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionId = value.collectionId;
      this._locationName = value.locationName;
    }
  }

  // collection_id - computed: false, optional: true, required: false
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  public resetCollectionId() {
    this._collectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#continent_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#continent_code}
  */
  readonly continentCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#country_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#subdivision_code DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#subdivision_code}
  */
  readonly subdivisionCode?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent_code: cdktf.stringToTerraform(struct!.continentCode),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    subdivision_code: cdktf.stringToTerraform(struct!.subdivisionCode),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continent_code: {
      value: cdktf.stringToHclTerraform(struct!.continentCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdivision_code: {
      value: cdktf.stringToHclTerraform(struct!.subdivisionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continentCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.continentCode = this._continentCode;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._subdivisionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdivisionCode = this._subdivisionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continentCode = undefined;
      this._countryCode = undefined;
      this._subdivisionCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continentCode = value.continentCode;
      this._countryCode = value.countryCode;
      this._subdivisionCode = value.subdivisionCode;
    }
  }

  // continent_code - computed: false, optional: true, required: false
  private _continentCode?: string; 
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }
  public set continentCode(value: string) {
    this._continentCode = value;
  }
  public resetContinentCode() {
    this._continentCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentCodeInput() {
    return this._continentCode;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // subdivision_code - computed: false, optional: true, required: false
  private _subdivisionCode?: string; 
  public get subdivisionCode() {
    return this.getStringAttribute('subdivision_code');
  }
  public set subdivisionCode(value: string) {
    this._subdivisionCode = value;
  }
  public resetSubdivisionCode() {
    this._subdivisionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdivisionCodeInput() {
    return this._subdivisionCode;
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#namespace DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#from DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefFrom) {
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
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#value DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsOutputReference {
    return new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec {
  /**
  * Alias resource record sets only: Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. If you're creating resource records sets for a private hosted zone, note the following: * You can't create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution. * For information about creating failover resource record sets in a private hosted zone, see Configuring Failover in a Private Hosted Zone (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) in the Amazon Route 53 Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#alias_target DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#alias_target}
  */
  readonly aliasTarget?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget;
  /**
  * A complex type that contains an optional comment and the Changes element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#change_batch DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#change_batch}
  */
  readonly changeBatch?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch;
  /**
  * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location. A LocationName with an asterisk “*” can be used to create a default CIDR record. CollectionId is still required for default record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#cidr_routing_config DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#cidr_routing_config}
  */
  readonly cidrRoutingConfig?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig;
  /**
  * Failover resource record sets only: To configure failover, you add the Failover element to two resource record sets. For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set. Except where noted, the following failover behaviors assume that you have included the HealthCheckId element in both resource record sets: * When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set. * When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the secondary resource record set. * When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set. * If you omit the HealthCheckId element for the secondary resource record set, and if the primary resource record set is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint. You can't create non-failover resource record sets that have the same values for the Name and Type elements as failover resource record sets. For failover alias resource record sets, you must also include the EvaluateTargetHealth element and set the value to true. For more information about configuring failover for Route 53, see the following topics in the Amazon Route 53 Developer Guide: * Route 53 Health Checks and DNS Failover (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) * Configuring Failover in a Private Hosted Zone (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#failover DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#failover}
  */
  readonly failover?: string;
  /**
  * Geolocation resource record sets only: A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of 192.0.2.111, create a resource record set with a Type of A and a ContinentCode of AF. Although creating geolocation and geolocation alias resource record sets in a private hosted zone is allowed, it's not supported. If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource. You can't create two geolocation resource record sets that specify the same geographic location. The value * in the CountryCode element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the Name and Type elements. Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of CountryCode is *. Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a * resource record set, Route 53 returns a 'no answer' response for queries from those locations. You can't create non-geolocation resource record sets that have the same values for the Name and Type elements as geolocation resource record sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#geo_location DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#geo_location}
  */
  readonly geoLocation?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation;
  /**
  * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check. Route 53 determines whether a resource record set is healthy based on one of the following: * By periodically sending a request to the endpoint that is specified in the health check * By aggregating the status of a specified group of health checks (calculated health checks) * By determining the current state of a CloudWatch alarm (CloudWatch metric health checks) Route 53 doesn't check the health of the endpoint that is specified in the resource record set, for example, the endpoint specified by the IP address in the Value element. When you add a HealthCheckId element to a resource record set, Route 53 checks the health of the endpoint that you specified in the health check. For more information, see the following topics in the Amazon Route 53 Developer Guide: * How Amazon Route 53 Determines Whether an Endpoint Is Healthy (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) * Route 53 Health Checks and DNS Failover (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) * Configuring Failover in a Private Hosted Zone (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) When to Specify HealthCheckId Specifying a value for HealthCheckId is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations: * Non-alias resource record sets: You're checking the health of a group of non-alias resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A) and you specify health check IDs for all the resource record sets. If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it responds to DNS queries with. If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value for that resource record set. If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets in the group healthy and responds to DNS queries accordingly. * Alias resource record sets: You specify the following settings: You set EvaluateTargetHealth to true for an alias resource record set in a group of resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A). You configure the alias resource record set to route traffic to a non-alias resource record set in the same hosted zone. You specify a health check ID for the non-alias resource record set. If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the alias record among the records that it responds to DNS queries with. If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set. The alias resource record set can also route traffic to a group of non-alias resource record sets that have the same routing policy, name, and type. In that configuration, associate health checks with all of the resource record sets in the group of non-alias resource record sets. Geolocation Routing For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has * for CountryCode is *, which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy: * The United States * North America * The default resource record set Specifying the Health Check Endpoint by Domain Name If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com). Health check results will be unpredictable if you do the following: * Create a health check that has the same value for FullyQualifiedDomainName as the name of a resource record set. * Associate that health check with the resource record set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#health_check_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * The ID of the hosted zone that contains the resource record sets that you want to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#hosted_zone_id DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#hosted_zone_ref DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#hosted_zone_ref}
  */
  readonly hostedZoneRef?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef;
  /**
  * Multivalue answer resource record sets only: To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. Note the following: * If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy. * If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy. * Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records. * If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records. * When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records. * If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response. You can't create multivalue answer alias records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#multi_value_answer DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#multi_value_answer}
  */
  readonly multiValueAnswer?: boolean | cdktf.IResolvable;
  /**
  * For ChangeResourceRecordSets requests, the name of the record that you want to create, update, or delete. For ListResourceRecordSets responses, the name of a record in the specified hosted zone. ChangeResourceRecordSets Only Enter a fully qualified domain name, for example, www.example.com. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see DNS Domain Name Format (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the Amazon Route 53 Developer Guide. You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, *.example.com. Note the following: * The * must replace the entire label. For example, you can't specify *prod.example.com or prod*.example.com. * The * can't replace any of the middle labels, for example, marketing.*.example.com. * If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard. You can't use the * wildcard for resource records sets that have a type of NS. You can use the * wildcard as the leftmost label in a domain name, for example, *.example.com. You can't use an * for one of the middle labels, for example, marketing.*.example.com. In addition, the * must replace the entire label; for example, you can't specify prod*.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The DNS record type. For information about different record types and how data is encoded for them, see Supported DNS Resource Record Types (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the Amazon Route 53 Developer Guide. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | DS |MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group. Valid values for multivalue answer resource record sets: A | AAAA | MX | NAPTR | PTR | SPF | SRV | TXT SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of Type is SPF. RFC 7208, Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1, has been updated to say, '...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it.' In RFC 7208, see section 14.1, The SPF DNS Record Type (http://tools.ietf.org/html/rfc7208#section-14.1). Values for alias resource record sets: * Amazon API Gateway custom regional APIs and edge-optimized APIs: A * CloudFront distributions: A If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of A and one with a value of AAAA. * Amazon API Gateway environment that has a regionalized subdomain: A * ELB load balancers: A | AAAA * Amazon S3 buckets: A * Amazon Virtual Private Cloud interface VPC endpoints A * Another resource record set in this hosted zone: Specify the type of the resource record set that you're creating the alias for. All values are supported except NS and SOA. If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't route traffic to a record for which the value of Type is CNAME. This is because the alias record must have the same type as the record you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#record_type DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#record_type}
  */
  readonly recordType: string;
  /**
  * Latency-based resource record sets only: The Amazon EC2 Region where you created the resource that this resource record set refers to. The resource typically is an Amazon Web Services resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type. When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set. Note the following: * You can only specify one ResourceRecord per latency resource record set. * You can only create one latency resource record set for each Amazon EC2 Region. * You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for. * You can't create non-latency resource record sets that have the same values for the Name and Type elements as latency resource record sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#region DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Information about the resource records to act upon. If you're creating an alias resource record set, omit ResourceRecords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#resource_records DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#resource_records}
  */
  readonly resourceRecords?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords[] | cdktf.IResolvable;
  /**
  * Resource record sets that have a routing policy other than simple: An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of SetIdentifier must be unique for each resource record set. For information about routing policies, see Choosing a Routing Policy (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) in the Amazon Route 53 Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#set_identifier DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * The resource record cache time to live (TTL), in seconds. Note the following: * If you're creating or updating an alias resource record set, omit TTL. Amazon Route 53 uses the value of TTL for the alias target. * If you're associating this resource record set with a health check (if you're adding a HealthCheckId element), we recommend that you specify a TTL of 60 seconds or less so clients respond quickly to changes in health status. * All of the resource record sets in a group of weighted resource record sets must have the same value for TTL. * If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a TTL of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#ttl DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#ttl}
  */
  readonly ttl?: number;
  /**
  * Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following: * You must specify a value for the Weight element for every weighted resource record set. * You can only specify one ResourceRecord per weighted resource record set. * You can't create latency, failover, or geolocation resource record sets that have the same values for the Name and Type elements as weighted resource record sets. * You can create a maximum of 100 weighted resource record sets that have the same values for the Name and Type elements. * For weighted (but not weighted alias) resource record sets, if you set Weight to 0 for a resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set Weight to 0 for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability. The effect of setting Weight to 0 is different when you associate health checks with weighted resource record sets. For more information, see Options for Configuring Route 53 Active-Active and Active-Passive Failover (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html) in the Amazon Route 53 Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#weight DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_target: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetToTerraform(struct!.aliasTarget),
    change_batch: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchToTerraform(struct!.changeBatch),
    cidr_routing_config: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigToTerraform(struct!.cidrRoutingConfig),
    failover: cdktf.stringToTerraform(struct!.failover),
    geo_location: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationToTerraform(struct!.geoLocation),
    health_check_id: cdktf.stringToTerraform(struct!.healthCheckId),
    hosted_zone_id: cdktf.stringToTerraform(struct!.hostedZoneId),
    hosted_zone_ref: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefToTerraform(struct!.hostedZoneRef),
    multi_value_answer: cdktf.booleanToTerraform(struct!.multiValueAnswer),
    name: cdktf.stringToTerraform(struct!.name),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    region: cdktf.stringToTerraform(struct!.region),
    resource_records: cdktf.listMapper(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsToTerraform, false)(struct!.resourceRecords),
    set_identifier: cdktf.stringToTerraform(struct!.setIdentifier),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_target: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetToHclTerraform(struct!.aliasTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget",
    },
    change_batch: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchToHclTerraform(struct!.changeBatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch",
    },
    cidr_routing_config: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigToHclTerraform(struct!.cidrRoutingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig",
    },
    failover: {
      value: cdktf.stringToHclTerraform(struct!.failover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationToHclTerraform(struct!.geoLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation",
    },
    health_check_id: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.hostedZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_ref: {
      value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefToHclTerraform(struct!.hostedZoneRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef",
    },
    multi_value_answer: {
      value: cdktf.booleanToHclTerraform(struct!.multiValueAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_records: {
      value: cdktf.listMapperHcl(dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsToHclTerraform, false)(struct!.resourceRecords),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsList",
    },
    set_identifier: {
      value: cdktf.stringToHclTerraform(struct!.setIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasTarget = this._aliasTarget?.internalValue;
    }
    if (this._changeBatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeBatch = this._changeBatch?.internalValue;
    }
    if (this._cidrRoutingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRoutingConfig = this._cidrRoutingConfig?.internalValue;
    }
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._geoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation?.internalValue;
    }
    if (this._healthCheckId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckId = this._healthCheckId;
    }
    if (this._hostedZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneId = this._hostedZoneId;
    }
    if (this._hostedZoneRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneRef = this._hostedZoneRef?.internalValue;
    }
    if (this._multiValueAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueAnswer = this._multiValueAnswer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRecords = this._resourceRecords?.internalValue;
    }
    if (this._setIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIdentifier = this._setIdentifier;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasTarget.internalValue = undefined;
      this._changeBatch.internalValue = undefined;
      this._cidrRoutingConfig.internalValue = undefined;
      this._failover = undefined;
      this._geoLocation.internalValue = undefined;
      this._healthCheckId = undefined;
      this._hostedZoneId = undefined;
      this._hostedZoneRef.internalValue = undefined;
      this._multiValueAnswer = undefined;
      this._name = undefined;
      this._recordType = undefined;
      this._region = undefined;
      this._resourceRecords.internalValue = undefined;
      this._setIdentifier = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasTarget.internalValue = value.aliasTarget;
      this._changeBatch.internalValue = value.changeBatch;
      this._cidrRoutingConfig.internalValue = value.cidrRoutingConfig;
      this._failover = value.failover;
      this._geoLocation.internalValue = value.geoLocation;
      this._healthCheckId = value.healthCheckId;
      this._hostedZoneId = value.hostedZoneId;
      this._hostedZoneRef.internalValue = value.hostedZoneRef;
      this._multiValueAnswer = value.multiValueAnswer;
      this._name = value.name;
      this._recordType = value.recordType;
      this._region = value.region;
      this._resourceRecords.internalValue = value.resourceRecords;
      this._setIdentifier = value.setIdentifier;
      this._ttl = value.ttl;
      this._weight = value.weight;
    }
  }

  // alias_target - computed: false, optional: true, required: false
  private _aliasTarget = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTargetOutputReference(this, "alias_target");
  public get aliasTarget() {
    return this._aliasTarget;
  }
  public putAliasTarget(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecAliasTarget) {
    this._aliasTarget.internalValue = value;
  }
  public resetAliasTarget() {
    this._aliasTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasTargetInput() {
    return this._aliasTarget.internalValue;
  }

  // change_batch - computed: false, optional: true, required: false
  private _changeBatch = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatchOutputReference(this, "change_batch");
  public get changeBatch() {
    return this._changeBatch;
  }
  public putChangeBatch(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecChangeBatch) {
    this._changeBatch.internalValue = value;
  }
  public resetChangeBatch() {
    this._changeBatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeBatchInput() {
    return this._changeBatch.internalValue;
  }

  // cidr_routing_config - computed: false, optional: true, required: false
  private _cidrRoutingConfig = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfigOutputReference(this, "cidr_routing_config");
  public get cidrRoutingConfig() {
    return this._cidrRoutingConfig;
  }
  public putCidrRoutingConfig(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecCidrRoutingConfig) {
    this._cidrRoutingConfig.internalValue = value;
  }
  public resetCidrRoutingConfig() {
    this._cidrRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRoutingConfigInput() {
    return this._cidrRoutingConfig.internalValue;
  }

  // failover - computed: false, optional: true, required: false
  private _failover?: string; 
  public get failover() {
    return this.getStringAttribute('failover');
  }
  public set failover(value: string) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocationOutputReference(this, "geo_location");
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecGeoLocation) {
    this._geoLocation.internalValue = value;
  }
  public resetGeoLocation() {
    this._geoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string; 
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }
  public set healthCheckId(value: string) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
  }

  // hosted_zone_id - computed: false, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // hosted_zone_ref - computed: false, optional: true, required: false
  private _hostedZoneRef = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRefOutputReference(this, "hosted_zone_ref");
  public get hostedZoneRef() {
    return this._hostedZoneRef;
  }
  public putHostedZoneRef(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecHostedZoneRef) {
    this._hostedZoneRef.internalValue = value;
  }
  public resetHostedZoneRef() {
    this._hostedZoneRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneRefInput() {
    return this._hostedZoneRef.internalValue;
  }

  // multi_value_answer - computed: false, optional: true, required: false
  private _multiValueAnswer?: boolean | cdktf.IResolvable; 
  public get multiValueAnswer() {
    return this.getBooleanAttribute('multi_value_answer');
  }
  public set multiValueAnswer(value: boolean | cdktf.IResolvable) {
    this._multiValueAnswer = value;
  }
  public resetMultiValueAnswer() {
    this._multiValueAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueAnswerInput() {
    return this._multiValueAnswer;
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

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_records - computed: false, optional: true, required: false
  private _resourceRecords = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecordsList(this, "resource_records", false);
  public get resourceRecords() {
    return this._resourceRecords;
  }
  public putResourceRecords(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecResourceRecords[] | cdktf.IResolvable) {
    this._resourceRecords.internalValue = value;
  }
  public resetResourceRecords() {
    this._resourceRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordsInput() {
    return this._resourceRecords.internalValue;
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest k8s_route53_services_k8s_aws_record_set_v1alpha1_manifest}
*/
export class DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_route53_services_k8s_aws_record_set_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_route53_services_k8s_aws_record_set_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/route53_services_k8s_aws_record_set_v1alpha1_manifest k8s_route53_services_k8s_aws_record_set_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_route53_services_k8s_aws_record_set_v1alpha1_manifest',
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
  private _metadata = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ServicesK8SAwsRecordSetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
