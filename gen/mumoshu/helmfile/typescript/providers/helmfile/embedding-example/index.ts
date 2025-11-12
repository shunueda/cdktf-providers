// https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmbeddingExampleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#id EmbeddingExample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * embedded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#embedded EmbeddingExample#embedded}
  */
  readonly embedded?: EmbeddingExampleEmbedded[] | cdktf.IResolvable;
}
export interface EmbeddingExampleEmbeddedAwsAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#duration_seconds EmbeddingExample#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#external_id EmbeddingExample#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#policy EmbeddingExample#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#policy_arns EmbeddingExample#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#role_arn EmbeddingExample#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#session_name EmbeddingExample#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#tags EmbeddingExample#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#transitive_tag_keys EmbeddingExample#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function embeddingExampleEmbeddedAwsAssumeRoleToTerraform(struct?: EmbeddingExampleEmbeddedAwsAssumeRoleOutputReference | EmbeddingExampleEmbeddedAwsAssumeRole): any {
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


export function embeddingExampleEmbeddedAwsAssumeRoleToHclTerraform(struct?: EmbeddingExampleEmbeddedAwsAssumeRoleOutputReference | EmbeddingExampleEmbeddedAwsAssumeRole): any {
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

export class EmbeddingExampleEmbeddedAwsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmbeddingExampleEmbeddedAwsAssumeRole | undefined {
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

  public set internalValue(value: EmbeddingExampleEmbeddedAwsAssumeRole | undefined) {
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
export interface EmbeddingExampleEmbedded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#aws_profile EmbeddingExample#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#aws_region EmbeddingExample#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#binary EmbeddingExample#binary}
  */
  readonly binary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#concurrency EmbeddingExample#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#content EmbeddingExample#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#dirty EmbeddingExample#dirty}
  */
  readonly dirty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#environment EmbeddingExample#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#environment_variables EmbeddingExample#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#helm_binary EmbeddingExample#helm_binary}
  */
  readonly helmBinary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#helm_diff_version EmbeddingExample#helm_diff_version}
  */
  readonly helmDiffVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#helm_version EmbeddingExample#helm_version}
  */
  readonly helmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#kubeconfig EmbeddingExample#kubeconfig}
  */
  readonly kubeconfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#path EmbeddingExample#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#releases_values EmbeddingExample#releases_values}
  */
  readonly releasesValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#selector EmbeddingExample#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#selectors EmbeddingExample#selectors}
  */
  readonly selectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#skip_diff_on_missing_files EmbeddingExample#skip_diff_on_missing_files}
  */
  readonly skipDiffOnMissingFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#values EmbeddingExample#values}
  */
  readonly values?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#values_files EmbeddingExample#values_files}
  */
  readonly valuesFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#version EmbeddingExample#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#working_directory EmbeddingExample#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * aws_assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#aws_assume_role EmbeddingExample#aws_assume_role}
  */
  readonly awsAssumeRole?: EmbeddingExampleEmbeddedAwsAssumeRole;
}

export function embeddingExampleEmbeddedToTerraform(struct?: EmbeddingExampleEmbedded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    binary: cdktf.stringToTerraform(struct!.binary),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    content: cdktf.stringToTerraform(struct!.content),
    dirty: cdktf.booleanToTerraform(struct!.dirty),
    environment: cdktf.stringToTerraform(struct!.environment),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    helm_binary: cdktf.stringToTerraform(struct!.helmBinary),
    helm_diff_version: cdktf.stringToTerraform(struct!.helmDiffVersion),
    helm_version: cdktf.stringToTerraform(struct!.helmVersion),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
    path: cdktf.stringToTerraform(struct!.path),
    releases_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.releasesValues),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    skip_diff_on_missing_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.skipDiffOnMissingFiles),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    values_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesFiles),
    version: cdktf.stringToTerraform(struct!.version),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    aws_assume_role: embeddingExampleEmbeddedAwsAssumeRoleToTerraform(struct!.awsAssumeRole),
  }
}


export function embeddingExampleEmbeddedToHclTerraform(struct?: EmbeddingExampleEmbedded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary: {
      value: cdktf.stringToHclTerraform(struct!.binary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dirty: {
      value: cdktf.booleanToHclTerraform(struct!.dirty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    helm_binary: {
      value: cdktf.stringToHclTerraform(struct!.helmBinary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_diff_version: {
      value: cdktf.stringToHclTerraform(struct!.helmDiffVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_version: {
      value: cdktf.stringToHclTerraform(struct!.helmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    releases_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.releasesValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_diff_on_missing_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.skipDiffOnMissingFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_assume_role: {
      value: embeddingExampleEmbeddedAwsAssumeRoleToHclTerraform(struct!.awsAssumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "EmbeddingExampleEmbeddedAwsAssumeRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmbeddingExampleEmbeddedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmbeddingExampleEmbedded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsProfile = this._awsProfile;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._binary !== undefined) {
      hasAnyValues = true;
      internalValueResult.binary = this._binary;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._dirty !== undefined) {
      hasAnyValues = true;
      internalValueResult.dirty = this._dirty;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._helmBinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmBinary = this._helmBinary;
    }
    if (this._helmDiffVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmDiffVersion = this._helmDiffVersion;
    }
    if (this._helmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmVersion = this._helmVersion;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._releasesValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.releasesValues = this._releasesValues;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._skipDiffOnMissingFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDiffOnMissingFiles = this._skipDiffOnMissingFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesFiles = this._valuesFiles;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._awsAssumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAssumeRole = this._awsAssumeRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmbeddingExampleEmbedded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsProfile = undefined;
      this._awsRegion = undefined;
      this._binary = undefined;
      this._concurrency = undefined;
      this._content = undefined;
      this._dirty = undefined;
      this._environment = undefined;
      this._environmentVariables = undefined;
      this._helmBinary = undefined;
      this._helmDiffVersion = undefined;
      this._helmVersion = undefined;
      this._kubeconfig = undefined;
      this._path = undefined;
      this._releasesValues = undefined;
      this._selector = undefined;
      this._selectors = undefined;
      this._skipDiffOnMissingFiles = undefined;
      this._values = undefined;
      this._valuesFiles = undefined;
      this._version = undefined;
      this._workingDirectory = undefined;
      this._awsAssumeRole.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsProfile = value.awsProfile;
      this._awsRegion = value.awsRegion;
      this._binary = value.binary;
      this._concurrency = value.concurrency;
      this._content = value.content;
      this._dirty = value.dirty;
      this._environment = value.environment;
      this._environmentVariables = value.environmentVariables;
      this._helmBinary = value.helmBinary;
      this._helmDiffVersion = value.helmDiffVersion;
      this._helmVersion = value.helmVersion;
      this._kubeconfig = value.kubeconfig;
      this._path = value.path;
      this._releasesValues = value.releasesValues;
      this._selector = value.selector;
      this._selectors = value.selectors;
      this._skipDiffOnMissingFiles = value.skipDiffOnMissingFiles;
      this._values = value.values;
      this._valuesFiles = value.valuesFiles;
      this._version = value.version;
      this._workingDirectory = value.workingDirectory;
      this._awsAssumeRole.internalValue = value.awsAssumeRole;
    }
  }

  // apply_output - computed: true, optional: false, required: false
  public get applyOutput() {
    return this.getStringAttribute('apply_output');
  }

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this.getStringAttribute('aws_profile');
  }
  public set awsProfile(value: string) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // binary - computed: false, optional: true, required: false
  private _binary?: string; 
  public get binary() {
    return this.getStringAttribute('binary');
  }
  public set binary(value: string) {
    this._binary = value;
  }
  public resetBinary() {
    this._binary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // diff_output - computed: true, optional: false, required: false
  public get diffOutput() {
    return this.getStringAttribute('diff_output');
  }

  // dirty - computed: false, optional: true, required: false
  private _dirty?: boolean | cdktf.IResolvable; 
  public get dirty() {
    return this.getBooleanAttribute('dirty');
  }
  public set dirty(value: boolean | cdktf.IResolvable) {
    this._dirty = value;
  }
  public resetDirty() {
    this._dirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyInput() {
    return this._dirty;
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

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // helm_binary - computed: false, optional: true, required: false
  private _helmBinary?: string; 
  public get helmBinary() {
    return this.getStringAttribute('helm_binary');
  }
  public set helmBinary(value: string) {
    this._helmBinary = value;
  }
  public resetHelmBinary() {
    this._helmBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmBinaryInput() {
    return this._helmBinary;
  }

  // helm_diff_version - computed: false, optional: true, required: false
  private _helmDiffVersion?: string; 
  public get helmDiffVersion() {
    return this.getStringAttribute('helm_diff_version');
  }
  public set helmDiffVersion(value: string) {
    this._helmDiffVersion = value;
  }
  public resetHelmDiffVersion() {
    this._helmDiffVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmDiffVersionInput() {
    return this._helmDiffVersion;
  }

  // helm_version - computed: false, optional: true, required: false
  private _helmVersion?: string; 
  public get helmVersion() {
    return this.getStringAttribute('helm_version');
  }
  public set helmVersion(value: string) {
    this._helmVersion = value;
  }
  public resetHelmVersion() {
    this._helmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmVersionInput() {
    return this._helmVersion;
  }

  // kubeconfig - computed: false, optional: false, required: true
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // releases_values - computed: false, optional: true, required: false
  private _releasesValues?: { [key: string]: string }; 
  public get releasesValues() {
    return this.getStringMapAttribute('releases_values');
  }
  public set releasesValues(value: { [key: string]: string }) {
    this._releasesValues = value;
  }
  public resetReleasesValues() {
    this._releasesValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesValuesInput() {
    return this._releasesValues;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }

  // skip_diff_on_missing_files - computed: false, optional: true, required: false
  private _skipDiffOnMissingFiles?: string[]; 
  public get skipDiffOnMissingFiles() {
    return this.getListAttribute('skip_diff_on_missing_files');
  }
  public set skipDiffOnMissingFiles(value: string[]) {
    this._skipDiffOnMissingFiles = value;
  }
  public resetSkipDiffOnMissingFiles() {
    this._skipDiffOnMissingFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDiffOnMissingFilesInput() {
    return this._skipDiffOnMissingFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_files - computed: false, optional: true, required: false
  private _valuesFiles?: string[]; 
  public get valuesFiles() {
    return this.getListAttribute('values_files');
  }
  public set valuesFiles(value: string[]) {
    this._valuesFiles = value;
  }
  public resetValuesFiles() {
    this._valuesFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesFilesInput() {
    return this._valuesFiles;
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

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // aws_assume_role - computed: false, optional: true, required: false
  private _awsAssumeRole = new EmbeddingExampleEmbeddedAwsAssumeRoleOutputReference(this, "aws_assume_role");
  public get awsAssumeRole() {
    return this._awsAssumeRole;
  }
  public putAwsAssumeRole(value: EmbeddingExampleEmbeddedAwsAssumeRole) {
    this._awsAssumeRole.internalValue = value;
  }
  public resetAwsAssumeRole() {
    this._awsAssumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleInput() {
    return this._awsAssumeRole.internalValue;
  }
}

export class EmbeddingExampleEmbeddedList extends cdktf.ComplexList {
  public internalValue? : EmbeddingExampleEmbedded[] | cdktf.IResolvable

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
  public get(index: number): EmbeddingExampleEmbeddedOutputReference {
    return new EmbeddingExampleEmbeddedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example helmfile_embedding_example}
*/
export class EmbeddingExample extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helmfile_embedding_example";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmbeddingExample resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmbeddingExample to import
  * @param importFromId The id of the existing EmbeddingExample that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmbeddingExample to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helmfile_embedding_example", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/embedding_example helmfile_embedding_example} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmbeddingExampleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EmbeddingExampleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'helmfile_embedding_example',
      terraformGeneratorMetadata: {
        providerName: 'helmfile',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._embedded.internalValue = config.embedded;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // embedded - computed: false, optional: true, required: false
  private _embedded = new EmbeddingExampleEmbeddedList(this, "embedded", false);
  public get embedded() {
    return this._embedded;
  }
  public putEmbedded(value: EmbeddingExampleEmbedded[] | cdktf.IResolvable) {
    this._embedded.internalValue = value;
  }
  public resetEmbedded() {
    this._embedded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedInput() {
    return this._embedded.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      embedded: cdktf.listMapper(embeddingExampleEmbeddedToTerraform, true)(this._embedded.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embedded: {
        value: cdktf.listMapperHcl(embeddingExampleEmbeddedToHclTerraform, true)(this._embedded.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmbeddingExampleEmbeddedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
