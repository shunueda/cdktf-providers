// https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean that specifies if the build logs are publicly accessible (default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#is_public Pipeline#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * The display name for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * 
  * A string with original yaml pipeline.
  * 
  * For example:
  * 
  * <code>original_yaml_string = "version: \\"1.0\\"\nsteps:\n	test:\n	image: alpine:latest\n	commands:\n	- echo \\"ACC tests\\"</code>
  * 
  * Or: <code>original_yaml_string = file("/path/to/my/codefresh.yml")</code>
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#original_yaml_string Pipeline#original_yaml_string}
  */
  readonly originalYamlString?: string;
  /**
  * A list of tags to mark a project for easy management and access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#tags Pipeline#tags}
  */
  readonly tags?: string[];
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#spec Pipeline#spec}
  */
  readonly spec?: PipelineSpec;
}
export interface PipelineSpecCronTriggerOptions {
  /**
  * If false the pipeline will not send notifications to Slack and status updates back to the Git provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#enable_notifications Pipeline#enable_notifications}
  */
  readonly enableNotifications?: boolean | cdktf.IResolvable;
  /**
  * If true, docker layer cache is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#no_cache Pipeline#no_cache}
  */
  readonly noCache?: boolean | cdktf.IResolvable;
  /**
  * If true, extra Codefresh caching is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#no_cf_cache Pipeline#no_cf_cache}
  */
  readonly noCfCache?: boolean | cdktf.IResolvable;
  /**
  * If true, all files on volume will be deleted before each execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#reset_volume Pipeline#reset_volume}
  */
  readonly resetVolume?: boolean | cdktf.IResolvable;
}

export function pipelineSpecCronTriggerOptionsToTerraform(struct?: PipelineSpecCronTriggerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_notifications: cdktf.booleanToTerraform(struct!.enableNotifications),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    no_cf_cache: cdktf.booleanToTerraform(struct!.noCfCache),
    reset_volume: cdktf.booleanToTerraform(struct!.resetVolume),
  }
}


export function pipelineSpecCronTriggerOptionsToHclTerraform(struct?: PipelineSpecCronTriggerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.enableNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_cf_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noCfCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_volume: {
      value: cdktf.booleanToHclTerraform(struct!.resetVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecCronTriggerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecCronTriggerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotifications = this._enableNotifications;
    }
    if (this._noCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache;
    }
    if (this._noCfCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCfCache = this._noCfCache;
    }
    if (this._resetVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetVolume = this._resetVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecCronTriggerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableNotifications = undefined;
      this._noCache = undefined;
      this._noCfCache = undefined;
      this._resetVolume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableNotifications = value.enableNotifications;
      this._noCache = value.noCache;
      this._noCfCache = value.noCfCache;
      this._resetVolume = value.resetVolume;
    }
  }

  // enable_notifications - computed: false, optional: true, required: false
  private _enableNotifications?: boolean | cdktf.IResolvable; 
  public get enableNotifications() {
    return this.getBooleanAttribute('enable_notifications');
  }
  public set enableNotifications(value: boolean | cdktf.IResolvable) {
    this._enableNotifications = value;
  }
  public resetEnableNotifications() {
    this._enableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotificationsInput() {
    return this._enableNotifications;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache?: boolean | cdktf.IResolvable; 
  public get noCache() {
    return this.getBooleanAttribute('no_cache');
  }
  public set noCache(value: boolean | cdktf.IResolvable) {
    this._noCache = value;
  }
  public resetNoCache() {
    this._noCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheInput() {
    return this._noCache;
  }

  // no_cf_cache - computed: false, optional: true, required: false
  private _noCfCache?: boolean | cdktf.IResolvable; 
  public get noCfCache() {
    return this.getBooleanAttribute('no_cf_cache');
  }
  public set noCfCache(value: boolean | cdktf.IResolvable) {
    this._noCfCache = value;
  }
  public resetNoCfCache() {
    this._noCfCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCfCacheInput() {
    return this._noCfCache;
  }

  // reset_volume - computed: false, optional: true, required: false
  private _resetVolume?: boolean | cdktf.IResolvable; 
  public get resetVolume() {
    return this.getBooleanAttribute('reset_volume');
  }
  public set resetVolume(value: boolean | cdktf.IResolvable) {
    this._resetVolume = value;
  }
  public resetResetVolume() {
    this._resetVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetVolumeInput() {
    return this._resetVolume;
  }
}

export class PipelineSpecCronTriggerOptionsList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecCronTriggerOptions[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecCronTriggerOptionsOutputReference {
    return new PipelineSpecCronTriggerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecCronTriggerRuntimeEnvironment {
  /**
  * The CPU allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#cpu Pipeline#cpu}
  */
  readonly cpu?: string;
  /**
  * The storage allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#dind_storage Pipeline#dind_storage}
  */
  readonly dindStorage?: string;
  /**
  * The memory allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#memory Pipeline#memory}
  */
  readonly memory?: string;
  /**
  * The name of the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Minimum disk space required for build filesystem ( unit Gi is required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#required_available_storage Pipeline#required_available_storage}
  */
  readonly requiredAvailableStorage?: string;
}

export function pipelineSpecCronTriggerRuntimeEnvironmentToTerraform(struct?: PipelineSpecCronTriggerRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    dind_storage: cdktf.stringToTerraform(struct!.dindStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    required_available_storage: cdktf.stringToTerraform(struct!.requiredAvailableStorage),
  }
}


export function pipelineSpecCronTriggerRuntimeEnvironmentToHclTerraform(struct?: PipelineSpecCronTriggerRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dind_storage: {
      value: cdktf.stringToHclTerraform(struct!.dindStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
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
    required_available_storage: {
      value: cdktf.stringToHclTerraform(struct!.requiredAvailableStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecCronTriggerRuntimeEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecCronTriggerRuntimeEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._dindStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dindStorage = this._dindStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredAvailableStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAvailableStorage = this._requiredAvailableStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecCronTriggerRuntimeEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._dindStorage = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._requiredAvailableStorage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._dindStorage = value.dindStorage;
      this._memory = value.memory;
      this._name = value.name;
      this._requiredAvailableStorage = value.requiredAvailableStorage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // dind_storage - computed: false, optional: true, required: false
  private _dindStorage?: string; 
  public get dindStorage() {
    return this.getStringAttribute('dind_storage');
  }
  public set dindStorage(value: string) {
    this._dindStorage = value;
  }
  public resetDindStorage() {
    this._dindStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindStorageInput() {
    return this._dindStorage;
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

  // required_available_storage - computed: false, optional: true, required: false
  private _requiredAvailableStorage?: string; 
  public get requiredAvailableStorage() {
    return this.getStringAttribute('required_available_storage');
  }
  public set requiredAvailableStorage(value: string) {
    this._requiredAvailableStorage = value;
  }
  public resetRequiredAvailableStorage() {
    this._requiredAvailableStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAvailableStorageInput() {
    return this._requiredAvailableStorage;
  }
}

export class PipelineSpecCronTriggerRuntimeEnvironmentList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecCronTriggerRuntimeEnvironment[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecCronTriggerRuntimeEnvironmentOutputReference {
    return new PipelineSpecCronTriggerRuntimeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecCronTrigger {
  /**
  * Branch that should be passed for build triggered by this cron trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#branch Pipeline#branch}
  */
  readonly branch?: string;
  /**
  * Flag to disable the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#disabled Pipeline#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Trigger level encrypted variables. Please note that drift will not be detected for encrypted variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#encrypted_variables Pipeline#encrypted_variables}
  */
  readonly encryptedVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#expression Pipeline#expression}
  */
  readonly expression: string;
  /**
  * Related git-trigger id. Will by used to take all possible git information by branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#git_trigger_id Pipeline#git_trigger_id}
  */
  readonly gitTriggerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#message Pipeline#message}
  */
  readonly message: string;
  /**
  * The name of the cron trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * The type of the trigger (default: `cron`; see notes above).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#type Pipeline#type}
  */
  readonly type?: string;
  /**
  * Trigger variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#variables Pipeline#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#options Pipeline#options}
  */
  readonly options?: PipelineSpecCronTriggerOptions[] | cdktf.IResolvable;
  /**
  * runtime_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#runtime_environment Pipeline#runtime_environment}
  */
  readonly runtimeEnvironment?: PipelineSpecCronTriggerRuntimeEnvironment[] | cdktf.IResolvable;
}

export function pipelineSpecCronTriggerToTerraform(struct?: PipelineSpecCronTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    encrypted_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptedVariables),
    expression: cdktf.stringToTerraform(struct!.expression),
    git_trigger_id: cdktf.stringToTerraform(struct!.gitTriggerId),
    message: cdktf.stringToTerraform(struct!.message),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    options: cdktf.listMapper(pipelineSpecCronTriggerOptionsToTerraform, true)(struct!.options),
    runtime_environment: cdktf.listMapper(pipelineSpecCronTriggerRuntimeEnvironmentToTerraform, true)(struct!.runtimeEnvironment),
  }
}


export function pipelineSpecCronTriggerToHclTerraform(struct?: PipelineSpecCronTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptedVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_trigger_id: {
      value: cdktf.stringToHclTerraform(struct!.gitTriggerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.listMapperHcl(pipelineSpecCronTriggerOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecCronTriggerOptionsList",
    },
    runtime_environment: {
      value: cdktf.listMapperHcl(pipelineSpecCronTriggerRuntimeEnvironmentToHclTerraform, true)(struct!.runtimeEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecCronTriggerRuntimeEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecCronTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecCronTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._encryptedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedVariables = this._encryptedVariables;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._gitTriggerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitTriggerId = this._gitTriggerId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._runtimeEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironment = this._runtimeEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecCronTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._disabled = undefined;
      this._encryptedVariables = undefined;
      this._expression = undefined;
      this._gitTriggerId = undefined;
      this._message = undefined;
      this._name = undefined;
      this._type = undefined;
      this._variables = undefined;
      this._options.internalValue = undefined;
      this._runtimeEnvironment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._disabled = value.disabled;
      this._encryptedVariables = value.encryptedVariables;
      this._expression = value.expression;
      this._gitTriggerId = value.gitTriggerId;
      this._message = value.message;
      this._name = value.name;
      this._type = value.type;
      this._variables = value.variables;
      this._options.internalValue = value.options;
      this._runtimeEnvironment.internalValue = value.runtimeEnvironment;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // encrypted_variables - computed: false, optional: true, required: false
  private _encryptedVariables?: { [key: string]: string }; 
  public get encryptedVariables() {
    return this.getStringMapAttribute('encrypted_variables');
  }
  public set encryptedVariables(value: { [key: string]: string }) {
    this._encryptedVariables = value;
  }
  public resetEncryptedVariables() {
    this._encryptedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedVariablesInput() {
    return this._encryptedVariables;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // git_trigger_id - computed: false, optional: true, required: false
  private _gitTriggerId?: string; 
  public get gitTriggerId() {
    return this.getStringAttribute('git_trigger_id');
  }
  public set gitTriggerId(value: string) {
    this._gitTriggerId = value;
  }
  public resetGitTriggerId() {
    this._gitTriggerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitTriggerIdInput() {
    return this._gitTriggerId;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // options - computed: false, optional: true, required: false
  private _options = new PipelineSpecCronTriggerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: PipelineSpecCronTriggerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // runtime_environment - computed: false, optional: true, required: false
  private _runtimeEnvironment = new PipelineSpecCronTriggerRuntimeEnvironmentList(this, "runtime_environment", false);
  public get runtimeEnvironment() {
    return this._runtimeEnvironment;
  }
  public putRuntimeEnvironment(value: PipelineSpecCronTriggerRuntimeEnvironment[] | cdktf.IResolvable) {
    this._runtimeEnvironment.internalValue = value;
  }
  public resetRuntimeEnvironment() {
    this._runtimeEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment.internalValue;
  }
}

export class PipelineSpecCronTriggerList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecCronTrigger[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecCronTriggerOutputReference {
    return new PipelineSpecCronTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecExternalResource {
  /**
  * Context name for the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#context Pipeline#context}
  */
  readonly context: string;
  /**
  * Whether or not the resource specified in source_path is a folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#is_folder Pipeline#is_folder}
  */
  readonly isFolder?: boolean | cdktf.IResolvable;
  /**
  * git repository url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#repo Pipeline#repo}
  */
  readonly repo: string;
  /**
  * Revision/branch in the git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#revision Pipeline#revision}
  */
  readonly revision: string;
  /**
  * The source folder in the repository (use relative path)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#source_path Pipeline#source_path}
  */
  readonly sourcePath: string;
  /**
  * The target folder in the pipeline workspace where the file/folder will be copied to (use absolute path)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#target_path Pipeline#target_path}
  */
  readonly targetPath: string;
  /**
  * Type of the external resource. Currently only 'git' is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#type Pipeline#type}
  */
  readonly type?: string;
}

export function pipelineSpecExternalResourceToTerraform(struct?: PipelineSpecExternalResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    is_folder: cdktf.booleanToTerraform(struct!.isFolder),
    repo: cdktf.stringToTerraform(struct!.repo),
    revision: cdktf.stringToTerraform(struct!.revision),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
    target_path: cdktf.stringToTerraform(struct!.targetPath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function pipelineSpecExternalResourceToHclTerraform(struct?: PipelineSpecExternalResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_folder: {
      value: cdktf.booleanToHclTerraform(struct!.isFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_path: {
      value: cdktf.stringToHclTerraform(struct!.sourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_path: {
      value: cdktf.stringToHclTerraform(struct!.targetPath),
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

export class PipelineSpecExternalResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecExternalResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._isFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFolder = this._isFolder;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._sourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePath = this._sourcePath;
    }
    if (this._targetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPath = this._targetPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecExternalResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._isFolder = undefined;
      this._repo = undefined;
      this._revision = undefined;
      this._sourcePath = undefined;
      this._targetPath = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._isFolder = value.isFolder;
      this._repo = value.repo;
      this._revision = value.revision;
      this._sourcePath = value.sourcePath;
      this._targetPath = value.targetPath;
      this._type = value.type;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_folder - computed: false, optional: true, required: false
  private _isFolder?: boolean | cdktf.IResolvable; 
  public get isFolder() {
    return this.getBooleanAttribute('is_folder');
  }
  public set isFolder(value: boolean | cdktf.IResolvable) {
    this._isFolder = value;
  }
  public resetIsFolder() {
    this._isFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFolderInput() {
    return this._isFolder;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // source_path - computed: false, optional: false, required: true
  private _sourcePath?: string; 
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
  public set sourcePath(value: string) {
    this._sourcePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePathInput() {
    return this._sourcePath;
  }

  // target_path - computed: false, optional: false, required: true
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
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
}

export class PipelineSpecExternalResourceList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecExternalResource[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecExternalResourceOutputReference {
    return new PipelineSpecExternalResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#enable_notifications Pipeline#enable_notifications}
  */
  readonly enableNotifications?: boolean | cdktf.IResolvable;
  /**
  * 
  * When build enters 'Pending Approval' state, volume should:
  * 	* Default (attribute not specified): "Use Setting accounts"
  * 	* true: "Remain (build remains active)"
  * 	* false: "Be removed"
  * 										
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#keep_pvcs_for_pending_approval Pipeline#keep_pvcs_for_pending_approval}
  */
  readonly keepPvcsForPendingApproval?: boolean | cdktf.IResolvable;
  /**
  * 
  * Pipeline concurrency policy: Builds on 'Pending Approval' state should be:
  * 	* Default (attribute not specified): "Use Setting accounts"
  * 	* true: "Included in concurrency"
  * 	* false: "Not included in concurrency"
  * 										
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#pending_approval_concurrency_applied Pipeline#pending_approval_concurrency_applied}
  */
  readonly pendingApprovalConcurrencyApplied?: boolean | cdktf.IResolvable;
}

export function pipelineSpecOptionsToTerraform(struct?: PipelineSpecOptionsOutputReference | PipelineSpecOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_notifications: cdktf.booleanToTerraform(struct!.enableNotifications),
    keep_pvcs_for_pending_approval: cdktf.booleanToTerraform(struct!.keepPvcsForPendingApproval),
    pending_approval_concurrency_applied: cdktf.booleanToTerraform(struct!.pendingApprovalConcurrencyApplied),
  }
}


export function pipelineSpecOptionsToHclTerraform(struct?: PipelineSpecOptionsOutputReference | PipelineSpecOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.enableNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_pvcs_for_pending_approval: {
      value: cdktf.booleanToHclTerraform(struct!.keepPvcsForPendingApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pending_approval_concurrency_applied: {
      value: cdktf.booleanToHclTerraform(struct!.pendingApprovalConcurrencyApplied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineSpecOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotifications = this._enableNotifications;
    }
    if (this._keepPvcsForPendingApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepPvcsForPendingApproval = this._keepPvcsForPendingApproval;
    }
    if (this._pendingApprovalConcurrencyApplied !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingApprovalConcurrencyApplied = this._pendingApprovalConcurrencyApplied;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNotifications = undefined;
      this._keepPvcsForPendingApproval = undefined;
      this._pendingApprovalConcurrencyApplied = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNotifications = value.enableNotifications;
      this._keepPvcsForPendingApproval = value.keepPvcsForPendingApproval;
      this._pendingApprovalConcurrencyApplied = value.pendingApprovalConcurrencyApplied;
    }
  }

  // enable_notifications - computed: false, optional: true, required: false
  private _enableNotifications?: boolean | cdktf.IResolvable; 
  public get enableNotifications() {
    return this.getBooleanAttribute('enable_notifications');
  }
  public set enableNotifications(value: boolean | cdktf.IResolvable) {
    this._enableNotifications = value;
  }
  public resetEnableNotifications() {
    this._enableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotificationsInput() {
    return this._enableNotifications;
  }

  // keep_pvcs_for_pending_approval - computed: false, optional: true, required: false
  private _keepPvcsForPendingApproval?: boolean | cdktf.IResolvable; 
  public get keepPvcsForPendingApproval() {
    return this.getBooleanAttribute('keep_pvcs_for_pending_approval');
  }
  public set keepPvcsForPendingApproval(value: boolean | cdktf.IResolvable) {
    this._keepPvcsForPendingApproval = value;
  }
  public resetKeepPvcsForPendingApproval() {
    this._keepPvcsForPendingApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepPvcsForPendingApprovalInput() {
    return this._keepPvcsForPendingApproval;
  }

  // pending_approval_concurrency_applied - computed: false, optional: true, required: false
  private _pendingApprovalConcurrencyApplied?: boolean | cdktf.IResolvable; 
  public get pendingApprovalConcurrencyApplied() {
    return this.getBooleanAttribute('pending_approval_concurrency_applied');
  }
  public set pendingApprovalConcurrencyApplied(value: boolean | cdktf.IResolvable) {
    this._pendingApprovalConcurrencyApplied = value;
  }
  public resetPendingApprovalConcurrencyApplied() {
    this._pendingApprovalConcurrencyApplied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingApprovalConcurrencyAppliedInput() {
    return this._pendingApprovalConcurrencyApplied;
  }
}
export interface PipelineSpecRuntimeEnvironment {
  /**
  * The CPU allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#cpu Pipeline#cpu}
  */
  readonly cpu?: string;
  /**
  * The storage allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#dind_storage Pipeline#dind_storage}
  */
  readonly dindStorage?: string;
  /**
  * The memory allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#memory Pipeline#memory}
  */
  readonly memory?: string;
  /**
  * The name of the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Minimum disk space required for build filesystem ( unit Gi is required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#required_available_storage Pipeline#required_available_storage}
  */
  readonly requiredAvailableStorage?: string;
}

export function pipelineSpecRuntimeEnvironmentToTerraform(struct?: PipelineSpecRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    dind_storage: cdktf.stringToTerraform(struct!.dindStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    required_available_storage: cdktf.stringToTerraform(struct!.requiredAvailableStorage),
  }
}


export function pipelineSpecRuntimeEnvironmentToHclTerraform(struct?: PipelineSpecRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dind_storage: {
      value: cdktf.stringToHclTerraform(struct!.dindStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
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
    required_available_storage: {
      value: cdktf.stringToHclTerraform(struct!.requiredAvailableStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecRuntimeEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecRuntimeEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._dindStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dindStorage = this._dindStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredAvailableStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAvailableStorage = this._requiredAvailableStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecRuntimeEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._dindStorage = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._requiredAvailableStorage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._dindStorage = value.dindStorage;
      this._memory = value.memory;
      this._name = value.name;
      this._requiredAvailableStorage = value.requiredAvailableStorage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // dind_storage - computed: false, optional: true, required: false
  private _dindStorage?: string; 
  public get dindStorage() {
    return this.getStringAttribute('dind_storage');
  }
  public set dindStorage(value: string) {
    this._dindStorage = value;
  }
  public resetDindStorage() {
    this._dindStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindStorageInput() {
    return this._dindStorage;
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

  // required_available_storage - computed: false, optional: true, required: false
  private _requiredAvailableStorage?: string; 
  public get requiredAvailableStorage() {
    return this.getStringAttribute('required_available_storage');
  }
  public set requiredAvailableStorage(value: string) {
    this._requiredAvailableStorage = value;
  }
  public resetRequiredAvailableStorage() {
    this._requiredAvailableStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAvailableStorageInput() {
    return this._requiredAvailableStorage;
  }
}

export class PipelineSpecRuntimeEnvironmentList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecRuntimeEnvironment[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecRuntimeEnvironmentOutputReference {
    return new PipelineSpecRuntimeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecSpecTemplate {
  /**
  * The Codefresh git context (default: `github`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#context Pipeline#context}
  */
  readonly context?: string;
  /**
  * The location of the spec template (default: `git`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#location Pipeline#location}
  */
  readonly location?: string;
  /**
  * The relative path to the Codefresh pipeline file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path: string;
  /**
  * The repository of the spec template (owner/repo).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#repo Pipeline#repo}
  */
  readonly repo: string;
  /**
  * The git revision of the spec template. Possible values: '', *name of branch*. Use '' to autoselect a branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#revision Pipeline#revision}
  */
  readonly revision: string;
}

export function pipelineSpecSpecTemplateToTerraform(struct?: PipelineSpecSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    location: cdktf.stringToTerraform(struct!.location),
    path: cdktf.stringToTerraform(struct!.path),
    repo: cdktf.stringToTerraform(struct!.repo),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function pipelineSpecSpecTemplateToHclTerraform(struct?: PipelineSpecSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecSpecTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._location = undefined;
      this._path = undefined;
      this._repo = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._location = value.location;
      this._path = value.path;
      this._repo = value.repo;
      this._revision = value.revision;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}

export class PipelineSpecSpecTemplateList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecSpecTemplate[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecSpecTemplateOutputReference {
    return new PipelineSpecSpecTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecTerminationPolicyOnCreateBranch {
  /**
  * A regular expression to filter the branches on with the termination policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#branch_name Pipeline#branch_name}
  */
  readonly branchName?: string;
  /**
  * Whether to ignore the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#ignore_branch Pipeline#ignore_branch}
  */
  readonly ignoreBranch?: boolean | cdktf.IResolvable;
  /**
  * Whether to ignore the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#ignore_trigger Pipeline#ignore_trigger}
  */
  readonly ignoreTrigger?: boolean | cdktf.IResolvable;
}

export function pipelineSpecTerminationPolicyOnCreateBranchToTerraform(struct?: PipelineSpecTerminationPolicyOnCreateBranchOutputReference | PipelineSpecTerminationPolicyOnCreateBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    ignore_branch: cdktf.booleanToTerraform(struct!.ignoreBranch),
    ignore_trigger: cdktf.booleanToTerraform(struct!.ignoreTrigger),
  }
}


export function pipelineSpecTerminationPolicyOnCreateBranchToHclTerraform(struct?: PipelineSpecTerminationPolicyOnCreateBranchOutputReference | PipelineSpecTerminationPolicyOnCreateBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_branch: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_trigger: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecTerminationPolicyOnCreateBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineSpecTerminationPolicyOnCreateBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._ignoreBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreBranch = this._ignoreBranch;
    }
    if (this._ignoreTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTrigger = this._ignoreTrigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecTerminationPolicyOnCreateBranch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._ignoreBranch = undefined;
      this._ignoreTrigger = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._ignoreBranch = value.ignoreBranch;
      this._ignoreTrigger = value.ignoreTrigger;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // ignore_branch - computed: false, optional: true, required: false
  private _ignoreBranch?: boolean | cdktf.IResolvable; 
  public get ignoreBranch() {
    return this.getBooleanAttribute('ignore_branch');
  }
  public set ignoreBranch(value: boolean | cdktf.IResolvable) {
    this._ignoreBranch = value;
  }
  public resetIgnoreBranch() {
    this._ignoreBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBranchInput() {
    return this._ignoreBranch;
  }

  // ignore_trigger - computed: false, optional: true, required: false
  private _ignoreTrigger?: boolean | cdktf.IResolvable; 
  public get ignoreTrigger() {
    return this.getBooleanAttribute('ignore_trigger');
  }
  public set ignoreTrigger(value: boolean | cdktf.IResolvable) {
    this._ignoreTrigger = value;
  }
  public resetIgnoreTrigger() {
    this._ignoreTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTriggerInput() {
    return this._ignoreTrigger;
  }
}
export interface PipelineSpecTerminationPolicy {
  /**
  * Enables the policy `Once a build is terminated, terminate all child builds initiated from it`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#on_terminate_annotation Pipeline#on_terminate_annotation}
  */
  readonly onTerminateAnnotation?: boolean | cdktf.IResolvable;
  /**
  * on_create_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#on_create_branch Pipeline#on_create_branch}
  */
  readonly onCreateBranch?: PipelineSpecTerminationPolicyOnCreateBranch;
}

export function pipelineSpecTerminationPolicyToTerraform(struct?: PipelineSpecTerminationPolicyOutputReference | PipelineSpecTerminationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_terminate_annotation: cdktf.booleanToTerraform(struct!.onTerminateAnnotation),
    on_create_branch: pipelineSpecTerminationPolicyOnCreateBranchToTerraform(struct!.onCreateBranch),
  }
}


export function pipelineSpecTerminationPolicyToHclTerraform(struct?: PipelineSpecTerminationPolicyOutputReference | PipelineSpecTerminationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_terminate_annotation: {
      value: cdktf.booleanToHclTerraform(struct!.onTerminateAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_create_branch: {
      value: pipelineSpecTerminationPolicyOnCreateBranchToHclTerraform(struct!.onCreateBranch),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecTerminationPolicyOnCreateBranchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecTerminationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineSpecTerminationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onTerminateAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTerminateAnnotation = this._onTerminateAnnotation;
    }
    if (this._onCreateBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCreateBranch = this._onCreateBranch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecTerminationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onTerminateAnnotation = undefined;
      this._onCreateBranch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onTerminateAnnotation = value.onTerminateAnnotation;
      this._onCreateBranch.internalValue = value.onCreateBranch;
    }
  }

  // on_terminate_annotation - computed: false, optional: true, required: false
  private _onTerminateAnnotation?: boolean | cdktf.IResolvable; 
  public get onTerminateAnnotation() {
    return this.getBooleanAttribute('on_terminate_annotation');
  }
  public set onTerminateAnnotation(value: boolean | cdktf.IResolvable) {
    this._onTerminateAnnotation = value;
  }
  public resetOnTerminateAnnotation() {
    this._onTerminateAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTerminateAnnotationInput() {
    return this._onTerminateAnnotation;
  }

  // on_create_branch - computed: false, optional: true, required: false
  private _onCreateBranch = new PipelineSpecTerminationPolicyOnCreateBranchOutputReference(this, "on_create_branch");
  public get onCreateBranch() {
    return this._onCreateBranch;
  }
  public putOnCreateBranch(value: PipelineSpecTerminationPolicyOnCreateBranch) {
    this._onCreateBranch.internalValue = value;
  }
  public resetOnCreateBranch() {
    this._onCreateBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateBranchInput() {
    return this._onCreateBranch.internalValue;
  }
}
export interface PipelineSpecTriggerOptions {
  /**
  * If false the pipeline will not send notifications to Slack and status updates back to the Git provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#enable_notifications Pipeline#enable_notifications}
  */
  readonly enableNotifications?: boolean | cdktf.IResolvable;
  /**
  * If true, docker layer cache is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#no_cache Pipeline#no_cache}
  */
  readonly noCache?: boolean | cdktf.IResolvable;
  /**
  * If true, extra Codefresh caching is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#no_cf_cache Pipeline#no_cf_cache}
  */
  readonly noCfCache?: boolean | cdktf.IResolvable;
  /**
  * If true, all files on volume will be deleted before each execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#reset_volume Pipeline#reset_volume}
  */
  readonly resetVolume?: boolean | cdktf.IResolvable;
}

export function pipelineSpecTriggerOptionsToTerraform(struct?: PipelineSpecTriggerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_notifications: cdktf.booleanToTerraform(struct!.enableNotifications),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    no_cf_cache: cdktf.booleanToTerraform(struct!.noCfCache),
    reset_volume: cdktf.booleanToTerraform(struct!.resetVolume),
  }
}


export function pipelineSpecTriggerOptionsToHclTerraform(struct?: PipelineSpecTriggerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.enableNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_cf_cache: {
      value: cdktf.booleanToHclTerraform(struct!.noCfCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_volume: {
      value: cdktf.booleanToHclTerraform(struct!.resetVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecTriggerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecTriggerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotifications = this._enableNotifications;
    }
    if (this._noCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCache = this._noCache;
    }
    if (this._noCfCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCfCache = this._noCfCache;
    }
    if (this._resetVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetVolume = this._resetVolume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecTriggerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableNotifications = undefined;
      this._noCache = undefined;
      this._noCfCache = undefined;
      this._resetVolume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableNotifications = value.enableNotifications;
      this._noCache = value.noCache;
      this._noCfCache = value.noCfCache;
      this._resetVolume = value.resetVolume;
    }
  }

  // enable_notifications - computed: false, optional: true, required: false
  private _enableNotifications?: boolean | cdktf.IResolvable; 
  public get enableNotifications() {
    return this.getBooleanAttribute('enable_notifications');
  }
  public set enableNotifications(value: boolean | cdktf.IResolvable) {
    this._enableNotifications = value;
  }
  public resetEnableNotifications() {
    this._enableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotificationsInput() {
    return this._enableNotifications;
  }

  // no_cache - computed: false, optional: true, required: false
  private _noCache?: boolean | cdktf.IResolvable; 
  public get noCache() {
    return this.getBooleanAttribute('no_cache');
  }
  public set noCache(value: boolean | cdktf.IResolvable) {
    this._noCache = value;
  }
  public resetNoCache() {
    this._noCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheInput() {
    return this._noCache;
  }

  // no_cf_cache - computed: false, optional: true, required: false
  private _noCfCache?: boolean | cdktf.IResolvable; 
  public get noCfCache() {
    return this.getBooleanAttribute('no_cf_cache');
  }
  public set noCfCache(value: boolean | cdktf.IResolvable) {
    this._noCfCache = value;
  }
  public resetNoCfCache() {
    this._noCfCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCfCacheInput() {
    return this._noCfCache;
  }

  // reset_volume - computed: false, optional: true, required: false
  private _resetVolume?: boolean | cdktf.IResolvable; 
  public get resetVolume() {
    return this.getBooleanAttribute('reset_volume');
  }
  public set resetVolume(value: boolean | cdktf.IResolvable) {
    this._resetVolume = value;
  }
  public resetResetVolume() {
    this._resetVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetVolumeInput() {
    return this._resetVolume;
  }
}

export class PipelineSpecTriggerOptionsList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecTriggerOptions[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecTriggerOptionsOutputReference {
    return new PipelineSpecTriggerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecTriggerRuntimeEnvironment {
  /**
  * The CPU allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#cpu Pipeline#cpu}
  */
  readonly cpu?: string;
  /**
  * The storage allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#dind_storage Pipeline#dind_storage}
  */
  readonly dindStorage?: string;
  /**
  * The memory allocated to the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#memory Pipeline#memory}
  */
  readonly memory?: string;
  /**
  * The name of the runtime environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * Minimum disk space required for build filesystem ( unit Gi is required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#required_available_storage Pipeline#required_available_storage}
  */
  readonly requiredAvailableStorage?: string;
}

export function pipelineSpecTriggerRuntimeEnvironmentToTerraform(struct?: PipelineSpecTriggerRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    dind_storage: cdktf.stringToTerraform(struct!.dindStorage),
    memory: cdktf.stringToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    required_available_storage: cdktf.stringToTerraform(struct!.requiredAvailableStorage),
  }
}


export function pipelineSpecTriggerRuntimeEnvironmentToHclTerraform(struct?: PipelineSpecTriggerRuntimeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dind_storage: {
      value: cdktf.stringToHclTerraform(struct!.dindStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
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
    required_available_storage: {
      value: cdktf.stringToHclTerraform(struct!.requiredAvailableStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecTriggerRuntimeEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecTriggerRuntimeEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._dindStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dindStorage = this._dindStorage;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requiredAvailableStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAvailableStorage = this._requiredAvailableStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecTriggerRuntimeEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._dindStorage = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._requiredAvailableStorage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._dindStorage = value.dindStorage;
      this._memory = value.memory;
      this._name = value.name;
      this._requiredAvailableStorage = value.requiredAvailableStorage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // dind_storage - computed: false, optional: true, required: false
  private _dindStorage?: string; 
  public get dindStorage() {
    return this.getStringAttribute('dind_storage');
  }
  public set dindStorage(value: string) {
    this._dindStorage = value;
  }
  public resetDindStorage() {
    this._dindStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dindStorageInput() {
    return this._dindStorage;
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

  // required_available_storage - computed: false, optional: true, required: false
  private _requiredAvailableStorage?: string; 
  public get requiredAvailableStorage() {
    return this.getStringAttribute('required_available_storage');
  }
  public set requiredAvailableStorage(value: string) {
    this._requiredAvailableStorage = value;
  }
  public resetRequiredAvailableStorage() {
    this._requiredAvailableStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAvailableStorageInput() {
    return this._requiredAvailableStorage;
  }
}

export class PipelineSpecTriggerRuntimeEnvironmentList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecTriggerRuntimeEnvironment[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecTriggerRuntimeEnvironmentOutputReference {
    return new PipelineSpecTriggerRuntimeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpecTrigger {
  /**
  *  A regular expression and will only trigger for branches that match this naming pattern (default: `/.* /gi`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#branch_regex Pipeline#branch_regex}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly branchRegex?: string;
  /**
  * Flag to manage how the `branch_regex` field is interpreted. Possible values: `multiselect-exclude`, `multiselect`, `regex` (default: `regex`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#branch_regex_input Pipeline#branch_regex_input}
  */
  readonly branchRegexInput?: string;
  /**
  *  A regular expression and will only trigger for pull requests where a comment matches this naming pattern (default: `/.* /gi`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#comment_regex Pipeline#comment_regex}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly commentRegex?: string;
  /**
  * The commit status title pushed to the git provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#commit_status_title Pipeline#commit_status_title}
  */
  readonly commitStatusTitle?: string;
  /**
  * The Codefresh git context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#context Pipeline#context}
  */
  readonly context?: string;
  /**
  * A list of strings representing the contexts ([shared_configuration](https://codefresh.io/docs/docs/configure-ci-cd-pipeline/shared-configuration/)) to be loaded when the trigger is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#contexts Pipeline#contexts}
  */
  readonly contexts?: string[];
  /**
  * The description of the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#description Pipeline#description}
  */
  readonly description?: string;
  /**
  * Flag to disable the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#disabled Pipeline#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Trigger level encrypted variables. Please note that drift will not be detected for encrypted variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#encrypted_variables Pipeline#encrypted_variables}
  */
  readonly encryptedVariables?: { [key: string]: string };
  /**
  * A list of GitHub events for which a Pipeline is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#events Pipeline#events}
  */
  readonly events?: string[];
  /**
  * Allows to constrain the build and trigger it only if the modified files from the commit match this glob expression (default: `""`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#modified_files_glob Pipeline#modified_files_glob}
  */
  readonly modifiedFilesGlob?: string;
  /**
  * The name of the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name?: string;
  /**
  * The git provider tied to the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#provider Pipeline#provider}
  */
  readonly provider?: string;
  /**
  * If this trigger is also applicable to git forks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#pull_request_allow_fork_events Pipeline#pull_request_allow_fork_events}
  */
  readonly pullRequestAllowForkEvents?: boolean | cdktf.IResolvable;
  /**
  * A regular expression and will only trigger for pull requests to branches that match this naming pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#pull_request_target_branch_regex Pipeline#pull_request_target_branch_regex}
  */
  readonly pullRequestTargetBranchRegex?: string;
  /**
  * The repository name, (owner/repo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#repo Pipeline#repo}
  */
  readonly repo?: string;
  /**
  * The type of the trigger (default: `git`; see notes above).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#type Pipeline#type}
  */
  readonly type?: string;
  /**
  * Trigger variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#variables Pipeline#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#options Pipeline#options}
  */
  readonly options?: PipelineSpecTriggerOptions[] | cdktf.IResolvable;
  /**
  * runtime_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#runtime_environment Pipeline#runtime_environment}
  */
  readonly runtimeEnvironment?: PipelineSpecTriggerRuntimeEnvironment[] | cdktf.IResolvable;
}

export function pipelineSpecTriggerToTerraform(struct?: PipelineSpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_regex: cdktf.stringToTerraform(struct!.branchRegex),
    branch_regex_input: cdktf.stringToTerraform(struct!.branchRegexInput),
    comment_regex: cdktf.stringToTerraform(struct!.commentRegex),
    commit_status_title: cdktf.stringToTerraform(struct!.commitStatusTitle),
    context: cdktf.stringToTerraform(struct!.context),
    contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contexts),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    encrypted_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptedVariables),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    modified_files_glob: cdktf.stringToTerraform(struct!.modifiedFilesGlob),
    name: cdktf.stringToTerraform(struct!.name),
    provider: cdktf.stringToTerraform(struct!.provider),
    pull_request_allow_fork_events: cdktf.booleanToTerraform(struct!.pullRequestAllowForkEvents),
    pull_request_target_branch_regex: cdktf.stringToTerraform(struct!.pullRequestTargetBranchRegex),
    repo: cdktf.stringToTerraform(struct!.repo),
    type: cdktf.stringToTerraform(struct!.type),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    options: cdktf.listMapper(pipelineSpecTriggerOptionsToTerraform, true)(struct!.options),
    runtime_environment: cdktf.listMapper(pipelineSpecTriggerRuntimeEnvironmentToTerraform, true)(struct!.runtimeEnvironment),
  }
}


export function pipelineSpecTriggerToHclTerraform(struct?: PipelineSpecTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_regex: {
      value: cdktf.stringToHclTerraform(struct!.branchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_regex_input: {
      value: cdktf.stringToHclTerraform(struct!.branchRegexInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_regex: {
      value: cdktf.stringToHclTerraform(struct!.commentRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_status_title: {
      value: cdktf.stringToHclTerraform(struct!.commitStatusTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contexts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contexts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptedVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modified_files_glob: {
      value: cdktf.stringToHclTerraform(struct!.modifiedFilesGlob),
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_allow_fork_events: {
      value: cdktf.booleanToHclTerraform(struct!.pullRequestAllowForkEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pull_request_target_branch_regex: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestTargetBranchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
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
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.listMapperHcl(pipelineSpecTriggerOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecTriggerOptionsList",
    },
    runtime_environment: {
      value: cdktf.listMapperHcl(pipelineSpecTriggerRuntimeEnvironmentToHclTerraform, true)(struct!.runtimeEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecTriggerRuntimeEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineSpecTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchRegex = this._branchRegex;
    }
    if (this._branchRegexInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchRegexInput = this._branchRegexInput;
    }
    if (this._commentRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentRegex = this._commentRegex;
    }
    if (this._commitStatusTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitStatusTitle = this._commitStatusTitle;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.contexts = this._contexts;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._encryptedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedVariables = this._encryptedVariables;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._modifiedFilesGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedFilesGlob = this._modifiedFilesGlob;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._pullRequestAllowForkEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestAllowForkEvents = this._pullRequestAllowForkEvents;
    }
    if (this._pullRequestTargetBranchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestTargetBranchRegex = this._pullRequestTargetBranchRegex;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._runtimeEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironment = this._runtimeEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpecTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchRegex = undefined;
      this._branchRegexInput = undefined;
      this._commentRegex = undefined;
      this._commitStatusTitle = undefined;
      this._context = undefined;
      this._contexts = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._encryptedVariables = undefined;
      this._events = undefined;
      this._modifiedFilesGlob = undefined;
      this._name = undefined;
      this._provider = undefined;
      this._pullRequestAllowForkEvents = undefined;
      this._pullRequestTargetBranchRegex = undefined;
      this._repo = undefined;
      this._type = undefined;
      this._variables = undefined;
      this._options.internalValue = undefined;
      this._runtimeEnvironment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchRegex = value.branchRegex;
      this._branchRegexInput = value.branchRegexInput;
      this._commentRegex = value.commentRegex;
      this._commitStatusTitle = value.commitStatusTitle;
      this._context = value.context;
      this._contexts = value.contexts;
      this._description = value.description;
      this._disabled = value.disabled;
      this._encryptedVariables = value.encryptedVariables;
      this._events = value.events;
      this._modifiedFilesGlob = value.modifiedFilesGlob;
      this._name = value.name;
      this._provider = value.provider;
      this._pullRequestAllowForkEvents = value.pullRequestAllowForkEvents;
      this._pullRequestTargetBranchRegex = value.pullRequestTargetBranchRegex;
      this._repo = value.repo;
      this._type = value.type;
      this._variables = value.variables;
      this._options.internalValue = value.options;
      this._runtimeEnvironment.internalValue = value.runtimeEnvironment;
    }
  }

  // branch_regex - computed: false, optional: true, required: false
  private _branchRegex?: string; 
  public get branchRegex() {
    return this.getStringAttribute('branch_regex');
  }
  public set branchRegex(value: string) {
    this._branchRegex = value;
  }
  public resetBranchRegex() {
    this._branchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchRegexTfInput() {
    return this._branchRegex;
  }

  // branch_regex_input - computed: false, optional: true, required: false
  private _branchRegexInput?: string; 
  public get branchRegexInput() {
    return this.getStringAttribute('branch_regex_input');
  }
  public set branchRegexInput(value: string) {
    this._branchRegexInput = value;
  }
  public resetBranchRegexInput() {
    this._branchRegexInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchRegexInputInput() {
    return this._branchRegexInput;
  }

  // comment_regex - computed: false, optional: true, required: false
  private _commentRegex?: string; 
  public get commentRegex() {
    return this.getStringAttribute('comment_regex');
  }
  public set commentRegex(value: string) {
    this._commentRegex = value;
  }
  public resetCommentRegex() {
    this._commentRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentRegexInput() {
    return this._commentRegex;
  }

  // commit_status_title - computed: false, optional: true, required: false
  private _commitStatusTitle?: string; 
  public get commitStatusTitle() {
    return this.getStringAttribute('commit_status_title');
  }
  public set commitStatusTitle(value: string) {
    this._commitStatusTitle = value;
  }
  public resetCommitStatusTitle() {
    this._commitStatusTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitStatusTitleInput() {
    return this._commitStatusTitle;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts?: string[]; 
  public get contexts() {
    return this.getListAttribute('contexts');
  }
  public set contexts(value: string[]) {
    this._contexts = value;
  }
  public resetContexts() {
    this._contexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // encrypted_variables - computed: false, optional: true, required: false
  private _encryptedVariables?: { [key: string]: string }; 
  public get encryptedVariables() {
    return this.getStringMapAttribute('encrypted_variables');
  }
  public set encryptedVariables(value: { [key: string]: string }) {
    this._encryptedVariables = value;
  }
  public resetEncryptedVariables() {
    this._encryptedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedVariablesInput() {
    return this._encryptedVariables;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // modified_files_glob - computed: false, optional: true, required: false
  private _modifiedFilesGlob?: string; 
  public get modifiedFilesGlob() {
    return this.getStringAttribute('modified_files_glob');
  }
  public set modifiedFilesGlob(value: string) {
    this._modifiedFilesGlob = value;
  }
  public resetModifiedFilesGlob() {
    this._modifiedFilesGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedFilesGlobInput() {
    return this._modifiedFilesGlob;
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // pull_request_allow_fork_events - computed: false, optional: true, required: false
  private _pullRequestAllowForkEvents?: boolean | cdktf.IResolvable; 
  public get pullRequestAllowForkEvents() {
    return this.getBooleanAttribute('pull_request_allow_fork_events');
  }
  public set pullRequestAllowForkEvents(value: boolean | cdktf.IResolvable) {
    this._pullRequestAllowForkEvents = value;
  }
  public resetPullRequestAllowForkEvents() {
    this._pullRequestAllowForkEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestAllowForkEventsInput() {
    return this._pullRequestAllowForkEvents;
  }

  // pull_request_target_branch_regex - computed: false, optional: true, required: false
  private _pullRequestTargetBranchRegex?: string; 
  public get pullRequestTargetBranchRegex() {
    return this.getStringAttribute('pull_request_target_branch_regex');
  }
  public set pullRequestTargetBranchRegex(value: string) {
    this._pullRequestTargetBranchRegex = value;
  }
  public resetPullRequestTargetBranchRegex() {
    this._pullRequestTargetBranchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestTargetBranchRegexInput() {
    return this._pullRequestTargetBranchRegex;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // options - computed: false, optional: true, required: false
  private _options = new PipelineSpecTriggerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: PipelineSpecTriggerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // runtime_environment - computed: false, optional: true, required: false
  private _runtimeEnvironment = new PipelineSpecTriggerRuntimeEnvironmentList(this, "runtime_environment", false);
  public get runtimeEnvironment() {
    return this._runtimeEnvironment;
  }
  public putRuntimeEnvironment(value: PipelineSpecTriggerRuntimeEnvironment[] | cdktf.IResolvable) {
    this._runtimeEnvironment.internalValue = value;
  }
  public resetRuntimeEnvironment() {
    this._runtimeEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment.internalValue;
  }
}

export class PipelineSpecTriggerList extends cdktf.ComplexList {
  public internalValue? : PipelineSpecTrigger[] | cdktf.IResolvable

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
  public get(index: number): PipelineSpecTriggerOutputReference {
    return new PipelineSpecTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineSpec {
  /**
  * The maximum amount of concurrent builds that may run for each branch. Zero is unlimited (default: `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#branch_concurrency Pipeline#branch_concurrency}
  */
  readonly branchConcurrency?: number;
  /**
  * The maximum amount of concurrent builds. Zero is unlimited (default: `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#concurrency Pipeline#concurrency}
  */
  readonly concurrency?: number;
  /**
  * A list of strings representing the contexts ([shared_configuration](https://codefresh.io/docs/docs/configure-ci-cd-pipeline/shared-configuration/)) to be configured for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#contexts Pipeline#contexts}
  */
  readonly contexts?: string[];
  /**
  * Pipeline level encrypted variables. Please note that drift will not be detected for encrypted variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#encrypted_variables Pipeline#encrypted_variables}
  */
  readonly encryptedVariables?: { [key: string]: string };
  /**
  * SAAS pack (`5cd1746617313f468d669013` for Small; `5cd1746717313f468d669014` for Medium; `5cd1746817313f468d669015` for Large; `5cd1746817313f468d669017` for XL; `5cd1746817313f468d669018` for XXL); `5cd1746817313f468d669020` for 4XL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#pack_id Pipeline#pack_id}
  */
  readonly packId?: string;
  /**
  * Defines whether it is permitted to restart builds in this pipeline from failed step (default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#permit_restart_from_failed_steps Pipeline#permit_restart_from_failed_steps}
  */
  readonly permitRestartFromFailedSteps?: boolean | cdktf.IResolvable;
  /**
  * Defines whether `permit_restart_from_failed_steps` should be set to “Use account settings” (default: `false`). If set, `permit_restart_from_failed_steps` will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#permit_restart_from_failed_steps_use_account_settings Pipeline#permit_restart_from_failed_steps_use_account_settings}
  */
  readonly permitRestartFromFailedStepsUseAccountSettings?: boolean | cdktf.IResolvable;
  /**
  * Helps to organize the order of builds execution in case of reaching the concurrency limit (default: `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#priority Pipeline#priority}
  */
  readonly priority?: number;
  /**
  *  Minimum disk space required for build filesystem ( unit Gi is required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#required_available_storage Pipeline#required_available_storage}
  */
  readonly requiredAvailableStorage?: string;
  /**
  * The maximum amount of concurrent builds that may run for each trigger (default: `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#trigger_concurrency Pipeline#trigger_concurrency}
  */
  readonly triggerConcurrency?: number;
  /**
  * The pipeline's variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#variables Pipeline#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * cron_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#cron_trigger Pipeline#cron_trigger}
  */
  readonly cronTrigger?: PipelineSpecCronTrigger[] | cdktf.IResolvable;
  /**
  * external_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#external_resource Pipeline#external_resource}
  */
  readonly externalResource?: PipelineSpecExternalResource[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#options Pipeline#options}
  */
  readonly options?: PipelineSpecOptions;
  /**
  * runtime_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#runtime_environment Pipeline#runtime_environment}
  */
  readonly runtimeEnvironment?: PipelineSpecRuntimeEnvironment[] | cdktf.IResolvable;
  /**
  * spec_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#spec_template Pipeline#spec_template}
  */
  readonly specTemplate?: PipelineSpecSpecTemplate[] | cdktf.IResolvable;
  /**
  * termination_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#termination_policy Pipeline#termination_policy}
  */
  readonly terminationPolicy?: PipelineSpecTerminationPolicy;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#trigger Pipeline#trigger}
  */
  readonly trigger?: PipelineSpecTrigger[] | cdktf.IResolvable;
}

export function pipelineSpecToTerraform(struct?: PipelineSpecOutputReference | PipelineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_concurrency: cdktf.numberToTerraform(struct!.branchConcurrency),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contexts),
    encrypted_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptedVariables),
    pack_id: cdktf.stringToTerraform(struct!.packId),
    permit_restart_from_failed_steps: cdktf.booleanToTerraform(struct!.permitRestartFromFailedSteps),
    permit_restart_from_failed_steps_use_account_settings: cdktf.booleanToTerraform(struct!.permitRestartFromFailedStepsUseAccountSettings),
    priority: cdktf.numberToTerraform(struct!.priority),
    required_available_storage: cdktf.stringToTerraform(struct!.requiredAvailableStorage),
    trigger_concurrency: cdktf.numberToTerraform(struct!.triggerConcurrency),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
    cron_trigger: cdktf.listMapper(pipelineSpecCronTriggerToTerraform, true)(struct!.cronTrigger),
    external_resource: cdktf.listMapper(pipelineSpecExternalResourceToTerraform, true)(struct!.externalResource),
    options: pipelineSpecOptionsToTerraform(struct!.options),
    runtime_environment: cdktf.listMapper(pipelineSpecRuntimeEnvironmentToTerraform, true)(struct!.runtimeEnvironment),
    spec_template: cdktf.listMapper(pipelineSpecSpecTemplateToTerraform, true)(struct!.specTemplate),
    termination_policy: pipelineSpecTerminationPolicyToTerraform(struct!.terminationPolicy),
    trigger: cdktf.listMapper(pipelineSpecTriggerToTerraform, true)(struct!.trigger),
  }
}


export function pipelineSpecToHclTerraform(struct?: PipelineSpecOutputReference | PipelineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.branchConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    contexts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contexts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encrypted_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptedVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pack_id: {
      value: cdktf.stringToHclTerraform(struct!.packId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_restart_from_failed_steps: {
      value: cdktf.booleanToHclTerraform(struct!.permitRestartFromFailedSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_restart_from_failed_steps_use_account_settings: {
      value: cdktf.booleanToHclTerraform(struct!.permitRestartFromFailedStepsUseAccountSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_available_storage: {
      value: cdktf.stringToHclTerraform(struct!.requiredAvailableStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.triggerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cron_trigger: {
      value: cdktf.listMapperHcl(pipelineSpecCronTriggerToHclTerraform, true)(struct!.cronTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecCronTriggerList",
    },
    external_resource: {
      value: cdktf.listMapperHcl(pipelineSpecExternalResourceToHclTerraform, true)(struct!.externalResource),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecExternalResourceList",
    },
    options: {
      value: pipelineSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecOptionsList",
    },
    runtime_environment: {
      value: cdktf.listMapperHcl(pipelineSpecRuntimeEnvironmentToHclTerraform, true)(struct!.runtimeEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecRuntimeEnvironmentList",
    },
    spec_template: {
      value: cdktf.listMapperHcl(pipelineSpecSpecTemplateToHclTerraform, true)(struct!.specTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecSpecTemplateList",
    },
    termination_policy: {
      value: pipelineSpecTerminationPolicyToHclTerraform(struct!.terminationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecTerminationPolicyList",
    },
    trigger: {
      value: cdktf.listMapperHcl(pipelineSpecTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineSpecTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PipelineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchConcurrency = this._branchConcurrency;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._contexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.contexts = this._contexts;
    }
    if (this._encryptedVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedVariables = this._encryptedVariables;
    }
    if (this._packId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packId = this._packId;
    }
    if (this._permitRestartFromFailedSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitRestartFromFailedSteps = this._permitRestartFromFailedSteps;
    }
    if (this._permitRestartFromFailedStepsUseAccountSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitRestartFromFailedStepsUseAccountSettings = this._permitRestartFromFailedStepsUseAccountSettings;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._requiredAvailableStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAvailableStorage = this._requiredAvailableStorage;
    }
    if (this._triggerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerConcurrency = this._triggerConcurrency;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    if (this._cronTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronTrigger = this._cronTrigger?.internalValue;
    }
    if (this._externalResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResource = this._externalResource?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._runtimeEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironment = this._runtimeEnvironment?.internalValue;
    }
    if (this._specTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specTemplate = this._specTemplate?.internalValue;
    }
    if (this._terminationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationPolicy = this._terminationPolicy?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchConcurrency = undefined;
      this._concurrency = undefined;
      this._contexts = undefined;
      this._encryptedVariables = undefined;
      this._packId = undefined;
      this._permitRestartFromFailedSteps = undefined;
      this._permitRestartFromFailedStepsUseAccountSettings = undefined;
      this._priority = undefined;
      this._requiredAvailableStorage = undefined;
      this._triggerConcurrency = undefined;
      this._variables = undefined;
      this._cronTrigger.internalValue = undefined;
      this._externalResource.internalValue = undefined;
      this._options.internalValue = undefined;
      this._runtimeEnvironment.internalValue = undefined;
      this._specTemplate.internalValue = undefined;
      this._terminationPolicy.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchConcurrency = value.branchConcurrency;
      this._concurrency = value.concurrency;
      this._contexts = value.contexts;
      this._encryptedVariables = value.encryptedVariables;
      this._packId = value.packId;
      this._permitRestartFromFailedSteps = value.permitRestartFromFailedSteps;
      this._permitRestartFromFailedStepsUseAccountSettings = value.permitRestartFromFailedStepsUseAccountSettings;
      this._priority = value.priority;
      this._requiredAvailableStorage = value.requiredAvailableStorage;
      this._triggerConcurrency = value.triggerConcurrency;
      this._variables = value.variables;
      this._cronTrigger.internalValue = value.cronTrigger;
      this._externalResource.internalValue = value.externalResource;
      this._options.internalValue = value.options;
      this._runtimeEnvironment.internalValue = value.runtimeEnvironment;
      this._specTemplate.internalValue = value.specTemplate;
      this._terminationPolicy.internalValue = value.terminationPolicy;
      this._trigger.internalValue = value.trigger;
    }
  }

  // branch_concurrency - computed: false, optional: true, required: false
  private _branchConcurrency?: number; 
  public get branchConcurrency() {
    return this.getNumberAttribute('branch_concurrency');
  }
  public set branchConcurrency(value: number) {
    this._branchConcurrency = value;
  }
  public resetBranchConcurrency() {
    this._branchConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchConcurrencyInput() {
    return this._branchConcurrency;
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

  // contexts - computed: false, optional: true, required: false
  private _contexts?: string[]; 
  public get contexts() {
    return this.getListAttribute('contexts');
  }
  public set contexts(value: string[]) {
    this._contexts = value;
  }
  public resetContexts() {
    this._contexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts;
  }

  // encrypted_variables - computed: false, optional: true, required: false
  private _encryptedVariables?: { [key: string]: string }; 
  public get encryptedVariables() {
    return this.getStringMapAttribute('encrypted_variables');
  }
  public set encryptedVariables(value: { [key: string]: string }) {
    this._encryptedVariables = value;
  }
  public resetEncryptedVariables() {
    this._encryptedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedVariablesInput() {
    return this._encryptedVariables;
  }

  // pack_id - computed: false, optional: true, required: false
  private _packId?: string; 
  public get packId() {
    return this.getStringAttribute('pack_id');
  }
  public set packId(value: string) {
    this._packId = value;
  }
  public resetPackId() {
    this._packId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packIdInput() {
    return this._packId;
  }

  // permit_restart_from_failed_steps - computed: false, optional: true, required: false
  private _permitRestartFromFailedSteps?: boolean | cdktf.IResolvable; 
  public get permitRestartFromFailedSteps() {
    return this.getBooleanAttribute('permit_restart_from_failed_steps');
  }
  public set permitRestartFromFailedSteps(value: boolean | cdktf.IResolvable) {
    this._permitRestartFromFailedSteps = value;
  }
  public resetPermitRestartFromFailedSteps() {
    this._permitRestartFromFailedSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRestartFromFailedStepsInput() {
    return this._permitRestartFromFailedSteps;
  }

  // permit_restart_from_failed_steps_use_account_settings - computed: false, optional: true, required: false
  private _permitRestartFromFailedStepsUseAccountSettings?: boolean | cdktf.IResolvable; 
  public get permitRestartFromFailedStepsUseAccountSettings() {
    return this.getBooleanAttribute('permit_restart_from_failed_steps_use_account_settings');
  }
  public set permitRestartFromFailedStepsUseAccountSettings(value: boolean | cdktf.IResolvable) {
    this._permitRestartFromFailedStepsUseAccountSettings = value;
  }
  public resetPermitRestartFromFailedStepsUseAccountSettings() {
    this._permitRestartFromFailedStepsUseAccountSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRestartFromFailedStepsUseAccountSettingsInput() {
    return this._permitRestartFromFailedStepsUseAccountSettings;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // required_available_storage - computed: false, optional: true, required: false
  private _requiredAvailableStorage?: string; 
  public get requiredAvailableStorage() {
    return this.getStringAttribute('required_available_storage');
  }
  public set requiredAvailableStorage(value: string) {
    this._requiredAvailableStorage = value;
  }
  public resetRequiredAvailableStorage() {
    this._requiredAvailableStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAvailableStorageInput() {
    return this._requiredAvailableStorage;
  }

  // trigger_concurrency - computed: false, optional: true, required: false
  private _triggerConcurrency?: number; 
  public get triggerConcurrency() {
    return this.getNumberAttribute('trigger_concurrency');
  }
  public set triggerConcurrency(value: number) {
    this._triggerConcurrency = value;
  }
  public resetTriggerConcurrency() {
    this._triggerConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConcurrencyInput() {
    return this._triggerConcurrency;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // cron_trigger - computed: false, optional: true, required: false
  private _cronTrigger = new PipelineSpecCronTriggerList(this, "cron_trigger", false);
  public get cronTrigger() {
    return this._cronTrigger;
  }
  public putCronTrigger(value: PipelineSpecCronTrigger[] | cdktf.IResolvable) {
    this._cronTrigger.internalValue = value;
  }
  public resetCronTrigger() {
    this._cronTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTriggerInput() {
    return this._cronTrigger.internalValue;
  }

  // external_resource - computed: false, optional: true, required: false
  private _externalResource = new PipelineSpecExternalResourceList(this, "external_resource", false);
  public get externalResource() {
    return this._externalResource;
  }
  public putExternalResource(value: PipelineSpecExternalResource[] | cdktf.IResolvable) {
    this._externalResource.internalValue = value;
  }
  public resetExternalResource() {
    this._externalResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourceInput() {
    return this._externalResource.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new PipelineSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: PipelineSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // runtime_environment - computed: false, optional: true, required: false
  private _runtimeEnvironment = new PipelineSpecRuntimeEnvironmentList(this, "runtime_environment", false);
  public get runtimeEnvironment() {
    return this._runtimeEnvironment;
  }
  public putRuntimeEnvironment(value: PipelineSpecRuntimeEnvironment[] | cdktf.IResolvable) {
    this._runtimeEnvironment.internalValue = value;
  }
  public resetRuntimeEnvironment() {
    this._runtimeEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentInput() {
    return this._runtimeEnvironment.internalValue;
  }

  // spec_template - computed: false, optional: true, required: false
  private _specTemplate = new PipelineSpecSpecTemplateList(this, "spec_template", false);
  public get specTemplate() {
    return this._specTemplate;
  }
  public putSpecTemplate(value: PipelineSpecSpecTemplate[] | cdktf.IResolvable) {
    this._specTemplate.internalValue = value;
  }
  public resetSpecTemplate() {
    this._specTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTemplateInput() {
    return this._specTemplate.internalValue;
  }

  // termination_policy - computed: false, optional: true, required: false
  private _terminationPolicy = new PipelineSpecTerminationPolicyOutputReference(this, "termination_policy");
  public get terminationPolicy() {
    return this._terminationPolicy;
  }
  public putTerminationPolicy(value: PipelineSpecTerminationPolicy) {
    this._terminationPolicy.internalValue = value;
  }
  public resetTerminationPolicy() {
    this._terminationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPolicyInput() {
    return this._terminationPolicy.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new PipelineSpecTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: PipelineSpecTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline codefresh_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.1.0/docs/resources/pipeline codefresh_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'codefresh_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._originalYamlString = config.originalYamlString;
    this._tags = config.tags;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
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

  // original_yaml_string - computed: false, optional: true, required: false
  private _originalYamlString?: string; 
  public get originalYamlString() {
    return this.getStringAttribute('original_yaml_string');
  }
  public set originalYamlString(value: string) {
    this._originalYamlString = value;
  }
  public resetOriginalYamlString() {
    this._originalYamlString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalYamlStringInput() {
    return this._originalYamlString;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new PipelineSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PipelineSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      original_yaml_string: cdktf.stringToTerraform(this._originalYamlString),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      spec: pipelineSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
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
      original_yaml_string: {
        value: cdktf.stringToHclTerraform(this._originalYamlString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spec: {
        value: pipelineSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PipelineSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
