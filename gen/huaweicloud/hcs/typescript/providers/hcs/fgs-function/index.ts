// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FgsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agency configuration of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#agency FgsFunction#agency}
  */
  readonly agency?: string;
  /**
  * The group to which the function belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#app FgsFunction#app}
  */
  readonly app?: string;
  /**
  * The execution agency enables you to obtain a token or an AK/SK for accessing other cloud services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#app_agency FgsFunction#app_agency}
  */
  readonly appAgency?: string;
  /**
  * The KMS key ID for encrypting the function code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#code_encrypt_kms_key_id FgsFunction#code_encrypt_kms_key_id}
  */
  readonly codeEncryptKmsKeyId?: string;
  /**
  * The name of the function file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#code_filename FgsFunction#code_filename}
  */
  readonly codeFilename?: string;
  /**
  * The code type of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#code_type FgsFunction#code_type}
  */
  readonly codeType?: string;
  /**
  * The URL where the function code is stored in OBS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#code_url FgsFunction#code_url}
  */
  readonly codeUrl?: string;
  /**
  * The number of concurrent requests of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#concurrency_num FgsFunction#concurrency_num}
  */
  readonly concurrencyNum?: number;
  /**
  * The ID list of the dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#depend_list FgsFunction#depend_list}
  */
  readonly dependList?: string[];
  /**
  * The description of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#description FgsFunction#description}
  */
  readonly description?: string;
  /**
  * The private DNS configuration of the function network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#dns_list FgsFunction#dns_list}
  */
  readonly dnsList?: string;
  /**
  * Whether the authentication in the request header is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#enable_auth_in_header FgsFunction#enable_auth_in_header}
  */
  readonly enableAuthInHeader?: boolean | cdktf.IResolvable;
  /**
  * Whether the class isolation is enabled for the JAVA runtime functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#enable_class_isolation FgsFunction#enable_class_isolation}
  */
  readonly enableClassIsolation?: boolean | cdktf.IResolvable;
  /**
  * Whether the dynamic memory configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#enable_dynamic_memory FgsFunction#enable_dynamic_memory}
  */
  readonly enableDynamicMemory?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the LTS log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#enable_lts_log FgsFunction#enable_lts_log}
  */
  readonly enableLtsLog?: boolean | cdktf.IResolvable;
  /**
  * The ID of the enterprise project to which the function belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#enterprise_project_id FgsFunction#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * The size of the function ephemeral storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#ephemeral_storage FgsFunction#ephemeral_storage}
  */
  readonly ephemeralStorage?: number;
  /**
  * The function code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#func_code FgsFunction#func_code}
  */
  readonly funcCode?: string;
  /**
  * The description of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#functiongraph_version FgsFunction#functiongraph_version}
  */
  readonly functiongraphVersion?: string;
  /**
  * The GPU memory size allocated to the function, in MByte (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#gpu_memory FgsFunction#gpu_memory}
  */
  readonly gpuMemory?: number;
  /**
  * The GPU type of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#gpu_type FgsFunction#gpu_type}
  */
  readonly gpuType?: string;
  /**
  * The entry point of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#handler FgsFunction#handler}
  */
  readonly handler?: string;
  /**
  * The heartbeat handler of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#heartbeat_handler FgsFunction#heartbeat_handler}
  */
  readonly heartbeatHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#id FgsFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The initializer of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#initializer_handler FgsFunction#initializer_handler}
  */
  readonly initializerHandler?: string;
  /**
  * The maximum duration the function can be initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#initializer_timeout FgsFunction#initializer_timeout}
  */
  readonly initializerTimeout?: number;
  /**
  * Whether the function is a stateful function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#is_stateful_function FgsFunction#is_stateful_function}
  */
  readonly isStatefulFunction?: boolean | cdktf.IResolvable;
  /**
  * The LTS group ID for collecting logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#log_group_id FgsFunction#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * The LTS group name for collecting logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#log_group_name FgsFunction#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * The LTS stream ID for collecting logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#log_stream_id FgsFunction#log_stream_id}
  */
  readonly logStreamId?: string;
  /**
  * The LTS stream name for collecting logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#log_stream_name FgsFunction#log_stream_name}
  */
  readonly logStreamName?: string;
  /**
  * The custom tags configuration that used to filter the LTS logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#lts_custom_tag FgsFunction#lts_custom_tag}
  */
  readonly ltsCustomTag?: { [key: string]: string };
  /**
  * The script configuration value of this change is also the original value used for comparison with
  *  the new value next time the change is made. The corresponding parameter name is 'lts_custom_tag'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#lts_custom_tag_origin FgsFunction#lts_custom_tag_origin}
  */
  readonly ltsCustomTagOrigin?: { [key: string]: string };
  /**
  * The maximum number of instances of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#max_instance_num FgsFunction#max_instance_num}
  */
  readonly maxInstanceNum?: string;
  /**
  * The memory size allocated to the function, in MByte (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#memory_size FgsFunction#memory_size}
  */
  readonly memorySize: number;
  /**
  * The mount user group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#mount_user_group_id FgsFunction#mount_user_group_id}
  */
  readonly mountUserGroupId?: number;
  /**
  * The mount user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#mount_user_id FgsFunction#mount_user_id}
  */
  readonly mountUserId?: number;
  /**
  * The name of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * The network ID of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#network_id FgsFunction#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#package FgsFunction#package}
  */
  readonly package?: string;
  /**
  * The VPC CIDR blocks used in the function code to detect whether it conflicts with the VPC
  * CIDR blocks used by the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#peering_cidr FgsFunction#peering_cidr}
  */
  readonly peeringCidr?: string;
  /**
  * The pre-stop handler of a function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#pre_stop_handler FgsFunction#pre_stop_handler}
  */
  readonly preStopHandler?: string;
  /**
  * The maximum duration that the function can be initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#pre_stop_timeout FgsFunction#pre_stop_timeout}
  */
  readonly preStopTimeout?: number;
  /**
  * The region where the function is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#region FgsFunction#region}
  */
  readonly region?: string;
  /**
  * The restore hook handler of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#restore_hook_handler FgsFunction#restore_hook_handler}
  */
  readonly restoreHookHandler?: string;
  /**
  * The timeout of the function restore hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#restore_hook_timeout FgsFunction#restore_hook_timeout}
  */
  readonly restoreHookTimeout?: number;
  /**
  * The environment for executing the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#runtime FgsFunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#tags FgsFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The timeout interval of the function, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#timeout FgsFunction#timeout}
  */
  readonly timeout: number;
  /**
  * The key/value information defined for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#user_data FgsFunction#user_data}
  */
  readonly userData?: string;
  /**
  * The KMS key ID for encrypting the user data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#user_data_encrypt_kms_key_id FgsFunction#user_data_encrypt_kms_key_id}
  */
  readonly userDataEncryptKmsKeyId?: string;
  /**
  * The ID of the VPC to which the function belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#vpc_id FgsFunction#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#xrole FgsFunction#xrole}
  */
  readonly xrole?: string;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#custom_image FgsFunction#custom_image}
  */
  readonly customImage?: FgsFunctionCustomImage;
  /**
  * func_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#func_mounts FgsFunction#func_mounts}
  */
  readonly funcMounts?: FgsFunctionFuncMounts[] | cdktf.IResolvable;
  /**
  * network_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#network_controller FgsFunction#network_controller}
  */
  readonly networkController?: FgsFunctionNetworkController;
  /**
  * reserved_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#reserved_instances FgsFunction#reserved_instances}
  */
  readonly reservedInstances?: FgsFunctionReservedInstances[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#timeouts FgsFunction#timeouts}
  */
  readonly timeouts?: FgsFunctionTimeouts;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#versions FgsFunction#versions}
  */
  readonly versions?: FgsFunctionVersions[] | cdktf.IResolvable;
}
export interface FgsFunctionCustomImage {
  /**
  * The command line arguments used to start the SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#args FgsFunction#args}
  */
  readonly args?: string;
  /**
  * The startup commands of the SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#command FgsFunction#command}
  */
  readonly command?: string;
  /**
  * The URL of SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#url FgsFunction#url}
  */
  readonly url: string;
  /**
  * The user group ID that used to run SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#user_group_id FgsFunction#user_group_id}
  */
  readonly userGroupId?: string;
  /**
  * The user ID that used to run SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#user_id FgsFunction#user_id}
  */
  readonly userId?: string;
  /**
  * The working directory of the SWR image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#working_dir FgsFunction#working_dir}
  */
  readonly workingDir?: string;
}

export function fgsFunctionCustomImageToTerraform(struct?: FgsFunctionCustomImageOutputReference | FgsFunctionCustomImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    url: cdktf.stringToTerraform(struct!.url),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
    user_id: cdktf.stringToTerraform(struct!.userId),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function fgsFunctionCustomImageToHclTerraform(struct?: FgsFunctionCustomImageOutputReference | FgsFunctionCustomImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.stringToHclTerraform(struct!.args),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_id: {
      value: cdktf.stringToHclTerraform(struct!.userGroupId),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionCustomImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionCustomImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionCustomImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._url = undefined;
      this._userGroupId = undefined;
      this._userId = undefined;
      this._workingDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._url = value.url;
      this._userGroupId = value.userGroupId;
      this._userId = value.userId;
      this._workingDir = value.workingDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_group_id - computed: false, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
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

  // working_dir - computed: true, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface FgsFunctionFuncMounts {
  /**
  * The function access path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#local_mount_path FgsFunction#local_mount_path}
  */
  readonly localMountPath: string;
  /**
  * The ID of the mounted resource (corresponding cloud service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#mount_resource FgsFunction#mount_resource}
  */
  readonly mountResource: string;
  /**
  * The remote mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#mount_share_path FgsFunction#mount_share_path}
  */
  readonly mountSharePath?: string;
  /**
  * The mount type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#mount_type FgsFunction#mount_type}
  */
  readonly mountType: string;
}

export function fgsFunctionFuncMountsToTerraform(struct?: FgsFunctionFuncMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
    mount_resource: cdktf.stringToTerraform(struct!.mountResource),
    mount_share_path: cdktf.stringToTerraform(struct!.mountSharePath),
    mount_type: cdktf.stringToTerraform(struct!.mountType),
  }
}


export function fgsFunctionFuncMountsToHclTerraform(struct?: FgsFunctionFuncMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_resource: {
      value: cdktf.stringToHclTerraform(struct!.mountResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_share_path: {
      value: cdktf.stringToHclTerraform(struct!.mountSharePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_type: {
      value: cdktf.stringToHclTerraform(struct!.mountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionFuncMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionFuncMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPath = this._localMountPath;
    }
    if (this._mountResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountResource = this._mountResource;
    }
    if (this._mountSharePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountSharePath = this._mountSharePath;
    }
    if (this._mountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountType = this._mountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionFuncMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountPath = undefined;
      this._mountResource = undefined;
      this._mountSharePath = undefined;
      this._mountType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountPath = value.localMountPath;
      this._mountResource = value.mountResource;
      this._mountSharePath = value.mountSharePath;
      this._mountType = value.mountType;
    }
  }

  // local_mount_path - computed: false, optional: false, required: true
  private _localMountPath?: string; 
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
  public set localMountPath(value: string) {
    this._localMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPathInput() {
    return this._localMountPath;
  }

  // mount_resource - computed: false, optional: false, required: true
  private _mountResource?: string; 
  public get mountResource() {
    return this.getStringAttribute('mount_resource');
  }
  public set mountResource(value: string) {
    this._mountResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountResourceInput() {
    return this._mountResource;
  }

  // mount_share_path - computed: false, optional: true, required: false
  private _mountSharePath?: string; 
  public get mountSharePath() {
    return this.getStringAttribute('mount_share_path');
  }
  public set mountSharePath(value: string) {
    this._mountSharePath = value;
  }
  public resetMountSharePath() {
    this._mountSharePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountSharePathInput() {
    return this._mountSharePath;
  }

  // mount_type - computed: false, optional: false, required: true
  private _mountType?: string; 
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }
  public set mountType(value: string) {
    this._mountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTypeInput() {
    return this._mountType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FgsFunctionFuncMountsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionFuncMounts[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionFuncMountsOutputReference {
    return new FgsFunctionFuncMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionNetworkControllerTriggerAccessVpcs {
  /**
  * The ID of the VPC that can trigger the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#vpc_id FgsFunction#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * The ID of the VPC that can trigger the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#vpc_name FgsFunction#vpc_name}
  */
  readonly vpcName?: string;
}

export function fgsFunctionNetworkControllerTriggerAccessVpcsToTerraform(struct?: FgsFunctionNetworkControllerTriggerAccessVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_name: cdktf.stringToTerraform(struct!.vpcName),
  }
}


export function fgsFunctionNetworkControllerTriggerAccessVpcsToHclTerraform(struct?: FgsFunctionNetworkControllerTriggerAccessVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_name: {
      value: cdktf.stringToHclTerraform(struct!.vpcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionNetworkControllerTriggerAccessVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionNetworkControllerTriggerAccessVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcName = this._vpcName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionNetworkControllerTriggerAccessVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
      this._vpcName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
      this._vpcName = value.vpcName;
    }
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // vpc_name - computed: true, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }
}

export class FgsFunctionNetworkControllerTriggerAccessVpcsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionNetworkControllerTriggerAccessVpcs[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionNetworkControllerTriggerAccessVpcsOutputReference {
    return new FgsFunctionNetworkControllerTriggerAccessVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionNetworkController {
  /**
  * Whether to disable the public network access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#disable_public_network FgsFunction#disable_public_network}
  */
  readonly disablePublicNetwork?: boolean | cdktf.IResolvable;
  /**
  * trigger_access_vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#trigger_access_vpcs FgsFunction#trigger_access_vpcs}
  */
  readonly triggerAccessVpcs?: FgsFunctionNetworkControllerTriggerAccessVpcs[] | cdktf.IResolvable;
}

export function fgsFunctionNetworkControllerToTerraform(struct?: FgsFunctionNetworkControllerOutputReference | FgsFunctionNetworkController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_public_network: cdktf.booleanToTerraform(struct!.disablePublicNetwork),
    trigger_access_vpcs: cdktf.listMapper(fgsFunctionNetworkControllerTriggerAccessVpcsToTerraform, true)(struct!.triggerAccessVpcs),
  }
}


export function fgsFunctionNetworkControllerToHclTerraform(struct?: FgsFunctionNetworkControllerOutputReference | FgsFunctionNetworkController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_public_network: {
      value: cdktf.booleanToHclTerraform(struct!.disablePublicNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trigger_access_vpcs: {
      value: cdktf.listMapperHcl(fgsFunctionNetworkControllerTriggerAccessVpcsToHclTerraform, true)(struct!.triggerAccessVpcs),
      isBlock: true,
      type: "set",
      storageClassType: "FgsFunctionNetworkControllerTriggerAccessVpcsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionNetworkControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionNetworkController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePublicNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePublicNetwork = this._disablePublicNetwork;
    }
    if (this._triggerAccessVpcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerAccessVpcs = this._triggerAccessVpcs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionNetworkController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePublicNetwork = undefined;
      this._triggerAccessVpcs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePublicNetwork = value.disablePublicNetwork;
      this._triggerAccessVpcs.internalValue = value.triggerAccessVpcs;
    }
  }

  // disable_public_network - computed: false, optional: true, required: false
  private _disablePublicNetwork?: boolean | cdktf.IResolvable; 
  public get disablePublicNetwork() {
    return this.getBooleanAttribute('disable_public_network');
  }
  public set disablePublicNetwork(value: boolean | cdktf.IResolvable) {
    this._disablePublicNetwork = value;
  }
  public resetDisablePublicNetwork() {
    this._disablePublicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicNetworkInput() {
    return this._disablePublicNetwork;
  }

  // trigger_access_vpcs - computed: false, optional: true, required: false
  private _triggerAccessVpcs = new FgsFunctionNetworkControllerTriggerAccessVpcsList(this, "trigger_access_vpcs", true);
  public get triggerAccessVpcs() {
    return this._triggerAccessVpcs;
  }
  public putTriggerAccessVpcs(value: FgsFunctionNetworkControllerTriggerAccessVpcs[] | cdktf.IResolvable) {
    this._triggerAccessVpcs.internalValue = value;
  }
  public resetTriggerAccessVpcs() {
    this._triggerAccessVpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerAccessVpcsInput() {
    return this._triggerAccessVpcs.internalValue;
  }
}
export interface FgsFunctionReservedInstancesTacticsConfigCronConfigs {
  /**
  * The number of reserved instance to which the policy belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#count FgsFunction#count}
  */
  readonly count: number;
  /**
  * The cron expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#cron FgsFunction#cron}
  */
  readonly cron: string;
  /**
  * The expiration timestamp of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#expired_time FgsFunction#expired_time}
  */
  readonly expiredTime: number;
  /**
  * The name of scheduled policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * The effective timestamp of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#start_time FgsFunction#start_time}
  */
  readonly startTime: number;
}

export function fgsFunctionReservedInstancesTacticsConfigCronConfigsToTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigCronConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    cron: cdktf.stringToTerraform(struct!.cron),
    expired_time: cdktf.numberToTerraform(struct!.expiredTime),
    name: cdktf.stringToTerraform(struct!.name),
    start_time: cdktf.numberToTerraform(struct!.startTime),
  }
}


export function fgsFunctionReservedInstancesTacticsConfigCronConfigsToHclTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigCronConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_time: {
      value: cdktf.numberToHclTerraform(struct!.expiredTime),
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
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionReservedInstancesTacticsConfigCronConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionReservedInstancesTacticsConfigCronConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._expiredTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredTime = this._expiredTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionReservedInstancesTacticsConfigCronConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._cron = undefined;
      this._expiredTime = undefined;
      this._name = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._cron = value.cron;
      this._expiredTime = value.expiredTime;
      this._name = value.name;
      this._startTime = value.startTime;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // expired_time - computed: false, optional: false, required: true
  private _expiredTime?: number; 
  public get expiredTime() {
    return this.getNumberAttribute('expired_time');
  }
  public set expiredTime(value: number) {
    this._expiredTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredTimeInput() {
    return this._expiredTime;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class FgsFunctionReservedInstancesTacticsConfigCronConfigsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionReservedInstancesTacticsConfigCronConfigs[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionReservedInstancesTacticsConfigCronConfigsOutputReference {
    return new FgsFunctionReservedInstancesTacticsConfigCronConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionReservedInstancesTacticsConfigMetricConfigs {
  /**
  * The minimun of traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#min FgsFunction#min}
  */
  readonly min: number;
  /**
  * The name of metric policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * The metric policy threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#threshold FgsFunction#threshold}
  */
  readonly threshold: number;
  /**
  * The type of metric policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#type FgsFunction#type}
  */
  readonly type: string;
}

export function fgsFunctionReservedInstancesTacticsConfigMetricConfigsToTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigMetricConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fgsFunctionReservedInstancesTacticsConfigMetricConfigsToHclTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigMetricConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FgsFunctionReservedInstancesTacticsConfigMetricConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionReservedInstancesTacticsConfigMetricConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionReservedInstancesTacticsConfigMetricConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._min = undefined;
      this._name = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._min = value.min;
      this._name = value.name;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FgsFunctionReservedInstancesTacticsConfigMetricConfigsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionReservedInstancesTacticsConfigMetricConfigs[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionReservedInstancesTacticsConfigMetricConfigsOutputReference {
    return new FgsFunctionReservedInstancesTacticsConfigMetricConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionReservedInstancesTacticsConfig {
  /**
  * cron_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#cron_configs FgsFunction#cron_configs}
  */
  readonly cronConfigs?: FgsFunctionReservedInstancesTacticsConfigCronConfigs[] | cdktf.IResolvable;
  /**
  * metric_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#metric_configs FgsFunction#metric_configs}
  */
  readonly metricConfigs?: FgsFunctionReservedInstancesTacticsConfigMetricConfigs[] | cdktf.IResolvable;
}

export function fgsFunctionReservedInstancesTacticsConfigToTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigOutputReference | FgsFunctionReservedInstancesTacticsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_configs: cdktf.listMapper(fgsFunctionReservedInstancesTacticsConfigCronConfigsToTerraform, true)(struct!.cronConfigs),
    metric_configs: cdktf.listMapper(fgsFunctionReservedInstancesTacticsConfigMetricConfigsToTerraform, true)(struct!.metricConfigs),
  }
}


export function fgsFunctionReservedInstancesTacticsConfigToHclTerraform(struct?: FgsFunctionReservedInstancesTacticsConfigOutputReference | FgsFunctionReservedInstancesTacticsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_configs: {
      value: cdktf.listMapperHcl(fgsFunctionReservedInstancesTacticsConfigCronConfigsToHclTerraform, true)(struct!.cronConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "FgsFunctionReservedInstancesTacticsConfigCronConfigsList",
    },
    metric_configs: {
      value: cdktf.listMapperHcl(fgsFunctionReservedInstancesTacticsConfigMetricConfigsToHclTerraform, true)(struct!.metricConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "FgsFunctionReservedInstancesTacticsConfigMetricConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionReservedInstancesTacticsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionReservedInstancesTacticsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronConfigs = this._cronConfigs?.internalValue;
    }
    if (this._metricConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricConfigs = this._metricConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionReservedInstancesTacticsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronConfigs.internalValue = undefined;
      this._metricConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronConfigs.internalValue = value.cronConfigs;
      this._metricConfigs.internalValue = value.metricConfigs;
    }
  }

  // cron_configs - computed: false, optional: true, required: false
  private _cronConfigs = new FgsFunctionReservedInstancesTacticsConfigCronConfigsList(this, "cron_configs", false);
  public get cronConfigs() {
    return this._cronConfigs;
  }
  public putCronConfigs(value: FgsFunctionReservedInstancesTacticsConfigCronConfigs[] | cdktf.IResolvable) {
    this._cronConfigs.internalValue = value;
  }
  public resetCronConfigs() {
    this._cronConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronConfigsInput() {
    return this._cronConfigs.internalValue;
  }

  // metric_configs - computed: false, optional: true, required: false
  private _metricConfigs = new FgsFunctionReservedInstancesTacticsConfigMetricConfigsList(this, "metric_configs", false);
  public get metricConfigs() {
    return this._metricConfigs;
  }
  public putMetricConfigs(value: FgsFunctionReservedInstancesTacticsConfigMetricConfigs[] | cdktf.IResolvable) {
    this._metricConfigs.internalValue = value;
  }
  public resetMetricConfigs() {
    this._metricConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricConfigsInput() {
    return this._metricConfigs.internalValue;
  }
}
export interface FgsFunctionReservedInstances {
  /**
  * The number of reserved instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#count FgsFunction#count}
  */
  readonly count: number;
  /**
  * Whether to enable the idle mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#idle_mode FgsFunction#idle_mode}
  */
  readonly idleMode?: boolean | cdktf.IResolvable;
  /**
  * The version name or alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#qualifier_name FgsFunction#qualifier_name}
  */
  readonly qualifierName: string;
  /**
  * The qualifier type of reserved instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#qualifier_type FgsFunction#qualifier_type}
  */
  readonly qualifierType: string;
  /**
  * tactics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#tactics_config FgsFunction#tactics_config}
  */
  readonly tacticsConfig?: FgsFunctionReservedInstancesTacticsConfig;
}

export function fgsFunctionReservedInstancesToTerraform(struct?: FgsFunctionReservedInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    idle_mode: cdktf.booleanToTerraform(struct!.idleMode),
    qualifier_name: cdktf.stringToTerraform(struct!.qualifierName),
    qualifier_type: cdktf.stringToTerraform(struct!.qualifierType),
    tactics_config: fgsFunctionReservedInstancesTacticsConfigToTerraform(struct!.tacticsConfig),
  }
}


export function fgsFunctionReservedInstancesToHclTerraform(struct?: FgsFunctionReservedInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_mode: {
      value: cdktf.booleanToHclTerraform(struct!.idleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qualifier_name: {
      value: cdktf.stringToHclTerraform(struct!.qualifierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier_type: {
      value: cdktf.stringToHclTerraform(struct!.qualifierType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tactics_config: {
      value: fgsFunctionReservedInstancesTacticsConfigToHclTerraform(struct!.tacticsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "FgsFunctionReservedInstancesTacticsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionReservedInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionReservedInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._idleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleMode = this._idleMode;
    }
    if (this._qualifierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifierName = this._qualifierName;
    }
    if (this._qualifierType !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifierType = this._qualifierType;
    }
    if (this._tacticsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacticsConfig = this._tacticsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionReservedInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._idleMode = undefined;
      this._qualifierName = undefined;
      this._qualifierType = undefined;
      this._tacticsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._idleMode = value.idleMode;
      this._qualifierName = value.qualifierName;
      this._qualifierType = value.qualifierType;
      this._tacticsConfig.internalValue = value.tacticsConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // idle_mode - computed: false, optional: true, required: false
  private _idleMode?: boolean | cdktf.IResolvable; 
  public get idleMode() {
    return this.getBooleanAttribute('idle_mode');
  }
  public set idleMode(value: boolean | cdktf.IResolvable) {
    this._idleMode = value;
  }
  public resetIdleMode() {
    this._idleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleModeInput() {
    return this._idleMode;
  }

  // qualifier_name - computed: false, optional: false, required: true
  private _qualifierName?: string; 
  public get qualifierName() {
    return this.getStringAttribute('qualifier_name');
  }
  public set qualifierName(value: string) {
    this._qualifierName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierNameInput() {
    return this._qualifierName;
  }

  // qualifier_type - computed: false, optional: false, required: true
  private _qualifierType?: string; 
  public get qualifierType() {
    return this.getStringAttribute('qualifier_type');
  }
  public set qualifierType(value: string) {
    this._qualifierType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierTypeInput() {
    return this._qualifierType;
  }

  // tactics_config - computed: false, optional: true, required: false
  private _tacticsConfig = new FgsFunctionReservedInstancesTacticsConfigOutputReference(this, "tactics_config");
  public get tacticsConfig() {
    return this._tacticsConfig;
  }
  public putTacticsConfig(value: FgsFunctionReservedInstancesTacticsConfig) {
    this._tacticsConfig.internalValue = value;
  }
  public resetTacticsConfig() {
    this._tacticsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsConfigInput() {
    return this._tacticsConfig.internalValue;
  }
}

export class FgsFunctionReservedInstancesList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionReservedInstances[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionReservedInstancesOutputReference {
    return new FgsFunctionReservedInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#create FgsFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#delete FgsFunction#delete}
  */
  readonly delete?: string;
}

export function fgsFunctionTimeoutsToTerraform(struct?: FgsFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function fgsFunctionTimeoutsToHclTerraform(struct?: FgsFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FgsFunctionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface FgsFunctionVersionsAliases {
  /**
  * The description of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#additional_version_strategy FgsFunction#additional_version_strategy}
  */
  readonly additionalVersionStrategy?: string;
  /**
  * The percentage grayscale configuration of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#additional_version_weights FgsFunction#additional_version_weights}
  */
  readonly additionalVersionWeights?: string;
  /**
  * The description of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#description FgsFunction#description}
  */
  readonly description?: string;
  /**
  * The name of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
}

export function fgsFunctionVersionsAliasesToTerraform(struct?: FgsFunctionVersionsAliasesOutputReference | FgsFunctionVersionsAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_version_strategy: cdktf.stringToTerraform(struct!.additionalVersionStrategy),
    additional_version_weights: cdktf.stringToTerraform(struct!.additionalVersionWeights),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fgsFunctionVersionsAliasesToHclTerraform(struct?: FgsFunctionVersionsAliasesOutputReference | FgsFunctionVersionsAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_version_strategy: {
      value: cdktf.stringToHclTerraform(struct!.additionalVersionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_version_weights: {
      value: cdktf.stringToHclTerraform(struct!.additionalVersionWeights),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionVersionsAliasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionVersionsAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVersionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionStrategy = this._additionalVersionStrategy;
    }
    if (this._additionalVersionWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionWeights = this._additionalVersionWeights;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionVersionsAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalVersionStrategy = undefined;
      this._additionalVersionWeights = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalVersionStrategy = value.additionalVersionStrategy;
      this._additionalVersionWeights = value.additionalVersionWeights;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // additional_version_strategy - computed: false, optional: true, required: false
  private _additionalVersionStrategy?: string; 
  public get additionalVersionStrategy() {
    return this.getStringAttribute('additional_version_strategy');
  }
  public set additionalVersionStrategy(value: string) {
    this._additionalVersionStrategy = value;
  }
  public resetAdditionalVersionStrategy() {
    this._additionalVersionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionStrategyInput() {
    return this._additionalVersionStrategy;
  }

  // additional_version_weights - computed: false, optional: true, required: false
  private _additionalVersionWeights?: string; 
  public get additionalVersionWeights() {
    return this.getStringAttribute('additional_version_weights');
  }
  public set additionalVersionWeights(value: string) {
    this._additionalVersionWeights = value;
  }
  public resetAdditionalVersionWeights() {
    this._additionalVersionWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionWeightsInput() {
    return this._additionalVersionWeights;
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
}
export interface FgsFunctionVersions {
  /**
  * The description of the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#description FgsFunction#description}
  */
  readonly description?: string;
  /**
  * The version name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#aliases FgsFunction#aliases}
  */
  readonly aliases?: FgsFunctionVersionsAliases;
}

export function fgsFunctionVersionsToTerraform(struct?: FgsFunctionVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    aliases: fgsFunctionVersionsAliasesToTerraform(struct!.aliases),
  }
}


export function fgsFunctionVersionsToHclTerraform(struct?: FgsFunctionVersions | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aliases: {
      value: fgsFunctionVersionsAliasesToHclTerraform(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "FgsFunctionVersionsAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._aliases.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._aliases.internalValue = value.aliases;
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

  // aliases - computed: false, optional: true, required: false
  private _aliases = new FgsFunctionVersionsAliasesOutputReference(this, "aliases");
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: FgsFunctionVersionsAliases) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }
}

export class FgsFunctionVersionsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionVersions[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionVersionsOutputReference {
    return new FgsFunctionVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function hcs_fgs_function}
*/
export class FgsFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_fgs_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FgsFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FgsFunction to import
  * @param importFromId The id of the existing FgsFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FgsFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_fgs_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/fgs_function hcs_fgs_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FgsFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FgsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_fgs_function',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.20',
        providerVersionConstraint: '2.4.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agency = config.agency;
    this._app = config.app;
    this._appAgency = config.appAgency;
    this._codeEncryptKmsKeyId = config.codeEncryptKmsKeyId;
    this._codeFilename = config.codeFilename;
    this._codeType = config.codeType;
    this._codeUrl = config.codeUrl;
    this._concurrencyNum = config.concurrencyNum;
    this._dependList = config.dependList;
    this._description = config.description;
    this._dnsList = config.dnsList;
    this._enableAuthInHeader = config.enableAuthInHeader;
    this._enableClassIsolation = config.enableClassIsolation;
    this._enableDynamicMemory = config.enableDynamicMemory;
    this._enableLtsLog = config.enableLtsLog;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._ephemeralStorage = config.ephemeralStorage;
    this._funcCode = config.funcCode;
    this._functiongraphVersion = config.functiongraphVersion;
    this._gpuMemory = config.gpuMemory;
    this._gpuType = config.gpuType;
    this._handler = config.handler;
    this._heartbeatHandler = config.heartbeatHandler;
    this._id = config.id;
    this._initializerHandler = config.initializerHandler;
    this._initializerTimeout = config.initializerTimeout;
    this._isStatefulFunction = config.isStatefulFunction;
    this._logGroupId = config.logGroupId;
    this._logGroupName = config.logGroupName;
    this._logStreamId = config.logStreamId;
    this._logStreamName = config.logStreamName;
    this._ltsCustomTag = config.ltsCustomTag;
    this._ltsCustomTagOrigin = config.ltsCustomTagOrigin;
    this._maxInstanceNum = config.maxInstanceNum;
    this._memorySize = config.memorySize;
    this._mountUserGroupId = config.mountUserGroupId;
    this._mountUserId = config.mountUserId;
    this._name = config.name;
    this._networkId = config.networkId;
    this._package = config.package;
    this._peeringCidr = config.peeringCidr;
    this._preStopHandler = config.preStopHandler;
    this._preStopTimeout = config.preStopTimeout;
    this._region = config.region;
    this._restoreHookHandler = config.restoreHookHandler;
    this._restoreHookTimeout = config.restoreHookTimeout;
    this._runtime = config.runtime;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._userData = config.userData;
    this._userDataEncryptKmsKeyId = config.userDataEncryptKmsKeyId;
    this._vpcId = config.vpcId;
    this._xrole = config.xrole;
    this._customImage.internalValue = config.customImage;
    this._funcMounts.internalValue = config.funcMounts;
    this._networkController.internalValue = config.networkController;
    this._reservedInstances.internalValue = config.reservedInstances;
    this._timeouts.internalValue = config.timeouts;
    this._versions.internalValue = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agency - computed: false, optional: true, required: false
  private _agency?: string; 
  public get agency() {
    return this.getStringAttribute('agency');
  }
  public set agency(value: string) {
    this._agency = value;
  }
  public resetAgency() {
    this._agency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyInput() {
    return this._agency;
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_agency - computed: true, optional: true, required: false
  private _appAgency?: string; 
  public get appAgency() {
    return this.getStringAttribute('app_agency');
  }
  public set appAgency(value: string) {
    this._appAgency = value;
  }
  public resetAppAgency() {
    this._appAgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAgencyInput() {
    return this._appAgency;
  }

  // code_encrypt_kms_key_id - computed: false, optional: true, required: false
  private _codeEncryptKmsKeyId?: string; 
  public get codeEncryptKmsKeyId() {
    return this.getStringAttribute('code_encrypt_kms_key_id');
  }
  public set codeEncryptKmsKeyId(value: string) {
    this._codeEncryptKmsKeyId = value;
  }
  public resetCodeEncryptKmsKeyId() {
    this._codeEncryptKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEncryptKmsKeyIdInput() {
    return this._codeEncryptKmsKeyId;
  }

  // code_filename - computed: true, optional: true, required: false
  private _codeFilename?: string; 
  public get codeFilename() {
    return this.getStringAttribute('code_filename');
  }
  public set codeFilename(value: string) {
    this._codeFilename = value;
  }
  public resetCodeFilename() {
    this._codeFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeFilenameInput() {
    return this._codeFilename;
  }

  // code_type - computed: true, optional: true, required: false
  private _codeType?: string; 
  public get codeType() {
    return this.getStringAttribute('code_type');
  }
  public set codeType(value: string) {
    this._codeType = value;
  }
  public resetCodeType() {
    this._codeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeTypeInput() {
    return this._codeType;
  }

  // code_url - computed: false, optional: true, required: false
  private _codeUrl?: string; 
  public get codeUrl() {
    return this.getStringAttribute('code_url');
  }
  public set codeUrl(value: string) {
    this._codeUrl = value;
  }
  public resetCodeUrl() {
    this._codeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeUrlInput() {
    return this._codeUrl;
  }

  // concurrency_num - computed: true, optional: true, required: false
  private _concurrencyNum?: number; 
  public get concurrencyNum() {
    return this.getNumberAttribute('concurrency_num');
  }
  public set concurrencyNum(value: number) {
    this._concurrencyNum = value;
  }
  public resetConcurrencyNum() {
    this._concurrencyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyNumInput() {
    return this._concurrencyNum;
  }

  // depend_list - computed: true, optional: true, required: false
  private _dependList?: string[]; 
  public get dependList() {
    return cdktf.Fn.tolist(this.getListAttribute('depend_list'));
  }
  public set dependList(value: string[]) {
    this._dependList = value;
  }
  public resetDependList() {
    this._dependList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependListInput() {
    return this._dependList;
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

  // dns_list - computed: true, optional: true, required: false
  private _dnsList?: string; 
  public get dnsList() {
    return this.getStringAttribute('dns_list');
  }
  public set dnsList(value: string) {
    this._dnsList = value;
  }
  public resetDnsList() {
    this._dnsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }

  // enable_auth_in_header - computed: true, optional: true, required: false
  private _enableAuthInHeader?: boolean | cdktf.IResolvable; 
  public get enableAuthInHeader() {
    return this.getBooleanAttribute('enable_auth_in_header');
  }
  public set enableAuthInHeader(value: boolean | cdktf.IResolvable) {
    this._enableAuthInHeader = value;
  }
  public resetEnableAuthInHeader() {
    this._enableAuthInHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthInHeaderInput() {
    return this._enableAuthInHeader;
  }

  // enable_class_isolation - computed: true, optional: true, required: false
  private _enableClassIsolation?: boolean | cdktf.IResolvable; 
  public get enableClassIsolation() {
    return this.getBooleanAttribute('enable_class_isolation');
  }
  public set enableClassIsolation(value: boolean | cdktf.IResolvable) {
    this._enableClassIsolation = value;
  }
  public resetEnableClassIsolation() {
    this._enableClassIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassIsolationInput() {
    return this._enableClassIsolation;
  }

  // enable_dynamic_memory - computed: true, optional: true, required: false
  private _enableDynamicMemory?: boolean | cdktf.IResolvable; 
  public get enableDynamicMemory() {
    return this.getBooleanAttribute('enable_dynamic_memory');
  }
  public set enableDynamicMemory(value: boolean | cdktf.IResolvable) {
    this._enableDynamicMemory = value;
  }
  public resetEnableDynamicMemory() {
    this._enableDynamicMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicMemoryInput() {
    return this._enableDynamicMemory;
  }

  // enable_lts_log - computed: true, optional: true, required: false
  private _enableLtsLog?: boolean | cdktf.IResolvable; 
  public get enableLtsLog() {
    return this.getBooleanAttribute('enable_lts_log');
  }
  public set enableLtsLog(value: boolean | cdktf.IResolvable) {
    this._enableLtsLog = value;
  }
  public resetEnableLtsLog() {
    this._enableLtsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLtsLogInput() {
    return this._enableLtsLog;
  }

  // encrypted_user_data - computed: true, optional: false, required: false
  public get encryptedUserData() {
    return this.getStringAttribute('encrypted_user_data');
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // ephemeral_storage - computed: true, optional: true, required: false
  private _ephemeralStorage?: number; 
  public get ephemeralStorage() {
    return this.getNumberAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: number) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // func_code - computed: false, optional: true, required: false
  private _funcCode?: string; 
  public get funcCode() {
    return this.getStringAttribute('func_code');
  }
  public set funcCode(value: string) {
    this._funcCode = value;
  }
  public resetFuncCode() {
    this._funcCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCodeInput() {
    return this._funcCode;
  }

  // functiongraph_version - computed: true, optional: true, required: false
  private _functiongraphVersion?: string; 
  public get functiongraphVersion() {
    return this.getStringAttribute('functiongraph_version');
  }
  public set functiongraphVersion(value: string) {
    this._functiongraphVersion = value;
  }
  public resetFunctiongraphVersion() {
    this._functiongraphVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functiongraphVersionInput() {
    return this._functiongraphVersion;
  }

  // gpu_memory - computed: false, optional: true, required: false
  private _gpuMemory?: number; 
  public get gpuMemory() {
    return this.getNumberAttribute('gpu_memory');
  }
  public set gpuMemory(value: number) {
    this._gpuMemory = value;
  }
  public resetGpuMemory() {
    this._gpuMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuMemoryInput() {
    return this._gpuMemory;
  }

  // gpu_type - computed: false, optional: true, required: false
  private _gpuType?: string; 
  public get gpuType() {
    return this.getStringAttribute('gpu_type');
  }
  public set gpuType(value: string) {
    this._gpuType = value;
  }
  public resetGpuType() {
    this._gpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypeInput() {
    return this._gpuType;
  }

  // handler - computed: true, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // heartbeat_handler - computed: false, optional: true, required: false
  private _heartbeatHandler?: string; 
  public get heartbeatHandler() {
    return this.getStringAttribute('heartbeat_handler');
  }
  public set heartbeatHandler(value: string) {
    this._heartbeatHandler = value;
  }
  public resetHeartbeatHandler() {
    this._heartbeatHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatHandlerInput() {
    return this._heartbeatHandler;
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

  // initializer_handler - computed: true, optional: true, required: false
  private _initializerHandler?: string; 
  public get initializerHandler() {
    return this.getStringAttribute('initializer_handler');
  }
  public set initializerHandler(value: string) {
    this._initializerHandler = value;
  }
  public resetInitializerHandler() {
    this._initializerHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerHandlerInput() {
    return this._initializerHandler;
  }

  // initializer_timeout - computed: true, optional: true, required: false
  private _initializerTimeout?: number; 
  public get initializerTimeout() {
    return this.getNumberAttribute('initializer_timeout');
  }
  public set initializerTimeout(value: number) {
    this._initializerTimeout = value;
  }
  public resetInitializerTimeout() {
    this._initializerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerTimeoutInput() {
    return this._initializerTimeout;
  }

  // is_stateful_function - computed: true, optional: true, required: false
  private _isStatefulFunction?: boolean | cdktf.IResolvable; 
  public get isStatefulFunction() {
    return this.getBooleanAttribute('is_stateful_function');
  }
  public set isStatefulFunction(value: boolean | cdktf.IResolvable) {
    this._isStatefulFunction = value;
  }
  public resetIsStatefulFunction() {
    this._isStatefulFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStatefulFunctionInput() {
    return this._isStatefulFunction;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_id - computed: true, optional: true, required: false
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  public resetLogStreamId() {
    this._logStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
  }

  // log_stream_name - computed: true, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // lts_custom_tag - computed: true, optional: true, required: false
  private _ltsCustomTag?: { [key: string]: string }; 
  public get ltsCustomTag() {
    return this.getStringMapAttribute('lts_custom_tag');
  }
  public set ltsCustomTag(value: { [key: string]: string }) {
    this._ltsCustomTag = value;
  }
  public resetLtsCustomTag() {
    this._ltsCustomTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsCustomTagInput() {
    return this._ltsCustomTag;
  }

  // lts_custom_tag_origin - computed: true, optional: true, required: false
  private _ltsCustomTagOrigin?: { [key: string]: string }; 
  public get ltsCustomTagOrigin() {
    return this.getStringMapAttribute('lts_custom_tag_origin');
  }
  public set ltsCustomTagOrigin(value: { [key: string]: string }) {
    this._ltsCustomTagOrigin = value;
  }
  public resetLtsCustomTagOrigin() {
    this._ltsCustomTagOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsCustomTagOriginInput() {
    return this._ltsCustomTagOrigin;
  }

  // max_instance_num - computed: true, optional: true, required: false
  private _maxInstanceNum?: string; 
  public get maxInstanceNum() {
    return this.getStringAttribute('max_instance_num');
  }
  public set maxInstanceNum(value: string) {
    this._maxInstanceNum = value;
  }
  public resetMaxInstanceNum() {
    this._maxInstanceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceNumInput() {
    return this._maxInstanceNum;
  }

  // memory_size - computed: false, optional: false, required: true
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // mount_user_group_id - computed: true, optional: true, required: false
  private _mountUserGroupId?: number; 
  public get mountUserGroupId() {
    return this.getNumberAttribute('mount_user_group_id');
  }
  public set mountUserGroupId(value: number) {
    this._mountUserGroupId = value;
  }
  public resetMountUserGroupId() {
    this._mountUserGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountUserGroupIdInput() {
    return this._mountUserGroupId;
  }

  // mount_user_id - computed: true, optional: true, required: false
  private _mountUserId?: number; 
  public get mountUserId() {
    return this.getNumberAttribute('mount_user_id');
  }
  public set mountUserId(value: number) {
    this._mountUserId = value;
  }
  public resetMountUserId() {
    this._mountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountUserIdInput() {
    return this._mountUserId;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // peering_cidr - computed: false, optional: true, required: false
  private _peeringCidr?: string; 
  public get peeringCidr() {
    return this.getStringAttribute('peering_cidr');
  }
  public set peeringCidr(value: string) {
    this._peeringCidr = value;
  }
  public resetPeeringCidr() {
    this._peeringCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringCidrInput() {
    return this._peeringCidr;
  }

  // pre_stop_handler - computed: false, optional: true, required: false
  private _preStopHandler?: string; 
  public get preStopHandler() {
    return this.getStringAttribute('pre_stop_handler');
  }
  public set preStopHandler(value: string) {
    this._preStopHandler = value;
  }
  public resetPreStopHandler() {
    this._preStopHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopHandlerInput() {
    return this._preStopHandler;
  }

  // pre_stop_timeout - computed: false, optional: true, required: false
  private _preStopTimeout?: number; 
  public get preStopTimeout() {
    return this.getNumberAttribute('pre_stop_timeout');
  }
  public set preStopTimeout(value: number) {
    this._preStopTimeout = value;
  }
  public resetPreStopTimeout() {
    this._preStopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopTimeoutInput() {
    return this._preStopTimeout;
  }

  // region - computed: true, optional: true, required: false
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

  // restore_hook_handler - computed: false, optional: true, required: false
  private _restoreHookHandler?: string; 
  public get restoreHookHandler() {
    return this.getStringAttribute('restore_hook_handler');
  }
  public set restoreHookHandler(value: string) {
    this._restoreHookHandler = value;
  }
  public resetRestoreHookHandler() {
    this._restoreHookHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreHookHandlerInput() {
    return this._restoreHookHandler;
  }

  // restore_hook_timeout - computed: false, optional: true, required: false
  private _restoreHookTimeout?: number; 
  public get restoreHookTimeout() {
    return this.getNumberAttribute('restore_hook_timeout');
  }
  public set restoreHookTimeout(value: number) {
    this._restoreHookTimeout = value;
  }
  public resetRestoreHookTimeout() {
    this._restoreHookTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreHookTimeoutInput() {
    return this._restoreHookTimeout;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // user_data_encrypt_kms_key_id - computed: false, optional: true, required: false
  private _userDataEncryptKmsKeyId?: string; 
  public get userDataEncryptKmsKeyId() {
    return this.getStringAttribute('user_data_encrypt_kms_key_id');
  }
  public set userDataEncryptKmsKeyId(value: string) {
    this._userDataEncryptKmsKeyId = value;
  }
  public resetUserDataEncryptKmsKeyId() {
    this._userDataEncryptKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataEncryptKmsKeyIdInput() {
    return this._userDataEncryptKmsKeyId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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

  // xrole - computed: false, optional: true, required: false
  private _xrole?: string; 
  public get xrole() {
    return this.getStringAttribute('xrole');
  }
  public set xrole(value: string) {
    this._xrole = value;
  }
  public resetXrole() {
    this._xrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xroleInput() {
    return this._xrole;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new FgsFunctionCustomImageOutputReference(this, "custom_image");
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: FgsFunctionCustomImage) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // func_mounts - computed: false, optional: true, required: false
  private _funcMounts = new FgsFunctionFuncMountsList(this, "func_mounts", false);
  public get funcMounts() {
    return this._funcMounts;
  }
  public putFuncMounts(value: FgsFunctionFuncMounts[] | cdktf.IResolvable) {
    this._funcMounts.internalValue = value;
  }
  public resetFuncMounts() {
    this._funcMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcMountsInput() {
    return this._funcMounts.internalValue;
  }

  // network_controller - computed: false, optional: true, required: false
  private _networkController = new FgsFunctionNetworkControllerOutputReference(this, "network_controller");
  public get networkController() {
    return this._networkController;
  }
  public putNetworkController(value: FgsFunctionNetworkController) {
    this._networkController.internalValue = value;
  }
  public resetNetworkController() {
    this._networkController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkControllerInput() {
    return this._networkController.internalValue;
  }

  // reserved_instances - computed: false, optional: true, required: false
  private _reservedInstances = new FgsFunctionReservedInstancesList(this, "reserved_instances", true);
  public get reservedInstances() {
    return this._reservedInstances;
  }
  public putReservedInstances(value: FgsFunctionReservedInstances[] | cdktf.IResolvable) {
    this._reservedInstances.internalValue = value;
  }
  public resetReservedInstances() {
    this._reservedInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInstancesInput() {
    return this._reservedInstances.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FgsFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FgsFunctionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new FgsFunctionVersionsList(this, "versions", true);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: FgsFunctionVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agency: cdktf.stringToTerraform(this._agency),
      app: cdktf.stringToTerraform(this._app),
      app_agency: cdktf.stringToTerraform(this._appAgency),
      code_encrypt_kms_key_id: cdktf.stringToTerraform(this._codeEncryptKmsKeyId),
      code_filename: cdktf.stringToTerraform(this._codeFilename),
      code_type: cdktf.stringToTerraform(this._codeType),
      code_url: cdktf.stringToTerraform(this._codeUrl),
      concurrency_num: cdktf.numberToTerraform(this._concurrencyNum),
      depend_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependList),
      description: cdktf.stringToTerraform(this._description),
      dns_list: cdktf.stringToTerraform(this._dnsList),
      enable_auth_in_header: cdktf.booleanToTerraform(this._enableAuthInHeader),
      enable_class_isolation: cdktf.booleanToTerraform(this._enableClassIsolation),
      enable_dynamic_memory: cdktf.booleanToTerraform(this._enableDynamicMemory),
      enable_lts_log: cdktf.booleanToTerraform(this._enableLtsLog),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      ephemeral_storage: cdktf.numberToTerraform(this._ephemeralStorage),
      func_code: cdktf.stringToTerraform(this._funcCode),
      functiongraph_version: cdktf.stringToTerraform(this._functiongraphVersion),
      gpu_memory: cdktf.numberToTerraform(this._gpuMemory),
      gpu_type: cdktf.stringToTerraform(this._gpuType),
      handler: cdktf.stringToTerraform(this._handler),
      heartbeat_handler: cdktf.stringToTerraform(this._heartbeatHandler),
      id: cdktf.stringToTerraform(this._id),
      initializer_handler: cdktf.stringToTerraform(this._initializerHandler),
      initializer_timeout: cdktf.numberToTerraform(this._initializerTimeout),
      is_stateful_function: cdktf.booleanToTerraform(this._isStatefulFunction),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      log_stream_id: cdktf.stringToTerraform(this._logStreamId),
      log_stream_name: cdktf.stringToTerraform(this._logStreamName),
      lts_custom_tag: cdktf.hashMapper(cdktf.stringToTerraform)(this._ltsCustomTag),
      lts_custom_tag_origin: cdktf.hashMapper(cdktf.stringToTerraform)(this._ltsCustomTagOrigin),
      max_instance_num: cdktf.stringToTerraform(this._maxInstanceNum),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      mount_user_group_id: cdktf.numberToTerraform(this._mountUserGroupId),
      mount_user_id: cdktf.numberToTerraform(this._mountUserId),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      package: cdktf.stringToTerraform(this._package),
      peering_cidr: cdktf.stringToTerraform(this._peeringCidr),
      pre_stop_handler: cdktf.stringToTerraform(this._preStopHandler),
      pre_stop_timeout: cdktf.numberToTerraform(this._preStopTimeout),
      region: cdktf.stringToTerraform(this._region),
      restore_hook_handler: cdktf.stringToTerraform(this._restoreHookHandler),
      restore_hook_timeout: cdktf.numberToTerraform(this._restoreHookTimeout),
      runtime: cdktf.stringToTerraform(this._runtime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_encrypt_kms_key_id: cdktf.stringToTerraform(this._userDataEncryptKmsKeyId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      xrole: cdktf.stringToTerraform(this._xrole),
      custom_image: fgsFunctionCustomImageToTerraform(this._customImage.internalValue),
      func_mounts: cdktf.listMapper(fgsFunctionFuncMountsToTerraform, true)(this._funcMounts.internalValue),
      network_controller: fgsFunctionNetworkControllerToTerraform(this._networkController.internalValue),
      reserved_instances: cdktf.listMapper(fgsFunctionReservedInstancesToTerraform, true)(this._reservedInstances.internalValue),
      timeouts: fgsFunctionTimeoutsToTerraform(this._timeouts.internalValue),
      versions: cdktf.listMapper(fgsFunctionVersionsToTerraform, true)(this._versions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agency: {
        value: cdktf.stringToHclTerraform(this._agency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_agency: {
        value: cdktf.stringToHclTerraform(this._appAgency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_encrypt_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._codeEncryptKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_filename: {
        value: cdktf.stringToHclTerraform(this._codeFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_type: {
        value: cdktf.stringToHclTerraform(this._codeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_url: {
        value: cdktf.stringToHclTerraform(this._codeUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency_num: {
        value: cdktf.numberToHclTerraform(this._concurrencyNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      depend_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_list: {
        value: cdktf.stringToHclTerraform(this._dnsList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auth_in_header: {
        value: cdktf.booleanToHclTerraform(this._enableAuthInHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_class_isolation: {
        value: cdktf.booleanToHclTerraform(this._enableClassIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dynamic_memory: {
        value: cdktf.booleanToHclTerraform(this._enableDynamicMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_lts_log: {
        value: cdktf.booleanToHclTerraform(this._enableLtsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ephemeral_storage: {
        value: cdktf.numberToHclTerraform(this._ephemeralStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      func_code: {
        value: cdktf.stringToHclTerraform(this._funcCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functiongraph_version: {
        value: cdktf.stringToHclTerraform(this._functiongraphVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_memory: {
        value: cdktf.numberToHclTerraform(this._gpuMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gpu_type: {
        value: cdktf.stringToHclTerraform(this._gpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_handler: {
        value: cdktf.stringToHclTerraform(this._heartbeatHandler),
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
      initializer_handler: {
        value: cdktf.stringToHclTerraform(this._initializerHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initializer_timeout: {
        value: cdktf.numberToHclTerraform(this._initializerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_stateful_function: {
        value: cdktf.booleanToHclTerraform(this._isStatefulFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_id: {
        value: cdktf.stringToHclTerraform(this._logStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_name: {
        value: cdktf.stringToHclTerraform(this._logStreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lts_custom_tag: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ltsCustomTag),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lts_custom_tag_origin: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ltsCustomTagOrigin),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_instance_num: {
        value: cdktf.stringToHclTerraform(this._maxInstanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_user_group_id: {
        value: cdktf.numberToHclTerraform(this._mountUserGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_user_id: {
        value: cdktf.numberToHclTerraform(this._mountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_cidr: {
        value: cdktf.stringToHclTerraform(this._peeringCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop_handler: {
        value: cdktf.stringToHclTerraform(this._preStopHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop_timeout: {
        value: cdktf.numberToHclTerraform(this._preStopTimeout),
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
      restore_hook_handler: {
        value: cdktf.stringToHclTerraform(this._restoreHookHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_hook_timeout: {
        value: cdktf.numberToHclTerraform(this._restoreHookTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_encrypt_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._userDataEncryptKmsKeyId),
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
      xrole: {
        value: cdktf.stringToHclTerraform(this._xrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_image: {
        value: fgsFunctionCustomImageToHclTerraform(this._customImage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsFunctionCustomImageList",
      },
      func_mounts: {
        value: cdktf.listMapperHcl(fgsFunctionFuncMountsToHclTerraform, true)(this._funcMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsFunctionFuncMountsList",
      },
      network_controller: {
        value: fgsFunctionNetworkControllerToHclTerraform(this._networkController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsFunctionNetworkControllerList",
      },
      reserved_instances: {
        value: cdktf.listMapperHcl(fgsFunctionReservedInstancesToHclTerraform, true)(this._reservedInstances.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FgsFunctionReservedInstancesList",
      },
      timeouts: {
        value: fgsFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FgsFunctionTimeouts",
      },
      versions: {
        value: cdktf.listMapperHcl(fgsFunctionVersionsToHclTerraform, true)(this._versions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FgsFunctionVersionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
