// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether SCF function asynchronous attribute is enabled. `TRUE` is open, `FALSE` is close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#async_run_enable ScfFunction#async_run_enable}
  */
  readonly asyncRunEnable?: string;
  /**
  * cls logset id of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cls_logset_id ScfFunction#cls_logset_id}
  */
  readonly clsLogsetId?: string;
  /**
  * cls topic id of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cls_topic_id ScfFunction#cls_topic_id}
  */
  readonly clsTopicId?: string;
  /**
  * Cos bucket name of the SCF function, such as `cos-1234567890`, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cos_bucket_name ScfFunction#cos_bucket_name}
  */
  readonly cosBucketName?: string;
  /**
  * Cos bucket region of the SCF function, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cos_bucket_region ScfFunction#cos_bucket_region}
  */
  readonly cosBucketRegion?: string;
  /**
  * Cos object name of the SCF function, should have suffix `.zip` or `.jar`, conflict with `zip_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cos_object_name ScfFunction#cos_object_name}
  */
  readonly cosObjectName?: string;
  /**
  * Description of the SCF function. Description supports English letters, numbers, spaces, commas, newlines, periods and Chinese, the maximum length is 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#description ScfFunction#description}
  */
  readonly description?: string;
  /**
  * Whether to enable Dns caching capability, only the EVENT function is supported. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#dns_cache ScfFunction#dns_cache}
  */
  readonly dnsCache?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether EIP config set to `ENABLE` when `enable_public_net` was true. Default `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#enable_eip_config ScfFunction#enable_eip_config}
  */
  readonly enableEipConfig?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether public net config enabled. Default `false`. NOTE: only `vpc_id` specified can disable public net config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#enable_public_net ScfFunction#enable_public_net}
  */
  readonly enablePublicNet?: boolean | cdktf.IResolvable;
  /**
  * Environment of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#environment ScfFunction#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Function type. The default value is Event. Enter Event if you need to create a trigger function. Enter HTTP if you need to create an HTTP function service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#func_type ScfFunction#func_type}
  */
  readonly funcType?: string;
  /**
  * Handler of the SCF function. The format of name is `<filename>.<method_name>`, and it supports 26 English letters, numbers, connectors, and underscores, it should start with a letter. The last character cannot be `-` or `_`. Available length is 2-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#handler ScfFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#id ScfFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable L5 for SCF function, default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#l5_enable ScfFunction#l5_enable}
  */
  readonly l5Enable?: boolean | cdktf.IResolvable;
  /**
  * Memory size of the SCF function, unit is MB. The default is `128`MB. The ladder is 128M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#mem_size ScfFunction#mem_size}
  */
  readonly memSize?: number;
  /**
  * Name of the SCF function. Name supports 26 English letters, numbers, connectors, and underscores, it should start with a letter. The last character cannot be `-` or `_`. Available length is 2-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#name ScfFunction#name}
  */
  readonly name: string;
  /**
  * Namespace of the SCF function, default is `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#namespace ScfFunction#namespace}
  */
  readonly namespace?: string;
  /**
  * Role of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#role ScfFunction#role}
  */
  readonly role?: string;
  /**
  * Runtime of the SCF function, only supports `Python2.7`, `Python3.6`, `Nodejs6.10`, `Nodejs8.9`, `Nodejs10.15`, `Nodejs12.16`, `Php5.2`, `Php7.4`, `Go1`, `Java8`, and `CustomRuntime`, default is `Python2.7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#runtime ScfFunction#runtime}
  */
  readonly runtime?: string;
  /**
  * Subnet ID of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#subnet_id ScfFunction#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Tags of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#tags ScfFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timeout of the SCF function, unit is second. Default `3`. Available value is 1-900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#timeout ScfFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * VPC ID of the SCF function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#vpc_id ScfFunction#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Zip file of the SCF function, conflict with `cos_bucket_name`, `cos_object_name`, `cos_bucket_region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#zip_file ScfFunction#zip_file}
  */
  readonly zipFile?: string;
  /**
  * cfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cfs_config ScfFunction#cfs_config}
  */
  readonly cfsConfig?: ScfFunctionCfsConfig[] | cdktf.IResolvable;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#image_config ScfFunction#image_config}
  */
  readonly imageConfig?: ScfFunctionImageConfig[] | cdktf.IResolvable;
  /**
  * intranet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#intranet_config ScfFunction#intranet_config}
  */
  readonly intranetConfig?: ScfFunctionIntranetConfig;
  /**
  * layers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#layers ScfFunction#layers}
  */
  readonly layers?: ScfFunctionLayers[] | cdktf.IResolvable;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#triggers ScfFunction#triggers}
  */
  readonly triggers?: ScfFunctionTriggers[] | cdktf.IResolvable;
}
export interface ScfFunctionTriggerInfo {
}

export function scfFunctionTriggerInfoToTerraform(struct?: ScfFunctionTriggerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function scfFunctionTriggerInfoToHclTerraform(struct?: ScfFunctionTriggerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ScfFunctionTriggerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ScfFunctionTriggerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionTriggerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_argument - computed: true, optional: false, required: false
  public get customArgument() {
    return this.getStringAttribute('custom_argument');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trigger_desc - computed: true, optional: false, required: false
  public get triggerDesc() {
    return this.getStringAttribute('trigger_desc');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ScfFunctionTriggerInfoList extends cdktf.ComplexList {

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
  public get(index: number): ScfFunctionTriggerInfoOutputReference {
    return new ScfFunctionTriggerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionCfsConfig {
  /**
  * File system instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cfs_id ScfFunction#cfs_id}
  */
  readonly cfsId: string;
  /**
  * Local mount directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#local_mount_dir ScfFunction#local_mount_dir}
  */
  readonly localMountDir: string;
  /**
  * File system mount instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#mount_ins_id ScfFunction#mount_ins_id}
  */
  readonly mountInsId: string;
  /**
  * Remote mount directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#remote_mount_dir ScfFunction#remote_mount_dir}
  */
  readonly remoteMountDir: string;
  /**
  * ID of user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#user_group_id ScfFunction#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * ID of user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#user_id ScfFunction#user_id}
  */
  readonly userId: string;
}

export function scfFunctionCfsConfigToTerraform(struct?: ScfFunctionCfsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfs_id: cdktf.stringToTerraform(struct!.cfsId),
    local_mount_dir: cdktf.stringToTerraform(struct!.localMountDir),
    mount_ins_id: cdktf.stringToTerraform(struct!.mountInsId),
    remote_mount_dir: cdktf.stringToTerraform(struct!.remoteMountDir),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function scfFunctionCfsConfigToHclTerraform(struct?: ScfFunctionCfsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfs_id: {
      value: cdktf.stringToHclTerraform(struct!.cfsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mount_dir: {
      value: cdktf.stringToHclTerraform(struct!.localMountDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_ins_id: {
      value: cdktf.stringToHclTerraform(struct!.mountInsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mount_dir: {
      value: cdktf.stringToHclTerraform(struct!.remoteMountDir),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionCfsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionCfsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfsId = this._cfsId;
    }
    if (this._localMountDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDir = this._localMountDir;
    }
    if (this._mountInsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountInsId = this._mountInsId;
    }
    if (this._remoteMountDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMountDir = this._remoteMountDir;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionCfsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfsId = undefined;
      this._localMountDir = undefined;
      this._mountInsId = undefined;
      this._remoteMountDir = undefined;
      this._userGroupId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfsId = value.cfsId;
      this._localMountDir = value.localMountDir;
      this._mountInsId = value.mountInsId;
      this._remoteMountDir = value.remoteMountDir;
      this._userGroupId = value.userGroupId;
      this._userId = value.userId;
    }
  }

  // cfs_id - computed: false, optional: false, required: true
  private _cfsId?: string; 
  public get cfsId() {
    return this.getStringAttribute('cfs_id');
  }
  public set cfsId(value: string) {
    this._cfsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfsIdInput() {
    return this._cfsId;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // local_mount_dir - computed: false, optional: false, required: true
  private _localMountDir?: string; 
  public get localMountDir() {
    return this.getStringAttribute('local_mount_dir');
  }
  public set localMountDir(value: string) {
    this._localMountDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirInput() {
    return this._localMountDir;
  }

  // mount_ins_id - computed: false, optional: false, required: true
  private _mountInsId?: string; 
  public get mountInsId() {
    return this.getStringAttribute('mount_ins_id');
  }
  public set mountInsId(value: string) {
    this._mountInsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInsIdInput() {
    return this._mountInsId;
  }

  // mount_subnet_id - computed: true, optional: false, required: false
  public get mountSubnetId() {
    return this.getStringAttribute('mount_subnet_id');
  }

  // mount_vpc_id - computed: true, optional: false, required: false
  public get mountVpcId() {
    return this.getStringAttribute('mount_vpc_id');
  }

  // remote_mount_dir - computed: false, optional: false, required: true
  private _remoteMountDir?: string; 
  public get remoteMountDir() {
    return this.getStringAttribute('remote_mount_dir');
  }
  public set remoteMountDir(value: string) {
    this._remoteMountDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMountDirInput() {
    return this._remoteMountDir;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class ScfFunctionCfsConfigList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionCfsConfig[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionCfsConfigOutputReference {
    return new ScfFunctionCfsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionImageConfig {
  /**
  * the parameters of command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#args ScfFunction#args}
  */
  readonly args?: string;
  /**
  * The command of entrypoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#command ScfFunction#command}
  */
  readonly command?: string;
  /**
  * Image accelerate switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#container_image_accelerate ScfFunction#container_image_accelerate}
  */
  readonly containerImageAccelerate?: boolean | cdktf.IResolvable;
  /**
  * The entrypoint of app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#entry_point ScfFunction#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Image function port setting. Default is `9000`, -1 indicates no port mirroring function. Other value ranges 0 ~ 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#image_port ScfFunction#image_port}
  */
  readonly imagePort?: number;
  /**
  * The image type. personal or enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#image_type ScfFunction#image_type}
  */
  readonly imageType: string;
  /**
  * The uri of image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#image_uri ScfFunction#image_uri}
  */
  readonly imageUri: string;
  /**
  * The registry id of TCR. When image type is enterprise, it must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#registry_id ScfFunction#registry_id}
  */
  readonly registryId?: string;
}

export function scfFunctionImageConfigToTerraform(struct?: ScfFunctionImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    container_image_accelerate: cdktf.booleanToTerraform(struct!.containerImageAccelerate),
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    image_port: cdktf.numberToTerraform(struct!.imagePort),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}


export function scfFunctionImageConfigToHclTerraform(struct?: ScfFunctionImageConfig | cdktf.IResolvable): any {
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
    container_image_accelerate: {
      value: cdktf.booleanToHclTerraform(struct!.containerImageAccelerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entry_point: {
      value: cdktf.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_port: {
      value: cdktf.numberToHclTerraform(struct!.imagePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktf.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionImageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionImageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._containerImageAccelerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImageAccelerate = this._containerImageAccelerate;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._imagePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePort = this._imagePort;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionImageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._containerImageAccelerate = undefined;
      this._entryPoint = undefined;
      this._imagePort = undefined;
      this._imageType = undefined;
      this._imageUri = undefined;
      this._registryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._containerImageAccelerate = value.containerImageAccelerate;
      this._entryPoint = value.entryPoint;
      this._imagePort = value.imagePort;
      this._imageType = value.imageType;
      this._imageUri = value.imageUri;
      this._registryId = value.registryId;
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

  // container_image_accelerate - computed: false, optional: true, required: false
  private _containerImageAccelerate?: boolean | cdktf.IResolvable; 
  public get containerImageAccelerate() {
    return this.getBooleanAttribute('container_image_accelerate');
  }
  public set containerImageAccelerate(value: boolean | cdktf.IResolvable) {
    this._containerImageAccelerate = value;
  }
  public resetContainerImageAccelerate() {
    this._containerImageAccelerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageAccelerateInput() {
    return this._containerImageAccelerate;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // image_port - computed: false, optional: true, required: false
  private _imagePort?: number; 
  public get imagePort() {
    return this.getNumberAttribute('image_port');
  }
  public set imagePort(value: number) {
    this._imagePort = value;
  }
  public resetImagePort() {
    this._imagePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePortInput() {
    return this._imagePort;
  }

  // image_type - computed: false, optional: false, required: true
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }
}

export class ScfFunctionImageConfigList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionImageConfig[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionImageConfigOutputReference {
    return new ScfFunctionImageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionIntranetConfig {
  /**
  * Whether to enable fixed intranet IP, ENABLE is enabled, DISABLE is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#ip_fixed ScfFunction#ip_fixed}
  */
  readonly ipFixed: string;
}

export function scfFunctionIntranetConfigToTerraform(struct?: ScfFunctionIntranetConfigOutputReference | ScfFunctionIntranetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_fixed: cdktf.stringToTerraform(struct!.ipFixed),
  }
}


export function scfFunctionIntranetConfigToHclTerraform(struct?: ScfFunctionIntranetConfigOutputReference | ScfFunctionIntranetConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_fixed: {
      value: cdktf.stringToHclTerraform(struct!.ipFixed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionIntranetConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfFunctionIntranetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFixed = this._ipFixed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionIntranetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipFixed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipFixed = value.ipFixed;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }

  // ip_fixed - computed: false, optional: false, required: true
  private _ipFixed?: string; 
  public get ipFixed() {
    return this.getStringAttribute('ip_fixed');
  }
  public set ipFixed(value: string) {
    this._ipFixed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFixedInput() {
    return this._ipFixed;
  }
}
export interface ScfFunctionLayers {
  /**
  * The name of Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#layer_name ScfFunction#layer_name}
  */
  readonly layerName: string;
  /**
  * The version of layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#layer_version ScfFunction#layer_version}
  */
  readonly layerVersion: number;
}

export function scfFunctionLayersToTerraform(struct?: ScfFunctionLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layer_name: cdktf.stringToTerraform(struct!.layerName),
    layer_version: cdktf.numberToTerraform(struct!.layerVersion),
  }
}


export function scfFunctionLayersToHclTerraform(struct?: ScfFunctionLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    layer_name: {
      value: cdktf.stringToHclTerraform(struct!.layerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layer_version: {
      value: cdktf.numberToHclTerraform(struct!.layerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionLayers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.layerName = this._layerName;
    }
    if (this._layerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.layerVersion = this._layerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionLayers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._layerName = undefined;
      this._layerVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._layerName = value.layerName;
      this._layerVersion = value.layerVersion;
    }
  }

  // layer_name - computed: false, optional: false, required: true
  private _layerName?: string; 
  public get layerName() {
    return this.getStringAttribute('layer_name');
  }
  public set layerName(value: string) {
    this._layerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerNameInput() {
    return this._layerName;
  }

  // layer_version - computed: false, optional: false, required: true
  private _layerVersion?: number; 
  public get layerVersion() {
    return this.getNumberAttribute('layer_version');
  }
  public set layerVersion(value: number) {
    this._layerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerVersionInput() {
    return this._layerVersion;
  }
}

export class ScfFunctionLayersList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionLayers[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionLayersOutputReference {
    return new ScfFunctionLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionTriggers {
  /**
  * Region of cos bucket. if `type` is `cos`, `cos_region` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#cos_region ScfFunction#cos_region}
  */
  readonly cosRegion?: string;
  /**
  * Name of the SCF function trigger, if `type` is `ckafka`, the format of name must be `<ckafkaInstanceId>-<topicId>`; if `type` is `cos`, the name is cos bucket id, other In any case, it can be combined arbitrarily. It can only contain English letters, numbers, connectors and underscores. The maximum length is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#name ScfFunction#name}
  */
  readonly name: string;
  /**
  * TriggerDesc of the SCF function trigger, parameter format of `timer` is linux cron expression; parameter of `cos` type is json string `{"bucketUrl":"<name-appid>.cos.<region>.myqcloud.com","event":"cos:ObjectCreated:*","filter":{"Prefix":"","Suffix":""}}`, where `bucketUrl` is cos bucket (optional), `event` is the cos event trigger, `Prefix` is the corresponding file prefix filter condition, `Suffix` is the suffix filter condition, if not need filter condition can not pass; `cmq` type does not pass this parameter; `ckafka` type parameter format is json string `{"maxMsgNum":"1","offset":"latest"}`; `apigw` type parameter format is json string `{"api":{"authRequired":"FALSE","requestConfig":{"method":"ANY"},"isIntegratedResponse":"FALSE"},"service":{"serviceId":"service-dqzh68sg"},"release":{"environmentName":"test"}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#trigger_desc ScfFunction#trigger_desc}
  */
  readonly triggerDesc: string;
  /**
  * Type of the SCF function trigger, support `timer`, `ckafka`, `custom_kafka`, `apigw`, `cmq`, `cos`, `mqtt`, `cls`, `clb`, `mps`, `vod`, `cm`, `eb`, `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#type ScfFunction#type}
  */
  readonly type: string;
}

export function scfFunctionTriggersToTerraform(struct?: ScfFunctionTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_region: cdktf.stringToTerraform(struct!.cosRegion),
    name: cdktf.stringToTerraform(struct!.name),
    trigger_desc: cdktf.stringToTerraform(struct!.triggerDesc),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function scfFunctionTriggersToHclTerraform(struct?: ScfFunctionTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_region: {
      value: cdktf.stringToHclTerraform(struct!.cosRegion),
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
    trigger_desc: {
      value: cdktf.stringToHclTerraform(struct!.triggerDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ScfFunctionTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosRegion = this._cosRegion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._triggerDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerDesc = this._triggerDesc;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cosRegion = undefined;
      this._name = undefined;
      this._triggerDesc = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cosRegion = value.cosRegion;
      this._name = value.name;
      this._triggerDesc = value.triggerDesc;
      this._type = value.type;
    }
  }

  // cos_region - computed: false, optional: true, required: false
  private _cosRegion?: string; 
  public get cosRegion() {
    return this.getStringAttribute('cos_region');
  }
  public set cosRegion(value: string) {
    this._cosRegion = value;
  }
  public resetCosRegion() {
    this._cosRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosRegionInput() {
    return this._cosRegion;
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

  // trigger_desc - computed: false, optional: false, required: true
  private _triggerDesc?: string; 
  public get triggerDesc() {
    return this.getStringAttribute('trigger_desc');
  }
  public set triggerDesc(value: string) {
    this._triggerDesc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDescInput() {
    return this._triggerDesc;
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

export class ScfFunctionTriggersList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionTriggers[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionTriggersOutputReference {
    return new ScfFunctionTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function tencentcloud_scf_function}
*/
export class ScfFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfFunction to import
  * @param importFromId The id of the existing ScfFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function tencentcloud_scf_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: ScfFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_function',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asyncRunEnable = config.asyncRunEnable;
    this._clsLogsetId = config.clsLogsetId;
    this._clsTopicId = config.clsTopicId;
    this._cosBucketName = config.cosBucketName;
    this._cosBucketRegion = config.cosBucketRegion;
    this._cosObjectName = config.cosObjectName;
    this._description = config.description;
    this._dnsCache = config.dnsCache;
    this._enableEipConfig = config.enableEipConfig;
    this._enablePublicNet = config.enablePublicNet;
    this._environment = config.environment;
    this._funcType = config.funcType;
    this._handler = config.handler;
    this._id = config.id;
    this._l5Enable = config.l5Enable;
    this._memSize = config.memSize;
    this._name = config.name;
    this._namespace = config.namespace;
    this._role = config.role;
    this._runtime = config.runtime;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._vpcId = config.vpcId;
    this._zipFile = config.zipFile;
    this._cfsConfig.internalValue = config.cfsConfig;
    this._imageConfig.internalValue = config.imageConfig;
    this._intranetConfig.internalValue = config.intranetConfig;
    this._layers.internalValue = config.layers;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_run_enable - computed: true, optional: true, required: false
  private _asyncRunEnable?: string; 
  public get asyncRunEnable() {
    return this.getStringAttribute('async_run_enable');
  }
  public set asyncRunEnable(value: string) {
    this._asyncRunEnable = value;
  }
  public resetAsyncRunEnable() {
    this._asyncRunEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncRunEnableInput() {
    return this._asyncRunEnable;
  }

  // cls_logset_id - computed: true, optional: true, required: false
  private _clsLogsetId?: string; 
  public get clsLogsetId() {
    return this.getStringAttribute('cls_logset_id');
  }
  public set clsLogsetId(value: string) {
    this._clsLogsetId = value;
  }
  public resetClsLogsetId() {
    this._clsLogsetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsLogsetIdInput() {
    return this._clsLogsetId;
  }

  // cls_topic_id - computed: true, optional: true, required: false
  private _clsTopicId?: string; 
  public get clsTopicId() {
    return this.getStringAttribute('cls_topic_id');
  }
  public set clsTopicId(value: string) {
    this._clsTopicId = value;
  }
  public resetClsTopicId() {
    this._clsTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsTopicIdInput() {
    return this._clsTopicId;
  }

  // code_error - computed: true, optional: false, required: false
  public get codeError() {
    return this.getStringAttribute('code_error');
  }

  // code_result - computed: true, optional: false, required: false
  public get codeResult() {
    return this.getStringAttribute('code_result');
  }

  // code_size - computed: true, optional: false, required: false
  public get codeSize() {
    return this.getNumberAttribute('code_size');
  }

  // cos_bucket_name - computed: false, optional: true, required: false
  private _cosBucketName?: string; 
  public get cosBucketName() {
    return this.getStringAttribute('cos_bucket_name');
  }
  public set cosBucketName(value: string) {
    this._cosBucketName = value;
  }
  public resetCosBucketName() {
    this._cosBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketNameInput() {
    return this._cosBucketName;
  }

  // cos_bucket_region - computed: false, optional: true, required: false
  private _cosBucketRegion?: string; 
  public get cosBucketRegion() {
    return this.getStringAttribute('cos_bucket_region');
  }
  public set cosBucketRegion(value: string) {
    this._cosBucketRegion = value;
  }
  public resetCosBucketRegion() {
    this._cosBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketRegionInput() {
    return this._cosBucketRegion;
  }

  // cos_object_name - computed: false, optional: true, required: false
  private _cosObjectName?: string; 
  public get cosObjectName() {
    return this.getStringAttribute('cos_object_name');
  }
  public set cosObjectName(value: string) {
    this._cosObjectName = value;
  }
  public resetCosObjectName() {
    this._cosObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosObjectNameInput() {
    return this._cosObjectName;
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

  // dns_cache - computed: false, optional: true, required: false
  private _dnsCache?: boolean | cdktf.IResolvable; 
  public get dnsCache() {
    return this.getBooleanAttribute('dns_cache');
  }
  public set dnsCache(value: boolean | cdktf.IResolvable) {
    this._dnsCache = value;
  }
  public resetDnsCache() {
    this._dnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheInput() {
    return this._dnsCache;
  }

  // eip_fixed - computed: true, optional: false, required: false
  public get eipFixed() {
    return this.getBooleanAttribute('eip_fixed');
  }

  // eips - computed: true, optional: false, required: false
  public get eips() {
    return this.getListAttribute('eips');
  }

  // enable_eip_config - computed: false, optional: true, required: false
  private _enableEipConfig?: boolean | cdktf.IResolvable; 
  public get enableEipConfig() {
    return this.getBooleanAttribute('enable_eip_config');
  }
  public set enableEipConfig(value: boolean | cdktf.IResolvable) {
    this._enableEipConfig = value;
  }
  public resetEnableEipConfig() {
    this._enableEipConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEipConfigInput() {
    return this._enableEipConfig;
  }

  // enable_public_net - computed: false, optional: true, required: false
  private _enablePublicNet?: boolean | cdktf.IResolvable; 
  public get enablePublicNet() {
    return this.getBooleanAttribute('enable_public_net');
  }
  public set enablePublicNet(value: boolean | cdktf.IResolvable) {
    this._enablePublicNet = value;
  }
  public resetEnablePublicNet() {
    this._enablePublicNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicNetInput() {
    return this._enablePublicNet;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // err_no - computed: true, optional: false, required: false
  public get errNo() {
    return this.getNumberAttribute('err_no');
  }

  // func_type - computed: false, optional: true, required: false
  private _funcType?: string; 
  public get funcType() {
    return this.getStringAttribute('func_type');
  }
  public set funcType(value: string) {
    this._funcType = value;
  }
  public resetFuncType() {
    this._funcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcTypeInput() {
    return this._funcType;
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // handler - computed: false, optional: true, required: false
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // install_dependency - computed: true, optional: false, required: false
  public get installDependency() {
    return this.getBooleanAttribute('install_dependency');
  }

  // l5_enable - computed: false, optional: true, required: false
  private _l5Enable?: boolean | cdktf.IResolvable; 
  public get l5Enable() {
    return this.getBooleanAttribute('l5_enable');
  }
  public set l5Enable(value: boolean | cdktf.IResolvable) {
    this._l5Enable = value;
  }
  public resetL5Enable() {
    this._l5Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l5EnableInput() {
    return this._l5Enable;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_desc - computed: true, optional: false, required: false
  public get statusDesc() {
    return this.getStringAttribute('status_desc');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // trigger_info - computed: true, optional: false, required: false
  private _triggerInfo = new ScfFunctionTriggerInfoList(this, "trigger_info", false);
  public get triggerInfo() {
    return this._triggerInfo;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
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

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }

  // cfs_config - computed: false, optional: true, required: false
  private _cfsConfig = new ScfFunctionCfsConfigList(this, "cfs_config", false);
  public get cfsConfig() {
    return this._cfsConfig;
  }
  public putCfsConfig(value: ScfFunctionCfsConfig[] | cdktf.IResolvable) {
    this._cfsConfig.internalValue = value;
  }
  public resetCfsConfig() {
    this._cfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfsConfigInput() {
    return this._cfsConfig.internalValue;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new ScfFunctionImageConfigList(this, "image_config", false);
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: ScfFunctionImageConfig[] | cdktf.IResolvable) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // intranet_config - computed: false, optional: true, required: false
  private _intranetConfig = new ScfFunctionIntranetConfigOutputReference(this, "intranet_config");
  public get intranetConfig() {
    return this._intranetConfig;
  }
  public putIntranetConfig(value: ScfFunctionIntranetConfig) {
    this._intranetConfig.internalValue = value;
  }
  public resetIntranetConfig() {
    this._intranetConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetConfigInput() {
    return this._intranetConfig.internalValue;
  }

  // layers - computed: false, optional: true, required: false
  private _layers = new ScfFunctionLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: ScfFunctionLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  public resetLayers() {
    this._layers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new ScfFunctionTriggersList(this, "triggers", true);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: ScfFunctionTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      async_run_enable: cdktf.stringToTerraform(this._asyncRunEnable),
      cls_logset_id: cdktf.stringToTerraform(this._clsLogsetId),
      cls_topic_id: cdktf.stringToTerraform(this._clsTopicId),
      cos_bucket_name: cdktf.stringToTerraform(this._cosBucketName),
      cos_bucket_region: cdktf.stringToTerraform(this._cosBucketRegion),
      cos_object_name: cdktf.stringToTerraform(this._cosObjectName),
      description: cdktf.stringToTerraform(this._description),
      dns_cache: cdktf.booleanToTerraform(this._dnsCache),
      enable_eip_config: cdktf.booleanToTerraform(this._enableEipConfig),
      enable_public_net: cdktf.booleanToTerraform(this._enablePublicNet),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      func_type: cdktf.stringToTerraform(this._funcType),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      l5_enable: cdktf.booleanToTerraform(this._l5Enable),
      mem_size: cdktf.numberToTerraform(this._memSize),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      role: cdktf.stringToTerraform(this._role),
      runtime: cdktf.stringToTerraform(this._runtime),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zip_file: cdktf.stringToTerraform(this._zipFile),
      cfs_config: cdktf.listMapper(scfFunctionCfsConfigToTerraform, true)(this._cfsConfig.internalValue),
      image_config: cdktf.listMapper(scfFunctionImageConfigToTerraform, true)(this._imageConfig.internalValue),
      intranet_config: scfFunctionIntranetConfigToTerraform(this._intranetConfig.internalValue),
      layers: cdktf.listMapper(scfFunctionLayersToTerraform, true)(this._layers.internalValue),
      triggers: cdktf.listMapper(scfFunctionTriggersToTerraform, true)(this._triggers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_run_enable: {
        value: cdktf.stringToHclTerraform(this._asyncRunEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_logset_id: {
        value: cdktf.stringToHclTerraform(this._clsLogsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_topic_id: {
        value: cdktf.stringToHclTerraform(this._clsTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket_name: {
        value: cdktf.stringToHclTerraform(this._cosBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket_region: {
        value: cdktf.stringToHclTerraform(this._cosBucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_object_name: {
        value: cdktf.stringToHclTerraform(this._cosObjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_cache: {
        value: cdktf.booleanToHclTerraform(this._dnsCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_eip_config: {
        value: cdktf.booleanToHclTerraform(this._enableEipConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_public_net: {
        value: cdktf.booleanToHclTerraform(this._enablePublicNet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      func_type: {
        value: cdktf.stringToHclTerraform(this._funcType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l5_enable: {
        value: cdktf.booleanToHclTerraform(this._l5Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mem_size: {
        value: cdktf.numberToHclTerraform(this._memSize),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip_file: {
        value: cdktf.stringToHclTerraform(this._zipFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cfs_config: {
        value: cdktf.listMapperHcl(scfFunctionCfsConfigToHclTerraform, true)(this._cfsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionCfsConfigList",
      },
      image_config: {
        value: cdktf.listMapperHcl(scfFunctionImageConfigToHclTerraform, true)(this._imageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionImageConfigList",
      },
      intranet_config: {
        value: scfFunctionIntranetConfigToHclTerraform(this._intranetConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionIntranetConfigList",
      },
      layers: {
        value: cdktf.listMapperHcl(scfFunctionLayersToHclTerraform, true)(this._layers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionLayersList",
      },
      triggers: {
        value: cdktf.listMapperHcl(scfFunctionTriggersToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScfFunctionTriggersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
