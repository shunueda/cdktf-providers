// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata;
  /**
  * AWSIamConfigSpec defines the desired state of AWSIamConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#groups DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#role_arn DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#username DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._roleArn = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._roleArn = value.roleArn;
      this._username = value.username;
    }
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#groups DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#user_arn DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#user_arn}
  */
  readonly userArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#username DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersToTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    user_arn: cdktf.stringToTerraform(struct!.userArn),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_arn: {
      value: cdktf.stringToHclTerraform(struct!.userArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._userArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userArn = this._userArn;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._userArn = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._userArn = value.userArn;
      this._username = value.username;
    }
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

  // user_arn - computed: false, optional: false, required: true
  private _userArn?: string; 
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }
  public set userArn(value: string) {
    this._userArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userArnInput() {
    return this._userArn;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersOutputReference {
    return new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec {
  /**
  * AWSRegion defines a region in an AWS partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#aws_region DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#aws_region}
  */
  readonly awsRegion: string;
  /**
  * BackendMode defines multiple backends for aws-iam-authenticator server The server searches for mappings in order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#backend_mode DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#backend_mode}
  */
  readonly backendMode: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#map_roles DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#map_roles}
  */
  readonly mapRoles?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#map_users DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#map_users}
  */
  readonly mapUsers?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers[] | cdktf.IResolvable;
  /**
  * Partition defines the AWS partition on which the IAM roles exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#partition DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest#partition}
  */
  readonly partition?: string;
}

export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    backend_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendMode),
    map_roles: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesToTerraform, false)(struct!.mapRoles),
    map_users: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersToTerraform, false)(struct!.mapUsers),
    partition: cdktf.stringToTerraform(struct!.partition),
  }
}


export function dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendMode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_roles: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesToHclTerraform, false)(struct!.mapRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesList",
    },
    map_users: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersToHclTerraform, false)(struct!.mapUsers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersList",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._backendMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendMode = this._backendMode;
    }
    if (this._mapRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapRoles = this._mapRoles?.internalValue;
    }
    if (this._mapUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapUsers = this._mapUsers?.internalValue;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._backendMode = undefined;
      this._mapRoles.internalValue = undefined;
      this._mapUsers.internalValue = undefined;
      this._partition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._backendMode = value.backendMode;
      this._mapRoles.internalValue = value.mapRoles;
      this._mapUsers.internalValue = value.mapUsers;
      this._partition = value.partition;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // backend_mode - computed: false, optional: false, required: true
  private _backendMode?: string[]; 
  public get backendMode() {
    return this.getListAttribute('backend_mode');
  }
  public set backendMode(value: string[]) {
    this._backendMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendModeInput() {
    return this._backendMode;
  }

  // map_roles - computed: false, optional: true, required: false
  private _mapRoles = new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRolesList(this, "map_roles", false);
  public get mapRoles() {
    return this._mapRoles;
  }
  public putMapRoles(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapRoles[] | cdktf.IResolvable) {
    this._mapRoles.internalValue = value;
  }
  public resetMapRoles() {
    this._mapRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRolesInput() {
    return this._mapRoles.internalValue;
  }

  // map_users - computed: false, optional: true, required: false
  private _mapUsers = new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsersList(this, "map_users", false);
  public get mapUsers() {
    return this._mapUsers;
  }
  public putMapUsers(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecMapUsers[] | cdktf.IResolvable) {
    this._mapUsers.internalValue = value;
  }
  public resetMapUsers() {
    this._mapUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapUsersInput() {
    return this._mapUsers.internalValue;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_aws_iam_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComAwsIamConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
