// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#metadata DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata;
  /**
  * DBProxySpec defines the desired state of DBProxy. The data structure representing a proxy managed by the RDS Proxy. This data type is used as a response element in the DescribeDBProxies action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#spec DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec;
}
export interface DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#annotations DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#labels DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#auth_scheme DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#auth_scheme}
  */
  readonly authScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#client_password_auth_type DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#client_password_auth_type}
  */
  readonly clientPasswordAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#description DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#iam_auth DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#iam_auth}
  */
  readonly iamAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#secret_arn DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#user_name DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#user_name}
  */
  readonly userName?: string;
}

export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthToTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    client_password_auth_type: cdktf.stringToTerraform(struct!.clientPasswordAuthType),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_scheme: {
      value: cdktf.stringToHclTerraform(struct!.authScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_password_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.clientPasswordAuthType),
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
    iam_auth: {
      value: cdktf.stringToHclTerraform(struct!.iamAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.authScheme = this._authScheme;
    }
    if (this._clientPasswordAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPasswordAuthType = this._clientPasswordAuthType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._iamAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAuth = this._iamAuth;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authScheme = undefined;
      this._clientPasswordAuthType = undefined;
      this._description = undefined;
      this._iamAuth = undefined;
      this._secretArn = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authScheme = value.authScheme;
      this._clientPasswordAuthType = value.clientPasswordAuthType;
      this._description = value.description;
      this._iamAuth = value.iamAuth;
      this._secretArn = value.secretArn;
      this._userName = value.userName;
    }
  }

  // auth_scheme - computed: false, optional: true, required: false
  private _authScheme?: string; 
  public get authScheme() {
    return this.getStringAttribute('auth_scheme');
  }
  public set authScheme(value: string) {
    this._authScheme = value;
  }
  public resetAuthScheme() {
    this._authScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSchemeInput() {
    return this._authScheme;
  }

  // client_password_auth_type - computed: false, optional: true, required: false
  private _clientPasswordAuthType?: string; 
  public get clientPasswordAuthType() {
    return this.getStringAttribute('client_password_auth_type');
  }
  public set clientPasswordAuthType(value: string) {
    this._clientPasswordAuthType = value;
  }
  public resetClientPasswordAuthType() {
    this._clientPasswordAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPasswordAuthTypeInput() {
    return this._clientPasswordAuthType;
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

  // iam_auth - computed: false, optional: true, required: false
  private _iamAuth?: string; 
  public get iamAuth() {
    return this.getStringAttribute('iam_auth');
  }
  public set iamAuth(value: string) {
    this._iamAuth = value;
  }
  public resetIamAuth() {
    this._iamAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAuthInput() {
    return this._iamAuth;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthOutputReference {
    return new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#value DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec {
  /**
  * The authorization mechanism that the proxy uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#auth DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#auth}
  */
  readonly auth: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth[] | cdktf.IResolvable;
  /**
  * Whether the proxy includes detailed information about SQL statements in its logs. This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#debug_logging DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#debug_logging}
  */
  readonly debugLogging?: boolean | cdktf.IResolvable;
  /**
  * The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify MYSQL. For Aurora PostgreSQL and RDS for PostgreSQL databases, specify POSTGRESQL. For RDS for Microsoft SQL Server, specify SQLSERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#engine_family DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#engine_family}
  */
  readonly engineFamily: string;
  /**
  * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#idle_client_timeout DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#idle_client_timeout}
  */
  readonly idleClientTimeout?: number;
  /**
  * The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#require_tls DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#require_tls}
  */
  readonly requireTls?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#role_arn DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#tags DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * One or more VPC security group IDs to associate with the new proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#vpc_security_group_i_ds DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#vpc_security_group_i_ds}
  */
  readonly vpcSecurityGroupIDs?: string[];
  /**
  * One or more VPC subnet IDs to associate with the new proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#vpc_subnet_i_ds DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest#vpc_subnet_i_ds}
  */
  readonly vpcSubnetIDs: string[];
}

export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthToTerraform, false)(struct!.auth),
    debug_logging: cdktf.booleanToTerraform(struct!.debugLogging),
    engine_family: cdktf.stringToTerraform(struct!.engineFamily),
    idle_client_timeout: cdktf.numberToTerraform(struct!.idleClientTimeout),
    name: cdktf.stringToTerraform(struct!.name),
    require_tls: cdktf.booleanToTerraform(struct!.requireTls),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    tags: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSecurityGroupIDs),
    vpc_subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSubnetIDs),
  }
}


export function dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthToHclTerraform, false)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthList",
    },
    debug_logging: {
      value: cdktf.booleanToHclTerraform(struct!.debugLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_family: {
      value: cdktf.stringToHclTerraform(struct!.engineFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_client_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleClientTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_tls: {
      value: cdktf.booleanToHclTerraform(struct!.requireTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsList",
    },
    vpc_security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcSecurityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcSubnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._debugLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugLogging = this._debugLogging;
    }
    if (this._engineFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineFamily = this._engineFamily;
    }
    if (this._idleClientTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleClientTimeout = this._idleClientTimeout;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTls = this._requireTls;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcSecurityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupIDs = this._vpcSecurityGroupIDs;
    }
    if (this._vpcSubnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSubnetIDs = this._vpcSubnetIDs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._debugLogging = undefined;
      this._engineFamily = undefined;
      this._idleClientTimeout = undefined;
      this._name = undefined;
      this._requireTls = undefined;
      this._roleArn = undefined;
      this._tags.internalValue = undefined;
      this._vpcSecurityGroupIDs = undefined;
      this._vpcSubnetIDs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._debugLogging = value.debugLogging;
      this._engineFamily = value.engineFamily;
      this._idleClientTimeout = value.idleClientTimeout;
      this._name = value.name;
      this._requireTls = value.requireTls;
      this._roleArn = value.roleArn;
      this._tags.internalValue = value.tags;
      this._vpcSecurityGroupIDs = value.vpcSecurityGroupIDs;
      this._vpcSubnetIDs = value.vpcSubnetIDs;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean | cdktf.IResolvable; 
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging');
  }
  public set debugLogging(value: boolean | cdktf.IResolvable) {
    this._debugLogging = value;
  }
  public resetDebugLogging() {
    this._debugLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLoggingInput() {
    return this._debugLogging;
  }

  // engine_family - computed: false, optional: false, required: true
  private _engineFamily?: string; 
  public get engineFamily() {
    return this.getStringAttribute('engine_family');
  }
  public set engineFamily(value: string) {
    this._engineFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFamilyInput() {
    return this._engineFamily;
  }

  // idle_client_timeout - computed: false, optional: true, required: false
  private _idleClientTimeout?: number; 
  public get idleClientTimeout() {
    return this.getNumberAttribute('idle_client_timeout');
  }
  public set idleClientTimeout(value: number) {
    this._idleClientTimeout = value;
  }
  public resetIdleClientTimeout() {
    this._idleClientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleClientTimeoutInput() {
    return this._idleClientTimeout;
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

  // require_tls - computed: false, optional: true, required: false
  private _requireTls?: boolean | cdktf.IResolvable; 
  public get requireTls() {
    return this.getBooleanAttribute('require_tls');
  }
  public set requireTls(value: boolean | cdktf.IResolvable) {
    this._requireTls = value;
  }
  public resetRequireTls() {
    this._requireTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInput() {
    return this._requireTls;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_security_group_i_ds - computed: false, optional: true, required: false
  private _vpcSecurityGroupIDs?: string[]; 
  public get vpcSecurityGroupIDs() {
    return this.getListAttribute('vpc_security_group_i_ds');
  }
  public set vpcSecurityGroupIDs(value: string[]) {
    this._vpcSecurityGroupIDs = value;
  }
  public resetVpcSecurityGroupIDs() {
    this._vpcSecurityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIDsInput() {
    return this._vpcSecurityGroupIDs;
  }

  // vpc_subnet_i_ds - computed: false, optional: false, required: true
  private _vpcSubnetIDs?: string[]; 
  public get vpcSubnetIDs() {
    return this.getListAttribute('vpc_subnet_i_ds');
  }
  public set vpcSubnetIDs(value: string[]) {
    this._vpcSubnetIDs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIDsInput() {
    return this._vpcSubnetIDs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest k8s_rds_services_k8s_aws_db_proxy_v1alpha1_manifest}
*/
export class DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rds_services_k8s_aws_db_proxy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRdsServicesK8SAwsDbProxyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rds_services_k8s_aws_db_proxy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_proxy_v1alpha1_manifest k8s_rds_services_k8s_aws_db_proxy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rds_services_k8s_aws_db_proxy_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbProxyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
