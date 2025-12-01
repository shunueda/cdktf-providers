// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#metadata DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata;
  /**
  * ProvisionToken resource definition v2 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#spec DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#annotations DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#labels DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#name DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#namespace DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow {
  /**
  * AWSAccount is the AWS account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#aws_account DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#aws_account}
  */
  readonly awsAccount?: string;
  /**
  * AWSARN is used for the IAM join method, the AWS identity of joining nodes must match this ARN. Supports wildcards '*' and '?'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#aws_arn DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#aws_arn}
  */
  readonly awsArn?: string;
  /**
  * AWSRegions is used for the EC2 join method and is a list of AWS regions a node is allowed to join from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#aws_regions DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#aws_regions}
  */
  readonly awsRegions?: string[];
  /**
  * AWSRole is used for the EC2 join method and is the ARN of the AWS role that the Auth Service will assume in order to call the ec2 API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#aws_role DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#aws_role}
  */
  readonly awsRole?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account: cdktf.stringToTerraform(struct!.awsAccount),
    aws_arn: cdktf.stringToTerraform(struct!.awsArn),
    aws_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRegions),
    aws_role: cdktf.stringToTerraform(struct!.awsRole),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account: {
      value: cdktf.stringToHclTerraform(struct!.awsAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aws_role: {
      value: cdktf.stringToHclTerraform(struct!.awsRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccount = this._awsAccount;
    }
    if (this._awsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsArn = this._awsArn;
    }
    if (this._awsRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegions = this._awsRegions;
    }
    if (this._awsRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRole = this._awsRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccount = undefined;
      this._awsArn = undefined;
      this._awsRegions = undefined;
      this._awsRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccount = value.awsAccount;
      this._awsArn = value.awsArn;
      this._awsRegions = value.awsRegions;
      this._awsRole = value.awsRole;
    }
  }

  // aws_account - computed: false, optional: true, required: false
  private _awsAccount?: string; 
  public get awsAccount() {
    return this.getStringAttribute('aws_account');
  }
  public set awsAccount(value: string) {
    this._awsAccount = value;
  }
  public resetAwsAccount() {
    this._awsAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount;
  }

  // aws_arn - computed: false, optional: true, required: false
  private _awsArn?: string; 
  public get awsArn() {
    return this.getStringAttribute('aws_arn');
  }
  public set awsArn(value: string) {
    this._awsArn = value;
  }
  public resetAwsArn() {
    this._awsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsArnInput() {
    return this._awsArn;
  }

  // aws_regions - computed: false, optional: true, required: false
  private _awsRegions?: string[]; 
  public get awsRegions() {
    return this.getListAttribute('aws_regions');
  }
  public set awsRegions(value: string[]) {
    this._awsRegions = value;
  }
  public resetAwsRegions() {
    this._awsRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionsInput() {
    return this._awsRegions;
  }

  // aws_role - computed: false, optional: true, required: false
  private _awsRole?: string; 
  public get awsRole() {
    return this.getStringAttribute('aws_role');
  }
  public set awsRole(value: string) {
    this._awsRole = value;
  }
  public resetAwsRole() {
    this._awsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleInput() {
    return this._awsRole;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#resource_groups DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#subscription DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#subscription}
  */
  readonly subscription?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    subscription: cdktf.stringToTerraform(struct!.subscription),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subscription: {
      value: cdktf.stringToHclTerraform(struct!.subscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
    }
    if (this._subscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscription = this._subscription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroups = undefined;
      this._subscription = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroups = value.resourceGroups;
      this._subscription = value.subscription;
    }
  }

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
  }

  // subscription - computed: false, optional: true, required: false
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  public resetSubscription() {
    this._subscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure {
  /**
  * Allow is a list of Rules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowToTerraform, false)(struct!.allow),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#context_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#context_id}
  */
  readonly contextId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_id}
  */
  readonly projectId?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_id: cdktf.stringToTerraform(struct!.contextId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_id: {
      value: cdktf.stringToHclTerraform(struct!.contextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextId = this._contextId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextId = value.contextId;
      this._projectId = value.projectId;
    }
  }

  // context_id - computed: false, optional: true, required: false
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  public resetContextId() {
    this._contextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci {
  /**
  * Allow is a list of TokenRules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#organization_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#organization_id}
  */
  readonly organizationId?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowToTerraform, false)(struct!.allow),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowList",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._organizationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._organizationId = value.organizationId;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#locations DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_ids DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#service_accounts DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#service_accounts}
  */
  readonly serviceAccounts?: string[];
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccounts),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._serviceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations = undefined;
      this._projectIds = undefined;
      this._serviceAccounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locations = value.locations;
      this._projectIds = value.projectIds;
      this._serviceAccounts = value.serviceAccounts;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts?: string[]; 
  public get serviceAccounts() {
    return this.getListAttribute('service_accounts');
  }
  public set serviceAccounts(value: string[]) {
    this._serviceAccounts = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp {
  /**
  * Allow is a list of Rules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowToTerraform, false)(struct!.allow),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#actor DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#actor}
  */
  readonly actor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#environment DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ref DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ref}
  */
  readonly ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ref_type DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ref_type}
  */
  readonly refType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#repository DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#repository_owner DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#repository_owner}
  */
  readonly repositoryOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#sub DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#sub}
  */
  readonly sub?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#workflow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#workflow}
  */
  readonly workflow?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actor: cdktf.stringToTerraform(struct!.actor),
    environment: cdktf.stringToTerraform(struct!.environment),
    ref: cdktf.stringToTerraform(struct!.ref),
    ref_type: cdktf.stringToTerraform(struct!.refType),
    repository: cdktf.stringToTerraform(struct!.repository),
    repository_owner: cdktf.stringToTerraform(struct!.repositoryOwner),
    sub: cdktf.stringToTerraform(struct!.sub),
    workflow: cdktf.stringToTerraform(struct!.workflow),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actor: {
      value: cdktf.stringToHclTerraform(struct!.actor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_type: {
      value: cdktf.stringToHclTerraform(struct!.refType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_owner: {
      value: cdktf.stringToHclTerraform(struct!.repositoryOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub: {
      value: cdktf.stringToHclTerraform(struct!.sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actor !== undefined) {
      hasAnyValues = true;
      internalValueResult.actor = this._actor;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._refType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refType = this._refType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._repositoryOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryOwner = this._repositoryOwner;
    }
    if (this._sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.sub = this._sub;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actor = undefined;
      this._environment = undefined;
      this._ref = undefined;
      this._refType = undefined;
      this._repository = undefined;
      this._repositoryOwner = undefined;
      this._sub = undefined;
      this._workflow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actor = value.actor;
      this._environment = value.environment;
      this._ref = value.ref;
      this._refType = value.refType;
      this._repository = value.repository;
      this._repositoryOwner = value.repositoryOwner;
      this._sub = value.sub;
      this._workflow = value.workflow;
    }
  }

  // actor - computed: false, optional: true, required: false
  private _actor?: string; 
  public get actor() {
    return this.getStringAttribute('actor');
  }
  public set actor(value: string) {
    this._actor = value;
  }
  public resetActor() {
    this._actor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorInput() {
    return this._actor;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // ref_type - computed: false, optional: true, required: false
  private _refType?: string; 
  public get refType() {
    return this.getStringAttribute('ref_type');
  }
  public set refType(value: string) {
    this._refType = value;
  }
  public resetRefType() {
    this._refType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refTypeInput() {
    return this._refType;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_owner - computed: false, optional: true, required: false
  private _repositoryOwner?: string; 
  public get repositoryOwner() {
    return this.getStringAttribute('repository_owner');
  }
  public set repositoryOwner(value: string) {
    this._repositoryOwner = value;
  }
  public resetRepositoryOwner() {
    this._repositoryOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryOwnerInput() {
    return this._repositoryOwner;
  }

  // sub - computed: false, optional: true, required: false
  private _sub?: string; 
  public get sub() {
    return this.getStringAttribute('sub');
  }
  public set sub(value: string) {
    this._sub = value;
  }
  public resetSub() {
    this._sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subInput() {
    return this._sub;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub {
  /**
  * Allow is a list of TokenRules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow[] | cdktf.IResolvable;
  /**
  * EnterpriseServerHost allows joining from runners associated with a GitHub Enterprise Server instance. When unconfigured, tokens will be validated against github.com, but when configured to the host of a GHES instance, then the tokens will be validated against host. This value should be the hostname of the GHES instance, and should not include the scheme or a path. The instance must be accessible over HTTPS at this hostname and the certificate must be trusted by the Auth Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#enterprise_server_host DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#enterprise_server_host}
  */
  readonly enterpriseServerHost?: string;
  /**
  * EnterpriseSlug allows the slug of a GitHub Enterprise organisation to be included in the expected issuer of the OIDC tokens. This is for compatibility with the 'include_enterprise_slug' option in GHE. This field should be set to the slug of your enterprise if this is enabled. If this is not enabled, then this field must be left empty. This field cannot be specified if 'enterprise_server_host' is specified. See https://docs.github.com/en/enterprise-cloud@latest/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-issuer-value-for-an-enterprise for more information about customized issuer values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#enterprise_slug DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#enterprise_slug}
  */
  readonly enterpriseSlug?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowToTerraform, false)(struct!.allow),
    enterprise_server_host: cdktf.stringToTerraform(struct!.enterpriseServerHost),
    enterprise_slug: cdktf.stringToTerraform(struct!.enterpriseSlug),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowList",
    },
    enterprise_server_host: {
      value: cdktf.stringToHclTerraform(struct!.enterpriseServerHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_slug: {
      value: cdktf.stringToHclTerraform(struct!.enterpriseSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._enterpriseServerHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseServerHost = this._enterpriseServerHost;
    }
    if (this._enterpriseSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseSlug = this._enterpriseSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._enterpriseServerHost = undefined;
      this._enterpriseSlug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._enterpriseServerHost = value.enterpriseServerHost;
      this._enterpriseSlug = value.enterpriseSlug;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // enterprise_server_host - computed: false, optional: true, required: false
  private _enterpriseServerHost?: string; 
  public get enterpriseServerHost() {
    return this.getStringAttribute('enterprise_server_host');
  }
  public set enterpriseServerHost(value: string) {
    this._enterpriseServerHost = value;
  }
  public resetEnterpriseServerHost() {
    this._enterpriseServerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseServerHostInput() {
    return this._enterpriseServerHost;
  }

  // enterprise_slug - computed: false, optional: true, required: false
  private _enterpriseSlug?: string; 
  public get enterpriseSlug() {
    return this.getStringAttribute('enterprise_slug');
  }
  public set enterpriseSlug(value: string) {
    this._enterpriseSlug = value;
  }
  public resetEnterpriseSlug() {
    this._enterpriseSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSlugInput() {
    return this._enterpriseSlug;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ci_config_ref_uri DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ci_config_ref_uri}
  */
  readonly ciConfigRefUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ci_config_sha DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ci_config_sha}
  */
  readonly ciConfigSha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#deployment_tier DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#deployment_tier}
  */
  readonly deploymentTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#environment DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#environment_protected DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#environment_protected}
  */
  readonly environmentProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#namespace_path DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#namespace_path}
  */
  readonly namespacePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#pipeline_source DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#pipeline_source}
  */
  readonly pipelineSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_path DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_path}
  */
  readonly projectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_visibility DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_visibility}
  */
  readonly projectVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ref DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ref}
  */
  readonly ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ref_protected DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ref_protected}
  */
  readonly refProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ref_type DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ref_type}
  */
  readonly refType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#sub DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#sub}
  */
  readonly sub?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#user_email DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#user_email}
  */
  readonly userEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#user_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#user_login DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#user_login}
  */
  readonly userLogin?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ci_config_ref_uri: cdktf.stringToTerraform(struct!.ciConfigRefUri),
    ci_config_sha: cdktf.stringToTerraform(struct!.ciConfigSha),
    deployment_tier: cdktf.stringToTerraform(struct!.deploymentTier),
    environment: cdktf.stringToTerraform(struct!.environment),
    environment_protected: cdktf.booleanToTerraform(struct!.environmentProtected),
    namespace_path: cdktf.stringToTerraform(struct!.namespacePath),
    pipeline_source: cdktf.stringToTerraform(struct!.pipelineSource),
    project_path: cdktf.stringToTerraform(struct!.projectPath),
    project_visibility: cdktf.stringToTerraform(struct!.projectVisibility),
    ref: cdktf.stringToTerraform(struct!.ref),
    ref_protected: cdktf.booleanToTerraform(struct!.refProtected),
    ref_type: cdktf.stringToTerraform(struct!.refType),
    sub: cdktf.stringToTerraform(struct!.sub),
    user_email: cdktf.stringToTerraform(struct!.userEmail),
    user_id: cdktf.stringToTerraform(struct!.userId),
    user_login: cdktf.stringToTerraform(struct!.userLogin),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ci_config_ref_uri: {
      value: cdktf.stringToHclTerraform(struct!.ciConfigRefUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ci_config_sha: {
      value: cdktf.stringToHclTerraform(struct!.ciConfigSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_tier: {
      value: cdktf.stringToHclTerraform(struct!.deploymentTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_protected: {
      value: cdktf.booleanToHclTerraform(struct!.environmentProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_path: {
      value: cdktf.stringToHclTerraform(struct!.namespacePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_source: {
      value: cdktf.stringToHclTerraform(struct!.pipelineSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_path: {
      value: cdktf.stringToHclTerraform(struct!.projectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_visibility: {
      value: cdktf.stringToHclTerraform(struct!.projectVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_protected: {
      value: cdktf.booleanToHclTerraform(struct!.refProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_type: {
      value: cdktf.stringToHclTerraform(struct!.refType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub: {
      value: cdktf.stringToHclTerraform(struct!.sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_email: {
      value: cdktf.stringToHclTerraform(struct!.userEmail),
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
    user_login: {
      value: cdktf.stringToHclTerraform(struct!.userLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciConfigRefUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciConfigRefUri = this._ciConfigRefUri;
    }
    if (this._ciConfigSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciConfigSha = this._ciConfigSha;
    }
    if (this._deploymentTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentTier = this._deploymentTier;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._environmentProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentProtected = this._environmentProtected;
    }
    if (this._namespacePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacePath = this._namespacePath;
    }
    if (this._pipelineSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineSource = this._pipelineSource;
    }
    if (this._projectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectPath = this._projectPath;
    }
    if (this._projectVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectVisibility = this._projectVisibility;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._refProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.refProtected = this._refProtected;
    }
    if (this._refType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refType = this._refType;
    }
    if (this._sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.sub = this._sub;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLogin = this._userLogin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciConfigRefUri = undefined;
      this._ciConfigSha = undefined;
      this._deploymentTier = undefined;
      this._environment = undefined;
      this._environmentProtected = undefined;
      this._namespacePath = undefined;
      this._pipelineSource = undefined;
      this._projectPath = undefined;
      this._projectVisibility = undefined;
      this._ref = undefined;
      this._refProtected = undefined;
      this._refType = undefined;
      this._sub = undefined;
      this._userEmail = undefined;
      this._userId = undefined;
      this._userLogin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciConfigRefUri = value.ciConfigRefUri;
      this._ciConfigSha = value.ciConfigSha;
      this._deploymentTier = value.deploymentTier;
      this._environment = value.environment;
      this._environmentProtected = value.environmentProtected;
      this._namespacePath = value.namespacePath;
      this._pipelineSource = value.pipelineSource;
      this._projectPath = value.projectPath;
      this._projectVisibility = value.projectVisibility;
      this._ref = value.ref;
      this._refProtected = value.refProtected;
      this._refType = value.refType;
      this._sub = value.sub;
      this._userEmail = value.userEmail;
      this._userId = value.userId;
      this._userLogin = value.userLogin;
    }
  }

  // ci_config_ref_uri - computed: false, optional: true, required: false
  private _ciConfigRefUri?: string; 
  public get ciConfigRefUri() {
    return this.getStringAttribute('ci_config_ref_uri');
  }
  public set ciConfigRefUri(value: string) {
    this._ciConfigRefUri = value;
  }
  public resetCiConfigRefUri() {
    this._ciConfigRefUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciConfigRefUriInput() {
    return this._ciConfigRefUri;
  }

  // ci_config_sha - computed: false, optional: true, required: false
  private _ciConfigSha?: string; 
  public get ciConfigSha() {
    return this.getStringAttribute('ci_config_sha');
  }
  public set ciConfigSha(value: string) {
    this._ciConfigSha = value;
  }
  public resetCiConfigSha() {
    this._ciConfigSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciConfigShaInput() {
    return this._ciConfigSha;
  }

  // deployment_tier - computed: false, optional: true, required: false
  private _deploymentTier?: string; 
  public get deploymentTier() {
    return this.getStringAttribute('deployment_tier');
  }
  public set deploymentTier(value: string) {
    this._deploymentTier = value;
  }
  public resetDeploymentTier() {
    this._deploymentTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTierInput() {
    return this._deploymentTier;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // environment_protected - computed: false, optional: true, required: false
  private _environmentProtected?: boolean | cdktf.IResolvable; 
  public get environmentProtected() {
    return this.getBooleanAttribute('environment_protected');
  }
  public set environmentProtected(value: boolean | cdktf.IResolvable) {
    this._environmentProtected = value;
  }
  public resetEnvironmentProtected() {
    this._environmentProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentProtectedInput() {
    return this._environmentProtected;
  }

  // namespace_path - computed: false, optional: true, required: false
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  public resetNamespacePath() {
    this._namespacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // pipeline_source - computed: false, optional: true, required: false
  private _pipelineSource?: string; 
  public get pipelineSource() {
    return this.getStringAttribute('pipeline_source');
  }
  public set pipelineSource(value: string) {
    this._pipelineSource = value;
  }
  public resetPipelineSource() {
    this._pipelineSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineSourceInput() {
    return this._pipelineSource;
  }

  // project_path - computed: false, optional: true, required: false
  private _projectPath?: string; 
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }
  public set projectPath(value: string) {
    this._projectPath = value;
  }
  public resetProjectPath() {
    this._projectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPathInput() {
    return this._projectPath;
  }

  // project_visibility - computed: false, optional: true, required: false
  private _projectVisibility?: string; 
  public get projectVisibility() {
    return this.getStringAttribute('project_visibility');
  }
  public set projectVisibility(value: string) {
    this._projectVisibility = value;
  }
  public resetProjectVisibility() {
    this._projectVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVisibilityInput() {
    return this._projectVisibility;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // ref_protected - computed: false, optional: true, required: false
  private _refProtected?: boolean | cdktf.IResolvable; 
  public get refProtected() {
    return this.getBooleanAttribute('ref_protected');
  }
  public set refProtected(value: boolean | cdktf.IResolvable) {
    this._refProtected = value;
  }
  public resetRefProtected() {
    this._refProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refProtectedInput() {
    return this._refProtected;
  }

  // ref_type - computed: false, optional: true, required: false
  private _refType?: string; 
  public get refType() {
    return this.getStringAttribute('ref_type');
  }
  public set refType(value: string) {
    this._refType = value;
  }
  public resetRefType() {
    this._refType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refTypeInput() {
    return this._refType;
  }

  // sub - computed: false, optional: true, required: false
  private _sub?: string; 
  public get sub() {
    return this.getStringAttribute('sub');
  }
  public set sub(value: string) {
    this._sub = value;
  }
  public resetSub() {
    this._sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subInput() {
    return this._sub;
  }

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
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

  // user_login - computed: false, optional: true, required: false
  private _userLogin?: string; 
  public get userLogin() {
    return this.getStringAttribute('user_login');
  }
  public set userLogin(value: string) {
    this._userLogin = value;
  }
  public resetUserLogin() {
    this._userLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginInput() {
    return this._userLogin;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab {
  /**
  * Allow is a list of TokenRules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow[] | cdktf.IResolvable;
  /**
  * Domain is the domain of your GitLab instance. This will default to 'gitlab.com' - but can be set to the domain of your self-hosted GitLab e.g 'gitlab.example.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#domain DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#domain}
  */
  readonly domain?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowToTerraform, false)(struct!.allow),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._domain = value.domain;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#service_account DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#jwks DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#jwks}
  */
  readonly jwks?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwks: cdktf.stringToTerraform(struct!.jwks),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwks = value.jwks;
    }
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes {
  /**
  * Allow is a list of Rules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow[] | cdktf.IResolvable;
  /**
  * StaticJWKS is the configuration specific to the 'static_jwks' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#static_jwks DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#static_jwks}
  */
  readonly staticJwks?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks;
  /**
  * Type controls which behavior should be used for validating the Kubernetes Service Account token. Support values: - 'in_cluster' - 'static_jwks' If unset, this defaults to 'in_cluster'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#type DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowToTerraform, false)(struct!.allow),
    static_jwks: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksToTerraform(struct!.staticJwks),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowList",
    },
    static_jwks: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksToHclTerraform(struct!.staticJwks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._staticJwks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticJwks = this._staticJwks?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._staticJwks.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._staticJwks.internalValue = value.staticJwks;
      this._type = value.type;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // static_jwks - computed: false, optional: true, required: false
  private _staticJwks = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwksOutputReference(this, "static_jwks");
  public get staticJwks() {
    return this._staticJwks;
  }
  public putStaticJwks(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesStaticJwks) {
    this._staticJwks.internalValue = value;
  }
  public resetStaticJwks() {
    this._staticJwks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticJwksInput() {
    return this._staticJwks.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
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
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#caller_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#caller_type DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#caller_type}
  */
  readonly callerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#scope DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#space_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#space_id}
  */
  readonly spaceId?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caller_id: cdktf.stringToTerraform(struct!.callerId),
    caller_type: cdktf.stringToTerraform(struct!.callerType),
    scope: cdktf.stringToTerraform(struct!.scope),
    space_id: cdktf.stringToTerraform(struct!.spaceId),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caller_id: {
      value: cdktf.stringToHclTerraform(struct!.callerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caller_type: {
      value: cdktf.stringToHclTerraform(struct!.callerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_id: {
      value: cdktf.stringToHclTerraform(struct!.spaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerId = this._callerId;
    }
    if (this._callerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerType = this._callerType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._spaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceId = this._spaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callerId = undefined;
      this._callerType = undefined;
      this._scope = undefined;
      this._spaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callerId = value.callerId;
      this._callerType = value.callerType;
      this._scope = value.scope;
      this._spaceId = value.spaceId;
    }
  }

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // caller_type - computed: false, optional: true, required: false
  private _callerType?: string; 
  public get callerType() {
    return this.getStringAttribute('caller_type');
  }
  public set callerType(value: string) {
    this._callerType = value;
  }
  public resetCallerType() {
    this._callerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerTypeInput() {
    return this._callerType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift {
  /**
  * Allow is a list of Rules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow[] | cdktf.IResolvable;
  /**
  * Hostname is the hostname of the Spacelift tenant that tokens will originate from. E.g 'example.app.spacelift.io'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#hostname DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#hostname}
  */
  readonly hostname?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowToTerraform, false)(struct!.allow),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._hostname = value.hostname;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#organization_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#organization_name DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#project_name DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#run_phase DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#run_phase}
  */
  readonly runPhase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#workspace_id DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#workspace_name DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#workspace_name}
  */
  readonly workspaceName?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    run_phase: cdktf.stringToTerraform(struct!.runPhase),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_name: cdktf.stringToTerraform(struct!.workspaceName),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_phase: {
      value: cdktf.stringToHclTerraform(struct!.runPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktf.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._runPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.runPhase = this._runPhase;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationId = undefined;
      this._organizationName = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
      this._runPhase = undefined;
      this._workspaceId = undefined;
      this._workspaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationId = value.organizationId;
      this._organizationName = value.organizationName;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
      this._runPhase = value.runPhase;
      this._workspaceId = value.workspaceId;
      this._workspaceName = value.workspaceName;
    }
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // run_phase - computed: false, optional: true, required: false
  private _runPhase?: string; 
  public get runPhase() {
    return this.getStringAttribute('run_phase');
  }
  public set runPhase(value: string) {
    this._runPhase = value;
  }
  public resetRunPhase() {
    this._runPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPhaseInput() {
    return this._runPhase;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_name - computed: false, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud {
  /**
  * Allow is a list of Rules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow[] | cdktf.IResolvable;
  /**
  * Audience is the JWT audience as configured in the TFC_WORKLOAD_IDENTITY_AUDIENCE(_$TAG) variable in Terraform Cloud. If unset, defaults to the Teleport cluster name. For example, if 'TFC_WORKLOAD_IDENTITY_AUDIENCE_TELEPORT=foo' is set in Terraform Cloud, this value should be 'foo'. If the variable is set to match the cluster name, it does not need to be set here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#audience DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Hostname is the hostname of the Terraform Enterprise instance expected to issue JWTs allowed by this token. This may be unset for regular Terraform Cloud use, in which case it will be assumed to be 'app.terraform.io'. Otherwise, it must both match the 'iss' (issuer) field included in JWTs, and provide standard JWKS endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#hostname DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#hostname}
  */
  readonly hostname?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowToTerraform, false)(struct!.allow),
    audience: cdktf.stringToTerraform(struct!.audience),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowList",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._audience = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._audience = value.audience;
      this._hostname = value.hostname;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#description DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ek_certificate_serial DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ek_certificate_serial}
  */
  readonly ekCertificateSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ek_public_hash DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ek_public_hash}
  */
  readonly ekPublicHash?: string;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ek_certificate_serial: cdktf.stringToTerraform(struct!.ekCertificateSerial),
    ek_public_hash: cdktf.stringToTerraform(struct!.ekPublicHash),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow | cdktf.IResolvable): any {
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
    ek_certificate_serial: {
      value: cdktf.stringToHclTerraform(struct!.ekCertificateSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ek_public_hash: {
      value: cdktf.stringToHclTerraform(struct!.ekPublicHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ekCertificateSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekCertificateSerial = this._ekCertificateSerial;
    }
    if (this._ekPublicHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekPublicHash = this._ekPublicHash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ekCertificateSerial = undefined;
      this._ekPublicHash = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ekCertificateSerial = value.ekCertificateSerial;
      this._ekPublicHash = value.ekPublicHash;
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

  // ek_certificate_serial - computed: false, optional: true, required: false
  private _ekCertificateSerial?: string; 
  public get ekCertificateSerial() {
    return this.getStringAttribute('ek_certificate_serial');
  }
  public set ekCertificateSerial(value: string) {
    this._ekCertificateSerial = value;
  }
  public resetEkCertificateSerial() {
    this._ekCertificateSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekCertificateSerialInput() {
    return this._ekCertificateSerial;
  }

  // ek_public_hash - computed: false, optional: true, required: false
  private _ekPublicHash?: string; 
  public get ekPublicHash() {
    return this.getStringAttribute('ek_public_hash');
  }
  public set ekPublicHash(value: string) {
    this._ekPublicHash = value;
  }
  public resetEkPublicHash() {
    this._ekPublicHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekPublicHashInput() {
    return this._ekPublicHash;
  }
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowOutputReference {
    return new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm {
  /**
  * Allow is a list of Rules, the presented delegated identity must match one allow rule to permit joining.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow[] | cdktf.IResolvable;
  /**
  * EKCertAllowedCAs is a list of CA certificates that will be used to validate TPM EKCerts. When specified, joining TPMs must present an EKCert signed by one of the specified CAs. TPMs that do not present an EKCert will be not permitted to join. When unspecified, TPMs will be allowed to join with either an EKCert or an EKPubHash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#ekcert_allowed_cas DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#ekcert_allowed_cas}
  */
  readonly ekcertAllowedCas?: string[];
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowToTerraform, false)(struct!.allow),
    ekcert_allowed_cas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ekcertAllowedCas),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowList",
    },
    ekcert_allowed_cas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ekcertAllowedCas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._ekcertAllowedCas !== undefined) {
      hasAnyValues = true;
      internalValueResult.ekcertAllowedCas = this._ekcertAllowedCas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._ekcertAllowedCas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._ekcertAllowedCas = value.ekcertAllowedCas;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // ekcert_allowed_cas - computed: false, optional: true, required: false
  private _ekcertAllowedCas?: string[]; 
  public get ekcertAllowedCas() {
    return this.getListAttribute('ekcert_allowed_cas');
  }
  public set ekcertAllowedCas(value: string[]) {
    this._ekcertAllowedCas = value;
  }
  public resetEkcertAllowedCas() {
    this._ekcertAllowedCas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ekcertAllowedCasInput() {
    return this._ekcertAllowedCas;
  }
}
export interface DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec {
  /**
  * Allow is a list of TokenRules, nodes using this token must match one allow rule to use this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#allow DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow[] | cdktf.IResolvable;
  /**
  * AWSIIDTTL is the TTL to use for AWS EC2 Instance Identity Documents used to join the cluster with this token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#aws_iid_ttl DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#aws_iid_ttl}
  */
  readonly awsIidTtl?: string;
  /**
  * Azure allows the configuration of options specific to the 'azure' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#azure DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#azure}
  */
  readonly azure?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure;
  /**
  * BotName is the name of the bot this token grants access to, if any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#bot_name DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#bot_name}
  */
  readonly botName?: string;
  /**
  * CircleCI allows the configuration of options specific to the 'circleci' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#circleci DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#circleci}
  */
  readonly circleci?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci;
  /**
  * GCP allows the configuration of options specific to the 'gcp' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#gcp DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#gcp}
  */
  readonly gcp?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp;
  /**
  * GitHub allows the configuration of options specific to the 'github' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#github DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#github}
  */
  readonly github?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub;
  /**
  * GitLab allows the configuration of options specific to the 'gitlab' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#gitlab DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#gitlab}
  */
  readonly gitlab?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab;
  /**
  * JoinMethod is the joining method required in order to use this token. Supported joining methods include: azure, circleci, ec2, gcp, github, gitlab, iam, kubernetes, spacelift, token, tpm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#join_method DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#join_method}
  */
  readonly joinMethod?: string;
  /**
  * Kubernetes allows the configuration of options specific to the 'kubernetes' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#kubernetes DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes;
  /**
  * Roles is a list of roles associated with the token, that will be converted to metadata in the SSH and X509 certificates issued to the user of the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#roles DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Spacelift allows the configuration of options specific to the 'spacelift' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#spacelift DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#spacelift}
  */
  readonly spacelift?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift;
  /**
  * SuggestedAgentMatcherLabels is a set of labels to be used by agents to match on resources. When an agent uses this token, the agent should monitor resources that match those labels. For databases, this means adding the labels to 'db_service.resources.labels'. Currently, only node-join scripts create a configuration according to the suggestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#suggested_agent_matcher_labels DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#suggested_agent_matcher_labels}
  */
  readonly suggestedAgentMatcherLabels?: { [key: string]: string };
  /**
  * SuggestedLabels is a set of labels that resources should set when using this token to enroll themselves in the cluster. Currently, only node-join scripts create a configuration according to the suggestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#suggested_labels DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#suggested_labels}
  */
  readonly suggestedLabels?: { [key: string]: string };
  /**
  * TerraformCloud allows the configuration of options specific to the 'terraform_cloud' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#terraform_cloud DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#terraform_cloud}
  */
  readonly terraformCloud?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud;
  /**
  * TPM allows the configuration of options specific to the 'tpm' join method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#tpm DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest#tpm}
  */
  readonly tpm?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm;
}

export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowToTerraform, false)(struct!.allow),
    aws_iid_ttl: cdktf.stringToTerraform(struct!.awsIidTtl),
    azure: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureToTerraform(struct!.azure),
    bot_name: cdktf.stringToTerraform(struct!.botName),
    circleci: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciToTerraform(struct!.circleci),
    gcp: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpToTerraform(struct!.gcp),
    github: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubToTerraform(struct!.github),
    gitlab: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabToTerraform(struct!.gitlab),
    join_method: cdktf.stringToTerraform(struct!.joinMethod),
    kubernetes: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    spacelift: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftToTerraform(struct!.spacelift),
    suggested_agent_matcher_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.suggestedAgentMatcherLabels),
    suggested_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.suggestedLabels),
    terraform_cloud: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudToTerraform(struct!.terraformCloud),
    tpm: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmToTerraform(struct!.tpm),
  }
}


export function dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowList",
    },
    aws_iid_ttl: {
      value: cdktf.stringToHclTerraform(struct!.awsIidTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure",
    },
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circleci: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciToHclTerraform(struct!.circleci),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci",
    },
    gcp: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp",
    },
    github: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub",
    },
    gitlab: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab",
    },
    join_method: {
      value: cdktf.stringToHclTerraform(struct!.joinMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spacelift: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftToHclTerraform(struct!.spacelift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift",
    },
    suggested_agent_matcher_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.suggestedAgentMatcherLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    suggested_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.suggestedLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    terraform_cloud: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudToHclTerraform(struct!.terraformCloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud",
    },
    tpm: {
      value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmToHclTerraform(struct!.tpm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._awsIidTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIidTtl = this._awsIidTtl;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    if (this._circleci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circleci = this._circleci?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._joinMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinMethod = this._joinMethod;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._spacelift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spacelift = this._spacelift?.internalValue;
    }
    if (this._suggestedAgentMatcherLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedAgentMatcherLabels = this._suggestedAgentMatcherLabels;
    }
    if (this._suggestedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedLabels = this._suggestedLabels;
    }
    if (this._terraformCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformCloud = this._terraformCloud?.internalValue;
    }
    if (this._tpm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpm = this._tpm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._awsIidTtl = undefined;
      this._azure.internalValue = undefined;
      this._botName = undefined;
      this._circleci.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._joinMethod = undefined;
      this._kubernetes.internalValue = undefined;
      this._roles = undefined;
      this._spacelift.internalValue = undefined;
      this._suggestedAgentMatcherLabels = undefined;
      this._suggestedLabels = undefined;
      this._terraformCloud.internalValue = undefined;
      this._tpm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._awsIidTtl = value.awsIidTtl;
      this._azure.internalValue = value.azure;
      this._botName = value.botName;
      this._circleci.internalValue = value.circleci;
      this._gcp.internalValue = value.gcp;
      this._github.internalValue = value.github;
      this._gitlab.internalValue = value.gitlab;
      this._joinMethod = value.joinMethod;
      this._kubernetes.internalValue = value.kubernetes;
      this._roles = value.roles;
      this._spacelift.internalValue = value.spacelift;
      this._suggestedAgentMatcherLabels = value.suggestedAgentMatcherLabels;
      this._suggestedLabels = value.suggestedLabels;
      this._terraformCloud.internalValue = value.terraformCloud;
      this._tpm.internalValue = value.tpm;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // aws_iid_ttl - computed: false, optional: true, required: false
  private _awsIidTtl?: string; 
  public get awsIidTtl() {
    return this.getStringAttribute('aws_iid_ttl');
  }
  public set awsIidTtl(value: string) {
    this._awsIidTtl = value;
  }
  public resetAwsIidTtl() {
    this._awsIidTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIidTtlInput() {
    return this._awsIidTtl;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // bot_name - computed: false, optional: true, required: false
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  public resetBotName() {
    this._botName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }

  // circleci - computed: false, optional: true, required: false
  private _circleci = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleciOutputReference(this, "circleci");
  public get circleci() {
    return this._circleci;
  }
  public putCircleci(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecCircleci) {
    this._circleci.internalValue = value;
  }
  public resetCircleci() {
    this._circleci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circleciInput() {
    return this._circleci.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // join_method - computed: false, optional: true, required: false
  private _joinMethod?: string; 
  public get joinMethod() {
    return this.getStringAttribute('join_method');
  }
  public set joinMethod(value: string) {
    this._joinMethod = value;
  }
  public resetJoinMethod() {
    this._joinMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinMethodInput() {
    return this._joinMethod;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // spacelift - computed: false, optional: true, required: false
  private _spacelift = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpaceliftOutputReference(this, "spacelift");
  public get spacelift() {
    return this._spacelift;
  }
  public putSpacelift(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecSpacelift) {
    this._spacelift.internalValue = value;
  }
  public resetSpacelift() {
    this._spacelift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceliftInput() {
    return this._spacelift.internalValue;
  }

  // suggested_agent_matcher_labels - computed: false, optional: true, required: false
  private _suggestedAgentMatcherLabels?: { [key: string]: string }; 
  public get suggestedAgentMatcherLabels() {
    return this.getStringMapAttribute('suggested_agent_matcher_labels');
  }
  public set suggestedAgentMatcherLabels(value: { [key: string]: string }) {
    this._suggestedAgentMatcherLabels = value;
  }
  public resetSuggestedAgentMatcherLabels() {
    this._suggestedAgentMatcherLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedAgentMatcherLabelsInput() {
    return this._suggestedAgentMatcherLabels;
  }

  // suggested_labels - computed: false, optional: true, required: false
  private _suggestedLabels?: { [key: string]: string }; 
  public get suggestedLabels() {
    return this.getStringMapAttribute('suggested_labels');
  }
  public set suggestedLabels(value: { [key: string]: string }) {
    this._suggestedLabels = value;
  }
  public resetSuggestedLabels() {
    this._suggestedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedLabelsInput() {
    return this._suggestedLabels;
  }

  // terraform_cloud - computed: false, optional: true, required: false
  private _terraformCloud = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloudOutputReference(this, "terraform_cloud");
  public get terraformCloud() {
    return this._terraformCloud;
  }
  public putTerraformCloud(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTerraformCloud) {
    this._terraformCloud.internalValue = value;
  }
  public resetTerraformCloud() {
    this._terraformCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformCloudInput() {
    return this._terraformCloud.internalValue;
  }

  // tpm - computed: false, optional: true, required: false
  private _tpm = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpmOutputReference(this, "tpm");
  public get tpm() {
    return this._tpm;
  }
  public putTpm(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecTpm) {
    this._tpm.internalValue = value;
  }
  public resetTpm() {
    this._tpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmInput() {
    return this._tpm.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest k8s_resources_teleport_dev_teleport_provision_token_v2_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_provision_token_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportProvisionTokenV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_provision_token_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/resources_teleport_dev_teleport_provision_token_v2_manifest k8s_resources_teleport_dev_teleport_provision_token_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_provision_token_v2_manifest',
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
  private _metadata = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec) {
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
      metadata: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportProvisionTokenV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
