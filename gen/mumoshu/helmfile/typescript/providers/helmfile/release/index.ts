// https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#atomic Release#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#aws_profile Release#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#aws_region Release#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#binary Release#binary}
  */
  readonly binary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#chart Release#chart}
  */
  readonly chart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#dirty Release#dirty}
  */
  readonly dirty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#force Release#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#helm_binary Release#helm_binary}
  */
  readonly helmBinary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#helm_version Release#helm_version}
  */
  readonly helmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#id Release#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#kubeconfig Release#kubeconfig}
  */
  readonly kubeconfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#kubecontext Release#kubecontext}
  */
  readonly kubecontext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#name Release#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#namespace Release#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#timeout Release#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#values Release#values}
  */
  readonly values?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#verify Release#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#version Release#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#wait Release#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#working_directory Release#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * aws_assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#aws_assume_role Release#aws_assume_role}
  */
  readonly awsAssumeRole?: ReleaseAwsAssumeRole;
}
export interface ReleaseAwsAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#duration_seconds Release#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#external_id Release#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#policy Release#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#policy_arns Release#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#role_arn Release#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#session_name Release#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#tags Release#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#transitive_tag_keys Release#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function releaseAwsAssumeRoleToTerraform(struct?: ReleaseAwsAssumeRoleOutputReference | ReleaseAwsAssumeRole): any {
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


export function releaseAwsAssumeRoleToHclTerraform(struct?: ReleaseAwsAssumeRoleOutputReference | ReleaseAwsAssumeRole): any {
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

export class ReleaseAwsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReleaseAwsAssumeRole | undefined {
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

  public set internalValue(value: ReleaseAwsAssumeRole | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release helmfile_release}
*/
export class Release extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helmfile_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Release to import
  * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Release to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helmfile_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/helmfile/0.14.1/docs/resources/release helmfile_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'helmfile_release',
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
    this._atomic = config.atomic;
    this._awsProfile = config.awsProfile;
    this._awsRegion = config.awsRegion;
    this._binary = config.binary;
    this._chart = config.chart;
    this._cleanupOnFail = config.cleanupOnFail;
    this._dirty = config.dirty;
    this._force = config.force;
    this._helmBinary = config.helmBinary;
    this._helmVersion = config.helmVersion;
    this._id = config.id;
    this._kubeconfig = config.kubeconfig;
    this._kubecontext = config.kubecontext;
    this._name = config.name;
    this._namespace = config.namespace;
    this._timeout = config.timeout;
    this._values = config.values;
    this._verify = config.verify;
    this._version = config.version;
    this._wait = config.wait;
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

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktf.IResolvable; 
  public get atomic() {
    return this.getBooleanAttribute('atomic');
  }
  public set atomic(value: boolean | cdktf.IResolvable) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic;
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

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail');
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail;
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

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // kubecontext - computed: false, optional: true, required: false
  private _kubecontext?: string; 
  public get kubecontext() {
    return this.getStringAttribute('kubecontext');
  }
  public set kubecontext(value: string) {
    this._kubecontext = value;
  }
  public resetKubecontext() {
    this._kubecontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubecontextInput() {
    return this._kubecontext;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
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

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
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
  private _awsAssumeRole = new ReleaseAwsAssumeRoleOutputReference(this, "aws_assume_role");
  public get awsAssumeRole() {
    return this._awsAssumeRole;
  }
  public putAwsAssumeRole(value: ReleaseAwsAssumeRole) {
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
      atomic: cdktf.booleanToTerraform(this._atomic),
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      binary: cdktf.stringToTerraform(this._binary),
      chart: cdktf.stringToTerraform(this._chart),
      cleanup_on_fail: cdktf.booleanToTerraform(this._cleanupOnFail),
      dirty: cdktf.booleanToTerraform(this._dirty),
      force: cdktf.booleanToTerraform(this._force),
      helm_binary: cdktf.stringToTerraform(this._helmBinary),
      helm_version: cdktf.stringToTerraform(this._helmVersion),
      id: cdktf.stringToTerraform(this._id),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      kubecontext: cdktf.stringToTerraform(this._kubecontext),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeout: cdktf.numberToTerraform(this._timeout),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      verify: cdktf.booleanToTerraform(this._verify),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      aws_assume_role: releaseAwsAssumeRoleToTerraform(this._awsAssumeRole.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      atomic: {
        value: cdktf.booleanToHclTerraform(this._atomic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      chart: {
        value: cdktf.stringToHclTerraform(this._chart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_on_fail: {
        value: cdktf.booleanToHclTerraform(this._cleanupOnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dirty: {
        value: cdktf.booleanToHclTerraform(this._dirty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      helm_binary: {
        value: cdktf.stringToHclTerraform(this._helmBinary),
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
      kubecontext: {
        value: cdktf.stringToHclTerraform(this._kubecontext),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      verify: {
        value: cdktf.booleanToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_assume_role: {
        value: releaseAwsAssumeRoleToHclTerraform(this._awsAssumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReleaseAwsAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
