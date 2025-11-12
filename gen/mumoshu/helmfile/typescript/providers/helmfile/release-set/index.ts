// https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#aws_profile ReleaseSet#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#aws_region ReleaseSet#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#binary ReleaseSet#binary}
  */
  readonly binary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#concurrency ReleaseSet#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#content ReleaseSet#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#dirty ReleaseSet#dirty}
  */
  readonly dirty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#environment ReleaseSet#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#environment_variables ReleaseSet#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#helm_binary ReleaseSet#helm_binary}
  */
  readonly helmBinary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#helm_diff_version ReleaseSet#helm_diff_version}
  */
  readonly helmDiffVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#helm_version ReleaseSet#helm_version}
  */
  readonly helmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#id ReleaseSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#kubeconfig ReleaseSet#kubeconfig}
  */
  readonly kubeconfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#path ReleaseSet#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#releases_values ReleaseSet#releases_values}
  */
  readonly releasesValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#selector ReleaseSet#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#selectors ReleaseSet#selectors}
  */
  readonly selectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#skip_diff_on_missing_files ReleaseSet#skip_diff_on_missing_files}
  */
  readonly skipDiffOnMissingFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#values ReleaseSet#values}
  */
  readonly values?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#values_files ReleaseSet#values_files}
  */
  readonly valuesFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#version ReleaseSet#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#working_directory ReleaseSet#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * aws_assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#aws_assume_role ReleaseSet#aws_assume_role}
  */
  readonly awsAssumeRole?: ReleaseSetAwsAssumeRole;
}
export interface ReleaseSetAwsAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#duration_seconds ReleaseSet#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#external_id ReleaseSet#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#policy ReleaseSet#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#policy_arns ReleaseSet#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#role_arn ReleaseSet#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#session_name ReleaseSet#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#tags ReleaseSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#transitive_tag_keys ReleaseSet#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function releaseSetAwsAssumeRoleToTerraform(struct?: ReleaseSetAwsAssumeRoleOutputReference | ReleaseSetAwsAssumeRole): any {
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


export function releaseSetAwsAssumeRoleToHclTerraform(struct?: ReleaseSetAwsAssumeRoleOutputReference | ReleaseSetAwsAssumeRole): any {
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

export class ReleaseSetAwsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReleaseSetAwsAssumeRole | undefined {
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

  public set internalValue(value: ReleaseSetAwsAssumeRole | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set helmfile_release_set}
*/
export class ReleaseSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helmfile_release_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseSet to import
  * @param importFromId The id of the existing ReleaseSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helmfile_release_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release_set helmfile_release_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseSetConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseSetConfig) {
    super(scope, id, {
      terraformResourceType: 'helmfile_release_set',
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
    this._awsProfile = config.awsProfile;
    this._awsRegion = config.awsRegion;
    this._binary = config.binary;
    this._concurrency = config.concurrency;
    this._content = config.content;
    this._dirty = config.dirty;
    this._environment = config.environment;
    this._environmentVariables = config.environmentVariables;
    this._helmBinary = config.helmBinary;
    this._helmDiffVersion = config.helmDiffVersion;
    this._helmVersion = config.helmVersion;
    this._id = config.id;
    this._kubeconfig = config.kubeconfig;
    this._path = config.path;
    this._releasesValues = config.releasesValues;
    this._selector = config.selector;
    this._selectors = config.selectors;
    this._skipDiffOnMissingFiles = config.skipDiffOnMissingFiles;
    this._values = config.values;
    this._valuesFiles = config.valuesFiles;
    this._version = config.version;
    this._workingDirectory = config.workingDirectory;
    this._awsAssumeRole.internalValue = config.awsAssumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _awsAssumeRole = new ReleaseSetAwsAssumeRoleOutputReference(this, "aws_assume_role");
  public get awsAssumeRole() {
    return this._awsAssumeRole;
  }
  public putAwsAssumeRole(value: ReleaseSetAwsAssumeRole) {
    this._awsAssumeRole.internalValue = value;
  }
  public resetAwsAssumeRole() {
    this._awsAssumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleInput() {
    return this._awsAssumeRole.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      binary: cdktf.stringToTerraform(this._binary),
      concurrency: cdktf.numberToTerraform(this._concurrency),
      content: cdktf.stringToTerraform(this._content),
      dirty: cdktf.booleanToTerraform(this._dirty),
      environment: cdktf.stringToTerraform(this._environment),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      helm_binary: cdktf.stringToTerraform(this._helmBinary),
      helm_diff_version: cdktf.stringToTerraform(this._helmDiffVersion),
      helm_version: cdktf.stringToTerraform(this._helmVersion),
      id: cdktf.stringToTerraform(this._id),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      path: cdktf.stringToTerraform(this._path),
      releases_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._releasesValues),
      selector: cdktf.hashMapper(cdktf.stringToTerraform)(this._selector),
      selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectors),
      skip_diff_on_missing_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skipDiffOnMissingFiles),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      values_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valuesFiles),
      version: cdktf.stringToTerraform(this._version),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      aws_assume_role: releaseSetAwsAssumeRoleToTerraform(this._awsAssumeRole.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_profile: {
        value: cdktf.stringToHclTerraform(this._awsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary: {
        value: cdktf.stringToHclTerraform(this._binary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dirty: {
        value: cdktf.booleanToHclTerraform(this._dirty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      helm_binary: {
        value: cdktf.stringToHclTerraform(this._helmBinary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helm_diff_version: {
        value: cdktf.stringToHclTerraform(this._helmDiffVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helm_version: {
        value: cdktf.stringToHclTerraform(this._helmVersion),
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
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      releases_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._releasesValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      selector: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._selector),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_diff_on_missing_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skipDiffOnMissingFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      values_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valuesFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_assume_role: {
        value: releaseSetAwsAssumeRoleToHclTerraform(this._awsAssumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseSetAwsAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
