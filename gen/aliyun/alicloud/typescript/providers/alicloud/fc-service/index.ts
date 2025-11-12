// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FcServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#description FcService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#id FcService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#internet_access FcService#internet_access}
  */
  readonly internetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#name FcService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#name_prefix FcService#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#publish FcService#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#role FcService#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#tags FcService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#log_config FcService#log_config}
  */
  readonly logConfig?: FcServiceLogConfig;
  /**
  * nas_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#nas_config FcService#nas_config}
  */
  readonly nasConfig?: FcServiceNasConfig;
  /**
  * tracing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#tracing_config FcService#tracing_config}
  */
  readonly tracingConfig?: FcServiceTracingConfig;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#vpc_config FcService#vpc_config}
  */
  readonly vpcConfig?: FcServiceVpcConfig;
}
export interface FcServiceLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#enable_instance_metrics FcService#enable_instance_metrics}
  */
  readonly enableInstanceMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#enable_request_metrics FcService#enable_request_metrics}
  */
  readonly enableRequestMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#logstore FcService#logstore}
  */
  readonly logstore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#project FcService#project}
  */
  readonly project: string;
}

export function fcServiceLogConfigToTerraform(struct?: FcServiceLogConfigOutputReference | FcServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_instance_metrics: cdktf.booleanToTerraform(struct!.enableInstanceMetrics),
    enable_request_metrics: cdktf.booleanToTerraform(struct!.enableRequestMetrics),
    logstore: cdktf.stringToTerraform(struct!.logstore),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function fcServiceLogConfigToHclTerraform(struct?: FcServiceLogConfigOutputReference | FcServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_instance_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableInstanceMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_request_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableRequestMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logstore: {
      value: cdktf.stringToHclTerraform(struct!.logstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInstanceMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInstanceMetrics = this._enableInstanceMetrics;
    }
    if (this._enableRequestMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRequestMetrics = this._enableRequestMetrics;
    }
    if (this._logstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstore = this._logstore;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcServiceLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInstanceMetrics = undefined;
      this._enableRequestMetrics = undefined;
      this._logstore = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInstanceMetrics = value.enableInstanceMetrics;
      this._enableRequestMetrics = value.enableRequestMetrics;
      this._logstore = value.logstore;
      this._project = value.project;
    }
  }

  // enable_instance_metrics - computed: false, optional: true, required: false
  private _enableInstanceMetrics?: boolean | cdktf.IResolvable; 
  public get enableInstanceMetrics() {
    return this.getBooleanAttribute('enable_instance_metrics');
  }
  public set enableInstanceMetrics(value: boolean | cdktf.IResolvable) {
    this._enableInstanceMetrics = value;
  }
  public resetEnableInstanceMetrics() {
    this._enableInstanceMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInstanceMetricsInput() {
    return this._enableInstanceMetrics;
  }

  // enable_request_metrics - computed: false, optional: true, required: false
  private _enableRequestMetrics?: boolean | cdktf.IResolvable; 
  public get enableRequestMetrics() {
    return this.getBooleanAttribute('enable_request_metrics');
  }
  public set enableRequestMetrics(value: boolean | cdktf.IResolvable) {
    this._enableRequestMetrics = value;
  }
  public resetEnableRequestMetrics() {
    this._enableRequestMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestMetricsInput() {
    return this._enableRequestMetrics;
  }

  // logstore - computed: false, optional: false, required: true
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface FcServiceNasConfigMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#mount_dir FcService#mount_dir}
  */
  readonly mountDir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#server_addr FcService#server_addr}
  */
  readonly serverAddr: string;
}

export function fcServiceNasConfigMountPointsToTerraform(struct?: FcServiceNasConfigMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_dir: cdktf.stringToTerraform(struct!.mountDir),
    server_addr: cdktf.stringToTerraform(struct!.serverAddr),
  }
}


export function fcServiceNasConfigMountPointsToHclTerraform(struct?: FcServiceNasConfigMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_dir: {
      value: cdktf.stringToHclTerraform(struct!.mountDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_addr: {
      value: cdktf.stringToHclTerraform(struct!.serverAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcServiceNasConfigMountPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FcServiceNasConfigMountPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDir = this._mountDir;
    }
    if (this._serverAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddr = this._serverAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcServiceNasConfigMountPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountDir = undefined;
      this._serverAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountDir = value.mountDir;
      this._serverAddr = value.serverAddr;
    }
  }

  // mount_dir - computed: false, optional: false, required: true
  private _mountDir?: string; 
  public get mountDir() {
    return this.getStringAttribute('mount_dir');
  }
  public set mountDir(value: string) {
    this._mountDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDirInput() {
    return this._mountDir;
  }

  // server_addr - computed: false, optional: false, required: true
  private _serverAddr?: string; 
  public get serverAddr() {
    return this.getStringAttribute('server_addr');
  }
  public set serverAddr(value: string) {
    this._serverAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
  }
}

export class FcServiceNasConfigMountPointsList extends cdktf.ComplexList {
  public internalValue? : FcServiceNasConfigMountPoints[] | cdktf.IResolvable

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
  public get(index: number): FcServiceNasConfigMountPointsOutputReference {
    return new FcServiceNasConfigMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FcServiceNasConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#group_id FcService#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#user_id FcService#user_id}
  */
  readonly userId: number;
  /**
  * mount_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#mount_points FcService#mount_points}
  */
  readonly mountPoints: FcServiceNasConfigMountPoints[] | cdktf.IResolvable;
}

export function fcServiceNasConfigToTerraform(struct?: FcServiceNasConfigOutputReference | FcServiceNasConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
    mount_points: cdktf.listMapper(fcServiceNasConfigMountPointsToTerraform, true)(struct!.mountPoints),
  }
}


export function fcServiceNasConfigToHclTerraform(struct?: FcServiceNasConfigOutputReference | FcServiceNasConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_points: {
      value: cdktf.listMapperHcl(fcServiceNasConfigMountPointsToHclTerraform, true)(struct!.mountPoints),
      isBlock: true,
      type: "list",
      storageClassType: "FcServiceNasConfigMountPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcServiceNasConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcServiceNasConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcServiceNasConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._userId = undefined;
      this._mountPoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._userId = value.userId;
      this._mountPoints.internalValue = value.mountPoints;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // mount_points - computed: false, optional: false, required: true
  private _mountPoints = new FcServiceNasConfigMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: FcServiceNasConfigMountPoints[] | cdktf.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }
}
export interface FcServiceTracingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#params FcService#params}
  */
  readonly params: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#type FcService#type}
  */
  readonly type: string;
}

export function fcServiceTracingConfigToTerraform(struct?: FcServiceTracingConfigOutputReference | FcServiceTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fcServiceTracingConfigToHclTerraform(struct?: FcServiceTracingConfigOutputReference | FcServiceTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class FcServiceTracingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcServiceTracingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcServiceTracingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params = value.params;
      this._type = value.type;
    }
  }

  // params - computed: false, optional: false, required: true
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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
export interface FcServiceVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#security_group_id FcService#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#vswitch_ids FcService#vswitch_ids}
  */
  readonly vswitchIds: string[];
}

export function fcServiceVpcConfigToTerraform(struct?: FcServiceVpcConfigOutputReference | FcServiceVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitchIds),
  }
}


export function fcServiceVpcConfigToHclTerraform(struct?: FcServiceVpcConfigOutputReference | FcServiceVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitchIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcServiceVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcServiceVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._vswitchIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchIds = this._vswitchIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcServiceVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupId = undefined;
      this._vswitchIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupId = value.securityGroupId;
      this._vswitchIds = value.vswitchIds;
    }
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_ids - computed: false, optional: false, required: true
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vswitch_ids'));
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service alicloud_fc_service}
*/
export class FcService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fc_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FcService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FcService to import
  * @param importFromId The id of the existing FcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FcService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fc_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/fc_service alicloud_fc_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FcServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FcServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fc_service',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._internetAccess = config.internetAccess;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._publish = config.publish;
    this._role = config.role;
    this._tags = config.tags;
    this._logConfig.internalValue = config.logConfig;
    this._nasConfig.internalValue = config.nasConfig;
    this._tracingConfig.internalValue = config.tracingConfig;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // internet_access - computed: false, optional: true, required: false
  private _internetAccess?: boolean | cdktf.IResolvable; 
  public get internetAccess() {
    return this.getBooleanAttribute('internet_access');
  }
  public set internetAccess(value: boolean | cdktf.IResolvable) {
    this._internetAccess = value;
  }
  public resetInternetAccess() {
    this._internetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new FcServiceLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: FcServiceLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // nas_config - computed: false, optional: true, required: false
  private _nasConfig = new FcServiceNasConfigOutputReference(this, "nas_config");
  public get nasConfig() {
    return this._nasConfig;
  }
  public putNasConfig(value: FcServiceNasConfig) {
    this._nasConfig.internalValue = value;
  }
  public resetNasConfig() {
    this._nasConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasConfigInput() {
    return this._nasConfig.internalValue;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig = new FcServiceTracingConfigOutputReference(this, "tracing_config");
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public putTracingConfig(value: FcServiceTracingConfig) {
    this._tracingConfig.internalValue = value;
  }
  public resetTracingConfig() {
    this._tracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new FcServiceVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: FcServiceVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      internet_access: cdktf.booleanToTerraform(this._internetAccess),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      publish: cdktf.booleanToTerraform(this._publish),
      role: cdktf.stringToTerraform(this._role),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      log_config: fcServiceLogConfigToTerraform(this._logConfig.internalValue),
      nas_config: fcServiceNasConfigToTerraform(this._nasConfig.internalValue),
      tracing_config: fcServiceTracingConfigToTerraform(this._tracingConfig.internalValue),
      vpc_config: fcServiceVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      internet_access: {
        value: cdktf.booleanToHclTerraform(this._internetAccess),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish: {
        value: cdktf.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      log_config: {
        value: fcServiceLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcServiceLogConfigList",
      },
      nas_config: {
        value: fcServiceNasConfigToHclTerraform(this._nasConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcServiceNasConfigList",
      },
      tracing_config: {
        value: fcServiceTracingConfigToHclTerraform(this._tracingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcServiceTracingConfigList",
      },
      vpc_config: {
        value: fcServiceVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcServiceVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
