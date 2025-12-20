// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsConfigExtraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collection configuration flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#config_flag ClsConfigExtra#config_flag}
  */
  readonly configFlag: string;
  /**
  * Binding group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#group_id ClsConfigExtra#group_id}
  */
  readonly groupId?: string;
  /**
  * Binding group ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#group_ids ClsConfigExtra#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#id ClsConfigExtra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#log_format ClsConfigExtra#log_format}
  */
  readonly logFormat?: string;
  /**
  * Type of the log to be collected. Valid values: json_log: log in JSON format; delimiter_log: log in delimited format; minimalist_log: minimalist log; multiline_log: log in multi-line format; fullregex_log: log in full regex format. Default value: minimalist_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#log_type ClsConfigExtra#log_type}
  */
  readonly logType: string;
  /**
  * Logset Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#logset_id ClsConfigExtra#logset_id}
  */
  readonly logsetId: string;
  /**
  * Logset Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#logset_name ClsConfigExtra#logset_name}
  */
  readonly logsetName: string;
  /**
  * Collection configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#name ClsConfigExtra#name}
  */
  readonly name: string;
  /**
  * Log topic ID (TopicId) of collection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#topic_id ClsConfigExtra#topic_id}
  */
  readonly topicId: string;
  /**
  * Topic Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#topic_name ClsConfigExtra#topic_name}
  */
  readonly topicName: string;
  /**
  * Type. Valid values: container_stdout; container_file; host_file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#type ClsConfigExtra#type}
  */
  readonly type: string;
  /**
  * Custom collection rule, which is a serialized JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#user_define_rule ClsConfigExtra#user_define_rule}
  */
  readonly userDefineRule?: string;
  /**
  * container_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#container_file ClsConfigExtra#container_file}
  */
  readonly containerFile?: ClsConfigExtraContainerFile;
  /**
  * container_stdout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#container_stdout ClsConfigExtra#container_stdout}
  */
  readonly containerStdout?: ClsConfigExtraContainerStdout;
  /**
  * exclude_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#exclude_paths ClsConfigExtra#exclude_paths}
  */
  readonly excludePaths?: ClsConfigExtraExcludePaths[] | cdktf.IResolvable;
  /**
  * extract_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#extract_rule ClsConfigExtra#extract_rule}
  */
  readonly extractRule?: ClsConfigExtraExtractRule;
  /**
  * host_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#host_file ClsConfigExtra#host_file}
  */
  readonly hostFile?: ClsConfigExtraHostFile;
}
export interface ClsConfigExtraContainerFileWorkload {
  /**
  * container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#container ClsConfigExtra#container}
  */
  readonly container?: string;
  /**
  * workload type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#kind ClsConfigExtra#kind}
  */
  readonly kind: string;
  /**
  * workload name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#name ClsConfigExtra#name}
  */
  readonly name: string;
  /**
  * namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#namespace ClsConfigExtra#namespace}
  */
  readonly namespace?: string;
}

export function clsConfigExtraContainerFileWorkloadToTerraform(struct?: ClsConfigExtraContainerFileWorkloadOutputReference | ClsConfigExtraContainerFileWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function clsConfigExtraContainerFileWorkloadToHclTerraform(struct?: ClsConfigExtraContainerFileWorkloadOutputReference | ClsConfigExtraContainerFileWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraContainerFileWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtraContainerFileWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraContainerFileWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface ClsConfigExtraContainerFile {
  /**
  * Container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#container ClsConfigExtra#container}
  */
  readonly container: string;
  /**
  * Pod label to be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#exclude_labels ClsConfigExtra#exclude_labels}
  */
  readonly excludeLabels?: string[];
  /**
  * Namespaces to be excluded, separated by separators, such as A, B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#exclude_namespace ClsConfigExtra#exclude_namespace}
  */
  readonly excludeNamespace?: string;
  /**
  * log name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#file_pattern ClsConfigExtra#file_pattern}
  */
  readonly filePattern: string;
  /**
  * Pod label info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#include_labels ClsConfigExtra#include_labels}
  */
  readonly includeLabels?: string[];
  /**
  * Log Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#log_path ClsConfigExtra#log_path}
  */
  readonly logPath: string;
  /**
  * Namespace. There can be multiple namespaces, separated by separators, such as A, B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#namespace ClsConfigExtra#namespace}
  */
  readonly namespace: string;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#workload ClsConfigExtra#workload}
  */
  readonly workload?: ClsConfigExtraContainerFileWorkload;
}

export function clsConfigExtraContainerFileToTerraform(struct?: ClsConfigExtraContainerFileOutputReference | ClsConfigExtraContainerFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    exclude_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeLabels),
    exclude_namespace: cdktf.stringToTerraform(struct!.excludeNamespace),
    file_pattern: cdktf.stringToTerraform(struct!.filePattern),
    include_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeLabels),
    log_path: cdktf.stringToTerraform(struct!.logPath),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    workload: clsConfigExtraContainerFileWorkloadToTerraform(struct!.workload),
  }
}


export function clsConfigExtraContainerFileToHclTerraform(struct?: ClsConfigExtraContainerFileOutputReference | ClsConfigExtraContainerFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_namespace: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_pattern: {
      value: cdktf.stringToHclTerraform(struct!.filePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_path: {
      value: cdktf.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload: {
      value: clsConfigExtraContainerFileWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "list",
      storageClassType: "ClsConfigExtraContainerFileWorkloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraContainerFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtraContainerFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._excludeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeLabels = this._excludeLabels;
    }
    if (this._excludeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespace = this._excludeNamespace;
    }
    if (this._filePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePattern = this._filePattern;
    }
    if (this._includeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLabels = this._includeLabels;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraContainerFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._excludeLabels = undefined;
      this._excludeNamespace = undefined;
      this._filePattern = undefined;
      this._includeLabels = undefined;
      this._logPath = undefined;
      this._namespace = undefined;
      this._workload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._excludeLabels = value.excludeLabels;
      this._excludeNamespace = value.excludeNamespace;
      this._filePattern = value.filePattern;
      this._includeLabels = value.includeLabels;
      this._logPath = value.logPath;
      this._namespace = value.namespace;
      this._workload.internalValue = value.workload;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // exclude_labels - computed: false, optional: true, required: false
  private _excludeLabels?: string[]; 
  public get excludeLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_labels'));
  }
  public set excludeLabels(value: string[]) {
    this._excludeLabels = value;
  }
  public resetExcludeLabels() {
    this._excludeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLabelsInput() {
    return this._excludeLabels;
  }

  // exclude_namespace - computed: false, optional: true, required: false
  private _excludeNamespace?: string; 
  public get excludeNamespace() {
    return this.getStringAttribute('exclude_namespace');
  }
  public set excludeNamespace(value: string) {
    this._excludeNamespace = value;
  }
  public resetExcludeNamespace() {
    this._excludeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespaceInput() {
    return this._excludeNamespace;
  }

  // file_pattern - computed: false, optional: false, required: true
  private _filePattern?: string; 
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }
  public set filePattern(value: string) {
    this._filePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternInput() {
    return this._filePattern;
  }

  // include_labels - computed: false, optional: true, required: false
  private _includeLabels?: string[]; 
  public get includeLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('include_labels'));
  }
  public set includeLabels(value: string[]) {
    this._includeLabels = value;
  }
  public resetIncludeLabels() {
    this._includeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLabelsInput() {
    return this._includeLabels;
  }

  // log_path - computed: false, optional: false, required: true
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new ClsConfigExtraContainerFileWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: ClsConfigExtraContainerFileWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}
export interface ClsConfigExtraContainerStdoutWorkloads {
  /**
  * container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#container ClsConfigExtra#container}
  */
  readonly container?: string;
  /**
  * workload type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#kind ClsConfigExtra#kind}
  */
  readonly kind: string;
  /**
  * workload name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#name ClsConfigExtra#name}
  */
  readonly name: string;
  /**
  * namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#namespace ClsConfigExtra#namespace}
  */
  readonly namespace?: string;
}

export function clsConfigExtraContainerStdoutWorkloadsToTerraform(struct?: ClsConfigExtraContainerStdoutWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function clsConfigExtraContainerStdoutWorkloadsToHclTerraform(struct?: ClsConfigExtraContainerStdoutWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraContainerStdoutWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExtraContainerStdoutWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraContainerStdoutWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}

export class ClsConfigExtraContainerStdoutWorkloadsList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExtraContainerStdoutWorkloads[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExtraContainerStdoutWorkloadsOutputReference {
    return new ClsConfigExtraContainerStdoutWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtraContainerStdout {
  /**
  * Is all containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#all_containers ClsConfigExtra#all_containers}
  */
  readonly allContainers: boolean | cdktf.IResolvable;
  /**
  * Pod label to be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#exclude_labels ClsConfigExtra#exclude_labels}
  */
  readonly excludeLabels?: string[];
  /**
  * Namespaces to be excluded, separated by separators, such as A, B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#exclude_namespace ClsConfigExtra#exclude_namespace}
  */
  readonly excludeNamespace?: string;
  /**
  * Pod label info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#include_labels ClsConfigExtra#include_labels}
  */
  readonly includeLabels?: string[];
  /**
  * Namespace. There can be multiple namespaces, separated by separators, such as A, B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#namespace ClsConfigExtra#namespace}
  */
  readonly namespace?: string;
  /**
  * workloads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#workloads ClsConfigExtra#workloads}
  */
  readonly workloads?: ClsConfigExtraContainerStdoutWorkloads[] | cdktf.IResolvable;
}

export function clsConfigExtraContainerStdoutToTerraform(struct?: ClsConfigExtraContainerStdoutOutputReference | ClsConfigExtraContainerStdout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_containers: cdktf.booleanToTerraform(struct!.allContainers),
    exclude_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeLabels),
    exclude_namespace: cdktf.stringToTerraform(struct!.excludeNamespace),
    include_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeLabels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    workloads: cdktf.listMapper(clsConfigExtraContainerStdoutWorkloadsToTerraform, true)(struct!.workloads),
  }
}


export function clsConfigExtraContainerStdoutToHclTerraform(struct?: ClsConfigExtraContainerStdoutOutputReference | ClsConfigExtraContainerStdout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_containers: {
      value: cdktf.booleanToHclTerraform(struct!.allContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_namespace: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workloads: {
      value: cdktf.listMapperHcl(clsConfigExtraContainerStdoutWorkloadsToHclTerraform, true)(struct!.workloads),
      isBlock: true,
      type: "list",
      storageClassType: "ClsConfigExtraContainerStdoutWorkloadsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraContainerStdoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtraContainerStdout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allContainers = this._allContainers;
    }
    if (this._excludeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeLabels = this._excludeLabels;
    }
    if (this._excludeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespace = this._excludeNamespace;
    }
    if (this._includeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLabels = this._includeLabels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._workloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloads = this._workloads?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraContainerStdout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allContainers = undefined;
      this._excludeLabels = undefined;
      this._excludeNamespace = undefined;
      this._includeLabels = undefined;
      this._namespace = undefined;
      this._workloads.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allContainers = value.allContainers;
      this._excludeLabels = value.excludeLabels;
      this._excludeNamespace = value.excludeNamespace;
      this._includeLabels = value.includeLabels;
      this._namespace = value.namespace;
      this._workloads.internalValue = value.workloads;
    }
  }

  // all_containers - computed: false, optional: false, required: true
  private _allContainers?: boolean | cdktf.IResolvable; 
  public get allContainers() {
    return this.getBooleanAttribute('all_containers');
  }
  public set allContainers(value: boolean | cdktf.IResolvable) {
    this._allContainers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allContainersInput() {
    return this._allContainers;
  }

  // exclude_labels - computed: false, optional: true, required: false
  private _excludeLabels?: string[]; 
  public get excludeLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_labels'));
  }
  public set excludeLabels(value: string[]) {
    this._excludeLabels = value;
  }
  public resetExcludeLabels() {
    this._excludeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLabelsInput() {
    return this._excludeLabels;
  }

  // exclude_namespace - computed: false, optional: true, required: false
  private _excludeNamespace?: string; 
  public get excludeNamespace() {
    return this.getStringAttribute('exclude_namespace');
  }
  public set excludeNamespace(value: string) {
    this._excludeNamespace = value;
  }
  public resetExcludeNamespace() {
    this._excludeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespaceInput() {
    return this._excludeNamespace;
  }

  // include_labels - computed: false, optional: true, required: false
  private _includeLabels?: string[]; 
  public get includeLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('include_labels'));
  }
  public set includeLabels(value: string[]) {
    this._includeLabels = value;
  }
  public resetIncludeLabels() {
    this._includeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLabelsInput() {
    return this._includeLabels;
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

  // workloads - computed: false, optional: true, required: false
  private _workloads = new ClsConfigExtraContainerStdoutWorkloadsList(this, "workloads", false);
  public get workloads() {
    return this._workloads;
  }
  public putWorkloads(value: ClsConfigExtraContainerStdoutWorkloads[] | cdktf.IResolvable) {
    this._workloads.internalValue = value;
  }
  public resetWorkloads() {
    this._workloads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsInput() {
    return this._workloads.internalValue;
  }
}
export interface ClsConfigExtraExcludePaths {
  /**
  * Type. Valid values: File, Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#type ClsConfigExtra#type}
  */
  readonly type?: string;
  /**
  * Specific content corresponding to Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#value ClsConfigExtra#value}
  */
  readonly value?: string;
}

export function clsConfigExtraExcludePathsToTerraform(struct?: ClsConfigExtraExcludePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsConfigExtraExcludePathsToHclTerraform(struct?: ClsConfigExtraExcludePaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class ClsConfigExtraExcludePathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExtraExcludePaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraExcludePaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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

export class ClsConfigExtraExcludePathsList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExtraExcludePaths[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExtraExcludePathsOutputReference {
    return new ClsConfigExtraExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtraExtractRuleFilterKeyRegex {
  /**
  * Log key to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#key ClsConfigExtra#key}
  */
  readonly key?: string;
  /**
  * Filter rule regex corresponding to key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#regex ClsConfigExtra#regex}
  */
  readonly regex?: string;
}

export function clsConfigExtraExtractRuleFilterKeyRegexToTerraform(struct?: ClsConfigExtraExtractRuleFilterKeyRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function clsConfigExtraExtractRuleFilterKeyRegexToHclTerraform(struct?: ClsConfigExtraExtractRuleFilterKeyRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraExtractRuleFilterKeyRegexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsConfigExtraExtractRuleFilterKeyRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraExtractRuleFilterKeyRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._regex = value.regex;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ClsConfigExtraExtractRuleFilterKeyRegexList extends cdktf.ComplexList {
  public internalValue? : ClsConfigExtraExtractRuleFilterKeyRegex[] | cdktf.IResolvable

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
  public get(index: number): ClsConfigExtraExtractRuleFilterKeyRegexOutputReference {
    return new ClsConfigExtraExtractRuleFilterKeyRegexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClsConfigExtraExtractRule {
  /**
  * Size of the data to be rewound in incremental collection mode. Default value: -1 (full collection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#backtracking ClsConfigExtra#backtracking}
  */
  readonly backtracking?: number;
  /**
  * First-Line matching rule, which is valid only if log_type is multiline_log or fullregex_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#begin_regex ClsConfigExtra#begin_regex}
  */
  readonly beginRegex?: string;
  /**
  * Delimiter for delimited log, which is valid only if log_type is delimiter_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#delimiter ClsConfigExtra#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Key name of each extracted field. An empty key indicates to discard the field. This parameter is valid only if log_type is delimiter_log. json_log logs use the key of JSON itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#keys ClsConfigExtra#keys}
  */
  readonly keys?: string[];
  /**
  * Full log matching rule, which is valid only if log_type is fullregex_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#log_regex ClsConfigExtra#log_regex}
  */
  readonly logRegex?: string;
  /**
  * Time field format. For more information, please see the output parameters of the time format description of the strftime function in C language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#time_format ClsConfigExtra#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Time field key name. time_key and time_format must appear in pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#time_key ClsConfigExtra#time_key}
  */
  readonly timeKey?: string;
  /**
  * Unmatched log key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#un_match_log_key ClsConfigExtra#un_match_log_key}
  */
  readonly unMatchLogKey?: string;
  /**
  * Whether to upload the logs that failed to be parsed. Valid values: true: yes; false: no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#un_match_up_load_switch ClsConfigExtra#un_match_up_load_switch}
  */
  readonly unMatchUpLoadSwitch?: boolean | cdktf.IResolvable;
  /**
  * filter_key_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#filter_key_regex ClsConfigExtra#filter_key_regex}
  */
  readonly filterKeyRegex?: ClsConfigExtraExtractRuleFilterKeyRegex[] | cdktf.IResolvable;
}

export function clsConfigExtraExtractRuleToTerraform(struct?: ClsConfigExtraExtractRuleOutputReference | ClsConfigExtraExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backtracking: cdktf.numberToTerraform(struct!.backtracking),
    begin_regex: cdktf.stringToTerraform(struct!.beginRegex),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    log_regex: cdktf.stringToTerraform(struct!.logRegex),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    un_match_log_key: cdktf.stringToTerraform(struct!.unMatchLogKey),
    un_match_up_load_switch: cdktf.booleanToTerraform(struct!.unMatchUpLoadSwitch),
    filter_key_regex: cdktf.listMapper(clsConfigExtraExtractRuleFilterKeyRegexToTerraform, true)(struct!.filterKeyRegex),
  }
}


export function clsConfigExtraExtractRuleToHclTerraform(struct?: ClsConfigExtraExtractRuleOutputReference | ClsConfigExtraExtractRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backtracking: {
      value: cdktf.numberToHclTerraform(struct!.backtracking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    begin_regex: {
      value: cdktf.stringToHclTerraform(struct!.beginRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_regex: {
      value: cdktf.stringToHclTerraform(struct!.logRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    un_match_log_key: {
      value: cdktf.stringToHclTerraform(struct!.unMatchLogKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    un_match_up_load_switch: {
      value: cdktf.booleanToHclTerraform(struct!.unMatchUpLoadSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_key_regex: {
      value: cdktf.listMapperHcl(clsConfigExtraExtractRuleFilterKeyRegexToHclTerraform, true)(struct!.filterKeyRegex),
      isBlock: true,
      type: "list",
      storageClassType: "ClsConfigExtraExtractRuleFilterKeyRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraExtractRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtraExtractRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backtracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.backtracking = this._backtracking;
    }
    if (this._beginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginRegex = this._beginRegex;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._logRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRegex = this._logRegex;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._unMatchLogKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchLogKey = this._unMatchLogKey;
    }
    if (this._unMatchUpLoadSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.unMatchUpLoadSwitch = this._unMatchUpLoadSwitch;
    }
    if (this._filterKeyRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKeyRegex = this._filterKeyRegex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraExtractRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backtracking = undefined;
      this._beginRegex = undefined;
      this._delimiter = undefined;
      this._keys = undefined;
      this._logRegex = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._unMatchLogKey = undefined;
      this._unMatchUpLoadSwitch = undefined;
      this._filterKeyRegex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backtracking = value.backtracking;
      this._beginRegex = value.beginRegex;
      this._delimiter = value.delimiter;
      this._keys = value.keys;
      this._logRegex = value.logRegex;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._unMatchLogKey = value.unMatchLogKey;
      this._unMatchUpLoadSwitch = value.unMatchUpLoadSwitch;
      this._filterKeyRegex.internalValue = value.filterKeyRegex;
    }
  }

  // backtracking - computed: true, optional: true, required: false
  private _backtracking?: number; 
  public get backtracking() {
    return this.getNumberAttribute('backtracking');
  }
  public set backtracking(value: number) {
    this._backtracking = value;
  }
  public resetBacktracking() {
    this._backtracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackingInput() {
    return this._backtracking;
  }

  // begin_regex - computed: false, optional: true, required: false
  private _beginRegex?: string; 
  public get beginRegex() {
    return this.getStringAttribute('begin_regex');
  }
  public set beginRegex(value: string) {
    this._beginRegex = value;
  }
  public resetBeginRegex() {
    this._beginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginRegexInput() {
    return this._beginRegex;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // log_regex - computed: false, optional: true, required: false
  private _logRegex?: string; 
  public get logRegex() {
    return this.getStringAttribute('log_regex');
  }
  public set logRegex(value: string) {
    this._logRegex = value;
  }
  public resetLogRegex() {
    this._logRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRegexInput() {
    return this._logRegex;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // un_match_log_key - computed: false, optional: true, required: false
  private _unMatchLogKey?: string; 
  public get unMatchLogKey() {
    return this.getStringAttribute('un_match_log_key');
  }
  public set unMatchLogKey(value: string) {
    this._unMatchLogKey = value;
  }
  public resetUnMatchLogKey() {
    this._unMatchLogKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchLogKeyInput() {
    return this._unMatchLogKey;
  }

  // un_match_up_load_switch - computed: true, optional: true, required: false
  private _unMatchUpLoadSwitch?: boolean | cdktf.IResolvable; 
  public get unMatchUpLoadSwitch() {
    return this.getBooleanAttribute('un_match_up_load_switch');
  }
  public set unMatchUpLoadSwitch(value: boolean | cdktf.IResolvable) {
    this._unMatchUpLoadSwitch = value;
  }
  public resetUnMatchUpLoadSwitch() {
    this._unMatchUpLoadSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unMatchUpLoadSwitchInput() {
    return this._unMatchUpLoadSwitch;
  }

  // filter_key_regex - computed: false, optional: true, required: false
  private _filterKeyRegex = new ClsConfigExtraExtractRuleFilterKeyRegexList(this, "filter_key_regex", false);
  public get filterKeyRegex() {
    return this._filterKeyRegex;
  }
  public putFilterKeyRegex(value: ClsConfigExtraExtractRuleFilterKeyRegex[] | cdktf.IResolvable) {
    this._filterKeyRegex.internalValue = value;
  }
  public resetFilterKeyRegex() {
    this._filterKeyRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeyRegexInput() {
    return this._filterKeyRegex.internalValue;
  }
}
export interface ClsConfigExtraHostFile {
  /**
  * Metadata info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#custom_labels ClsConfigExtra#custom_labels}
  */
  readonly customLabels?: string[];
  /**
  * Log file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#file_pattern ClsConfigExtra#file_pattern}
  */
  readonly filePattern: string;
  /**
  * Log file dir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#log_path ClsConfigExtra#log_path}
  */
  readonly logPath: string;
}

export function clsConfigExtraHostFileToTerraform(struct?: ClsConfigExtraHostFileOutputReference | ClsConfigExtraHostFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customLabels),
    file_pattern: cdktf.stringToTerraform(struct!.filePattern),
    log_path: cdktf.stringToTerraform(struct!.logPath),
  }
}


export function clsConfigExtraHostFileToHclTerraform(struct?: ClsConfigExtraHostFileOutputReference | ClsConfigExtraHostFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    file_pattern: {
      value: cdktf.stringToHclTerraform(struct!.filePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_path: {
      value: cdktf.stringToHclTerraform(struct!.logPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsConfigExtraHostFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsConfigExtraHostFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabels = this._customLabels;
    }
    if (this._filePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePattern = this._filePattern;
    }
    if (this._logPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPath = this._logPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsConfigExtraHostFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabels = undefined;
      this._filePattern = undefined;
      this._logPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabels = value.customLabels;
      this._filePattern = value.filePattern;
      this._logPath = value.logPath;
    }
  }

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels?: string[]; 
  public get customLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_labels'));
  }
  public set customLabels(value: string[]) {
    this._customLabels = value;
  }
  public resetCustomLabels() {
    this._customLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels;
  }

  // file_pattern - computed: false, optional: false, required: true
  private _filePattern?: string; 
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }
  public set filePattern(value: string) {
    this._filePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternInput() {
    return this._filePattern;
  }

  // log_path - computed: false, optional: false, required: true
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra tencentcloud_cls_config_extra}
*/
export class ClsConfigExtra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_config_extra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsConfigExtra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsConfigExtra to import
  * @param importFromId The id of the existing ClsConfigExtra that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsConfigExtra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_config_extra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/cls_config_extra tencentcloud_cls_config_extra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsConfigExtraConfig
  */
  public constructor(scope: Construct, id: string, config: ClsConfigExtraConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_config_extra',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configFlag = config.configFlag;
    this._groupId = config.groupId;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._logFormat = config.logFormat;
    this._logType = config.logType;
    this._logsetId = config.logsetId;
    this._logsetName = config.logsetName;
    this._name = config.name;
    this._topicId = config.topicId;
    this._topicName = config.topicName;
    this._type = config.type;
    this._userDefineRule = config.userDefineRule;
    this._containerFile.internalValue = config.containerFile;
    this._containerStdout.internalValue = config.containerStdout;
    this._excludePaths.internalValue = config.excludePaths;
    this._extractRule.internalValue = config.extractRule;
    this._hostFile.internalValue = config.hostFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_flag - computed: false, optional: false, required: true
  private _configFlag?: string; 
  public get configFlag() {
    return this.getStringAttribute('config_flag');
  }
  public set configFlag(value: string) {
    this._configFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFlagInput() {
    return this._configFlag;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logset_id - computed: false, optional: false, required: true
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
  }

  // logset_name - computed: false, optional: false, required: true
  private _logsetName?: string; 
  public get logsetName() {
    return this.getStringAttribute('logset_name');
  }
  public set logsetName(value: string) {
    this._logsetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetNameInput() {
    return this._logsetName;
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

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
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

  // user_define_rule - computed: false, optional: true, required: false
  private _userDefineRule?: string; 
  public get userDefineRule() {
    return this.getStringAttribute('user_define_rule');
  }
  public set userDefineRule(value: string) {
    this._userDefineRule = value;
  }
  public resetUserDefineRule() {
    this._userDefineRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefineRuleInput() {
    return this._userDefineRule;
  }

  // container_file - computed: false, optional: true, required: false
  private _containerFile = new ClsConfigExtraContainerFileOutputReference(this, "container_file");
  public get containerFile() {
    return this._containerFile;
  }
  public putContainerFile(value: ClsConfigExtraContainerFile) {
    this._containerFile.internalValue = value;
  }
  public resetContainerFile() {
    this._containerFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerFileInput() {
    return this._containerFile.internalValue;
  }

  // container_stdout - computed: false, optional: true, required: false
  private _containerStdout = new ClsConfigExtraContainerStdoutOutputReference(this, "container_stdout");
  public get containerStdout() {
    return this._containerStdout;
  }
  public putContainerStdout(value: ClsConfigExtraContainerStdout) {
    this._containerStdout.internalValue = value;
  }
  public resetContainerStdout() {
    this._containerStdout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStdoutInput() {
    return this._containerStdout.internalValue;
  }

  // exclude_paths - computed: false, optional: true, required: false
  private _excludePaths = new ClsConfigExtraExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }
  public putExcludePaths(value: ClsConfigExtraExcludePaths[] | cdktf.IResolvable) {
    this._excludePaths.internalValue = value;
  }
  public resetExcludePaths() {
    this._excludePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths.internalValue;
  }

  // extract_rule - computed: false, optional: true, required: false
  private _extractRule = new ClsConfigExtraExtractRuleOutputReference(this, "extract_rule");
  public get extractRule() {
    return this._extractRule;
  }
  public putExtractRule(value: ClsConfigExtraExtractRule) {
    this._extractRule.internalValue = value;
  }
  public resetExtractRule() {
    this._extractRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractRuleInput() {
    return this._extractRule.internalValue;
  }

  // host_file - computed: false, optional: true, required: false
  private _hostFile = new ClsConfigExtraHostFileOutputReference(this, "host_file");
  public get hostFile() {
    return this._hostFile;
  }
  public putHostFile(value: ClsConfigExtraHostFile) {
    this._hostFile.internalValue = value;
  }
  public resetHostFile() {
    this._hostFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFileInput() {
    return this._hostFile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_flag: cdktf.stringToTerraform(this._configFlag),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      log_format: cdktf.stringToTerraform(this._logFormat),
      log_type: cdktf.stringToTerraform(this._logType),
      logset_id: cdktf.stringToTerraform(this._logsetId),
      logset_name: cdktf.stringToTerraform(this._logsetName),
      name: cdktf.stringToTerraform(this._name),
      topic_id: cdktf.stringToTerraform(this._topicId),
      topic_name: cdktf.stringToTerraform(this._topicName),
      type: cdktf.stringToTerraform(this._type),
      user_define_rule: cdktf.stringToTerraform(this._userDefineRule),
      container_file: clsConfigExtraContainerFileToTerraform(this._containerFile.internalValue),
      container_stdout: clsConfigExtraContainerStdoutToTerraform(this._containerStdout.internalValue),
      exclude_paths: cdktf.listMapper(clsConfigExtraExcludePathsToTerraform, true)(this._excludePaths.internalValue),
      extract_rule: clsConfigExtraExtractRuleToTerraform(this._extractRule.internalValue),
      host_file: clsConfigExtraHostFileToTerraform(this._hostFile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_flag: {
        value: cdktf.stringToHclTerraform(this._configFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_format: {
        value: cdktf.stringToHclTerraform(this._logFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_name: {
        value: cdktf.stringToHclTerraform(this._logsetName),
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
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_define_rule: {
        value: cdktf.stringToHclTerraform(this._userDefineRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_file: {
        value: clsConfigExtraContainerFileToHclTerraform(this._containerFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtraContainerFileList",
      },
      container_stdout: {
        value: clsConfigExtraContainerStdoutToHclTerraform(this._containerStdout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtraContainerStdoutList",
      },
      exclude_paths: {
        value: cdktf.listMapperHcl(clsConfigExtraExcludePathsToHclTerraform, true)(this._excludePaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtraExcludePathsList",
      },
      extract_rule: {
        value: clsConfigExtraExtractRuleToHclTerraform(this._extractRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtraExtractRuleList",
      },
      host_file: {
        value: clsConfigExtraHostFileToHclTerraform(this._hostFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsConfigExtraHostFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
