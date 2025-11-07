// https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#api_version Cluster#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#drain_node_groups Cluster#drain_node_groups}
  */
  readonly drainNodeGroups?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#eksctl_bin Cluster#eksctl_bin}
  */
  readonly eksctlBin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#eksctl_version Cluster#eksctl_version}
  */
  readonly eksctlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#kubeconfig_path Cluster#kubeconfig_path}
  */
  readonly kubeconfigPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#kubectl_bin Cluster#kubectl_bin}
  */
  readonly kubectlBin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#profile Cluster#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#revision Cluster#revision}
  */
  readonly revision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#spec Cluster#spec}
  */
  readonly spec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#tags Cluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#vpc_id Cluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#assume_role Cluster#assume_role}
  */
  readonly assumeRole?: ClusterAssumeRole;
  /**
  * aws_auth_configmap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#aws_auth_configmap Cluster#aws_auth_configmap}
  */
  readonly awsAuthConfigmap?: ClusterAwsAuthConfigmap[] | cdktf.IResolvable;
  /**
  * iam_identity_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#iam_identity_mapping Cluster#iam_identity_mapping}
  */
  readonly iamIdentityMapping?: ClusterIamIdentityMapping[] | cdktf.IResolvable;
}
export interface ClusterAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#duration_seconds Cluster#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#external_id Cluster#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#policy Cluster#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#policy_arns Cluster#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#role_arn Cluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#session_name Cluster#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#tags Cluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#transitive_tag_keys Cluster#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function clusterAssumeRoleToTerraform(struct?: ClusterAssumeRoleOutputReference | ClusterAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function clusterAssumeRoleToHclTerraform(struct?: ClusterAssumeRoleOutputReference | ClusterAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAssumeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArns = this._policyArns;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._transitiveTagKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitiveTagKeys = this._transitiveTagKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAssumeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._externalId = undefined;
      this._policy = undefined;
      this._policyArns = undefined;
      this._roleArn = undefined;
      this._sessionName = undefined;
      this._tags = undefined;
      this._transitiveTagKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._externalId = value.externalId;
      this._policy = value.policy;
      this._policyArns = value.policyArns;
      this._roleArn = value.roleArn;
      this._sessionName = value.sessionName;
      this._tags = value.tags;
      this._transitiveTagKeys = value.transitiveTagKeys;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
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

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
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

  // transitive_tag_keys - computed: false, optional: true, required: false
  private _transitiveTagKeys?: string[]; 
  public get transitiveTagKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('transitive_tag_keys'));
  }
  public set transitiveTagKeys(value: string[]) {
    this._transitiveTagKeys = value;
  }
  public resetTransitiveTagKeys() {
    this._transitiveTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveTagKeysInput() {
    return this._transitiveTagKeys;
  }
}
export interface ClusterAwsAuthConfigmap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#groups Cluster#groups}
  */
  readonly groups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#iamarn Cluster#iamarn}
  */
  readonly iamarn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#username Cluster#username}
  */
  readonly username: string;
}

export function clusterAwsAuthConfigmapToTerraform(struct?: ClusterAwsAuthConfigmap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    iamarn: cdktf.stringToTerraform(struct!.iamarn),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterAwsAuthConfigmapToHclTerraform(struct?: ClusterAwsAuthConfigmap | cdktf.IResolvable): any {
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
    iamarn: {
      value: cdktf.stringToHclTerraform(struct!.iamarn),
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

export class ClusterAwsAuthConfigmapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAwsAuthConfigmap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._iamarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamarn = this._iamarn;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAwsAuthConfigmap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._iamarn = undefined;
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
      this._iamarn = value.iamarn;
      this._username = value.username;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // iamarn - computed: false, optional: false, required: true
  private _iamarn?: string; 
  public get iamarn() {
    return this.getStringAttribute('iamarn');
  }
  public set iamarn(value: string) {
    this._iamarn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamarnInput() {
    return this._iamarn;
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

export class ClusterAwsAuthConfigmapList extends cdktf.ComplexList {
  public internalValue? : ClusterAwsAuthConfigmap[] | cdktf.IResolvable

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
  public get(index: number): ClusterAwsAuthConfigmapOutputReference {
    return new ClusterAwsAuthConfigmapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterIamIdentityMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#groups Cluster#groups}
  */
  readonly groups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#iamarn Cluster#iamarn}
  */
  readonly iamarn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#username Cluster#username}
  */
  readonly username: string;
}

export function clusterIamIdentityMappingToTerraform(struct?: ClusterIamIdentityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    iamarn: cdktf.stringToTerraform(struct!.iamarn),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterIamIdentityMappingToHclTerraform(struct?: ClusterIamIdentityMapping | cdktf.IResolvable): any {
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
    iamarn: {
      value: cdktf.stringToHclTerraform(struct!.iamarn),
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

export class ClusterIamIdentityMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterIamIdentityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._iamarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamarn = this._iamarn;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterIamIdentityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._iamarn = undefined;
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
      this._iamarn = value.iamarn;
      this._username = value.username;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // iamarn - computed: false, optional: false, required: true
  private _iamarn?: string; 
  public get iamarn() {
    return this.getStringAttribute('iamarn');
  }
  public set iamarn(value: string) {
    this._iamarn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamarnInput() {
    return this._iamarn;
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

export class ClusterIamIdentityMappingList extends cdktf.ComplexList {
  public internalValue? : ClusterIamIdentityMapping[] | cdktf.IResolvable

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
  public get(index: number): ClusterIamIdentityMappingOutputReference {
    return new ClusterIamIdentityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster eksctl_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eksctl_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eksctl_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/cluster eksctl_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'eksctl_cluster',
      terraformGeneratorMetadata: {
        providerName: 'eksctl',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._drainNodeGroups = config.drainNodeGroups;
    this._eksctlBin = config.eksctlBin;
    this._eksctlVersion = config.eksctlVersion;
    this._id = config.id;
    this._kubeconfigPath = config.kubeconfigPath;
    this._kubectlBin = config.kubectlBin;
    this._name = config.name;
    this._profile = config.profile;
    this._region = config.region;
    this._revision = config.revision;
    this._spec = config.spec;
    this._tags = config.tags;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._assumeRole.internalValue = config.assumeRole;
    this._awsAuthConfigmap.internalValue = config.awsAuthConfigmap;
    this._iamIdentityMapping.internalValue = config.iamIdentityMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // drain_node_groups - computed: false, optional: true, required: false
  private _drainNodeGroups?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get drainNodeGroups() {
    return this.getBooleanMapAttribute('drain_node_groups');
  }
  public set drainNodeGroups(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._drainNodeGroups = value;
  }
  public resetDrainNodeGroups() {
    this._drainNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeGroupsInput() {
    return this._drainNodeGroups;
  }

  // eksctl_bin - computed: false, optional: true, required: false
  private _eksctlBin?: string; 
  public get eksctlBin() {
    return this.getStringAttribute('eksctl_bin');
  }
  public set eksctlBin(value: string) {
    this._eksctlBin = value;
  }
  public resetEksctlBin() {
    this._eksctlBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksctlBinInput() {
    return this._eksctlBin;
  }

  // eksctl_version - computed: false, optional: true, required: false
  private _eksctlVersion?: string; 
  public get eksctlVersion() {
    return this.getStringAttribute('eksctl_version');
  }
  public set eksctlVersion(value: string) {
    this._eksctlVersion = value;
  }
  public resetEksctlVersion() {
    this._eksctlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksctlVersionInput() {
    return this._eksctlVersion;
  }

  // id - computed: true, optional: true, required: false
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

  // kubeconfig_path - computed: false, optional: true, required: false
  private _kubeconfigPath?: string; 
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }
  public set kubeconfigPath(value: string) {
    this._kubeconfigPath = value;
  }
  public resetKubeconfigPath() {
    this._kubeconfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigPathInput() {
    return this._kubeconfigPath;
  }

  // kubectl_bin - computed: false, optional: true, required: false
  private _kubectlBin?: string; 
  public get kubectlBin() {
    return this.getStringAttribute('kubectl_bin');
  }
  public set kubectlBin(value: string) {
    this._kubectlBin = value;
  }
  public resetKubectlBin() {
    this._kubectlBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubectlBinInput() {
    return this._kubectlBin;
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

  // oidc_provider_arn - computed: true, optional: false, required: false
  public get oidcProviderArn() {
    return this.getStringAttribute('oidc_provider_arn');
  }

  // oidc_provider_url - computed: true, optional: false, required: false
  public get oidcProviderUrl() {
    return this.getStringAttribute('oidc_provider_url');
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new ClusterAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: ClusterAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  public resetAssumeRole() {
    this._assumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }

  // aws_auth_configmap - computed: false, optional: true, required: false
  private _awsAuthConfigmap = new ClusterAwsAuthConfigmapList(this, "aws_auth_configmap", true);
  public get awsAuthConfigmap() {
    return this._awsAuthConfigmap;
  }
  public putAwsAuthConfigmap(value: ClusterAwsAuthConfigmap[] | cdktf.IResolvable) {
    this._awsAuthConfigmap.internalValue = value;
  }
  public resetAwsAuthConfigmap() {
    this._awsAuthConfigmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthConfigmapInput() {
    return this._awsAuthConfigmap.internalValue;
  }

  // iam_identity_mapping - computed: false, optional: true, required: false
  private _iamIdentityMapping = new ClusterIamIdentityMappingList(this, "iam_identity_mapping", true);
  public get iamIdentityMapping() {
    return this._iamIdentityMapping;
  }
  public putIamIdentityMapping(value: ClusterIamIdentityMapping[] | cdktf.IResolvable) {
    this._iamIdentityMapping.internalValue = value;
  }
  public resetIamIdentityMapping() {
    this._iamIdentityMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityMappingInput() {
    return this._iamIdentityMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      drain_node_groups: cdktf.hashMapper(cdktf.booleanToTerraform)(this._drainNodeGroups),
      eksctl_bin: cdktf.stringToTerraform(this._eksctlBin),
      eksctl_version: cdktf.stringToTerraform(this._eksctlVersion),
      id: cdktf.stringToTerraform(this._id),
      kubeconfig_path: cdktf.stringToTerraform(this._kubeconfigPath),
      kubectl_bin: cdktf.stringToTerraform(this._kubectlBin),
      name: cdktf.stringToTerraform(this._name),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      revision: cdktf.numberToTerraform(this._revision),
      spec: cdktf.stringToTerraform(this._spec),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      assume_role: clusterAssumeRoleToTerraform(this._assumeRole.internalValue),
      aws_auth_configmap: cdktf.listMapper(clusterAwsAuthConfigmapToTerraform, true)(this._awsAuthConfigmap.internalValue),
      iam_identity_mapping: cdktf.listMapper(clusterIamIdentityMappingToTerraform, true)(this._iamIdentityMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_node_groups: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._drainNodeGroups),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      eksctl_bin: {
        value: cdktf.stringToHclTerraform(this._eksctlBin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eksctl_version: {
        value: cdktf.stringToHclTerraform(this._eksctlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig_path: {
        value: cdktf.stringToHclTerraform(this._kubeconfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubectl_bin: {
        value: cdktf.stringToHclTerraform(this._kubectlBin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: clusterAssumeRoleToHclTerraform(this._assumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAssumeRoleList",
      },
      aws_auth_configmap: {
        value: cdktf.listMapperHcl(clusterAwsAuthConfigmapToHclTerraform, true)(this._awsAuthConfigmap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterAwsAuthConfigmapList",
      },
      iam_identity_mapping: {
        value: cdktf.listMapperHcl(clusterIamIdentityMappingToHclTerraform, true)(this._iamIdentityMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterIamIdentityMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
