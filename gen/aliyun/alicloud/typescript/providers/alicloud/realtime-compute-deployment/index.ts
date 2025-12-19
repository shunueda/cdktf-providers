// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealtimeComputeDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#deployment_name RealtimeComputeDeployment#deployment_name}
  */
  readonly deploymentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#description RealtimeComputeDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#engine_version RealtimeComputeDeployment#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#execution_mode RealtimeComputeDeployment#execution_mode}
  */
  readonly executionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#flink_conf RealtimeComputeDeployment#flink_conf}
  */
  readonly flinkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#id RealtimeComputeDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#labels RealtimeComputeDeployment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#namespace RealtimeComputeDeployment#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#resource_id RealtimeComputeDeployment#resource_id}
  */
  readonly resourceId?: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#artifact RealtimeComputeDeployment#artifact}
  */
  readonly artifact: RealtimeComputeDeploymentArtifact;
  /**
  * batch_resource_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#batch_resource_setting RealtimeComputeDeployment#batch_resource_setting}
  */
  readonly batchResourceSetting?: RealtimeComputeDeploymentBatchResourceSetting;
  /**
  * deployment_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#deployment_target RealtimeComputeDeployment#deployment_target}
  */
  readonly deploymentTarget: RealtimeComputeDeploymentDeploymentTarget;
  /**
  * local_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#local_variables RealtimeComputeDeployment#local_variables}
  */
  readonly localVariables?: RealtimeComputeDeploymentLocalVariables[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#logging RealtimeComputeDeployment#logging}
  */
  readonly logging?: RealtimeComputeDeploymentLogging;
  /**
  * streaming_resource_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#streaming_resource_setting RealtimeComputeDeployment#streaming_resource_setting}
  */
  readonly streamingResourceSetting?: RealtimeComputeDeploymentStreamingResourceSetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#timeouts RealtimeComputeDeployment#timeouts}
  */
  readonly timeouts?: RealtimeComputeDeploymentTimeouts;
}
export interface RealtimeComputeDeploymentArtifactJarArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#additional_dependencies RealtimeComputeDeployment#additional_dependencies}
  */
  readonly additionalDependencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#entry_class RealtimeComputeDeployment#entry_class}
  */
  readonly entryClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#jar_uri RealtimeComputeDeployment#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#main_args RealtimeComputeDeployment#main_args}
  */
  readonly mainArgs?: string;
}

export function realtimeComputeDeploymentArtifactJarArtifactToTerraform(struct?: RealtimeComputeDeploymentArtifactJarArtifactOutputReference | RealtimeComputeDeploymentArtifactJarArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalDependencies),
    entry_class: cdktf.stringToTerraform(struct!.entryClass),
    jar_uri: cdktf.stringToTerraform(struct!.jarUri),
    main_args: cdktf.stringToTerraform(struct!.mainArgs),
  }
}


export function realtimeComputeDeploymentArtifactJarArtifactToHclTerraform(struct?: RealtimeComputeDeploymentArtifactJarArtifactOutputReference | RealtimeComputeDeploymentArtifactJarArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_class: {
      value: cdktf.stringToHclTerraform(struct!.entryClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar_uri: {
      value: cdktf.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_args: {
      value: cdktf.stringToHclTerraform(struct!.mainArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentArtifactJarArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentArtifactJarArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDependencies = this._additionalDependencies;
    }
    if (this._entryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryClass = this._entryClass;
    }
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._mainArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainArgs = this._mainArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentArtifactJarArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalDependencies = undefined;
      this._entryClass = undefined;
      this._jarUri = undefined;
      this._mainArgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalDependencies = value.additionalDependencies;
      this._entryClass = value.entryClass;
      this._jarUri = value.jarUri;
      this._mainArgs = value.mainArgs;
    }
  }

  // additional_dependencies - computed: false, optional: true, required: false
  private _additionalDependencies?: string[]; 
  public get additionalDependencies() {
    return this.getListAttribute('additional_dependencies');
  }
  public set additionalDependencies(value: string[]) {
    this._additionalDependencies = value;
  }
  public resetAdditionalDependencies() {
    this._additionalDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDependenciesInput() {
    return this._additionalDependencies;
  }

  // entry_class - computed: false, optional: true, required: false
  private _entryClass?: string; 
  public get entryClass() {
    return this.getStringAttribute('entry_class');
  }
  public set entryClass(value: string) {
    this._entryClass = value;
  }
  public resetEntryClass() {
    this._entryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryClassInput() {
    return this._entryClass;
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // main_args - computed: false, optional: true, required: false
  private _mainArgs?: string; 
  public get mainArgs() {
    return this.getStringAttribute('main_args');
  }
  public set mainArgs(value: string) {
    this._mainArgs = value;
  }
  public resetMainArgs() {
    this._mainArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainArgsInput() {
    return this._mainArgs;
  }
}
export interface RealtimeComputeDeploymentArtifactPythonArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#additional_dependencies RealtimeComputeDeployment#additional_dependencies}
  */
  readonly additionalDependencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#additional_python_archives RealtimeComputeDeployment#additional_python_archives}
  */
  readonly additionalPythonArchives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#additional_python_libraries RealtimeComputeDeployment#additional_python_libraries}
  */
  readonly additionalPythonLibraries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#entry_module RealtimeComputeDeployment#entry_module}
  */
  readonly entryModule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#main_args RealtimeComputeDeployment#main_args}
  */
  readonly mainArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#python_artifact_uri RealtimeComputeDeployment#python_artifact_uri}
  */
  readonly pythonArtifactUri?: string;
}

export function realtimeComputeDeploymentArtifactPythonArtifactToTerraform(struct?: RealtimeComputeDeploymentArtifactPythonArtifactOutputReference | RealtimeComputeDeploymentArtifactPythonArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalDependencies),
    additional_python_archives: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalPythonArchives),
    additional_python_libraries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalPythonLibraries),
    entry_module: cdktf.stringToTerraform(struct!.entryModule),
    main_args: cdktf.stringToTerraform(struct!.mainArgs),
    python_artifact_uri: cdktf.stringToTerraform(struct!.pythonArtifactUri),
  }
}


export function realtimeComputeDeploymentArtifactPythonArtifactToHclTerraform(struct?: RealtimeComputeDeploymentArtifactPythonArtifactOutputReference | RealtimeComputeDeploymentArtifactPythonArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_python_archives: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalPythonArchives),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_python_libraries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalPythonLibraries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_module: {
      value: cdktf.stringToHclTerraform(struct!.entryModule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_args: {
      value: cdktf.stringToHclTerraform(struct!.mainArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_artifact_uri: {
      value: cdktf.stringToHclTerraform(struct!.pythonArtifactUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentArtifactPythonArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentArtifactPythonArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDependencies = this._additionalDependencies;
    }
    if (this._additionalPythonArchives !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPythonArchives = this._additionalPythonArchives;
    }
    if (this._additionalPythonLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPythonLibraries = this._additionalPythonLibraries;
    }
    if (this._entryModule !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryModule = this._entryModule;
    }
    if (this._mainArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainArgs = this._mainArgs;
    }
    if (this._pythonArtifactUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonArtifactUri = this._pythonArtifactUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentArtifactPythonArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalDependencies = undefined;
      this._additionalPythonArchives = undefined;
      this._additionalPythonLibraries = undefined;
      this._entryModule = undefined;
      this._mainArgs = undefined;
      this._pythonArtifactUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalDependencies = value.additionalDependencies;
      this._additionalPythonArchives = value.additionalPythonArchives;
      this._additionalPythonLibraries = value.additionalPythonLibraries;
      this._entryModule = value.entryModule;
      this._mainArgs = value.mainArgs;
      this._pythonArtifactUri = value.pythonArtifactUri;
    }
  }

  // additional_dependencies - computed: false, optional: true, required: false
  private _additionalDependencies?: string[]; 
  public get additionalDependencies() {
    return this.getListAttribute('additional_dependencies');
  }
  public set additionalDependencies(value: string[]) {
    this._additionalDependencies = value;
  }
  public resetAdditionalDependencies() {
    this._additionalDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDependenciesInput() {
    return this._additionalDependencies;
  }

  // additional_python_archives - computed: false, optional: true, required: false
  private _additionalPythonArchives?: string[]; 
  public get additionalPythonArchives() {
    return this.getListAttribute('additional_python_archives');
  }
  public set additionalPythonArchives(value: string[]) {
    this._additionalPythonArchives = value;
  }
  public resetAdditionalPythonArchives() {
    this._additionalPythonArchives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPythonArchivesInput() {
    return this._additionalPythonArchives;
  }

  // additional_python_libraries - computed: false, optional: true, required: false
  private _additionalPythonLibraries?: string[]; 
  public get additionalPythonLibraries() {
    return this.getListAttribute('additional_python_libraries');
  }
  public set additionalPythonLibraries(value: string[]) {
    this._additionalPythonLibraries = value;
  }
  public resetAdditionalPythonLibraries() {
    this._additionalPythonLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPythonLibrariesInput() {
    return this._additionalPythonLibraries;
  }

  // entry_module - computed: false, optional: true, required: false
  private _entryModule?: string; 
  public get entryModule() {
    return this.getStringAttribute('entry_module');
  }
  public set entryModule(value: string) {
    this._entryModule = value;
  }
  public resetEntryModule() {
    this._entryModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryModuleInput() {
    return this._entryModule;
  }

  // main_args - computed: false, optional: true, required: false
  private _mainArgs?: string; 
  public get mainArgs() {
    return this.getStringAttribute('main_args');
  }
  public set mainArgs(value: string) {
    this._mainArgs = value;
  }
  public resetMainArgs() {
    this._mainArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainArgsInput() {
    return this._mainArgs;
  }

  // python_artifact_uri - computed: false, optional: true, required: false
  private _pythonArtifactUri?: string; 
  public get pythonArtifactUri() {
    return this.getStringAttribute('python_artifact_uri');
  }
  public set pythonArtifactUri(value: string) {
    this._pythonArtifactUri = value;
  }
  public resetPythonArtifactUri() {
    this._pythonArtifactUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonArtifactUriInput() {
    return this._pythonArtifactUri;
  }
}
export interface RealtimeComputeDeploymentArtifactSqlArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#additional_dependencies RealtimeComputeDeployment#additional_dependencies}
  */
  readonly additionalDependencies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#sql_script RealtimeComputeDeployment#sql_script}
  */
  readonly sqlScript?: string;
}

export function realtimeComputeDeploymentArtifactSqlArtifactToTerraform(struct?: RealtimeComputeDeploymentArtifactSqlArtifactOutputReference | RealtimeComputeDeploymentArtifactSqlArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalDependencies),
    sql_script: cdktf.stringToTerraform(struct!.sqlScript),
  }
}


export function realtimeComputeDeploymentArtifactSqlArtifactToHclTerraform(struct?: RealtimeComputeDeploymentArtifactSqlArtifactOutputReference | RealtimeComputeDeploymentArtifactSqlArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_script: {
      value: cdktf.stringToHclTerraform(struct!.sqlScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentArtifactSqlArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentArtifactSqlArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDependencies = this._additionalDependencies;
    }
    if (this._sqlScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlScript = this._sqlScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentArtifactSqlArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalDependencies = undefined;
      this._sqlScript = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalDependencies = value.additionalDependencies;
      this._sqlScript = value.sqlScript;
    }
  }

  // additional_dependencies - computed: false, optional: true, required: false
  private _additionalDependencies?: string[]; 
  public get additionalDependencies() {
    return this.getListAttribute('additional_dependencies');
  }
  public set additionalDependencies(value: string[]) {
    this._additionalDependencies = value;
  }
  public resetAdditionalDependencies() {
    this._additionalDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDependenciesInput() {
    return this._additionalDependencies;
  }

  // sql_script - computed: false, optional: true, required: false
  private _sqlScript?: string; 
  public get sqlScript() {
    return this.getStringAttribute('sql_script');
  }
  public set sqlScript(value: string) {
    this._sqlScript = value;
  }
  public resetSqlScript() {
    this._sqlScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlScriptInput() {
    return this._sqlScript;
  }
}
export interface RealtimeComputeDeploymentArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#kind RealtimeComputeDeployment#kind}
  */
  readonly kind: string;
  /**
  * jar_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#jar_artifact RealtimeComputeDeployment#jar_artifact}
  */
  readonly jarArtifact?: RealtimeComputeDeploymentArtifactJarArtifact;
  /**
  * python_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#python_artifact RealtimeComputeDeployment#python_artifact}
  */
  readonly pythonArtifact?: RealtimeComputeDeploymentArtifactPythonArtifact;
  /**
  * sql_artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#sql_artifact RealtimeComputeDeployment#sql_artifact}
  */
  readonly sqlArtifact?: RealtimeComputeDeploymentArtifactSqlArtifact;
}

export function realtimeComputeDeploymentArtifactToTerraform(struct?: RealtimeComputeDeploymentArtifactOutputReference | RealtimeComputeDeploymentArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    jar_artifact: realtimeComputeDeploymentArtifactJarArtifactToTerraform(struct!.jarArtifact),
    python_artifact: realtimeComputeDeploymentArtifactPythonArtifactToTerraform(struct!.pythonArtifact),
    sql_artifact: realtimeComputeDeploymentArtifactSqlArtifactToTerraform(struct!.sqlArtifact),
  }
}


export function realtimeComputeDeploymentArtifactToHclTerraform(struct?: RealtimeComputeDeploymentArtifactOutputReference | RealtimeComputeDeploymentArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar_artifact: {
      value: realtimeComputeDeploymentArtifactJarArtifactToHclTerraform(struct!.jarArtifact),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentArtifactJarArtifactList",
    },
    python_artifact: {
      value: realtimeComputeDeploymentArtifactPythonArtifactToHclTerraform(struct!.pythonArtifact),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentArtifactPythonArtifactList",
    },
    sql_artifact: {
      value: realtimeComputeDeploymentArtifactSqlArtifactToHclTerraform(struct!.sqlArtifact),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentArtifactSqlArtifactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._jarArtifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarArtifact = this._jarArtifact?.internalValue;
    }
    if (this._pythonArtifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonArtifact = this._pythonArtifact?.internalValue;
    }
    if (this._sqlArtifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlArtifact = this._sqlArtifact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._jarArtifact.internalValue = undefined;
      this._pythonArtifact.internalValue = undefined;
      this._sqlArtifact.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._jarArtifact.internalValue = value.jarArtifact;
      this._pythonArtifact.internalValue = value.pythonArtifact;
      this._sqlArtifact.internalValue = value.sqlArtifact;
    }
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

  // jar_artifact - computed: false, optional: true, required: false
  private _jarArtifact = new RealtimeComputeDeploymentArtifactJarArtifactOutputReference(this, "jar_artifact");
  public get jarArtifact() {
    return this._jarArtifact;
  }
  public putJarArtifact(value: RealtimeComputeDeploymentArtifactJarArtifact) {
    this._jarArtifact.internalValue = value;
  }
  public resetJarArtifact() {
    this._jarArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarArtifactInput() {
    return this._jarArtifact.internalValue;
  }

  // python_artifact - computed: false, optional: true, required: false
  private _pythonArtifact = new RealtimeComputeDeploymentArtifactPythonArtifactOutputReference(this, "python_artifact");
  public get pythonArtifact() {
    return this._pythonArtifact;
  }
  public putPythonArtifact(value: RealtimeComputeDeploymentArtifactPythonArtifact) {
    this._pythonArtifact.internalValue = value;
  }
  public resetPythonArtifact() {
    this._pythonArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonArtifactInput() {
    return this._pythonArtifact.internalValue;
  }

  // sql_artifact - computed: false, optional: true, required: false
  private _sqlArtifact = new RealtimeComputeDeploymentArtifactSqlArtifactOutputReference(this, "sql_artifact");
  public get sqlArtifact() {
    return this._sqlArtifact;
  }
  public putSqlArtifact(value: RealtimeComputeDeploymentArtifactSqlArtifact) {
    this._sqlArtifact.internalValue = value;
  }
  public resetSqlArtifact() {
    this._sqlArtifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlArtifactInput() {
    return this._sqlArtifact.internalValue;
  }
}
export interface RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#cpu RealtimeComputeDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#memory RealtimeComputeDeployment#memory}
  */
  readonly memory?: string;
}

export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#cpu RealtimeComputeDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#memory RealtimeComputeDeployment#memory}
  */
  readonly memory?: string;
}

export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToHclTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#parallelism RealtimeComputeDeployment#parallelism}
  */
  readonly parallelism?: number;
  /**
  * jobmanager_resource_setting_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#jobmanager_resource_setting_spec RealtimeComputeDeployment#jobmanager_resource_setting_spec}
  */
  readonly jobmanagerResourceSettingSpec?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec;
  /**
  * taskmanager_resource_setting_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#taskmanager_resource_setting_spec RealtimeComputeDeployment#taskmanager_resource_setting_spec}
  */
  readonly taskmanagerResourceSettingSpec?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec;
}

export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingToTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    jobmanager_resource_setting_spec: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToTerraform(struct!.jobmanagerResourceSettingSpec),
    taskmanager_resource_setting_spec: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToTerraform(struct!.taskmanagerResourceSettingSpec),
  }
}


export function realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingToHclTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingOutputReference | RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jobmanager_resource_setting_spec: {
      value: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct!.jobmanagerResourceSettingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecList",
    },
    taskmanager_resource_setting_spec: {
      value: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToHclTerraform(struct!.taskmanagerResourceSettingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._jobmanagerResourceSettingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobmanagerResourceSettingSpec = this._jobmanagerResourceSettingSpec?.internalValue;
    }
    if (this._taskmanagerResourceSettingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskmanagerResourceSettingSpec = this._taskmanagerResourceSettingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallelism = undefined;
      this._jobmanagerResourceSettingSpec.internalValue = undefined;
      this._taskmanagerResourceSettingSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallelism = value.parallelism;
      this._jobmanagerResourceSettingSpec.internalValue = value.jobmanagerResourceSettingSpec;
      this._taskmanagerResourceSettingSpec.internalValue = value.taskmanagerResourceSettingSpec;
    }
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // jobmanager_resource_setting_spec - computed: false, optional: true, required: false
  private _jobmanagerResourceSettingSpec = new RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference(this, "jobmanager_resource_setting_spec");
  public get jobmanagerResourceSettingSpec() {
    return this._jobmanagerResourceSettingSpec;
  }
  public putJobmanagerResourceSettingSpec(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec) {
    this._jobmanagerResourceSettingSpec.internalValue = value;
  }
  public resetJobmanagerResourceSettingSpec() {
    this._jobmanagerResourceSettingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobmanagerResourceSettingSpecInput() {
    return this._jobmanagerResourceSettingSpec.internalValue;
  }

  // taskmanager_resource_setting_spec - computed: false, optional: true, required: false
  private _taskmanagerResourceSettingSpec = new RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference(this, "taskmanager_resource_setting_spec");
  public get taskmanagerResourceSettingSpec() {
    return this._taskmanagerResourceSettingSpec;
  }
  public putTaskmanagerResourceSettingSpec(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec) {
    this._taskmanagerResourceSettingSpec.internalValue = value;
  }
  public resetTaskmanagerResourceSettingSpec() {
    this._taskmanagerResourceSettingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskmanagerResourceSettingSpecInput() {
    return this._taskmanagerResourceSettingSpec.internalValue;
  }
}
export interface RealtimeComputeDeploymentBatchResourceSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#max_slot RealtimeComputeDeployment#max_slot}
  */
  readonly maxSlot?: number;
  /**
  * basic_resource_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#basic_resource_setting RealtimeComputeDeployment#basic_resource_setting}
  */
  readonly basicResourceSetting?: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting;
}

export function realtimeComputeDeploymentBatchResourceSettingToTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingOutputReference | RealtimeComputeDeploymentBatchResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_slot: cdktf.numberToTerraform(struct!.maxSlot),
    basic_resource_setting: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingToTerraform(struct!.basicResourceSetting),
  }
}


export function realtimeComputeDeploymentBatchResourceSettingToHclTerraform(struct?: RealtimeComputeDeploymentBatchResourceSettingOutputReference | RealtimeComputeDeploymentBatchResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_slot: {
      value: cdktf.numberToHclTerraform(struct!.maxSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    basic_resource_setting: {
      value: realtimeComputeDeploymentBatchResourceSettingBasicResourceSettingToHclTerraform(struct!.basicResourceSetting),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentBatchResourceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentBatchResourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSlot = this._maxSlot;
    }
    if (this._basicResourceSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicResourceSetting = this._basicResourceSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentBatchResourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSlot = undefined;
      this._basicResourceSetting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSlot = value.maxSlot;
      this._basicResourceSetting.internalValue = value.basicResourceSetting;
    }
  }

  // max_slot - computed: false, optional: true, required: false
  private _maxSlot?: number; 
  public get maxSlot() {
    return this.getNumberAttribute('max_slot');
  }
  public set maxSlot(value: number) {
    this._maxSlot = value;
  }
  public resetMaxSlot() {
    this._maxSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotInput() {
    return this._maxSlot;
  }

  // basic_resource_setting - computed: false, optional: true, required: false
  private _basicResourceSetting = new RealtimeComputeDeploymentBatchResourceSettingBasicResourceSettingOutputReference(this, "basic_resource_setting");
  public get basicResourceSetting() {
    return this._basicResourceSetting;
  }
  public putBasicResourceSetting(value: RealtimeComputeDeploymentBatchResourceSettingBasicResourceSetting) {
    this._basicResourceSetting.internalValue = value;
  }
  public resetBasicResourceSetting() {
    this._basicResourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicResourceSettingInput() {
    return this._basicResourceSetting.internalValue;
  }
}
export interface RealtimeComputeDeploymentDeploymentTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#mode RealtimeComputeDeployment#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#name RealtimeComputeDeployment#name}
  */
  readonly name: string;
}

export function realtimeComputeDeploymentDeploymentTargetToTerraform(struct?: RealtimeComputeDeploymentDeploymentTargetOutputReference | RealtimeComputeDeploymentDeploymentTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function realtimeComputeDeploymentDeploymentTargetToHclTerraform(struct?: RealtimeComputeDeploymentDeploymentTargetOutputReference | RealtimeComputeDeploymentDeploymentTarget): any {
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

export class RealtimeComputeDeploymentDeploymentTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentDeploymentTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentDeploymentTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._name = value.name;
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
export interface RealtimeComputeDeploymentLocalVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#name RealtimeComputeDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#value RealtimeComputeDeployment#value}
  */
  readonly value?: string;
}

export function realtimeComputeDeploymentLocalVariablesToTerraform(struct?: RealtimeComputeDeploymentLocalVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function realtimeComputeDeploymentLocalVariablesToHclTerraform(struct?: RealtimeComputeDeploymentLocalVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RealtimeComputeDeploymentLocalVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealtimeComputeDeploymentLocalVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentLocalVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class RealtimeComputeDeploymentLocalVariablesList extends cdktf.ComplexList {
  public internalValue? : RealtimeComputeDeploymentLocalVariables[] | cdktf.IResolvable

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
  public get(index: number): RealtimeComputeDeploymentLocalVariablesOutputReference {
    return new RealtimeComputeDeploymentLocalVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealtimeComputeDeploymentLoggingLog4JLoggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#logger_level RealtimeComputeDeployment#logger_level}
  */
  readonly loggerLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#logger_name RealtimeComputeDeployment#logger_name}
  */
  readonly loggerName?: string;
}

export function realtimeComputeDeploymentLoggingLog4JLoggersToTerraform(struct?: RealtimeComputeDeploymentLoggingLog4JLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logger_level: cdktf.stringToTerraform(struct!.loggerLevel),
    logger_name: cdktf.stringToTerraform(struct!.loggerName),
  }
}


export function realtimeComputeDeploymentLoggingLog4JLoggersToHclTerraform(struct?: RealtimeComputeDeploymentLoggingLog4JLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logger_level: {
      value: cdktf.stringToHclTerraform(struct!.loggerLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logger_name: {
      value: cdktf.stringToHclTerraform(struct!.loggerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentLoggingLog4JLoggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealtimeComputeDeploymentLoggingLog4JLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggerLevel = this._loggerLevel;
    }
    if (this._loggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggerName = this._loggerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentLoggingLog4JLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggerLevel = undefined;
      this._loggerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggerLevel = value.loggerLevel;
      this._loggerName = value.loggerName;
    }
  }

  // logger_level - computed: true, optional: true, required: false
  private _loggerLevel?: string; 
  public get loggerLevel() {
    return this.getStringAttribute('logger_level');
  }
  public set loggerLevel(value: string) {
    this._loggerLevel = value;
  }
  public resetLoggerLevel() {
    this._loggerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggerLevelInput() {
    return this._loggerLevel;
  }

  // logger_name - computed: true, optional: true, required: false
  private _loggerName?: string; 
  public get loggerName() {
    return this.getStringAttribute('logger_name');
  }
  public set loggerName(value: string) {
    this._loggerName = value;
  }
  public resetLoggerName() {
    this._loggerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggerNameInput() {
    return this._loggerName;
  }
}

export class RealtimeComputeDeploymentLoggingLog4JLoggersList extends cdktf.ComplexList {
  public internalValue? : RealtimeComputeDeploymentLoggingLog4JLoggers[] | cdktf.IResolvable

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
  public get(index: number): RealtimeComputeDeploymentLoggingLog4JLoggersOutputReference {
    return new RealtimeComputeDeploymentLoggingLog4JLoggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealtimeComputeDeploymentLoggingLogReservePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#expiration_days RealtimeComputeDeployment#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#open_history RealtimeComputeDeployment#open_history}
  */
  readonly openHistory?: boolean | cdktf.IResolvable;
}

export function realtimeComputeDeploymentLoggingLogReservePolicyToTerraform(struct?: RealtimeComputeDeploymentLoggingLogReservePolicyOutputReference | RealtimeComputeDeploymentLoggingLogReservePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_days: cdktf.numberToTerraform(struct!.expirationDays),
    open_history: cdktf.booleanToTerraform(struct!.openHistory),
  }
}


export function realtimeComputeDeploymentLoggingLogReservePolicyToHclTerraform(struct?: RealtimeComputeDeploymentLoggingLogReservePolicyOutputReference | RealtimeComputeDeploymentLoggingLogReservePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_history: {
      value: cdktf.booleanToHclTerraform(struct!.openHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentLoggingLogReservePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentLoggingLogReservePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    if (this._openHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHistory = this._openHistory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentLoggingLogReservePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationDays = undefined;
      this._openHistory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationDays = value.expirationDays;
      this._openHistory = value.openHistory;
    }
  }

  // expiration_days - computed: true, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // open_history - computed: true, optional: true, required: false
  private _openHistory?: boolean | cdktf.IResolvable; 
  public get openHistory() {
    return this.getBooleanAttribute('open_history');
  }
  public set openHistory(value: boolean | cdktf.IResolvable) {
    this._openHistory = value;
  }
  public resetOpenHistory() {
    this._openHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHistoryInput() {
    return this._openHistory;
  }
}
export interface RealtimeComputeDeploymentLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#log4j2_configuration_template RealtimeComputeDeployment#log4j2_configuration_template}
  */
  readonly log4J2ConfigurationTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#logging_profile RealtimeComputeDeployment#logging_profile}
  */
  readonly loggingProfile?: string;
  /**
  * log4j_loggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#log4j_loggers RealtimeComputeDeployment#log4j_loggers}
  */
  readonly log4JLoggers?: RealtimeComputeDeploymentLoggingLog4JLoggers[] | cdktf.IResolvable;
  /**
  * log_reserve_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#log_reserve_policy RealtimeComputeDeployment#log_reserve_policy}
  */
  readonly logReservePolicy?: RealtimeComputeDeploymentLoggingLogReservePolicy;
}

export function realtimeComputeDeploymentLoggingToTerraform(struct?: RealtimeComputeDeploymentLoggingOutputReference | RealtimeComputeDeploymentLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log4j2_configuration_template: cdktf.stringToTerraform(struct!.log4J2ConfigurationTemplate),
    logging_profile: cdktf.stringToTerraform(struct!.loggingProfile),
    log4j_loggers: cdktf.listMapper(realtimeComputeDeploymentLoggingLog4JLoggersToTerraform, true)(struct!.log4JLoggers),
    log_reserve_policy: realtimeComputeDeploymentLoggingLogReservePolicyToTerraform(struct!.logReservePolicy),
  }
}


export function realtimeComputeDeploymentLoggingToHclTerraform(struct?: RealtimeComputeDeploymentLoggingOutputReference | RealtimeComputeDeploymentLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log4j2_configuration_template: {
      value: cdktf.stringToHclTerraform(struct!.log4J2ConfigurationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_profile: {
      value: cdktf.stringToHclTerraform(struct!.loggingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log4j_loggers: {
      value: cdktf.listMapperHcl(realtimeComputeDeploymentLoggingLog4JLoggersToHclTerraform, true)(struct!.log4JLoggers),
      isBlock: true,
      type: "set",
      storageClassType: "RealtimeComputeDeploymentLoggingLog4JLoggersList",
    },
    log_reserve_policy: {
      value: realtimeComputeDeploymentLoggingLogReservePolicyToHclTerraform(struct!.logReservePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentLoggingLogReservePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log4J2ConfigurationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.log4J2ConfigurationTemplate = this._log4J2ConfigurationTemplate;
    }
    if (this._loggingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingProfile = this._loggingProfile;
    }
    if (this._log4JLoggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.log4JLoggers = this._log4JLoggers?.internalValue;
    }
    if (this._logReservePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logReservePolicy = this._logReservePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log4J2ConfigurationTemplate = undefined;
      this._loggingProfile = undefined;
      this._log4JLoggers.internalValue = undefined;
      this._logReservePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log4J2ConfigurationTemplate = value.log4J2ConfigurationTemplate;
      this._loggingProfile = value.loggingProfile;
      this._log4JLoggers.internalValue = value.log4JLoggers;
      this._logReservePolicy.internalValue = value.logReservePolicy;
    }
  }

  // log4j2_configuration_template - computed: true, optional: true, required: false
  private _log4J2ConfigurationTemplate?: string; 
  public get log4J2ConfigurationTemplate() {
    return this.getStringAttribute('log4j2_configuration_template');
  }
  public set log4J2ConfigurationTemplate(value: string) {
    this._log4J2ConfigurationTemplate = value;
  }
  public resetLog4J2ConfigurationTemplate() {
    this._log4J2ConfigurationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get log4J2ConfigurationTemplateInput() {
    return this._log4J2ConfigurationTemplate;
  }

  // logging_profile - computed: true, optional: true, required: false
  private _loggingProfile?: string; 
  public get loggingProfile() {
    return this.getStringAttribute('logging_profile');
  }
  public set loggingProfile(value: string) {
    this._loggingProfile = value;
  }
  public resetLoggingProfile() {
    this._loggingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingProfileInput() {
    return this._loggingProfile;
  }

  // log4j_loggers - computed: false, optional: true, required: false
  private _log4JLoggers = new RealtimeComputeDeploymentLoggingLog4JLoggersList(this, "log4j_loggers", true);
  public get log4JLoggers() {
    return this._log4JLoggers;
  }
  public putLog4JLoggers(value: RealtimeComputeDeploymentLoggingLog4JLoggers[] | cdktf.IResolvable) {
    this._log4JLoggers.internalValue = value;
  }
  public resetLog4JLoggers() {
    this._log4JLoggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get log4JLoggersInput() {
    return this._log4JLoggers.internalValue;
  }

  // log_reserve_policy - computed: false, optional: true, required: false
  private _logReservePolicy = new RealtimeComputeDeploymentLoggingLogReservePolicyOutputReference(this, "log_reserve_policy");
  public get logReservePolicy() {
    return this._logReservePolicy;
  }
  public putLogReservePolicy(value: RealtimeComputeDeploymentLoggingLogReservePolicy) {
    this._logReservePolicy.internalValue = value;
  }
  public resetLogReservePolicy() {
    this._logReservePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReservePolicyInput() {
    return this._logReservePolicy.internalValue;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#cpu RealtimeComputeDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#memory RealtimeComputeDeployment#memory}
  */
  readonly memory?: string;
}

export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#cpu RealtimeComputeDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#memory RealtimeComputeDeployment#memory}
  */
  readonly memory?: string;
}

export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#parallelism RealtimeComputeDeployment#parallelism}
  */
  readonly parallelism?: number;
  /**
  * jobmanager_resource_setting_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#jobmanager_resource_setting_spec RealtimeComputeDeployment#jobmanager_resource_setting_spec}
  */
  readonly jobmanagerResourceSettingSpec?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec;
  /**
  * taskmanager_resource_setting_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#taskmanager_resource_setting_spec RealtimeComputeDeployment#taskmanager_resource_setting_spec}
  */
  readonly taskmanagerResourceSettingSpec?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec;
}

export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    jobmanager_resource_setting_spec: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToTerraform(struct!.jobmanagerResourceSettingSpec),
    taskmanager_resource_setting_spec: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToTerraform(struct!.taskmanagerResourceSettingSpec),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jobmanager_resource_setting_spec: {
      value: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct!.jobmanagerResourceSettingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecList",
    },
    taskmanager_resource_setting_spec: {
      value: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecToHclTerraform(struct!.taskmanagerResourceSettingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._jobmanagerResourceSettingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobmanagerResourceSettingSpec = this._jobmanagerResourceSettingSpec?.internalValue;
    }
    if (this._taskmanagerResourceSettingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskmanagerResourceSettingSpec = this._taskmanagerResourceSettingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallelism = undefined;
      this._jobmanagerResourceSettingSpec.internalValue = undefined;
      this._taskmanagerResourceSettingSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallelism = value.parallelism;
      this._jobmanagerResourceSettingSpec.internalValue = value.jobmanagerResourceSettingSpec;
      this._taskmanagerResourceSettingSpec.internalValue = value.taskmanagerResourceSettingSpec;
    }
  }

  // parallelism - computed: true, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // jobmanager_resource_setting_spec - computed: false, optional: true, required: false
  private _jobmanagerResourceSettingSpec = new RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpecOutputReference(this, "jobmanager_resource_setting_spec");
  public get jobmanagerResourceSettingSpec() {
    return this._jobmanagerResourceSettingSpec;
  }
  public putJobmanagerResourceSettingSpec(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingJobmanagerResourceSettingSpec) {
    this._jobmanagerResourceSettingSpec.internalValue = value;
  }
  public resetJobmanagerResourceSettingSpec() {
    this._jobmanagerResourceSettingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobmanagerResourceSettingSpecInput() {
    return this._jobmanagerResourceSettingSpec.internalValue;
  }

  // taskmanager_resource_setting_spec - computed: false, optional: true, required: false
  private _taskmanagerResourceSettingSpec = new RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpecOutputReference(this, "taskmanager_resource_setting_spec");
  public get taskmanagerResourceSettingSpec() {
    return this._taskmanagerResourceSettingSpec;
  }
  public putTaskmanagerResourceSettingSpec(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingTaskmanagerResourceSettingSpec) {
    this._taskmanagerResourceSettingSpec.internalValue = value;
  }
  public resetTaskmanagerResourceSettingSpec() {
    this._taskmanagerResourceSettingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskmanagerResourceSettingSpecInput() {
    return this._taskmanagerResourceSettingSpec.internalValue;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#cpu RealtimeComputeDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#memory RealtimeComputeDeployment#memory}
  */
  readonly memory?: string;
}

export function realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecOutputReference | RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#resource_plan RealtimeComputeDeployment#resource_plan}
  */
  readonly resourcePlan?: string;
  /**
  * jobmanager_resource_setting_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#jobmanager_resource_setting_spec RealtimeComputeDeployment#jobmanager_resource_setting_spec}
  */
  readonly jobmanagerResourceSettingSpec?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec;
}

export function realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_plan: cdktf.stringToTerraform(struct!.resourcePlan),
    jobmanager_resource_setting_spec: realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecToTerraform(struct!.jobmanagerResourceSettingSpec),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_plan: {
      value: cdktf.stringToHclTerraform(struct!.resourcePlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobmanager_resource_setting_spec: {
      value: realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecToHclTerraform(struct!.jobmanagerResourceSettingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourcePlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePlan = this._resourcePlan;
    }
    if (this._jobmanagerResourceSettingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobmanagerResourceSettingSpec = this._jobmanagerResourceSettingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourcePlan = undefined;
      this._jobmanagerResourceSettingSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourcePlan = value.resourcePlan;
      this._jobmanagerResourceSettingSpec.internalValue = value.jobmanagerResourceSettingSpec;
    }
  }

  // resource_plan - computed: false, optional: true, required: false
  private _resourcePlan?: string; 
  public get resourcePlan() {
    return this.getStringAttribute('resource_plan');
  }
  public set resourcePlan(value: string) {
    this._resourcePlan = value;
  }
  public resetResourcePlan() {
    this._resourcePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePlanInput() {
    return this._resourcePlan;
  }

  // jobmanager_resource_setting_spec - computed: false, optional: true, required: false
  private _jobmanagerResourceSettingSpec = new RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpecOutputReference(this, "jobmanager_resource_setting_spec");
  public get jobmanagerResourceSettingSpec() {
    return this._jobmanagerResourceSettingSpec;
  }
  public putJobmanagerResourceSettingSpec(value: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingJobmanagerResourceSettingSpec) {
    this._jobmanagerResourceSettingSpec.internalValue = value;
  }
  public resetJobmanagerResourceSettingSpec() {
    this._jobmanagerResourceSettingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobmanagerResourceSettingSpecInput() {
    return this._jobmanagerResourceSettingSpec.internalValue;
  }
}
export interface RealtimeComputeDeploymentStreamingResourceSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#resource_setting_mode RealtimeComputeDeployment#resource_setting_mode}
  */
  readonly resourceSettingMode?: string;
  /**
  * basic_resource_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#basic_resource_setting RealtimeComputeDeployment#basic_resource_setting}
  */
  readonly basicResourceSetting?: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting;
  /**
  * expert_resource_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#expert_resource_setting RealtimeComputeDeployment#expert_resource_setting}
  */
  readonly expertResourceSetting?: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting;
}

export function realtimeComputeDeploymentStreamingResourceSettingToTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_setting_mode: cdktf.stringToTerraform(struct!.resourceSettingMode),
    basic_resource_setting: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingToTerraform(struct!.basicResourceSetting),
    expert_resource_setting: realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingToTerraform(struct!.expertResourceSetting),
  }
}


export function realtimeComputeDeploymentStreamingResourceSettingToHclTerraform(struct?: RealtimeComputeDeploymentStreamingResourceSettingOutputReference | RealtimeComputeDeploymentStreamingResourceSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_setting_mode: {
      value: cdktf.stringToHclTerraform(struct!.resourceSettingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_resource_setting: {
      value: realtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingToHclTerraform(struct!.basicResourceSetting),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingList",
    },
    expert_resource_setting: {
      value: realtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingToHclTerraform(struct!.expertResourceSetting),
      isBlock: true,
      type: "list",
      storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentStreamingResourceSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeDeploymentStreamingResourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceSettingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSettingMode = this._resourceSettingMode;
    }
    if (this._basicResourceSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicResourceSetting = this._basicResourceSetting?.internalValue;
    }
    if (this._expertResourceSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expertResourceSetting = this._expertResourceSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentStreamingResourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceSettingMode = undefined;
      this._basicResourceSetting.internalValue = undefined;
      this._expertResourceSetting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceSettingMode = value.resourceSettingMode;
      this._basicResourceSetting.internalValue = value.basicResourceSetting;
      this._expertResourceSetting.internalValue = value.expertResourceSetting;
    }
  }

  // resource_setting_mode - computed: true, optional: true, required: false
  private _resourceSettingMode?: string; 
  public get resourceSettingMode() {
    return this.getStringAttribute('resource_setting_mode');
  }
  public set resourceSettingMode(value: string) {
    this._resourceSettingMode = value;
  }
  public resetResourceSettingMode() {
    this._resourceSettingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSettingModeInput() {
    return this._resourceSettingMode;
  }

  // basic_resource_setting - computed: false, optional: true, required: false
  private _basicResourceSetting = new RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSettingOutputReference(this, "basic_resource_setting");
  public get basicResourceSetting() {
    return this._basicResourceSetting;
  }
  public putBasicResourceSetting(value: RealtimeComputeDeploymentStreamingResourceSettingBasicResourceSetting) {
    this._basicResourceSetting.internalValue = value;
  }
  public resetBasicResourceSetting() {
    this._basicResourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicResourceSettingInput() {
    return this._basicResourceSetting.internalValue;
  }

  // expert_resource_setting - computed: false, optional: true, required: false
  private _expertResourceSetting = new RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSettingOutputReference(this, "expert_resource_setting");
  public get expertResourceSetting() {
    return this._expertResourceSetting;
  }
  public putExpertResourceSetting(value: RealtimeComputeDeploymentStreamingResourceSettingExpertResourceSetting) {
    this._expertResourceSetting.internalValue = value;
  }
  public resetExpertResourceSetting() {
    this._expertResourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expertResourceSettingInput() {
    return this._expertResourceSetting.internalValue;
  }
}
export interface RealtimeComputeDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#create RealtimeComputeDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#delete RealtimeComputeDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#update RealtimeComputeDeployment#update}
  */
  readonly update?: string;
}

export function realtimeComputeDeploymentTimeoutsToTerraform(struct?: RealtimeComputeDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function realtimeComputeDeploymentTimeoutsToHclTerraform(struct?: RealtimeComputeDeploymentTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RealtimeComputeDeploymentTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment alicloud_realtime_compute_deployment}
*/
export class RealtimeComputeDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_realtime_compute_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealtimeComputeDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealtimeComputeDeployment to import
  * @param importFromId The id of the existing RealtimeComputeDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealtimeComputeDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_realtime_compute_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_deployment alicloud_realtime_compute_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealtimeComputeDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: RealtimeComputeDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_realtime_compute_deployment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentName = config.deploymentName;
    this._description = config.description;
    this._engineVersion = config.engineVersion;
    this._executionMode = config.executionMode;
    this._flinkConf = config.flinkConf;
    this._id = config.id;
    this._labels = config.labels;
    this._namespace = config.namespace;
    this._resourceId = config.resourceId;
    this._artifact.internalValue = config.artifact;
    this._batchResourceSetting.internalValue = config.batchResourceSetting;
    this._deploymentTarget.internalValue = config.deploymentTarget;
    this._localVariables.internalValue = config.localVariables;
    this._logging.internalValue = config.logging;
    this._streamingResourceSetting.internalValue = config.streamingResourceSetting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_name - computed: false, optional: false, required: true
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
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

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // execution_mode - computed: false, optional: false, required: true
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // flink_conf - computed: true, optional: true, required: false
  private _flinkConf?: { [key: string]: string }; 
  public get flinkConf() {
    return this.getStringMapAttribute('flink_conf');
  }
  public set flinkConf(value: { [key: string]: string }) {
    this._flinkConf = value;
  }
  public resetFlinkConf() {
    this._flinkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flinkConfInput() {
    return this._flinkConf;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // artifact - computed: false, optional: false, required: true
  private _artifact = new RealtimeComputeDeploymentArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: RealtimeComputeDeploymentArtifact) {
    this._artifact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // batch_resource_setting - computed: false, optional: true, required: false
  private _batchResourceSetting = new RealtimeComputeDeploymentBatchResourceSettingOutputReference(this, "batch_resource_setting");
  public get batchResourceSetting() {
    return this._batchResourceSetting;
  }
  public putBatchResourceSetting(value: RealtimeComputeDeploymentBatchResourceSetting) {
    this._batchResourceSetting.internalValue = value;
  }
  public resetBatchResourceSetting() {
    this._batchResourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchResourceSettingInput() {
    return this._batchResourceSetting.internalValue;
  }

  // deployment_target - computed: false, optional: false, required: true
  private _deploymentTarget = new RealtimeComputeDeploymentDeploymentTargetOutputReference(this, "deployment_target");
  public get deploymentTarget() {
    return this._deploymentTarget;
  }
  public putDeploymentTarget(value: RealtimeComputeDeploymentDeploymentTarget) {
    this._deploymentTarget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetInput() {
    return this._deploymentTarget.internalValue;
  }

  // local_variables - computed: false, optional: true, required: false
  private _localVariables = new RealtimeComputeDeploymentLocalVariablesList(this, "local_variables", true);
  public get localVariables() {
    return this._localVariables;
  }
  public putLocalVariables(value: RealtimeComputeDeploymentLocalVariables[] | cdktf.IResolvable) {
    this._localVariables.internalValue = value;
  }
  public resetLocalVariables() {
    this._localVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVariablesInput() {
    return this._localVariables.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new RealtimeComputeDeploymentLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: RealtimeComputeDeploymentLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // streaming_resource_setting - computed: false, optional: true, required: false
  private _streamingResourceSetting = new RealtimeComputeDeploymentStreamingResourceSettingOutputReference(this, "streaming_resource_setting");
  public get streamingResourceSetting() {
    return this._streamingResourceSetting;
  }
  public putStreamingResourceSetting(value: RealtimeComputeDeploymentStreamingResourceSetting) {
    this._streamingResourceSetting.internalValue = value;
  }
  public resetStreamingResourceSetting() {
    this._streamingResourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingResourceSettingInput() {
    return this._streamingResourceSetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RealtimeComputeDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RealtimeComputeDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_name: cdktf.stringToTerraform(this._deploymentName),
      description: cdktf.stringToTerraform(this._description),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      flink_conf: cdktf.hashMapper(cdktf.stringToTerraform)(this._flinkConf),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      namespace: cdktf.stringToTerraform(this._namespace),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      artifact: realtimeComputeDeploymentArtifactToTerraform(this._artifact.internalValue),
      batch_resource_setting: realtimeComputeDeploymentBatchResourceSettingToTerraform(this._batchResourceSetting.internalValue),
      deployment_target: realtimeComputeDeploymentDeploymentTargetToTerraform(this._deploymentTarget.internalValue),
      local_variables: cdktf.listMapper(realtimeComputeDeploymentLocalVariablesToTerraform, true)(this._localVariables.internalValue),
      logging: realtimeComputeDeploymentLoggingToTerraform(this._logging.internalValue),
      streaming_resource_setting: realtimeComputeDeploymentStreamingResourceSettingToTerraform(this._streamingResourceSetting.internalValue),
      timeouts: realtimeComputeDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_name: {
        value: cdktf.stringToHclTerraform(this._deploymentName),
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
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flink_conf: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._flinkConf),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact: {
        value: realtimeComputeDeploymentArtifactToHclTerraform(this._artifact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeDeploymentArtifactList",
      },
      batch_resource_setting: {
        value: realtimeComputeDeploymentBatchResourceSettingToHclTerraform(this._batchResourceSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeDeploymentBatchResourceSettingList",
      },
      deployment_target: {
        value: realtimeComputeDeploymentDeploymentTargetToHclTerraform(this._deploymentTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeDeploymentDeploymentTargetList",
      },
      local_variables: {
        value: cdktf.listMapperHcl(realtimeComputeDeploymentLocalVariablesToHclTerraform, true)(this._localVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RealtimeComputeDeploymentLocalVariablesList",
      },
      logging: {
        value: realtimeComputeDeploymentLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeDeploymentLoggingList",
      },
      streaming_resource_setting: {
        value: realtimeComputeDeploymentStreamingResourceSettingToHclTerraform(this._streamingResourceSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeDeploymentStreamingResourceSettingList",
      },
      timeouts: {
        value: realtimeComputeDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RealtimeComputeDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
