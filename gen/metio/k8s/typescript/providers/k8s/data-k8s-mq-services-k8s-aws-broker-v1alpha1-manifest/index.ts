// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#metadata DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata;
  /**
  * BrokerSpec defines the desired state of Broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#spec DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec;
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#annotations DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#labels DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#namespace DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#id DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#revision DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#revision}
  */
  readonly revision?: number;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration | cdktf.IResolvable): any {
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
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._revision = value.revision;
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

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#kms_key_id DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#use_aws_owned_key DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#use_aws_owned_key}
  */
  readonly useAwsOwnedKey?: boolean | cdktf.IResolvable;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    use_aws_owned_key: cdktf.booleanToTerraform(struct!.useAwsOwnedKey),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aws_owned_key: {
      value: cdktf.booleanToHclTerraform(struct!.useAwsOwnedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._useAwsOwnedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAwsOwnedKey = this._useAwsOwnedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._useAwsOwnedKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._useAwsOwnedKey = value.useAwsOwnedKey;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // use_aws_owned_key - computed: false, optional: true, required: false
  private _useAwsOwnedKey?: boolean | cdktf.IResolvable; 
  public get useAwsOwnedKey() {
    return this.getBooleanAttribute('use_aws_owned_key');
  }
  public set useAwsOwnedKey(value: boolean | cdktf.IResolvable) {
    this._useAwsOwnedKey = value;
  }
  public resetUseAwsOwnedKey() {
    this._useAwsOwnedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsOwnedKeyInput() {
    return this._useAwsOwnedKey;
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#hosts DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#role_base DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#role_base}
  */
  readonly roleBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#role_name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#role_search_matching DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#role_search_matching}
  */
  readonly roleSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#role_search_subtree DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#role_search_subtree}
  */
  readonly roleSearchSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#service_account_password DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#service_account_password}
  */
  readonly serviceAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#service_account_username DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#service_account_username}
  */
  readonly serviceAccountUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#user_base DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#user_base}
  */
  readonly userBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#user_role_name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#user_role_name}
  */
  readonly userRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#user_search_matching DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#user_search_matching}
  */
  readonly userSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#user_search_subtree DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#user_search_subtree}
  */
  readonly userSearchSubtree?: boolean | cdktf.IResolvable;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    role_base: cdktf.stringToTerraform(struct!.roleBase),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    role_search_matching: cdktf.stringToTerraform(struct!.roleSearchMatching),
    role_search_subtree: cdktf.booleanToTerraform(struct!.roleSearchSubtree),
    service_account_password: cdktf.stringToTerraform(struct!.serviceAccountPassword),
    service_account_username: cdktf.stringToTerraform(struct!.serviceAccountUsername),
    user_base: cdktf.stringToTerraform(struct!.userBase),
    user_role_name: cdktf.stringToTerraform(struct!.userRoleName),
    user_search_matching: cdktf.stringToTerraform(struct!.userSearchMatching),
    user_search_subtree: cdktf.booleanToTerraform(struct!.userSearchSubtree),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_base: {
      value: cdktf.stringToHclTerraform(struct!.roleBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_search_matching: {
      value: cdktf.stringToHclTerraform(struct!.roleSearchMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_search_subtree: {
      value: cdktf.booleanToHclTerraform(struct!.roleSearchSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_username: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_base: {
      value: cdktf.stringToHclTerraform(struct!.userBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_role_name: {
      value: cdktf.stringToHclTerraform(struct!.userRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_matching: {
      value: cdktf.stringToHclTerraform(struct!.userSearchMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_subtree: {
      value: cdktf.booleanToHclTerraform(struct!.userSearchSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._roleBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBase = this._roleBase;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._roleSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchMatching = this._roleSearchMatching;
    }
    if (this._roleSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchSubtree = this._roleSearchSubtree;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    if (this._serviceAccountUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUsername = this._serviceAccountUsername;
    }
    if (this._userBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBase = this._userBase;
    }
    if (this._userRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRoleName = this._userRoleName;
    }
    if (this._userSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchMatching = this._userSearchMatching;
    }
    if (this._userSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchSubtree = this._userSearchSubtree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._roleBase = undefined;
      this._roleName = undefined;
      this._roleSearchMatching = undefined;
      this._roleSearchSubtree = undefined;
      this._serviceAccountPassword = undefined;
      this._serviceAccountUsername = undefined;
      this._userBase = undefined;
      this._userRoleName = undefined;
      this._userSearchMatching = undefined;
      this._userSearchSubtree = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._roleBase = value.roleBase;
      this._roleName = value.roleName;
      this._roleSearchMatching = value.roleSearchMatching;
      this._roleSearchSubtree = value.roleSearchSubtree;
      this._serviceAccountPassword = value.serviceAccountPassword;
      this._serviceAccountUsername = value.serviceAccountUsername;
      this._userBase = value.userBase;
      this._userRoleName = value.userRoleName;
      this._userSearchMatching = value.userSearchMatching;
      this._userSearchSubtree = value.userSearchSubtree;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // role_base - computed: false, optional: true, required: false
  private _roleBase?: string; 
  public get roleBase() {
    return this.getStringAttribute('role_base');
  }
  public set roleBase(value: string) {
    this._roleBase = value;
  }
  public resetRoleBase() {
    this._roleBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBaseInput() {
    return this._roleBase;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_search_matching - computed: false, optional: true, required: false
  private _roleSearchMatching?: string; 
  public get roleSearchMatching() {
    return this.getStringAttribute('role_search_matching');
  }
  public set roleSearchMatching(value: string) {
    this._roleSearchMatching = value;
  }
  public resetRoleSearchMatching() {
    this._roleSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchMatchingInput() {
    return this._roleSearchMatching;
  }

  // role_search_subtree - computed: false, optional: true, required: false
  private _roleSearchSubtree?: boolean | cdktf.IResolvable; 
  public get roleSearchSubtree() {
    return this.getBooleanAttribute('role_search_subtree');
  }
  public set roleSearchSubtree(value: boolean | cdktf.IResolvable) {
    this._roleSearchSubtree = value;
  }
  public resetRoleSearchSubtree() {
    this._roleSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchSubtreeInput() {
    return this._roleSearchSubtree;
  }

  // service_account_password - computed: false, optional: true, required: false
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  public resetServiceAccountPassword() {
    this._serviceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // service_account_username - computed: false, optional: true, required: false
  private _serviceAccountUsername?: string; 
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
  public set serviceAccountUsername(value: string) {
    this._serviceAccountUsername = value;
  }
  public resetServiceAccountUsername() {
    this._serviceAccountUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUsernameInput() {
    return this._serviceAccountUsername;
  }

  // user_base - computed: false, optional: true, required: false
  private _userBase?: string; 
  public get userBase() {
    return this.getStringAttribute('user_base');
  }
  public set userBase(value: string) {
    this._userBase = value;
  }
  public resetUserBase() {
    this._userBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseInput() {
    return this._userBase;
  }

  // user_role_name - computed: false, optional: true, required: false
  private _userRoleName?: string; 
  public get userRoleName() {
    return this.getStringAttribute('user_role_name');
  }
  public set userRoleName(value: string) {
    this._userRoleName = value;
  }
  public resetUserRoleName() {
    this._userRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleNameInput() {
    return this._userRoleName;
  }

  // user_search_matching - computed: false, optional: true, required: false
  private _userSearchMatching?: string; 
  public get userSearchMatching() {
    return this.getStringAttribute('user_search_matching');
  }
  public set userSearchMatching(value: string) {
    this._userSearchMatching = value;
  }
  public resetUserSearchMatching() {
    this._userSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchMatchingInput() {
    return this._userSearchMatching;
  }

  // user_search_subtree - computed: false, optional: true, required: false
  private _userSearchSubtree?: boolean | cdktf.IResolvable; 
  public get userSearchSubtree() {
    return this.getBooleanAttribute('user_search_subtree');
  }
  public set userSearchSubtree(value: boolean | cdktf.IResolvable) {
    this._userSearchSubtree = value;
  }
  public resetUserSearchSubtree() {
    this._userSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchSubtreeInput() {
    return this._userSearchSubtree;
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#audit DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#general DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#general}
  */
  readonly general?: boolean | cdktf.IResolvable;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    general: cdktf.booleanToTerraform(struct!.general),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    general: {
      value: cdktf.booleanToHclTerraform(struct!.general),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._general !== undefined) {
      hasAnyValues = true;
      internalValueResult.general = this._general;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audit = undefined;
      this._general = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audit = value.audit;
      this._general = value.general;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // general - computed: false, optional: true, required: false
  private _general?: boolean | cdktf.IResolvable; 
  public get general() {
    return this.getBooleanAttribute('general');
  }
  public set general(value: boolean | cdktf.IResolvable) {
    this._general = value;
  }
  public resetGeneral() {
    this._general = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalInput() {
    return this._general;
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#day_of_week DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#time_of_day DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#time_zone DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // time_of_day - computed: false, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#namespace DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#from DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#namespace DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#from DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsFrom) {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsOutputReference {
    return new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#key DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#namespace DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword | cdktf.IResolvable): any {
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

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#console_access DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#console_access}
  */
  readonly consoleAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#groups DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#password DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#username DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console_access: cdktf.booleanToTerraform(struct!.consoleAccess),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    password: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console_access: {
      value: cdktf.booleanToHclTerraform(struct!.consoleAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consoleAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleAccess = this._consoleAccess;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consoleAccess = undefined;
      this._groups = undefined;
      this._password.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consoleAccess = value.consoleAccess;
      this._groups = value.groups;
      this._password.internalValue = value.password;
      this._username = value.username;
    }
  }

  // console_access - computed: false, optional: true, required: false
  private _consoleAccess?: boolean | cdktf.IResolvable; 
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }
  public set consoleAccess(value: boolean | cdktf.IResolvable) {
    this._consoleAccess = value;
  }
  public resetConsoleAccess() {
    this._consoleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAccessInput() {
    return this._consoleAccess;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersOutputReference {
    return new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#authentication_strategy DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#authentication_strategy}
  */
  readonly authenticationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#auto_minor_version_upgrade DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade: boolean | cdktf.IResolvable;
  /**
  * A list of information about the configuration. Does not apply to RabbitMQ brokers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#configuration DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#configuration}
  */
  readonly configuration?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#creator_request_id DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#creator_request_id}
  */
  readonly creatorRequestId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#deployment_mode DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#deployment_mode}
  */
  readonly deploymentMode: string;
  /**
  * Does not apply to RabbitMQ brokers. Encryption options for the broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#encryption_options DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#encryption_options}
  */
  readonly encryptionOptions?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#engine_type DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#engine_version DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#host_instance_type DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#host_instance_type}
  */
  readonly hostInstanceType: string;
  /**
  * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#ldap_server_metadata DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#ldap_server_metadata}
  */
  readonly ldapServerMetadata?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata;
  /**
  * The list of information about logs to be enabled for the specified broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#logs DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#logs}
  */
  readonly logs?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs;
  /**
  * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#maintenance_window_start_time DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#maintenance_window_start_time}
  */
  readonly maintenanceWindowStartTime?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#name DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#publicly_accessible DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#publicly_accessible}
  */
  readonly publiclyAccessible: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#security_group_refs DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#security_groups DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#storage_type DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#subnet_i_ds DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#subnet_refs DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#tags DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#users DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest#users}
  */
  readonly users: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_strategy: cdktf.stringToTerraform(struct!.authenticationStrategy),
    auto_minor_version_upgrade: cdktf.booleanToTerraform(struct!.autoMinorVersionUpgrade),
    configuration: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationToTerraform(struct!.configuration),
    creator_request_id: cdktf.stringToTerraform(struct!.creatorRequestId),
    deployment_mode: cdktf.stringToTerraform(struct!.deploymentMode),
    encryption_options: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsToTerraform(struct!.encryptionOptions),
    engine_type: cdktf.stringToTerraform(struct!.engineType),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    host_instance_type: cdktf.stringToTerraform(struct!.hostInstanceType),
    ldap_server_metadata: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataToTerraform(struct!.ldapServerMetadata),
    logs: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsToTerraform(struct!.logs),
    maintenance_window_start_time: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeToTerraform(struct!.maintenanceWindowStartTime),
    name: cdktf.stringToTerraform(struct!.name),
    publicly_accessible: cdktf.booleanToTerraform(struct!.publiclyAccessible),
    security_group_refs: cdktf.listMapper(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
    subnet_refs: cdktf.listMapper(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsToTerraform, false)(struct!.subnetRefs),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    users: cdktf.listMapper(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_strategy: {
      value: cdktf.stringToHclTerraform(struct!.authenticationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_minor_version_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoMinorVersionUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration",
    },
    creator_request_id: {
      value: cdktf.stringToHclTerraform(struct!.creatorRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_mode: {
      value: cdktf.stringToHclTerraform(struct!.deploymentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_options: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsToHclTerraform(struct!.encryptionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions",
    },
    engine_type: {
      value: cdktf.stringToHclTerraform(struct!.engineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.hostInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_server_metadata: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataToHclTerraform(struct!.ldapServerMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata",
    },
    logs: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs",
    },
    maintenance_window_start_time: {
      value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeToHclTerraform(struct!.maintenanceWindowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publicly_accessible: {
      value: cdktf.booleanToHclTerraform(struct!.publiclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationStrategy = this._authenticationStrategy;
    }
    if (this._autoMinorVersionUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMinorVersionUpgrade = this._autoMinorVersionUpgrade;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._creatorRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorRequestId = this._creatorRequestId;
    }
    if (this._deploymentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentMode = this._deploymentMode;
    }
    if (this._encryptionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOptions = this._encryptionOptions?.internalValue;
    }
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._hostInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostInstanceType = this._hostInstanceType;
    }
    if (this._ldapServerMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapServerMetadata = this._ldapServerMetadata?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._maintenanceWindowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowStartTime = this._maintenanceWindowStartTime?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publiclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.publiclyAccessible = this._publiclyAccessible;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    if (this._subnetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRefs = this._subnetRefs?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationStrategy = undefined;
      this._autoMinorVersionUpgrade = undefined;
      this._configuration.internalValue = undefined;
      this._creatorRequestId = undefined;
      this._deploymentMode = undefined;
      this._encryptionOptions.internalValue = undefined;
      this._engineType = undefined;
      this._engineVersion = undefined;
      this._hostInstanceType = undefined;
      this._ldapServerMetadata.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._maintenanceWindowStartTime.internalValue = undefined;
      this._name = undefined;
      this._publiclyAccessible = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._securityGroups = undefined;
      this._storageType = undefined;
      this._subnetIDs = undefined;
      this._subnetRefs.internalValue = undefined;
      this._tags = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationStrategy = value.authenticationStrategy;
      this._autoMinorVersionUpgrade = value.autoMinorVersionUpgrade;
      this._configuration.internalValue = value.configuration;
      this._creatorRequestId = value.creatorRequestId;
      this._deploymentMode = value.deploymentMode;
      this._encryptionOptions.internalValue = value.encryptionOptions;
      this._engineType = value.engineType;
      this._engineVersion = value.engineVersion;
      this._hostInstanceType = value.hostInstanceType;
      this._ldapServerMetadata.internalValue = value.ldapServerMetadata;
      this._logs.internalValue = value.logs;
      this._maintenanceWindowStartTime.internalValue = value.maintenanceWindowStartTime;
      this._name = value.name;
      this._publiclyAccessible = value.publiclyAccessible;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._securityGroups = value.securityGroups;
      this._storageType = value.storageType;
      this._subnetIDs = value.subnetIDs;
      this._subnetRefs.internalValue = value.subnetRefs;
      this._tags = value.tags;
      this._users.internalValue = value.users;
    }
  }

  // authentication_strategy - computed: false, optional: true, required: false
  private _authenticationStrategy?: string; 
  public get authenticationStrategy() {
    return this.getStringAttribute('authentication_strategy');
  }
  public set authenticationStrategy(value: string) {
    this._authenticationStrategy = value;
  }
  public resetAuthenticationStrategy() {
    this._authenticationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationStrategyInput() {
    return this._authenticationStrategy;
  }

  // auto_minor_version_upgrade - computed: false, optional: false, required: true
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // creator_request_id - computed: false, optional: true, required: false
  private _creatorRequestId?: string; 
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }
  public set creatorRequestId(value: string) {
    this._creatorRequestId = value;
  }
  public resetCreatorRequestId() {
    this._creatorRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorRequestIdInput() {
    return this._creatorRequestId;
  }

  // deployment_mode - computed: false, optional: false, required: true
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // encryption_options - computed: false, optional: true, required: false
  private _encryptionOptions = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptionsOutputReference(this, "encryption_options");
  public get encryptionOptions() {
    return this._encryptionOptions;
  }
  public putEncryptionOptions(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecEncryptionOptions) {
    this._encryptionOptions.internalValue = value;
  }
  public resetEncryptionOptions() {
    this._encryptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionsInput() {
    return this._encryptionOptions.internalValue;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // host_instance_type - computed: false, optional: false, required: true
  private _hostInstanceType?: string; 
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceTypeInput() {
    return this._hostInstanceType;
  }

  // ldap_server_metadata - computed: false, optional: true, required: false
  private _ldapServerMetadata = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadataOutputReference(this, "ldap_server_metadata");
  public get ldapServerMetadata() {
    return this._ldapServerMetadata;
  }
  public putLdapServerMetadata(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLdapServerMetadata) {
    this._ldapServerMetadata.internalValue = value;
  }
  public resetLdapServerMetadata() {
    this._ldapServerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerMetadataInput() {
    return this._ldapServerMetadata.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // maintenance_window_start_time - computed: false, optional: true, required: false
  private _maintenanceWindowStartTime = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTimeOutputReference(this, "maintenance_window_start_time");
  public get maintenanceWindowStartTime() {
    return this._maintenanceWindowStartTime;
  }
  public putMaintenanceWindowStartTime(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecMaintenanceWindowStartTime) {
    this._maintenanceWindowStartTime.internalValue = value;
  }
  public resetMaintenanceWindowStartTime() {
    this._maintenanceWindowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartTimeInput() {
    return this._maintenanceWindowStartTime.internalValue;
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

  // publicly_accessible - computed: false, optional: false, required: true
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subnet_i_ds - computed: false, optional: true, required: false
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  public resetSubnetIDs() {
    this._subnetIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable) {
    this._subnetRefs.internalValue = value;
  }
  public resetSubnetRefs() {
    this._subnetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefsInput() {
    return this._subnetRefs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // users - computed: false, optional: false, required: true
  private _users = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest k8s_mq_services_k8s_aws_broker_v1alpha1_manifest}
*/
export class DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_mq_services_k8s_aws_broker_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMqServicesK8SAwsBrokerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_mq_services_k8s_aws_broker_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mq_services_k8s_aws_broker_v1alpha1_manifest k8s_mq_services_k8s_aws_broker_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_mq_services_k8s_aws_broker_v1alpha1_manifest',
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
  private _metadata = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMqServicesK8SAwsBrokerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
