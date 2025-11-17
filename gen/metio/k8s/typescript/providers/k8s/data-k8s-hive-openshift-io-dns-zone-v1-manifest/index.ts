// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#metadata DataK8SHiveOpenshiftIoDnsZoneV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata;
  /**
  * DNSZoneSpec defines the desired state of DNSZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#spec DataK8SHiveOpenshiftIoDnsZoneV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#annotations DataK8SHiveOpenshiftIoDnsZoneV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#labels DataK8SHiveOpenshiftIoDnsZoneV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#namespace DataK8SHiveOpenshiftIoDnsZoneV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags {
  /**
  * Key is the key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#key DataK8SHiveOpenshiftIoDnsZoneV1Manifest#key}
  */
  readonly key: string;
  /**
  * Value is the value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#value DataK8SHiveOpenshiftIoDnsZoneV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsOutputReference {
    return new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole {
  /**
  * ExternalID is random string generated by platform so that assume role is protected from confused deputy problem. more info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#external_id DataK8SHiveOpenshiftIoDnsZoneV1Manifest#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#role_arn DataK8SHiveOpenshiftIoDnsZoneV1Manifest#role_arn}
  */
  readonly roleArn: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws {
  /**
  * AdditionalTags is a set of additional tags to set on the DNS hosted zone. In addition to these tags,the DNS Zone controller will set a hive.openhsift.io/hostedzone tag identifying the HostedZone record that it belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#additional_tags DataK8SHiveOpenshiftIoDnsZoneV1Manifest#additional_tags}
  */
  readonly additionalTags?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags[] | cdktf.IResolvable;
  /**
  * CredentialsAssumeRole refers to the IAM role that must be assumed to obtain AWS account access for the DNS CRUD operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#credentials_assume_role DataK8SHiveOpenshiftIoDnsZoneV1Manifest#credentials_assume_role}
  */
  readonly credentialsAssumeRole?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole;
  /**
  * CredentialsSecretRef contains a reference to a secret that contains AWS credentials for CRUD operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoDnsZoneV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef;
  /**
  * Region is the AWS region to use for route53 operations. This defaults to us-east-1. For AWS China, use cn-northwest-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#region DataK8SHiveOpenshiftIoDnsZoneV1Manifest#region}
  */
  readonly region?: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_tags: cdktf.listMapper(dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsToTerraform, false)(struct!.additionalTags),
    credentials_assume_role: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleToTerraform(struct!.credentialsAssumeRole),
    credentials_secret_ref: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_tags: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsToHclTerraform, false)(struct!.additionalTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsList",
    },
    credentials_assume_role: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleToHclTerraform(struct!.credentialsAssumeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTags = this._additionalTags?.internalValue;
    }
    if (this._credentialsAssumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsAssumeRole = this._credentialsAssumeRole?.internalValue;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalTags.internalValue = undefined;
      this._credentialsAssumeRole.internalValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalTags.internalValue = value.additionalTags;
      this._credentialsAssumeRole.internalValue = value.credentialsAssumeRole;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._region = value.region;
    }
  }

  // additional_tags - computed: false, optional: true, required: false
  private _additionalTags = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTagsList(this, "additional_tags", false);
  public get additionalTags() {
    return this._additionalTags;
  }
  public putAdditionalTags(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsAdditionalTags[] | cdktf.IResolvable) {
    this._additionalTags.internalValue = value;
  }
  public resetAdditionalTags() {
    this._additionalTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags.internalValue;
  }

  // credentials_assume_role - computed: false, optional: true, required: false
  private _credentialsAssumeRole = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRoleOutputReference(this, "credentials_assume_role");
  public get credentialsAssumeRole() {
    return this._credentialsAssumeRole;
  }
  public putCredentialsAssumeRole(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsAssumeRole) {
    this._credentialsAssumeRole.internalValue = value;
  }
  public resetCredentialsAssumeRole() {
    this._credentialsAssumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsAssumeRoleInput() {
    return this._credentialsAssumeRole.internalValue;
  }

  // credentials_secret_ref - computed: false, optional: true, required: false
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  public resetCredentialsSecretRef() {
    this._credentialsSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
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
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure {
  /**
  * CloudName is the name of the Azure cloud environment which can be used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the value is equal to 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#cloud_name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * CredentialsSecretRef references a secret that will be used to authenticate with Azure CloudDNS. It will need permission to create and manage CloudDNS Hosted Zones. Secret should have a key named 'osServicePrincipal.json'. The credentials must specify the project to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoDnsZoneV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef;
  /**
  * ResourceGroupName specifies the Azure resource group in which the Hosted Zone should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#resource_group_name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    credentials_secret_ref: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudName = undefined;
      this._credentialsSecretRef.internalValue = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudName = value.cloudName;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#name DataK8SHiveOpenshiftIoDnsZoneV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp {
  /**
  * CredentialsSecretRef references a secret that will be used to authenticate with GCP CloudDNS. It will need permission to create and manage CloudDNS Hosted Zones. Secret should have a key named 'osServiceAccount.json'. The credentials must specify the project to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#credentials_secret_ref DataK8SHiveOpenshiftIoDnsZoneV1Manifest#credentials_secret_ref}
  */
  readonly credentialsSecretRef: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_secret_ref: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefToTerraform(struct!.credentialsSecretRef),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_secret_ref: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefToHclTerraform(struct!.credentialsSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretRef = this._credentialsSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsSecretRef.internalValue = value.credentialsSecretRef;
    }
  }

  // credentials_secret_ref - computed: false, optional: false, required: true
  private _credentialsSecretRef = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRefOutputReference(this, "credentials_secret_ref");
  public get credentialsSecretRef() {
    return this._credentialsSecretRef;
  }
  public putCredentialsSecretRef(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpCredentialsSecretRef) {
    this._credentialsSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretRefInput() {
    return this._credentialsSecretRef.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec {
  /**
  * AWS specifies AWS-specific cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#aws DataK8SHiveOpenshiftIoDnsZoneV1Manifest#aws}
  */
  readonly aws?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws;
  /**
  * Azure specifes Azure-specific cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#azure DataK8SHiveOpenshiftIoDnsZoneV1Manifest#azure}
  */
  readonly azure?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure;
  /**
  * GCP specifies GCP-specific cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#gcp DataK8SHiveOpenshiftIoDnsZoneV1Manifest#gcp}
  */
  readonly gcp?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp;
  /**
  * LinkToParentDomain specifies whether DNS records should be automatically created to link this DNSZone with a parent domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#link_to_parent_domain DataK8SHiveOpenshiftIoDnsZoneV1Manifest#link_to_parent_domain}
  */
  readonly linkToParentDomain?: boolean | cdktf.IResolvable;
  /**
  * PreserveOnDelete allows the user to disconnect a DNSZone from Hive without deprovisioning it. This can also be used to abandon ongoing DNSZone deprovision. Typically set automatically due to PreserveOnDelete being set on a ClusterDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#preserve_on_delete DataK8SHiveOpenshiftIoDnsZoneV1Manifest#preserve_on_delete}
  */
  readonly preserveOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Zone is the DNS zone to host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#zone DataK8SHiveOpenshiftIoDnsZoneV1Manifest#zone}
  */
  readonly zone: string;
}

export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsToTerraform(struct!.aws),
    azure: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureToTerraform(struct!.azure),
    gcp: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpToTerraform(struct!.gcp),
    link_to_parent_domain: cdktf.booleanToTerraform(struct!.linkToParentDomain),
    preserve_on_delete: cdktf.booleanToTerraform(struct!.preserveOnDelete),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws",
    },
    azure: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure",
    },
    gcp: {
      value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp",
    },
    link_to_parent_domain: {
      value: cdktf.booleanToHclTerraform(struct!.linkToParentDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.preserveOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._linkToParentDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkToParentDomain = this._linkToParentDomain;
    }
    if (this._preserveOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveOnDelete = this._preserveOnDelete;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._linkToParentDomain = undefined;
      this._preserveOnDelete = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
      this._linkToParentDomain = value.linkToParentDomain;
      this._preserveOnDelete = value.preserveOnDelete;
      this._zone = value.zone;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // link_to_parent_domain - computed: false, optional: true, required: false
  private _linkToParentDomain?: boolean | cdktf.IResolvable; 
  public get linkToParentDomain() {
    return this.getBooleanAttribute('link_to_parent_domain');
  }
  public set linkToParentDomain(value: boolean | cdktf.IResolvable) {
    this._linkToParentDomain = value;
  }
  public resetLinkToParentDomain() {
    this._linkToParentDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkToParentDomainInput() {
    return this._linkToParentDomain;
  }

  // preserve_on_delete - computed: false, optional: true, required: false
  private _preserveOnDelete?: boolean | cdktf.IResolvable; 
  public get preserveOnDelete() {
    return this.getBooleanAttribute('preserve_on_delete');
  }
  public set preserveOnDelete(value: boolean | cdktf.IResolvable) {
    this._preserveOnDelete = value;
  }
  public resetPreserveOnDelete() {
    this._preserveOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveOnDeleteInput() {
    return this._preserveOnDelete;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest k8s_hive_openshift_io_dns_zone_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoDnsZoneV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_dns_zone_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoDnsZoneV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoDnsZoneV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoDnsZoneV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoDnsZoneV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_dns_zone_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/hive_openshift_io_dns_zone_v1_manifest k8s_hive_openshift_io_dns_zone_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoDnsZoneV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoDnsZoneV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_dns_zone_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoDnsZoneV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoDnsZoneV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
