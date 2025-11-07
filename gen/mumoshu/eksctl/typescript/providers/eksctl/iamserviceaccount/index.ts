// https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamserviceaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#attach_policy_arn Iamserviceaccount#attach_policy_arn}
  */
  readonly attachPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#cluster Iamserviceaccount#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#id Iamserviceaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#name Iamserviceaccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#namespace Iamserviceaccount#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#override_existing_serviceaccounts Iamserviceaccount#override_existing_serviceaccounts}
  */
  readonly overrideExistingServiceaccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#profile Iamserviceaccount#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#region Iamserviceaccount#region}
  */
  readonly region: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#assume_role Iamserviceaccount#assume_role}
  */
  readonly assumeRole?: IamserviceaccountAssumeRole;
}
export interface IamserviceaccountAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#duration_seconds Iamserviceaccount#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#external_id Iamserviceaccount#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#policy Iamserviceaccount#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#policy_arns Iamserviceaccount#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#role_arn Iamserviceaccount#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#session_name Iamserviceaccount#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#tags Iamserviceaccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#transitive_tag_keys Iamserviceaccount#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function iamserviceaccountAssumeRoleToTerraform(struct?: IamserviceaccountAssumeRoleOutputReference | IamserviceaccountAssumeRole): any {
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


export function iamserviceaccountAssumeRoleToHclTerraform(struct?: IamserviceaccountAssumeRoleOutputReference | IamserviceaccountAssumeRole): any {
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

export class IamserviceaccountAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamserviceaccountAssumeRole | undefined {
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

  public set internalValue(value: IamserviceaccountAssumeRole | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount eksctl_iamserviceaccount}
*/
export class Iamserviceaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eksctl_iamserviceaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Iamserviceaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iamserviceaccount to import
  * @param importFromId The id of the existing Iamserviceaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iamserviceaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eksctl_iamserviceaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/iamserviceaccount eksctl_iamserviceaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamserviceaccountConfig
  */
  public constructor(scope: Construct, id: string, config: IamserviceaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'eksctl_iamserviceaccount',
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
    this._attachPolicyArn = config.attachPolicyArn;
    this._cluster = config.cluster;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._overrideExistingServiceaccounts = config.overrideExistingServiceaccounts;
    this._profile = config.profile;
    this._region = config.region;
    this._assumeRole.internalValue = config.assumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_policy_arn - computed: false, optional: false, required: true
  private _attachPolicyArn?: string; 
  public get attachPolicyArn() {
    return this.getStringAttribute('attach_policy_arn');
  }
  public set attachPolicyArn(value: string) {
    this._attachPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyArnInput() {
    return this._attachPolicyArn;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // override_existing_serviceaccounts - computed: false, optional: true, required: false
  private _overrideExistingServiceaccounts?: boolean | cdktf.IResolvable; 
  public get overrideExistingServiceaccounts() {
    return this.getBooleanAttribute('override_existing_serviceaccounts');
  }
  public set overrideExistingServiceaccounts(value: boolean | cdktf.IResolvable) {
    this._overrideExistingServiceaccounts = value;
  }
  public resetOverrideExistingServiceaccounts() {
    this._overrideExistingServiceaccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideExistingServiceaccountsInput() {
    return this._overrideExistingServiceaccounts;
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

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new IamserviceaccountAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: IamserviceaccountAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  public resetAssumeRole() {
    this._assumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_policy_arn: cdktf.stringToTerraform(this._attachPolicyArn),
      cluster: cdktf.stringToTerraform(this._cluster),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      override_existing_serviceaccounts: cdktf.booleanToTerraform(this._overrideExistingServiceaccounts),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      assume_role: iamserviceaccountAssumeRoleToTerraform(this._assumeRole.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_policy_arn: {
        value: cdktf.stringToHclTerraform(this._attachPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
      override_existing_serviceaccounts: {
        value: cdktf.booleanToHclTerraform(this._overrideExistingServiceaccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      assume_role: {
        value: iamserviceaccountAssumeRoleToHclTerraform(this._assumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamserviceaccountAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
