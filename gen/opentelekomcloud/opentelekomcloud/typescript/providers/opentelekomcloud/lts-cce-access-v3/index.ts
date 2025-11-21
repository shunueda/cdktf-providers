// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtsCceAccessV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}
  */
  readonly binaryCollect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}
  */
  readonly hostGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}
  */
  readonly logSplit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}
  */
  readonly logStreamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#access_config LtsCceAccessV3#access_config}
  */
  readonly accessConfig: LtsCceAccessV3AccessConfig;
}
export interface LtsCceAccessV3AccessConfigMultiLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}
  */
  readonly value?: string;
}

export function ltsCceAccessV3AccessConfigMultiLogFormatToTerraform(struct?: LtsCceAccessV3AccessConfigMultiLogFormatOutputReference | LtsCceAccessV3AccessConfigMultiLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ltsCceAccessV3AccessConfigMultiLogFormatToHclTerraform(struct?: LtsCceAccessV3AccessConfigMultiLogFormatOutputReference | LtsCceAccessV3AccessConfigMultiLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsCceAccessV3AccessConfigMultiLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsCceAccessV3AccessConfigMultiLogFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsCceAccessV3AccessConfigMultiLogFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LtsCceAccessV3AccessConfigSingleLogFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}
  */
  readonly value?: string;
}

export function ltsCceAccessV3AccessConfigSingleLogFormatToTerraform(struct?: LtsCceAccessV3AccessConfigSingleLogFormatOutputReference | LtsCceAccessV3AccessConfigSingleLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ltsCceAccessV3AccessConfigSingleLogFormatToHclTerraform(struct?: LtsCceAccessV3AccessConfigSingleLogFormatOutputReference | LtsCceAccessV3AccessConfigSingleLogFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsCceAccessV3AccessConfigSingleLogFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsCceAccessV3AccessConfigSingleLogFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsCceAccessV3AccessConfigSingleLogFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LtsCceAccessV3AccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}
  */
  readonly blackPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}
  */
  readonly containerNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}
  */
  readonly excludeEnvs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}
  */
  readonly excludeK8SLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}
  */
  readonly excludeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}
  */
  readonly includeEnvs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}
  */
  readonly includeK8SLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}
  */
  readonly includeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}
  */
  readonly logEnvs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}
  */
  readonly logK8S?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}
  */
  readonly logLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}
  */
  readonly nameSpaceRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}
  */
  readonly pathType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}
  */
  readonly paths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}
  */
  readonly podNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}
  */
  readonly stderr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}
  */
  readonly stdout?: boolean | cdktf.IResolvable;
  /**
  * multi_log_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#multi_log_format LtsCceAccessV3#multi_log_format}
  */
  readonly multiLogFormat?: LtsCceAccessV3AccessConfigMultiLogFormat;
  /**
  * single_log_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#single_log_format LtsCceAccessV3#single_log_format}
  */
  readonly singleLogFormat?: LtsCceAccessV3AccessConfigSingleLogFormat;
}

export function ltsCceAccessV3AccessConfigToTerraform(struct?: LtsCceAccessV3AccessConfigOutputReference | LtsCceAccessV3AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blackPaths),
    container_name_regex: cdktf.stringToTerraform(struct!.containerNameRegex),
    exclude_envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeEnvs),
    exclude_k8s_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeK8SLabels),
    exclude_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeLabels),
    include_envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeEnvs),
    include_k8s_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeK8SLabels),
    include_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeLabels),
    log_envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logEnvs),
    log_k8s: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logK8S),
    log_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logLabels),
    name_space_regex: cdktf.stringToTerraform(struct!.nameSpaceRegex),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    pod_name_regex: cdktf.stringToTerraform(struct!.podNameRegex),
    stderr: cdktf.booleanToTerraform(struct!.stderr),
    stdout: cdktf.booleanToTerraform(struct!.stdout),
    multi_log_format: ltsCceAccessV3AccessConfigMultiLogFormatToTerraform(struct!.multiLogFormat),
    single_log_format: ltsCceAccessV3AccessConfigSingleLogFormatToTerraform(struct!.singleLogFormat),
  }
}


export function ltsCceAccessV3AccessConfigToHclTerraform(struct?: LtsCceAccessV3AccessConfigOutputReference | LtsCceAccessV3AccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blackPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    container_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.containerNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeEnvs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclude_k8s_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeK8SLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclude_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeEnvs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_k8s_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeK8SLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logEnvs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_k8s: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logK8S),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name_space_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameSpaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pod_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.podNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stderr: {
      value: cdktf.booleanToHclTerraform(struct!.stderr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stdout: {
      value: cdktf.booleanToHclTerraform(struct!.stdout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_log_format: {
      value: ltsCceAccessV3AccessConfigMultiLogFormatToHclTerraform(struct!.multiLogFormat),
      isBlock: true,
      type: "list",
      storageClassType: "LtsCceAccessV3AccessConfigMultiLogFormatList",
    },
    single_log_format: {
      value: ltsCceAccessV3AccessConfigSingleLogFormatToHclTerraform(struct!.singleLogFormat),
      isBlock: true,
      type: "list",
      storageClassType: "LtsCceAccessV3AccessConfigSingleLogFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtsCceAccessV3AccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LtsCceAccessV3AccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackPaths = this._blackPaths;
    }
    if (this._containerNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNameRegex = this._containerNameRegex;
    }
    if (this._excludeEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeEnvs = this._excludeEnvs;
    }
    if (this._excludeK8SLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeK8SLabels = this._excludeK8SLabels;
    }
    if (this._excludeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeLabels = this._excludeLabels;
    }
    if (this._includeEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeEnvs = this._includeEnvs;
    }
    if (this._includeK8SLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeK8SLabels = this._includeK8SLabels;
    }
    if (this._includeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLabels = this._includeLabels;
    }
    if (this._logEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnvs = this._logEnvs;
    }
    if (this._logK8S !== undefined) {
      hasAnyValues = true;
      internalValueResult.logK8S = this._logK8S;
    }
    if (this._logLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLabels = this._logLabels;
    }
    if (this._nameSpaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpaceRegex = this._nameSpaceRegex;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._podNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.podNameRegex = this._podNameRegex;
    }
    if (this._stderr !== undefined) {
      hasAnyValues = true;
      internalValueResult.stderr = this._stderr;
    }
    if (this._stdout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdout = this._stdout;
    }
    if (this._multiLogFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLogFormat = this._multiLogFormat?.internalValue;
    }
    if (this._singleLogFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogFormat = this._singleLogFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtsCceAccessV3AccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackPaths = undefined;
      this._containerNameRegex = undefined;
      this._excludeEnvs = undefined;
      this._excludeK8SLabels = undefined;
      this._excludeLabels = undefined;
      this._includeEnvs = undefined;
      this._includeK8SLabels = undefined;
      this._includeLabels = undefined;
      this._logEnvs = undefined;
      this._logK8S = undefined;
      this._logLabels = undefined;
      this._nameSpaceRegex = undefined;
      this._pathType = undefined;
      this._paths = undefined;
      this._podNameRegex = undefined;
      this._stderr = undefined;
      this._stdout = undefined;
      this._multiLogFormat.internalValue = undefined;
      this._singleLogFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackPaths = value.blackPaths;
      this._containerNameRegex = value.containerNameRegex;
      this._excludeEnvs = value.excludeEnvs;
      this._excludeK8SLabels = value.excludeK8SLabels;
      this._excludeLabels = value.excludeLabels;
      this._includeEnvs = value.includeEnvs;
      this._includeK8SLabels = value.includeK8SLabels;
      this._includeLabels = value.includeLabels;
      this._logEnvs = value.logEnvs;
      this._logK8S = value.logK8S;
      this._logLabels = value.logLabels;
      this._nameSpaceRegex = value.nameSpaceRegex;
      this._pathType = value.pathType;
      this._paths = value.paths;
      this._podNameRegex = value.podNameRegex;
      this._stderr = value.stderr;
      this._stdout = value.stdout;
      this._multiLogFormat.internalValue = value.multiLogFormat;
      this._singleLogFormat.internalValue = value.singleLogFormat;
    }
  }

  // black_paths - computed: false, optional: true, required: false
  private _blackPaths?: string[]; 
  public get blackPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('black_paths'));
  }
  public set blackPaths(value: string[]) {
    this._blackPaths = value;
  }
  public resetBlackPaths() {
    this._blackPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackPathsInput() {
    return this._blackPaths;
  }

  // container_name_regex - computed: false, optional: true, required: false
  private _containerNameRegex?: string; 
  public get containerNameRegex() {
    return this.getStringAttribute('container_name_regex');
  }
  public set containerNameRegex(value: string) {
    this._containerNameRegex = value;
  }
  public resetContainerNameRegex() {
    this._containerNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameRegexInput() {
    return this._containerNameRegex;
  }

  // exclude_envs - computed: false, optional: true, required: false
  private _excludeEnvs?: { [key: string]: string }; 
  public get excludeEnvs() {
    return this.getStringMapAttribute('exclude_envs');
  }
  public set excludeEnvs(value: { [key: string]: string }) {
    this._excludeEnvs = value;
  }
  public resetExcludeEnvs() {
    this._excludeEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeEnvsInput() {
    return this._excludeEnvs;
  }

  // exclude_k8s_labels - computed: false, optional: true, required: false
  private _excludeK8SLabels?: { [key: string]: string }; 
  public get excludeK8SLabels() {
    return this.getStringMapAttribute('exclude_k8s_labels');
  }
  public set excludeK8SLabels(value: { [key: string]: string }) {
    this._excludeK8SLabels = value;
  }
  public resetExcludeK8SLabels() {
    this._excludeK8SLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeK8SLabelsInput() {
    return this._excludeK8SLabels;
  }

  // exclude_labels - computed: false, optional: true, required: false
  private _excludeLabels?: { [key: string]: string }; 
  public get excludeLabels() {
    return this.getStringMapAttribute('exclude_labels');
  }
  public set excludeLabels(value: { [key: string]: string }) {
    this._excludeLabels = value;
  }
  public resetExcludeLabels() {
    this._excludeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLabelsInput() {
    return this._excludeLabels;
  }

  // include_envs - computed: false, optional: true, required: false
  private _includeEnvs?: { [key: string]: string }; 
  public get includeEnvs() {
    return this.getStringMapAttribute('include_envs');
  }
  public set includeEnvs(value: { [key: string]: string }) {
    this._includeEnvs = value;
  }
  public resetIncludeEnvs() {
    this._includeEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEnvsInput() {
    return this._includeEnvs;
  }

  // include_k8s_labels - computed: false, optional: true, required: false
  private _includeK8SLabels?: { [key: string]: string }; 
  public get includeK8SLabels() {
    return this.getStringMapAttribute('include_k8s_labels');
  }
  public set includeK8SLabels(value: { [key: string]: string }) {
    this._includeK8SLabels = value;
  }
  public resetIncludeK8SLabels() {
    this._includeK8SLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeK8SLabelsInput() {
    return this._includeK8SLabels;
  }

  // include_labels - computed: false, optional: true, required: false
  private _includeLabels?: { [key: string]: string }; 
  public get includeLabels() {
    return this.getStringMapAttribute('include_labels');
  }
  public set includeLabels(value: { [key: string]: string }) {
    this._includeLabels = value;
  }
  public resetIncludeLabels() {
    this._includeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLabelsInput() {
    return this._includeLabels;
  }

  // log_envs - computed: false, optional: true, required: false
  private _logEnvs?: { [key: string]: string }; 
  public get logEnvs() {
    return this.getStringMapAttribute('log_envs');
  }
  public set logEnvs(value: { [key: string]: string }) {
    this._logEnvs = value;
  }
  public resetLogEnvs() {
    this._logEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnvsInput() {
    return this._logEnvs;
  }

  // log_k8s - computed: false, optional: true, required: false
  private _logK8S?: { [key: string]: string }; 
  public get logK8S() {
    return this.getStringMapAttribute('log_k8s');
  }
  public set logK8S(value: { [key: string]: string }) {
    this._logK8S = value;
  }
  public resetLogK8S() {
    this._logK8S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logK8SInput() {
    return this._logK8S;
  }

  // log_labels - computed: false, optional: true, required: false
  private _logLabels?: { [key: string]: string }; 
  public get logLabels() {
    return this.getStringMapAttribute('log_labels');
  }
  public set logLabels(value: { [key: string]: string }) {
    this._logLabels = value;
  }
  public resetLogLabels() {
    this._logLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLabelsInput() {
    return this._logLabels;
  }

  // name_space_regex - computed: false, optional: true, required: false
  private _nameSpaceRegex?: string; 
  public get nameSpaceRegex() {
    return this.getStringAttribute('name_space_regex');
  }
  public set nameSpaceRegex(value: string) {
    this._nameSpaceRegex = value;
  }
  public resetNameSpaceRegex() {
    this._nameSpaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceRegexInput() {
    return this._nameSpaceRegex;
  }

  // path_type - computed: false, optional: false, required: true
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // pod_name_regex - computed: false, optional: true, required: false
  private _podNameRegex?: string; 
  public get podNameRegex() {
    return this.getStringAttribute('pod_name_regex');
  }
  public set podNameRegex(value: string) {
    this._podNameRegex = value;
  }
  public resetPodNameRegex() {
    this._podNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNameRegexInput() {
    return this._podNameRegex;
  }

  // stderr - computed: true, optional: true, required: false
  private _stderr?: boolean | cdktf.IResolvable; 
  public get stderr() {
    return this.getBooleanAttribute('stderr');
  }
  public set stderr(value: boolean | cdktf.IResolvable) {
    this._stderr = value;
  }
  public resetStderr() {
    this._stderr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stderrInput() {
    return this._stderr;
  }

  // stdout - computed: true, optional: true, required: false
  private _stdout?: boolean | cdktf.IResolvable; 
  public get stdout() {
    return this.getBooleanAttribute('stdout');
  }
  public set stdout(value: boolean | cdktf.IResolvable) {
    this._stdout = value;
  }
  public resetStdout() {
    this._stdout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdoutInput() {
    return this._stdout;
  }

  // multi_log_format - computed: false, optional: true, required: false
  private _multiLogFormat = new LtsCceAccessV3AccessConfigMultiLogFormatOutputReference(this, "multi_log_format");
  public get multiLogFormat() {
    return this._multiLogFormat;
  }
  public putMultiLogFormat(value: LtsCceAccessV3AccessConfigMultiLogFormat) {
    this._multiLogFormat.internalValue = value;
  }
  public resetMultiLogFormat() {
    this._multiLogFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLogFormatInput() {
    return this._multiLogFormat.internalValue;
  }

  // single_log_format - computed: false, optional: true, required: false
  private _singleLogFormat = new LtsCceAccessV3AccessConfigSingleLogFormatOutputReference(this, "single_log_format");
  public get singleLogFormat() {
    return this._singleLogFormat;
  }
  public putSingleLogFormat(value: LtsCceAccessV3AccessConfigSingleLogFormat) {
    this._singleLogFormat.internalValue = value;
  }
  public resetSingleLogFormat() {
    this._singleLogFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogFormatInput() {
    return this._singleLogFormat.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3 opentelekomcloud_lts_cce_access_v3}
*/
export class LtsCceAccessV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lts_cce_access_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtsCceAccessV3 to import
  * @param importFromId The id of the existing LtsCceAccessV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtsCceAccessV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lts_cce_access_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cce_access_v3 opentelekomcloud_lts_cce_access_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtsCceAccessV3Config
  */
  public constructor(scope: Construct, id: string, config: LtsCceAccessV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lts_cce_access_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binaryCollect = config.binaryCollect;
    this._clusterId = config.clusterId;
    this._hostGroupIds = config.hostGroupIds;
    this._id = config.id;
    this._logGroupId = config.logGroupId;
    this._logSplit = config.logSplit;
    this._logStreamId = config.logStreamId;
    this._name = config.name;
    this._tags = config.tags;
    this._accessConfig.internalValue = config.accessConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // binary_collect - computed: true, optional: true, required: false
  private _binaryCollect?: boolean | cdktf.IResolvable; 
  public get binaryCollect() {
    return this.getBooleanAttribute('binary_collect');
  }
  public set binaryCollect(value: boolean | cdktf.IResolvable) {
    this._binaryCollect = value;
  }
  public resetBinaryCollect() {
    this._binaryCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryCollectInput() {
    return this._binaryCollect;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // host_group_ids - computed: true, optional: true, required: false
  private _hostGroupIds?: string[]; 
  public get hostGroupIds() {
    return this.getListAttribute('host_group_ids');
  }
  public set hostGroupIds(value: string[]) {
    this._hostGroupIds = value;
  }
  public resetHostGroupIds() {
    this._hostGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdsInput() {
    return this._hostGroupIds;
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

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_split - computed: true, optional: true, required: false
  private _logSplit?: boolean | cdktf.IResolvable; 
  public get logSplit() {
    return this.getBooleanAttribute('log_split');
  }
  public set logSplit(value: boolean | cdktf.IResolvable) {
    this._logSplit = value;
  }
  public resetLogSplit() {
    this._logSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSplitInput() {
    return this._logSplit;
  }

  // log_stream_id - computed: false, optional: false, required: true
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // access_config - computed: false, optional: false, required: true
  private _accessConfig = new LtsCceAccessV3AccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: LtsCceAccessV3AccessConfig) {
    this._accessConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_collect: cdktf.booleanToTerraform(this._binaryCollect),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      host_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroupIds),
      id: cdktf.stringToTerraform(this._id),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_split: cdktf.booleanToTerraform(this._logSplit),
      log_stream_id: cdktf.stringToTerraform(this._logStreamId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_config: ltsCceAccessV3AccessConfigToTerraform(this._accessConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary_collect: {
        value: cdktf.booleanToHclTerraform(this._binaryCollect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_split: {
        value: cdktf.booleanToHclTerraform(this._logSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_stream_id: {
        value: cdktf.stringToHclTerraform(this._logStreamId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_config: {
        value: ltsCceAccessV3AccessConfigToHclTerraform(this._accessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtsCceAccessV3AccessConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
