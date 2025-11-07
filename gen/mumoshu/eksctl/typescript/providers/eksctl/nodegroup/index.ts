// https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#alb_ingress_access Nodegroup#alb_ingress_access}
  */
  readonly albIngressAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#appmesh_access Nodegroup#appmesh_access}
  */
  readonly appmeshAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#appmesh_preview_access Nodegroup#appmesh_preview_access}
  */
  readonly appmeshPreviewAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#asg_access Nodegroup#asg_access}
  */
  readonly asgAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#cfn_disable_rollback Nodegroup#cfn_disable_rollback}
  */
  readonly cfnDisableRollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#cfn_role_arn Nodegroup#cfn_role_arn}
  */
  readonly cfnRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#cluster Nodegroup#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#disable_pod_imds Nodegroup#disable_pod_imds}
  */
  readonly disablePodImds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#drain Nodegroup#drain}
  */
  readonly drain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#eksctl_version Nodegroup#eksctl_version}
  */
  readonly eksctlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#enable_ssm Nodegroup#enable_ssm}
  */
  readonly enableSsm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#external_dns_access Nodegroup#external_dns_access}
  */
  readonly externalDnsAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#full_ecr_access Nodegroup#full_ecr_access}
  */
  readonly fullEcrAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#id Nodegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#install_neuron_plugin Nodegroup#install_neuron_plugin}
  */
  readonly installNeuronPlugin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#install_nvidia_plugin Nodegroup#install_nvidia_plugin}
  */
  readonly installNvidiaPlugin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#instance_name Nodegroup#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#instance_prefix Nodegroup#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#instance_types Nodegroup#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#managed Nodegroup#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#name Nodegroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_ami Nodegroup#node_ami}
  */
  readonly nodeAmi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_ami_family Nodegroup#node_ami_family}
  */
  readonly nodeAmiFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_labels Nodegroup#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_private_networking Nodegroup#node_private_networking}
  */
  readonly nodePrivateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_security_groups Nodegroup#node_security_groups}
  */
  readonly nodeSecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_type Nodegroup#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_volume_size Nodegroup#node_volume_size}
  */
  readonly nodeVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_volume_type Nodegroup#node_volume_type}
  */
  readonly nodeVolumeType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#node_zones Nodegroup#node_zones}
  */
  readonly nodeZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#nodes Nodegroup#nodes}
  */
  readonly nodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#nodes_max Nodegroup#nodes_max}
  */
  readonly nodesMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#nodes_min Nodegroup#nodes_min}
  */
  readonly nodesMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#region Nodegroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#spot Nodegroup#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#ssh_access Nodegroup#ssh_access}
  */
  readonly sshAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#ssh_public_key Nodegroup#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#tags Nodegroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#version Nodegroup#version}
  */
  readonly version?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#assume_role Nodegroup#assume_role}
  */
  readonly assumeRole?: NodegroupAssumeRole;
}
export interface NodegroupAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#duration_seconds Nodegroup#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#external_id Nodegroup#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#policy Nodegroup#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#policy_arns Nodegroup#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#role_arn Nodegroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#session_name Nodegroup#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#tags Nodegroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#transitive_tag_keys Nodegroup#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function nodegroupAssumeRoleToTerraform(struct?: NodegroupAssumeRoleOutputReference | NodegroupAssumeRole): any {
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


export function nodegroupAssumeRoleToHclTerraform(struct?: NodegroupAssumeRoleOutputReference | NodegroupAssumeRole): any {
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

export class NodegroupAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodegroupAssumeRole | undefined {
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

  public set internalValue(value: NodegroupAssumeRole | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup eksctl_nodegroup}
*/
export class Nodegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eksctl_nodegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nodegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nodegroup to import
  * @param importFromId The id of the existing Nodegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nodegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eksctl_nodegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mumoshu/eksctl/0.17.0/docs/resources/nodegroup eksctl_nodegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodegroupConfig
  */
  public constructor(scope: Construct, id: string, config: NodegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'eksctl_nodegroup',
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
    this._albIngressAccess = config.albIngressAccess;
    this._appmeshAccess = config.appmeshAccess;
    this._appmeshPreviewAccess = config.appmeshPreviewAccess;
    this._asgAccess = config.asgAccess;
    this._cfnDisableRollback = config.cfnDisableRollback;
    this._cfnRoleArn = config.cfnRoleArn;
    this._cluster = config.cluster;
    this._disablePodImds = config.disablePodImds;
    this._drain = config.drain;
    this._eksctlVersion = config.eksctlVersion;
    this._enableSsm = config.enableSsm;
    this._externalDnsAccess = config.externalDnsAccess;
    this._fullEcrAccess = config.fullEcrAccess;
    this._id = config.id;
    this._installNeuronPlugin = config.installNeuronPlugin;
    this._installNvidiaPlugin = config.installNvidiaPlugin;
    this._instanceName = config.instanceName;
    this._instancePrefix = config.instancePrefix;
    this._instanceTypes = config.instanceTypes;
    this._managed = config.managed;
    this._name = config.name;
    this._nodeAmi = config.nodeAmi;
    this._nodeAmiFamily = config.nodeAmiFamily;
    this._nodeLabels = config.nodeLabels;
    this._nodePrivateNetworking = config.nodePrivateNetworking;
    this._nodeSecurityGroups = config.nodeSecurityGroups;
    this._nodeType = config.nodeType;
    this._nodeVolumeSize = config.nodeVolumeSize;
    this._nodeVolumeType = config.nodeVolumeType;
    this._nodeZones = config.nodeZones;
    this._nodes = config.nodes;
    this._nodesMax = config.nodesMax;
    this._nodesMin = config.nodesMin;
    this._region = config.region;
    this._spot = config.spot;
    this._sshAccess = config.sshAccess;
    this._sshPublicKey = config.sshPublicKey;
    this._tags = config.tags;
    this._version = config.version;
    this._assumeRole.internalValue = config.assumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_ingress_access - computed: false, optional: true, required: false
  private _albIngressAccess?: boolean | cdktf.IResolvable; 
  public get albIngressAccess() {
    return this.getBooleanAttribute('alb_ingress_access');
  }
  public set albIngressAccess(value: boolean | cdktf.IResolvable) {
    this._albIngressAccess = value;
  }
  public resetAlbIngressAccess() {
    this._albIngressAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albIngressAccessInput() {
    return this._albIngressAccess;
  }

  // appmesh_access - computed: false, optional: true, required: false
  private _appmeshAccess?: boolean | cdktf.IResolvable; 
  public get appmeshAccess() {
    return this.getBooleanAttribute('appmesh_access');
  }
  public set appmeshAccess(value: boolean | cdktf.IResolvable) {
    this._appmeshAccess = value;
  }
  public resetAppmeshAccess() {
    this._appmeshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appmeshAccessInput() {
    return this._appmeshAccess;
  }

  // appmesh_preview_access - computed: false, optional: true, required: false
  private _appmeshPreviewAccess?: boolean | cdktf.IResolvable; 
  public get appmeshPreviewAccess() {
    return this.getBooleanAttribute('appmesh_preview_access');
  }
  public set appmeshPreviewAccess(value: boolean | cdktf.IResolvable) {
    this._appmeshPreviewAccess = value;
  }
  public resetAppmeshPreviewAccess() {
    this._appmeshPreviewAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appmeshPreviewAccessInput() {
    return this._appmeshPreviewAccess;
  }

  // asg_access - computed: false, optional: true, required: false
  private _asgAccess?: boolean | cdktf.IResolvable; 
  public get asgAccess() {
    return this.getBooleanAttribute('asg_access');
  }
  public set asgAccess(value: boolean | cdktf.IResolvable) {
    this._asgAccess = value;
  }
  public resetAsgAccess() {
    this._asgAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgAccessInput() {
    return this._asgAccess;
  }

  // cfn_disable_rollback - computed: false, optional: true, required: false
  private _cfnDisableRollback?: boolean | cdktf.IResolvable; 
  public get cfnDisableRollback() {
    return this.getBooleanAttribute('cfn_disable_rollback');
  }
  public set cfnDisableRollback(value: boolean | cdktf.IResolvable) {
    this._cfnDisableRollback = value;
  }
  public resetCfnDisableRollback() {
    this._cfnDisableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfnDisableRollbackInput() {
    return this._cfnDisableRollback;
  }

  // cfn_role_arn - computed: false, optional: true, required: false
  private _cfnRoleArn?: string; 
  public get cfnRoleArn() {
    return this.getStringAttribute('cfn_role_arn');
  }
  public set cfnRoleArn(value: string) {
    this._cfnRoleArn = value;
  }
  public resetCfnRoleArn() {
    this._cfnRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfnRoleArnInput() {
    return this._cfnRoleArn;
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

  // disable_pod_imds - computed: false, optional: true, required: false
  private _disablePodImds?: boolean | cdktf.IResolvable; 
  public get disablePodImds() {
    return this.getBooleanAttribute('disable_pod_imds');
  }
  public set disablePodImds(value: boolean | cdktf.IResolvable) {
    this._disablePodImds = value;
  }
  public resetDisablePodImds() {
    this._disablePodImds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodImdsInput() {
    return this._disablePodImds;
  }

  // drain - computed: false, optional: true, required: false
  private _drain?: boolean | cdktf.IResolvable; 
  public get drain() {
    return this.getBooleanAttribute('drain');
  }
  public set drain(value: boolean | cdktf.IResolvable) {
    this._drain = value;
  }
  public resetDrain() {
    this._drain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainInput() {
    return this._drain;
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

  // enable_ssm - computed: false, optional: true, required: false
  private _enableSsm?: boolean | cdktf.IResolvable; 
  public get enableSsm() {
    return this.getBooleanAttribute('enable_ssm');
  }
  public set enableSsm(value: boolean | cdktf.IResolvable) {
    this._enableSsm = value;
  }
  public resetEnableSsm() {
    this._enableSsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmInput() {
    return this._enableSsm;
  }

  // external_dns_access - computed: false, optional: true, required: false
  private _externalDnsAccess?: boolean | cdktf.IResolvable; 
  public get externalDnsAccess() {
    return this.getBooleanAttribute('external_dns_access');
  }
  public set externalDnsAccess(value: boolean | cdktf.IResolvable) {
    this._externalDnsAccess = value;
  }
  public resetExternalDnsAccess() {
    this._externalDnsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsAccessInput() {
    return this._externalDnsAccess;
  }

  // full_ecr_access - computed: false, optional: true, required: false
  private _fullEcrAccess?: boolean | cdktf.IResolvable; 
  public get fullEcrAccess() {
    return this.getBooleanAttribute('full_ecr_access');
  }
  public set fullEcrAccess(value: boolean | cdktf.IResolvable) {
    this._fullEcrAccess = value;
  }
  public resetFullEcrAccess() {
    this._fullEcrAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullEcrAccessInput() {
    return this._fullEcrAccess;
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

  // install_neuron_plugin - computed: false, optional: true, required: false
  private _installNeuronPlugin?: boolean | cdktf.IResolvable; 
  public get installNeuronPlugin() {
    return this.getBooleanAttribute('install_neuron_plugin');
  }
  public set installNeuronPlugin(value: boolean | cdktf.IResolvable) {
    this._installNeuronPlugin = value;
  }
  public resetInstallNeuronPlugin() {
    this._installNeuronPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installNeuronPluginInput() {
    return this._installNeuronPlugin;
  }

  // install_nvidia_plugin - computed: false, optional: true, required: false
  private _installNvidiaPlugin?: boolean | cdktf.IResolvable; 
  public get installNvidiaPlugin() {
    return this.getBooleanAttribute('install_nvidia_plugin');
  }
  public set installNvidiaPlugin(value: boolean | cdktf.IResolvable) {
    this._installNvidiaPlugin = value;
  }
  public resetInstallNvidiaPlugin() {
    this._installNvidiaPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installNvidiaPluginInput() {
    return this._installNvidiaPlugin;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_prefix - computed: false, optional: true, required: false
  private _instancePrefix?: string; 
  public get instancePrefix() {
    return this.getStringAttribute('instance_prefix');
  }
  public set instancePrefix(value: string) {
    this._instancePrefix = value;
  }
  public resetInstancePrefix() {
    this._instancePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePrefixInput() {
    return this._instancePrefix;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // node_ami - computed: false, optional: true, required: false
  private _nodeAmi?: string; 
  public get nodeAmi() {
    return this.getStringAttribute('node_ami');
  }
  public set nodeAmi(value: string) {
    this._nodeAmi = value;
  }
  public resetNodeAmi() {
    this._nodeAmi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAmiInput() {
    return this._nodeAmi;
  }

  // node_ami_family - computed: false, optional: true, required: false
  private _nodeAmiFamily?: string; 
  public get nodeAmiFamily() {
    return this.getStringAttribute('node_ami_family');
  }
  public set nodeAmiFamily(value: string) {
    this._nodeAmiFamily = value;
  }
  public resetNodeAmiFamily() {
    this._nodeAmiFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAmiFamilyInput() {
    return this._nodeAmiFamily;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_private_networking - computed: false, optional: true, required: false
  private _nodePrivateNetworking?: boolean | cdktf.IResolvable; 
  public get nodePrivateNetworking() {
    return this.getBooleanAttribute('node_private_networking');
  }
  public set nodePrivateNetworking(value: boolean | cdktf.IResolvable) {
    this._nodePrivateNetworking = value;
  }
  public resetNodePrivateNetworking() {
    this._nodePrivateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePrivateNetworkingInput() {
    return this._nodePrivateNetworking;
  }

  // node_security_groups - computed: false, optional: true, required: false
  private _nodeSecurityGroups?: string[]; 
  public get nodeSecurityGroups() {
    return this.getListAttribute('node_security_groups');
  }
  public set nodeSecurityGroups(value: string[]) {
    this._nodeSecurityGroups = value;
  }
  public resetNodeSecurityGroups() {
    this._nodeSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSecurityGroupsInput() {
    return this._nodeSecurityGroups;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // node_volume_size - computed: false, optional: true, required: false
  private _nodeVolumeSize?: number; 
  public get nodeVolumeSize() {
    return this.getNumberAttribute('node_volume_size');
  }
  public set nodeVolumeSize(value: number) {
    this._nodeVolumeSize = value;
  }
  public resetNodeVolumeSize() {
    this._nodeVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeSizeInput() {
    return this._nodeVolumeSize;
  }

  // node_volume_type - computed: false, optional: true, required: false
  private _nodeVolumeType?: number; 
  public get nodeVolumeType() {
    return this.getNumberAttribute('node_volume_type');
  }
  public set nodeVolumeType(value: number) {
    this._nodeVolumeType = value;
  }
  public resetNodeVolumeType() {
    this._nodeVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeTypeInput() {
    return this._nodeVolumeType;
  }

  // node_zones - computed: false, optional: true, required: false
  private _nodeZones?: string[]; 
  public get nodeZones() {
    return this.getListAttribute('node_zones');
  }
  public set nodeZones(value: string[]) {
    this._nodeZones = value;
  }
  public resetNodeZones() {
    this._nodeZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeZonesInput() {
    return this._nodeZones;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // nodes_max - computed: false, optional: true, required: false
  private _nodesMax?: number; 
  public get nodesMax() {
    return this.getNumberAttribute('nodes_max');
  }
  public set nodesMax(value: number) {
    this._nodesMax = value;
  }
  public resetNodesMax() {
    this._nodesMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesMaxInput() {
    return this._nodesMax;
  }

  // nodes_min - computed: false, optional: true, required: false
  private _nodesMin?: number; 
  public get nodesMin() {
    return this.getNumberAttribute('nodes_min');
  }
  public set nodesMin(value: number) {
    this._nodesMin = value;
  }
  public resetNodesMin() {
    this._nodesMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesMinInput() {
    return this._nodesMin;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // ssh_access - computed: false, optional: true, required: false
  private _sshAccess?: boolean | cdktf.IResolvable; 
  public get sshAccess() {
    return this.getBooleanAttribute('ssh_access');
  }
  public set sshAccess(value: boolean | cdktf.IResolvable) {
    this._sshAccess = value;
  }
  public resetSshAccess() {
    this._sshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAccessInput() {
    return this._sshAccess;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
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

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new NodegroupAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: NodegroupAssumeRole) {
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
      alb_ingress_access: cdktf.booleanToTerraform(this._albIngressAccess),
      appmesh_access: cdktf.booleanToTerraform(this._appmeshAccess),
      appmesh_preview_access: cdktf.booleanToTerraform(this._appmeshPreviewAccess),
      asg_access: cdktf.booleanToTerraform(this._asgAccess),
      cfn_disable_rollback: cdktf.booleanToTerraform(this._cfnDisableRollback),
      cfn_role_arn: cdktf.stringToTerraform(this._cfnRoleArn),
      cluster: cdktf.stringToTerraform(this._cluster),
      disable_pod_imds: cdktf.booleanToTerraform(this._disablePodImds),
      drain: cdktf.booleanToTerraform(this._drain),
      eksctl_version: cdktf.stringToTerraform(this._eksctlVersion),
      enable_ssm: cdktf.booleanToTerraform(this._enableSsm),
      external_dns_access: cdktf.booleanToTerraform(this._externalDnsAccess),
      full_ecr_access: cdktf.booleanToTerraform(this._fullEcrAccess),
      id: cdktf.stringToTerraform(this._id),
      install_neuron_plugin: cdktf.booleanToTerraform(this._installNeuronPlugin),
      install_nvidia_plugin: cdktf.booleanToTerraform(this._installNvidiaPlugin),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_prefix: cdktf.stringToTerraform(this._instancePrefix),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      node_ami: cdktf.stringToTerraform(this._nodeAmi),
      node_ami_family: cdktf.stringToTerraform(this._nodeAmiFamily),
      node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeLabels),
      node_private_networking: cdktf.booleanToTerraform(this._nodePrivateNetworking),
      node_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeSecurityGroups),
      node_type: cdktf.stringToTerraform(this._nodeType),
      node_volume_size: cdktf.numberToTerraform(this._nodeVolumeSize),
      node_volume_type: cdktf.numberToTerraform(this._nodeVolumeType),
      node_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeZones),
      nodes: cdktf.numberToTerraform(this._nodes),
      nodes_max: cdktf.numberToTerraform(this._nodesMax),
      nodes_min: cdktf.numberToTerraform(this._nodesMin),
      region: cdktf.stringToTerraform(this._region),
      spot: cdktf.booleanToTerraform(this._spot),
      ssh_access: cdktf.booleanToTerraform(this._sshAccess),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      assume_role: nodegroupAssumeRoleToTerraform(this._assumeRole.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_ingress_access: {
        value: cdktf.booleanToHclTerraform(this._albIngressAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appmesh_access: {
        value: cdktf.booleanToHclTerraform(this._appmeshAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appmesh_preview_access: {
        value: cdktf.booleanToHclTerraform(this._appmeshPreviewAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asg_access: {
        value: cdktf.booleanToHclTerraform(this._asgAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cfn_disable_rollback: {
        value: cdktf.booleanToHclTerraform(this._cfnDisableRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cfn_role_arn: {
        value: cdktf.stringToHclTerraform(this._cfnRoleArn),
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
      disable_pod_imds: {
        value: cdktf.booleanToHclTerraform(this._disablePodImds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drain: {
        value: cdktf.booleanToHclTerraform(this._drain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eksctl_version: {
        value: cdktf.stringToHclTerraform(this._eksctlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ssm: {
        value: cdktf.booleanToHclTerraform(this._enableSsm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_dns_access: {
        value: cdktf.booleanToHclTerraform(this._externalDnsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_ecr_access: {
        value: cdktf.booleanToHclTerraform(this._fullEcrAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_neuron_plugin: {
        value: cdktf.booleanToHclTerraform(this._installNeuronPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install_nvidia_plugin: {
        value: cdktf.booleanToHclTerraform(this._installNvidiaPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_prefix: {
        value: cdktf.stringToHclTerraform(this._instancePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ami: {
        value: cdktf.stringToHclTerraform(this._nodeAmi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ami_family: {
        value: cdktf.stringToHclTerraform(this._nodeAmiFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      node_private_networking: {
        value: cdktf.booleanToHclTerraform(this._nodePrivateNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeSecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_volume_size: {
        value: cdktf.numberToHclTerraform(this._nodeVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_volume_type: {
        value: cdktf.numberToHclTerraform(this._nodeVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nodes: {
        value: cdktf.numberToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes_max: {
        value: cdktf.numberToHclTerraform(this._nodesMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodes_min: {
        value: cdktf.numberToHclTerraform(this._nodesMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot: {
        value: cdktf.booleanToHclTerraform(this._spot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_access: {
        value: cdktf.booleanToHclTerraform(this._sshAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
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
      assume_role: {
        value: nodegroupAssumeRoleToHclTerraform(this._assumeRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodegroupAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
